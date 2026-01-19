---
title: "ABAPDERIVED_TYPES_ACTION"
description: |
  ABAPDERIVED_TYPES_ACTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDERIVED_TYPES_ACTION.htm"
abapFile: "ABAPDERIVED_TYPES_ACTION.html"
keywords: ["update", "delete", "do", "if", "case", "method", "class", "data", "types", "ABAPDERIVED", "TYPES", "ACTION"]
---

`%action` is a structured component in [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html).

It is a structure containing the actions defined in the BDEF as components and used, for example, in the context of [feature control](ABENBDL_ACTIONS_FC.html) to get or provide action control information or to get information in responses if an action failed. To do so, the component in the `%action` structure must be marked.

**Type**

The components of the `%action` structure are typed with `ABP_BEHV_FLAG`.

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

The `FILLED_COMPONENTS_X` method of the system class `CL_ABAP_STRUCT_UTILITIES` supports an efficient processing of non-initial components of a structure where all components are typed with `x LENGTH 1`. It is particularly useful for checking filled components of structured derived types. See [here](ABENCL_ABAP_STRUCT_UTILITIES.html) for more information.

The following source code section taken from `CL_DEMO_RAP_DRVD_TYPES_PERM` demonstrates the component `%action`. In this case, the request parameter, which is of type [`TYPE STRUCTURE FOR PERMISSIONS REQUEST`](ABAPTYPE_STRUCTURE_FOR.html), is specified for a [`GET PERMISSIONS`](ABAPGET_PERMISSIONS.html) statement.

The example [BDEF Derived Type Components in the Context of Requesting Permissions](ABENDERIVED_TYPES_MISC_ABEXA.html) demonstrates the use of various BDEF derived type components including `%action` with a managed RAP BO.

-   `PERMISSIONS REQUEST`
-   `PERMISSIONS RESULT`
-   `FAILED [EARLY|LATE]`
-   `REPORTED [EARLY|LATE]`
-   `[INSTANCE|GLOBAL] FEATURES REQUEST`
-   `[INSTANCE|GLOBAL] FEATURES RESULT`
-   `[INSTANCE|GLOBAL] AUTHORIZATION REQUEST`
-   `[INSTANCE|GLOBAL] AUTHORIZATION RESULT`

DATA: request TYPE STRUCTURE FOR \\n PERMISSIONS REQUEST demo\_managed\_root\_perm. \\n\\ \\nrequest = VALUE #( \\n %create = if\_abap\_behv=>mk-on \\n %update = if\_abap\_behv=>mk-on \\n %delete = if\_abap\_behv=>mk-on \\n %assoc-\_child = if\_abap\_behv=>mk-on \\n %action-action = if\_abap\_behv=>mk-on \\n %field-key\_field = if\_abap\_behv=>mk-on \\n %field-field1 = if\_abap\_behv=>mk-on \\n %field-field2 = if\_abap\_behv=>mk-on \\n %field-field3 = if\_abap\_behv=>mk-on \\n %field-field4 = if\_abap\_behv=>mk-on ). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_misc.html