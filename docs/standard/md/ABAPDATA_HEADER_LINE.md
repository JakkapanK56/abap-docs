---
title: "ABAPDATA_HEADER_LINE"
description: |
  ABAPDATA_HEADER_LINE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDATA_HEADER_LINE.htm"
abapFile: "ABAPDATA_HEADER_LINE.html"
keywords: ["loop", "if", "class", "data", "types", "internal-table", "ABAPDATA", "HEADER", "LINE"]
---

[Short Reference](ABAPDATA.html)

`... WITH HEADER LINE ...`

This addition of the statements [`DATA TABLE OF`](ABAPDATA_ITAB.html), [`DATA RANGE OF`](ABAPDATA_RANGES.html), and the obsolete statement [`DATA OCCURS`](ABAPDATA_OCCURS.html), which is forbidden in classes, declares a further data object alongside the internal table, known as the [header line](ABENHEADER_LINE_GLOSRY.html). This object has exactly the same name as the internal table and has the line type of the internal table as its data type. A header line cannot be declared for internal tables with a table-like line type. This is possible for structured line types with table-like components, however.

If the name of an internal table `itab` is specified in an operand position of an ABAP statement, the statement determines whether the [table body](ABENTABLE_BODY_GLOSRY.html) or header line is used. As a rule, all table-specific statements such as [`SORT`](ABAPSORT_ITAB.html) or [`LOOP`](ABAPLOOP_AT_ITAB.html) use the internal table, whereas all other statements use the header line. Exceptions to this rule are listed under [Internal Tables with Header Line](ABENITAB_HEADER_LINE.html).

To address the table body instead of the header line in statements, `[]` can be appended to the table name:

`... itab[] ...`

For internal tables without a header line, the table body is always used. An internal table with a header line cannot be a component of a structure or a line of another internal table.

-   These statements for processing individual table lines have [obsolete short forms](ABENITAB_SHORT_FORMS.html) that use the header line as a work area implicitly. These short forms are allowed only outside of ABAP Objects.
-   If the name `primary_key` is explicitly specified or a [secondary key](ABAPDATA_SECONDARY_KEY.html) is defined when the [primary key](ABAPDATA_PRIMARY_KEY.html) is being defined, the addition `WITH HEADER LINE` can no longer be specified, even outside of classes.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_declarations.html abenitab\_declare\_obsolete.html abenitab\_header\_line.html