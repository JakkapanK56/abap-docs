---
title: "ABENBDL_EXT_ENABLING_PROJECTION"
description: |
  ABENBDL_EXT_ENABLING_PROJECTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_EXT_ENABLING_PROJECTION.htm"
abapFile: "ABENBDL_EXT_ENABLING_PROJECTION.html"
keywords: ["if", "ABENBDL", "EXT", "ENABLING", "PROJECTION"]
---

``[`projection`](ABENBDL_IMPL_TYPE.html)\  [`strict[(version)]`](ABENBDL_STRICT.html);  [`extensible`](ABENBDL_EXTENSIBLE.html);  [`define behavior for ProjectedEntity`](ABENBDL_DEFINE_BEH_PROJECTION.html)\    [`extensible`](ABENBDL_EXTENSIBLE.html)\    [...]\  \{    [...]\    [[`mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING.html)]\    [...]\  \}   ...``

To allow [BDEF projection extensions](ABENRAP_PROJEC_BDEF_EXT_GLOSRY.html) to a [RAP projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html), [BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html) must be switched on using the keyword [`strict [(version)]`](ABENBDL_STRICT.html).

The keyword `extensible` can be specified at different places to allow for extensions:

**Note** It is not required that the underlying [projected BDEF](ABENRAP_PROJECTED_BO_GLOSRY.html) is declared as *extensible*. A BDEF projection can be extensible independently of the projected RAP BO.

-   `extensible` in the [RAP behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html)
-   Prerequisite for extensibility. If it is not specified, then extensions are not allowed. If specified, at least one RAP BO entity must be declared as extensible in the [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html).
-   Allows the following components to be added to a [RAP projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html) via a BDEF projection extension:

-   Defining behavior for an extension node on the projection layer by means of a [RAP projection extension entity](ABENRAP_PROJ_EXT_ENTITY_GLOSRY.html).

-   `extensible` in the [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html)
-   Mandatory for each individual [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) that allows extensions.
-   Allows the following behavior extensions to be added via a BDEF projection extension for the RAP BO entity in question:

-   [RAP field characteristics](ABENRAP_FIELD_CHAR_GLOSRY.html) can be added to extension fields.
-   Reuse of actions, functions, and associations from the base RAP BO of type `managed` or `unmanaged`.

-   `extensible` in the [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html):
-   [`mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING.html): a [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) defined in the extended RAP business object can be extended with extension fields. `extensible` can only be used in combination with `corresponding`, so that components with the same name are automatically mapped to each other.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_enabling.html