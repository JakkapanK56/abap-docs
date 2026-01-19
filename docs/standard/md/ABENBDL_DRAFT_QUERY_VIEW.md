---
title: "ABENBDL_DRAFT_QUERY_VIEW"
description: |
  ABENBDL_DRAFT_QUERY_VIEW - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_DRAFT_QUERY_VIEW.htm"
abapFile: "ABENBDL_DRAFT_QUERY_VIEW.html"
keywords: ["select", "update", "delete", "do", "if", "method", "class", "data", "ABENBDL", "DRAFT", "QUERY", "VIEW"]
---

`... query DraftQueryView`

Defines a [draft query view](ABENDRAFT_QUERY_VIEW_GLOSRY.html)\\ `DraftQueryView` for a [RAP draft table](ABENDRAFT_TABLE_GLOSRY.html). `query` is an optional addition that can be specified directly after the RAP draft table [`draft table DraftTableName`](ABENBDL_DRAFT_TABLE.html).

The draft query view `DraftQueryView` must be a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) that specifies the RAP draft table as data source after `FROM`. It must contain all fields from the draft table including administrative fields. Otherwise, a syntax check warning occurs.

A draft query view can be used to define read access limitations to the draft data using [data control language (DCL)](ABENCDS_DCL_GLOSRY.html). The DCL access restrictions defined for the CDS view entities selecting from the active database table are not applied to the draft data. A draft query view allows the definition of read access restrictions for draft data.

A draft query view is a prerequisite for classifying a RAP BO with the [C0 contract for extensibility](ABENC0_CONTRACT_GLOSRY.html) in the context of [RAP extensibility](ABENRAP_EXTENSIBILITY_GLOSRY.html).

Development guide for the ABAP RESTful Application Programming Model, topic [Draft Query Views](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/59365c9790e84014b03c4f042a7a18dd?version=sap_cross_product_abap).

The following example shows a managed and draft-enabled RAP BO.

**Note** This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) are not implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) here.

The class `CL_DEMO_RAP_DRAFT_QUERY_VIEW` accesses the business object using [EML](ABENEML_GLOSRY.html) and [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and performs the following operations:

The example above is explained in detail in the executable example [RAP BDL - RAP BO with DCL Access Control](ABENBDL_DRAFT_QUERY_ABEXA.html).

-   The syntax addition `query` is available in [draft-enabled RAP business objects](ABENDRAFT_RAP_BO_GLOSRY.html) of type `managed` or `unmanaged`.
-   In a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html) and in an [interface BDEF](ABENCDS_INTERFACE_BDEF_GLOSRY.html), the draft query view is automatically inherited from the base BDEF (if specified there). All access restrictions to draft data are reused in the projection BO and interface BO. The syntax `query` is not available there. For details, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

-   It is based on the CDS view entity `DEMO_RAP_MANAGED_DRAFT_QUERY`. This CDS view entity has read access restrictions defined in the DCL source `DEMO_RAP_DRAFT_QUERY`.
-   It specifies the CDS view entity `DEMO_RAP_DRAFT_QUERY_VIEW` as draft query view. This draft query view has read access restrictions defined in the DCL source `DEMO_RAP_DCL_DRAFT`.

-   It creates four active entity instances using the EML statement [`MODIFY ENTITIES CREATE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html).
-   It reads these active instances, first with the EML statement [`READ ENTITIES`](ABAPREAD_ENTITY_ENTITIES.html), and afterwards with ABAP SQL [`SELECT`](ABAPSELECT.html). In the EML read, the DCL access condition is applied and the result set is filtered according to the access condition. Some data sets are filtered out. By contrast, the ABAP SQL `SELECT` displays all instances that were saved on the database.
-   It creates four draft instances using the EML statement `MODIFY ENTITIES CREATE`.
-   It reads these draft instances, first with the EML statement `READ ENTITIES`, and afterwards with ABAP SQL `SELECT`. In the EML read, the DCL access condition attached to the draft query view is applied and the result set is filtered according to the access condition. Some data sets are filtered out. By contrast, the ABAP SQL `SELECT` displays all instances that were saved in the RAP draft table.
-   Finally, the RAP draft table is cleared using the draft action [`Discard`](ABENBDL_DRAFT_ACTION.html).

managed implementation in class bp\_demo\_rap\_managed\_draft\_quer unique;\\nstrict ( 2 );\\nwith draft;\\n\\ndefine behavior for DEMO\_RAP\_MANAGED\_DRAFT\_QUERY alias RootEntity\\npersistent table demo\_dbtab\_root\\ndraft table demo\_dbtab\_draft query DEMO\_RAP\_DRAFT\_QUERY\_VIEW\\nlock master\\ntotal etag Timestamp\\nauthorization master ( global )\\n\\n\\{\\n create;\\n update;\\n delete;\\n\\n field ( readonly : update ) KeyFieldRoot;\\n field ( readonly ) Timestamp;\\n\\n draft action Activate optimized;\\n draft action Discard;\\n draft action Edit;\\n draft action Resume;\\n draft determine action Prepare;\\n mapping for demo\_dbtab\_root\\n \\{\\n KeyFieldRoot = key\_field;\\n DataFieldRoot = data\_field;\\n CharFieldRoot = char\_field;\\n Timestamp = crea\_date\_time;\\n LastChangedAt = lchg\_date\_time;\\n \\}\\n\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_character.html abenbdl\_draft\_table.html