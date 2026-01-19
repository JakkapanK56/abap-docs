---
title: "ABENBDL_STANDARD_OPERATIONS"
description: |
  ABENBDL_STANDARD_OPERATIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_STANDARD_OPERATIONS.htm"
abapFile: "ABENBDL_STANDARD_OPERATIONS.html"
keywords: ["update", "delete", "do", "if", "method", "class", "types", "ABENBDL", "STANDARD", "OPERATIONS"]
---

``... [[`internal`](ABENBDL_INTERNAL.html)] create [[`([features:global]`](ABENBDL_ACTIONS_FC.html)\                        [,[`precheck`](ABENBDL_PRECHECK.html)]\                        [,[`authorization:none`](ABENBDL_ACTIONS_AUTH.html)]);]\                        [[`\{default function [GetDefaultsForCreate];\}`](ABENBDL_DEFAULT_FUNCTION.html)]\    |\ [[`internal`](ABENBDL_INTERNAL.html)] update [[`(\{features:instance | features:global`](ABENBDL_ACTIONS_FC.html)\}\                        [,[`precheck`](ABENBDL_PRECHECK.html)]\                        [,[`authorization:none`](ABENBDL_ACTIONS_AUTH.html)])];    |\ [[`internal`](ABENBDL_INTERNAL.html)] delete [[`(\{features:instance | features:global`](ABENBDL_ACTIONS_FC.html)\}\                        [,[`precheck`](ABENBDL_PRECHECK.html)]\                        [,[`authorization:none`](ABENBDL_ACTIONS_AUTH.html)]\                        [,[`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html)])];``

[Create](ABENRAP_CREATE_OPERATION_GLOSRY.html), [update](ABENRAP_UPDATE_OPERATION_GLOSRY.html), and [delete](ABENRAP_DELETE_OPERATION_GLOSRY.html) are standard operations. They are also known as [CUD operations](ABENCUD_GLOSRY.html), which is an acronym for create, read, update, delete. The [read operation](ABENRAP_READ_OPERATION_GLOSRY.html) is always implicitly enabled for each entity listed in a [RAP behavior definition (BDEF)](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) and it mustn't be declared explicitly.

`create`, `update`, and `delete` are optional components of a BDEF. If, for example, `update` is defined for an entity, then it is allowed to update this entity. If `update` is not defined, then a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) is not allowed to perform update calls.

The following [RAP BDL operation additions](ABENBDL_OPERATIONS_ADDITIONS.html) are possible:

For create operations, the optional addition [`AUTO FILL CID`](ABAPMODIFY_ENTITY_ENTITIES_FIELDS.html) can be used to automatically fill the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) component [`%cid`](ABAPDERIVED_TYPES_CID.html).

Development guide for the ABAP RESTful Application Programming Model, section about [Standard Operations](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/9a701fe447e74e798db0f2a4ef10bc04?version=sap_cross_product_abap).

The following example shows a managed BDEF based on the CDS root view entity `DEMO_MANAGED_ROOT`. The transactional behavior of the root view entity is defined by the standard operations `create`, `update`, and `delete`. The read operation is implicitly available for both, parent and child entity. For the to-child association `_child` that connects both entities, the create-by-association operation is defined in the entity behavior body.

The class `CL_DEMO_RAP_EML_MODIFY_OP_2` accesses the business object using [EML](ABENEML_GLOSRY.html) and creates, reads, deletes, and updates BO instances. These operations all work without implementation in the ABAP behavior pool.

[ABAP EML - `MODIFY`, Standard Operations (Managed)](ABENEML_MODIFY_OP_ABEXA.html)

The following example shows an unmanaged BDEF based on the CDS root view entity `DEMO_RAP_UNMANAGED_AUTH`. The transactional behavior of the root view entity is defined by the standard operations `create`, `update`, and `delete`. The read operation is implicitly available for both, parent and child entity. For the to-child association `_child` that connects both entities, the create-by-association operation is defined in the entity behavior body.

For the implementation in the ABAP behavior pool, see `BP_DEMO_RAP_UNMANAGED_AUTH====CCIMP`.

The class `CL_DEMO_RAP_EML_UNMANAGED` accesses the business object using [EML](ABENEML_GLOSRY.html) and reads, creates, deletes, and updates BO instances.

[ABAP EML - `MODIFY`, Standard Operations (Unmanaged)](ABENEML_MODIFY_OP_U_ABEXA.html)

-   `create` is a modifying operation that creates new [instances](ABENRAP_BO_ENTITY_INST_GLOSRY.html) of a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html).

-   In a managed RAP BO, `create` can only be declared for [root nodes](ABENROOT_NODE_GLOSRY.html). Child nodes are implicitly create-enabled for [internal usage](ABENBDL_INTERNAL.html). That means, an external consumer can only create a new instance of a child entity via its parent, see [create-by-association](ABENBDL_ASSOCIATION.html) operation. A direct create can only take place from the BO's own implementation in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).
-   In an unmanaged RAP BO, direct creates on child entities are possible but not recommended.

-   `update` is a modifying operation that changes one or more instances of a business object entity.
-   `delete` is a modifying operation that deletes one or more instances of a business object entity.
-   **Note** In a managed RAP BO, if a parent entity instance is deleted, all child entity instances that belong to the parent entity instance in question are deleted automatically. In an unmanaged RAP BO, it is recommended that you implement the delete operation in this way as well.

-   [`internal`](ABENBDL_INTERNAL.html): `create`, `update`, and `delete` can be defined as internal operations.
-   [`(features:instance)`](ABENBDL_ACTIONS_FC.html): Dynamic feature control can be specified for `update` or `delete`, but not for `create`.
-   [`(features:global)`](ABENBDL_ACTIONS_FC.html): Global feature control can be specified for `create`, `update`, or `delete`.
-   [`precheck`](ABENBDL_PRECHECK.html): A [RAP BO precheck](ABENRAP_BO_PRECHECK_GLOSRY.html) can be specified for `create`, `update`, or `delete`.
-   [`authorization:none`](ABENBDL_ACTIONS_AUTH.html): Excludes the operation in question from [authorization checks](ABENBDL_AUTHORIZATION.html).
-   [`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html)
-   \- Delegates the [authorization control](ABENBDL_AUTHORIZATION.html) for the authorization in question to the authorization check that is implemented for the update operation.
-   \- Only available for `delete`.
-   [`\{default function [GetDefaultsForCreate];\}`](ABENBDL_DEFAULT_FUNCTION.html)
-   \- Defines a [RAP default values function](ABENRAP_BO_DEFAULTING_GLOSRY.html) for the operation in question. The effect is that field values are defaulted on the user interface.
-   \- Only available for `create`.

-   Managed RAP BO
-   In a [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html), the CRUD operations do not require an [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html), since they are completely handled by the managed RAP BO provider. (However, some of the optional additions do require implementation. This is documented in the respective topics.)
-   Unmanaged RAP BO
-   In an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html), each standard operation must be implemented in the ABAP behavior pool in the [RAP handler method](ABAPMETHODS_FOR_RAP_BEHV.html)\\ [`FOR MODIFY`](ABAPHANDLER_METH_MODIFY.html).
-   Projection BO and RAP BO Interface
-   In a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html) and in a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), the standard operations can be reused from the [base BDEF](ABENRAP_BASE_BDEF_GLOSRY.html). This can be done using the keyword `use`. For further details, see topic [RAP BDL - use, projection BDEF](ABENBDL_USE_PROJECTION.html).

managed implementation in class bp\_demo\_managed\_root unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_MANAGED\_ROOT\\npersistent table demo\_tab\_root\\nlock master\\nauthorization master ( global )\\n\\{\\n create;\\n update;\\n delete;\\n association \_child \\{ create; \\}\\n\\n field ( readonly : update ) key\_field;\\n\\}\\n\\ndefine behavior for DEMO\_MANAGED\_CHILD alias child\\npersistent table demo\_tab\_child\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\n\\{\\n update;\\n delete;\\n field ( readonly : update ) key\_field;\\n association \_parent;\\n\\} unmanaged implementation in class bp\_demo\_rap\_unmanaged\_auth unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_UNMANAGED\_AUTH\\nlock master\\nauthorization master (global)\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly:update ) KeyFieldRoot;\\n association \_child \\{create;\\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_UNMANAGED\_AUTH\_CHILD\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\n\\{\\n update;\\n delete;\\n\\n field ( readonly:update ) KeyField, KeyFieldChild;\\n\\n association \_parent \\{ \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html