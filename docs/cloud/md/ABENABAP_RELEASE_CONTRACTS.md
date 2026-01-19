---
title: "ABENABAP_RELEASE_CONTRACTS"
description: |
  ABENABAP_RELEASE_CONTRACTS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_RELEASE_CONTRACTS.htm"
abapFile: "ABENABAP_RELEASE_CONTRACTS.html"
keywords: ["do", "if", "method", "class", "data", "ABENABAP", "RELEASE", "CONTRACTS"]
---

A repository object can be classified by a [release contract](ABENRELEASE_CONTRACT_GLOSRY.html). A release contract is the prerequisite for classifying a repository object as a [released API](ABENRELEASED_API_GLOSRY.html) that can be accessed in a [restricted ABAP language version](ABENRESTRICTED_VERSION_GLOSRY.html). It ensures a certain stability regarding consistency and compatibility of repository objects that are released as APIs. For repository objects delivered by SAP, compliance with a release contract is checked by special [ATC checks](ABENATC_GLOSRY.html).

The following release contracts are available:

-   **Extend (C0)**
-   This contract ensures stability at dedicated extension points to allow for a certain extensibility.
-   Contract C0 is relevant for repository objects that are enhanced by enhancement tools, e.g. of the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) or [ABAP CDS](ABENABAP_CDS_GLOSRY.html).
-   For more information, see [Extend (C0)](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/2ce344a782d74d8aab073fa188af5116) on SAP Help Portal.
-   **Use System-Internally (C1)**
-   This contract ensures a technically stable public interface for system-internal use. Existing visible components, for example parameters, elements, or CDS associations, must not be changed in an incompatible way. Optional components might be added later.
-   Contract C1 is relevant for repository objects that are accessed by different [ABAP language versions](ABENABAP_VERSION_GLOSRY.html).
-   For more information, see [Use System-Internally (C1)](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/3ccb57a1a4d04ee192fdc2a849a89158).
-   **Use as Remote API (C2)**
-   This contract ensures a technically stable public interface for use as remote API. It is similar to C1 but additionally guarantees, that external consumers of the API do not need to be adjusted after an upgrade.
-   Contract C2 is relevant only for external consumption.
-   For more information, see [Use as Remote API (C2)](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/9c7f9ba825064053874d5870bcb991fb).
-   **Manage Configuration Content (C3)**
-   This contract ensures a stable persistence for own configuration content that can be exported, imported, displayed and edited using dedicated APIs. No key or other fields must be changed. Non-key fields might be added later.
-   Contract C3 is relevant for Business Configuration Tools.
-   **Use in ABAP-Managed Database Procedures (AMDP) (C4)**
-   This contract ensures a technically stable public interface for use in [ABAP Managed Database Procedures](ABENABAP_MANAGED_DB_PROC_GLOSRY.html). It is similar to C1 but in contrast to C1, no optional components can be added later. No changes are allowed.
-   Contract C4 is relevant for [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) that are accessed by other AMDP methods, such as [BAdI methods](ABENBADI_METHOD_GLOSRY.html) implemented as AMDP-methods.
-   For more information, see [Use in ABAP-Managed Database Procedures (C4)](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/288854b83f764fc2b7ae8c5f62140cfe).

-   For consistency reasons, a repository object with release contract C1 must be classified as visible for a least one [restricted ABAP language version](ABENRESTRICTED_VERSION_GLOSRY.html). and thus be released as an API.
-   See also [Contract Checks for Released APIs](ABENRESTRICTED_APIS_ATC_CHECKS.html) for an overview of the according rules.

abenabap.html abenabap\_versions\_and\_apis.html