---
title: "Further executable examples"
description: |
  -   Extension header(ABENBDL_EXTENSION_HEADER.html) -   Entity behavior extension(ABENBDL_EXTEND_BEH.html) -   Extension entity behavior definition(ABENBDL_DEFINE_BEH_EXTEND.html) -   Implementation group(ABENBDL_DEFINE_BEH_EXTEND.html) -   Internal operations(ABENBDL_INTERNAL.html): -   R
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_IN_CLASS_UNIQUE_EXT.htm"
abapFile: "ABENBDL_IN_CLASS_UNIQUE_EXT.html"
keywords: ["update", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "ABENBDL", "CLASS", "UNIQUE", "EXT"]
---

`... implementation in class ClassName unique;`

Specifies an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) for the extended RAP business object. Valid abbreviations are [extension](ABENRAP_PREFIX_EXTENSION_GLOSRY.html) ABAP behavior pool or extension ABP. An extension ABP is an optional component of a BDEF extension and only required if the BDEF extension specifies implementation-relevant components.

An extension ABAP behavior pool can be specified in different positions:

The mandatory addition `unique` defines that each operation can be implemented exactly once.

An original ABP and an extension ABP are separate artifacts that do not depend on each other. An original ABP and an extension ABP consider each other external consumers. The following rules apply:

A BDEF extension can be specified as a [BDEF friend](ABENRAP_BDEF_FRIEND_GLOSRY.html) of an original behavior definition using the syntax [`with friends`](ABENBDL_WITH_FRIENDS.html). BDEF friends have unrestricted access to all components of the original RAP BO. For example, a BDEF friend can call [internal RAP BO operations](ABENRAP_INTERNAL_OPERATION_GLOSRY.html) and read or modify RAP BO entities [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html). In this case, the extension ABP can access the original RAP BO without the restrictions described above.

The executable example [Behavior Extension](ABENBDL__BEHAVIOR_EXT_ABEXA.html) implements authorization control, feature control, a validation, a determination and two actions. These implementations are distributed between original ABP and extension ABP.

Further executable examples

-   [Extension header](ABENBDL_EXTENSION_HEADER.html)
-   [Entity behavior extension](ABENBDL_EXTEND_BEH.html)
-   [Extension entity behavior definition](ABENBDL_DEFINE_BEH_EXTEND.html)
-   [Implementation group](ABENBDL_DEFINE_BEH_EXTEND.html)

-   [Internal operations](ABENBDL_INTERNAL.html):
-   RAP BO operations defined as [`internal`](ABENBDL_INTERNAL.html) can be accessed only from within the same ABP that implements them. An internal operation from the original BDEF cannot be extended, since it is not visible in the extension ABP. In the same way, internal actions from an extension are not visible to the original BO.
-   [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html):
-   The addition `IN LOCAL MODE` grants privileged access rights only to the particular RAP BO itself. The original BO can be accessed in local mode by its own implementation classes or other classes that are called from its own implementation. The extension BO can be accessed in local mode from its own class implementations. An original BO and an extension BO consider each other external consumers.
-   Field usage

-   An extension ABP can use fields from the extended RAP BO.
-   The original RAP BO can use fields from an extension, if the extension is created in the same software component.
-   Field attributes, such as [`readonly`](ABENBDL_FIELD_CHAR.html), must be respected between the original ABP and the extension ABP. For example, if an extension ABP tries to update or delete `readonly` fields of the original RAP BO, a [runtime error](ABENRUNTIME_ERROR_GLOSRY.html) occurs. **Note:** A runtime error also occurs when trying to modify a read-only field using dynamic EML.

-   [Feature control](ABENBDL_ACTIONS_FC.html):

-   The original ABP implements feature control for original fields and operations.
-   The extension ABP implements feature control for extension fields and extension operations from the same software component.
-   The [`REQUEST` parameter](ABAPHANDLER_METH_FEATURES.html) for the [handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) for [global](ABAPHANDLER_METH_GLOBAL_FEATURES.html) and [instance feature control](ABAPHANDLER_METH_FEATURES.html) contains the fields and operations from the directly related BDEF, that means, either original or extension. It does not contain operations from both extended and extension BDEF, even if they concern the same RAP BO entity. This means that a strict separation of feature control for original and extension fields and operations is enforced.

-   [Authorization control](ABENBDL_AUTHORIZATION.html):

-   [RAP authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html) can be defined only in the extended RAP BO, but it may be implemented in both the original and the extension ABP, if required.
-   The original BO implements authorization control for actions defined in the original BO.
-   The extension BO implements authorization control for extension actions, if specified.
-   The `REQUEST` parameter for the [handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) for [global](ABAPHANDLER_METH_GLOBAL_AUTH.html) and [instance authorization control](ABAPHANDLER_METH_AUTH.html) contains only the operations from the directly related BDEF, that means, either extended or extension. This means that a strict separation of authorization control for original and extension operations is enforced.
-   If an operation, for example [update](ABENBDL_STANDARD_OPERATIONS.html), is protected from unauthorized access and this is implemented in the original RAP BO, then it is checked during all update operations, updates on original nodes as well as updates on extension nodes. That means that the implementation of original and extension components is strictly separated, but the original implementation also applies to operations against extension nodes.
-   The following cases require a separate implementation for authorization control in the extension behavior pool of the master entity and of the authorization-dependent entity: [actions](ABENBDL_ACTION.html) of authorization dependent entities, create-enabled [cross-BO associations](ABENCDS_CROSS_BO_ASSOC_GLOSRY.html), create-enabled associations which are not [CDS compositions](ABENCDS_COMPOSITION_GLOSRY.html).

-   The [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) of a RAP BO includes all original and all extension fields.
-   A BDEF extension must not be used as global data type or part of a data type.

-   The implementation rules for ABAP behavior pools are described in the topic [ABAP Behavior Pools (ABP)](ABENABAP_BEHAVIOR_POOLS.html).
-   A complete list of BDEF derived types is provided in the topic [BDEF Derived Types](ABENRPM_DERIVED_TYPES.html).

-   [Node Extension](ABENBDL_ASSOC_EXT_ABEXA.html)
-   [Field Extension](ABENBDL_FIELD_EXT_ABEXA.html)

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_managed\_unm.html abenbdl\_extension\_syntax.html abenbdl\_extension\_header.html