---
title: "ABENBDL_WITH_DRAFT"
description: |
  ABENBDL_WITH_DRAFT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_WITH_DRAFT.htm"
abapFile: "ABENBDL_WITH_DRAFT.html"
keywords: ["update", "delete", "do", "if", "class", "data", "ABENBDL", "WITH", "DRAFT"]
---

`...  with draft;   ...`

The addition `with draft` enables [RAP draft handling](ABENRAP_DRAFT_HANDLING_GLOSRY.html) for a [business object](ABENBUSINESS_OBJECT_GLOSRY.html). It is added in the [behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html) as it draft-enables the entire business object. It is not possible to implement draft capabilities for individual [entities](ABENRAP_BO_ENTITY_GLOSRY.html) within a business object.

RAP draft handling is in all scenarios completely managed by the [RAP transactional engine](ABENRAP_TRANSAC_ENGINE_GLOSRY.html). The application developer is not responsible for how draft data is written to the [draft database table](ABENDRAFT_TABLE_GLOSRY.html).

The addition `with draft` enables draft handling. There are several related syntax elements in the behavior definition:

Development guide for the ABAP RESTful Application Programming Model, topic [Draft](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/a81081f76c904b878443bcdaf7a4eb10?version=sap_cross_product_abap).

The following example shows a managed BDEF based on the CDS root view entity `DEMO_RAP_MANAGED_DRAFT_ROOT`. It is draft-enabled and the draft is completely handled by the RAP framework.

**Note** This example does not fully meet the requirements of the [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). It is intentionally kept short and simple and serves demonstration purposes only.

The class `CL_DEMO_RAP_MANAGED_DRAFT` accesses the business object using [EML](ABENEML_GLOSRY.html) and performs the following steps:

The following example shows an unmanaged BDEF based on the CDS root view entity `DEMO_RAP_UNMANAGED_DRAFT_ROOT`. It is draft-enabled and it has all mandatory syntax elements.

The draft is completely handled by the RAP framework; the ABAP behavior pool implements the business logic only for the active entity instances.

The class `CL_DEMO_RAP_UNMANAGED_DRAFT` accesses the business object using [EML](ABENEML_GLOSRY.html) and performs the following steps:

