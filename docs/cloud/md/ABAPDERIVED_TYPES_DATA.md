---
title: "ABAPDERIVED_TYPES_DATA"
description: |
  ABAPDERIVED_TYPES_DATA - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDERIVED_TYPES_DATA.htm"
abapFile: "ABAPDERIVED_TYPES_DATA.html"
keywords: ["update", "if", "case", "data", "types", "ABAPDERIVED", "TYPES", "DATA"]
---

`%data` is a [component group](ABENCOMPONENT_GROUP_GLOSRY.html) in [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html).

`%data` contains all primary key fields (i. e. it also includes `%key`) and data fields of a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html).

When specifying a data field, the use of `%data-...` is optional, i. e., the name of the data field can be used directly without `%data-...`.

**Type**

The components of `%data` retain their original line type. In case of the use within `%control`, the type for the individual components is `ABP_BEHV_FLAG`)

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

The component also occurs within the following components:

The following source code section taken from `CL_DEMO_RAP_DRVD_TYPES_DATA` demonstrates the component `%data`.

The example [Using `%data` / `%target`](ABENDERIVED_TYPES_DATA_ABEXA.html) demonstrates the use of `%data` with a managed RAP BO.

-   `CREATE`
-   `UPDATE`
-   `READ RESULT`
-   `CHANGE`

-   [`%control`](ABAPDERIVED_TYPES_CONTROL.html)
-   [`%param`](ABAPDERIVED_TYPES_PARAM.html)

MODIFY ENTITY demo\_managed\_root\_4 \\n CREATE FROM VALUE #( \\n ( %cid = 'cid1' \\n %data-key\_field = 1 \\n %data-field1 = 'aaa' \\n %data-field2 = 'bbb' \\n %data-field3 = 10 \\n %data-field4 = 11 \\n %control-key\_field = if\_abap\_behv=>mk-on \\n %control-field1 = if\_abap\_behv=>mk-on \\n %control-field2 = if\_abap\_behv=>mk-on \\n %control-field3 = if\_abap\_behv=>mk-on \\n %control-field4 = if\_abap\_behv=>mk-on ) \\n ( %cid = 'cid2' \\n %data = VALUE #( key\_field = 2 \\n field1 = 'ccc' \\n field2 = 'ddd' \\n field3 = 20 \\n field4 = 21 ) \\n %control = VALUE #( key\_field = if\_abap\_behv=>mk-on \\n field1 = if\_abap\_behv=>mk-on \\n field2 = if\_abap\_behv=>mk-on \\n field3 = if\_abap\_behv=>mk-on \\n field4 = if\_abap\_behv=>mk-on ) ) ) \\n CREATE BY \\\\\_child \\n FIELDS ( key\_field\_child field1 field2 field3 field4 ) \\n WITH VALUE #( \\n ( %cid\_ref = 'cid1' \\n %target = VALUE #( \\n ( %cid = 'cid\_child1' \\n %data = VALUE #( key\_field\_child = 1 \\n field1 = 'eee' \\n field2 = 'fff' \\n field3 = 10 \\n field4 = 11 ) ) ) ) \\n ( %cid\_ref = 'cid2' \\n %target = VALUE #( \\n ( %cid = 'cid\_child2' \\n %data = VALUE #( key\_field\_child = 2 \\n field1 = 'ggg' \\n field2 = 'hhh' \\n field3 = 20 \\n field4 = 21 ) ) ) ) ) \\n UPDATE FROM VALUE #( \\n ( %data-key\_field = 1 \\n %data-field1 = 'UPDATED\_1' \\n field2 = 'UPDATED\_2' \\n %control = VALUE #( field1 = if\_abap\_behv=>mk-on \\n field2 = if\_abap\_behv=>mk-off ) ) \\n ( key\_field = 2 \\n field1 = 'UPDATED\_3' \\n %data-field2 = 'UPDATED\_4' \\n %control = VALUE #( field1 = if\_abap\_behv=>mk-off \\n field2 = if\_abap\_behv=>mk-on ) ) ) \\n MAPPED FINAL(mapped) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_misc.html