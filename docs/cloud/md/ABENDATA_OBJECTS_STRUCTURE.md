---
title: "ABENDATA_OBJECTS_STRUCTURE"
description: |
  ABENDATA_OBJECTS_STRUCTURE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDATA_OBJECTS_STRUCTURE.htm"
abapFile: "ABENDATA_OBJECTS_STRUCTURE.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "internal-table", "field-symbol", "ABENDATA", "OBJECTS", "STRUCTURE"]
---

Structures are data objects that consist of components of any data type that are stored consecutively in the memory. The data type of a structure is a [structured type](ABENSTRUCTURED_TYPE_GLOSRY.html):

The following sections give an overview of structures in ABAP.

Depending on the type of component, structures are named as follows:

A structure that contains static or dynamic components is formally also a [static](ABENSTATIC_DATA_OBJECT_GLOSRY.html) or [dynamic data object](ABENDYNAMIC_DATA_OBJECT_GLOSRY.html), respectively.

The following figure illustrates a deep structure.

Nested structure. The substructure is created using a reference to the DDIC structure `SCARR` for the second component. The components are accessed using the structure component selector (`-`).

Deep structure. The following structure contains exclusively deep components.

Structures are addressed either completely or by component in appropriate operand positions. The [structure component selector](ABENSTRUCTURE_COMPONENT_SEL_GLOSRY.html) (`-`) is used for the latter. In the case of data reference variables that are typed as a structure, the components of the structure to which the data reference variable points can also be addressed using the object component selector (`->`).

Special [conversion](ABENCONVERSION_STRUC.html) and [comparison rules](ABENLOGEXP_RULES_OPERANDS_STRUC.html) apply to assignments that involve structures. Flat character-like structures have the special feature that they can be used like [character-like data objects](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html) in many operand positions and included in the generic ABAP type [`clike`](ABENBUILT_IN_TYPES_GENERIC.html). They can be specified in almost all operand positions where elementary character-like data objects are possible. The ABAP runtime framework then interprets the structure as an elementary field of the type `c` in the length of the structure. An exception to this are operand positions of [string expressions](ABAPCOMPUTE_STRING.html) and [string functions](ABENSTRING_FUNCTIONS.html) with named parameters.

For the assignment of structure components, there is a special statement [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html), a constructor operator [`CORRESPONDING`](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html), and a system class [`CL_ABAP_CORRESPONDING`](ABENCL_ABAP_CORRESPONDING.html). The [`INTO`](ABAPINTO_CLAUSE.html) clause of ABAP SQL also has an addition `CORRESPONDING`. The statement [`ASSIGN`](ABAPASSIGN.html) has a special variant [`COMPONENT OF STRUCTURE`](ABAPASSIGN_DYNAMIC_COMPONENTS.html) for dynamic access to structure components.

Inline declaration of a structure `wa` in a `SELECT` statement with reference to the DDIC database table `SCARR`. The components of the structure are accessed using the structure component selector (`-`).

Creation of a structure as an [anonymous data object](ABENANONYMOUS_DATA_OBJECT_GLOSRY.html) with the type of the DDIC database table `SCARR` in the ABAP Dictionary to which the data reference variable `dref` points. Used as the target area of a `SELECT` statement using the [dereferencing operator](ABENDEREFERENCING_OPERAT_GLOSRY.html) (`->*`). The components of the structure are accessed using the object component selector (`->`).

The following example demonstrates that a flat structure with exclusively character-like components can behave like a structure and like a character-like data object.

Since the data content of deep structures is not stored completely within the memory bounds of the structure itself and the deep components are just references to the actual data instead, there are some general restrictions apply when using deep structures, as opposed to flat structures:

These restrictions are particularly important if single components in existing flat character-like structures are converted to strings, which makes the entire structure deep.

The following two deep structures are not compatible and cannot be converted to each other.

The same restrictions apply to deep DDIC structures defined in the ABAP Dictionary as to deep structures declared in ABAP programs.

The substructures of nested structures and structured components of classes or interfaces can be declared as [boxed components](ABENBOXED_COMPONENTS.html).

-   In a program, a structured type or structure is created using the additions [`BEGIN OF ... END OF`](ABAPTYPES_STRUC.html) of the statements `TYPES`, `DATA`, and so on. Structured types can also be created dynamically using the [RTTC](ABENRUN_TIME_TYPE_CREATION_GLOSRY.html) methods.
-   In ABAP Dictionary, structured types are [DDIC structures](ABENDDIC_STRUCTURES.html) or types of [DDIC database tables](ABENDDIC_DATABASE_TABLES.html).
-   In [ABAP CDS](ABENABAP_CDS_GLOSRY.html), [CDS entities](ABENCDS_ENTITIES.html) represent structured types.

