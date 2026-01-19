---
title: "ABAPSELECT_OBSOLETE"
description: |
  ABAPSELECT_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT_OBSOLETE.htm"
abapFile: "ABAPSELECT_OBSOLETE.html"
keywords: ["select", "if", "class", "data", "ABAPSELECT", "OBSOLETE"]
---

[Short Reference](ABAPSELECT_SHORTREF.html)

`SELECT [SINGLE] * FROM \{ dbtab | *dbtab \} ...    ...  ENDSELECT.`

This statement is a short form of the following [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement for accessing an individual DDIC database table `dbtab`:

``[SELECT](ABAPSELECT.html)\ [[SINGLE](ABAPSELECT_SINGLE.html)]\ [`*`](ABAPSELECT_LIST.html) [FROM](ABAPFROM_CLAUSE.html) dbtab [INTO](ABAPINTO_CLAUSE.html)\ \{ dbtab | *dbtab \} ... ... [ENDSELECT](ABAPENDSELECT.html).``

The explicit specification of a work area in an [`INTO`](ABAPINTO_CLAUSE.html) clause is not required in the short form. A [table work area](ABENTABLE_WORK_AREA_GLOSRY.html)\\ `dbtab` or `*dbtab` is used implicitly as the work area. The table work area must be declared using [`TABLES`](ABAPTABLES.html). If the name `*dbtab` is used instead of the name of the DDIC database table `dbtab`, `dbtab` is accessed, but the [additional table work area](ABAPTABLES_ASTERISK.html) is used.

The short form can only be used to read all columns of a database table if `*` is specified in the [`SELECT` list](ABAPSELECT_LIST.html). When individual columns or aggregate functions are read, the work area must always be specified explicitly. The only exception is when `count( * )` is used to specify *nothing*, if no alias name is defined for it and no `GROUP BY` clause is specified.

This short form is forbidden in classes and in the [strict mode of the syntax check from ABAP release 7.40, SP05](ABENABAP_SQL_STRICTMODE_740_SP05.html). An explicit work area must be used instead.

Usage of `SELECT` without `INTO` clause.

Usage of `SELECT` with `INTO` clause.

Usage of `SELECT` with `INTO` clause and inline declaration.

TABLES scarr. \\n\\ \\nSELECT \* \\n FROM scarr. \\n ... \\nENDSELECT. DATA wa TYPE scarr. \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO @wa. \\n ... \\nENDSELECT. SELECT \* \\n FROM scarr \\n INTO @FINAL(wa). \\n ... \\nENDSELECT. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abenabap\_sql\_obsolete.html abenabap\_sql\_short\_forms\_obsolete.html