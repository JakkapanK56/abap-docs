---
title: "The database table of the source BO is initially filled with one"
description: |
  instance, where `TargetKey = 100`. The database table of the target BO is filled with two instances, where `TargetKey = 100` and `101` respectively. When the `link action` is executed with `SourceKey = '1'` and `%param-TargetKey = '101'`, as shown below, the `TargetKey` field in the source entity is
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_LINK_UNLINK_ACTION.htm"
abapFile: "ABENBDL_LINK_UNLINK_ACTION.html"
keywords: ["select", "update", "delete", "do", "if", "method", "class", "data", "ABENBDL", "LINK", "UNLINK", "ACTION"]
---

``...\{   [[`internal`](ABENBDL_INTERNAL.html)]\         \{[link action mylinkaction]\         [unlink action myunlinkaction]\}\         [(         [[`features: \{instance |global\}`](ABENBDL_ACTIONS_FC.html)]\         [[`precheck`](ABENBDL_PRECHECK.html)]\         [[`authorization:none`](ABENBDL_ACTIONS_AUTH.html)]\         [[`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html)]\          )];      \}``

**RAP BDL Operation Additions**

The following [RAP BDL operation additions](ABENBDL_OPERATIONS_ADDITIONS.html) are possible:

Development guide for the ABAP RESTful Application Programming Model, section [Link Action](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/579f8c1b7e9043999383e88aa6e9302b?version=sap_cross_product_abap) and [Unlink Action](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/b53c24b9372d4c2a8f5a17659c33fc69?version=sap_cross_product_abap).

The following example is based on two separate BOs, one serving as the source and the other as the target entity.

The association `_CROSS_ASSOC` is defined as a target resolved association, where the field `TargetKey` is used as the foreign key. See the CDS view `DEMO_RAP_LINKACTION_SRC` of the source BO:

In the BDEF of the source BO, the association `_CROSS_ASSOC` is used, with the additions `create`, `link action` and `unlink action`.

The database table of the source BO is initially filled with one
instance, where `TargetKey = 100`.

The database table of the target BO is filled with two instances, where `TargetKey = 100` and `101` respectively.

When the `link action` is executed with `SourceKey = '1'` and `%param-TargetKey = '101'`, as shown below, the `TargetKey` field in the source entity is overwritten with the new value 101, thus linking the source instance with the target instance 101.

See class `CL_DEMO_RAP_LINKACTION` for the following code snippet:

When the `unlink action` is executed with the parameter `SourceKey = '1'`, the `TargetKey` field in the source entity is emptied, thus breaking the link between the source and target instance.

-   Link Action

-   The link action is an instance-based action which can be defined for a [foreign key association](ABENFOREIGN_KEY_ASSOC_GLOSRY.html). The link action takes a combination of [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) and [target entity](ABENASSOCIATION_TARGET_GLOSRY.html) instance as input, and establishes a connection via the [association](ABENASSOCIATION_GLOSRY.html) between the two entity instances. This operation is realized by updating the [foreign key](ABENFOREIGN_KEY_GLOSRY.html) on the source entity to the value of the supplied target instance.
-   The link action is required when the [foreign key](ABENFOREIGN_KEY_GLOSRY.html) relationship between instances cannot be established by setting the respective [foreign key](ABENFOREIGN_KEY_GLOSRY.html) through create or [update](ABENUPDATE_GLOSRY.html) operations.
-   The link action can be used in [hierarchy](ABENHIERARCHY_GLOSRY.html) scenarios to change the tree order by updating the [foreign keys](ABENFOREIGN_KEY_GLOSRY.html) of entity instances.

-   Unlink Action

-   Use the unlink action to break connections in data models where [foreign-key](ABENFOREIGN_KEY_GLOSRY.html) relationships were previously established.
-   The unlink action dissolves the [foreign-key](ABENFOREIGN_KEY_GLOSRY.html) relationship between source and target instances by initializing the [foreign key field(s)](ABENFOREIGN_KEY_FIELD_GLOSRY.html) on the particular entity. It is defined for the [association](ABENASSOCIATION_GLOSRY.html) of the entity that stores the [foreign key](ABENFOREIGN_KEY_GLOSRY.html).
-   The unlink action can be used in the same scenarios as described for the link action.

-   [`internal`](ABENBDL_INTERNAL.html): The create-by-association operation can only be accessed internally.
-   [`features:instance`](ABENBDL_ACTIONS_FC.html): Enables dynamic feature control for the association in question.
-   [`features:global`](ABENBDL_ACTIONS_FC.html): Enables global feature control for the association in question.
-   [`precheck`](ABENBDL_PRECHECK.html): Prevents illegal changes from reaching the application buffer by prechecking [modify operations](ABENRAP_MODIFY_OPERATION_GLOSRY.html).
-   [`authorization:none`](ABENBDL_ACTIONS_AUTH.html): Excludes the association in question from [authorization checks](ABENBDL_AUTHORIZATION.html).
-   [`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html): Delegates the [authorization control](ABENBDL_AUTHORIZATION.html) to the authorization check that is implemented for the update operation.

-   Managed RAP BO: In a [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html), the inverse function does not require an [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html), since it is completely handled by the managed RAP BO provider, unless the association is unmanaged.
-   Unmanaged RAP BO: In an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html), the inverse function must be implemented in the ABAP behavior pool in the [RAP handler method](ABAPMETHODS_FOR_RAP_BEHV.html)\\ [`FOR MODIFY`](ABAPHANDLER_METH_MODIFY.html), unless the association is managed.
-   Projection BO and RAP BO Interface: In a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html) and in a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), the inverse function can be reused from the [baseBDEF](ABENRAP_BASE_BDEF_GLOSRY.html). This can be done using the keyword `use` for the association, listing the respective operations again. For further details, see topic [RAP BDL - use, projection BDEF](ABENBDL_USE_PROJECTION.html).

@AbapCatalog.viewEnhancementCategory: \[#NONE\]\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS View Link Action Source'\\n@Metadata.ignorePropagatedAnnotations: true\\n@ObjectModel.usageType:\\{\\n serviceQuality: #X,\\n sizeCategory: #S,\\n dataClass: #MIXED\\n\\}\\ndefine root view entity DEMO\_RAP\_LINKACTION\_SRC\\n as select from demo\_dbtab\_src\\n\\n association \[0..1\] to DEMO\_RAP\_LINKACTION\_TGT as \_CROSS\_ASSOC \\n on $projection.TargetKey = \_CROSS\_ASSOC.TargetKey\\n\\n\\{\\n key source\_key as SourceKey,\\n target\_key as TargetKey,\\n char\_field as CharField,\\n\\n \_CROSS\_ASSOC\\n\\}\\n managed implementation in class bp\_demo\_rap\_linkaction\_src unique;\\nstrict ( 2 );\\nwith cross associations;\\n\\ndefine behavior for DEMO\_RAP\_LINKACTION\_SRC //alias <alias\_name>\\npersistent table demo\_dbtab\_src\\nlock master\\nauthorization master ( instance )\\n\\n\\{\\n create ( authorization : global );\\n update;\\n delete;\\n field ( readonly ) SourceKey;\\n field ( readonly : update ) TargetKey;\\n\\n association \_CROSS\_ASSOC\\n \\{\\n create;\\n link action link\_action;\\n unlink action unlink\_action;\\n \\}\\n\\n mapping for demo\_dbtab\_src\\n \\{\\n SourceKey = source\_key;\\n TargetKey = target\_key;\\n CharField = char\_field;\\n \\}\\n\\n\\} MODIFY ENTITIES OF DEMO\_RAP\_LINKACTION\_SRC \\n ENTITY DEMO\_RAP\_LINKACTION\_SRC \\n EXECUTE link\_action FROM VALUE #( ( \\n SourceKey = '1' \\n %param-TargetKey = '101' \\n ) ). \\n\\ \\n COMMIT ENTITIES. MODIFY ENTITIES OF DEMO\_RAP\_LINKACTION\_SRC \\n ENTITY DEMO\_RAP\_LINKACTION\_SRC \\n EXECUTE unlink\_action FROM VALUE #( ( \\n SourceKey = '1' \\n ) ). \\n\\ \\n COMMIT ENTITIES. SOURCE\_KEY TARGET\_KEY CHAR\_FIELD 1 100 source TARGET\_KEY CHAR\_FIELD 100 target 101 target2 SOURCE\_KEY TARGET\_KEY CHAR\_FIELD 1 101 source SOURCE\_KEY TARGET\_KEY CHAR\_FIELD 1 \\ source abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_association.html abenbdl\_assoc\_nonstand\_ops.html