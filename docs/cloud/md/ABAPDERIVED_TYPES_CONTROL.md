---
title: "ABAPDERIVED_TYPES_CONTROL"
description: |
  ABAPDERIVED_TYPES_CONTROL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDERIVED_TYPES_CONTROL.htm"
abapFile: "ABAPDERIVED_TYPES_CONTROL.html"
keywords: ["update", "do", "if", "case", "method", "class", "data", "types", "ABAPDERIVED", "TYPES", "CONTROL"]
---

`%control` is a [structured](ABENSTRUCTURED_TYPE_GLOSRY.html) component in [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html).

It is a structure that contains all key and data fields of a [RAP BO instance](ABENRAP_BO_INSTANCE_GLOSRY.html) as components indicating flags. It is used to get information on which fields are provided (e. g. in the context of [`CREATE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html) or [`UPDATE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html) operations) or set a flag for which fields are requested (e. g. in the context of [`READ`](ABAPREAD_ENTITY_ENTITIES.html) operations) by [RAP BO providers](ABENRAP_BO_PROVIDER_GLOSRY.html) or [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html) respectively during the current transaction.

In many cases, the control structure is filled implicitly and automatically, for example, in the context of RAP `MODIFY` operations using the ABAP word [`SET FIELDS WITH`](ABAPMODIFY_ENTITY_ENTITIES_FIELDS.html). However, depending on the context, the explicit specification of `%control` is mandatory. For example, in the context of a RAP `MODIFY` operation using the ABAP word `FROM` (e. g. `... CREATE FROM ...` or `... UPDATE FROM ...`), `%control` must be specified.

For specifying the values of the fields, the structured constant `mk` of interface `IF_ABAP_BEHV` can be used: `if_abap_behv=>mk-on` and `if_abap_behv=>mk-off`. For example, if fields are set with the value `if_abap_behv=>mk-on` in a `CREATE` operation, they are respected by the operation. If they are set with `if_abap_behv=>mk-off`, the fields are not respected. Note that the technical type is `x length 1`, hence, a simple flag like `'X'` does not work.

In `READ` operations, the keys must always be used and returned. Hence, unmarking the keys in `%control` in the context of managed scenarios are ignored.

**Type**

The components of the `%control` structure have the following type: `ABP_BEHV_FLAG`

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

The component also occurs within the [`%target`](ABAPDERIVED_TYPES_TARGET.html) component in the context of create- or read-by-association operations.

The `FILLED_COMPONENTS_X` method of the system class `CL_ABAP_STRUCT_UTILITIES` supports an efficient processing of non-initial components of a structure where all components are typed with `x LENGTH 1`. It is particularly useful for checking filled components of structured derived types. See [here](ABENCL_ABAP_STRUCT_UTILITIES.html) for more information.

The following source code section taken from `CL_DEMO_RAP_DRVD_TYPES_CNTRL` demonstrates the component `%control`.

The following source code section taken from `CL_DEMO_RAP_DRVD_TYPES_CNTRL` demonstrates how `%control` might be specified and enabled for all fields for all RAP BO instances in the [superstructure](ABENSUPERSTRUCTURE_GLOSRY.html) of an ABAP EML request.

The example [Using `%control`](ABENDERIVED_TYPES_CONTROL_ABEXA.html) demonstrates the use of `%control` with a managed RAP BO.

-   `CREATE`
-   `UPDATE`
-   `READ IMPORT`
-   `CHANGE`

MODIFY ENTITY demo\_managed\_root\_4 \\n CREATE FROM VALUE #( \\n ( %cid = 'cid3' \\n key\_field = 3 %control-key\_field = if\_abap\_behv=>mk-on \\n field1 = 'iii' %control-field1 = if\_abap\_behv=>mk-on \\n field2 = 'jjj' %control-field2 = if\_abap\_behv=>mk-off \\n field3 = 30 %control-field3 = if\_abap\_behv=>mk-on \\n field4 = 31 %control-field4 = if\_abap\_behv=>mk-on ) \\n ( %cid = 'cid4' \\n key\_field = 4 %control-key\_field = if\_abap\_behv=>mk-on \\n field1 = 'kkk' %control-field1 = if\_abap\_behv=>mk-off \\n field2 = 'lll' %control-field2 = if\_abap\_behv=>mk-on \\n field3 = 40 %control-field3 = if\_abap\_behv=>mk-on \\n field4 = 41 %control-field4 = if\_abap\_behv=>mk-on ) ) \\n UPDATE FROM VALUE #( \\n ( key\_field = 1 \\n field1 = 'UPDATED\_1' \\n field2 = 'UPDATED\_2' \\n %control = VALUE #( field1 = if\_abap\_behv=>mk-on \\n field2 = if\_abap\_behv=>mk-off ) ) \\n ( key\_field = 2 \\n field1 = 'UPDATED\_3' \\n field2 = 'UPDATED\_4' \\n %control = VALUE #( field1 = if\_abap\_behv=>mk-off \\n field2 = if\_abap\_behv=>mk-on ) ) ) \\n MAPPED FINAL(mapped) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). MODIFY ENTITY demo\_managed\_root\_4 \\n CREATE FROM VALUE #( \\n %control-key\_field = if\_abap\_behv=>mk-on \\n %control-field1 = if\_abap\_behv=>mk-on \\n %control-field2 = if\_abap\_behv=>mk-on \\n %control-field3 = if\_abap\_behv=>mk-on \\n %control-field4 = if\_abap\_behv=>mk-on \\n ( %cid = 'cid1' \\n key\_field = 1 \\n field1 = 'aaa' \\n field2 = 'bbb' \\n field3 = 10 \\n field4 = 11 ) \\n ( %cid = 'cid2' \\n key\_field = 2 \\n field1 = 'ccc' \\n field2 = 'ddd' \\n field3 = 20 \\n field4 = 21 ) ) \\n MAPPED FINAL(mapped) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_misc.html