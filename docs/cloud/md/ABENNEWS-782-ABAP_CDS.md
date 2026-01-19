---
title: "ABENNEWS-782-ABAP_CDS"
description: |
  ABENNEWS-782-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-782-ABAP_CDS.htm"
abapFile: "ABENNEWS-782-ABAP_CDS.html"
keywords: ["do", "if", "data", "ABENNEWS", "782", "ABAP", "CDS"]
---

[1\. CDS Hierarchy, Caching Policy](#ABAP_MODIFICATION_1@4@)

[2. CDS Projection View, `REDEFINE ASSOCIATION`](#ABAP_MODIFICATION_2@4@)

[3\. ABAP Program for Migration Analysis](#ABAP_MODIFICATION_3@4@)

A hierarchy definition [`DEFINE HIERARCHY`](ABENCDS_F1_DEFINE_HIERARCHY.html) can now use the new addition `CACHE ON|OFF|FORCE` to specify the caching policy for a generated hierarchy.

In CDS projection views, it is now possible to redefine the CDS associations from the projected entity in the header part. This is done using the keyword [`REDEFINE ASSOCIATION`](ABENCDS_PROJ_VIEW_REDEFINED_ASSOC.html). Redefinition can include a new filter, alias name, and redirection to a new association target, which must also be a CDS projection view, thus moving the complete data model to the projection layer.

The following documented ABAP program is now available for evaluating whether a migration from a CDS DDIC-based view (obsolete) to a CDS view entity is possible:

`RUTDDLS_MIGRATION_CANDIDATES`.

abenabap.html abennews.html abennews-78.html abennews-782.html