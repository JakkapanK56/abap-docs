---
title: "ABENABAP_API_RELEASE"
description: |
  ABENABAP_API_RELEASE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_API_RELEASE.htm"
abapFile: "ABENABAP_API_RELEASE.html"
keywords: ["do", "if", "case", "class", "ABENABAP", "API", "RELEASE"]
---

As stated in [ABAP - Language Versions](ABENABAP_LANGUAGE_VERSIONS.html), repository objects with a [restricted ABAP language version](ABENRESTRICTED_VERSION_GLOSRY.html) cannot freely access other repository objects. Besides some allowed accesses, for example inside the same software component, only access to those repository objects is allowed that are a [released API](ABENRELEASED_API_GLOSRY.html) for that language version. Releasing an API for a restricted ABAP language version comprises two classifications:

Repository objects with release contracts C0 and C1 can be made visible for the [Restricted ABAP language versions](ABENRESTRICTED_VERSION_GLOSRY.html)\\ [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html) and [ABAP for Key Users](ABENABAP_FOR_KEY_USERS_GLOSRY.html). For accessing released APIs from other repository objects of certain ABAP language versions, only release contract C1 is relevant.

The classification of a repository object as a released API is part of the development process. The classification must be part of the same software component or even package as the repository object itself. This ensures that APIs can be released only by organizations that are responsible for the repository objects.

See [Released APIs of the Current System](ABENRELEASED_APIS.html) for a list of repository objects that are released as APIs in the current system.

-   The repository object must be classified with an appropriate [release contract](ABENRELEASE_CONTRACT_GLOSRY.html).
-   The repository object must be classified as visible for the [restricted ABAP language version](ABENRESTRICTED_VERSION_GLOSRY.html).

-   It is recommended that released APIs are subject to an approval process, as it is the case at SAP.
-   For more information, see [Released APIs](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/c479660d07374c15a1a5fe83fdbb1337).
-   See [Contract Checks for Released APIs](ABENRESTRICTED_APIS_ATC_CHECKS.html) for rules that must be obeyed by providers and consumers.
-   The [package concept](ABENPACKAGE_CONCEPT_GLOSRY.html) can also restrict the access to APIs but is not enforced. Package checks are carried out in [ABAP Test Cockpit (ATC)](ABENABAP_TEST_COCKPIT_GLOSRY.html) and report only package errors that can be determined statically. There are no dynamic checks during the execution of a program.

abenabap.html abenabap\_versions\_and\_apis.html