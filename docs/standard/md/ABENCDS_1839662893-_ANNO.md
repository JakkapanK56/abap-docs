---
title: "Specify"
description: |
  Specify deviating release state settings for an element in a released CDS object. This is required only if the release state of the element deviates from the release state of the CDS object. Defines the deviating release state of an element in a released CDS object. It overrides the release state
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1839662893-_ANNO.htm"
abapFile: "ABENCDS_1839662893-_ANNO.html"
keywords: ["do", "if", "ABENCDS", "1839662893", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

In the ABAP language versions [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html) and [ABAP for Key Users](ABENABAP_FOR_KEY_USERS_GLOSRY.html), accessing an element forbidden using `@API.element.releaseState:#DEPRECATED` in an ABAP program or CDS entity produces a syntax check warning. An element proposed by `@API.element.successor` should be used instead.

Specify

Specify deviating release state settings for an *element* in a released CDS object.

This is required only if the release state of the element deviates from the release state of the CDS object.

Defines the deviating release state of an element in a released CDS object. It overrides the release state of the CDS object for individual elements.

The element is deprecated and thus should no longer be used.

If accessed, the element produces a syntax check warning in restricted ABAP language versions.

Together with this release state, a successor for the deprecated element must be specified using annotation `@API.element.successor`.

The element is decommissioned and thus is no longer available for productive use.

Together with this release state, a successor for the decommissioned element must be specified using annotation `@API.element.successor`.

-   the usability of an *annotation* in CDS objects defined in a restricted ABAP language version or
-   deviating release state settings for an *element* in a released CDS entity in a restricted ABAP language version.

-   the usability of an *annotation* in CDS objects defined in a restricted ABAP language version or
-   deviating release state settings for an *element* in a released CDS entity in a restricted ABAP language version.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `API.element.releaseState`\\ **Scope** `#ELEMENT`\\ **Type** `String(30)`\\ **Enums** `#DECOMMISSIONED, #DEPRECATED`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_api\_a.html