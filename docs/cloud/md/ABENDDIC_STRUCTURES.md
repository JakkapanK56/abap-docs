---
title: "ABENDDIC_STRUCTURES"
description: |
  ABENDDIC_STRUCTURES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_STRUCTURES.htm"
abapFile: "ABENDDIC_STRUCTURES.html"
keywords: ["data", "types", "ABENDDIC", "STRUCTURES"]
---

A [DDIC structure](ABENDDIC_STRUCTURE_GLOSRY.html) defines a [structured type](ABENSTRUCTURED_TYPE_GLOSRY.html) that contains other data types as components. These components can be:

The name of a DDIC structure must follow [naming rules for DDIC types](ABENDDIC_TYPES_NAMES.html) and additionally some special [naming rules for DDIC structures](ABENDDIC_STRUCTURES_NAMES.html).

A DDIC structure that contains other structures as components is called a [nested structure](ABENNESTED_STRUCTURE_GLOSRY.html). Structured components are [substructures](ABENSUBSTRUCTURE_GLOSRY.html) and substructures can themselves be nested. A structure that contains a string type, reference type, or table type as a direct or nested component is a [deep structure](ABENDEEP_STRUCTURE_GLOSRY.html). A structure that contains only elementary data types (except string types) as direct or nested components is a [flat structure](ABENFLAT_STRUCTURE_GLOSRY.html). A program-internal object declared with reference to a structure is a data object structured correspondingly (or [structure](ABENSTRUCTURE_GLOSRY.html) for short).

A DDIC structure can be included in another structure as an [include structure](ABENDDIC_INCLUDE_STRUCTURE.html), with the components of the included structure being added as the components of the including structure.

Structures can be defined as source-code-based structures using [dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html). The following section is a summary of the syntax of the source code-based definition:

The structure `SOADDRESS` for the address of a SAPoffice user is a nested structure with substructures.

-   Elementary data types
-   Reference types
-   Structured types
-   Table types

-   [Technical properties of structures](ABENDDIC_STRUCTURES_TECH.html)
-   [Semantic properties of structures](ABENDDIC_STRUCTURES_SEMA.html)

-   [Dictionary DDL for Structure Definitions](ABENDDIC_DEFINE_STRUCTURE.html)

-   A [CDS entity](ABENCDS_ENTITY_GLOSRY.html) ([CDS view](ABENCDS_V1_VIEWS.html), [CDS table function](ABENCDS_TABLE_FUNCTIONS.html), [CDS hierarchy](ABENCDS_HIERARCHIES.html), or [CDS abstract entity](ABENCDS_ABSTRACT_ENTITIES.html)) also represents a structured type and can be used as such in ABAP programs but not in the ABAP Dictionary.
-   [Mesh types](ABENMESH_TYPE_GLOSRY.html) cannot currently be defined in the ABAP Dictionary.
-   DDIC structures can be released for [developer extensibility](ABENDEV_EXTENSIBILITY_GLOSRY.html) under the [C0 release contract](ABENC0_CONTRACT_GLOSRY.html).
-   The data types of [DDIC database tables](ABENDDIC_DATABASE_TABLES.html) are all flat (not nested) structures.

abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html