---
title: "ABAPCALL_METHOD_PARAMETER_TABLES"
description: |
  ABAPCALL_METHOD_PARAMETER_TABLES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_METHOD_PARAMETER_TABLES.htm"
abapFile: "ABAPCALL_METHOD_PARAMETER_TABLES.html"
keywords: ["select", "do", "if", "case", "catch", "method", "class", "data", "internal-table", "ABAPCALL", "METHOD", "PARAMETER", "TABLES"]
---

[Short Reference](ABAPCALL_METHOD_SHORTREF.html)

`... [PARAMETER-TABLE ptab]`\\ 
    `[EXCEPTION-TABLE etab].`

[1. `... PARAMETER-TABLE ptab`](#ABAP_ADDITION_1@3@)

[2. `... EXCEPTION-TABLE etab`](#ABAP_ADDITION_2@3@)

In [dynamic method calls](ABAPCALL_METHOD_DYNAMIC.html), these additions assign actual parameters and exceptions to the formal parameters and non-class-based exceptions using the special internal tables `ptab` and `etab`.

`PARAMETER-TABLE` can be used to assign actual parameters to all formal parameters of a dynamically called method. `ptab` expects a [hashed table](ABENHASHED_TABLE_GLOSRY.html) of table type `abap_parmbind_tab` or line type `abap_parmbind` from the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `ABAP`. When the statement `CALL METHOD` is executed, the table must contain exactly one line for each non-optional formal parameter. For each optional formal parameter, the table can contain one line. The table columns are:

The column `NAME` is the unique key of the table `ptab`. The table must not contain a line with a parameter name that does not exist in the method's parameter interface.

`EXCEPTION-TABLE` can be used to assign return values to all [non-class-based exceptions](ABENEXCEPTIONS_NON_CLASS.html) of a dynamically called method. `etab` expects a [hashed table](ABENHASHED_TABLE_GLOSRY.html) of table type `abap_excpbind_tab` or of line type `abap_excpbind` from the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `ABAP`. When the statement `CALL METHOD` is executed, this table can contain exactly one line for every non-class-based exception of the method. The table columns are:

The column `NAME` is the unique key of table `etab`. The table must not contain a line with a exception name that does not exist in the method's parameter interface.

Dynamic method call with parameter and exception table.

-   `NAME` of type `c` and length 30
-   For the name of the relevant formal parameter in uppercase letters. If a nonexistent formal parameter is specified, a catchable exception is raised.
-   `KIND` of type `c` of length 1.
-   For the type of the formal parameter. This column is used to verify the interface. The type of the formal parameter is determined in the declaration of the called method. If `KIND` is initial, no check is performed. If `KIND` contains the value of a constant `EXPORTING`, `IMPORTING`, `CHANGING`, or `RECEIVING` of the class `CL_ABAP_OBJECTDESCR`, the system checks (from the perspective of the caller) whether the formal parameter specified in `NAME` is an input, output, input/output parameter, or a return value, and raises the catchable exception `CX_SY_DYN_CALL_ILLEGAL_TYPE` if an error occurs.
-   `VALUE` of the type `REF TO data`
-   For a pointer to an appropriate actual parameter. The data object to which the reference variable in `VALUE` points is assigned to the formal parameter specified in `NAME`.

-   `NAME` of type `c` and length 30
-   For the name of the respective exception or [`OTHERS`](ABAPCALL_METHOD_PARAMETERS.html) in uppercase letters.
-   `VALUE` of type `i`
-   For the numeric value that is to be available in `sy-subrc` after the exception specified in `NAME` is raised.

DATA out TYPE REF TO if\_demo\_output. \\n\\ \\n\\ \\nCLASS cls DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS \\n meth IMPORTING p TYPE string \\n EXCEPTIONS e. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD meth. \\n out->write( p ). \\n RAISE e. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nSTART-OF-SELECTION. \\n out = cl\_demo\_output=>new( ). \\n\\ \\n FINAL(class) = \`CLS\`. \\n FINAL(meth) = \`METH\`. \\n\\ \\n FINAL(ptab) = VALUE abap\_parmbind\_tab( \\n ( name = 'P' \\n kind = cl\_abap\_objectdescr=>exporting \\n value = REF #( \`Hello method!\` ) ) ). \\n\\ \\n FINAL(etab) = VALUE abap\_excpbind\_tab( \\n ( name = 'E' value = 4 ) ). \\n\\ \\n CALL METHOD (class)=>(meth) \\n PARAMETER-TABLE ptab \\n EXCEPTION-TABLE etab. \\n IF sy-subrc <> 0. \\n out->write( \`Exception caught ...\` ). \\n ENDIF. \\n\\ \\n out->display( ). abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abenmethod\_calls.html abenmethod\_calls\_dynamic.html abapcall\_method\_dynamic.html