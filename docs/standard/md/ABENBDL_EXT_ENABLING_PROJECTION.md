---
title: "ABENBDL_EXT_ENABLING_PROJECTION"
description: |
  ABENBDL_EXT_ENABLING_PROJECTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_EXT_ENABLING_PROJECTION.htm"
abapFile: "ABENBDL_EXT_ENABLING_PROJECTION.html"
keywords: ["update", "delete", "if", "ABENBDL", "EXT", "ENABLING", "PROJECTION"]
---

``[`projection`](ABENBDL_IMPL_TYPE.html)\  [`strict[(version)]`](ABENBDL_STRICT.html);  [`extensible`](ABENBDL_EXTENSIBLE.html);  [`define behavior for ProjectedEntity`](ABENBDL_DEFINE_BEH_PROJECTION.html)\    [`extensible`](ABENBDL_EXTENSIBLE.html)\    [...]\  \{    [...]\    [[`mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING.html)]\    [...]\  \}   ...``

To allow [BDEF projection extensions](ABENRAP_PROJEC_BDEF_EXT_GLOSRY.html) to a [RAP projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html), [BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html) must be switched on using the keyword [`strict [(version)]`](ABENBDL_STRICT.html).

The keyword `extensible` can be specified at different places to allow for extensions:

**Note** It is not required that the underlying [projected BDEF](ABENRAP_PROJECTED_BO_GLOSRY.html) is declared as *extensible*. A BDEF projection can be extensible independently of the projected RAP BO.

The RAP projection behavior definition for `DEMO_RAP_PROJ_EXTEND` enables BDEF extensions:

-   `extensible` in the [RAP behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html)
-   Prerequisite for extensibility. If it is not specified, then extensions are not allowed. If specified, at least one RAP BO entity must be declared as extensible in the [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html).
-   Allows the following components to be added to a [RAP projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html) via a BDEF projection extension:

-   [RAP foreign entity](ABENRAP_FOREIGN_ENTITY_GLOSRY.html)
-   Adding a new [RAP authorization context for disable](ABENCDS_AUTH_CONTEXT_GLOSRY.html) and extending an existing [full authorization context](ABENCDS_OWN_AC_GLOSRY.html) from the extended entity.
-   Defining behavior for an extension node on the projection layer by means of a [RAP projection extension entity](ABENRAP_PROJ_EXT_ENTITY_GLOSRY.html).

-   `extensible` in the [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html)
-   Mandatory for each individual [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) that allows extensions.
-   Allows the following behavior extensions to be added via a BDEF projection extension for the RAP BO entity in question:

-   [RAP field characteristics](ABENRAP_FIELD_CHAR_GLOSRY.html) can be added to extension fields.
-   [RAP actions](ABENRAP_ACTION_GLOSRY.html) including [authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html), [feature control](ABENRAP_FEATURE_CONTROL_GLOSRY.html), and [precheck](ABENRAP_BO_PRECHECK_GLOSRY.html).
-   [RAP functions](ABENRAP_FUNCTION_GLOSRY.html)
-   Reuse of actions, functions, and associations from the base RAP BO of type `managed` or `unmanaged`.
-   [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html)

-   `extensible` in the [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html):
-   [`mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING.html): a [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) defined in the extended RAP business object can be extended with extension fields. `extensible` can only be used in combination with `corresponding`, so that components with the same name are automatically mapped to each other.

-   [BDEF Projection Extension, Node Extension](ABENBDL_ENTITY_PROJ_EXT_ABEXA.html)
-   [BDEF Projection Extension, Field Extension](ABENBDL_ENTITY_PROJ_EXT_1_ABEXA.html)

projection;\\nstrict(2);\\nuse draft;\\nextensible;\\nuse side effects;\\n\\ndefine own authorization context \\{ 'AUTHOBJ7';\\}\\n\\ndefine behavior for DEMO\_RAP\_PROJ\_EXTEND alias ProjRoot\\nextensible\\nuse etag\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n use action trigger\_all;\\n\\n use action Edit;\\n use action Activate;\\n use action Discard;\\n use action Resume;\\n use action Prepare;\\n\\n mapping for demo\_dbtab\_root corresponding extensible;\\n\\n\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_enabling.html