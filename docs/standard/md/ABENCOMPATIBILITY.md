---
title: "ABENCOMPATIBILITY"
description: |
  ABENCOMPATIBILITY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCOMPATIBILITY.htm"
abapFile: "ABENCOMPATIBILITY.html"
keywords: ["do", "if", "case", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "ABENCOMPATIBILITY"]
---

The [compatibility](ABENCOMPATIBLE_GLOSRY.html) of two data types apart from reference types is based on the [technical type properties](ABENTECHNICAL_TYPE_PRPT_GLOSRY.html) of the data types. The technical type properties affect the following:

In addition, the compatibility of [value assignments](ABENVALUE_ASSIGNMENTS.html) and [comparisons](ABENLOGEXP_COMP.html) between data objects apart from reference variables usually determines whether a [conversion](ABENCONVERSION_RULES.html) has to be performed or not.

In the case of reference types with data objects (reference variables) that have a [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html) apart from the [static type](ABENSTATIC_TYPE_GLOSRY.html), the term compatibility that is based entirely on technical type properties is not sufficient.

In order to check whether two data types are compatible at runtime, the method `APPLIES_TO_DATA` of RTTI class `CL_ABAP_DATADESCR` can be used. This can be helpful to prevent uncatchable exceptions when assigning generically typed data objects that are neither compatible nor convertible. For an example, see [Assignment and Conversion Rules](ABENCONVERSION_RULES.html).

Two non-generic data types apart from [reference types](ABENREFERENCE_TYPE_GLOSRY.html) and those that contain reference types as components are compatible if all their technical type properties match.

A non-generic data type apart from a reference type is compatible with a [generic data type](ABENGENERIC_DATA_TYPE_GLOSRY.html) if its technical properties are included in the generic data type.

A reference type is the static type of reference variables that determines to which objects they can point. At runtime, reference variables also have a dynamic type determined by the type of the object to which a reference variable points. The dynamic type can be more specific than the static type. For this reason, the rules for typing checks, assignments and comparisons cannot be covered by the idea of a compatibility that is based entirely on the technical properties of the static type. Instead, the following three points show how reference types can be used together:

As a rule, data reference variables can only be used with data reference variables and object reference variables only with object reference variables. No conversions take place between [reference variables](ABENREFERENCE_VARIABLE_GLOSRY.html). Reference variables are either passed without conversion, assigned to each other, compared to each other, or not at all.

-   Whether data objects can be assigned directly or a [type conversion](ABENTYPE_CONVERSION_GLOSRY.html) has to take place.
-   The [checking of the typing](ABENTYPING_CHECK.html) in assignments to [field symbols](ABENFIELD_SYMBOL_GLOSRY.html) or when assigning [actual parameters](ABENACTUAL_PARAMETER_GLOSRY.html) to [formal parameters](ABENFORMAL_PARAMETER_GLOSRY.html).

-   In the case of **[elementary data types](ABENELEMENTARY_DATA_TYPE_GLOSRY.html)**, the technical type properties are as follows:

-   The [built-in ABAP type](ABENBUILTIN_ABAP_TYPE_GLOSRY.html)
-   The length (for types `c`, `n`, `p`, and `x`)
-   The number of [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) (for type `p`)

-   With compatible elementary data types, all these properties match.
-   In the case of **[structured types](ABENSTRUCTURED_TYPE_GLOSRY.html)**, the technical type property is as follows:

-   The structure of components

-   The structure of structured types not only refers to the sequence of elementary components in the memory, but also to the combination of components with substructures and whether a substructure is a [boxed component](ABENBOXED_COMPONENT_GLOSRY.html). The names of the components and of the semantic properties defined in the ABAP Dictionary, such as [conversion exits](ABENCONVERSION_EXIT_GLOSRY.html) or documentation, however, are not important. With compatible structures, all components are compatible in pairs. This applies recursively down to the level of elementary data types.
-   If two structures are constructed identically, but different substructures are declared as boxed components, the structures are not compatible.
-   In the case of **[table types](ABENTABLE_TYPE_GLOSRY.html)**, the technical type properties are as follows:

-   The [line type](ABENROW_TYPE_GLOSRY.html)
-   The [table category](ABENTABLE_CATEGORY_GLOSRY.html)
-   The [table key](ABENTABLE_KEY_GLOSRY.html) including alias names

-   With compatible internal tables, the line types are compatible and table category and table key match. Other properties, such as the [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html), are not important.
-   Note that table types with secondary table key specifications are only compatible if they match in detail, meaning:

-   Secondary table key names must be identical.
-   Alias names, if present, must be identical.
-   Key types (sorted or hashed) must be identical.
-   Key uniqueness (unique or non-unique) must be identical.

-   In the case of **[mesh types](ABENMESH_TYPE_GLOSRY.html)**, the technical type properties are as follows:

-   The structure of nodes including the node names
-   The mesh associations of each component defined by `ON` conditions, including their names and the table key used

-   In the case of **[enumerated types](ABENENUM_TYPE_GLOSRY.html)**, the technical type properties are as follows:

-   All properties of the enumerated type

-   Each enumerated type is unique and only compatible with itself.

-   The types listed here are not compatible with one another, for example, an elementary data type is never compatible with a structure, even if it has only one component.
-   The statement [`TYPES`](ABAPTYPES_ENUM.html) cannot be used to define different enumerated types with the same technical type properties. Even data types that are constructed with [RTTC](ABENRUN_TIME_TYPE_CREATION_GLOSRY.html) methods exactly like an existing enumerated type are not compatible with it. An enumerated type defined by direct or indirect reference (including [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html)) to an existing enumerated type, on the other hand, is compatible.

-   When checking typing

-   A reference variable can be passed to a formal parameter typed as a reference variable if the type of the formal parameter is more general or equal to the type of the reference variable (known as an [upcast](ABENUP_CAST_GLOSRY.html)) and the formal parameter cannot be changed within the procedure.
-   A reference variable can be assigned to a field symbol typed as a reference variable if the reference types are identical.

-   Assignments between reference variables are possible using an [upcast](ABENUP_CAST_GLOSRY.html) or a [downcast](ABENDOWN_CAST_GLOSRY.html).
-   Data reference variables can be compared with all data reference variables and object reference variables can be compared to all object reference variables.

-   These rules for the usability of reference variables in assignments introduced here are one-way. The type of a target reference variable, to which a source reference variable can be assigned, does not itself have to be assignable to the source reference variable. The usability of reference variables in comparisons on the other hand, is not directed.
-   If a reference variable is a component of a structure, the usability of the structure is determined accordingly. In particular, the usability of such a structure regarding assignments is also directed.

abenabap.html abenabap\_reference.html abentypes\_and\_objects.html