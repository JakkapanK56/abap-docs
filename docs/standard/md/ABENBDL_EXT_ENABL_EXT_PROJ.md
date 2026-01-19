---
title: "ABENBDL_EXT_ENABL_EXT_PROJ"
description: |
  ABENBDL_EXT_ENABL_EXT_PROJ - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_EXT_ENABL_EXT_PROJ.htm"
abapFile: "ABENBDL_EXT_ENABL_EXT_PROJ.html"
keywords: ["if", "ABENBDL", "EXT", "ENABL", "PROJ"]
---

``[`extension for projection`](ABENBDL_EXTENSION_FOR_PROJECTION.html)\  [`extensible`](ABENBDL_EXTENSIBLE.html);  [...]\  [`extend behavior for EntityName`](ABENBDL_EXTEND_BEH_PROJ.html)\    [...]\  \{    [...]\    [[`mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING.html)]\     ...  \}  \  [`define behavior for ExtNode`](ABENBDL_PROJ_EXT_ENTITY.html)\    [`extensible`](ABENBDL_EXTENSIBLE.html)\    [...]\  \{    [...]\    [[`mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING.html)]\    ...  \}  [...]\  ...``

To extend a [BDEF projection extension](ABENRAP_PROJEC_BDEF_EXT_GLOSRY.html), the keyword `extensible` can be specified in the following places:

The BDEF extension `DEMO_RAP_EXT_LAYER_C_X` extends the projection BDEF `DEMO_RAP_EXT_LAYER_C`. It is declared as `extensible` and therefore allows for extension layering.

The BDEF extension `DEMO_RAP_C_X_X` extends the BDEF extension `DEMO_RAP_EXT_LAYER_C_X`.

-   `extensible` in the BDEF extension header:
-   Prerequisite for extensibility. If it is not specified, extensions are not allowed. If specified, at least one component of the RAP BO extension must be declared as extensible.
-   Allows the following components to be added to a [RAP projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html) via a BDEF projection extension:

-   [RAP foreign entity](ABENRAP_FOREIGN_ENTITY_GLOSRY.html)
-   Adding a new [RAP authorization context for disable](ABENCDS_AUTH_CONTEXT_GLOSRY.html) and extending an existing [full authorization context](ABENCDS_OWN_AC_GLOSRY.html) from the extended entity.
-   Defining behavior for an extension node on the projection layer by means of a [RAP projection extension entity](ABENRAP_PROJ_EXT_ENTITY_GLOSRY.html).

-   `extensible` in the body of an [entity behavior extension](ABENRAP_BEHAVIOR_EXTENSION_GLOSRY.html):

-   [`mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING.html): a [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) can be extended with extension fields. `extensible` can only be used in combination with `corresponding`, so that components with the same name are automatically mapped to each other.
-   **Note** It is not required that the underlying [projected BDEF](ABENRAP_PROJECTED_BO_GLOSRY.html) is declared as `extensible`. A BDEF projection can be extensible independently of the projected RAP BO.

-   `extensible` in the [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html) of an [extension entity behavior definition](ABENRAP_EXT_ENTITY_BEHAVIOR_GLOSRY.html) (extension node):
-   Mandatory for each individual extension node that allows extensions.
-   Allows the following behavior extensions to be added via a BDEF extension:

-   [RAP field characteristics](ABENRAP_FIELD_CHAR_GLOSRY.html) can be added to extension fields.
-   [RAP actions](ABENRAP_ACTION_GLOSRY.html) including [authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html), [feature control](ABENRAP_FEATURE_CONTROL_GLOSRY.html), and [precheck](ABENRAP_BO_PRECHECK_GLOSRY.html).
-   [RAP functions](ABENRAP_FUNCTION_GLOSRY.html)
-   Reuse of actions, functions, and associations from the base RAP BO of type `managed` or `unmanaged`.
-   [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html)

-   `extensible` can be specified in different places in the [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html) of an extension node:

-   [`mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING.html): a [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) defined in the extended RAP business object can be extended with extension fields. `extensible` can only be used in combination with `corresponding`, so that components with the same name are automatically mapped to each other.

extension for projection;\\nextensible;\\nextend behavior for DEMO\_RAP\_EXT\_LAYER\_C\\n\\{\\nuse association \_child \\{create; with draft;\\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXT\_LAYER\_C\_CH\\nextensible\\n\\{\\nuse association \_to\_parent \\{with draft;\\}\\n\\} extension for projection;\\n\\nextend behavior for DEMO\_RAP\_EXT\_LAYER\_C\\n\\{\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_enabling.html abenbdl\_extensibility\_enabling\_ext.html