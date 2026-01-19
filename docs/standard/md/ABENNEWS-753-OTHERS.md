---
title: "ABENNEWS-753-OTHERS"
description: |
  ABENNEWS-753-OTHERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-753-OTHERS.htm"
abapFile: "ABENNEWS-753-OTHERS.html"
keywords: ["if", "case", "method", "class", "ABENNEWS", "753", "OTHERS"]
---

[1\. &ABAP\_FOR\_CLOUD@@](#ABAP_MODIFICATION_1@4@)

[2\. Obsolete ABAP Language Versions](#ABAP_MODIFICATION_2@4@)

[3\. New Methods for Handling Code Pages](#ABAP_MODIFICATION_3@4@)

[4. Error Message After `SUBMIT VIA JOB`](#ABAP_MODIFICATION_4@4@)

In ABAP release 7.53, a new [ABAP version](ABENABAP_VERSION_GLOSRY.html)\\ [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html) was introduced. The internal version ID in the column `UCCHECK` of the system table `TRDIR` is *5*.

The [ABAP language versions](ABENABAP_VERSION_GLOSRY.html)

are now [obsolete](ABENABAP_VERSIONS_OBSOLETE.html) and should no longer be used.

The methods `CONVERT` of the interfaces [`IF_ABAP_CONV_OUT`](ABENCL_ABAP_CONV_CODEPAGE.html) and [`IF_ABAP_CONV_IN`](ABENCL_ABAP_CONV_CODEPAGE.html) are more robust than the methods `CONVERT_TO` and `CONVERT_FROM` of the class [`CL_ABAP_CODEPAGE`](ABENCL_ABAP_CODEPAGE_OBSOLETE.html) and have replaced them.

The method `GET_ERROR_MESSAGE` of the class `CL_ABAP_SUBMIT_HANDLING` can now be used to read the last error message in cases where it was not possible to schedule a background task using [`SUBMIT VIA JOB`](ABAPSUBMIT_VIA_JOB.html).

-   [Static ABAP with restricted object use](ABENABAP_STATIC_RESTR_GLOSRY.html)
-   [Standard ABAP with restricted object use](ABENSTANDARD_ABAP_RESTR_OBJ_GLOSRY.html)

abenabap.html abennews.html abennews-75.html abennews-753.html