-   **Flat structures** do not contain any [deep](ABENDEEP_GLOSRY.html) components. They only contain components with flat data types, such as elementary types `c`, `n`, `d`, `t`, `decfloat16`, `decfloat34`, `f`, `b`, `s`, `i`, `int8`, `p`, `x`, `utclong`, or structures with these types.
-   **Flat character-like structures** are flat structures with exclusively [character-like](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html) components.
-   **Nested structures** contain at least one [substructure](ABENSUBSTRUCTURE_GLOSRY.html). Whether a nested structure is flat or character-like depends on the properties of all components.
-   **Deep structures** contain at least one [deep](ABENDEEP_GLOSRY.html) component in any nesting level. Possible deep components include strings, internal tables, boxed components, data or object references.

-   The term *nested structure* must not be confused with the term *deep structure*. A nested structure is flat if it contains exclusively flat components and subcomponents. A nested structure is deep when it has at least one deep component or subcomponent.
-   Generally, the components of a structure are not stored directly one after the other in memory and [alignment gaps](ABENALIGNMENT_GAP_GLOSRY.html) may occur.
-   The maximum number of bytes a structure can contain including alignment gaps is the maximum length of a field of type `x`, which is stored in the constant `TYPE_X_MAX_LENGTH` of the class `CL_ABAP_ELEMDESCR`. Components that are reference variables, strings or internal tables each use 8 bytes.

-   Deep structures must be [compatible](ABENCOMPATIBILITY.html) in [assignments](ABENVALUE_ASSIGNMENTS.html) and [comparisons](ABENLOGEXP_COMP.html).
-   [Substring access](ABENOFFSET_LENGTH.html) using offset/lengths is not possible for deep structures.
-   Deep structures cannot be used as character-like data objects in operand positions and are not included in the generic ABAP type [`clike`](ABENBUILT_IN_TYPES_GENERIC.html). This applies in particular to structures that contain [strings](ABENSTRING_GLOSRY.html).
-   When data objects are cast with [`ASSIGN`](ABAPASSIGN_CASTING.html), the deep components of deep structures must match in type and position in the type of the data object, and in the type of the field symbol.
-   The [work area](ABENABAP_SQL_WA.html) of ABAP SQL statements cannot contain any deep components other than strings or [LOB handles](ABENLOB_HANDLE_GLOSRY.html).
-   The target or source field of the statements `OPEN DATASET` and `TRANSFER` cannot be a deep structure.
-   No internal tables with a deep line type can be passed to a `TABLES` parameter in a remote function call. Deep structures can be passed to the other parameters, as long as they do not contain any reference variables.

DATA: \\n BEGIN OF struct, \\n name TYPE c LENGTH 10 VALUE 'SCARR', \\n scarr TYPE scarr, \\n END OF struct. \\n\\ \\nSELECT SINGLE \* \\n FROM scarr \\n WHERE carrid = 'LH' \\n INTO CORRESPONDING FIELDS OF @struct-scarr. \\n\\ \\ncl\_demo\_output=>new( \\n)->write\_data( struct-name \\n)->write\_data( struct-scarr-carrid \\n)->write\_data( struct-scarr-carrname \\n)->display( ). DATA: \\n BEGIN OF struct, \\n text TYPE string, \\n hex TYPE xstring, \\n tab TYPE STANDARD TABLE OF i WITH EMPTY KEY, \\n dref TYPE REF TO i, \\n iref TYPE REF TO if\_demo\_output, \\n END OF struct. SELECT carrid, carrname \\n FROM scarr \\n INTO @FINAL(wa). \\n cl\_demo\_output=>write( |\\{ wa-carrid WIDTH = 5 \\n \\}\\{ wa-carrname \\}| ). \\nENDSELECT. \\ncl\_demo\_output=>display( ). FINAL(dref) = NEW scarr( ). \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO @dref->\*. \\n cl\_demo\_output=>write( |\\{ dref->carrid WIDTH = 5 \\n \\}\\{ dref->carrname \\}| ). \\nENDSELECT. \\ncl\_demo\_output=>display( ). DATA: \\n BEGIN OF struct, \\n col1 TYPE c LENGTH 5 VALUE '12345', \\n col2 TYPE c LENGTH 5 VALUE 'abcde', \\n END OF struct. \\n\\ \\ncl\_demo\_output=>new( \\n )->write\_data( struct \\n )->write\_data( struct-col1 \\n )->write\_data( struct-col2 \\n )->write\_data( CONV string( struct ) \\n )->display( ). DATA: \\n BEGIN OF struct1, \\n col1 TYPE c LENGTH 4, \\n col2 TYPE REF TO data, \\n END OF struct1, \\n BEGIN OF struct2, \\n col1a TYPE c LENGTH 2, \\n col1b TYPE c LENGTH 2, \\n col2 TYPE REF TO data, \\n END OF struct2. \\n\\ \\nstruct1 = struct2. "Syntax error abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html