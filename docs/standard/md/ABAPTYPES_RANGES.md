---
title: "ABAPTYPES_RANGES"
description: |
  ABAPTYPES_RANGES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTYPES_RANGES.htm"
abapFile: "ABAPTYPES_RANGES.html"
keywords: ["select", "do", "if", "class", "data", "types", "ABAPTYPES", "RANGES"]
---

[Short Reference](ABAPTYPES_SHORTREF.html)

`TYPES dtype \{TYPE RANGE OF type\}|\{LIKE RANGE OF dobj\}`\\ 
            `[INITIAL SIZE n].`

Derivation of a table type for a [ranges table](ABENRANGES_TABLE_GLOSRY.html). A ranges table is a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) in which a [ranges condition](ABENRANGES_CONDITION_GLOSRY.html) can be stored. It has a [standard key](ABENSTANDARD_KEY_GLOSRY.html) and a special structured line type whose internal definition can be represented as follows in ABAP syntax:

TYPES: BEGIN OF linetype, \\n         sign   TYPE c LENGTH 1, \\n         option TYPE c LENGTH 2, \\n         low    \\{TYPE type\\}|\\{LIKE dobj\\}, \\n         high   \\{TYPE type\\}|\\{LIKE dobj\\}, \\n       END OF linetype.

The additions `TYPE` and `LIKE` determine the data type of the components `low` and `high`:

The addition `INITIAL SIZE` is equivalent to the definition of regular internal [table types](ABAPTYPES_ITAB.html).

A ranges table can be used in a [relational expression](ABENRELATIONAL_EXPRESSION_GLOSRY.html) with the [comparison operator](ABENCOMP_OPERATOR_GLOSRY.html)\\ [`IN`](ABENLOGEXP_SELECT_OPTION.html) or in a [similar expression](ABENWHERE_LOGEXP_SELTAB.html) in a `WHERE` condition in ABAP SQL. It is also used for value passing to the [selection screens](ABENSELECTION_SCREEN_GLOSRY.html) of an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) called using [`SUBMIT`](ABAPSUBMIT.html).

Definition of a table type for a ranges table and its use for an inline declaration of a ranges table on the left side of a constructor expression with the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html).

-   `type` can be a non-generic data type from the ABAP Dictionary, a non-generic public data type of a global class, a non-generic data type local to a program, a [CDS simple type](ABENCDS_SIMPLE_TYPE_GLOSRY.html), or any ABAP type from the [tables](ABENBUILT_IN_TYPES_COMPLETE.html) of [built-in ABAP types](ABENBUILTIN_ABAP_TYPE_GLOSRY.html). The generic ABAP types `c`, `n`, `p`, and `x` are extended implicitly to the standard length without [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) from the [tables](ABENBUILT_IN_TYPES_COMPLETE.html) of built-in ABAP types.
-   `dobj` can be a data object visible at this position, whose type is inherited for both components. Generically typed formal parameters cannot be specified for `dobj` within a [procedure](ABENPROCEDURE_GLOSRY.html).

-   The `sign` and `option` columns of a ranges table declared using `RANGE OF` do not refer to data types in the ABAP Dictionary. For a ranges table defined in the ABAP Dictionary, these columns refer to the data elements `DDSIGN` and `DDOPTION`.
-   A [selection table](ABENSELECTION_TABLE_GLOSRY.html) declared with [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html) has the same structure as a ranges table.

TYPES carrid\_range TYPE RANGE OF spfli-carrid. \\n\\ \\nFINAL(carrid\_range) = VALUE carrid\_range( \\n ( sign = 'I' option = 'BT' low = 'AA' high = 'LH' ) ). \\n\\ \\nSELECT \* \\n FROM spfli \\n WHERE carrid IN @carrid\_range \\n INTO TABLE @FINAL(spfli\_tab). abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html