---
title: "ABENNEWS-740-SLIN_SEC"
description: |
  ABENNEWS-740-SLIN_SEC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740-SLIN_SEC.htm"
abapFile: "ABENNEWS-740-SLIN_SEC.html"
keywords: ["do", "if", "ABENNEWS", "740", "SLIN", "SEC"]
---

[1\. Security Tests in the Extended Program Check](#ABAP_MODIFICATION_1@4@)

[2\. Documentation of Security Risks](#ABAP_MODIFICATION_2@4@)

The new security checks in the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) scan ABAP programs for security issues. The security checks perform a static analysis of the [ABAP source code](ABENABAP_SOURCE_CODE_GLOSRY.html) and report any potential [security risks](ABENABAP_SECURITY.html).

The security checks can be executed as follows:

If used from ATC, the checks are integrated into the transport release functions and can be executed from the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html).

The security checks must be purchased as a separate product. Additional licensing costs are incurred if the security checks are used in customer systems. The program `RSLIN_SEC_LICENSE_SETUP` can be used to provide the security check option in a system. This requires the authorization modify global check variants in ATC.

Potential security risks in ABAP programs are documented in the [ABAP security notes](ABENABAP_SECURITY.html). \\n

-   Directly from the extended program check in ABAP Workbench
-   From [Code Inspector](ABENCODE_INSPECTOR_GLOSRY.html)
-   From [ABAP Test Cockpit (ATC)](ABENABAP_TEST_COCKPIT_GLOSRY.html)

abenabap.html abennews.html abennews-740.html abennews-740\_sp05.html