---
title: "Specify"
description: |
  Specifies in an annotation definition for which ABAP language version the annotation is released as an API. The ABAP language version of a CDS object is determined by the system during creation of its Data Definition: If the annotation is not specified, the value `#NOT_RELEASED` is used. The annot
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_213745370-_ANNO.htm"
abapFile: "ABENCDS_213745370-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "213745370", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Specify

Specifies in an annotation definition for which ABAP language version the annotation is released as an API.

The ABAP language version of a CDS object is determined by the system during creation of its *Data Definition*:

If the annotation is not specified, the value `#NOT_RELEASED` is used.

The annotation is not released as an API.

The annotation can only be used in CDS objects defined in ABAP language version `Standard ABAP`.

The annotation is released for CDS objects defined in ABAP language version `ABAP for Cloud Development`.

The annotation is released for CDS objects defined in ABAP language version `ABAP for Key Users`.

-   the usability of an *annotation* in CDS objects defined in a restricted ABAP language version or
-   deviating release state settings for an *element* in a released CDS entity in a restricted ABAP language version.

-   In the *SAP BTP ABAP Environment* and *S/4HANA ABAP Environment*, all CDS objects get the ABAP language version `ABAP for Cloud Development`.
-   CDS objects created by *key user apps* adhere to the rules defined for ABAP language version `ABAP for Key Users`.
-   In other environments, all newly created CDS objects get the ABAP language version specified as default for the package in which they are created.

-   the usability of an *annotation* in CDS objects defined in a restricted ABAP language version or
-   deviating release state settings for an *element* in a released CDS entity in a restricted ABAP language version.

-   In the *SAP BTP ABAP Environment* and *S/4HANA ABAP Environment*, all CDS objects get the ABAP language version `ABAP for Cloud Development`.
-   CDS objects created by *key user apps* adhere to the rules defined for ABAP language version `ABAP for Key Users`.
-   In other environments, all newly created CDS objects get the ABAP language version specified as default for the package in which they are created.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `API.state[ ]`\\ **Scope** `#ANNOTATION`\\ **Type** `String(40)`\\ **Enums** `#NOT_RELEASED, #RELEASED_FOR_KEY_USER_APPS, #RELEASED_FOR_SAP_CLOUD_PLATFORM`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_api\_a.html