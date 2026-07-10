---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENGENERIC_PROGR_GUIDL.html"
abapFile: "ABENGENERIC_PROGR_GUIDL.html"
type: "abap-reference"
---

## Background

Dynamic programming (dynamic creation of source code) makes programs as dynamic as possible. The following methods can be used to achieve this:

-   **Dynamic token specification**
-   Dynamic token specification involves specifying individual operands or whole parts of statements (clauses) in the form of character-like data objects. These are usually enclosed in parentheses and must contain source code with correct syntax at runtime. Important examples:

-   Dynamic access to attributes of classes
-   Dynamic calls of procedures, particularly methods (known as dynamic invokes)
-   Dynamic type specifications when anonymous data objects are created. In this case, types can be used that are only created at runtime using Runtime Type Services ([RTTS](ABENRTTI.md)).
-   Dynamic specifications of clauses when internal tables are accessed or in ABAP SQL.
-   Dynamic token specifications are often used in combination with [dynamic access to data objects](ABENDYN_ACCESS_DATA_OBJ_GUIDL.md).

-   **Program generation**
-   Program generation involves preparing complete programs as content for internal tables and then creating the programs. A distinction is made between the following cases:

-   Transient program generation using `GENERATE SUBROUTINE POOL`, where the generated programs only exist in the [internal session](ABENINTERNAL_SESSION_GLOSRY.md) of the current program.
-   Persistent program generation with `INSERT REPORT`. The generated programs are saved as repository objects.

## Rule

**Avoiding Program Generation**

Program generation should only be used as a last resort for dynamic programming. Other dynamic methods (especially in application programs) should be tried first, such as dynamic token specification, runtime type services (RTTS) and dynamic access to data objects.

## Details

Program generation has a lot of conceptual problems such as checking, testing, and editing the new programs. In addition, programs generated hastily can be a security risk because they cannot be statically checked. Creating programs is usually very intensive in terms of runtime and resources. Due to the above reasons, program generation should be avoided wherever possible and other dynamic methods used instead:

-   The dynamic token specification has the advantage that only parts of the statements are dynamic. The rest can be checked statically.
-   Runtime type services (RTTS) can be used as follows:

-   RTTS define the type properties of data objects at runtime (Runtime Type Information, RTTI). The capabilities of RTTI extend far beyond the statement `DESCRIBE FIELD`.
-   It creates types at runtime (Runtime Type Creation, RTTC). RTTC should be used if the `CREATE DATA` statement does not offer sufficient options for the planned implementation (for example, building new structures).

These methods, combined with [field symbols and data references](ABENDYN_ACCESS_DATA_OBJ_GUIDL.md), are now usually sufficient for most tasks that could only be solved using program generation in older releases.

## Use

Program generation should only be used as a last resort if the other methods are not sufficient to achieve dynamic program control. Another reason is the processing speed. When program generation is used, the costs incurred due to checking and generation occur less frequently than with the other dynamic methods. However, program generation usually has worse system performance than dynamic token specification. The conceptual problems explained at the start are still applicable here and therefore careful consideration is needed.

Unlike application programs, system programs usually frequently rely on program generation and the associated language constructs. Examples include the generation of proxy classes for Web Dynpro or Web Services. ABAP Editor itself also uses statements such as `READ REPORT` and `INSERT REPORT`.

## Hints

-   Even generated programs should always adhere to the predefined guidelines. For example, in a generated subroutine pool the program logic should be implemented/generated in the form of [local classes](ABENABAP_OBJ_PROGR_MODEL_GUIDL.md). The generated functions are usually called by means of a single [subroutine](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md) that is used as an entry point into the generated local classes (see the following example).
-   To minimize the risks involved, it can be useful to save templates with correct syntax that adhere to the guidelines in the repository. `READ REPORT` can then be used to load the templates as templates for dynamically generated programs, in which only small parts are changed or added at runtime.
-   Subroutines in generated subroutine pools are an exception to the [rule](ABENABAP_OBJ_PROGR_MODEL_GUIDL.md), which states that subroutines should no longer be created, and an exception to the [rule](ABENINTERN_EXTERN_PROC_CALL_GUIDL.md), which states that subroutines should no longer be called. In addition, absolute type names can be used to access the local classes of a generated subroutine pool. However, this violates the rule [Only call suitable procedures externally](ABENINTERN_EXTERN_PROC_CALL_GUIDL.md).

## Bad Example

The following source code demonstrates unnecessary program generation. The only reason for generating the program are dynamic reads on a database table. The name of the database table and the row type of the internal table into which data is read are replaced by a parameter value in the source code of the program to be generated. The value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.md) is used to create the internal table. As recommended, the subroutine of the generated subroutine pool only contains the call for a method of a local class where the actual implementation is located. Instead of filling the program table row by row, it would have also been possible in this case to create a corresponding program in the repository and load this program using `READ REPORT`.

```
PARAMETERS dbtab TYPE c LENGTH 16.DATA table TYPE REF TO data. 
FIELD-SYMBOLS  TYPE STANDARD TABLE.DATA: source TYPE TABLE OF string, 
      program TYPE string, 
      mess TYPE string.source = VALUE #( 
  ( `program.` ) 
  ( `class main definition.` ) 
  ( `   public section.` ) 
  ( `     class-data` ) 
  ( `       dyn_table type standard table of dyn_name.` ) 
  ( `     class-methods meth` ) 
  ( `       exporting table type ref to data.` ) 
  ( `endclass.` ) 
  ( `class main implementation.` ) 
  ( `   method meth.` ) 
  ( `     select *` ) 
  ( `            from dyn_name` ) 
  ( `            into table @dyn_table.` ) 
  ( `     get reference of dyn_table into table.` ) 
  ( `   endmethod.` ) 
  ( `endclass.` ) 
  ( `form subr changing table type ref to data.` ) 
  ( `   main=>meth(` ) 
  ( ` importing table = table ).` ) 
  ( `endform.` ) ).REPLACE ALL OCCURRENCES OF 'dyn_name' 
        IN TABLE source WITH dbtab. 
GENERATE SUBROUTINE POOL source NAME program MESSAGE mess. 
IF sy-subrc = 0. 
   PERFORM subr IN PROGRAM (program) CHANGING table. 
   IF table IS BOUND. 
     ASSIGN table->* TO . 
   ENDIF. 
ELSE. 
   ...ENDIF.Good ExampleThe following source code produces the same result as the example above, when executed successfully. In other words, the field symbol <table> points to an internal table that is filled with data from the dynamically specified database table. However, this task is performed much more efficiently in the example below due to the creation of an anonymous data object and a dynamically specified token. If the target table cannot be structured in exactly the same way as the database table, Runtime Type Creation (RTTC) must also be used.
PARAMETERS dbtab TYPE c LENGTH 20. 
DATA table TYPE REF TO data. 
FIELD-SYMBOLS 
 TYPE STANDARD TABLE.TRY. 
   CREATE DATA table TYPE TABLE OF (dbtab). 
   ASSIGN table->* TO . 
   SELECT * 
         FROM (dbtab) 
         INTO TABLE @. 
  CATCH cx_sy_create_data_error cx_sy_dynamic_osql_error. 
  ... 
ENDTRY.

```
