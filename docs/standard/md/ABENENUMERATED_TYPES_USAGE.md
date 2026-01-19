---
title: "ABENENUMERATED_TYPES_USAGE"
description: |
  ABENENUMERATED_TYPES_USAGE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENENUMERATED_TYPES_USAGE.htm"
abapFile: "ABENENUMERATED_TYPES_USAGE.html"
keywords: ["select", "loop", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "ABENENUMERATED", "TYPES", "USAGE"]
---

This section summarizes the use of [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html), that is, data objects with [enumerated types](ABENENUM_TYPE_GLOSRY.html).

An enumerated object is a data object with an [enumerated type](ABENENUM_TYPE_GLOSRY.html).

Enumerated types can be defined as follows:

The technical data type of the content of an enumerated object is the [base type](ABENBASE_TYPE_GLOSRY.html) of the enumerated type. The possible content is defined by the [enumerated values](ABENENUMERATED_VALUE_GLOSRY.html) defined using [`TYPES ... [VALUE]`](ABAPTYPES_ENUM.html) in ABAP or by [`EnumConstant = EnumValue`](ABENCDS_DEFINE_ENUM_TYPE.html) in ABAP CDS. Exactly one value must have the type-specific initial value. In ABAP, the base type is `i` by default, but it can also be a different elementary data type. In ABAP CDS, the base type must be specified and there is no default.

The following enumerated objects can be used in ABAP programs:

Declaration of an enumerated type `size` in a class. The method parameter `size` has the enumerated type and only enumerated objects of this type can be passed to this parameter. This example show how the enumerated constant `demo=>l` is passed. This guarantees that only enumerated values of the enumerated type can be passed to the parameter. These can be evaluated in comparisons with the enumerated constants. In the `CASE` control structure shown here, the statement block after `WHEN OTHERS` can be reached only when `demo=>xl` and `demo=>xxl` are passed.

[enum, Declaration](ABENENUM_DECLARATION_ABEXA.html)

The processing of enumerated objects is usually independent of the base type of the enumerated type. Only the enumerated type itself is relevant for all rules specified here. Assignments of enumerated objects with a numeric base type, for example, cannot be assigned to numeric target fields and cannot be compared with numeric fields. The enumerated value in the base type can be accessed using the constructor operators [`CONV`](ABENCONV_CONSTRUCTOR_ENUM.html) and [`EXACT`](ABENEXACT_CONSTRUCTOR_ENUM.html) only.

In the first assignment, the enumerated constant `xl` in a read position is assigned to the enumerated variable `size` in a write position. The string expression in the second half exploits the fact that the enumerated constants are converted implicitly to the type `string` before the concatenation. The result is `SMLXLXXL`.

Only enumerated objects with the same enumerated type can be assigned to an enumerated variable. In the assignment, the target field is given the enumerated value of the source field.

The initial value of the base type is always a valid enumerated value of an enumerated type. Accordingly, an enumerated variable can be set to the initial value of its base type using [`CLEAR`](ABAPCLEAR.html). Assignments of [`VALUE enum_type( )`](ABENVALUE_CONSTRUCTOR_PARAMS_INIT.html) are also possible.

Conversely, enumerated objects can only be assigned to compatible enumerated variables, with the following exception: There is a [conversion rule](ABENCONVERSION_ENUMERATED.html) for assignments of enumerated objects to character-like variables of the types `c` and `string`. In this case, the target field is assigned the name of the enumerated constant or the component of the enumerated structure under which the enumerated value of the source field is defined in the enumerated type. Since this rule can produce unexpected results, conversions of this type lead to a message from the extended program check that can be hidden using the pragma `##types`.

In structures, each component with an enumerated type forms a separate fragment of the [structure fragment view](ABENUNICODE_FRAGMENT_VIEW.html). In assignments between structures of this type, the fragment views must match so that only components with the same enumerated type can be assigned to each other.

In the first assignment, the enumerated constant `sz-xl` is assigned to the enumerated variable `size` of its enumerated type. This variable then contains the associated enumerated value 3. In the second assignment, the enumerated constant is assigned to the text string `size_string`. This string is given the value *XL* in accordance with the conversion rule.

