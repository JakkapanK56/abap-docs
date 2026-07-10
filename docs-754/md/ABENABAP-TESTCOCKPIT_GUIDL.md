---
title: "ABAP Test Cockpit - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap-testcockpit_guidl.htm"
abapFile: "abenabap-testcockpit_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [ABAP-Specific Rules](ABENABAP_SPECIFIC_RULES_GUIDL.md) →  [Checks for Correctness](ABENCHECK_CORRECTNESS_GUIDL.md) → 

ABAP Test Cockpit

Background

ABAP Test Cockpit (ATC) is a framework that is integrated into ABAP Workbench and the [ABAP Development Tools (ADT)](ABENADT_GLOSRY.md "Glossary Entry"); it simplifies considerably the handling of the tests required during development. ATC makes it possible to execute and display results for various tests on development objects, for example:

-   Extended program checks

-   Static performance tests

-   Module tests with ABAP Unit

-   Static usability tests

-   Package checks

-   Security checks

Whereas Code Inspector is only integrated into the development environment by way of the [standard check](ABENCODE_INSPECTOR_GUIDL.md "Guideline") and can otherwise only be used by calling a separate transaction, ATC is completely integrated into Object Navigator and Transport Organizer, and is available there for tests during development. ATC allows quality managers to perform mass tests. In the [ABAP Development Tools (ADT)](ABENADT_GLOSRY.md "Glossary Entry"), some tests are provided only from ATC.

Rule

Configure and use ABAP Test Cockpit correctly

If ABAP Test Cockpit is available in your system, make sure that an ATC run is performed on all involved development objects and that no messages are displayed before you release the objects for transport. The ATC check should be integrated directly into the transport release.

Details

ATC is a tool that can be used both by SAP developers and as part of central quality assurance management. For example, if a developer checks all development objects of a package in the development system using the same ATC configuration used by a quality manager as part of a mass run in a consolidation system, he can go ahead and correct all messages without having to wait for feedback from the quality manager.

If ATC is configured correctly, the above rule includes the previous rules for [syntax warnings](ABENSYNTAX_CHECK_GUIDL.md "Guideline"), [extended program checks](ABENEXTENDED_PROGRAM_CHECK_GUIDL.md "Guideline"), and [Code Inspector](ABENCODE_INSPECTOR_GUIDL.md "Guideline").

Notes

-   More specifically, the security checks in the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.md "Glossary Entry") can be executed and managed from ATC, which makes their integration into the transport release possible.

-   Outside of SAP, ATC is available from the following releases:

-   AS ABAP 7.0, EhP2, Support Package 12

-   AS ABAP 7.0, EhP3, Support Package 05

-   AS ABAP 7.3, EhP1, Support Package 05

-   AS ABAP 7.4, Support Package 02
