---
title: "ABAPASSIGN_LOCAL_COPY"
description: |
  ABAPASSIGN_LOCAL_COPY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPASSIGN_LOCAL_COPY.htm"
abapFile: "ABAPASSIGN_LOCAL_COPY.html"
keywords: ["do", "if", "class", "data", "internal-table", "field-symbol", "ABAPASSIGN", "LOCAL", "COPY"]
---

[Short Reference](ABAPASSIGN_LOCAL_COPY_SHORTREF.html)

`ASSIGN LOCAL COPY`\\ 
  `OF \{\ \{[INITIAL] mem_area\}`\\ 
     `|\ \{INITIAL LINE OF \{itab|(itab_name)\}\}`\\ 
     `|\ \{MAIN TABLE FIELD (name)\}\ \}`\\ 
  `TO <fs> casting_spec.`

[1. `... mem_area`](#ABAP_ADDITION_1@3@)

[2. `... MAIN TABLE FIELD (name)`](#ABAP_ADDITION_2@3@)

[3. `... casting_spec`](#ABAP_ADDITION_3@3@)

Obsolete creation of a local data object. This variant of the [`ASSIGN`](ABAPASSIGN.html) statement is only possible in [subroutines](ABENSUBROUTINE_GLOSRY.html) and [function modules](ABENFUNCTION_MODULE_GLOSRY.html). The [field symbol](ABENFIELD_SYMBOL_GLOSRY.html)\\ `<fs>` must be declared locally in the procedure.

Like the regular statement [`ASSIGN`](ABAPASSIGN.html), the statement `ASSIGN LOCAL COPY` assigns a memory area `mem_area` to the field symbol `<fs>`. Unlike the regular statement `ASSIGN`, the field symbol does not reference the memory area specified in `mem_area` after the successful assignment. Instead, an [anonymous data object](ABENANONYMOUS_DATA_OBJECT_GLOSRY.html) is created in the local data area of the procedure. After the successful execution of the statement, the field symbol points to the new data object. The new data object is handled as follows:

The restriction of the memory area [`range_spec`](ABAPASSIGN_RANGE.html), which can occur in the regular `ASSIGN` statement implicitly and explicitly, occurs only implicitly in accordance with the rules that also apply to the regular `ASSIGN`.

**Syntax of `mem_area`**

`... \{ dobj[+off][(len)]\ | (name) | oref->(attr_name) |\ \{class|(class_name)\}=>\{attr|(attr_name)\}\ | dref->* \} ...`

The specifications in `mem_area` are a subset of the [specifications](ABAPASSIGN_MEM_AREA.html) in the regular `ASSIGN` statement and have the same function except for the following restrictions:

**This addition is for internal use only. \\nIt must not be used in application programs.**

This addition is a special form of specifying the memory area `mem_area` that is only possible in this variant of the `ASSIGN` statement. It has the same function as the obsolete [`TABLE FIELD (name)`](ABAPASSIGN_TABLE_FIELD.html) in a regular `ASSIGN` with the difference that the search range is restricted to the current [main program group](ABENMAIN_PROGRAM_GROUP_GLOSRY.html).

Specifying `casting_spec` is the same as a regular [`ASSIGN`](ABAPASSIGN_CASTING.html) with the restriction that if the addition `INITIAL` is used before `mem_area` and an internal tables is specified, no explicit specifications can be made. This means, the field symbol copies the data type of the data object in `mem_area` or the line type of the internal table.

A typical use of the statement `ASSIGN LOCAL COPY` was the creation of a local copy of a global data object.

The following subroutine shows how the same functions can be universally implemented with a data reference.

-   The size of the memory area of the new data object depends either on the specification in `mem_area` or the [row type](ABENROW_TYPE_GLOSRY.html) of an internal table if `LINE OF` is specified. The internal table can be specified directly as `itab` or as the content of a [flat](ABENFLAT_GLOSRY.html) character-like field `itab_name`.
-   The data type with which the new data object is handled depends, as when using the regular `ASSIGN` on the data in `casting_spec`.
-   The initial content of the new data object is copied from the memory area specified in `mem_area` when specifying `mem_area` without the addition `INITIAL`. Otherwise it is initialized according to the type.

-   The creation of a local data object using the statement `ASSIGN LOCAL COPY` is replaced by the statement `CREATE DATA` with subsequent dereferencing in the regular `ASSIGN` statement.
-   The addition [`ELSE UNASSIGN`](ABAPASSIGN_ELSE_UNASSIGN.html) cannot be used in this obsolete variant of the `ASSIGN` statement.

-   If the addition `INITIAL` is used before `mem_area`, the data object `name` must be character-like and [flat](ABENFLAT_GLOSRY.html).
-   If the addition `INITIAL` is used before `mem_area`, the data object `dref` cannot be typed [generically](ABENGENERIC_DATA_TYPE_GLOSRY.html) when using the dereferencing operator `->*`.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA g\_dobj TYPE i. \\n... \\nCLEAR g\_dobj. \\nPERFORM subroutine1. \\n... \\n\\ \\nout->display( ). \\n\\ \\n\\ \\nFORM subroutine1. \\n FIELD-SYMBOLS TYPE ANY. \\n ASSIGN LOCAL COPY OF g\_dobj TO . \\n += 1. \\n out->write\_data( \\ \\n )->write\_data( g\_dobj ). \\nENDFORM. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA g\_dobj TYPE i. \\n... \\nCLEAR g\_dobj. \\nPERFORM subroutine2. \\n... \\n\\ \\nout->display( ). \\n\\ \\n\\ \\nFORM subroutine2. \\n DATA dref TYPE REF TO data. \\n CREATE DATA dref LIKE g\_dobj. \\n dref->\* = g\_dobj. \\n dref->\* += 1. \\n out->write\_data( dref->\* \\n )->write\_data( g\_dobj ). \\nENDFORM. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenassign\_obsolete.html