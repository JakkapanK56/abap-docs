---
title: "ABAPDESCRIBE_TABLE"
description: |
  ABAPDESCRIBE_TABLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDESCRIBE_TABLE.htm"
abapFile: "ABAPDESCRIBE_TABLE.html"
keywords: ["select", "if", "case", "catch", "method", "class", "data", "types", "internal-table", "ABAPDESCRIBE", "TABLE"]
---

[Short Reference](ABAPDESCRIBE_TABLE_SHORTREF.html)

`DESCRIBE TABLE itab [KIND knd]\ [LINES lin]\ [OCCURS n].`

[1. `... KIND knd`](#ABAP_ADDITION_1@3@)

[2. `... LINES lin`](#ABAP_ADDITION_2@3@)

[3. `... OCCURS n`](#ABAP_ADDITION_3@3@)

This statement determines some of the properties of the internal table `itab` and assigns them to the specified target fields. The following can be specified as target fields of each addition:

The different additions enable the table category, the number of currently filled lines, and the [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html) to be determined.

In addition, the system fields `sy-tfill` and `sy-tleng` are filled with the current number of table lines and the length of a table line in bytes.

Determines the table category of the internal table `itab`. The return value is a single character character-like ID. In an inline declaration, a variable of the type `c` with length 1 is declared.

The possible IDs are *T* for [standard tables](ABENSTANDARD_TABLE_GLOSRY.html), *S* for sorted tables, and *H* for [hashed tables](ABENHASHED_TABLE_GLOSRY.html). These values are also defined as constants `sydes_kind-standard`, `sydes_kind-sorted`, and `sydes_kind-hashed` in the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `SYDES`.

Sorting of a generically typed internal table in a method in descending order. Since [sorted tables](ABENSORTED_TABLE_GLOSRY.html) cannot be sorted in descending order, the table category is checked to prevent uncatchable exceptions from being raised.

Determines the current number of table lines in the internal table `itab`. The return value has the type `i`. In an inline declaration, a variable of the type `i` is declared.

The current number of lines of an internal table can also be determined using the [built-in function](ABENBUILTIN_FUNCTION_GLOSRY.html)\\ [`lines`](ABENDESCRIPTIVE_FUNCTIONS_TABLE.html), which can be used in suitable [operand positions](ABENEXPRESSION_POSITIONS.html).

The example shows that the addition of `LINES` to `DESCRIBE TABLE` and the built-in function [`lines`](ABENDESCRIPTIVE_FUNCTIONS_TABLE.html) have the same result.

Determines the [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html) defined using the addition [`INITIAL SIZE`](ABAPTYPES_ITAB.html) or the obsolete addition [`OCCURS`](ABAPTYPES_OCCURS.html) when the internal table is created.

If neither `INITIAL SIZE` nor `OCCURS` were used:

The return value has the type `i`. In an inline declaration, a variable of the type `i` is declared.

The value 0 for an initial memory requirement implicitly handled by the ABAP runtime framework reflects the value 0 that can be specified behind `INITIAL SIZE` or `OCCURS` to define this behavior.

The example shows that the addition of `OCCURS` to `DESCRIBE TABLE` and the property `INITIAL_SIZE` of a type description object of class `CL_ABAP_TABLEDESCR` produce the same value.

-   Existing variables to which the return value can be converted.
-   Inline declarations [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html).

-   For more detailed information about an internal table, it is best to use the methods of the [RTTS](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html) instead of the statement `DESCRIBE TABLE`.
-   If no addition is specified, the statement `DESCRIBE TABLE` only sets the system fields `sy-tfill` and `sy-tleng`.

-   For internal tables created by [`RANGES`](ABAPRANGES.html) or [`INFOTYPES`](ABAPINFOTYPES.html), the standard value 10 is returned.
-   In all other cases, the initial memory requirement is implicitly handled by the ABAP runtime framework and the value of `n` is set to 0.

CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS sort\_descending CHANGING itab TYPE ANY TABLE. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD sort\_descending. \\n DESCRIBE TABLE itab KIND FINAL(tabkind). \\n IF tabkind = sydes\_kind-standard OR \\n tabkind = sydes\_kind-hashed. \\n SORT itab DESCENDING. \\n ELSEIF tabkind = sydes\_kind-sorted. \\n MESSAGE '...' TYPE 'E'. \\n ELSE. \\n MESSAGE '...' TYPE 'E'. \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. SELECT carrid \\n FROM scarr \\n INTO TABLE @FINAL(scarr\_tab). \\n\\ \\nDESCRIBE TABLE scarr\_tab LINES FINAL(lines). \\n\\ \\nASSERT lines = lines( scarr\_tab ). DATA itab TYPE TABLE OF i INITIAL SIZE 10 WITH EMPTY KEY. \\n\\ \\nDESCRIBE TABLE itab OCCURS FINAL(occ). \\n\\ \\nASSERT occ = CAST cl\_abap\_tabledescr( \\n cl\_abap\_typedescr=>describe\_by\_data( itab ) )->initial\_size. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendescribe\_field.html abapdescribe.html