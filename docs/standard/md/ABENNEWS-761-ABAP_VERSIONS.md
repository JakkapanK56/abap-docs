---
title: "ABENNEWS-761-ABAP_VERSIONS"
description: |
  ABENNEWS-761-ABAP_VERSIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-761-ABAP_VERSIONS.htm"
abapFile: "ABENNEWS-761-ABAP_VERSIONS.html"
keywords: ["insert", "if", "data", "ABENNEWS", "761", "ABAP", "VERSIONS"]
---

[1\. Expanded Version ID](#ABAP_MODIFICATION_1@4@)

[2\. Restricted ABAP for Key Users](#ABAP_MODIFICATION_2@4@)

Before ABAP release 7.61 there were only two language versions of ABAP: Standard ABAP and the obsolete Non-Unicode ABAP. The language versions were distinguished using an ID defined internally for each program in the column `UCCHECK` of the system table `TRDIR`. This ID was initial for Non-Unicode ABAP and *X* for Standard ABAP.

From ABAP release 7.61, the meaning of the column `UCCHECK` in the database table `TRDIR` has been expanded to cover a general version ID. This new ID can have values for further [ABAP language versions](ABENABAP_VERSION_GLOSRY.html) other than the initial value and the value *X*. From ABAP release 7.61, the value *2* can also be specified for ABAP for [Key Users](ABENABAP_FOR_KEY_USERS_GLOSRY.html).

These changes must be respected in all places where the column `UCCHECK` in the database table `TRDIR` is accessed implicitly or explicitly. This column is evaluated by the ABAP statements [`INSERT REPORT`](ABAPINSERT_REPORT.html) and [`SYNTAX-CHECK`](ABAPSYNTAX-CHECK_FOR_ITAB.html). For this reason, the addition [`UNICODE ENABLING`](ABAPINSERT_REPORT_OBSOLETE.html) of the statement [`INSERT REPORT`](ABAPINSERT_REPORT.html) has been replaced by the universal addition `VERSION` and is now [obsolete](ABAPINSERT_REPORT_OBSOLETE.html).

In ABAP release 7.61, a new [ABAP language version](ABENABAP_VERSION_GLOSRY.html) for ABAP for [Key Users](ABENABAP_FOR_KEY_USERS_GLOSRY.html) was introduced. This version is designed for enhancements in delivered [enhancement points](ABENENHANCEMENT_POINT_GLOSRY.html). The internal version ID in column `UCCHECK` of system table `TRDIR` is *2*.

abenabap.html abennews.html abennews-76.html abennews-761.html