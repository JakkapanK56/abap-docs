---
title: "ABENABAP_TECHNO"
description: |
  ABENABAP_TECHNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_TECHNO.htm"
abapFile: "ABENABAP_TECHNO.html"
keywords: ["if", "method", "class", "data", "ABENABAP", "TECHNO"]
---

The term [ABAP](ABENABAP_GLOSRY.html) as an abbreviation for *Advanced Business Application Programming* encompasses the entire ABAP technology provided for and by an [ABAP system](ABENABAP_SYSTEM_GLOSRY.html) on which ABAP-based applications are developed and executed. Originally, ABAP stood for the [ABAP language](ABENABALA_GLOSRY.html) only.

ABAP technology is not provided as a standalone product, but it is used by and shipped with SAP products such as:

[ABAP releases](ABENABAP_RELEASE_GLOSRY.html) are coupled to the respective product releases.

The ABAP technology provides an [ABAP development environment (ABAP DE)](ABENABAP_DEV_ENVIR_GLOSRY.html) that mainly consists of:

The ABAP technology supports mainly two programming paradigms:

The rules for ABAP Cloud are based on the rules for [ABAP APIs](ABENABAP_VERSIONS_AND_APIS.html).

The restricted rules of ABAP Cloud are not enforced for all products but can and should always be followed. For example, newly created repository objects can and should be assigned the ABAP language version ABAP for Cloud Development also on the [ABAP Platform](ABENABAP_PLATFORM_GLOSRY.html) of [SAP S/4HANA](ABENSAP_S4HANA_GLOSRY.html).

-   [SAP BTP ABAP environment](ABENSAP_BTP_ABAP_ENV_GLOSRY.html)
-   [SAP S/4HANA Cloud Public Edition](ABENSAP_S4HANA_CPUB_GLOSRY.html)
-   [SAP S/4HANA](ABENSAP_S4HANA_GLOSRY.html)
-   [SAP S/4HANA Cloud Private Edition](ABENSAP_S4HANA_CPRIV_GLOSRY.html)

-   Programming languages:

-   The [ABAP language](ABENABALA_GLOSRY.html) for [ABAP classes](ABENCLASS_GLOSRY.html) and [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html).
-   [CDS DDL](ABENCDS_DDL_GLOSRY.html) and other CDS dialects for metadata definitions in [ABAP CDS](ABENABAP_CDS_GLOSRY.html).
-   [XSLT](ABENXSLT_GLOSRY.html) and [Simple Transformations (ST)](ABENSIMPLE_TRANSFORMATION_GLOSRY.html) for data transformations.

-   Depending on the programming paradigm, different [ABAP language versions](ABENABAP_VERSION_GLOSRY.html) can be used.
-   Development tools for developing ABAP applications.
-   Besides ABAP Editors for editing [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html), there is a variety of tools for editing all kinds of [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html). The tools are mainly distinguished by two variants:

-   Tools of the Eclipse-based [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html)
-   Tools of the [SAP GUI](ABENSAP_GUI_GLOSRY.html)\-based [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html).

-   The possibility to access APIs made up by other [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html).
-   Important examples are usage of metadata defined in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) or in [ABAP Core Data Services (ABAP CDS)](ABENABAP_CDS_GLOSRY.html) or calling external functional units as [methods](ABENMETHOD_GLOSRY.html) of [global classes](ABENGLOBAL_CLASS_GLOSRY.html) in ABAP programs. Besides access to objects located on the same AS ABAP, access to external development objects is also possible.

-   [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html)
-   ABAP Cloud is a programming paradigm for building ABAP-based cloud-ready business apps, services or extensions. For programming in ABAP Cloud, a subset of the complete ABAP technology is used, where [special rules](ABENABAP_VERSIONS_AND_APIS.html) apply:

-   [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html) must be used as [ABAP language version](ABENABAP_VERSION_GLOSRY.html) that is restricted compared to [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html).
-   Access to [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) is governed by a list of [released APIs](ABENRELEASED_API_GLOSRY.html) that is checked statically as well as during runtime.
-   Only [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) can be used as development tools. [SAP GUI](ABENSAP_GUI_GLOSRY.html) cannot be used.

-   ABAP Cloud is used in products as follows:

-   In [SAP BTP ABAP environment](ABENSAP_BTP_ABAP_ENV_GLOSRY.html), ABAP Cloud is mandatory ([Steampunk](ABENSTEAMPUNK_GLOSRY.html)).
-   In [SAP S/4HANA Cloud Public Edition](ABENSAP_S4HANA_CPUB_GLOSRY.html), partners and customers must use ABAP Cloud for extensions via the restricted [SAP S/4HANA Cloud ABAP environment](ABENS4_HANA_CLOUD_ABAP_ENV_GLOSRY.html) ([embedded Steampunk](ABENEMBEDDED_STEAMPUNK_GLOSRY.html)).
-   In [SAP S/4HANA](ABENSAP_S4HANA_GLOSRY.html) and [SAP S/4HANA Cloud Private Edition](ABENSAP_S4HANA_CPRIV_GLOSRY.html), ABAP Cloud can be used (also via the [SAP S/4HANA Cloud ABAP environment](ABENS4_HANA_CLOUD_ABAP_ENV_GLOSRY.html)) when developing new products but is not mandatory for all developments.

-   [Classic ABAP](ABENCLASSIC_ABAP_GLOSRY.html)
-   Classic ABAP is an evolutionary grown technology for legacy solutions. For ABAP developments in classic ABAP, the complete ABAP technology can be used:

-   The [ABAP language version](ABENABAP_VERSION_GLOSRY.html) can freely be chosen for all repository objects. By default, [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html) is set.
-   [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) and the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html) can be both used as development tools.
-   All [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) can be accessed from other repository objects. A [package concept](ABENPACKAGE_CONCEPT_GLOSRY.html) is available but not enforced.

-   Products such as [SAP S/4HANA](ABENSAP_S4HANA_GLOSRY.html) still use classic ABAP on an [ABAP Platform](ABENABAP_PLATFORM_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_oview.html