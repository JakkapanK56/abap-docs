---
title: "ABAPUPDATE_OBSOLETE"
description: |
  ABAPUPDATE_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPUPDATE_OBSOLETE.htm"
abapFile: "ABAPUPDATE_OBSOLETE.html"
keywords: ["update", "if", "class", "data", "ABAPUPDATE", "OBSOLETE"]
---

[Short Reference](ABAPUPDATE_SHORTREF.html)

`UPDATE \{ dbtab | *dbtab \} ...`

This statement is a short form of the following [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement for accessing an individual database table `dbtab`:

`[UPDATE](ABAPUPDATE.html) dbtab FROM \{ dbtab | *dbtab \} ...`

The explicit specification of a work area is missing in the short form. A [table work area](ABENTABLE_WORK_AREA_GLOSRY.html)\\ `dbtab` or `*dbtab` is used implicitly as the work area. The table work area must be declared using [`TABLES`](ABAPTABLES.html). If the name `*dbtab` is used instead of the name of the database table `dbtab`, `dbtab` is accessed, but the [additional table work area](ABAPTABLES_ASTERISK.html) is used.

This short form is forbidden in classes and in the [strict mode of the syntax check from ABAP release 7.40, SP05](ABENABAP_SQL_STRICTMODE_740_SP05.html). An explicit work area must be used instead.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abenabap\_sql\_obsolete.html abenabap\_sql\_short\_forms\_obsolete.html