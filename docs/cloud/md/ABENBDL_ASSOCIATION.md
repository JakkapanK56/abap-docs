---
title: "ABENBDL_ASSOCIATION"
description: |
  ABENBDL_ASSOCIATION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_ASSOCIATION.htm"
abapFile: "ABENBDL_ASSOCIATION.html"
keywords: ["do", "if", "case", "method", "data", "types", "ABENBDL", "ASSOCIATION"]
---

``... [[`internal`](ABENBDL_INTERNAL.html)]\ [[`AssocImplType`](ABENBDL_ASSOC_IMPL_TYPE.html)] association _Assoc[;]\                 [abbreviation newName]\                 [without response]\                 [using TargetEntity \{_ReverseAssoc |~TargetAltKey\}]\         [\{         [[`StandardOperationsForAssoc`](ABENBDL_ASSOC_STAND_OPS.html)];         [[`NonStandardOperationsForAssoc`](ABENBDL_ASSOC_NONSTAND_OPS.html)];         [with draft];          \}]``

[1. `... abbreviation newName ...`](#ABAP_ADDITION_1@3@)

[2. `... without response ...`](#ABAP_ADDITION_2@3@)

[3. `... using TargetEntity \{_ReverseAssoc |~TargetAltKey\}...`](#ABAP_ADDITION_3@3@)

[4. `... with draft; ...`](#ABAP_ADDITION_4@3@)

A RAP BO operation for associations operates along an [association path](ABENCDS_ASSOCIATION_PATH_GLOSRY.html) and affects the [association target](ABENASSOCIATION_TARGET_GLOSRY.html). These operations are defined in the entity behavior body of a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). There are [standard operations for associations](ABENRAP_STANDARD_OP_ASSOC_GLOSRY.html) and [non-standard operations for associations](ABENRAP_NONST_OP_ASSOC_GLOSRY.html).

The [read-by-association operation](ABENRAP_RBA_OPERATION_GLOSRY.html) is automatically enabled when the association is specified in the behavior definition. There is no dedicated syntax element.

Example: `association _Assoc;`

[Read-by-association](ABENRAP_RBA_OPERATION_GLOSRY.html) allows [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html) read access to the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of a RAP BO entity.

The following rules apply:

**RAP BDL Operation Additions**

The following [RAP BDL operation additions](ABENBDL_OPERATIONS_ADDITIONS.html) are possible:

Development guide for the ABAP RESTful Application Programming Model, topic [Read by Association](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/1f518ea257f6455380384f3810e67ba5?version=sap_cross_product_abap).

Defines an alternative name for an association. The abbreviation `newName` can have a maximum of 16 characters. Associations are in the namespace of their root entity and can have up to 30 characters. This is under certain circumstances too long to be processed in [ABAP RAP](ABENABAP_RAP_GLOSRY.html). Whenever a shorter name is required, you are prompted to assign an abbreviation to the association with no more that 16 characters. The abbreviation should start with a character, not with an underscore.

The optional addition `without response` is for cross-BO associations that have an association target from another BO. The association target entity of cross-BO associations is automatically included in the response types of the current RAP BO as [foreign entity](ABENBDL_FOREIGN.html). In this way, issues with the target entity can become part of the response types during read-by-association or create-by-association operations. `without response` prevents the default behavior. It excludes the [foreign entity](ABENRAP_FOREIGN_ENTITY_GLOSRY.html) from the response types.

Notation: `association _ext without response \{ create; \}`

The optional addition `...using...` is relevant for [target-resolved associations](ABENTARGET_RESOLVED_ASSOC_GLOSRY.html) in cross-BO scenarios. It defines the option of how to determine the [primary key](ABENPRIMARY_KEY_GLOSRY.html) fields of the associated target entity instances. The target primary key must be identified to read the target instances, for example, in a [read-by-association operation](ABENRAP_RBA_OPERATION_GLOSRY.html).

There are two options to retrieve the primary key of the target entity:

Draft-enables an association. A draft-enabled association retrieves active data if it is followed from an [active instance](ABENRAP_ACTIVE_INSTANCE_GLOSRY.html) and draft data if it is followed from a [draft instance](ABENRAP_DRAFT_INSTANCE_GLOSRY.html) (for details about RAP draft handling, see [RAP BDL - managed, with draft](ABENBDL_WITH_DRAFT.html)).

If a [BO](ABENBUSINESS_OBJECT_GLOSRY.html) is draft-enabled, then all associations should be draft-enabled, so that the associations always lead to the target instance with the same state (draft or active).

As soon as you draft-enable a BO by adding `with draft`, all BO-internal associations are automatically draft-enabled. To make this behavior explicit, the behavior prompts you to specify the to-child associations within a draft BO with `with draft`.

-   [**Standard Operation for Associations**](ABENBDL_ASSOC_STAND_OPS.html):
-   An operation that provides canonical behavior along an [association path](ABENCDS_ASSOCIATION_PATH_GLOSRY.html) from an [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) to an [association target](ABENASSOCIATION_TARGET_GLOSRY.html). [Create-by-association](ABENRAP_CBA_OPERATION_GLOSRY.html) and [read-by-association](ABENRAP_RBA_OPERATION_GLOSRY.html) are standard operations for associations.
-   [**Non-Standard Operation for Associations**](ABENBDL_ASSOC_NONSTAND_OPS.html):
-   An operation that provides noncanonical behavior along an [association path](ABENCDS_ASSOCIATION_PATH_GLOSRY.html) from an [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) to an [association target](ABENASSOCIATION_TARGET_GLOSRY.html). For example, the [link action](ABENRAP_LINK_ACTION_GLOSRY.html), the [unlink action](ABENRAP_UNLINK_ACTION_GLOSRY.html), the [inverse function](ABENRAP_INVERSE_FUNCTION_GLOSRY.html) are predefined nonstandard operations for associations.

-   The read-by-association operation can be defined for [intra BO associations](ABENCDS_INTRA_BO_ASSOC_GLOSRY.html) and for [cross-BO associations](ABENCDS_CROSS_BO_ASSOC_GLOSRY.html).
-   The association target entity must be behavior enabled, in other words, the association target entity must have its own behavior definition.
-   In the case of intra-BO associations, it is mandatory to define at least read access to the associations to RAP BO entities that are also behavior-enabled.

-   [`internal`](ABENBDL_INTERNAL.html): Every defined operation for association can only be accessed internally, including the implicitly defined read-by-association operation.

-   Managed RAP BO: In a [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html), operations for associations are provided by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html).
-   Unmanaged RAP BO: In an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html), operations for associations must be implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) in the [RAP handler method](ABAPMETHODS_FOR_RAP_BEHV.html)\\ [`FOR MODIFY`](ABAPHANDLER_METH_MODIFY.html).
-   Projection BDEF: In a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html), operations for associations can be reused from the [base BDEF](ABENRAP_BASE_BDEF_GLOSRY.html). This can be done using the keyword `use`. For further details, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).
-   RAP BO interface: In a RAP BO interface, operations for associations can be reused from the base BDEF. This can be done using the keyword `use`. For further details, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

-   Via the declaration of its reverse association:
-   When declaring the reverse association of the association at hand, the primary key of the associated target instances is retrieved by executing the [inverse function](ABENRAP_INVERSE_FUNCTION_GLOSRY.html), which is defined for the reverse association in the target entity. The inverse function receives the primary key of the source entity as input parameter and returns the primary key of the target entity.
-   Notation: `... using TargetEntity _ReverseAssoc`
-   Via the alternative key and the key function of the target entity
-   When declaring the [alternative key](ABENRAP_ALTERNATIVE_KEY_GLOSRY.html) in the using addition, the primary key of the associated target instances is retrieved by executing the [key function](ABENRAP_KEY_FUNCTION_GLOSRY.html), which is defined in the target entity. A prerequisite for the is the declaration of an [alternative key](ABENRAP_ALTERNATIVE_KEY_GLOSRY.html) in the target entity, which must be the primary key of the source entity.
-   The target entity's key function receives the primary key of the source entity as input parameter and returns the target entity's primary key. This option is mainly used in cross-BO scenarios with reuse objects, where the reverse association is not available.
-   Notation: `... using TargetEntity ~TargetAltKey`

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html