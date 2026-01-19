---
title: "ABENBDL_PROJ_EXT_BODY"
description: |
  ABENBDL_PROJ_EXT_BODY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_PROJ_EXT_BODY.htm"
abapFile: "ABENBDL_PROJ_EXT_BODY.html"
keywords: ["update", "do", "if", "class", "data", "ABENBDL", "PROJ", "EXT", "BODY"]
---

`...    [field characteristics];    [use];    [actions and functions];    [mapping for];    [extend mapping for];`

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

-   Actions and functions:

-   New [RAP actions](ABENRAP_ACTION_GLOSRY.html) and [RAP functions](ABENRAP_FUNCTION_GLOSRY.html) can be defined and implemented in a BDEF projection extension.
-   The syntax is exactly the same as for actions and functions in projection BDEFs, see topic [RAP - `action`, Projection BDEF](ABENBDL_NONSTANDARD_PROJECTION.html) with one difference: The optional addition [`default`](ABENBDL_ACTION_DEFAULT_FACTORY.html) to define a factory action as default factory action is not available in BDEF projection extensions.
-   An implementation in an extension ABP is required. The rules for extension ABPs apply, see topic [RAP - `implementation in class unique`, Extension](ABENBDL_IN_CLASS_UNIQUE_EXT.html).

-   [`mapping for`](ABENBDL_TYPE_MAPPING.html):

-   [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) can be added. This type mapping can only contain extension fields. It must not contain any fields from the original BDEF. The syntax is exactly the same as for RAP BOs, see topic [RAP - `TypeMapping`](ABENBDL_TYPE_MAPPING.html).

-   [`extend mapping for`](ABENBDL_TYPE_MAPPING_EXT.html):

-   An existing RAP type mapping can be extended with extension fields using the syntax [`extend mapping for`](ABENBDL_TYPE_MAPPING_EXT.html) as described in topic [RAP BDL - `extend mapping`](ABENBDL_TYPE_MAPPING_EXT.html).

-   [BDEF Projection Extension, Node Extension](ABENBDL_ENTITY_PROJ_EXT_ABEXA.html)
-   [BDEF Projection Extension, Field Extension](ABENBDL_ENTITY_PROJ_EXT_1_ABEXA.html)

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_projection.html abenbdl\_extension\_for\_projection.html abenbdl\_extend\_beh\_proj.html