---
title: "ABENNEWS-740_SP08-SLIN_SEC"
description: |
  ABENNEWS-740_SP08-SLIN_SEC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740_SP08-SLIN_SEC.htm"
abapFile: "ABENNEWS-740_SP08-SLIN_SEC.html"
keywords: ["do", "if", "data", "ABENNEWS", "740", "SP08", "SLIN", "SEC"]
---

The security checks in the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) were revised as follows in ABAP release 7.40, SP08, alongside general improvements in data flow analysis and performance:

[1\. Use of System Fields](#ABAP_MODIFICATION_1@4@)

[2\. Security-Relevant Function Modules](#ABAP_MODIFICATION_2@4@)

[3\. Administration Transaction](#ABAP_MODIFICATION_3@4@)

The [system fields](ABENSYSTEM_FIELD_GLOSRY.html)\\ `sy-host`, `sy-sysid`, and `sy-mandt` in [logical expressions](ABENLOGICAL_EXPRESSION_GLOSRY.html) can indicate potential [back doors](ABENSYSTEM_DEPENDENT_SCRTY.html), like when using `sy-uname`, and are now checked accordingly.

It is possible to define additional system fields, for which this check is performed, by implementing [BAdI](ABENBADI_GLOSRY.html)\\ `SLIN_BADI_SEC_BACKDOOR`.

The check that ensures that the return code `sy-subrc` is evaluated when a security-relevant function module (such as `AUTHORITY_CHECK_TCODE` or `FILE_VALIDATE_NAME`) is called was revised so that the list of predefined function modules can be expanded using the [BAdI](ABENBADI_GLOSRY.html)\\ `SLIN_BADI_SEC_PROCEDURES`. The program `RSLIN_SEC_DISPLAY_SECREL_PROC` displays the full list.

The new transaction `SLIN_ADMIN` is used for the administration of the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) and the security checks.

abenabap.html abennews.html abennews-740.html abennews-740\_sp08.html