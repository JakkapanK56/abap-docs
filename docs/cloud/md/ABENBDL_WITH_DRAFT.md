---
title: "ABENBDL_WITH_DRAFT"
description: |
  ABENBDL_WITH_DRAFT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_WITH_DRAFT.htm"
abapFile: "ABENBDL_WITH_DRAFT.html"
keywords: ["do", "data", "ABENBDL", "WITH", "DRAFT"]
---

`...  with draft;   ...`

The addition `with draft` enables [RAP draft handling](ABENRAP_DRAFT_HANDLING_GLOSRY.html) for a [business object](ABENBUSINESS_OBJECT_GLOSRY.html). It is added in the [behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html) as it draft-enables the entire business object. It enables the business object to have [exclusive draft](ABENRAP_EXCLUSIVE_DRAFT_GLOSRY.html) capabilities. It is not possible to implement draft capabilities for individual [entities](ABENRAP_BO_ENTITY_GLOSRY.html) within a business object.

RAP draft handling is in all scenarios completely managed by the [RAP transactional engine](ABENRAP_TRANSAC_ENGINE_GLOSRY.html). The application developer is not responsible for how draft data is written to the [draft database table](ABENDRAFT_TABLE_GLOSRY.html).

Development guide for the ABAP RESTful Application Programming Model, topic [Draft](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/a81081f76c904b878443bcdaf7a4eb10?version=sap_cross_product_abap).

-   [RAP BDL - draft actions Edit, Discard, Prepare](ABENBDL_DRAFT_ACTION2_ABEXA.html)
-   [RAP BDL - draft action Activate](ABENBDL_DRAFT_ACTION1_ABEXA.html)

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_bdef\_header.html abenbdl\_draft\_handling.html