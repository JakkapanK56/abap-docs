---
title: "ABAPTYPES_REFERENCES"
description: |
  ABAPTYPES_REFERENCES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTYPES_REFERENCES.htm"
abapFile: "ABAPTYPES_REFERENCES.html"
keywords: ["select", "do", "if", "method", "class", "data", "types", "ABAPTYPES", "REFERENCES"]
---

[Short Reference](ABAPTYPES_SHORTREF.html)

`TYPES ref_type \{\ \{TYPE REF TO type\}`\\ 
               `|\ \{LIKE REF TO dobj\}\ \}.`

The addition `REF TO` defines a data type for a [reference variable](ABENREFERENCE_VARIABLE_GLOSRY.html). The static type of the reference variable is specified after `REF TO`. The static type restricts the object quantity to which a reference variable can point. The dynamic type of a reference variable is the data type and the object class to which it points. The static type is always more general or the same as the dynamic type (see also [assignment rules for reference variables](ABENCONVERSION_REFERENCES.html)).

Apart from `data` and `object`, no [generic data types](ABENBUILT_IN_TYPES_GENERIC.html) can be specified after `TYPE REF TO`.

**Types for Data Reference Variables**

If the predefined generic data type [`data`](ABENBUILT_IN_TYPES_GENERIC.html) is specified for `type`, a data type for a data reference variable of the generic static type `data` is created. Reference variables like these can point to any data objects.

If a non-generic data type is specified for `type` (meaning a non-generic data type from the ABAP Dictionary, from ABAP CDS, or from the public visibility section of a global class, a non-generic local program type already defined using `TYPES`, or a non-generic [built-in ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)), a data type is created for a data reference variable with the corresponding static type. Reference variables like these can point to all data objects of the same type.

The same applies to `dobj` as to [`TYPES ... LIKE`](ABAPTYPES_REFERRING.html). A data type is created for a data reference variable whose static type is inherited from the data type of the specified data object. Reference variables like these can point to all data objects of the same type.

A data reference variable can be dereferenced in different ways, depending on its static type:

**Types for Data Reference Variables**

If the predefined generic data type [`object`](ABENBUILT_IN_TYPES_GENERIC.html) is specified for `type`, a data type for a class reference variable of the generic static type `data` is created. Reference variables like these can point to instances of any class.

If a global or local class is specified for `type`, a data type for a class reference variable whose static type is the specified class is created. Reference variables like these can point to all instances of the class and its subclasses. A class reference variable can be used to access all components of an object. If the static type is the superclass of the dynamic type, the components that can be accessed statically are a subset of the components of the dynamic type. All attributes and methods of the dynamic type can be accessed using a class reference variable and the dynamic access to object attributes (see `ASSIGN`) and the dynamic method call (see [`CALL METHOD`](ABAPCALL_METHOD_DYNAMIC.html)).

If a global or local interface is specified for `type`, a data type for an interface reference variable whose static type is the specified interface is created. Reference variables like these can point to objects of all classes that implement the interface. When using interface references to access components of objects, the name of the static type is always implicitly placed in front of the component. An interface reference variable can only be used to access those interface components of an object that are known in the static type. This applies to both dynamic and static access.

This example shows how data types are defined for an interface reference variable and for a class reference variable and how a data reference is defined with the static type of the interface reference variable.

-   A data reference variable typed generically with `TYPE REF TO data` can be dereferenced only in the statement [`ASSIGN`](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html) with the [dereferencing operator](ABENDEREFERENCING_OPERAT_GLOSRY.html)\\ `->*`.
-   A data reference variable typed fully with `TYPE REF TO complete_type` or `LIKE REF TO dobj` can be dereferenced in all suitable operand positions using the dereferencing operator `->*`. If the static data type is structured, the [object component selector](ABENOBJECT_COMPONENT_SELECT_GLOSRY.html) enables access to the components of the structure with `dref->comp`.

-   The `TYPE` addition can be used to define data types for data reference variables and object reference variables. Only data types for data reference variables can be defined using the `LIKE` addition.
-   The predefined generic data type `any` can only be specified after `TYPE`, like all other [generic types](ABENBUILT_IN_TYPES_GENERIC.html) apart from `data` and `object`, but not after `REF TO`.
-   Data reference variables can also be declared with the static type of an [enumerated type](ABAPTYPES_ENUM.html) and can then point to data objects of the corresponding type.
-   Since the global [object types](ABENOBJECT_TYPE_GLOSRY.html) of the [class library](ABENCLASS_LIBRARY_GLOSRY.html) are in the same namespace as all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP, the specification of `type` is always unique.

INTERFACE i1. \\n... \\nENDINTERFACE. \\n\\ \\nCLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES i1. \\nENDCLASS. \\n\\ \\nTYPES: iref TYPE REF TO i1, \\n cref TYPE REF TO c1, \\n dref TYPE REF TO iref. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html