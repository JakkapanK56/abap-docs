---
title: "ABENBDL_EXT_ENABLING_ABSTRACT"
description: |
  ABENBDL_EXT_ENABLING_ABSTRACT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_EXT_ENABLING_ABSTRACT.htm"
abapFile: "ABENBDL_EXT_ENABLING_ABSTRACT.html"
keywords: ["if", "types", "ABENBDL", "EXT", "ENABLING", "ABSTRACT"]
---

``[`abstract`](ABENBDL_IMPL_TYPE.html)\  [`strict[(version)]`](ABENBDL_STRICT.html);  [`extensible`](ABENBDL_EXTENSIBLE.html);  [`define behavior for AbstractEntity`](ABENBDL_DEFINE_BEH_ABSTRACT.html)\    [`extensible`](ABENBDL_EXTENSIBLE.html)\    [...]\  \{    [...]\    [[`[deep] mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING_ABSTRACT.html)]\    [...]\  \}   ...``

To allow [abstract BDEF extensions](ABENRAP_ABS_BDEF_EXT_GLOSRY.html) to an [abstract behavior definition](ABENCDS_ABSTRACT_BDEF_GLOSRY.html), [BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html) must be switched on using the keyword [`strict [(version)]`](ABENBDL_STRICT.html).

The keyword `extensible` can be specified at different places to allow for extensions:

**Note** It is not required that the underlying [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) is declared as *extensible*.

The abstract behavior definition `DEMO_RAP_ABSTRACT_ROOT` enables BDEF extensions:

-   `extensible` in the [abstract BDEF header](ABENBDL_BDEF_ABSTRACT_HEADER.html)
-   Prerequisite for extensibility. If it is not specified, then extensions are not allowed. If specified, at least one entity must be declared as extensible after the statement [`define behavior for AbstractEntity ...`](ABENBDL_DEFINE_BEH_ABSTRACT.html)
-   Allows the following components to be added to an abstract behavior definition via an abstract BDEF extension:

-   Adding new nodes to the hierarchical type of the abstract BDEF using the statement `define behavior for AbstractEntity`.
-   Adding new scalar entities to the hierarchical type.

-   `extensible` specified for an individual node after the statement `define behavior for AbstractEntity`
-   Mandatory for each individual node that allows extensions.
-   Allows the following extensions to be added via an abstract BDEF extension:

-   [RAP field characteristics](ABENRAP_FIELD_CHAR_GLOSRY.html) can be added to extension fields.
-   Associations
-   [Type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html)

-   `extensible` in the [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html):
-   [`[deep] mapping for PartnerType corresponding extensible`](ABENBDL_TYPE_MAPPING.html): a [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) defined in the original abstract BDEF can be extended with extension fields. `extensible` can only be used in combination with `corresponding`, so that components with the same name are automatically mapped to each other.

abstract;\\nstrict ( 2 );\\nextensible;\\nwith hierarchy;\\n\\ndefine behavior for DEMO\_RAP\_ABSTRACT\_ROOT\\nextensible\\nwith control\\n\\{\\n// key field, unwanted in derived types\\n field ( suppress ) comp1key;\\n\\n association \_item;\\n association \_sib;\\n\\n deep mapping for demo\_rap\_struc\_x corresponding extensible\\n \\{\\n comp2 = comp2;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_ABSTRACT\_1\\nextensible\\nwith control\\n\\{\\n// foreign key field for parent, unwanted in derived types\\n field ( suppress ) comp1, comp2;\\n\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_enabling.html