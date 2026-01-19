---
title: "ABENBDL_DRAFT_HANDLING"
description: |
  ABENBDL_DRAFT_HANDLING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_DRAFT_HANDLING.htm"
abapFile: "ABENBDL_DRAFT_HANDLING.html"
keywords: ["do", "if", "data", "ABENBDL", "DRAFT", "HANDLING"]
---

`...  with draft;  \ | with collaborative draft;   ...`

[RAP draft handling](ABENRAP_DRAFT_HANDLING_GLOSRY.html) for a [business object](ABENBUSINESS_OBJECT_GLOSRY.html) is enabled either with the addition `with draft` or `with collaborative draft`. The corresponding addition is added in the [behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html) as it draft-enables the entire business object. It is not possible to implement draft capabilities for individual [entities](ABENRAP_BO_ENTITY_GLOSRY.html) within a business object.

RAP draft handling is in all scenarios completely managed by the [RAP transactional engine](ABENRAP_TRANSAC_ENGINE_GLOSRY.html). The application developer is not responsible for how draft data is written to the [draft database table](ABENDRAFT_TABLE_GLOSRY.html).

The additions `with draft` or `with collaborative draft` enable draft handling. There are several related syntax elements in the behavior definition:

Development guide for the ABAP RESTful Application Programming Model, topic [Draft](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/a81081f76c904b878443bcdaf7a4eb10?version=sap_cross_product_abap).

-   [RAP - `with draft`](ABENBDL_WITH_DRAFT.html)
-   [RAP - `with collaborative draft`](ABENBDL_WITH_COLL_DRAFT.html)

-   [Managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   In [projection BDEFs](ABENRAP_PROJECTION_BO_GLOSRY.html) and in [interface BDEFs](ABENCDS_INTERFACE_BDEF_GLOSRY.html), draft handling can be reused from the underlying base BO using the syntax addition `use draft` or `use collaborative draft`. For details, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

-   [`draft table`](ABENBDL_DRAFT_TABLE.html)\\ \[[`query`](ABENBDL_DRAFT_QUERY_VIEW.html)\]:
-   A [RAP draft table](ABENDRAFT_TABLE_GLOSRY.html) is required for storing [draft instances](ABENRAP_DRAFT_INSTANCE_GLOSRY.html). It is defined using the keyword `draft table DraftTableName`. A draft table is mandatory for draft-enabled BOs. A [draft query view](ABENDRAFT_QUERY_VIEW_GLOSRY.html) can optionally be specified for a RAP draft table using the addition [`query`](ABENBDL_DRAFT_QUERY_VIEW.html).
-   [`total etag`](ABENBDL_ETAG.html):
-   The [total ETag](ABENRAP_TOTAL_ETAG_GLOSRY.html) is a designated field in a draft-enabled business object that indicates changes between the active and the draft version. A total ETag is mandatory for draft-enabled implementations.
-   [draft actions](ABENBDL_DRAFT_ACTION.html):
-   [RAP draft actions](ABENRAP_BO_DRAFT_ACTION_GLOSRY.html) are actions that are available for draft-enabled business objects only. They allow data to be manipulated on the [RAP draft table](ABENDRAFT_TABLE_GLOSRY.html). They are implicitly available as soon as a business object is draft-enabled, but can be declared explicitly.
-   [draft-enabled associations](ABENBDL_ASSOCIATION.html):
-   A draft-enabled association retrieves active data if it is followed by an [active instance](ABENRAP_ACTIVE_INSTANCE_GLOSRY.html) and draft data if is followed by a [draft instance](ABENRAP_DRAFT_INSTANCE_GLOSRY.html). An association is draft enabled using the syntax addition [`with draft`](ABENBDL_ASSOCIATION.html). In a draft-enabled RAP BO, it is mandatory that associations are draft-enabled.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_bdef\_header.html