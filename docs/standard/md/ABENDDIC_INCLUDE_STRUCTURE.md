---
title: "ABENDDIC_INCLUDE_STRUCTURE"
description: |
  ABENDDIC_INCLUDE_STRUCTURE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_INCLUDE_STRUCTURE.htm"
abapFile: "ABENDDIC_INCLUDE_STRUCTURE.html"
keywords: ["select", "insert", "do", "if", "case", "class", "data", "types", "ABENDDIC", "INCLUDE", "STRUCTURE"]
---

Components of a structure can be defined by including the components of other DDIC structures, including DDIC database tables or DDIC views. These included structures are referred to as include structures or includes for short. From a technical perspective, the structure in which an include structure is included refers to the included structure and is modified accordingly whenever changes are made to the included structure. An include structure can itself contain include structures, with the maximum nesting depth being nine includes.

When an include structure is included, all of its components are added to the encompassing structure. No substructure is created, which means that the components are inserted as if they were specified individually at this position and they are handled like directly defined components. Regular components and include structures can be combined as required.

When a structure is included as an include structure, it can be assigned a group name and a three-character suffix.

Group names and suffixes are assigned in the same way as with the additions `AS name [RENAMING WITH SUFFIX suffix]` of the statement [`INCLUDE TYPE`](ABAPINCLUDE_TYPE.html) in ABAP programs. Unlike in the statement `INCLUDE TYPE`, an include structure in the ABAP Dictionary can have a suffix without a specified name.

The fields of an include structure still belong to the include structure. They can only be edited by modifying the included structure and any changes made to the included structure affect all including structures. The fields of an included structure can, however, also be transformed to direct fields of the including structure. These fields are then no longer linked with the originally included structure.

The components of an include structure can be assigned [check tables](ABENDDIC_STRUCTURES_SEMA.html) and [search helps](ABENDDIC_STRUCTURES_SEMA.html) in the context of the including structure. These assignments extend the components of the included structure or replace existing assignments.

The structure `DEMO_WEEK` includes the structure `DEMO_DAY` five times as an include structure with group names and suffixes. The class `CL_DEMO_INCLUDE_STRUCTURE` shows how its components can be accessed in ABAP.

-   In ABAP programs, the group name is an additional addressing option for data objects declared with reference to the structure. All components of the included structure form a [component group](ABENCOMPONENT_GROUP_GLOSRY.html) and can be addressed together using this name or individual components can be addressed using the structure component selector (`-`) after the name.
-   A suffix is added to each individual component's name to avoid naming conflicts. The original name of an include structure that is included in an encompassing structure must not exceed 27 characters.

-   Including structures is highly error-prone due to possible naming conflicts between components, particularly in the case of subsequent extensions to the included structure. If possible, substructures should be used instead. If this is not possible, for example, in [DDIC database tables](ABENDDIC_DATABASE_TABLES.html), suffixes should be used to avoid naming conflicts.
-   Including structures should not be confused with the inheritance of components as provided by the ABAP Dictionary tool. Inheritance means that the definition of a component is simply copied to a different structure and there is no link to the original structure. Similarly, an existing include can be resolved to individual component definitions.
-   The name of a group is just an additional addressing option and does not resolve any naming conflicts. In particular, group names in statements like [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html) or [`SELECT INTO CORRESPONDING`](ABAPINTO_CLAUSE.html) are ignored. Components renamed with a suffix, on the other hand, are renamed for real.
-   Group names must not be used in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) when [specifying a column](ABENABAP_SQL_COLUMNS.html).
-   A [CDS entity](ABENCDS_ENTITY_GLOSRY.html) (such as a [CDS view](ABENCDS_ENTITY_GLOSRY.html), [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html), or a [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html)) cannot be included as an include structure. A [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a [CDS DDIC-based view](ABENCDS_V1_VIEW_GLOSRY.html) cannot be included either, because its usage is [obsolete](ABENCDS_ACCESS_OBSOLETE.html) since ABAP release 7.85.

abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html abenddic\_structures.html