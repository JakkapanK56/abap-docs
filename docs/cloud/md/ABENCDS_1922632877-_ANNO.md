---
title: "Specify"
description: |
  Specify deviating release state settings for an element in a released CDS object. This is required only if the release state of the element deviates from the release state of the CDS object. Defines the name of the successor element which should be used instead of a deprecated or decommissioned el
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1922632877-_ANNO.htm"
abapFile: "ABENCDS_1922632877-_ANNO.html"
keywords: ["do", "if", "ABENCDS", "1922632877", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Specify

Specify deviating release state settings for an *element* in a released CDS object.

This is required only if the release state of the element deviates from the release state of the CDS object.

Defines the name of the successor element which should be used instead of a deprecated or decommissioned element.

Name of an element of the type `ElementRef`.

-   the usability of an *annotation* in CDS objects defined in a restricted ABAP language version or
-   deviating release state settings for an *element* in a released CDS entity in a restricted ABAP language version.

-   the usability of an *annotation* in CDS objects defined in a restricted ABAP language version or
-   deviating release state settings for an *element* in a released CDS entity in a restricted ABAP language version.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `API.element.successor`\\ **Scope** `#ELEMENT`\\ **Type** `ElementRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`