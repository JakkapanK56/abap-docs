---
title: "ABENBDL_WITH_FRIENDS"
description: |
  ABENBDL_WITH_FRIENDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_WITH_FRIENDS.htm"
abapFile: "ABENBDL_WITH_FRIENDS.html"
keywords: ["update", "delete", "do", "if", "method", "class", "data", "ABENBDL", "WITH", "FRIENDS"]
---

`... with friends BDEFExtension1 [, BDEFExtension2]\ [,...]...`

Optional addition that can be used to declare one or more [BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html)\\ `BDEFExtension1`, `BDEFExtension2`, ... as [friends](ABENRAP_BDEF_FRIEND_GLOSRY.html) of the current behavior definition `RootEntity`. At least one BDEF extension must be specified. `BDEFExtension1`, `BDEFExtension2`, ... must be BDEF extensions of the current BDEF. Otherwise, there is no effect. Only BDEF extensions of the current BDEF can be specified as friends.

The friends of a BDEF have unrestricted access to all components of the BDEF. They are not handled as external [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html), but have the same access rights as the original RAP BO. In particular, a friend has the following rights:

If a friend of the BDEF `RootEntity` defines friends, these friends are not automatically friends of the original BDEF. This means that the friend relationship is not transitive.

The concept of declaring BDEF extensions as friends can be useful, for example, for modularization purposes.

The following example demonstrates the different handling of BDEF friends and non-friends.

The managed behavior definition `DEMO_RAP_FRIENDS` is defined as `extensible with friends`. It defines two actions:

Two extensions are defined:

**Enhanced Access Rights for BDEF Friends**

`DEMO_RAP_FRIENDS_X1` defines an extension action that executes the internal action of the original RAP BO. This is allowed, since `DEMO_RAP_FRIENDS_X1` is a BDEF friend of the original RAP BO.

Definition:

Implementation of the extension action in the ABP: An internal action of the extended RAP BO is executed.

Executing the extension action using ABAP EML:

The ABAP EML consumer triggers the extension action `X1_CALL_STATIC_INTERNAL`. This leads to the following call stack: First, the authorization control of the BDEF extension `DEMO_RAP_FRIENDS_X1` is called. Then, the extension action is called. The extension action, in turn, calls the internal action `internalAction` of the extended RAP BO. The authorization control of the extended RAP BO is **not** called and the internal action can be executed, since the BDEF extension `DEMO_RAP_FRIENDS_X1` is defined as a friend of `DEMO_RAP_FRIENDS`.

**Access to Internal Actions Forbidden for Non-Friends**

`DEMO_RAP_FRIENDS_X2` defines an extension action that executes the internal action of the original RAP BO. This is not allowed, since `DEMO_RAP_FRIENDS_X2` is not a BDEF friend of the original RAP BO.

Definition:

Implementation of the extension action `X2_DUMP_STATIC_INTERNAL_LOCAL` in the ABP:

Executing the extension action using ABAP EML: An internal action of the extended RAP BO is executed.

The ABAP EML consumer triggers the extension action `X2_DUMP_STATIC_INTERNAL_LOCAL`. This leads to the following call stack: First, the authorization control of the BDEF extension `DEMO_RAP_FRIENDS_X2` is called. Then, the extension action is called. The extension action, in turn, calls the internal action `internalAction` of the extended RAP BO. This is not allowed and a runtime error occurs, since the BDEF extension `DEMO_RAP_FRIENDS_X2` is **not** a friend of `DEMO_RAP_FRIENDS`.

-   Access to [internal RAP BO operations](ABENRAP_INTERNAL_OPERATION_GLOSRY.html).
-   Privileged access rights using the addition [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html).
-   Access to [RAP BO fields](ABENRAP_BO_FIELD_GLOSRY.html) from the original RAP BO.

-   [Managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BOs](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   BDEF extensions to managed and unmanaged RAP BOs. For details, see the topic [RAP - Extensibility Enabling for Base BDEF Extensions](ABENBDL_EXT_ENABL_EXT_BASE.html).

-   An internal action `internalAction` that can be accessed from within the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) only.
-   The action `myAction` that is available also to external [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html).

-   `DEMO_RAP_FRIENDS_X1` -> defined as BDEF friend.
-   `DEMO_RAP_FRIENDS_X2` -> not defined as BDEF friend.

managed implementation in class bp\_demo\_rap\_friends unique;\\nstrict ( 2 );\\n\\nextensible\\nwith friends demo\_rap\_friends\_x1;\\n\\ndefine behavior for DEMO\_RAP\_FRIENDS\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master ( instance, global )\\nextensible\\n\\n\\{\\n create;\\n update;\\n delete;\\n\\n field(readonly:update) key\_field;\\n\\n internal action internalAction;\\n\\n action myAction;\\n\\} extension implementation in class bp\_demo\_rap\_friends\_x1 unique;\\n\\nextend behavior for DEMO\_RAP\_FRIENDS\\n\\{\\naction (authorization : instance) x1\_call\_static\_internal;\\n\\} METHOD x1\_call\_static\_internal. \\n MODIFY ENTITIES OF demo\_rap\_friends IN LOCAL MODE \\n ENTITY demo\_rap\_friends \\n EXECUTE internalAction \\n FROM CORRESPONDING #( keys ). \\nENDMETHOD. MODIFY ENTITY demo\_rap\_friends \\n EXECUTE x1\_call\_static\_internal \\n FROM VALUE #( ( key\_field = 1 ) ) \\n FAILED DATA(failed) \\n REPORTED DATA(reported) \\n MAPPED DATA(mapped). extension implementation in class bp\_demo\_rap\_friends\_x2 unique;\\n\\nextend behavior for DEMO\_RAP\_FRIENDS\\n\\{\\n action ( authorization : instance ) x2\_dump\_static\_internal\_local;\\n action ( authorization : instance ) x2\_dump\_dynamic\_internal\_local;\\n\\} METHOD x2\_dump\_static\_internal\_local. \\n MODIFY ENTITIES OF demo\_rap\_friends IN LOCAL MODE \\n ENTITY demo\_rap\_friends \\n EXECUTE internalAction \\n FROM CORRESPONDING #( keys ). \\nENDMETHOD. MODIFY ENTITY demo\_rap\_friends \\n EXECUTE x2\_dump\_static\_internal\_local \\n FROM VALUE #( ( key\_field = 1 ) ) \\n FAILED DATA(failed) \\n REPORTED DATA(reported) \\n MAPPED DATA(mapped). abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_enabling.html abenbdl\_extensibility\_enabling\_m\_u.html