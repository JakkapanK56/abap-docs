---
title: "ABENBDL_CHANGEDOCS_OPTIONS"
description: |
  ABENBDL_CHANGEDOCS_OPTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_CHANGEDOCS_OPTIONS.htm"
abapFile: "ABENBDL_CHANGEDOCS_OPTIONS.html"
keywords: ["update", "delete", "do", "if", "class", "data", "types", "ABENBDL", "CHANGEDOCS", "OPTIONS"]
---

`changedocuments([create:Option][,update:Option]\ [,delete:Option]);`

Defines logging options for [RAP change documents](ABENRAP_CHANGE_DOCUMENTS_GLOSRY.html) in the [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html) of a RAP BO. As a prerequisite, the entity in question must be enabled for RAP change documents as described in the topic [RAP - `changedocuments`](ABENBDL_CHANGE_DOCUMENTS.html).

Logging options can be defined for the [standard operations](ABENRAP_STANDARD_OPERATION_GLOSRY.html)\\ `create`, `update`, and `delete`. The following logging options `Options` are available:

For each standard operation, exactly one option can be defined. At least one option for a standard operation must be defined in brackets. If several options are defined, they are separated by a comma (`,`). They can occur in any order.

`create` and `delete` can be followed by all available options, `update` can be followed by the options `none` or `data`.

For the setting `update:data`, for each update of each change-document-relevant field, its value before *and* after the update operation is stored.

If no options are defined explicitly, the following default options apply implicitly:

changedocuments( create:key, update:data, delete:key )

Development guide for the ABAP RESTful Application Programming Model, section [Integrating Change Documents](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0dd9323b464244538295fc7457c39d8f?version=sap_cross_product_abap).

The following example shows a managed BDEF based on the CDS root view entity `DEMO_RAP_CHANGE_DOCS`.

**Note** This example does not fully meet the requirements of the [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). It is intentionally kept short and simple and serves demonstration purposes only. For more information about the RAP BO contract, see the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

-   `none`: Defines that for the operation in question, no change document data is recorded.
-   `key`: Defines that for the operation in question, only key values are recorded in the change documents.
-   `data`: Defines that for the operation in question, all the data for change-document-relevant fields is recorded. A field is considered as relevant for change documents when it is typed with a [CDS simple type](ABENCDS_SIMPLE_TYPE_GLOSRY.html) with the annotation [`AbapCatalog.typeSpec.changeDocumentRelevant`](ABENCDS_2016919924-_ANNO.html) set to *true*, or a [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html) where the **change document** flag is set.

-   [Change documents-enabled RAP BO entities](ABENRAP_CHANGE_DOC_ENABLED_GLOSRY.html) in [managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html)

-   [Change document objects](ABENCHANGE_DOCUMENT_OBJ_GLOSRY.html) contain logging options for the generation of change documents. In RAP, these options are not evaluated. The BDEF syntax is considered instead.
-   For [RAP BO non-standard operations](ABENRAP_NSTANDARD_OPERATION_GLOSRY.html), such as [RAP actions](ABENRAP_ACTION_GLOSRY.html), changes to [change documents-enabled RAP BO entities](ABENRAP_CHANGE_DOC_ENABLED_GLOSRY.html) are also logged. Non-standard operations are usually implemented as a combination of standard operations, and the logging works according to the logging options for the standard operations.

-   The root entity is defined as change documents master entity.
-   The change document object `DEMO_CHGDOC` is used for logging changes.
-   The child entity is defined as change documents dependent entity.
-   The association `_parent` is defined in the entity behavior body of the child entity, thereby ensuring that changes in the child entity are logged in the change document object `DEMO_CHGDOC`.
-   The logging options are defined in the entity behavior body.

managed implementation in class bp\_demo\_rap\_change\_docs unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_RAP\_CHANGE\_DOCS alias Root\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master ( instance, global )\\nchangedocuments master ( DEMO\_CHGDOC )\\n\\{\\n\\n changedocuments(create:key, update:data, delete:none);\\n create;\\n update;\\n delete;\\n field ( readonly:update ) key\_field;\\n association \_child \\{ create; \\}\\n\\n mapping for demo\_dbtab\_root corresponding\\n \\{\\n change\_logging = char\_field;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_CHANGE\_DOC\_CHILD alias Child\\npersistent table demo\_dbtab\_child\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\nchangedocuments dependent by \_parent\\n\\{\\n changedocuments(delete:data, create:data);\\n update;\\n delete;\\n field ( readonly:update ) key\_field, key\_field\_child;\\n association \_parent;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html