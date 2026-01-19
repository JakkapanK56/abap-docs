---
title: "ABAPDERIVED_TYPES_CREATE"
description: |
  ABAPDERIVED_TYPES_CREATE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDERIVED_TYPES_CREATE.htm"
abapFile: "ABAPDERIVED_TYPES_CREATE.html"
keywords: ["update", "delete", "if", "case", "data", "types", "ABAPDERIVED", "TYPES", "CREATE"]
---

`%create` is a component of [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html).

It is used as an indicator for getting or providing standard operation control information. For example, in the context of [`CREATE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html) operations, the `%create` indicator in [`failed`](ABAPTYPE_RESPONSE_FOR.html) responses can show whether the creation of a RAP BO instance failed.

**Type**

The component has the following type: `ABP_BEHV_FLAG`

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

The following source code section taken from `CL_DEMO_RAP_DRVD_TYPES_PERM` demonstrates the component `%create`. In this case, the request parameter, which is of type [`TYPE STRUCTURE FOR PERMISSIONS REQUEST`](ABAPTYPE_STRUCTURE_FOR.html), is specified for a [`GET PERMISSIONS`](ABAPGET_PERMISSIONS.html) statement.

The example [BDEF derived type components in the context of requesting permissions](ABENDERIVED_TYPES_MISC_ABEXA.html) demonstrates the use of various BDEF derived type components including `%create` with a managed RAP BO.

-   `PERMISSIONS REQUEST`
-   `PERMISSIONS RESULT`
-   `FAILED [EARLY|LATE]`
-   `REPORTED [EARLY|LATE]`
-   `[INSTANCE|GLOBAL] FEATURES REQUEST`
-   `[INSTANCE|GLOBAL] FEATURES RESULT`
-   `[INSTANCE|GLOBAL] AUTHORIZATION REQUEST`
-   `[INSTANCE|GLOBAL] AUTHORIZATION RESULT`

DATA: request TYPE STRUCTURE FOR \\n PERMISSIONS REQUEST demo\_managed\_root\_perm. \\n\\ \\nrequest = VALUE #( \\n %create = if\_abap\_behv=>mk-on \\n %update = if\_abap\_behv=>mk-on \\n %delete = if\_abap\_behv=>mk-on \\n %assoc-\_child = if\_abap\_behv=>mk-on \\n %action-action = if\_abap\_behv=>mk-on \\n %field-key\_field = if\_abap\_behv=>mk-on \\n %field-field1 = if\_abap\_behv=>mk-on \\n %field-field2 = if\_abap\_behv=>mk-on \\n %field-field3 = if\_abap\_behv=>mk-on \\n %field-field4 = if\_abap\_behv=>mk-on ). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_misc.html