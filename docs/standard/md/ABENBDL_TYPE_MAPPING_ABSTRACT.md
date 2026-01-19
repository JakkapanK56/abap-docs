---
title: "Type Mapping"
description: |
  Deep Mapping abstract;nstrict(2);nwith hierarchy;nndefine behavior for DEMO_CDS_ABSTRACT_ROOT alias Rootnn field ( suppress ) Dummy;nn deep mapping for DEMO_CDS_ABSTRACT_STRUCn n char10 = char_10;n Integer4 = integer_4;n sub _itemStructure = struktur;n sub _
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_TYPE_MAPPING_ABSTRACT.htm"
abapFile: "ABENBDL_TYPE_MAPPING_ABSTRACT.html"
keywords: ["if", "data", "types", "ABENBDL", "TYPE", "MAPPING", "ABSTRACT"]
---

`... [mapping for PartnerType](ABENBDL_TYPE_MAPPING.html) ...`

`... deep mapping for NestedDeepDDICType [corresponding [[extensible](ABENBDL_EXTENSIBLE.html)]]\ \{ EntityComp1 = PartnerComp1 [...]\ [sub _Compos1 = Partnersub1][, sub _Compos2 = Partnersub2]\ [...]\ \} ...`

[1. `mapping for PartnerType ...`](#ABAP_ALTERNATIVE_1@2@)

[2. `deep mapping for NestedDeepDDICType ...`](#ABAP_ALTERNATIVE_2@2@)

[RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) maps data types of the abstract BDEF to DDIC partner types. If the DDIC partner type is a [flat structure](ABENDDIC_STRUCTURES.html) and only elementary data types are mapped, flat type mapping can be used. If the DDIC partner type is a [nested or deep structure](ABENDDIC_STRUCTURES.html), deep mapping can be used. It defines a mapping for nested table components or substructures.

To map elements to flat DDIC structures, type mapping using the syntax `mapping for PartnerType` can be used. The syntax is the same as for [managed](ABENMANAGED_RAP_BO_GLOSRY.html) and [unmanaged RAP BOs](ABENUNMANAGED_RAP_BO_GLOSRY.html) and it is described in topic [RAP BDL - type mapping](ABENBDL_TYPE_MAPPING.html).

In an abstract BDEF `with hierarchy`, mappings can be defined between the generated hierarchical derived types and nested or deep DDIC types. These mappings must be introduced with the keyword `deep`.

The optional addition `sub` can be used for `sub` specifications. Child entities with a composition cardinality > 1 can be mapped to nested table components. If the composition cardinality is <= 1, a mapping to a substructure can be defined.

Syntax for `sub` specification:

sub \_Compos1 = Partnersub1

The left-hand side of a `sub` equation `sub _Compos1` contains the name of a composition association of the entity. The right-hand side contains the name of a component `PartnerComp1` of the nested or deep partner type `NestedDeepDDICType`. The components that are mapped onto each other must match, both must be either tables or structures. To cover the full hierarchical derived type, such a mapping must be defined for every entity in the abstract composition hierarchy and its corresponding partner type, with `sub` specifications for child entities at each level.

The optional addition `extensible` enables [BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html) for the type mapping in question. That means that [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html) are allowed to add extension fields to that particular type mapping. `extensible` can only be used in combination with `corresponding`, so that components with the same name are automatically mapped to each other.

Example: deep mapping for NestedDeepDDICType corresponding extensible;.

For details on extensibility enabling, see topic [RAP - Extensibility Enabling for Abstract BDEFs](ABENBDL_EXT_ENABLING_ABSTRACT.html).

The following abstract BDEF defines the behavior for three nodes of a CDS composition tree. For each entity, a mapping to a partner type is defined.

Type Mapping

Deep Mapping

abstract;\\nstrict(2);\\nwith hierarchy;\\n\\ndefine behavior for DEMO\_CDS\_ABSTRACT\_ROOT alias Root\\n\\{\\n field ( suppress ) Dummy;\\n\\n deep mapping for DEMO\_CDS\_ABSTRACT\_STRUC\\n \\{\\n char10 = char\_10;\\n Integer4 = integer\_4;\\n sub \_itemStructure = struktur;\\n sub \_itemTable = tabelle;\\n \\}\\n\\n association \_itemTable;\\n association \_itemStructure;\\n\\}\\n\\ndefine behavior for DEMO\_CDS\_ABSTRACT\_ITEMSTRUCT alias ItemStructure\\n\\{\\n field ( suppress ) Dummy, ToRoot;\\n\\n deep mapping for DEMO\_ABSTRACT\_ITEMSTRUCT\\n \\{\\n Char10 = char\_10;\\n Integer4 = integer\_4;\\n \\}\\n\\n association \_parent;\\n\\}\\n\\ndefine behavior for DEMO\_CDS\_ABSTRACT\_ITEMTABLE alias ItemTable\\n\\{\\n field ( suppress ) Dummy, ToRoot;\\n\\n deep mapping for DEMO\_ABSTRACT\_ITEMTABLE corresponding\\n \\{\\n Char10 = char\_10;\\n Integer4 = integer\_4;\\n \\}\\n\\n association \_parent;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_abstract.html abenbdl\_define\_beh\_abstract.html abenbdl\_body\_abstract.html