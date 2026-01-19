---
title: "ABAPREAD_TABLE_OBSOLET"
description: |
  ABAPREAD_TABLE_OBSOLET - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREAD_TABLE_OBSOLET.htm"
abapFile: "ABAPREAD_TABLE_OBSOLET.html"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "internal-table", "ABAPREAD", "TABLE", "OBSOLET"]
---

[Short Reference](ABAPREAD_TABLE_ITAB_SHORTREF.html)

`READ TABLE itab \{\ \{\ \}`\\ 
                `|\ \{ WITH KEY dobj \}`\\ 
                `|\ \{ WITH KEY = dobj \}\ \}\ [BINARY SEARCH]\ [result](ABAPREAD_TABLE_OUTDESC.html).`

[1. `... \{\ \}`](#ABAP_ALTERNATIVE_1@2@)

[2. `... WITH KEY dobj`](#ABAP_ALTERNATIVE_2@2@)

[3. `... WITH KEY = dobj`](#ABAP_ALTERNATIVE_3@2@)

[`... BINARY SEARCH`](#ABAP_ONE_ADD@1@)

As well as the additions specified in the statement [`READ TABLE`](ABAPREAD_TABLE.html) for specifying the individual lines to be read, outside of classes the search key can also be specified in three obsolete forms.

If the search key is not specified explicitly, the internal table `itab` must be a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) with a [header line](ABENHEADER_LINE_GLOSRY.html). The first line found in the internal table is read whose values in the columns of the [standard key](ABENSTANDARD_KEY_GLOSRY.html) match the values in the corresponding components of the header line. Key fields in the header line that only contain blanks are handled as if they match all values. If all the key fields in the header line only contain blanks, the first entry in the table is read. The standard key of the internal table cannot contain any byte-like components.

Unlike the example for [`READ TABLE - table_key`](ABAPREAD_TABLE_KEY.html), no entry is usually found in the following `READ` statement, since the entire standard key is compared. In particular, the components `deptime` and `arrtime` that belong to the standard key of the internal table are of type `t` and contain the value *000000* instead of blanks as an [initial value](ABENINITIAL_VALUE_GLOSRY.html) in the header line. Only table entries that contain exactly these values are read.

If a single data object is specified directly after the addition `WITH KEY`, the internal table `itab` must be a [standard table](ABENSTANDARD_TABLE_GLOSRY.html). The first line found in the internal table is read whose left-aligned content matches the content of the data object `dobj`. The data object `dobj` expects only [flat](ABENFLAT_GLOSRY.html) data types. In the search, the start of the table lines that are longer than the data object `dobj` is handled as if they have the same data type `dobj` ([casting](ABENCAST_CASTING_GLOSRY.html)).

To use the addition `WITH KEY dobj` for evaluating specific key fields, a structure must be created that matches the corresponding initial part of the line type. In contrast to the example for [`READ TABLE - table_key`](ABAPREAD_TABLE_KEY.html), the client column `mandt` of the table `spfli_tab` must be respected by the search key in the following program section.

If the addition `WITH KEY` is followed by a single data object after an *equals* sign, the first line found in the internal table `itab` is read whose entire content matches the content of the data object `dobj`. It must be possible to convert the data object `dobj` to the line type of the internal table. If the data type of `dobj` does not match the line type of the internal table, a conversion is performed for the comparison in accordance with the [conversion rules](ABENCONVERSION_RULES.html).

This statement has the same function as specifying the [pseudo component](ABENPSEUDO_COMPONENT_GLOSRY.html)\\ `table_line` as a [free key](ABAPREAD_TABLE_FREE.html), and is replaced by this component.

`READ TABLE itab WITH KEY table_line = dobj ...`

Determines (obsolete) whether a line in an internal table exists with an elementary line type. The comment lines show the generally valid syntax with the pseudo-component `table_line`.

The addition `BINARY SEARCH` produces a binary search of the table, not linear. The same prerequisites and restrictions apply as when using the addition with a [free search key](ABAPREAD_TABLE_FREE.html). Before the correct line can be found, the internal table must be sorted in ascending order as follows:

The fact that the addition `BINARY SEARCH` requires a different sorting for each of the obsolete variants can be confusing and produce unintended behavior. For this reason, the addition should not be used in the case of the obsolete variants and the non-obsolete variants of [`READ TABLE`](ABAPREAD_TABLE.html) used instead.

-   The statement `READ TABLE itab ...` is not the same as the explicit specification of the header line `itab` as a work area `wa` in the statement [`READ TABLE itab FROM wa ...`](ABAPREAD_TABLE_KEY.html), since the table key is used for the search in the latter and not the search key of the header line. This is because key fields that contain blanks do not match all fields of the internal table.
-   The search key can be omitted regardless of the additional [obsolete short form](ABENITAB_SHORT_FORMS.html) (where no explicit target area is specified).

-   If the search key is not specified explicitly, by the components of the [standard key](ABENSTANDARD_KEY_GLOSRY.html).
-   If the search key is specified using `WITH KEY dobj`, by its left-aligned content in the length of the data object.
-   If the search key is specified using `WITH dobj`, by the entire table line.

-   *Cause:* The key has stricter alignment requirements than the individual table lines.
    *Runtime error:*\\ `READ_BAD_KEY_ALIGN`
-   *Cause:* The key is longer than a table line and cannot be truncated.
    *Runtime error:*\\ `READ_BAD_KEY_PARTIAL`

DATA: spfli\_tab TYPE STANDARD TABLE OF spfli \\n WITH NON-UNIQUE KEY carrid connid \\n WITH HEADER LINE. \\n\\ \\nFIELD-SYMBOLS TYPE spfli. \\n\\ \\nSELECT \* \\n FROM spfli \\n WHERE carrid = 'LH' \\n INTO TABLE @spfli\_tab. \\n\\ \\nspfli\_tab-carrid = 'LH'. \\nspfli\_tab-connid = '0400'. \\nREAD TABLE spfli\_tab ASSIGNING . DATA: spfli\_tab TYPE STANDARD TABLE OF spfli \\n WITH NON-UNIQUE KEY carrid connid. \\n\\ \\nDATA: BEGIN OF key\_struc, \\n mandt TYPE spfli-mandt VALUE '000', \\n carrid TYPE spfli-carrid VALUE 'LH', \\n connid TYPE spfli-connid VALUE '0400', \\n END OF key\_struc. \\n\\ \\nFIELD-SYMBOLS TYPE spfli. \\n\\ \\nSELECT \* \\n FROM spfli \\n WHERE carrid = 'LH' \\n INTO TABLE @spfli\_tab. \\nREAD TABLE spfli\_tab WITH KEY key\_struc ASSIGNING . DATA itab TYPE TABLE OF i WITH EMPTY KEY. \\n\\ \\nitab = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ). \\n\\ \\nREAD TABLE itab WITH KEY = 4 \\n TRANSPORTING NO FIELDS. \\n\* READ TABLE itab WITH KEY table\_line = 4 \\n\* TRANSPORTING NO FIELDS. \\n\\ \\nIF sy-subrc = 0. \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenitab\_obsolete.html