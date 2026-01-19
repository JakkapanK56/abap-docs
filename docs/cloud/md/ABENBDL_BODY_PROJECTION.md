---
title: "ABENBDL_BODY_PROJECTION"
description: |
  ABENBDL_BODY_PROJECTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_BODY_PROJECTION.htm"
abapFile: "ABENBDL_BODY_PROJECTION.html"
keywords: ["do", "if", "data", "types", "ABENBDL", "BODY", "PROJECTION"]
---

``\  ... \{[[`FieldCharacteristics`](ABENBDL_FIELD_PROJECTION.html)];       [[`FieldAugmentation`](ABENBDL_FIELD_AUGMENT.html)];       [[`use`](ABENBDL_USE_PROJECTION.html)];       [[`action`](ABENBDL_NONSTANDARD_PROJECTION.html)];       [[`function`](ABENBDL_NONSTANDARD_PROJECTION.html)];       [[`TypeMapping`](ABENBDL_TYPE_MAPPING.html)];\}\  ...``

In the [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html) of a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html), elements of the projected BDEF can be reused and new elements can be added.

-   [`FieldCharacteristics`](ABENBDL_FIELD_PROJECTION.html): A projection BDEF automatically and implicitly inherits all the field characteristics of its underlying projected BO. If no field characteristic is specified for a certain field in the [base BDEF](ABENRAP_BASE_BDEF_GLOSRY.html), a field characteristic for the field in question can be specified in the projection BDEF.
-   [`FieldAugmentation`](ABENBDL_FIELD_AUGMENT.html): [RAP BO augmentation](ABENRAP_BO_AUGMENTATION_GLOSRY.html) for read-only fields in a CDS projection behavior definition.
-   [`use`](ABENBDL_USE_PROJECTION.html): [Reuse](ABENBDL_USE_PROJECTION.html) of [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html). All operations (standard operations, operations for associations, actions, [functions](ABENRAP_FUNCTION_GLOSRY.html), and draft actions) that are to be reused from the base BO must be explicitly specified using the keyword `use`. For details about reuse, see the topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).
-   [Actions](ABENBDL_NONSTANDARD_PROJECTION.html) can be defined. An implementation in an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is required.
-   [Functions](ABENBDL_FUNCTION_PROJECTION.html) can be defined. An implementation in an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is required.
-   [`TypeMapping`](ABENBDL_TYPE_MAPPING.html): A [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) can be used to map [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) from the current data model to other data types that do not match the BDEF derived component pattern. This works for projection BDEFs in the same way as for managed and unmanaged BDEFs. For more information, see the topic [RAP - `TypeMapping`](ABENBDL_TYPE_MAPPING.html).

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_projection\_bo.html abenbdl\_define\_beh\_projection.html