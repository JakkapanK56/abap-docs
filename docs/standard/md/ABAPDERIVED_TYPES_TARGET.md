---
title: "ABAPDERIVED_TYPES_TARGET"
description: |
  ABAPDERIVED_TYPES_TARGET - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDERIVED_TYPES_TARGET.htm"
abapFile: "ABAPDERIVED_TYPES_TARGET.html"
keywords: ["update", "if", "data", "types", "ABAPDERIVED", "TYPES", "TARGET"]
---

`%target` is a tabular component in [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html).

It is used to address the target (i. e. a child entity, for example) of [compositions](ABENCDS_COMPOSITION_TREE_GLOSRY.html). The components of `%target` are comprised of the target's primary key and data fields.

**Type**

Standard table whose components are comprised of `%cid`, `%key`, `%data` and `%control`.

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

The following source code section taken from `CL_DEMO_RAP_DRVD_TYPES_DATA` demonstrates the component `%target`.

The example [Using `%data` / `%target`](ABENDERIVED_TYPES_DATA_ABEXA.html) demonstrates the use of `%target` with a managed RAP BO.

-   `CREATE` ([create-by-association operations](ABENRAP_CBA_OPERATION_GLOSRY.html))

MODIFY ENTITY demo\_managed\_root\_4 \\n CREATE FROM VALUE #( \\n ( %cid = 'cid1' \\n %data-key\_field = 1 \\n %data-field1 = 'aaa' \\n %data-field2 = 'bbb' \\n %data-field3 = 10 \\n %data-field4 = 11 \\n %control-key\_field = if\_abap\_behv=>mk-on \\n %control-field1 = if\_abap\_behv=>mk-on \\n %control-field2 = if\_abap\_behv=>mk-on \\n %control-field3 = if\_abap\_behv=>mk-on \\n %control-field4 = if\_abap\_behv=>mk-on ) \\n ( %cid = 'cid2' \\n %data = VALUE #( key\_field = 2 \\n field1 = 'ccc' \\n field2 = 'ddd' \\n field3 = 20 \\n field4 = 21 ) \\n %control = VALUE #( key\_field = if\_abap\_behv=>mk-on \\n field1 = if\_abap\_behv=>mk-on \\n field2 = if\_abap\_behv=>mk-on \\n field3 = if\_abap\_behv=>mk-on \\n field4 = if\_abap\_behv=>mk-on ) ) ) \\n CREATE BY \\\\\_child \\n FIELDS ( key\_field\_child field1 field2 field3 field4 ) \\n WITH VALUE #( \\n ( %cid\_ref = 'cid1' \\n %target = VALUE #( \\n ( %cid = 'cid\_child1' \\n %data = VALUE #( key\_field\_child = 1 \\n field1 = 'eee' \\n field2 = 'fff' \\n field3 = 10 \\n field4 = 11 ) ) ) ) \\n ( %cid\_ref = 'cid2' \\n %target = VALUE #( \\n ( %cid = 'cid\_child2' \\n %data = VALUE #( key\_field\_child = 2 \\n field1 = 'ggg' \\n field2 = 'hhh' \\n field3 = 20 \\n field4 = 21 ) ) ) ) ) \\n UPDATE FROM VALUE #( \\n ( %data-key\_field = 1 \\n %data-field1 = 'UPDATED\_1' \\n field2 = 'UPDATED\_2' \\n %control = VALUE #( field1 = if\_abap\_behv=>mk-on \\n field2 = if\_abap\_behv=>mk-off ) ) \\n ( key\_field = 2 \\n field1 = 'UPDATED\_3' \\n %data-field2 = 'UPDATED\_4' \\n %control = VALUE #( field1 = if\_abap\_behv=>mk-off \\n field2 = if\_abap\_behv=>mk-on ) ) ) \\n MAPPED FINAL(mapped) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_misc.html