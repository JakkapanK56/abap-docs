---
title: "ABENABAP_LANGUAGE_VERSIONS"
description: |
  ABENABAP_LANGUAGE_VERSIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_LANGUAGE_VERSIONS.htm"
abapFile: "ABENABAP_LANGUAGE_VERSIONS.html"
keywords: ["do", "method", "class", "ABENABAP", "LANGUAGE", "VERSIONS"]
---

[ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) as well as other [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) have an attribute called [ABAP language version](ABENABAP_VERSION_GLOSRY.html). For an ABAP program, its language version defines the syntax rules and set of repository objects that can be addressed as APIs. For other repository objects the ABAP language version mainly defines the usable APIs.

Two main ABAP language versions are supported:

-   [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html)
-   [Restricted ABAP language version](ABENRESTRICTED_VERSION_GLOSRY.html) for [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html).

-   It covers a subset of the ABAP language scope.
-   See [Language Elements in ABAP Versions](ABENRESTRICTED_ABAP_ELEMENTS.html) for a list of ABAP language elements that are allowed in the ABAP for Cloud Development compared to Standard ABAP.
-   Access to APIs is restricted.
-   Repository objects with language version ABAP for Cloud Development can access objects which are [released APIs](ABENRELEASED_API_GLOSRY.html) for ABAP for Cloud Development or are in the same software component. Objects of a local software component with language version ABAP for Cloud Development can access the objects of all other of their software components with language version ABAP for Cloud Development.
-   Client isolation
-   [Client isolation](ABENCLIENT_ISOLATION_GLOSRY.html) is enforced by the implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and by the fact, that [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) can use [client-safe](ABENCLIENT_SAFE_GLOSRY.html) repository objects only.

-   [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html)
-   [Unrestricted ABAP language version](ABENUNRESTRICTED_VERSION_GLOSRY.html) for [classic ABAP](ABENCLASSIC_ABAP_GLOSRY.html). It covers the entire language scope of ABAP and besides the [package concept](ABENPACKAGE_CONCEPT_GLOSRY.html) there are no restrictions for accessing APIs.

-   The ABAP language version of a repository object can either be set explicitly or is derived implicitly, e.g. from the package or the software component.
-   Another [restricted ABAP language version](ABENRESTRICTED_VERSION_GLOSRY.html) is [ABAP for Key Users](ABENABAP_FOR_KEY_USERS_GLOSRY.html) that is used for development objects created using key user apps. Repository objects with language version ABAP for Key Users can access objects which are [released APIs](ABENRELEASED_API_GLOSRY.html) for key user apps or were created by key user apps and marked for use by other key user apps. For more information, see [Key User Extensibility](https://help.sap.com/docs/ABAP_PLATFORM_NEW/0f69f8fb28ac4bf48d2b57b9637e81fa/3ccb50e724b045508fea8b2cf1774b2b).
-   For more information about the ABAP language version of an ABAP program see [ABAP Language Versions](ABENABAP_VERSIONS.html).
-   The obsolete [Non-Unicode ABAP](ABENNON_UNICODE_ABAP_GLOSRY.html) is not considered as a valid ABAP language version any more.

abenabap.html abenabap\_versions\_and\_apis.html