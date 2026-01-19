---
title: "ABAPCALL_FUNCTION_DYNAMIC"
description: |
  ABAPCALL_FUNCTION_DYNAMIC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_FUNCTION_DYNAMIC.htm"
abapFile: "ABAPCALL_FUNCTION_DYNAMIC.html"
keywords: ["do", "if", "case", "catch", "class", "data", "internal-table", "ABAPCALL", "FUNCTION", "DYNAMIC"]
---

[Short Reference](ABAPCALL_FUNCTION_SHORTREF.html)

`... [PARAMETER-TABLE ptab]`\\ 
    `[EXCEPTION-TABLE etab] ...`

[1. `... PARAMETER-TABLE ptab ...`](#ABAP_ADDITION_1@3@)

[2. `... EXCEPTION-TABLE etab ...`](#ABAP_ADDITION_2@3@)

These additions use the special internal tables `ptab` and `etab` to assign actual parameters to the formal parameters of the function module and return values to the non-class-based exceptions dynamically.

`PARAMETER-TABLE` can be used to assign actual parameters to all formal parameters of the called function module. `ptab` expects a [sorted table](ABENSORTED_TABLE_GLOSRY.html) of table type `abap_func_parmbind_tab` or line type `abap_func_parmbind` from the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `ABAP`. When the statement `CALL FUNCTION` is executed, the table must contain exactly one line for each non-optional formal parameter. This line is optional for each optional formal parameter. The table columns are:

The columns `name` and `kind` form the unique key of the table `ptab`. A line with a parameter name that is not defined in the function module's parameter interface is ignored.

`EXCEPTION-TABLE` can be used to assign return values to exceptions of the called function module that are not marked as exception classes in the [Function Builder](ABENFUNCTION_BUILDER_GLOSRY.html). `etab` expects a [hashed table](ABENHASHED_TABLE_GLOSRY.html) of table type `abap_func_excpbind_tab` or of line type `abap_func_excpbind` from the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `ABAP`. The table can contain exactly one line for each non-class-based exception of the function module when the statement `CALL FUNCTION` is executed. The table columns are:

The column `name` is the unique key of table `etab`. A line with an exception name that is not in the function module's parameter interface is ignored.

Call of the function module `GUI_DOWNLOAD` with dynamic pass by parameter The name of the function module is specified in the string `func` and the interface is supplied with data using the internal tables `ptab` and `etab`.

-   `name` of type `c` and length 30
-   for the name of the corresponding formal parameter in uppercase letters. If a nonexistent formal parameter is specified, a catchable exception is raised.
-   `kind` of type `i`
-   for the type of the formal parameter. `kind` must contain the value of one of the following constants of the type pool `ABAP`:

-   `abap_func_exporting` for input parameters
-   `abap_func_importing` for output parameters
-   `abap_func_tables` for table parameters
-   `abap_func_changing` for input/output parameters
-   If the type specified from the caller perspective does not match the actual type of the formal parameter, a catchable exception is raised.

-   `value` of the type `REF TO data`
-   as a pointer to an appropriate actual parameter. The data object to which the reference variable in `value` points is assigned to the formal parameter specified in `name`.
-   `tables_wa` of type `REF TO data`
-   as a pointer to a suitable work area if the column `kind` contains the value `abap_func_tables`. If `tables_wa` is not initial, the data object to which the reference variable points in `tables_wa` is passed to the [header line](ABENHEADER_LINE_GLOSRY.html) of the table parameter specified in `name`.

-   `name` of type `c` and length 30
-   For the name of the respective exception, or `error_message`, or specifies `OTHERS` in uppercase letters.
-   `value` of type `i`
-   For the numeric value that is to be available in `sy-subrc` after the exception specified in `name` is handled
-   `message` of type `REF TO data` (not used for general function call but for [remote function call](ABAPCALL_FUNCTION_DESTINATION_PARA.html))

DATA: line TYPE c LENGTH 80, \\n text\_tab LIKE STANDARD TABLE OF line, \\n filename TYPE string, \\n filetype TYPE c LENGTH 10, \\n fleng TYPE i. \\n\\ \\nDATA: func TYPE string, \\n ptab TYPE abap\_func\_parmbind\_tab, \\n etab TYPE abap\_func\_excpbind\_tab. \\n\\ \\nfunc = 'GUI\_DOWNLOAD'. \\nfilename = 'c:\\\\temp\\\\text.txt'. \\nfiletype = 'ASC'. \\n\\ \\nptab = VALUE #( ( name = 'FILENAME' \\n kind = abap\_func\_exporting \\n value = REF #( filename ) ) \\n ( name = 'FILETYPE' \\n kind = abap\_func\_exporting \\n value = REF #( filetype ) ) \\n ( name = 'DATA\_TAB' \\n kind = abap\_func\_tables \\n value = REF #( text\_tab ) ) \\n ( name = 'FILELENGTH' \\n kind = abap\_func\_importing \\n value = REF #( fleng ) ) ). \\n\\ \\netab = VALUE #( ( name = 'OTHERS' value = 10 ) ). \\n\\ \\nCALL FUNCTION func \\n PARAMETER-TABLE ptab \\n EXCEPTION-TABLE etab. \\n\\ \\nCASE sy-subrc. \\n WHEN 1. \\n ... \\n ... \\nENDCASE. abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_general.html