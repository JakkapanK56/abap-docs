---
title: "ABENNEWS-794-EML"
description: |
  ABENNEWS-794-EML - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-794-EML.htm"
abapFile: "ABENNEWS-794-EML.html"
keywords: ["if", "method", "class", "ABENNEWS", "794", "EML"]
---

[1\. RAP Handler Methods for RAP Default Values Functions](#ABAP_MODIFICATION_1@4@)

[2. C1 Release of Class `CL_ABAP_BEHAVIOR_SAVER_FAILED`](#ABAP_MODIFICATION_2@4@)

[3\. Unit Tests and Contract Check Violations](#ABAP_MODIFICATION_3@4@)

[RAP default values functions](ABENRAP_BO_DEFAULTING_GLOSRY.html) require an implementation in an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) in a specific way. See the topic [Handler Methods for RAP Default Values Functions](ABAPRAP_HANDLER_DEFAULT_VAL_FUNC.html).

The [RAP saver class](ABENABP_SAVER_CLASS_GLOSRY.html)\\ [`CL_ABAP_BEHAVIOR_SAVER_FAILED`](ABENABP_CL_ABAP_BEH_SAVER_FAILED.html) has been released with the [C1 release contract](ABENC1_CONTRACT_GLOSRY.html) for the ABAP language version [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html). See the blog post [*Using BAPIs in RAP*](https://blogs.sap.com/2022/11/30/using-bapis-in-rap/) for further details.

[ABAP contract checks](ABENCONTRACT_CHECKS_GLOSRY.html) violations are made visible in [unit tests](ABENUNIT_TEST_GLOSRY.html), i.e. the unit tests will fail if a contract check violation occurs.

abenabap.html abennews.html abennews-79.html abennews-794.html abennews-794-restful.html