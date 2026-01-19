---
title: "ABENCDS_2063101229-_ANNO"
description: |
  ABENCDS_2063101229-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_2063101229-_ANNO.htm"
abapFile: "ABENCDS_2063101229-_ANNO.html"
keywords: ["do", "if", "class", "data", "ABENCDS", "2063101229", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`VDM Annotations`](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/efe9c80fc6ba4db692e08340c9151a17).

VDM annotations classify CDS views of the virtual data model in terms of their admissible resuse options and provisioned content.

The intention of the annotations is to enable certain functionalities that are based on the VDM, such as view browsers, to interpret the CDS entities correctly.

**Evaluation Runtimes**

VDM annotations have no influence on runtime, so there are no dependencies for runtime engines.

This annotation defines which view type a specific VDM CDS view belongs to.

CDS views of type `BASIC` are interface views that are intended for reuse. They form the core data basis without data redundancies.

CDS views of type `COMPOSITE` are reusable interface views. They provide data that is derived and/or composed from `BASIC` views.

CDS views of type `CONSUMPTION` serve specific application purposes and are based on `BASIC`, `COMPOSITE`, or `TRANSACTIONAL` views.

CDS views of type `EXTENSION` are also known as *Extension include views*. They are technical carrier views for key user field extensibility.

CDS views of type `DERIVATION_FUNCTION` are used to define derivations for parameters and filter values.

This annotation works in combination with the following related annotations:

CDS views of type `TRANSACTIONAL` are special composite views that define the transactional runtime of an object (including draft support).

-   `@Consumption.derivation`
-   `@Consumption.filter` (for filter values)

-   `@Consumption.derivation`
-   `@Consumption.filter` (for filter values)

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `VDM.viewType`\\ **Scope** `#ENTITY`\\ **Type** `String(30)`\\ **Enums** `#BASIC, #COMPOSITE, #CONSUMPTION, #DERIVATION_FUNCTION, #EXTENSION,#TRANSACTIONAL`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_vdm\_f.html