---
title: "ABENBDL_ASSOC_STAND_OPS"
description: |
  ABENBDL_ASSOC_STAND_OPS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_ASSOC_STAND_OPS.htm"
abapFile: "ABENBDL_ASSOC_STAND_OPS.html"
keywords: ["update", "delete", "do", "if", "method", "class", "data", "types", "ABENBDL", "ASSOC", "STAND", "OPS"]
---

``...       \{[\ [[`internal`](ABENBDL_INTERNAL.html)] create                [\{([`features:instance`](ABENBDL_ACTIONS_FC.html)\ |\ [`features:global`](ABENBDL_ACTIONS_FC.html)\}]\                [,[`precheck`](ABENBDL_PRECHECK.html)]\                [,[`authorization:none`](ABENBDL_ACTIONS_AUTH.html)]\                [,[`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html)]);                [[`\{default function GetDefaultsFor_Assoc [external 'GetDefaultsForCBA'];\}`](ABENBDL_DEFAULT_FUNCTION.html)]\                 ]\}``

A [standard operation for associations](ABENRAP_STANDARD_OP_ASSOC_GLOSRY.html) provides canonical behavior along an [association path](ABENCDS_ASSOCIATION_PATH_GLOSRY.html) from an [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) to an [association target](ABENASSOCIATION_TARGET_GLOSRY.html). [Create-by-association](ABENRAP_CBA_OPERATION_GLOSRY.html) and [read-by-association](ABENRAP_RBA_OPERATION_GLOSRY.html) are [standard operations for associations](ABENRAP_STANDARD_OP_ASSOC_GLOSRY.html).

**Read by association**

The declaration of an [association](ABENCDS_ASSOCIATION_GLOSRY.html) in the BDEF enables the standard operation [read-by-association](ABENRAP_RBA_OPERATION_GLOSRY.html), as described in [Operations for Associations](ABENBDL_ASSOCIATION.html).

**Create by association**

The addition `create` enables [create-by-association operations](ABENRAP_CBA_OPERATION_GLOSRY.html) for [associations](ABENCDS_ASSOCIATION_GLOSRY.html):

The following rules apply:

The syntax for enabling create access to an association target entity is as follows:

association \_Assoc \\{ create; \\}

**RAP BDL Operation Additions**

The following [RAP BDL operation additions](ABENBDL_OPERATIONS_ADDITIONS.html) are possible:

In a managed RAP BO of an intra-BO scenario, create-by-association works only on direct child entities. Entities that are part of the same composition tree, but more than one level below the [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html), can be read enabled, but not create enabled. In an unmanaged RAP BO, this limitation does not apply.

Development guide for the ABAP RESTful Application Programming Model, topic [Create by Association Operation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ede2f6485d0e44a5b88e21272c462a12?version=sap_cross_product_abap).

The following example shows a managed BDEF based on the CDS root view entity `DEMO_RAP_MANAGED_ASSOC_ROOT`. The root entity explicitly enables read and create access for two associations:

The child entity explicitly enables read access to the parent entity `_parent`. In this example, this is required by the [RAP locking mechanism](ABENRAP_LOCKING_GLOSRY.html) (the association from the [lock dependent entity](ABENRAP_LOCK_DEP_ENT_GLOSRY.html) to the [lock master entity](ABENRAP_LOCK_MA_ENT_GLOSRY.html) must be explicitly defined, see topic [RAP - Locking](ABENBDL_LOCKING.html)).

**Note** This example does not fully meet the requirements of the [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

The following example shows an unmanaged BDEF based on the CDS root view entity `DEMO_RAP_UNMANAGED_AUTH`.

For the implementation in the ABAP behavior pool, see `BP_DEMO_RAP_UNMANAGED_AUTH====CCIMP`

The class `CL_DEMO_RAP_UNMANAGED_ASSOC` accesses the business object using [EML](ABENEML_GLOSRY.html) and performs the following steps:

-   [Create-by-association](ABENRAP_CBA_OPERATION_GLOSRY.html) allows RAP BO consumers creating new instances of the association target entity.

-   The create-by-association operations can be defined for [intra BO associations](ABENCDS_INTRA_BO_ASSOC_GLOSRY.html) and for [cross-BO associations](ABENCDS_CROSS_BO_ASSOC_GLOSRY.html).
-   The association target entity must be behavior enabled, in other words, the association target entity must have its own behavior definition.
-   For intra-BO associations, create-by-association is only available for to-child associations. It is not allowed for to-parent associations. In other words, [child nodes](ABENCHILD_ENTITY_GLOSRY.html) can be created via their [parent node](ABENPARENT_ENTITY_GLOSRY.html), but parents cannot be created via their child nodes.

-   [`internal`](ABENBDL_INTERNAL.html): The create-by-association operation can only be accessed internally.
-   [`features:instance`](ABENBDL_ACTIONS_FC.html): Enables dynamic feature control for the association in question.
-   [`features:global`](ABENBDL_ACTIONS_FC.html): Enables global feature control for the association in question.
-   [`precheck`](ABENBDL_PRECHECK.html): Prevents illegal changes from reaching the application buffer by prechecking [modify operations](ABENRAP_MODIFY_OPERATION_GLOSRY.html).
-   [`authorization:none`](ABENBDL_ACTIONS_AUTH.html): Excludes the association in question from [authorization checks](ABENBDL_AUTHORIZATION.html).
-   [`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html): Delegates the [authorization control](ABENBDL_AUTHORIZATION.html) to the authorization check that is implemented for the update operation.
-   [`\{default function GetDefaultsFor_Assoc [external 'GetDefaultsForCBA'];\}`](ABENBDL_DEFAULT_FUNCTION.html): Defines a [RAP default values function](ABENRAP_BO_DEFAULTING_GLOSRY.html) for the [create-by-association operation](ABENRAP_CBA_OPERATION_GLOSRY.html). The effect is that field values are defaulted on the user interface.

-   Managed RAP BO: In a [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html), operations for associations are provided by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html).
-   Unmanaged RAP BO: In an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html), operations for associations must be implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) in the [RAP handler method](ABAPMETHODS_FOR_RAP_BEHV.html)\\ [`FOR MODIFY`](ABAPHANDLER_METH_MODIFY.html).
-   Projection BDEF: In a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html), operations for associations can be reused from the [base BDEF](ABENRAP_BASE_BDEF_GLOSRY.html). This can be done using the keyword `use`. For further details, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).
-   RAP BO interface: In a RAP BO interface, operations for associations can be reused from the base BDEF. This can be done using the keyword `use`. For further details, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