For comparisons between enumerated objects, the [comparison rule](ABENLOGEXP_RULES_OPERANDS_ENUM.html) applies that an enumerated object can only be compared with an enumerated object with the same enumerated type. Here, the values of the operands are compared in accordance with their base type.

Each enumerated type has an initial enumerated value, which makes checks with the predicate expression [`IS INITIAL`](ABENLOGEXP_INITIAL.html) possible.

Comparisons do not perform an implicit conversion of an enumerated object to the character-like types `c` and `string`. Conversions of this type must be performed explicitly, for example with the conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html). This difference between assignments and comparisons is particularly significant when reading from internal tables using the statement [`READ TABLE`](ABAPREAD_TABLE.html) or [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html) and the statement [`LOOP AT`](ABAPLOOP_AT_ITAB_VARIANTS.html) or a [`FOR`](ABENFOR_ITAB.html) statement. When individual lines are read, the comparison fields of conditions are converted implicitly; this is not the case when multiple lines are read. Implicit conversions produce the message from the extended program check mentioned above.

The first comparison shows a typical case where an enumerated variable is compared with an enumerated constant. The syntax of the second comparison that is in a comment is not possible. In the third comparison, the enumerated variable is converted explicitly to the type `string` before the comparison with a text string.

If [formal parameters](ABENFORMAL_PARAMETER_GLOSRY.html) of procedures or [field symbols](ABENFIELD_SYMBOL_GLOSRY.html) are [typed](ABENTYPING.html) with an enumerated type, only enumerated objects with the same enumerated type can be assigned to them. As usual, an exception to this are return values of functional methods that can also be converted to character-like objects of the types `c` and `string`.

Enumerated types are covered by the generic types [`any`](ABENBUILT_IN_TYPES_GENERIC.html), [`data`](ABENBUILT_IN_TYPES_GENERIC.html), and [`simple`](ABENBUILT_IN_TYPES_GENERIC.html). When an enumerated object is passed to generically typed formal parameters or in assignments to generically typed field symbols, they inherit the enumerated type. In assignments to field symbols, no castings with the [`CASTING`](ABAPASSIGN_CASTING.html) addition can be performed and an enumerated type cannot be specified after this addition.

When using generically typed formal parameters or field symbols for enumerated objects, the restriction applies that at [read positions](ABENREAD_POSITION_GLOSRY.html) where a statically known [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) is expected, only statically known operands of the same [enumerated type](ABENENUMERATED_TYPE_GLOSRY.html) are allowed. This affects, for example, the source field of an assignment to an [enumerated variable](ABENENUMERATED_VARIABLE_GLOSRY.html) or an operand that is compared with an enumerated object. In [write positions](ABENWRITE_POSITION_GLOSRY.html) for enumerated objects, however, generic formal parameters or field symbols are allowed for enumerated types. If the operand type is not known statically, the check is only made at runtime in read positions as well.

[enum, Parameter Passing](ABENENUM_FORMAL_PARA_ABEXA.html)

The field symbol `fs1` typed generically with `simple` cannot be assigned to an enumerated variable `size` known statically or compared with it. An assignment of `size` to the field symbol and fully generic handling is, however, possible.

A special [rule](ABENCONV_CONSTRUCTOR_ENUM.html) for the conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) applies when accessing the enumerated value of an enumerated object:

[`... CONV base_type( enum_dobj ) ...`](ABENCONV_CONSTRUCTOR_ENUM.html)

If the base type `base_type` of an enumerated object `enum_dobj` specified as an operand is specified directly or indirectly, `CONV` returns its enumerated value.

Conversely, a valid enumerated value can be converted to an enumerated object:

[`... CONV enum_type( dobj ) ...`](ABENCONV_CONSTRUCTOR_ENUM.html)

The operand `dobj` is converted to the base type of the enumerated type `enum_type` and `CONV` returns an enumerated object with this value. Any invalid values raise an exception.

In combinations of these two variants where `CONV base_type( enum_dobj )` is used as an operand `dobj` of `CONV enum_type( dobj )`, there is a short form:

