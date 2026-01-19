---
title: "ABENNEWS-740_SP05-AMDP"
description: |
  ABENNEWS-740_SP05-AMDP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740_SP05-AMDP.htm"
abapFile: "ABENNEWS-740_SP05-AMDP.html"
keywords: ["if", "method", "class", "data", "ABENNEWS", "740", "SP05", "AMDP"]
---

[1\. Tag Interface for AMDP Classes](#ABAP_MODIFICATION_1@4@)

[2\. Implementation of AMDP Methods](#ABAP_MODIFICATION_2@4@)

[ABAP Managed Database Procedures (AMDP)](ABENABAP_MANAGED_DB_PROC_GLOSRY.html) is a framework that was introduced in ABAP release 7.40, SP05 that makes it possible to manage and call [stored procedures](ABENSTORED_PROCEDURE_GLOSRY.html) or [database procedures](ABENDATABASE_PROCEDURE_GLOSRY.html) as [AMDP](ABENAMDP_PROCEDURE_GLOSRY.html) procedures. In the first phase, database procedures programmed in [SQLScript](ABENSQL_SCRIPT_GLOSRY.html) are supported in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html).

The new tag interface `IF_AMDP_MARKER_HDB` flags a class as an [AMDP class](ABENAMDP_CLASS_GLOSRY.html), which can contain AMDP methods for SAP HANA database.

The new addition [`BY DATABASE PROCEDURE FOR HDB LANGUAGE SQLSCRIPT`](ABAPMETHOD_BY_DB_PROC.html) for the statement `METHOD` turns a method of an [AMDP](ABENAMDP_CLASS_GLOSRY.html) class into an [AMDP procedure implementation](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html). This is implemented in the SQLScript language of the SAP HANA database and not in ABAP. The ABAP runtime framework creates a corresponding database procedure in SAP HANA database. This procedure is executed when the AMDP method is called.

abenabap.html abennews.html abennews-740.html abennews-740\_sp05.html