---
title: "The new element annotations"
description: |
  can be used to override releases of the individual elements and successors can be specified for forbidden elements. A new type of CDS entity is available: the CDS projection view. A CDS projection view(ABENCDS_DEFINE_VIEW_AS_PROJECTION.html) is a direct projection of the underlying CDS view and ex
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-776-ABAP_CDS.htm"
abapFile: "ABENNEWS-776-ABAP_CDS.html"
keywords: ["if", "data", "ABENNEWS", "776", "ABAP", "CDS"]
---

[1\. Annotation for Database Hints](#ABAP_MODIFICATION_1@4@)

[2\. Annotations for Releasing Elements](#ABAP_MODIFICATION_2@4@)

[3\. CDS Projection Views](#ABAP_MODIFICATION_3@4@)

The [framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ [`@Consumption.dbHints`](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html) replaces the [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ [`@AbapCatalog.dbHints`](ABENCDS_ANNOTATIONS_ABAP_TABLES.html) and makes it obsolete. The ABAP annotation is evaluated by frameworks such as SADL and not by the ABAP runtime framework.

The new element annotations

can be used to override releases of the individual elements and successors can be specified for forbidden elements.

A new type of CDS entity is available: the CDS projection view. A [CDS projection view](ABENCDS_DEFINE_VIEW_AS_PROJECTION.html) is a direct projection of the underlying CDS view and exposes only a subset of elements of the projected entity. A CDS projection view is defined using `DEFINE VIEW ENTITY AS PROJECTION ON` in a CDS data definition.

-   [`@API.element.releaseState`](ABENCDS_F1_ELEMENT_ANNOTATION.html)
-   [`@API.element.successor`](ABENCDS_F1_ELEMENT_ANNOTATION.html)

abenabap.html abennews.html abennews-77.html abennews-776.html