[`... CONV enum_type( enum_dobj ) ...`](ABENCONV_CONSTRUCTOR_ENUM.html)

Provided that different enumerated types can have the same base type, an enumerated object of an enumerated type can be converted to the corresponding enumerated object of a different enumerated type.

The corresponding [rules](ABENEXACT_CONSTRUCTOR_ENUM.html) applies to the lossless operator [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html), whereby additional losslessness checks are made.

The inner conversion operator `CONV` accesses the current enumerated value of the enumerated object `size` and returns it in the type `i`. The outer conversion operator `CONV` converts the result of the addition back to an enumerated type and assigns this enumerated value to the enumerated variable `size`. The enumerated value in `size` is raised by one for each iteration. The final result is the value of the enumerated constant `xxl`.

The type returned by the statement [`DESCRIBE FIELD`](ABAPDESCRIBE_FIELD.html) for an enumerated object is `k`. The length is the length of the enumerated values in the basis type in bytes.

In [RTTS](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html), enumerated objects are described by objects of the class `CL_ABAP_ENUMDESCR`. This class can be used for [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html) and [RTTC](ABENRUN_TIME_TYPE_CREATION_GLOSRY.html) purposes. Like any enumerated type, an enumerated type created using RTTC is only compatible with itself.

The following attributes exist in a type description of the class `CL_ABAP_ENUMDESCR`:

A [CDS enumerated type](ABENCDS_ENUM_TYPE_GLOSRY.html) can be described directly with the RTTI method `DESCRIBE_BY_NAME`.

[Enumerated Objects, Type Description](ABENENUM_DESCRIPTION_ABEXA.html)

The following data interfaces support enumerated types:

The character-like representation of enumerated objects, that is, the result of a `c` or `string`, is used for their output and serialization. The output consists of the name with a maximum of thirty characters of the enumerated constant of the current enumerated value in uppercase. Deserializations are performed in the reverse direction. The following are supported:

A deserialization of a name of an enumerated constant is one of the few ways of creating an enumerated value from the name fully dynamically.

`WRITE` output of the enumerated constants of an enumerated structure.

Enumerated objects in data clusters. The exported enumerated object `one` as well as the normal numeric literal `2` can be imported into an enumerated variable `enum_var`. But the exported enumerated object `one` cannot be imported into a normal numeric variable using the `IMPORT` statement. It is possible to do so, with the method `DBUF_IMPORT_CREATE_DATA` of system class [`CL_ABAP_EXPIMP_UTILITIES`](ABENCL_ABAP_EXPIMP.html).

[Enumerated Objects, Deserialization](ABENENUM_DESERIALIZATION_ABEXA.html)

[CDS enumerated elements](ABENCDS_ENUM_ELEMENT_GLOSRY.html), [CDS enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html), and [host variables](ABENHOST_VARIABLE_GLOSRY.html) typed with a [CDS enumerated type](ABENCDS_ENUM_TYPE_GLOSRY.html) can be used in ABAP SQL as elementary operands (column specifications, host variables and operands of host expressions). They can also be used in cast expressions.

Host variables and operands of host expressions can have a [CDS enumerated type](ABENCDS_ENUM_TYPE_GLOSRY.html) but not an [ABAP enumerated type](ABENENUMERATED_TYPE_GLOSRY.html).

The following `SELECT` statement uses CDS enumerated elements, CDS enumerated constants, and a host variable typed with a CDS enumerated type in different operand positions.

The following example defines an enumerated variable with reference to an ABAP enumerated type. This enumerated variable cannot be used as host variable in a `SELECT` statement.

The following uses are forbidden to ensure that an enumerated object always contains only a single valid enumerated value:

If an enumerated object is provided with an invalid value due to a gap in the rules, this results in the following behavior:

An invalid value is to be regarded as an error and should never occur.

Classic [Dynpros](ABENDYNPRO_GLOSRY.html) represent a known gap. Enumerated types are not supported by dynpros. If dynpro input fields are defined by referring to enumerated objects of a program, they are handled like an object of the base type. Any invalid values are passed to the associated enumerated object at the event [PAI](ABENPAI_GLOSRY.html) without being checked. For this reason, enumerated objects should never be linked with classic dynpros.

