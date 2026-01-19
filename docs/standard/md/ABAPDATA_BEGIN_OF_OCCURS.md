---
title: "ABAPDATA_BEGIN_OF_OCCURS"
description: |
  ABAPDATA_BEGIN_OF_OCCURS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDATA_BEGIN_OF_OCCURS.htm"
abapFile: "ABAPDATA_BEGIN_OF_OCCURS.html"
keywords: ["if", "class", "data", "internal-table", "ABAPDATA", "BEGIN", "OCCURS"]
---

[Short Reference](ABAPDATA_BEGIN_OF_SHORTREF.html)

`DATA BEGIN OF itab OCCURS n.`\\ 
  `...`\\ 
`DATA END OF itab [VALID BETWEEN intlim1 AND intlim2].`

[`... VALID BETWEEN intlim1 AND intlim2`](#ABAP_ONE_ADD@1@)

This variant of the chained statement introduced by [`DATA BEGIN OF`](ABAPDATA_STRUC.html), which is forbidden in classes, declares an internal table `itab` as a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) with a structured line type and a [header line](ABENHEADER_LINE_GLOSRY.html). The declarations between the statements `DATA BEGIN OF` and `DATA END OF` define the components of the [line type](ABENROW_TYPE_GLOSRY.html) of `itab`, just as in the regular variant of [`DATA BEGIN OF`](ABAPDATA_STRUC.html). The data object `n`, which must be specified either directly as a numeric literal or as a numeric constant, determines the [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html).

The `VALID BETWEEN` addition of the `DATA END OF` statement is only important if the internal table is to be processed using the obsolete form of the statement [`PROVIDE`](ABAPPROVIDE_OBSOLETE.html). `intlim1` and `intlim2` expect columns from the internal table of the data type `d`, `i`, `n`, or `t`. These columns are used implicitly as interval limits in the obsolete form of the statement `PROVIDE`.

-   The statement string above is the original form of the declarations of internal tables. Internal tables declared in this way have always been tables in the real sense, meaning that the lines are mainly constructed from individual columns.
-   The following statement list replaces the above statements (except for the addition `VALID BETWEEN`), whereby the role of the header line is taken from the work area `wa`:
-   `DATA BEGIN OF wa. ... DATA END OF wa. DATA itab LIKE TABLE OF wa.`
-   The last statement is a short form of the complete [declaration](ABAPDATA_ITAB.html) of `itab`, where the table type and key are supplemented with standard values.
-   The creation of the [header line](ABENITAB_HEADER_LINE.html) cannot be disabled in this variant. Since header lines in internal tables should never be used, however, this way of declaring internal tables should never occur again.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_declarations.html abenitab\_declare\_obsolete.html abenitab\_header\_line.html