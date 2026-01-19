---
title: "ABENDDIC_DATA_TYPES"
description: |
  ABENDDIC_DATA_TYPES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_DATA_TYPES.htm"
abapFile: "ABENDDIC_DATA_TYPES.html"
keywords: ["do", "if", "method", "class", "data", "types", "internal-table", "ABENDDIC", "DATA", "TYPES"]
---

Global data types can be defined as [DDIC types](ABENDDIC_TYPE_GLOSRY.html) in the ABAP Dictionary. These DDIC types are visible for and can be accessed from all repository objects of the current AS ABAP, as long as the package concept allows it.

The following data types are available in the ABAP Dictionary:

In ABAP programs, the `TYPE` addition of declarative statements can be used to reference the DDIC data types. In these scenarios, data elements work like elementary ABAP types, structures work like structured ABAP types, and table types work like the corresponding ABAP types. The elementary components of each DDIC data type are based on a [built-in dictionary type](ABENDDIC_BUILTIN_TYPES.html) for which a [mapping](ABENDDIC_BUILTIN_TYPES.html) to the corresponding [built-in ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html) is defined. If a DDIC data type is changed, all consumers are modified automatically.

The name of a data type must follow the [naming rules for DDIC data types](ABENDDIC_TYPES_NAMES.html).

In addition to its technical properties, a DDIC data type can have semantic information, such as documentation texts, texts for use on UIs, or search helps. Data types without semantic properties can also be declared in type pools.

A DDIC data type, such as the structure `DEMO_CONN`, can be referenced in the parameter interfaces of global procedures (methods or function modules) and in the ABAP programs that use the procedures.

The elementary components of the structure `SYST` describe the [ABAP system fields](ABENSYSTEM_FIELDS.html). The semantic properties of these components or the data elements used for them are designed for system fields used internally in programs. It is not recommended that these components or their data elements are used for other purposes, such as dynpro fields or Web Dynpro fields, only because their technical properties are suitable. Their semantic properties, in particular their text descriptions and documentation, are not usually suitable for UIs. If there are no types with suitable semantic properties that can be reused, new data types should be created.

-   [Data elements](ABENDDIC_DATA_ELEMENTS.html)
-   Elementary data types or reference types with semantic properties, such as documentation or text labels. The type properties of a data element are defined either directly or using a domain.
-   A [domain](ABENDDIC_DOMAINS.html) determines the properties of a data element, such as the actual data type or the value range. A domain can be used by any number of data elements. A data element does not need to use a domain. In other repository objects, especially in ABAP programs, it is not possible to make a direct reference to a domain.
-   [DDIC structures](ABENDDIC_STRUCTURES.html)
-   Complex types whose components are other DDIC data types.
-   [DDIC table types](ABENDDIC_TABLE_TYPES.html)
-   Complex types that describe [internal tables](ABENINTERNAL_TABLE_GLOSRY.html) in ABAP.

-   DDIC data types can only be used by AS ABAP. They are not created as types on the database system.
-   In addition to DDIC data types, [CDS entities](ABENCDS_ENTITY_GLOSRY.html) also represent data types which can be used as such in ABAP programs.
-   Within a program, locally defined types hide identically named global types from the ABAP Dictionary.

CLASS example DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS demo\_meth \\n IMPORTING \\n para TYPE demo\_conn. \\nENDCLASS. \\n\\ \\nCLASS example IMPLEMENTATION. \\n METHOD demo\_meth. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD main. \\n DATA structure TYPE demo\_conn. \\n\\ \\n example=>demo\_meth( structure ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_dictionary.html