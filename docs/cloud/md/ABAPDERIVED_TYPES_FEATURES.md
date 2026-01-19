---
title: "ABAPDERIVED_TYPES_FEATURES"
description: |
  ABAPDERIVED_TYPES_FEATURES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDERIVED_TYPES_FEATURES.htm"
abapFile: "ABAPDERIVED_TYPES_FEATURES.html"
keywords: ["update", "delete", "do", "if", "method", "class", "data", "types", "ABAPDERIVED", "TYPES", "FEATURES"]
---

`%features` is a [component group](ABENCOMPONENT_GROUP_GLOSRY.html) in [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html).

It is used to return [feature control](ABENBDL_ACTIONS_FC.html) information by marking the components. The components of `%features` are those elements for which feature control is specified in the BDEF. For accessing the components with `%features`, the syntax can, for example, be as follows: `%features-%update`, `%features-%delete`, `%features-%action-action_name`, or `%features-%field-field_name`.

**Type**

The components of the `%features` structure are typed with `ABP_BEHV_FLAG`.

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

The `FILLED_COMPONENTS_X` method of the system class `CL_ABAP_STRUCT_UTILITIES` supports an efficient processing of non-initial components of a structure where all components are typed with `x LENGTH 1`. It is particularly useful for checking filled components of structured derived types. See [here](ABENCL_ABAP_STRUCT_UTILITIES.html) for more information.

The following source code section is taken from here: `BP_DEMO_MANAGED_ROOT_PERM=====CCIMP`. The global class is the [behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html)\\ `BP_DEMO_MANAGED_ROOT_PERM`. It demonstrates the component `%features` in the context of a `get_instance_features` method that returns information on whether certain fields are read-only or can be modified based on certain conditions. Furthermore, information is returned if the creation of instances for an associated entity is enabled or disabled. See the executable program for this example further down.

The example [BDEF derived type components in the context of requesting permissions](ABENDERIVED_TYPES_MISC_ABEXA.html) demonstrates the use of various BDEF derived type components including `%features` with a managed RAP BO.

-   `[INSTANCE|GLOBAL] FEATURES RESULT`

METHOD get\_instance\_features. \\n\\ \\n READ ENTITIES OF demo\_managed\_root\_perm IN LOCAL MODE \\n ENTITY demo\_managed\_root\_perm \\n FIELDS ( field3 field4 ) \\n WITH CORRESPONDING #( keys ) \\n RESULT DATA(lt\_numbers) \\n FAILED DATA(fail). \\n\\ \\n failed = CORRESPONDING #( DEEP fail ). \\n\\ \\n result = VALUE #( FOR ls\_numbers IN lt\_numbers \\n ( %tky = ls\_numbers-%tky \\n %features = VALUE #( \\n %field-field3 = COND #( \\n WHEN ls\_numbers-field4 > 5 \\n THEN if\_abap\_behv=>fc-f-read\_only \\n ELSE if\_abap\_behv=>fc-f-unrestricted ) \\n %field-field4 = COND #( \\n WHEN ls\_numbers-field3 > 10 \\n THEN if\_abap\_behv=>fc-f-read\_only \\n ELSE if\_abap\_behv=>fc-f-unrestricted ) \\n %assoc-\_child = COND #( \\n WHEN ls\_numbers-field3 > 10 \\n THEN if\_abap\_behv=>fc-o-disabled \\n ELSE if\_abap\_behv=>fc-o-enabled ) \\n ) ) ). \\n\\ \\nENDMETHOD. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_misc.html