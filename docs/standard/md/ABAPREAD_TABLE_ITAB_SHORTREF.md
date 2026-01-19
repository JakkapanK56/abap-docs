---
title: "ABAPREAD_TABLE_ITAB_SHORTREF"
description: |
  ABAPREAD_TABLE_ITAB_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREAD_TABLE_ITAB_SHORTREF.htm"
abapFile: "ABAPREAD_TABLE_ITAB_SHORTREF.html"
keywords: ["select", "do", "if", "data", "internal-table", "field-symbol", "ABAPREAD", "TABLE", "ITAB", "SHORTREF"]
---

[Reference](ABAPREAD_TABLE.html)

``READ TABLE itab             \{\ \{INTO wa                [COMPARING \{\ \{comp1 comp2 ...\}|\{ALL FIELDS\}|\{NO FIELDS\}\ \}]\                [TRANSPORTING \{\ \{comp1 comp2 ...\}|\{ALL FIELDS\}\ \}]\}\             |\ \{ ASSIGNING <fs> [CASTING]\ \}\             |\ \{ REFERENCE INTO dref \}\             |\ \{TRANSPORTING NO FIELDS\}\ \}\             \{\ \{\{FROM wa [USING KEY key_name|(name)]\}\               |\{WITH TABLE KEY [key_name|(name) COMPONENTS]\                                \{comp_name1|(name1)\} = dobj1                                \{comp_name2|(name2)\} = dobj2                                ...\}\               |\ \{WITH KEY comp1 = dobj1 comp2 = dobj2 ... [BINARY SEARCH]\}\               |\ \{WITH KEY key_name|(name)                           COMPONENTS comp1 = dobj1 comp2 = dobj2 ... \}\               |\ \{WHERE [`log_exp`](ABENLOG_EXP_SHORTREF.html)|(cond_syntax)\}\               |\ \{INDEX idx [USING KEY key_name|(name)]\}\ \}\               |\ \{WITH KEY dobj [BINARY SEARCH]\}\               |\ \{WITH KEY = dobj [BINARY SEARCH]\}\ \}.``

Reads a single line from an internal table `itab`.

-   [`INTO wa`](ABAPREAD_TABLE_OUTDESC.html)\\
    Assigns the read line to a work area `wa`.
-   [`COMPARING \{\ \{comp1 comp2 ...\}|\{ALL FIELDS\}|\{NO FIELDS\}\ \}`](ABAPREAD_TABLE_TRANSPORT_OPTIONS.html)\\
    Compares the components `comp1`, `comp2`, ..., all components, or no components of a found line with the corresponding components of the work area and sets `sy-subrc` accordingly.
-   [`TRANSPORTING \{\ \{comp1 comp2 ...\}|\{ALL FIELDS\}\ \}`](ABAPREAD_TABLE_TRANSPORT_OPTIONS.html)\\
    Assigns the specified components `comp1`, `comp2`, ... or all components of the found line to the work area `wa`.
-   [`ASSIGNING <fs> [CASTING]`](ABAPREAD_TABLE_OUTDESC.html)\\
    Assigns the line read to a field symbol `<fs>`; [casting](ABENCAST_CASTING_GLOSRY.html) is an option.
-   [`REFERENCE INTO dref`](ABAPREAD_TABLE_OUTDESC.html)\\
    Assigns the reference to the read line to a reference variable `dref`.
-   [`TRANSPORTING NO FIELDS`](ABAPREAD_TABLE_OUTDESC.html)\\
    Does not assign the read line.
-   [`FROM wa`](ABAPREAD_TABLE_KEY.html)\\
    Specifies the line to be read by matching it with the key values of a work area `wa`.
-   [`WITH TABLE KEY \{comp_name1|(name1)\} = dobj1 \{comp_name2|(name2)\} = dobj2 ...`](ABAPREAD_TABLE_KEY.html)\\
    Specifies the line to be read by specifying components of the primary table key statically or dynamically.
-   [`WITH KEY comp1 = dobj1 comp2 = dobj2 ... [BINARY SEARCH]`](ABAPREAD_TABLE_FREE.html)\\
    Specifies the line to be read by specifying components `comp1`, `comp2`, .... Appropriately sorted standard tables are searched using a binary search `BINARY SEARCH`.
-   [`WITH KEY [key_name|(name) COMPONENTS] comp1 = dobj1 comp2 = dobj2 ...`](ABAPREAD_TABLE_FREE.html)\\
    Specifies the line to be read by specifying components `comp1`, `comp2`, ... for a table key.
-   [`WHERE log_exp|(cond_syntax)`](ABAPREAD_TABLE_WHERE.html)\\
    Selects the line to be read, by specifying a static condition `log_exp` or a dynamic condition in `cond_syntax`.
-   [`INDEX idx`](ABAPREAD_TABLE_INDEX.html)\\
    Specifies the line to be read by specifying the line number `idx` of a table index.
-   [`KEY key_name|(name)`](ABAPREAD_TABLE.html)\\
    Specifies (statically or dynamically) a (secondary) table key used to find the line to be read.
-   [`WITH KEY dobj [BINARY SEARCH]`](ABAPREAD_TABLE_OBSOLET.html)\\
    **Obsolete:** Reads the first line for which the left-aligned content matches the content of the data object `dobj`. The table line is [cast](ABENCAST_CASTING_GLOSRY.html) to the type of `dobj`. Tables sorted accordingly are searched using the addition `BINARY SEARCH`.
-   [`WITH KEY = dobj [BINARY SEARCH]`](ABAPREAD_TABLE_OBSOLET.html)\\
    **Obsolete:** Reads the first line whose entire content matches the content of the data object `dobj`. Appropriately sorted tables are sorted using a `BINARY SEARCH`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html