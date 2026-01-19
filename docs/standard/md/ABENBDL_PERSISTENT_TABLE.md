---
title: "ABENBDL_PERSISTENT_TABLE"
description: |
  ABENBDL_PERSISTENT_TABLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_PERSISTENT_TABLE.htm"
abapFile: "ABENBDL_PERSISTENT_TABLE.html"
keywords: ["update", "delete", "do", "if", "case", "class", "data", "types", "ABENBDL", "PERSISTENT", "TABLE"]
---

`...  persistent table TableName   ...`

The [RAP persistent table](ABENRAP_PERSISTENT_TABLE_GLOSRY.html) is the [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) a [RAP BO](ABENRAP_BO_GLOSRY.html) is based on. The [persistent data](ABENRAP_PERSISTENT_DATA_GLOSRY.html) on the [persistent table](ABENRAP_PERSISTENT_TABLE_GLOSRY.html) is processed by [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html).

Requirements:

The following example shows a managed BDEF based on the CDS root view entity `DEMO_MANAGED_ROOT`. It specifies persistent database tables for the parent and the child entity.

The class `CL_DEMO_RAP_EML_MODIFY_OP_2` accesses the business object using [EML](ABENEML_GLOSRY.html) and performs the following steps:

The changes are saved with the statement [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html), and, thus, the changed data is persisted to the database tables. All changes to the persistent table are managed by the RAP framework.

The example [`MODIFY`: Standard Operations (Managed)](ABENEML_MODIFY_OP_ABEXA.html) explains the example displayed above in detail.

-   Available for [managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html) only and for these, it is mandatory to specify a persistent table.
-   **Exception:** In a managed RAP BO with an [unmanaged save](ABENRAP_UNMAN_SAVE_GLOSRY.html), defined using [`with unmanaged save`](ABENBDL_SAVING.html), a persistent table must not be defined.
-   In a [projection business object](ABENRAP_PROJECTION_BO_GLOSRY.html), the persistent table is automatically inherited and need not be specified.

-   If the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) specifies an [ETag](ABENRAP_ETAG_GLOSRY.html) field, the persistent table requires a field that is used to describe the state of the database table. This can be, for example, a [time stamp field](ABENTIMESTAMP_FIELD_GLOSRY.html).
-   If this field is annotated in CDS with the relevant annotation, such as [`@Semantics.systemDateTime.localInstanceLastChangedAt: true`](ABENCDS_425922347-_ANNO.html), then it is automatically updated by the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html).
-   If the RAP BO is [draft-enabled](ABENBDL_WITH_DRAFT.html) and has a [total ETag field](ABENRAP_TOTAL_ETAG_GLOSRY.html), the persistent table requires a field that is updated whenever the BO instance is changed. This must be a separate field from the ETag master field. The total ETag field is necessary on the [lock master entity](ABENBDL_LOCKING.html).
-   If the total ETag field is a time stamp field and if it is annotated in the CDS data model with the annotation `@Semantics.systemDateTime.lastChangedAt`, then this field is updated automatically by the RAP framework.
-   If the primary key field is of type [`raw(16)`](ABENDDIC_BUILTIN_TYPES.html)\\ [(UUID)](ABENUUID_GLOSRY.html), then it can be filled by the RAP framework using [internal numbering](ABENRAP_INT_NUMBERING_GLOSRY.html). The syntax for this is [`numbering:managed`](ABENBDL_FIELD_NUMBERING.html).
-   If you decide to use UUIDs as primary keys, the following rules apply:

-   Every entity needs a field for the UUID key.
-   Child entities must have a field for their parent's UUID. This is required to define associations for the [CDS composition](ABENCDS_COMPOSITION_GLOSRY.html) relationship.
-   Any child entity that has no parent-child relationship with the lock master entity must have a field with the lock master's UUID. This is important to define associations to the lock master entity, which is required for ETag handling.

-   If the field names of the persistent database table differ from the field names of the CDS views of the underlying data model, then a [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) is required in the [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html). This can be the case, for example, if the fields of the CDS data model have [alias names](ABENALIAS_GLOSRY.html).
-   A RAP persistent table is a regular [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) and can be accessed as such. Access with [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [AMDP](ABENAMDP_GLOSRY.html) is technically possible, but not recommended. It is recommended that a persistent table is accessed using the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) only, for example, with [ABAP EML](ABENABAP_EML_GLOSRY.html).

-   Modify operations with `CREATE` and `CREATE BY`
-   Two `MODIFY ENTITY` operations are executed to create data sets for the root entity using the `CREATE` statement as well as data sets for the child entity using `CREATE BY`.
-   Modify operation with `UPDATE`
-   Data sets of the root entity are updated.
-   Modify operation with `DELETE`
-   Data sets of the root entity are deleted.
-   Read operation with `READ` and `READ BY`
-   Data sets are read from the root and child entities.

managed implementation in class bp\_demo\_managed\_root unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_MANAGED\_ROOT\\npersistent table demo\_tab\_root\\nlock master\\nauthorization master ( global )\\n\\{\\n create;\\n update;\\n delete;\\n association \_child \\{ create; \\}\\n\\n field ( readonly : update ) key\_field;\\n\\}\\n\\ndefine behavior for DEMO\_MANAGED\_CHILD alias child\\npersistent table demo\_tab\_child\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\n\\{\\n update;\\n delete;\\n field ( readonly : update ) key\_field;\\n association \_parent;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_character.html