---
title: "ABENBDL_PROJ_EXT_BODY"
description: |
  ABENBDL_PROJ_EXT_BODY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_PROJ_EXT_BODY.htm"
abapFile: "ABENBDL_PROJ_EXT_BODY.html"
keywords: ["update", "do", "if", "data", "ABENBDL", "PROJ", "EXT", "BODY"]
---

`...    [field characteristics];    [use];    [extend mapping for];`

Defines the [behavior extension body](ABENRAP_BEHAVIOR_EXT_BODY_GLOSRY.html) to extend an existing [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) in a [RAP projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html).

**Components**:

-   `field characteristics`:

-   Adds [field attributes](ABENRAP_FIELD_CHAR_GLOSRY.html) to extension fields in a BDEF projection extension.
-   Field attributes can be added only for extension fields. Extension fields are fields which are added via [RAP data model extension](ABENRAP_DATA_MODEL_EXT_GLOSRY.html).
-   The following field attributes are available in BDEF projection extensions for extension fields: `readonly`, `suppress`, `readonly:update`.
-   These field attributes work as described in topic [Field Characteristics, Projection BDEF](ABENBDL_FIELD_PROJECTION.html).
-   **Note** The field characteristics `mandatory`, `modify`, and `features:instance` are not available in [BDEF projection extensions](ABENRAP_PROJEC_BDEF_EXT_GLOSRY.html).

-   `use`:

-   The keyword `use` allows the reuse of [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html).
-   The following operations can be reused: [RAP actions](ABENRAP_ACTION_GLOSRY.html), [RAP functions](ABENRAP_FUNCTION_GLOSRY.html), and [associations](ABENBDL_ASSOCIATION.html).
-   **Limitation:** The [operation augmentation](ABENRAP_BO_AUGMENTATION_GLOSRY.html) is not available in BDEF projection extensions. As a consequence, the following is not supported: `use association _child \{create(augment);\}`.
-   Only extension operations that were created in the same software component can be reused. Operations from the original base BDEF of type `managed` or `unmanaged` must not be reused.
-   Actions, functions, and associations from the projection layer cannot be reused.
-   Reuse works as described in topic [RAP BDL - use](ABENBDL_USE_PROJECTION.html).

-   [`extend mapping for`](ABENBDL_TYPE_MAPPING_EXT.html):

-   An existing RAP type mapping can be extended with extension fields using the syntax [`extend mapping for`](ABENBDL_TYPE_MAPPING_EXT.html) as described in topic [RAP BDL - `extend mapping`](ABENBDL_TYPE_MAPPING_EXT.html).

-   [BDEF Projection Extension, Node Extension](ABENBDL_ENTITY_PROJ_EXT_ABEXA.html)

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_projection.html abenbdl\_extension\_for\_projection.html abenbdl\_extend\_beh\_proj.html