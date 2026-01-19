---
title: "ABENBDL_EXT_ENABL_EXT_PROJ"
description: |
  ABENBDL_EXT_ENABL_EXT_PROJ - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_EXT_ENABL_EXT_PROJ.htm"
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

-   Defining behavior for an extension node on the projection layer by means of a [RAP projection extension entity](ABENRAP_PROJ_EXT_ENTITY_GLOSRY.html).

-   `extensible` in the body of an [entity behavior extension](ABENRAP_BEHAVIOR_EXTENSION_GLOSRY.html):

-   [`mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING.html): a [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) can be extended with extension fields. `extensible` can only be used in combination with `corresponding`, so that components with the same name are automatically mapped to each other.
-   **Note** It is not required that the underlying [projected BDEF](ABENRAP_PROJECTED_BO_GLOSRY.html) is declared as `extensible`. A BDEF projection can be extensible independently of the projected RAP BO.

-   `extensible` in the [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html) of an [extension entity behavior definition](ABENRAP_EXT_ENTITY_BEHAVIOR_GLOSRY.html) (extension node):
-   Mandatory for each individual extension node that allows extensions.
-   Allows the following behavior extensions to be added via a BDEF extension:

-   [RAP field characteristics](ABENRAP_FIELD_CHAR_GLOSRY.html) can be added to extension fields.
-   Reuse of actions, functions, and associations from the base RAP BO of type `managed` or `unmanaged`.

-   `extensible` can be specified in different places in the [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html) of an extension node:

-   [`mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING.html): a [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) defined in the extended RAP business object can be extended with extension fields. `extensible` can only be used in combination with `corresponding`, so that components with the same name are automatically mapped to each other.

extension for projection;\\nextensible;\\nextend behavior for DEMO\_RAP\_EXT\_LAYER\_C\\n\\{\\nuse association \_child \\{create; with draft;\\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXT\_LAYER\_C\_CH\\nextensible\\n\\{\\nuse association \_to\_parent \\{with draft;\\}\\n\\} extension for projection;\\n\\nextend behavior for DEMO\_RAP\_EXT\_LAYER\_C\\n\\{\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_enabling.html abenbdl\_extensibility\_enabling\_ext.html