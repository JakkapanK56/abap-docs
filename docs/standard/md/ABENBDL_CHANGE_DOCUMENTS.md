---
title: "ABENBDL_CHANGE_DOCUMENTS"
description: |
  ABENBDL_CHANGE_DOCUMENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_CHANGE_DOCUMENTS.htm"
abapFile: "ABENBDL_CHANGE_DOCUMENTS.html"
keywords: ["update", "delete", "do", "if", "case", "class", "data", "ABENBDL", "CHANGE", "DOCUMENTS"]
---

`... changedocuments master [asynchronous]\                             [utc]\                             [for persistent tables]\                             ( ChangeDocumentObject )    | changedocuments dependent [by _Assoc]`

[1. `... asynchronous ...`](#ABAP_ADDITION_1@3@)

[2. `... utc ...`](#ABAP_ADDITION_2@3@)

 [3. `... for persistent tables ...`](#ABAP_ADDITION_2@3@)

[RAP change documents](ABENRAP_CHANGE_DOCUMENTS_GLOSRY.html) are used to log changes of the [RAP persistent table](ABENRAP_PERSISTENT_TABLE_GLOSRY.html) in a [change document object](ABENCHANGE_DOCUMENT_OBJ_GLOSRY.html)\\ `ChangeDocumentObject`. A change document object is a [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that logs the changes made to specific database tables assigned to it. RAP change documents are defined in the [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html) for each [entity behavior definition](ABENCDS_ENTITY_BDEF_GLOSRY.html) for which changes are logged, thereby defining the respective RAP BO entity as a [change documents-enabled RAP BO entity](ABENRAP_CHANGE_DOC_ENABLED_GLOSRY.html). No implementation in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is required.

RAP BO entities can be specified either as [change documents master entity](ABENRAP_CHANGE_DOC_MASTER_GLOSRY.html) or as [change documents dependent entity](ABENRAP_CHANGE_DOC_DPNDNT_GLOSRY.html):

The following rules apply:

By default, changes to the persisted data of a RAP BO are logged on CDS entity level, and not on the level of the corresponding [persistent tables](ABENRAP_PERSISTENT_TABLE_GLOSRY.html). This means that the metadata of the fields of the CDS entities are evaluated, for example, details about typing, reference annotations to a [currency key](ABENCURRENCY_KEY_GLOSRY.html) or [unit key](ABENUNIT_GLOSRY.html), and the change document settings on field level defined in a [CDS simple type](ABENCDS_SIMPLE_TYPE_GLOSRY.html) or a [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html). This default can be changed by using the optional addition `for persistent tables`, as described under *Addition 3*.

In on-premise systems, change documents integration works in the language version [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html) only.

Development guide for the ABAP RESTful Application Programming Model, section [Integrating Change Documents](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0dd9323b464244538295fc7457c39d8f?version=sap_cross_product_abap).

The following example shows a managed BDEF based on the CDS root view entity `DEMO_RAP_CHANGE_DOCS`.

**Note** This example does not fully meet the requirements of the [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). It is intentionally kept short and simple and serves demonstration purposes only. For more information about the RAP BO contract, see the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

The class `CL_DEMO_RAP_CHANGE_DOCS` demonstrates how the entries of the change document object can be evaluated using the class `CL_CHDO_READ_TOOLS`.

The optional addition `asynchronous` can be used when the response time of applications is significantly slowed down by writing large amounts of change document data. When this option is used, the data stored in the change document tables is still determined synchronously, but it is written to these tables asynchronously using the [background processing framework](ABENBACKROUND_PROCESSING_FW_GLOSRY.html). This can improve response times.

Change document data has a time stamp, which is a field that indicates when the change document data was written. By default this time data is recorded in the current [system time zone](ABENSYSTEM_TIME_ZONE_GLOSRY.html).

The optional addition `utc` can be used to explicitly specify that the time data for change documents is recorded in [UTC](ABENUTC_GLOSRY.html) format.

By default, changes to the persisted data of a RAP BO entity are logged at the CDS entity level, and not at the level of the corresponding [persistent tables](ABENRAP_PERSISTENT_TABLE_GLOSRY.html). This means that the metadata of the fields of the CDS entities are evaluated, for example, details about typing, reference annotations to a [currency](ABENCURRENCY_KEY_GLOSRY.html) or [unit key](ABENUNIT_GLOSRY.html), and the change document settings on field level defined in a [CDS simple type](ABENCDS_SIMPLE_TYPE_GLOSRY.html) or a [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html). The optional addition `for persistent tables` can be used to change the default behavior. When used, the field information of the fields of the [RAP persistent table](ABENRAP_PERSISTENT_TABLE_GLOSRY.html) is evaluated, as well as the table name.

This can be useful, for example, to replace custom implementations for change document integration with the generic solution (if the format of the concatenated key matches the custom implementation).

As a prerequisite, all fields of the persistent database tables should be mapped to the corresponding fields of the CDS data model using [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html). Otherwise, a syntax check warning occurs.

The addition `for persistent tables` can be used for RAP BO entities that have a persistent table specified using the addition [`persistent table TableName`](ABENBDL_PERSISTENT_TABLE.html). In a managed RAP BO with an [unmanaged save](ABENRAP_UNMAN_SAVE_GLOSRY.html), defined using [`with unmanaged save`](ABENBDL_SAVING.html), a persistent table must not be defined. In this case, the addition `for persistent tables` is not possible and results in a syntax check error.

-   As a prerequisite for enabling RAP change documents, [BDEF strict mode](ABENBDL_STRICT.html) must be switched on.
-   A [RAP persistent table](ABENRAP_PERSISTENT_TABLE_GLOSRY.html) must be specified using the syntax addition [`persistent table`](ABENBDL_PERSISTENT_TABLE.html).

-   A RAP change documents master entity has its own [change document object](ABENCHANGE_DOCUMENT_OBJ_GLOSRY.html) for logging changes to persisted data. It is the root of the subtree of entities for which change document data is recorded.
-   A RAP change documents dependent entity uses the change document object that is defined in its change documents master entity to log changes to persisted data.

-   The change documents master entity is defined using the syntax `changedocuments master (ChangeDocumentObject)`.

-   `ChangeDocumentObject` is the name of a [change document object](ABENCHANGE_DOCUMENT_OBJ_GLOSRY.html). It can be generated by a quick fix in [ABAP development tools for Eclipse](ABENADT_GLOSRY.html).
-   **Note** Change document objects contain options for the generation of change documents. In RAP, these options are irrelevant, the only information that matters is the name of the change document object, which serves as a key field in the change documents results. There is dedicated BDEF syntax available to specify further options for RAP change documents. See the topic [RAP - `changedocuments, Options`](ABENBDL_CHANGEDOCS_OPTIONS.html) for further details.
-   Any entity can be the change documents master entity. Typically, the [RAP BO root node](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html) is used as the change documents master entity, but this is optional.
-   A change documents master entity can have zero to n change documents dependent entities.
-   A RAP BO can currently have no more than one change documents master entity.

-   The change documents dependent entities are defined using the syntax `changedocuments dependent [by _Assoc]`

-   All [RAP BO entities](ABENRAP_BO_ENTITY_GLOSRY.html) that are on a lower hierarchy level in the [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) than the change documents master entity can be defined as dependent entities.
-   The addition `by _Assoc` is optional. It can be used to specify the association to the change documents master entity. When omitted, the [ancestor association](ABENCDS_ANCESTOR_ASSOC_GLOSRY.html) to the change documents master entity is used implicitly.

-   All change documents-enabled entities must form a tree in the composition hierarchy of the RAP BO in question.
-   Further options for RAP change documents are defined in the [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html) as described in the topic [RAP - `changedocuments, Options`](ABENBDL_CHANGEDOCS_OPTIONS.html).

-   [Managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   In [BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html), it is not allowed to define a change documents master entity. Defining change documents dependent entities is allowed in node extensions, as long as the change document enabled entities still form a tree after this usage.
-   If persisted data is changed using a [projection BDEFs](ABENCDS_PROJ_BDEF_GLOSRY.html) or a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), these changes are logged in the change document object of the [base BO](ABENRAP_PROJECTED_BO_GLOSRY.html) for change-documents-enabled RAP BO entities automatically. The change documents of the managed base BO are reused automatically, and no explicit enabling is required.

-   The root entity is defined as change documents master entity.
-   The change document object `DEMO_CHGDOC` is used for logging changes.
-   The child entity is defined as change documents dependent entity.
-   The association `_parent` is defined in the entity behavior body of the child entity, thereby ensuring that changes in the child entity are logged in the change document object `DEMO_CHGDOC`.
-   The logging options are defined in the entity behavior body.

managed implementation in class bp\_demo\_rap\_change\_docs unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_RAP\_CHANGE\_DOCS alias Root\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master ( instance, global )\\nchangedocuments master ( DEMO\_CHGDOC )\\n\\{\\n\\n changedocuments(create:key, update:data, delete:none);\\n create;\\n update;\\n delete;\\n field ( readonly:update ) key\_field;\\n association \_child \\{ create; \\}\\n\\n mapping for demo\_dbtab\_root corresponding\\n \\{\\n change\_logging = char\_field;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_CHANGE\_DOC\_CHILD alias Child\\npersistent table demo\_dbtab\_child\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\nchangedocuments dependent by \_parent\\n\\{\\n changedocuments(delete:data, create:data);\\n update;\\n delete;\\n field ( readonly:update ) key\_field, key\_field\_child;\\n association \_parent;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_character.html