The program `DEMO_ENUM_DYNPRO` uses an enumerated object on a dynpro. This can produce invalid values in the program.

[enum, General Use](ABENENUM_USAGE_ABEXA.html)

-   In the ABAP language, an enumerated type is defined using the following `TYPES` statements:
-   [`TYPES BEGIN OF ENUM enum_type ...`](ABAPTYPES_ENUM.html)\\
    `[TYPES val1 [VALUE IS INITIAL].](ABAPTYPES_ENUM.html)`\\
    `[TYPES val2 [VALUE val].](ABAPTYPES_ENUM.html)`\\
    `...`\\
    [`TYPES END OF ENUM enum_type ...`](ABAPTYPES_ENUM.html)
-   An enumerated type defined in ABAP can be used within the same program. Enumerated types defined as components of [interfaces (ABAP Objects)](ABENOO_INTF_GLOSRY.html) or [classes](ABENCLASS_GLOSRY.html) can be used in all ABAP programs that are allowed to access them. The definition of an enumerated type in ABAP also declares its [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html) and optionally an [enumerated structure](ABENENUMERATED_STRUCTURE_GLOSRY.html) in the context of the declaration. [Enumerated variables](ABENENUMERATED_VARIABLE_GLOSRY.html) can be declared by referring to the enumerated type.
-   In ABAP CDS, an enumerated type is defined using the following CDS TDL statement:
-   [`DEFINE TYPE ... ENUM`](ABENCDS_DEFINE_ENUM_TYPE.html)
-   Enumerated types defined in ABAP CDS can be used in all ABAP CDS objects and ABAP programs that are allowed to access them. In an ABAP program, an CDS enumerated type is handled like an ABAP enumerated type with an [enumerated structure](ABENENUMERATED_STRUCTURE_GLOSRY.html) that has the same name as the enumerated type:

-   The CDS enumerated type can be used directly for the declaration of [enumerated variables](ABENENUMERATED_VARIABLE_GLOSRY.html).
-   The enumerated structure and its components can be used in read positions.

-   The enumerated structure is implicitly created in the global context of the current ABAP program before the first read access. After its creation, it can be used like an enumerated structure defined in ABAP. Especially, it can be referred to by `LIKE` which is not possible before the access to the CDS enumerated type. In contrast to an ABAP enumeration type, the components of the enumerated structure derived from an CDS enumerated structure are ordered alphabetically instead of following the order of the definition.

-   **Enumerated variables**
-   An [enumerated variable](ABENENUMERATED_VARIABLE_GLOSRY.html) is a variable defined using
-   [`DATA enum_var TYPE enum_type ...`](ABAPDATA_ENUM.html)
-   that can contain only [enumerated values](ABENENUMERATED_VALUE_GLOSRY.html) of the enumerated type. This is ensured by the ABAP runtime framework and the rules for using enumerated types described below.
-   **Enumerated constants**
-   An [enumerated constant](ABENENUMERATED_CONSTANT_GLOSRY.html) is used to define a value in the value set of an enumerated type.

-   In ABAP, an enumerated constant is defined in the definition of an enumerated type with
-   `[TYPES val ...](ABAPTYPES_ENUM.html)`
-   under the name `val`. It exists as `val` in the context where the enumerated type is defined.
-   In ABAP CDS, an enumerated constant is defined by the syntax
-   [`EnumConstant = EnumValue`](ABENCDS_DEFINE_ENUM_TYPE.html)
-   An enumerated constant defined in ABAP CDS is handled in an ABAP program as a component of an [enumerated structure](ABENENUMERATED_STRUCTURE_GLOSRY.html) that has the name of the CDS enumerated type `EnumName`. This enumerated structure is created implicitly as an ABAP data object before a first read access.

