---
title: "ABENBDL_DEFINE_BEH_ABSTRACT"
description: |
  ABENBDL_DEFINE_BEH_ABSTRACT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_DEFINE_BEH_ABSTRACT.htm"
abapFile: "ABENBDL_DEFINE_BEH_ABSTRACT.html"
keywords: ["if", "case", "data", "types", "internal-table", "ABENBDL", "DEFINE", "BEH", "ABSTRACT"]
---

``\{\{ define behavior for AbstractEntity [alias AliasName]\    [[`extensible`](ABENBDL_EXTENSIBLE.html)]\    [with control]\    \{     [`entity behavior body`](ABENBDL_BODY_PROJECTION.html)\    \}  \}\  | scalar entity AbstractEntity field FieldName \}\  \  [behavior for ChildEntity1][, behavior for ChildEntity2][, ...  ]``

[1. `... define behavior for`](#ABAP_ALTERNATIVE_1@2@)

[2. `... scalar entity ...`](#ABAP_ALTERNATIVE_2@2@)

Defines the behavior for a [RAP abstract behavior definition](ABENCDS_ABSTRACT_BDEF_GLOSRY.html) in the [RAP BDL](ABENCDS_BDL_GLOSRY.html). The abstract behavior definition must be based on a root [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html)\\ `AbstractEntity` and it can define the behavior for one or more of the nodes of the [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html).

For each node of the CDS composition tree, there are two possibilities how to include them in the behavior definition:

Both alternatives are described with their additions below.

The following example shows an abstract BDEF with two nodes, one of them being a scalar entity.

[Entity behavior definition](ABENCDS_ENTITY_BDEF_GLOSRY.html) for a CDS abstract entity. It can consist of the following additions and components:

[Entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html) cannot be specified for abstract BDEFs.

An entity in the CDS composition tree can be integrated into the hierarchical type not as a structured type, but as a scalar type, for example, an integer or a character. This is often defined for [leaf entities](ABENLEAF_ENTITY_GLOSRY.html). For a scalar type, the following syntax must be used instead of the usual `define behavior for` syntax:

... scalar entity AbstractEntity field FieldName;

The specified field `FieldName` of the scalar entity `AbstractEntity` is taken for the scalar type. All other entity fields are ignored. Suppressing unwanted fields and type mappings are irrelevant.

It is also possible to declare the root node as scalar entity. Then the complete hierarchical type turns into one scalar type. This enables entity-based action parameter types which are [elementary](ABENELEMENTARY_DATA_TYPE_GLOSRY.html) or [internal tables](ABENINTERNAL_TABLE_GLOSRY.html) with elementary [line types](ABENROW_TYPE_GLOSRY.html).

-   A node can be integrated into the hierarchical type as a structured type using the syntax `define behavior for`. In this case, an [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html) is mandatory.
-   A node can be integrated into the hierarchical type as a scalar type using the syntax `scalar entity`.

-   `alias`: an alias name can be specified using the keyword `alias`. The length of an alias name `AliasName` is restricted to 30 characters.
-   [`extensible`](ABENBDL_EXTENSIBLE.html): To enable [BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html), a declaration in the abstract BDEF header is required and the keyword `extensible` must also be declared after the statement `define behavior for` for each entity that allows BDEF extensions. For details, see the topic [RAP - Extensibility Enabling for Abstract BDEFs](ABENBDL_EXT_ENABLING_ABSTRACT.html).
-   `with control` is an optional addition that adds a [`%control`](ABAPDERIVED_TYPES_COMP.html) structure to the corresponding derived type structure. That means that for each component of the hierarchical type, stemming either from an entity field or from an association, an identically named component of the [built-in ABAP type `x(1)`](ABENBUILTIN_TYPES_BYTE.html) is added as part of the structure `%control` which is appended at the end. As a result, all or some levels of the hierarchical types contain `%control` components which may be used by applications to indicate the provisioning of the equally named payload components.
-   As a prerequisite to use `with control`, the abstract BDEF must use the addition [`with hierarchy`](ABENBDL_BDEF_ABSTRACT_HEADER.html).
-   An [entity behavior body](ABENBDL_BODY_ABSTRACT.html) is mandatory and it can define field characteristics, associations, or type mapping. Transactional behavior is not possible in an abstract BDEF.

abstract;\\nstrict(2);\\nwith hierarchy;\\n\\ndefine behavior for DEMO\_CDS\_SCALAR\_ROOT\_1 alias Root\\n\\{\\nmapping for demo\_cds\_scalar\_1 corresponding\\n \\{\\n field1 = r\_fd1;\\n field2 = r\_fd2;\\n field3 = r\_sib;\\n \\}\\n\\n association \_item1;\\n\\}\\n\\nscalar entity demo\_cds\_scalar\_child\_1 field i1fd2; abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_abstract.html