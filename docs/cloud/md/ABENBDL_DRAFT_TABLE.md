---
title: "ABENBDL_DRAFT_TABLE"
description: |
  ABENBDL_DRAFT_TABLE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_DRAFT_TABLE.htm"
abapFile: "ABENBDL_DRAFT_TABLE.html"
keywords: ["update", "delete", "do", "if", "case", "try", "class", "data", "types", "ABENBDL", "DRAFT", "TABLE"]
---

``...  draft table DraftTableName [[`query DraftQueryView`](ABENBDL_DRAFT_QUERY_VIEW.html)]\  ...``

A [RAP draft table](ABENDRAFT_TABLE_GLOSRY.html) is a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) used to store draft data. The draft table must reflect the fields of the underlying CDS entity. It must meet the following requirements:

Here's an example:

define table DraftTable \\{ \\n  key client        : abap.clnt not null; \\n    ... \\n    "%admin"        : include sych\_bdl\_draft\_admin\_inc;\\}

The optional addition [`query`](ABENBDL_DRAFT_QUERY_VIEW.html) can be used to specify a [draft query view](ABENDRAFT_QUERY_VIEW_GLOSRY.html)\\ `DraftQueryView`. A draft query view allows the definition of read access limitations for draft data based on the [data control language (DCL)](ABENCDS_DCL_GLOSRY.html).

Development guide for the ABAP RESTful Application Programming Model, topic [Draft Database Table](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0c86bebb4c7f47aaa8eda6068176abd8?version=sap_cross_product_abap).

The following example demonstrates why ABAP SQL is not suitable to access draft database tables.

It shows a managed BDEF based on the CDS root view entity `DEMO_RAP_MANAGED_DRAFT_1`. The BDEF is draft-enabled and it defines the persistent database table `DEMO_DBTAB_ROOT` and the draft database table `DEMO_DBTAB_DRAFT`.

**Note** This example does not fully meet the requirements of the [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

The class `CL_DEMO_RAP_MANAGED_DRAFT_1` accesses the business object using [EML](ABENEML_GLOSRY.html). It contains the same code block twice: first, it clears the draft database table using the ABAP SQL statement `DELETE FROM`. Then, it creates a new draft instance with the key value '3' using the EML statement `MODIFY ENTITIES` and commits this entity instance to the draft database table.

Code snippet - this code block is repeated twice:

The first time, this entry is written to the draft database table and displayed as screen output. The second time, however, the creation of the new draft instance fails and the draft database table remains empty. The reason is that the draft database table cannot be emptied using ABAP SQL. It contains metadata which cannot be deleted with ABAP SQL and therefore, the key is considered to be a duplicate, even though the draft database table was cleared.

This demonstrates why the draft database table should only be accessed using the RAP framework, in this case, using either the EML statement [`DELETE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html) or the [draft action `Discard`](ABENBDL_DRAFT_ACTION.html) to clear all entries from the draft database table.

The class `CL_DEMO_RAP_MANAGED_DRAFT_2` demonstrates how to correctly clear a draft database table:

Result: the creation of a new draft instance with the same key value works three times in a row, because `Discard` and `DELETE FROM` clear the entries of the draft table as well as the metadata.

-   It contains a field for each field of the CDS entity that the current entity is based on. The order of the fields is not relevant.
-   The first field must be a client field that has the data type `CLNT`.
-   The field names of the fields of the draft tables are the same as the field names of the underlying CDS entity. If the CDS entity has assigned alias names, these alias names must be used.
-   The data types and field lengths must match exactly.
-   Additionally, the draft table must contain some technical information the [RAP transactional engine](ABENRAP_TRANSAC_ENGINE_GLOSRY.html) needs to handle the draft. This technical information is added automatically with the draft admin include. The draft admin include is the predefined [DDIC include structure](ABENDDIC_INCLUDE_STRUCTURE.html)\\ `SYCH_BDL_DRAFT_ADMIN_INC`.

-   A draft database table is relevant for [draft-enabled RAP business objects](ABENDRAFT_RAP_BO_GLOSRY.html) of the implementation types `managed` and `unmanaged` and for these, it is mandatory.
-   In a [projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html) and in an [interface behavior definition](ABENCDS_INTERFACE_BDEF_GLOSRY.html), the draft table is automatically inherited and does not need to be explicitly defined. For details, see the topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

-   The draft database table can be generated automatically via a quick fix in the behavior definition, which is offered as soon as RAP draft handling is enabled for the business object.
-   When using [`late numbering`](ABENBDL_LATE_NUMBERING.html) for a draft-enabled RAP BO, it is mandatory that the draft table has an additional key field `DRAFTUUID` of data type `raw(16)`.
-   A draft table is a regular [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) and can be accessed as such. Access with [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [AMDP](ABENAMDP_GLOSRY.html) is technically possible, but not recommended. It is recommended that a draft table is accessed using the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) only, for example, with [EML](ABENEML_GLOSRY.html), so that the draft metadata get updated automatically.

-   It creates a new draft instance with the key value '4' and discards it using the draft action `Discard`.
-   Then, it successfully creates the same instance again.
-   The instance is deleted again using the EML statement `DELETE FROM` and created once again.

managed\\nimplementation in class bp\_demo\_rap\_managed\_draft\_1 unique;\\nstrict ( 2 );\\nwith draft;\\n\\ndefine behavior for DEMO\_RAP\_MANAGED\_DRAFT\_1 alias ParentEntity\\npersistent table demo\_dbtab\_root\\ndraft table demo\_dbtab\_draft\\nlock master\\ntotal etag Timestamp\\netag master LastChangedAt\\nauthorization master ( global )\\n\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly : update ) KeyFieldRoot;\\n field ( readonly ) Timestamp, LastChangedAt;\\n\\n draft action Activate optimized;\\n draft action Discard;\\n draft action Edit;\\n draft action Resume;\\n draft determine action Prepare;\\n\\n mapping for demo\_dbtab\_root\\n \\{\\n KeyFieldRoot = key\_field;\\n DataFieldRoot = data\_field;\\n CharFieldRoot = char\_field;\\n Timestamp = crea\_date\_time;\\n LastChangedAt = lchg\_date\_time;\\n \\}\\n\\} DELETE FROM demo\_dbtab\_draft. \\nMODIFY ENTITIES OF demo\_rap\_managed\_draft\_1 \\n ENTITY ParentEntity \\n CREATE FROM \\n VALUE #( ( %is\_draft = if\_abap\_behv=>mk-on \\n %control-KeyFieldRoot = if\_abap\_behv=>mk-on \\n %data-KeyFieldRoot = 3 ) ) \\n\\ \\n REPORTED FINAL(create\_reported) \\n FAILED FINAL(create\_failed) \\n MAPPED FINAL(create\_mapped). \\n\\ \\nCOMMIT ENTITIES. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_character.html