-   An enumerated constant contains the [enumerated value](ABENENUMERATED_VALUE_GLOSRY.html) assigned in the definition. It can be specified in all read positions in which enumerated objects are possible. Its enumerated value is either determined automatically as an integer or is specified explicitly in the definition.
-   **Components of enumerated structures**
-   A component of an [enumerated structure](ABENENUMERATED_STRUCTURE_GLOSRY.html) is a special form of an enumerated constant that exists as a component of a constant structure and not as a single data object.

-   For an ABAP enumerated type, an enumerated structure `struc` can be declared optionally using
-   [`TYPES BEGIN OF ENUM enum_type STRUCTURE struc ...`](ABAPTYPES_ENUM.html)
-   Enumerated constants that are not components of an enumerated structure are elementary constants in their context.
-   For an CDS enumerated type, there is always an enumerated structure created in the ABAP program with the same name as the enumerated type `EnumName` before the first read access.

-   Enumerated constants that are components of an enumerated structure must be addressed like any structure component with a component selector ([structure component selector](ABENSTRUCTURE_COMPONENT_SEL_GLOSRY.html) (`-` or [object component selector](ABENOBJECT_COMPONENT_SELECT_GLOSRY.html)\\ `->`). The enumerated constants of a CDS enumerated type can only be accessed in ABAP as structure components. Otherwise, the same rules apply as to enumerated constants that are not components of enumerated structures.

-   Enumerated objects are mainly used to check allowed values. This usually restricts the actual parameters passed to methods to the enumerated values defined in the class.
-   The base type and the actual enumerated value are almost always ignored when enumerated objects are used. Assignments and comparisons are usually only made between enumerated objects with the same enumerated type.
-   As a rule, the base type and the actual enumerated values do not matter when enumerated objects are used. Base types other than `i` and the actual enumerated values may be significant in transformations between enumerated type or in migrations of previous concepts.
-   Enumerated structures can be used to avoid naming conflicts if there are multiple enumerated types in a namespace. In the case of enumerated structures, it is possible to use the same enumerated constant name in multiple enumerated types.
-   An enumerated type is always an elementary type independent from an enumerated structure. This is true for ABAP and especially for CDS enumerated types that are always connected to an enumerated structure.
-   Normally, an enumerated structure should not be accessed as a whole and the order of its components is not important. Otherwise, the different order in ABAP enumerated types and CDS enumerated types must be respected.

-   Read positions
-   Enumerated objects can be used in all [read positions](ABENDATA_OBJECTS_USAGE_READING.html) in which the operand type is their enumerated type or in which the operand is converted to one of the character-like types `c` or `string`. [Substring access](ABENOFFSET_LENGTH.html) is not possible.
-   Write positions
-   Enumerated variables can only be used in [write positions](ABENDATA_OBJECTS_USAGE_WRITING.html) in which the operand type is the enumerated type and only the associated enumerated values can be written. If known statically, an attempt to assign a value other than a valid enumerated value to an enumerated variable produces a syntax error. If not known statically, an exception is raised.

-   `KIND` always has the value *E* for the elementary base type
-   `TYPE_KIND` always has the value *k* as in the statement `DESCRIBE FIELD`
-   `BASE_TYPE_KIND` describes the base type
-   `MEMBERS` is a table of the enumerated constants and the associated enumerated values

-   [Data clusters](ABENDATA_CLUSTER_GLOSRY.html) with the statements [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html) and [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html). When an enumerated object is exported, the enumerated value is stored in the base type and flagged as an enumerated value. Enumerated objects and exported data objects of the base type can be imported to a suitable enumerated object (the value is checked here). No exported enumerated objects, however, can be imported to data objects of the base type with one exception: The method `DBUF_IMPORT_CREATE_DATA` of system class [`CL_ABAP_EXPIMP_UTILITIES`](ABENCL_ABAP_EXPIMP.html) creates a data object of the base type for an enumerated data object in a data buffer and imports the enumerated value into it.
-   [ABAP file interface](ABENFILE_INTERFACE_GLOSRY.html) with the statements [`TRANSFER`](ABAPTRANSFER.html) and [`READ DATASET`](ABAPREAD_DATASET.html). In writes and reads to and from a file, enumerated objects are handled like data objects of their base type. In reads from a file to an enumerated object, the system checks whether it is a valid enumerated value.
-   Serializations and deserializations from and to [XML](ABENXML_GLOSRY.html) and [JSON](ABENJSON_GLOSRY.html). The formats [asXML](ABENABAP_XSLT_ASXML_ENUM.html) and [asJSON](ABENABAP_ASJSON_ABAP_TYPES_ENUM.html) represent the content of enumerated objects in their character-like representation, that is, the name of the enumerated constant of the current enumerated value. Only valid names are allowed in deserializations to an enumerated object.
-   List output with the statement [`WRITE`](ABAPWRITE-.html). Like [`WRITE TO`](ABAPWRITE_TO.html), this statement converts an enumerated object to its character-like representation, that is, the name of the enumerated constant of the current enumerated value. The [output length](ABENWRITE_OUTPUT_LENGTH.html) corresponds to the maximum length of the name of 30 characters.

-   Within ABAP, enumerated objects are never interpreted in accordance with their base type. This means that they cannot be used in operand positions that expect numeric, character-like, or byte-like data types. The only exception to this are the operand positions in which an implicit conversion to a character-like type takes place.
-   Enumerated types are not currently supported by the [ABAP Dictionary](ABENABAP_DICTIONARY.html). Accordingly, no database tables whose columns have an enumerated type can be defined in the ABAP Dictionary.
-   In Native SQL ([`EXEC SQL`](ABAPEXEC.html), [ADBC](ABENADBC_GLOSRY.html)), no [host variables](ABENHOST_VARIABLE_GLOSRY.html) or references to ABAP variables with enumerated type can be used. The actual parameters of [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) cannot be typed using enumerated types.
-   No enumerated types are supported for the input fields of [selection screens](ABENSELECTION_SCREEN_GLOSRY.html).
-   It is not possible to inherit enumerated values from [lists in the list buffer](ABENABAP_LISTS_COMPLEX.html), since there are no conversion rules between character-like types and enumerated types.

-   The result of a conversion to `c` or `string` is the string `<illegal enum value>`, which is displayed accordingly in the ABAP Debugger.
-   An enumerated object with an invalid value can be assigned to other enumerated objects with the same enumerated type without being checked.
-   The expressions [`CONV base_type( enum_dobj )`](ABENCONV_CONSTRUCTOR_ENUM.html) and [`EXACT base_type( enum_dobj )`](ABENEXACT_CONSTRUCTOR_ENUM.html) return the invalid value.

CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n TYPES: \\n BEGIN OF ENUM size, \\n s, m, l, xl, xxl, \\n END OF ENUM size. \\n CLASS-METHODS main \\n IMPORTING size TYPE size. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD main. \\n CASE size. \\n WHEN s. \\n ... \\n WHEN m. \\n ... \\n WHEN l. \\n ... \\n WHEN OTHERS. \\n ... \\n ENDCASE. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS user DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS user IMPLEMENTATION. \\n METHOD main. \\n demo=>main( demo=>l ). \\n ENDMETHOD. \\nENDCLASS. TYPES: \\n BEGIN OF ENUM size, \\n s, m, l, xl, xxl, \\n END OF ENUM size. \\nDATA size TYPE size. \\n\\ \\nsize = xl. \\n\\ \\nFINAL(str) = s && m && l && xl && xxl. TYPES: \\n BEGIN OF ENUM size STRUCTURE sz, \\n s, m, l, xl, xxl, \\n END OF ENUM size STRUCTURE sz. \\n\\ \\nDATA size TYPE size. \\nsize = sz-xl. \\n\\ \\nDATA size\_string TYPE string. \\nsize\_string = sz-xl. TYPES: \\n BEGIN OF ENUM size, \\n s, m, l, xl, xxl, \\n END OF ENUM size. \\nDATA size TYPE size. \\n\\ \\n... \\n\\ \\nIF size = xl. \\nENDIF. \\n\\ \\n"IF size = \`XL\`. "<--- Syntax error \\n"ENDIF. \\n\\ \\nIF CONV string( size ) = \`XL\`. \\nENDIF. TYPES: \\n BEGIN OF ENUM size, \\n s, m, l, xl, xxl, \\n END OF ENUM size. \\n\\ \\nFIELD-SYMBOLS TYPE simple. \\nFIELD-SYMBOLS TYPE simple. \\n\\ \\nFINAL(size) = xl. \\n\\ \\nASSIGN size TO . \\nASSIGN size TO . \\n\\ \\n = size. \\n"size = . "<--- Syntax error \\n"ASSERT size = . "<--- Syntax error \\n\\ \\n = . \\nASSERT \= . TYPES: \\n BEGIN OF ENUM size, \\n s, m, l, xl, xxl, \\n END OF ENUM size. \\n\\ \\nDATA size TYPE size. \\n\\ \\nDO 4 TIMES. \\n size = CONV #( CONV i( size ) + 1 ). \\nENDDO. TYPES: \\n BEGIN OF ENUM size STRUCTURE sz, \\n s, m, l, xl, xxl, \\n END OF ENUM size STRUCTURE sz. \\n\\ \\nWHILE sy-subrc = 0. \\n ASSIGN sz-(sy-index) TO FIELD-SYMBOL(). \\n IF sy-subrc = 0. \\n WRITE / . \\n ENDIF. \\nENDWHILE. TYPES: \\n BEGIN OF ENUM enum, \\n zero, \\n one, \\n two, \\n END OF ENUM enum. \\n\\ \\nFINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA data\_buffer TYPE xstring. \\nEXPORT p\_enum = one p\_num = 2 TO DATA BUFFER data\_buffer. \\n\\ \\nDATA enum\_var TYPE enum. \\nTRY. \\n IMPORT p\_enum = enum\_var FROM DATA BUFFER data\_buffer. \\n DATA(subrc) = sy-subrc. \\n CATCH cx\_sy\_import\_mismatch\_error. \\n subrc = 8. \\nENDTRY. \\nIF subrc = 0. \\n out->write( enum\_var ). \\nENDIF. \\nTRY. \\n IMPORT p\_num = enum\_var FROM DATA BUFFER data\_buffer. \\n subrc = sy-subrc. \\n CATCH cx\_sy\_import\_mismatch\_error. \\n subrc = 8. \\nENDTRY. \\nIF subrc = 0. \\n out->write( enum\_var ). \\nENDIF. \\n\\ \\nDATA num TYPE i. \\nTRY. \\n IMPORT p\_enum = num FROM DATA BUFFER data\_buffer. \\n CATCH cx\_sy\_import\_mismatch\_error INTO DATA(exc1). \\n out->write( exc1->get\_text( ) ). \\nENDTRY. \\n\\ \\nTRY. \\n DATA(partab) = cl\_abap\_expimp\_utilities=>dbuf\_import\_create\_data( \\n EXPORTING \\n dbuf = data\_buffer ). \\n out->write( partab ). \\n CATCH cx\_sy\_import\_format\_error INTO DATA(exc2). \\n out->write( exc1->get\_text( ) ). \\nENDTRY. \\n\\ \\n\\ \\nout->display( ). DATA fri TYPE demo\_cds\_enum\_weekday. \\nSELECT Id, friday, EnumConstantField, @fri as HostEnum \\n FROM demo\_cds\_enum\_type\_usage\_2( \\n p1 = @demo\_cds\_enum\_char-first\_value ) \\n WHERE friday = @demo\_cds\_enum\_weekday-fri \\n ORDER BY @demo\_cds\_enum\_char-initial\_value \\n INTO TABLE @FINAL(itab). TYPES: \\n BEGIN OF ENUM abap\_wd STRUCTURE abap\_wd BASE TYPE int1, \\n mon, \\n tue, \\n wed, \\n thu, \\n fri, \\n sat, \\n sun, \\n END OF ENUM abap\_wd STRUCTURE abap\_wd. \\n\\ \\nDATA fri TYPE abap\_wd. \\n\*syntax error because host variables with an ABAP enumerated type \\n\*are not possible. \\n\*SELECT @fri AS MyEnum FROM scarr INTO TABLE @FINAL(itab). abenabap.html abenabap\_reference.html abenabap\_data\_working.html