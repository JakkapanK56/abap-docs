---
title: "ABAPTABLES_ASTERISK"
description: |
  ABAPTABLES_ASTERISK - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTABLES_ASTERISK.htm"
abapFile: "ABAPTABLES_ASTERISK.html"
keywords: ["select", "class", "data", "types", "ABAPTABLES", "ASTERISK"]
---

[Short Reference](ABAPTABLES_PLUS_SHORTREF.html)

`TABLES *table_wa.`

This statement declares an additional [table work area](ABENTABLE_WORK_AREA_GLOSRY.html)\\ `*table_wa`, whose data type, like that of the regular [`TABLES`](ABAPTABLES.html) statement with its [flat](ABENFLAT_GLOSRY.html) structured data type `table_wa`, is taken from the ABAP Dictionary.

The additional table work area can be used just like the regular table work area. This applies in particular to obsolete [database accesses](ABENDATABASE_ACCESS_OBSOLETE.html).

The statement `TABLES` is forbidden in classes. The addition `TYPE` can be used to reference the data types in the ABAP Dictionary to declare any number of separate work areas.

Declaration of a regular and additional table work area and their use in obsolete short forms of the `SELECT` statement.

Declares two work areas using `DATA` and their use in the `INTO` clause of the `SELECT` statement.

TABLES: scarr, \*scarr. \\n\\ \\nSELECT SINGLE \* \\n FROM scarr \\n WHERE carrid = 'LH'. \\n\\ \\nSELECT SINGLE \* \\n FROM \*scarr \\n WHERE carrid = 'UA'. DATA: scarr1 TYPE scarr, \\n scarr2 TYPE scarr. \\n\\ \\nSELECT SINGLE \* \\n FROM scarr \\n WHERE carrid = 'LH' \\n INTO @scarr1. \\n\\ \\nSELECT SINGLE \* \\n FROM scarr \\n WHERE carrid = 'UA' \\n INTO @scarr2. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_declarations.html abeninterface\_areas\_obsolete.html