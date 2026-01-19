---
title: "ABENGENERIC_PROGR_GUIDL"
description: |
  ABENGENERIC_PROGR_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENGENERIC_PROGR_GUIDL.htm"
abapFile: "ABENGENERIC_PROGR_GUIDL.html"
keywords: ["select", "insert", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "ABENGENERIC", "PROGR", "GUIDL"]
---

Dynamic programming (dynamic creation of source code) makes programs as dynamic as possible. The following methods can be used to achieve this:

**Avoiding Program Generation**

Program generation should only be used as a last resort for dynamic programming. Other dynamic methods (especially in application programs) should be tried first, such as dynamic token specification, runtime type services (RTTS) and dynamic access to data objects.

Program generation has a lot of conceptual problems such as checking, testing, and editing the new programs. In addition, programs generated hastily can be a security risk because they cannot be statically checked. Creating programs is usually very intensive in terms of runtime and resources. Due to the above reasons, program generation should be avoided wherever possible and other dynamic methods used instead:

These methods, combined with [field symbols and data references](ABENDYN_ACCESS_DATA_OBJ_GUIDL.html), are now usually sufficient for most tasks that could only be solved using program generation in older releases.

Program generation should only be used as a last resort if the other methods are not sufficient to achieve dynamic program control. Another reason is the processing speed. When program generation is used, the costs incurred due to checking and generation occur less frequently than with the other dynamic methods. However, program generation usually has worse system performance than dynamic token specification. The conceptual problems explained at the start are still applicable here and therefore careful consideration is needed.

Unlike application programs, system programs usually frequently rely on program generation and the associated language constructs. Examples include the generation of proxy classes for Web Dynpro or Web Services. ABAP Editor itself also uses statements such as `READ REPORT` and `INSERT REPORT`.

The following source code demonstrates unnecessary program generation. The only reason for generating the program are dynamic reads on a database table. The name of the database table and the row type of the internal table into which data is read are replaced by a parameter value in the source code of the program to be generated. The value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) is used to create the internal table. As recommended, the subroutine of the generated subroutine pool only contains the call for a method of a local class where the actual implementation is located. Instead of filling the program table row by row, it would have also been possible in this case to create a corresponding program in the repository and load this program using `READ REPORT`.

The following source code produces the same result as the example above, when executed successfully. In other words, the field symbol `<table>` points to an internal table that is filled with data from the dynamically specified database table. However, this task is performed much more efficiently in the example below due to the creation of an anonymous data object and a dynamically specified token. If the target table cannot be structured in exactly the same way as the database table, Runtime Type Creation (RTTC) must also be used.

-   **Dynamic token specification**
-   Dynamic token specification involves specifying individual operands or whole parts of statements (clauses) in the form of character-like data objects. These are usually enclosed in parentheses and must contain source code with correct syntax at runtime. Important examples:

-   Dynamic access to attributes of classes
-   Dynamic calls of procedures, particularly methods (known as dynamic invokes)
-   Dynamic type specifications when anonymous data objects are created. In this case, types can be used that are only created at runtime using Runtime Type Services ([RTTS](ABENRTTI.html)).
-   Dynamic specifications of clauses when internal tables are accessed or in ABAP SQL.
-   Dynamic token specifications are often used in combination with [dynamic access to data objects](ABENDYN_ACCESS_DATA_OBJ_GUIDL.html).

-   **Program generation**
-   Program generation involves preparing complete programs as content for internal tables and then creating the programs. A distinction is made between the following cases:

-   Transient program generation using `GENERATE SUBROUTINE POOL`, where the generated programs only exist in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of the current program.
-   Persistent program generation with `INSERT REPORT`. The generated programs are saved as repository objects.

-   The dynamic token specification has the advantage that only parts of the statements are dynamic. The rest can be checked statically.
-   Runtime type services (RTTS) can be used as follows:

-   RTTS define the type properties of data objects at runtime (Runtime Type Information, RTTI). The capabilities of RTTI extend far beyond the statement `DESCRIBE FIELD`.
-   It creates types at runtime (Runtime Type Creation, RTTC). RTTC should be used if the `CREATE DATA` statement does not offer sufficient options for the planned implementation (for example, building new structures).

-   Even generated programs should always adhere to the predefined guidelines. For example, in a generated subroutine pool the program logic should be implemented/generated in the form of [local classes](ABENABAP_OBJ_PROGR_MODEL_GUIDL.html). The generated functions are usually called by means of a single [subroutine](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html) that is used as an entry point into the generated local classes (see the following example).
-   To minimize the risks involved, it can be useful to save templates with correct syntax that adhere to the guidelines in the repository. `READ REPORT` can then be used to load the templates as templates for dynamically generated programs, in which only small parts are changed or added at runtime.
-   Subroutines in generated subroutine pools are an exception to the [rule](ABENABAP_OBJ_PROGR_MODEL_GUIDL.html), which states that subroutines should no longer be created, and an exception to the [rule](ABENINTERN_EXTERN_PROC_CALL_GUIDL.html), which states that subroutines should no longer be called. In addition, absolute type names can be used to access the local classes of a generated subroutine pool. However, this violates the rule [Only call suitable procedures externally](ABENINTERN_EXTERN_PROC_CALL_GUIDL.html).

PARAMETERS dbtab TYPE c LENGTH 16.DATA table TYPE REF TO data. \\nFIELD-SYMBOLS TYPE STANDARD TABLE.DATA: source TYPE TABLE OF string, \\n program TYPE string, \\n mess TYPE string.source = VALUE #( \\n ( \`program.\` ) \\n ( \`class main definition.\` ) \\n ( \` public section.\` ) \\n ( \` class-data\` ) \\n ( \` dyn\_table type standard table of dyn\_name.\` ) \\n ( \` class-methods meth\` ) \\n ( \` exporting table type ref to data.\` ) \\n ( \`endclass.\` ) \\n ( \`class main implementation.\` ) \\n ( \` method meth.\` ) \\n ( \` select \*\` ) \\n ( \` from dyn\_name\` ) \\n ( \` into table @dyn\_table.\` ) \\n ( \` get reference of dyn\_table into table.\` ) \\n ( \` endmethod.\` ) \\n ( \`endclass.\` ) \\n ( \`form subr changing table type ref to data.\` ) \\n ( \` main=>meth(\` ) \\n ( \` importing table = table ).\` ) \\n ( \`endform.\` ) ).REPLACE ALL OCCURRENCES OF 'dyn\_name' \\n IN TABLE source WITH dbtab. \\nGENERATE SUBROUTINE POOL source NAME program MESSAGE mess. \\nIF sy-subrc = 0. \\n PERFORM subr IN PROGRAM (program) CHANGING table. \\n IF table IS BOUND. \\n ASSIGN table->\* TO

. \\n ENDIF. \\nELSE. \\n ...ENDIF. PARAMETERS dbtab TYPE c LENGTH 20. \\nDATA table TYPE REF TO data. \\nFIELD-SYMBOLS

TYPE STANDARD TABLE.TRY. \\n CREATE DATA table TYPE TABLE OF (dbtab). \\n ASSIGN table->\* TO

. \\n SELECT \* \\n FROM (dbtab) \\n INTO TABLE @

. \\n CATCH cx\_sy\_create\_data\_error cx\_sy\_dynamic\_osql\_error. \\n ... \\nENDTRY. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abendynamic\_prog\_technique\_gdl.html