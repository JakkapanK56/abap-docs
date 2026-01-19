---
title: "ABENBDL_REORDER_ACTION"
description: |
  ABENBDL_REORDER_ACTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_REORDER_ACTION.htm"
abapFile: "ABENBDL_REORDER_ACTION.html"
keywords: ["update", "delete", "do", "if", "method", "data", "ABENBDL", "REORDER", "ACTION"]
---

``\  [managed] reorder action    [(      [[`features: \{instance | global\}`](ABENBDL_ACTIONS_FC.html)]\      [[`precheck`](ABENBDL_PRECHECK.html)]\      [[`authorization:none`](ABENBDL_ACTIONS_AUTH.html)]\      [[`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html)]\      [[`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html)]\      [[`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html)]\      [[`lock:none`](ABENBDL_LOCK_NONE.html)]\    )]\    ActionName [external 'ExternalName'];  [field ( hierarchy-index ) FieldName;]\  [ascending association _AscendingAssoc;]\  [descending association _DescendingAssoc [\{ with cascading delete; \}]]``

[1. `... field ( hierarchy-index ) FieldName;`](#ABAP_ADDITION_1@3@)

[2. `... ascending association _AscendingAssoc;`](#ABAP_ADDITION_2@3@)

[3. `... descending association _DescendingAssoc ...`](#ABAP_ADDITION_3@3@)

The [reorder action](ABENRAP_REORDER_ACTION_GLOSRY.html) is a [RAP hierarchy action](ABENRAP_HIERARCHY_ACTION_GLOSRY.html) that moves a [hierarchy node](ABENHIERARCHY_NODE_GLOSRY.html) to a dedicated position among its siblings in an editable [treeview](ABENRAP_TREEVIEW_GLOSRY.html) by recalculating the hierarchy index fields of all sibling instances. The reorder action can be managed or unmanaged.

Reorder actions are specified within curly brackets after the syntax [`instance hierarchy`](ABENBDL_INSTANCE_HIERARCHY.html). They are optional and can be specified in the context of an instance hierarchy only.

**Managed Reorder Action**

The managed reorder action is provided by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html). For the framework to be able to provide a standard implementation, the following must also be defined:

Optionally, you can use the addition `with cascading delete` to specify that, if a hierarchy node is deleted, all its descendant nodes are deleted from the database, too.

**Unmanaged Reorder Action**

The unmanaged reorder action is implemented by the [unmanaged RAP BO provider](ABENUNMANAGED_RAP_BO_PROV_GLOSRY.html) in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR MODIFY`](ABAPHANDLER_METH_MODIFY.html).

**RAP BDL Operation Additions**

The following [RAP BDL operation additions](ABENBDL_OPERATIONS_ADDITIONS.html) are possible:

**Note** If multiple RAP BO operation additions are used, they are separated by a comma.

Development guide for the ABAP RESTful Application Programming Model, section [Editable Treeviews with Draft Capabilities](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/718e0f84564043afad76cf56e03e1528?version=sap_cross_product_abap).

Defines the field `FieldName` as hierarchy index field. It contains information about the position of a hierarchy node within its sibling group. It can have an integer data type or the data type `NUMC`. When executing the managed reorder action, the value of the hierarchy index field is recalculated for all sibling nodes.

For a managed reorder action, it is mandatory to define a hierarchy index field.

Defines the association `_AscendingAssoc` as ascending association. The ascending association is defined as a self-association to the parent node of the same CDS view entity in the underlying data model. The ascending association and the descending association together describe the self-referencing hierarchy in the data in the underlying CDS view entities. For a managed reorder action, it is mandatory to define an ascending association.

Defines the association `_DescendingAssoc` as descending association. The descending association is defined as a self-association to the child node of the same CDS view entity in the underlying data model. The ascending association and the descending association together describe the self-referencing hierarchy in the data in the underlying CDS view entities. For a managed reorder action, it is mandatory to define a descending association.

Optionally, you can use `with cascading delete` to specify that, if a hierarchy node is deleted, all its descendant nodes are deleted from the database, too.

-   A hierarchy index field `FieldName` must be specified. It contains information about the position of a hierarchy node within its sibling group. The field acts as an index to facilitate the ordering of its siblings, that is, the hierarchy nodes under the same parent node. It can have an integer data type or the data type `NUMC`.
-   An ascending association `_AscendingAssoc` must be declared using the syntax `ascending association`. The ascending association is defined as a self-association to the parent node of the same CDS view entity in the underlying data model. The ascending association and the descending association together describe the self-referencing hierarchy in the data in the underlying CDS view entities.
-   A descending association `_DescendingAssoc` must be declared using the syntax `descending association`. The descending association is defined as a self-association to the child node of the same CDS view entity in the underlying data model. It is the reverse association of the ascending association. The ascending association and the descending association together describe the self-referencing hierarchy in the data in the underlying CDS view entities.

-   Dynamic feature control with [`(features:instance)`](ABENBDL_ACTIONS_FC.html). This enables or disables the reorder action depending on preconditions within the business object.
-   Global feature control with [`(features:global)`](ABENBDL_ACTIONS_FC.html) enables or disables the reorder action depending on BO-external preconditions.
-   [`precheck`](ABENBDL_PRECHECK.html) prevents unwanted changes from reaching the application buffer.
-   [`authorization:none`](ABENBDL_ACTIONS_AUTH.html) excludes the operation in question from [authorization checks](ABENBDL_AUTHORIZATION.html).
-   [`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html) delegates the [authorization control](ABENBDL_AUTHORIZATION.html) to the authorization check that is implemented for the update operation.
-   [`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html) replaces the [authorization control](ABENBDL_AUTHORIZATION.html) that is specified in the [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html) and applies global authorization checks instead.
-   [`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html) replaces the [authorization control](ABENBDL_AUTHORIZATION.html) that is specified in the [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html) and applies instance authorization checks instead.
-   [`lock:none`](ABENBDL_LOCK_NONE.html) to prevent the [RAP locking](ABENRAP_LOCKING_GLOSRY.html) mechanism for the entity instance for which the action is executed.
-   [`external`](ABENBDL_EXTERNAL.html): Optional addition to provide an alias name for external usage.

-   [Managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   In a [projection BO](ABENRAP_PROJECTION_BO_GLOSRY.html) and in a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), reorder actions from the base BDEF can be reused using the syntax `use action ActionName`. For details on reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

-   In [OData](ABENODATA_GLOSRY.html), the reorder action is called `ChangeNextSiblingAction`.
-   A reorder action can be triggered using the EML statement [`MODIFY ENTITY ... EXECUTE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html), just like other [RAP actions](ABENRAP_ACTION_GLOSRY.html). It changes the value of the hierarchy index field.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_instance\_hierarchy.html