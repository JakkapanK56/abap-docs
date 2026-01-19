---
title: "ABENDDIC_STRUCTURES_TECH"
description: |
  ABENDDIC_STRUCTURES_TECH - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_STRUCTURES_TECH.htm"
abapFile: "ABENDDIC_STRUCTURES_TECH.html"
keywords: ["do", "if", "case", "class", "data", "types", "ABENDDIC", "STRUCTURES", "TECH"]
---

A DDIC structure describes a [structure type](ABENSTRUCTURED_TYPE_GLOSRY.html) that consists of components and has the following technical properties:

-   **Component name**
-   The name of a component can have a maximum of 30 characters, can consist of only letters, numbers, and underscores, and must start with a letter or a [namespace prefix](ABENNAME_SPACE_PREFIX_GLOSRY.html). The following restrictions apply:

-   A component name cannot be the name of the [pseudo component](ABENPSEUDO_COMPONENT_GLOSRY.html)\\ `table_line` reserved in ABAP.
-   If a structure is to be included in a [database table](ABENDDIC_DATABASE_TABLES.html), the components must not be given any of the reserved names that are forbidden in DDIC database tables.

-   **Component type**

-   For elementary components, the technical properties ([built-in data type](ABENDDIC_BUILTIN_TYPES.html), length, and any decimal places) are defined with reference to a [data element](ABENDDIC_DATA_ELEMENTS.html) for an elementary DDIC type or directly in the structure component. In the case of [DDIC currency fields](ABENDDIC_CURRENCY_FIELD_GLOSRY.html) and [DDIC quantity fields,](ABENDDIC_QUANTITY_GLOSRY.html) a [reference field](ABENDDIC_STRUCTURES_SEMA.html) must be specified for the unit.
-   For reference-like components, the technical properties are defined using a reference to a [data element](ABENDDIC_DATA_ELEMENTS.html) that describes a reference type or defined directly in the structure component. When specified directly, data references can be defined by reference to any DDIC data type or to the generic type `DATA`. Object references can be defined by reference to classes or interfaces in the class library or to the generic type `OBJECT`,
-   Substructures are defined by reference to [DDIC structures](ABENDDIC_STRUCTURES.html), [DDIC database tables](ABENDDIC_DATABASE_TABLES.html), or DDIC views. A substructure can be defined as a [static box](ABENSTATIC_BOX_GLOSRY.html). In ABAP data objects declared with reference to the DDIC structure, a static box supports [initial value sharing](ABENINITIAL_VALUE_SHARING_GLOSRY.html).
-   Tabular components are defined by reference to a [DDIC table type](ABENDDIC_TABLE_TYPES.html).

-   **Enhancement category**
-   The [enhancement category](ABENDDIC_STRUCTURES_ENH_CAT.html) of a structure specifies how a structure can be extended using [customizing includes](ABENCUSTOMIZING_INCLUDE_GLOSRY.html) or [append structures](ABENAPPEND_STRUCTURE_GLOSRY.html) and affects how ABAP programs that work with data objects of this structure type are checked.
-   **Activation type**
-   An [activation type](ABENDDIC_DATABASE_TABLES_ACT_TYPE.html) can be defined for a structure, like for DDIC database tables, but has no specific use here.

-   In ABAP, the component names of structures are not strictly speaking a [technical type property](ABENTECHNICAL_TYPE_PRPT_GLOSRY.html). They are listed here however to simplify the picture.
-   The above rules for component names are checked strictly by the ABAP Dictionary only for table fields of DDIC database tables and not for structures. Component names of structures can contain special characters such as a colon `:` that prevent the component from being addressed in an ABAP program. For this reason, only those component names should be used that comply with the above rules.
-   A substructure cannot be defined using a reference to a [CDS entity](ABENCDS_ENTITY_GLOSRY.html), nor using a reference to a [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). The latter has been possible before, but since ABAP release 7.85, access to CDS-managed DDIC views is [obsolete](ABENCDS_ACCESS_OBSOLETE.html).

abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html abenddic\_structures.html