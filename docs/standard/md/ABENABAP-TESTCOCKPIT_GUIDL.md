---
title: "ABENABAP-TESTCOCKPIT_GUIDL"
description: |
  ABENABAP-TESTCOCKPIT_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP-TESTCOCKPIT_GUIDL.htm"
abapFile: "ABENABAP-TESTCOCKPIT_GUIDL.html"
keywords: ["do", "if", "ABENABAP", "TESTCOCKPIT", "GUIDL"]
---

[ABAP Test Cockpit (ATC)](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ba879a6e2ea04d9bb94c7ccd7cdac446/62c41ad841554516bb06fb3620540e47) is a framework that is integrated into ABAP Workbench and the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html); it simplifies considerably the handling of the tests required during development. ATC makes it possible to execute and display results for various tests on development objects, for example:

Whereas Code Inspector is only integrated into the [ABAP development environment](ABENABAP_DEV_ENVIR_GLOSRY.html) by way of the [standard check](ABENCODE_INSPECTOR_GUIDL.html) and can otherwise only be used by calling a separate transaction, ATC is completely integrated into Object Navigator and Transport Organizer, and is available there for tests during development. ATC allows quality managers to perform mass tests. In the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html), some tests are provided only from ATC.

**Configure and use ABAP Test Cockpit correctly**

If ABAP Test Cockpit is available in your system, make sure that an ATC run is performed on all involved development objects and that no messages are displayed before you release the objects for transport. The ATC check should be integrated directly into the transport release.

ATC is a tool that can be used both by SAP developers and as part of central quality assurance management. For example, if a developer checks all development objects of a package in the development system using the same ATC configuration used by a quality manager as part of a mass run in a consolidation system, all messages can be taken care of without having to wait for feedback from the quality manager.

If ATC is configured correctly, the above rule includes the previous rules for [syntax warnings](ABENSYNTAX_CHECK_GUIDL.html), [extended program checks](ABENEXTENDED_PROGRAM_CHECK_GUIDL.html), and [Code Inspector](ABENCODE_INSPECTOR_GUIDL.html).

-   Extended program checks
-   Static performance tests
-   Unit tests with ABAP Unit
-   Static usability tests
-   Package checks
-   Security checks

-   More specifically, the security checks in the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) can be executed and managed from ATC, which makes their integration into the transport release possible.
-   Outside of SAP, ATC is available from the following releases:

-   AS ABAP 7.0, EhP2, Support Package 12
-   AS ABAP 7.0, EhP3, Support Package 05
-   AS ABAP 7.3, EhP1, Support Package 05
-   AS ABAP 7.4, Support Package 02

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenabap\_specific\_rules\_gdl.html abencheck\_correctness\_gdl.html