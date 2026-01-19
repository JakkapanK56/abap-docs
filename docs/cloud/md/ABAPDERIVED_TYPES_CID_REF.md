---
title: "ABAPDERIVED_TYPES_CID_REF"
description: |
  ABAPDERIVED_TYPES_CID_REF - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDERIVED_TYPES_CID_REF.htm"
abapFile: "ABAPDERIVED_TYPES_CID_REF.html"
keywords: ["update", "delete", "do", "if", "types", "ABAPDERIVED", "TYPES", "CID", "REF"]
---

`%cid_ref` is a component of [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). It is used as a reference to a [RAP BO](ABENRAP_BO_GLOSRY.html) instance for which [`%cid`](ABAPDERIVED_TYPES_CID.html) has been specified manually. The value of `%cid_ref` is the same string as `%cid` that is referred to. This `%cid` must exist in the same ABAP EML [`MODIFY`](ABAPMODIFY_ENTITY_ENTITIES.html) request. Thus, `%cid_ref` cannot be used to refer to a particular `%cid` from another request.

When referencing an instance that has been created in the same request, note the following aspects:

[Using Keys and Identifying RAP BO Instances in a Nutshell](ABAPDERIVED_TYPES_KEYS_IDENTIFIERS.html)

**Type**

The component has the following type: `ABP_BEHV_CID`.

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

The following source code section taken from `CL_DEMO_RAP_DRVD_TYPES_CID` demonstrates the component `%cid_ref` that refers to a previously defined content ID `%cid`.

The example [Using `%cid` / `%cid_ref`](ABENDERIVED_TYPES_CID_CIDREF_ABEXA.html) demonstrates the use of `%cid` and `%cid_ref` with a managed RAP BO.

-   It is mandatory to provide `%cid` and then `%cid_ref` in the referencing operation. Otherwise, the new instance is not found in a referencing operation.
-   [`%key`](ABAPDERIVED_TYPES_KEY.html) is ignored in the referencing operation. If `%cid_ref` is provided in a referencing operation, `%key` need not be specified.

-   `CREATE` ([create-by-association operations](ABENRAP_CBA_OPERATION_GLOSRY.html) only)
-   `UPDATE`
-   `DELETE`
-   `ACTION IMPORT` ([instance action](ABENBDL_ACTION.html))
-   `ACTION RESULT` (instance action)

-   If a [RAP BO operation](ABENRAP_BO_OPERATION_GLOSRY.html) refers to an instance via `%cid_ref`, the key values of the affected instance are basically ignored if specified in the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html). For example, if a create request is followed by an update request and the reference is made via `%cid_ref`, it does not matter if the update request also specifies the key values for the instance reference (it could actually be a non-existent key).
-   According to the [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap), for example, a duplicate update on [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) within one and the same ABAP EML request is not allowed. However, the syntax currently allows for a RAP BO operation following a create request in the same RAP transaction to refer to a previously created instance both via `%cid_ref` and only the key values, too.

MODIFY ENTITY demo\_managed\_root\_4 \\n CREATE FIELDS ( key\_field field1 field2 field3 field4 ) \\n WITH VALUE #( \\n ( %cid = 'cid1' \\n key\_field = 1 \\n field1 = 'aaa' \\n field2 = 'bbb' \\n field3 = 10 \\n field4 = 11 ) \\n ( %cid = 'cid2' \\n key\_field = 2 \\n field1 = 'ccc' \\n field2 = 'ddd' \\n field3 = 20 \\n field4 = 21 ) \\n ( %cid = 'cid3' \\n key\_field = 3 \\n field1 = 'eee' \\n field2 = 'fff' \\n field3 = 30 \\n field4 = 31 ) ) \\n CREATE BY \\\\\_child \\n FIELDS ( key\_field\_child field1 field2 field3 field4 ) \\n WITH VALUE #( \\n ( %cid\_ref = 'cid1' \\n %target = VALUE #( \\n ( %cid = 'cid\_child1' \\n key\_field\_child = 10 \\n field1 = 'ggg' \\n field2 = 'hhh' \\n field3 = 100 \\n field4 = 101 ) ) ) ) \\n UPDATE FIELDS ( field2 ) WITH VALUE #( \\n ( %cid\_ref = 'cid2' \\n field2 = 'iii' ) ) \\n DELETE FROM VALUE #( \\n ( %cid\_ref = 'cid3' ) ) \\n MAPPED FINAL(mapped) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_keys\_id.html