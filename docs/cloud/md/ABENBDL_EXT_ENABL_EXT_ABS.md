---
title: "ABENBDL_EXT_ENABL_EXT_ABS"
description: |
  ABENBDL_EXT_ENABL_EXT_ABS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_EXT_ENABL_EXT_ABS.htm"
abapFile: "ABENBDL_EXT_ENABL_EXT_ABS.html"
keywords: ["if", "ABENBDL", "EXT", "ENABL", "ABS"]
---

``[`extension for abstract`](ABENBDL_EXTENSION_FOR_ABSTRACT.html)\  [`extensible`](ABENBDL_EXTENSIBLE.html);  [...]\  [`extend behavior for EntityName`](ABENBDL_EXTENSION_FOR_ABSTRACT.html)\    [...]\  \{    [...]\    [[`[deep] mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING_ABSTRACT.html)]\     ...  \}  \  [`define behavior for ExtNode`](ABENBDL_EXTENSION_FOR_ABSTRACT.html)\    [`extensible`](ABENBDL_EXTENSIBLE.html)\    [...]\  \{    [...]\    [[`[deep] mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING_ABSTRACT.html)]\    ...  \}  [...]\  ...``

To extend an [abstract BDEF extension](ABENRAP_ABS_BDEF_EXT_GLOSRY.html), the keyword `extensible` can be specified in the following places:

**Note** It is not required that the underlying [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) is declared as *extensible*.

The abstract BDEF extension `DEMO_RAP_ABSTRACT_X` allows for BDEF extensions:

The abstract BDEF extension `DEMO_RAP_ABSTRACT_X1` extends the BDEF extension `DEMO_RAP_ABSTRACT_X`:

-   `extensible` in the abstract BDEF extension header:
-   Prerequisite for extensibility. If it is not specified, extensions are not allowed. If specified, at least one component of the abstract BDEF extension must be declared as extensible.
-   Allows the following components to be added to an abstract BDEF extension via another abstract BDEF extension:

-   Adding new nodes to the hierarchical type of the abstract BDEF using the statement [`define behavior for AbstractEntity`](ABENBDL_EXTENSION_FOR_ABSTRACT.html).
-   Adding new scalar entities to the hierarchical type using the statement [`scalar entity`](ABENBDL_EXTENSION_FOR_ABSTRACT.html).

-   `extensible` in the body of an [entity behavior extension](ABENRAP_BEHAVIOR_EXTENSION_GLOSRY.html):

-   [`[deep] mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING_ABSTRACT.html): a [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) can be extended with extension fields. `extensible` can only be used in combination with `corresponding`, so that components with the same name are automatically mapped to each other.

-   `extensible` specified for an individual node after the statement [`define behavior for AbstractEntity`](ABENBDL_EXTENSION_FOR_ABSTRACT.html)
-   Mandatory for each individual node that allows extensions.
-   Allows the following extensions to be added via an abstract BDEF extension:

-   [RAP field characteristics](ABENRAP_FIELD_CHAR_GLOSRY.html) can be added to extension fields.
-   Associations
-   [Type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html)

-   `extensible` in the [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html):
-   [`[deep] mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING_ABSTRACT.html): a [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) defined in the original abstract BDEF can be extended with extension fields. `extensible` can only be used in combination with `corresponding`, so that components with the same name are automatically mapped to each other.

extension for abstract;\\nextensible;\\n\\nextend behavior for DEMO\_RAP\_ABSTRACT\_ROOT\\n\\{\\n association \_item3;\\n extend deep mapping for demo\_rap\_struc\_x\\n \\{\\n sub \_Item3 = sub\_3;\\n \\}\\n\\}\\n\\nscalar entity DEMO\_RAP\_ABSTRACT\_5 field comp3;\\n\\nextend behavior for DEMO\_RAP\_ABSTRACT\_1\\n\\{\\n association \_x1;\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_ABSTRACT\_4\\nwith control\\nextensible\\n\\{\\n field ( suppress ) comp1, comp2;\\n\\} extension for abstract;\\n\\nextend behavior for DEMO\_RAP\_ABSTRACT\_ROOT\\n\\{\\n\\}\\n\\nextend behavior for DEMO\_RAP\_ABSTRACT\_1\\n\\{\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_enabling.html abenbdl\_extensibility\_enabling\_ext.html