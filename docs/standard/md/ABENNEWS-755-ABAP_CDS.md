---
title: "ABENNEWS-755-ABAP_CDS"
description: |
  ABENNEWS-755-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-755-ABAP_CDS.htm"
abapFile: "ABENNEWS-755-ABAP_CDS.html"
keywords: ["if", "data", "ABENNEWS", "755", "ABAP", "CDS"]
---

[1\. Defining Associations in CDS Projection Views](#ABAP_MODIFICATION_1@4@)

[2\. CDS View Entities](#ABAP_MODIFICATION_2@4@)

[3\. CDS View Entity Extensions](#ABAP_MODIFICATION_3@4@)

[4\. New Session Variables for User Time Zone and User Date](#ABAP_MODIFICATION_4@4@)

[5\. New String Function for Regular Expressions](#ABAP_MODIFICATION_5@4@)

It is now possible to define new associations to external data sources in [CDS projection views](ABENCDS_DEFINE_VIEW_AS_PROJECTION.html).

A new kind of CDS view is available: the [CDS view entity](ABENCDS_V2_VIEWS.html). CDS view entities represent an improved version of [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEWS.html) (`DEFINE VIEW`). They serve the same purpose and have the same structure as CDS DDIC-based views (obsolete), but offer many advantages. CDS view entities are planned to replace CDS DDIC-based views (obsolete) in the future. A CDS view entity is defined with the statement `DEFINE VIEW ENTITY`.

The new statement [`EXTEND VIEW ENTITY`](ABENCDS_EXTEND_VIEW_ENTITY.html) of the DDL of ABAP CDS makes it possible to add new view fields to existing CDS views entities and CDS projection views by using CDS view entity extensions.

Two new [session variables](ABENCDS_SESSION_VARIABLE_V1.html) are available in ABAP CDS:

ABAP CDS now supports the new string function [`REPLACE_REGEXPR`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V2.html) that allows regular expressions to be replaced.

-   [`$session.user_timezone`](ABENCDS_SESSION_VARIABLE_V1.html), which returns the time zone defined in the user master record for the local user time.
-   [`$session.user_date`](ABENCDS_SESSION_VARIABLE_V1.html), which returns the local date of a user.

abenabap.html abennews.html abennews-75.html abennews-755.html