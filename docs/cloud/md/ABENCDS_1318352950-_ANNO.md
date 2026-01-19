---
title: "Specify"
description: |
  Specify deviating release state settings for an element in a released CDS object. This is required only if the release state of the element deviates from the release state of the CDS object. Defines the earliest point in time when the element release state change from `#DEPRECATED` to `#DECOMMISSI
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1318352950-_ANNO.htm"
abapFile: "ABENCDS_1318352950-_ANNO.html"
keywords: ["do", "if", "ABENCDS", "1318352950", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Specify

Specify deviating release state settings for an *element* in a released CDS object.

This is required only if the release state of the element deviates from the release state of the CDS object.

Defines the earliest point in time when the element release state change from `#DEPRECATED` to `#DECOMMISSIONED` will take effect for your customers, given as month of a year. This annotation is used in combination with the annotation `@API.element.releaseState: #DEPRECATED` to schedule the change to `#DECOMMISSIONED`.

Month of the year of the planned release state change to `#DECOMMISSIONED` in the ISO format `YYYY-MM`, e.g. `2024-08` for August 2024

-   the usability of an *annotation* in CDS objects defined in a restricted ABAP language version or
-   deviating release state settings for an *element* in a released CDS entity in a restricted ABAP language version.

-   the usability of an *annotation* in CDS objects defined in a restricted ABAP language version or
-   deviating release state settings for an *element* in a released CDS entity in a restricted ABAP language version.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `API.element.decommissioningPlannedForYearMonth`\\ **Scope** `#ELEMENT`\\ **Type** `String(7)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`