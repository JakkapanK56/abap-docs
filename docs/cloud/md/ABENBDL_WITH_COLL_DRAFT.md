---
title: "ABENBDL_WITH_COLL_DRAFT"
description: |
  ABENBDL_WITH_COLL_DRAFT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_WITH_COLL_DRAFT.htm"
abapFile: "ABENBDL_WITH_COLL_DRAFT.html"
keywords: ["do", "data", "ABENBDL", "WITH", "COLL", "DRAFT"]
---

`...  with collaborative draft;   ...`

The addition `with collaborative draft` is added in the [behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html) and it enables [collaborative draft](ABENRAP_COLLABORATIVE_DRAFT_GLOSRY.html) capabilities for the [business object](ABENBUSINESS_OBJECT_GLOSRY.html). Additionally, the [draft action](ABENBDL_DRAFT_ACTION.html)\\ `Share` needs to be added in the [behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) for collaborative draft capabilities. [RAP draft handling](ABENRAP_DRAFT_HANDLING_GLOSRY.html) is in all scenarios completely managed by the [RAP transactional engine](ABENRAP_TRANSAC_ENGINE_GLOSRY.html). The application developer is not responsible for how draft data is written to the [draft database table](ABENDRAFT_TABLE_GLOSRY.html).

Development guide for the ABAP RESTful Application Programming Model, topic [Collaborative Draft Handling](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/18d41e2a7be24ff99b43c4c88711e86c?version=sap_cross_product_abap).

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_bdef\_header.html abenbdl\_draft\_handling.html