---
title: "ABENNEWS-781-ABAP_CDS"
description: |
  ABENNEWS-781-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-781-ABAP_CDS.htm"
abapFile: "ABENNEWS-781-ABAP_CDS.html"
keywords: ["if", "ABENNEWS", "781", "ABAP", "CDS"]
---

[1\. New Session Variables for User Time Zone and User Date](#ABAP_MODIFICATION_1@4@)

[2\. New String Function for Regular Expressions](#ABAP_MODIFICATION_2@4@)

Two new [session variables](ABENCDS_SESSION_VARIABLE_V1.html) are available in ABAP CDS:

ABAP CDS now supports the new string function [`REPLACE_REGEXPR`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V2.html) that allows regular expressions to be replaced.

-   [`$session.user_timezone`](ABENCDS_SESSION_VARIABLE_V1.html), which returns the time zone defined in the user master record for the local user time.
-   [`$session.user_date`](ABENCDS_SESSION_VARIABLE_V1.html), which returns the local date of a user.

abenabap.html abennews.html abennews-78.html abennews-781.html