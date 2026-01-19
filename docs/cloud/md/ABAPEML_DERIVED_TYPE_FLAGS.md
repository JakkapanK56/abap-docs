---
title: "ABAPEML_DERIVED_TYPE_FLAGS"
description: |
  ABAPEML_DERIVED_TYPE_FLAGS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPEML_DERIVED_TYPE_FLAGS.htm"
abapFile: "ABAPEML_DERIVED_TYPE_FLAGS.html"
keywords: ["update", "delete", "do", "if", "data", "types", "ABAPEML", "DERIVED", "TYPE", "FLAGS"]
---

Numerous BDEF derived types incorporate `%` components that represent flags. For example, these flags are used in ABAP EML read requests within the [`%control`](ABAPDERIVED_TYPES_CONTROL.html) structure to specify the fields to be read.

The flags are differentiated by various types available as constants defined in the interface `IF_ABAP_BEHV`. Despite the technical type properties being identical (type `RAW` length 1), ensure you do not confuse the constants and use them in the correct context. The usable values are components of the following structured constants:

The following code snippet shows BDEF derived type components that are typed with `ABP_BEHV_FLAG`. The components are assigned values of the structured constant `IF_ABAP_BEHV=>MK`.

MODIFY ENTITY demo\_managed\_root\_4 \\n CREATE FROM VALUE #( \\n %control-key\_field = if\_abap\_behv=>mk-on \\n %control-field1 = if\_abap\_behv=>mk-on \\n %control-field2 = if\_abap\_behv=>mk-on \\n %control-field3 = if\_abap\_behv=>mk-on \\n %control-field4 = if\_abap\_behv=>mk-off \\n ( %cid = 'cid1' \\n key\_field = 1 \\n field1 = 'aaa' \\n field2 = 'bbb' \\n field3 = 10 \\n field4 = 11 ) \\n ( %cid = 'cid2' \\n key\_field = 2 \\n field1 = 'ccc' \\n field2 = 'ddd' \\n field3 = 20 \\n field4 = 21 ) ) \\n MAPPED FINAL(mapped) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). \\n\\ \\n... \\n\\ \\nDATA request TYPE STRUCTURE FOR \\n PERMISSIONS REQUEST demo\_managed\_root\_perm. \\n\\ \\nrequest = VALUE #( \\n %create = if\_abap\_behv=>mk-on \\n %update = if\_abap\_behv=>mk-on \\n %delete = if\_abap\_behv=>mk-off ). **Type** **Structured Constant** **Description**\\ `ABP_BEHV_FLAG` `IF_ABAP_BEHV=>MK` Used to mark and unmark fields in ABAP EML modify and read operations, such as in `%control` and `%element`. `ABP_BEHV_FIELD_PERM`\\ `IF_ABAP_BEHV=>PERM-F` Used for field permission results, like a field marked as mandatory or read-only. `ABP_BEHV_OP_PERM` `IF_ABAP_BEHV=>PERM-O` Used for operation permission results, such as a delete operation that is marked as enabled. `ABP_BEHV_FIELD_CTRL` `IF_ABAP_BEHV=>FC-F` Used for field feature control results, like a field marked with no restrictions. `ABP_BEHV_OP_CTRL` `IF_ABAP_BEHV=>FC-O` Used for operation feature control results, like an update operation that is marked as disabled. `ABP_BEHV_AUTH`\\ `IF_ABAP_BEHV=>AUTH` Used for authorization results, like an operation marked as unauthorized. `ABP_BEHV_FEATURE`\\ - This type is obsolete for field permission and feature control results. Use `ABP_BEHV_FIELD_PERM` or `ABP_BEHV_FIELD_CTRL` instead. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html