-   For create-by-association operations, the optional addition [`AUTO FILL CID`](ABAPMODIFY_ENTITY_ENTITIES_FIELDS.html) can be used to automatically fill the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) component [`%cid`](ABAPDERIVED_TYPES_CID.html).
-   It is technically possible to declare an association as an ancestor association using the syntax addition [`ancestor`](ABENBDL_ANCESTOR_EXT.html). When working with ancestor associations, it is no longer required to explicitly define the [RAP authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html), [RAP lock master entity](ABENRAP_LOCK_MA_ENT_GLOSRY.html), and [RAP ETag master entity](ABENRAP_ETAG_MA_ENT_GLOSRY.html) of a dependent entity, since the path to the respective master entities is derived via ancestor associations. This syntax was first introduced in the context of [BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html) and it is mandatory for BDEF extensions. It can also be used in BDEFs of type managed and unmanaged, but SAP does not recommend this. For further details, see the topic about [ancestor associations](ABENBDL_ANCESTOR_EXT.html).

-   the to-child association `_child` to its child node, and
-   the cross-BO association `_ext` to an external association which is not part of the composition tree.

-   The association `_child` is read- and create-enabled.
-   The association `_parent` is read-enabled.

-   it creates three instances of the parent entity and two instances of the child entity via the association `_child`.
-   it reads the content of the parent table via the association `_parent` and the content of the child table via the association `_child` and displays the result.

managed\\nimplementation in class BP\_DEMO\_RAP\_MANAGED\_ASSOC\_ROOT unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_MANAGED\_ASSOC\_ROOT alias \_Root\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master(global)\\n\\{\\n create;\\n update;\\n delete;\\n association \_child \\{ create; \\}\\n association \_ext \\{ create; \\}\\n field ( readonly:update ) KeyFieldRoot;\\n\\n mapping for demo\_dbtab\_root\\n \\{\\n KeyFieldRoot = key\_field;\\n DataFieldRoot = data\_field;\\n CharFieldRoot = char\_field;\\n DecFieldRoot = dec\_field;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_MANAGED\_ASSOC\_CHILD alias \_Child\\npersistent table demo\_dbtab\_child\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\n\\{\\n update;\\n delete;\\n\\n association \_parent \\{ \\}\\n\\n field ( readonly:update ) KeyField, KeyFieldChild;\\n mapping for demo\_dbtab\_child\\n \\{\\n KeyField = key\_field;\\n KeyFieldChild = key\_field\_child;\\n DataField = data\_field;\\n CharField = char\_field;\\n \\}\\n\\} unmanaged implementation in class bp\_demo\_rap\_unmanaged\_auth unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_UNMANAGED\_AUTH\\nlock master\\nauthorization master (global)\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly:update ) KeyFieldRoot;\\n association \_child \\{create;\\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_UNMANAGED\_AUTH\_CHILD\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\n\\{\\n update;\\n delete;\\n\\n field ( readonly:update ) KeyField, KeyFieldChild;\\n\\n association \_parent \\{ \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_association.html