-   [Managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   In [projection BDEFs](ABENRAP_PROJECTION_BO_GLOSRY.html) and in [interface BDEFs](ABENCDS_INTERFACE_BDEF_GLOSRY.html), draft handling can be reused from the underlying base BO using the syntax addition `use draft`. For details, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

-   [`draft table`](ABENBDL_DRAFT_TABLE.html)\\ \[[`query`](ABENBDL_DRAFT_QUERY_VIEW.html)\]:
-   A [RAP draft table](ABENDRAFT_TABLE_GLOSRY.html) is required for storing [draft instances](ABENRAP_DRAFT_INSTANCE_GLOSRY.html). It is defined using the keyword `draft table DraftTableName`. A draft table is mandatory for draft-enabled BOs. A [draft query view](ABENDRAFT_QUERY_VIEW_GLOSRY.html) can optionally be specified for a RAP draft table using the addition [`query`](ABENBDL_DRAFT_QUERY_VIEW.html).
-   [`total etag`](ABENBDL_ETAG.html):
-   The [total ETag](ABENRAP_TOTAL_ETAG_GLOSRY.html) is a designated field in a draft-enabled business object that indicates changes between the active and the draft version. A total ETag is mandatory for draft-enabled implementations.
-   [draft actions](ABENBDL_DRAFT_ACTION.html):
-   [RAP draft actions](ABENRAP_BO_DRAFT_ACTION_GLOSRY.html) are actions that are available for draft-enabled business objects only. They allow data to be manipulated on the [RAP draft table](ABENDRAFT_TABLE_GLOSRY.html). They are implicitly available as soon as a business object is draft-enabled, but can be declared explicitly.
-   [draft-enabled associations](ABENBDL_ASSOCIATION.html):
-   A draft-enabled association retrieves active data if it is followed by an [active instance](ABENRAP_ACTIVE_INSTANCE_GLOSRY.html) and draft data if is followed by a [draft instance](ABENRAP_DRAFT_INSTANCE_GLOSRY.html). An association is draft enabled using the syntax addition [`with draft`](ABENBDL_ASSOCIATION.html). In a draft-enabled RAP BO, it is mandatory that associations are draft-enabled.

-   It creates two new draft instances of the parent entity and two new draft instances of the child entity and displays the content of the draft tables.
-   Then it activates the draft entities. The content of the draft tables is written to the [persistent tables](ABENRAP_PERSISTENT_TABLE_GLOSRY.html) and the draft tables are emptied.

-   It creates two new draft instances of the parent entity and two new draft instances of the child entity and displays the content of the draft tables.
-   Then it activates the draft entities. The content of the draft tables is written to the [persistent tables](ABENRAP_PERSISTENT_TABLE_GLOSRY.html) and the draft tables are emptied.

-   [RAP BDL - draft actions Edit, Discard, Prepare](ABENBDL_DRAFT_ACTION2_ABEXA.html)
-   [RAP BDL - draft action Activate](ABENBDL_DRAFT_ACTION1_ABEXA.html)

managed implementation in class BP\_DEMO\_RAP\_MANAGED\_DRAFT\_ROOT unique;\\nstrict ( 2 );\\nwith draft;\\n\\ndefine behavior for DEMO\_RAP\_MANAGED\_DRAFT\_ROOT alias ParentEntity\\npersistent table demo\_dbtab\_root\\ndraft table demo\_dbtab\_draft\\nlock master\\ntotal etag Timestamp\\netag master LastChangedAt\\nauthorization master ( global )\\n\\n\\{\\n create;\\n update;\\n delete;\\n association \_child \\{ create; with draft; \\}\\n field ( readonly : update ) KeyFieldRoot;\\n field ( readonly ) Timestamp, LastChangedAt;\\n\\n draft action Activate optimized;\\n draft action Edit;\\n draft action Discard;\\n draft action Resume;\\n draft determine action Prepare;\\n\\n mapping for demo\_dbtab\_root\\n \\{\\n KeyFieldRoot = key\_field;\\n DataFieldRoot = data\_field;\\n CharFieldRoot = char\_field;\\n Timestamp = crea\_date\_time;\\n LastChangedAt = lchg\_date\_time;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_MANAGED\_DRAFT\_CHILD alias ChildEntity\\npersistent table demo\_dbtab\_child\\ndraft table demo\_draft\_chi5\\nlock dependent by \_parent\\netag dependent by \_parent\\nauthorization dependent by \_parent\\n\\{\\n\\n association \_parent \\{with draft;\\}\\n update;\\n delete;\\n\\n field ( readonly : update ) KeyField, KeyFieldChild;\\n\\n mapping for demo\_dbtab\_child\\n \\{\\n KeyField = key\_field;\\n KeyFieldChild = key\_field\_child;\\n DataFieldChild = data\_field;\\n \\}\\n\\} unmanaged implementation in class bp\_demo\_rap\_unmanaged\_draft\_ro unique;\\nstrict(2);\\nwith draft;\\n\\n\\ndefine behavior for DEMO\_RAP\_UNMANAGED\_DRAFT\_ROOT alias ParentEntity\\ndraft table demo\_dbtab\_draft\\nlock master\\ntotal etag Timestamp\\netag master LastChangedAt\\nauthorization master ( global, instance )\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly:update ) KeyFieldRoot;\\n field ( readonly ) Timestamp, LastChangedAt;\\n\\n draft action Activate optimized;\\n draft action Discard;\\n draft action Edit;\\n draft action Resume;\\n draft determine action Prepare;\\n\\n association \_child \\{ create; with draft; \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_UNMANAGED\_DRAFT\_CHILD alias ChildEntity\\ndraft table demo\_draft\_ch5\\n(lock, authorization, etag) dependent by \_parent\\n\\{\\n update;\\n delete;\\n\\n association \_parent \\{ with draft; \\}\\n\\n field ( readonly:update ) keyfield, KeyFieldChild;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_bdef\_header.html