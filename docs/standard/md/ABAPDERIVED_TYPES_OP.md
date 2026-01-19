---
title: "ABAPDERIVED_TYPES_OP"
description: |
  ABAPDERIVED_TYPES_OP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDERIVED_TYPES_OP.htm"
abapFile: "ABAPDERIVED_TYPES_OP.html"
keywords: ["delete", "do", "if", "method", "class", "data", "types", "ABAPDERIVED", "TYPES"]
---

`%op` is a [component group](ABENCOMPONENT_GROUP_GLOSRY.html) in [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) that summarizes derived type components for [standard operations](ABENBDL_STANDARD_OPERATIONS.html) ([`%create`](ABAPDERIVED_TYPES_CREATE.html), for example), [nonstandard operations](ABENBDL_NONSTANDARD.html) ([`%action`](ABAPDERIVED_TYPES_ACTION.html)), and associations defined in the BDEF as well as [`%element`](ABAPDERIVED_TYPES_ELEMENT.html) in the context of [RAP messages](ABENRAP_MESSAGE_GLOSRY.html) and [authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html).

For example, if `%op-%create` is marked in a [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html), it indicates that the message relates to a [RAP create operation](ABENRAP_CREATE_OPERATION_GLOSRY.html).

**Type**

The components are typed with `ABP_BEHV_FLAG`.

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

The `FILLED_COMPONENTS_X` method of the system class `CL_ABAP_STRUCT_UTILITIES` supports an efficient processing of non-initial components of a structure where all components are typed with `x LENGTH 1`. It is particularly useful for checking filled components of structured derived types. See [here](ABENCL_ABAP_STRUCT_UTILITIES.html) for more information.

The following source code section taken from the `BP_DEMO_MANAGED_ROOT_PERM=====CCIMP` of the global class of the [behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) `BP_DEMO_MANAGED_ROOT_PERM` demonstrates the component `%op` in the context of a `get_instance_authorizations` method that returns information on whether delete operations and executions of an action are allowed on RAP BO instances or not. See the executable program for this example further down.

The example [BDEF derived type components in the context of requesting permissions](ABENDERIVED_TYPES_MISC_ABEXA.html) demonstrates the use of various BDEF derived type components including `%op` with a managed RAP BO.

-   `FAILED [EARLY|LATE]`
-   `REPORTED [EARLY|LATE]`
-   `[INSTANCE] AUTHORIZATION RESULT`

METHOD get\_instance\_authorizations. \\n READ ENTITIES OF demo\_managed\_root\_perm IN LOCAL MODE \\n ENTITY demo\_managed\_root\_perm \\n FIELDS ( field2 ) \\n WITH CORRESPONDING #( keys ) \\n RESULT DATA(lt\_status) \\n FAILED DATA(fail). \\n\\ \\n failed = CORRESPONDING #( DEEP fail ). \\n\\ \\n result = VALUE #( FOR ls\_status IN lt\_status \\n ( %tky = ls\_status-%tky \\n %op = VALUE #( \\n %delete = COND #( WHEN ls\_status-field2 = 'B' \\n THEN if\_abap\_behv=>auth-unauthorized \\n ELSE if\_abap\_behv=>auth-allowed ) \\n %action-action = COND #( \\n WHEN ls\_status-field2 = 'B' \\n THEN if\_abap\_behv=>auth-unauthorized \\n ELSE if\_abap\_behv=>auth-allowed ) \\n ) ) ). \\n\\ \\nENDMETHOD. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_misc.html