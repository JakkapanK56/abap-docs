---
title: "ABAPMODIFY_ENTITY_ENTITIES_OP"
description: |
  ABAPMODIFY_ENTITY_ENTITIES_OP - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMODIFY_ENTITY_ENTITIES_OP.htm"
abapFile: "ABAPMODIFY_ENTITY_ENTITIES_OP.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "method", "data", "types", "internal-table", "ABAPMODIFY", "ENTITY", "ENTITIES"]
---

``... [CREATE [`field_spec`](ABAPMODIFY_ENTITY_ENTITIES_FIELDS.html)]\      [CREATE BY \\_assoc [`field_spec`](ABAPMODIFY_ENTITY_ENTITIES_FIELDS.html)]\      [UPDATE [`field_spec`](ABAPMODIFY_ENTITY_ENTITIES_FIELDS.html)]\      [DELETE [`field_spec`](ABAPMODIFY_ENTITY_ENTITIES_FIELDS.html)]\      [EXECUTE action [`field_spec`](ABAPMODIFY_ENTITY_ENTITIES_FIELDS.html)\ [REQUEST request]\ [[`RESULT result_tab`](ABAPEML_RESULT.html)]] ...``

[1. `... CREATE field_spec`](#ABAP_VARIANT_1@1@)

[2. `... CREATE BY \\_assoc field_spec`](#ABAP_VARIANT_2@1@)

[3. `... UPDATE field_spec`](#ABAP_VARIANT_3@1@)

[4. `... DELETE field_spec`](#ABAP_VARIANT_4@1@)

[5. `... EXECUTE action field_spec`](#ABAP_VARIANT_5@1@)

The EML `MODIFY` statement supports the following operations:

In both, managed and unmanaged implementations, all modify operations must be specified in the [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). See more details in the BDL documentation: [`Define Behavior, Standard Operations`](ABENBDL_STANDARD_OPERATIONS.html). All nonstandard operations (actions) must be user-implemented in the [ABP](ABENBEHAVIOR_POOL_GLOSRY.html).

Each modify operation requires an internal table (`field_spec`) of instances as input parameters after the respective keyword to specify the fields that should be modified.

See further information and rules for using ABAP EML statements in implementations of the [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) and [consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) in the Development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

Used to create new node instances of a [RAP BO](ABENRAP_BO_GLOSRY.html) entity.

For the keywords that must follow the keyword `CREATE`, see the documentation for [`field_spec`](ABAPMODIFY_ENTITY_ENTITIES_FIELDS.html).

The following source code section taken from `CL_DEMO_RAP_EML_MODIFY_OP_2` demonstrates a `CREATE` operation.

Used to create new node instances for associated entities for which `create` must be enabled in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). The creation is not restricted to compositions. `_assoc` is the name of the association as it is specified in the underlying CDS view.

For the keywords that must follow the keyword `CREATE`, see the documentation for [`field_spec`](ABAPMODIFY_ENTITY_ENTITIES_FIELDS.html).

The following source code section taken from `CL_DEMO_RAP_EML_MODIFY_OP_2` demonstrates a create-by-association operation.

Used to update node instances of a RAP BO. The `UPDATE` statement allows delta updates on [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) side to be triggered where only key fields and the fields with new values must be provided. On [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) side, the fields to be overwritten and kept are identified.

For the keywords that must follow the keyword `UPDATE`, see the documentation for [`field_spec`](ABAPMODIFY_ENTITY_ENTITIES_FIELDS.html).

The following source code section taken from `CL_DEMO_RAP_EML_MODIFY_OP_2` demonstrates an `UPDATE` operation.

Used to delete instances of a RAP BO. Only key field values or [`%cid_ref`](ABAPDERIVED_TYPES_COMP.html) are needed to identify which instances are to be deleted.

For the keywords that must follow the keyword `DELETE`, see the documentation for [`field_spec`](ABAPMODIFY_ENTITY_ENTITIES_FIELDS.html).

The following source code section taken from `CL_DEMO_RAP_EML_MODIFY_OP_2` demonstrates a `DELETE` operation.

[1. `... REQUEST request`](#ABAP_ADDITION_1@3@)

[2. `... RESULT result_tab`](#ABAP_ADDITION_2@3@)

Used to trigger custom actions that are defined to modify data in a user-implemented way. The syntax for executing an `action` allows requested data (`REQUEST request`) to be specified and result data (`RESULT result_tab`) to be exported, each action specified in target variables.

For the keywords that must follow the keyword `EXECUTE` and the action name, see the documentation for [`field_spec`](ABAPMODIFY_ENTITY_ENTITIES_FIELDS.html).

The following source code section taken from `CL_DEMO_CDS_PURCHASE` demonstrates a modify operation executing an action.

Used to specify whether the result should be returned completely or only parts of it (for example, only the keys) for the purpose of improving performance. `request` must be typed with the required [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html)\\ [`TYPE STRUCTURE FOR ACTION REQUEST`](ABAPTYPE_STRUCTURE_FOR.html). The components of the structure are all key and data fields of the RAP BO entity. They are of type `ABP_BEHV_FLAG` and can be flagged to specify whether the respective fields are included or not.

This is optional and can only be used for actions specified in the BDEF with the addition [`result selective`](ABENBDL_ACTION_OUTPUT_PARA.html).

Actions can optionally return a result. This can only be used for actions specified in the BDEF with the addition [`result`](ABENBDL_ACTION_OUTPUT_PARA.html). The internal table `result_tab` must be of type `TABLE FOR ACTION RESULT bdef~action`. See more details in [`RESULT result_tab`](ABAPEML_RESULT.html).

-   `CREATE`: Create new RAP BO node instances for root or child entities.
-   `CREATE BY`: Create target instances for associated entities for which `create` must be enabled in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). The creation is not restricted to compositions.
-   `UPDATE`: Update existing RAP BO node instances.
-   `DELETE`: Delete existing RAP BO node instances. Note that the deletion also affects node instances along the composition.
-   `EXECUTE`\\ [actions](ABENBDL_ACTION.html): Carry out user-defined modify operations.

-   After the keyword `BY` for create-by-association operations, a backslash (`\\`) must be inserted in front of the associations are displayed via the code completion.
-   Updating and deleting instances via associations is not possible.
-   In [draft](ABENBDL_WITH_DRAFT.html) scenarios, draft instances are created if the draft indicator [`%is_draft`](ABAPDERIVED_TYPES_IS_DRAFT.html) is set to true. If it is set to false, active instances are created.

-   The example [`MODIFY`: Standard Operations (Managed)](ABENEML_MODIFY_OP_ABEXA.html) demonstrates various standard operations with `MODIFY`.
-   The example [`MODIFY`: Nonstandard Operations](ABENEML_MODIFY_CUSTOM_OP_ABEXA.html) shows the implementation of an action in the context of a managed RAP BO. See more examples of actions in the [documentation about RAP actions](ABENBDL_ACTION_ABEXAS.html).
-   The example [`MODIFY`: Standard Operations (Unmanaged)](ABENEML_MODIFY_OP_U_ABEXA.html) demonstrates all standard operations with `MODIFY` with a simple unmanaged RAP BO.
-   The example [Example for RAP Handler Methods (Unmanaged BO with draft)](ABENRAP_HANDLER_METHODS_ABEXA.html) includes various standard and nonstandard ABAP EML `MODIFY` operations in both a [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) and a [consumer](ABENRAP_BO_CONSUMER_GLOSRY.html).
-   For more examples on `MODIFY` operations in general, see [Examples for ABAP EML `MODIFY`](ABAPEML_MODIFY_EXAMPLES_ABEXAS.html).

MODIFY ENTITY demo\_managed\_root \\nCREATE FIELDS ( key\_field data\_field1\_root data\_field2\_root ) \\nWITH VALUE #( \\n ( %cid = 'cid1' key\_field = 1 \\n data\_field1\_root = 'aaa' data\_field2\_root = 'bbb' ) \\n ( %cid = 'cid2' key\_field = 2 \\n data\_field1\_root = 'ccc' data\_field2\_root = 'ddd' ) \\n ( %cid = 'cid3' key\_field = 3 \\n data\_field1\_root = 'eee' data\_field2\_root = 'fff' ) \\n ( %cid = 'cid4' key\_field = 4 \\n data\_field1\_root = 'ggg' data\_field2\_root = 'hhh' ) \\n ). MODIFY ENTITY demo\_managed\_root \\nCREATE BY \\\\\_child \\nFIELDS ( data\_field1\_child data\_field2\_child ) \\nWITH VALUE #( \\n ( key\_field = 1 \\n %target = VALUE #( ( %cid = 'cid3' \\n data\_field1\_child = 'iii' \\n data\_field2\_child = 'jjj' ) ) ) \\n ( key\_field = 2 \\n %target = VALUE #( ( %cid = 'cid4' \\n data\_field1\_child = 'kkk' \\n data\_field2\_child = 'lll' ) ) ) ). MODIFY ENTITY demo\_managed\_root \\nUPDATE FIELDS ( data\_field1\_root data\_field2\_root ) \\nWITH VALUE #( \\n ( key\_field = 3 \\n data\_field1\_root = 'qqq' \\n data\_field2\_root = 'rrr' ) \\n ( key\_field = 4 \\n data\_field1\_root = 'sss' \\n data\_field2\_root = 'ttt' ) ). MODIFY ENTITY demo\_managed\_root \\nDELETE FROM VALUE #( ( key\_field = 4 ) ). MODIFY ENTITIES OF demo\_cds\_purch\_doc\_m \\n ENTITY PurchaseDocument \\n EXECUTE approve\_order \\n FROM VALUE #( ( PurchaseDocument = 'a' ) ) \\n RESULT FINAL(result) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapmodify\_entity\_entities.html