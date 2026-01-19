---
title: "Absolute type names for a"
description: |
  The path consists of one component only. The absolute type names of global types are retrieved with RTTI(ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html). The output is Absolute type name for a data type `type_name` defined in a global class or a global interface. `clif` must be one of the following: Th
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTYPE_NAMES.htm"
abapFile: "ABENTYPE_NAMES.html"
keywords: ["select", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "ABENTYPE", "NAMES"]
---

`\\TYPE=type_ name[\\LINE][-comp]`\\
`| \\CLASS=class_name`\\
`| \\INTERFACE=intf_name`

`\\clif\\TYPE=type_ name[\\LINE][-comp]`

`\\prog\\TYPE=type_ name[\\LINE][-comp]`\\
`| \\prog\\CLASS=class_name`\\
`| \\prog\\INTERFACE=intf_name`

`\\prog\\clif\\TYPE=type_ name[\\LINE][-comp]`

`\\clif\\meth\\TYPE=type_ name[\\LINE][-comp]`\\
`| \\prog\\clif\\meth\\TYPE=type_ name[\\LINE][-comp]`\\
`| \\prog\\proc\\TYPE=type_ name[\\LINE][-comp]`

[1. `Global Context`](#ABAP_ALTERNATIVE_1@2@)

[2. `Global Class/Interface Context`](#ABAP_ALTERNATIVE_2@2@)

[3. `Program Context`](#ABAP_ALTERNATIVE_3@2@)

[4. `Local Class/Interface Context`](#ABAP_ALTERNATIVE_4@2@)

[5. `Procedure Context`](#ABAP_ALTERNATIVE_5@2@)

[`... [\\LINE][-comp]`](#ABAP_ONE_ADD@1@)

Absolute type names are [character strings](ABENCHARACTER_STRING_GLOSRY.html) that uniquely specify a user-defined [data type](ABENDATA_TYPE_GLOSRY.html) in its [context](ABENOBJ_CONTEXT_GLOSRY.html). Absolute type names can be composed from scratch or obtained from [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html) and used in dynamic type specifications.

An absolute type name is composed of the following components that must form a path specification leading to a data type named `type_name`, a class named `class_name` or an interface named `intf_name`:

The last component of a path must always be one of the following:

The following sections explain the usage of these components for composing path expressions for different contexts.

Absolute type names can be used in all statements in which dynamic specification of a data type, a class, or an interface is possible. The case sensitivity depends on the statement.

Composing an absolute type name for a data type defined in a method of a local class. The type name is used for creating an anonymous data object. The absolute type name of the anonymous data object retrieved by [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html) is *\\\\PROGRAM=...\\\\CLASS=CLS\\\\METHOD=METH\\\\TYPE=C100* and matches the composed one.

When the methods `m1` and `m2` of the class `c1` are called in the following example, the RTTS return the absolute type names `\\TYPE=SPFLI` or `\\PROGRAM=...\\CLASS=CLS\\METHOD=M2\\TYPE=SPFLI` for the generically typed parameter `p`. The use of the name `spfli` has a different meaning in the methods `m1` and `m2`. This is also indicated by a syntax check warning.

Absolute type names for a

The path consists of one component only.

The absolute type names of global types are retrieved with [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html). The output is

Absolute type name for a data type `type_name` defined in a global class or a global interface. `\\clif` must be one of the following:

The absolute type names of types defined in an interface and a class are retrieved with [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html). The output is

Absolute type name for a class `class_name`, an interface `intf_name` or data type `type_name` defined in the [global declaration part](ABENGLOBAL_DECLARATION_SECT_GLOSRY.html) of a program. `\\prog` must be one of the following:

Both absolute type names denote the type `char10` defined in the [CCDEF include](ABENCCDEF_GLOSRY.html) of the global class `CL_DEMO_CLASS_POOL`.

The [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html) method returns a path with `\\CLASS_POOL` in both cases.

Absolute type name for a data type `type_name` defined in a local class or interface of a program. The same applies to `\\prog` as in the previous alternative. `\\clif` must be one of the following:

Absolute type names are used

The method `meth` of this class is called dynamically, where the anonymous data object serves as an actual parameter with the correct type. Note the different case sensitivity when creating data objects and instances of classes.

The absolute type name for the [test class](ABENTEST_CLASS_GLOSRY.html)\\ `TEST_DEMO` of the class pool cannot be used for creating an object. Instead, an exception is raised.

Absolute type name for a data type `type_name` defined in a [procedure](ABENPROCEDURE_GLOSRY.html).

The specification of a function pool for a type in a function module can be omitted because each function module is unique.

Absolute type names for types defined in methods. The first method is a component of the global class `CL_DEMO_CLASS_POOL`. The second method is a component of a local class defined in the [CCIMP include](ABENCCIMP_GLOSRY.html) of its class pool.

If a path is terminated with `\\TYPE=type_name`, the [line type](ABENROW_TYPE_GLOSRY.html) of an internal table type or the data type of a component of a structured type can be specified as follows:

`\\LINE` and `-comp` cannot be used behind [technical type names](ABENTECHNICAL_TYPE_NAME_GLOSRY.html) of data types that only exist as a [bound data type](ABENBOUND_DATA_TYPE_GLOSRY.html) of a data object.

The specification `\\LINE` is more like a component selector than a component of the path. It does not precede `=type_name` but follows it in the same way as the structure component selector `-comp`.

Using the type names of structured and tabular data objects to compose absolute type names for a structure component and a table line. While the absolute names retrieved from data objects `struc` and `itab1` contain the complete types `struc` and `itab1` of the program, the absolute name retrieved from `itab2` contains the [technical type name](ABENTECHNICAL_TYPE_NAME_GLOSRY.html) of this internal table. Since the data type `itab2` is generic (no key definition), a complete type with the standard key is constructed with the `DATA` statement as a [bound data type](ABENBOUND_DATA_TYPE_GLOSRY.html). Its technical type name cannot be used with `\\LINE` and an exception is raised.

[Absolute Type Names](ABENABS_TYPE_NAMES_ABEXA.html)

Global Context

Global Class/Interface Context

Program Context

Local Class/Interface Context

Procedure Context

-   `\\TYPE=type_name[\\LINE][-comp]`
-   Specifies a [data type](ABENDATA_TYPE_GLOSRY.html)\\ `type_name` optionally followed by

-   `\\LINE` to specify the [line type](ABENROW_TYPE_GLOSRY.html) of an [internal table](ABENINTERNAL_TABLE_GLOSRY.html) type
-   `-comp` to specify the data type of a [component](ABENSTRUCTURE_COMPONENT_GLOSRY.html) of a [structured type](ABENSTRUCTURED_TYPE_GLOSRY.html)

-   `\\CLASS=class_name`
-   Specifies a [class](ABENCLASS_GLOSRY.html)\\ `class_name`.
-   `\\INTERFACE=intf_name`
-   Specifies an [interface](ABENOO_INTF_GLOSRY.html)\\ `intf_name`.
-   `\\PROGRAM=prog_name`
-   Specifies an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html)\\ `prog_name`.
-   `\\CLASS-POOL=class_name`
-   Specifies the [class pool](ABENCLASS_POOL_GLOSRY.html) of a class `class_name`.
-   `\\FUNCTION-POOL=fp_name`
-   Specifies a [function pool](ABENFUNCTION_POOL_GLOSRY.html)\\ `fp_name`.
-   `\\METHOD=meth_name`
-   Specifies a [method](ABENMETHOD_GLOSRY.html)\\ `meth_name`.
-   `\\FUNCTION=func_name`
-   Specifies a [function module](ABENFUNCTION_MODULE_GLOSRY.html)\\ `func_name`.

-   `\\TYPE=type_name[\\LINE][-comp]`
-   `\\CLASS=class_name`
-   `\\INTERFACE=intf_name`

-   Absolute type names provide an alternative to the regular type names that can be used statically in ABAP statements for user-defined (i.e. not built-in) types. Those type names are [relative type names](ABENRELATIVE_TYPE_NAME_GLOSRY.html) that are only valid in relation to their context. For example, a type name `my_type` defined with `TYPES` in a context can be only be used within this context to address the respective type. The same applies to classes and interfaces. Refer also to [Validity and Visibility](ABENLIFETIME_AND_VISIBILITY.html).
-   Usage types for absolute type names are:

-   Access to global types that are hidden by local types
-   Access to data types, classes, and interfaces of other programs. When a different program is accessed, it is loaded into the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html) if required.

-   A data type is uniquely identified by its absolute type name. However, there are different ways of forming a unique path for a type.
-   A data type that only exists as a [bound data type](ABENBOUND_DATA_TYPE_GLOSRY.html) of a data object and, therefore, does not have a relative type name, has an internal [technical type name](ABENTECHNICAL_TYPE_NAME_GLOSRY.html). Such a technical type name can also be part of an absolute type and can be retrieved by [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html). In the ABAP language version [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html) it cannot be used in dynamic type specifications.

-   data type `type_name` from the ABAP Dictionary or ABAP CDS
-   global class `class_name` from the class library
-   global interface `intf_name` from the class library

-   `\\CLASS=class_name`, name of the global class
-   `\\INTERFACE=intf_name`, name of the global interface

-   `\\PROGRAM=prog_name`
-   For `prog_name`, any technical program name that denotes a [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html) can be used. The names of [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) cannot be used.
-   `\\CLASS-POOL=class_name`
-   For `class_name`, any global class can be used. The specified program is the [class pool](ABENCLASS_POOL_GLOSRY.html) of that class. The local classes, interfaces and data types as well as the global class of the class pool can be specified.
-   `\\FUNCTION-POOL=fp_name`
-   For `fp_name`, any [function pool](ABENFUNCTION_POOL_GLOSRY.html) (without the prefix `SAPL`) can be used.

-   Besides `class_name` or `\\fp_name`, the technical name `prog_name` of the ABAP program can also be specified behind `\\PROGRAM` for classes, interfaces, and data types in a [class pool](ABENCLASS_POOL_GLOSRY.html) or [function pool](ABENFUNCTION_POOL_GLOSRY.html). Since the latter is usually not known, it is recommended that `\\CLASS-POOL` or `\\FUNCTION-POOL` are used.
-   Since an [interface pool](ABENINTERFACE_POOL_GLOSRY.html) cannot contain definitions outside its global interface, it cannot be specified by `\\INTERFACE-POOL`. In order to address the global interface and its components, `\\INTERFACE` can be used. The technical name of the interface pool can be used behind `\\PROGRAM`, but this is not recommended.
-   Access to [test classes](ABENTEST_CLASS_GLOSRY.html) using absolute type names is not allowed.
-   Absolute names of [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) have a [specific pattern](ABAPDERIVED_TYPES_DYNAMIC.html).

-   The first one uses `\\CLASS_POOL` with the name of the global class.
-   The second one uses `\\PROGRAM` with the technical name of the class pool.

-   `\\CLASS=class_name`, name of the local class
-   `\\INTERFACE=intf_name`, name of the local interface

-   to create an anonymous data object with a type defined in a local class `demo` of the [CCIMP include](ABENCCIMP_GLOSRY.html) of the global class
-   to create an object of this local class.

-   `\\clif\\meth` specifies a method in a global class or interface. The same applies to `\\clif` as for the respective alternative. `\\meth` must be:

-   `\\METHOD=meth_name`

-   `\\prog\\clif\\meth` specifies a method in a local class or interface. The same applies to `prog\\clif` as for the respective alternative. `\\meth` must be:

-   `\\METHOD=meth_name`

-   `\\prog\\proc` specifies a function module defined in a program.
-   `\\prog` can be one of the following:

-   `\\PROGRAM=prog_name`
-   `\\FUNCTION-POOL=fp_name`

-   `\\proc` can be one of the following:

-   `\\FUNCTION=func_name`

-   `\\LINE`
-   If the data type denoted by `type_name` is an [internal table](ABENINTERNAL_TABLE_GLOSRY.html) type, its [line type](ABENROW_TYPE_GLOSRY.html) can be specified by `\\LINE`.
-   `-comp`
-   If the data type denoted by `type_name` or the line type denoted by `\\LINE` is structured, the type of one of its components can be specified by `-comp` where `comp` is the component name.

CLASS cls DEFINITION. \\n PUBLIC SECTION. \\n METHODS meth. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD meth. \\n TYPES c100 TYPE c LENGTH 100. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n DATA dref TYPE REF TO data. \\n\\ \\n DATA(type\_name) = \\n \`\\\\PROGRAM=\` && sy-repid && \\n \`\\\\CLASS=cls\` && \\n \`\\\\METHOD=meth\` && \\n \`\\\\TYPE=c100\`. \\n\\ \\n TRY. \\n CREATE DATA dref TYPE (type\_name). \\n dref->\* = 'Success'. \\n out->write( dref ). \\n CATCH cx\_sy\_create\_data\_error INTO DATA(exc). \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n out->write( \\n cl\_abap\_typedescr=>describe\_by\_data( dref->\* )->absolute\_name ). \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. CLASS cls DEFINITION. \\n PUBLIC SECTION. \\n METHODS: m1, \\n m2, \\n m3 IMPORTING p TYPE any. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD m1. \\n DATA struc TYPE spfli. \\n m3( struc ). \\n ENDMETHOD. \\n METHOD m2. \\n TYPES spfli TYPE spfli ##SHADOW\[SPFLI\]. \\n DATA struc TYPE spfli. \\n m3( struc ). \\n ENDMETHOD. \\n METHOD m3. \\n DATA type\_descr TYPE REF TO cl\_abap\_typedescr. \\n type\_descr = cl\_abap\_typedescr=>describe\_by\_data( p ). \\n cl\_demo\_output=>write( type\_descr->absolute\_name ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD main. \\n DATA(ref) = NEW cls( ). \\n ref->m1( ). \\n ref->m2( ). \\n cl\_demo\_output=>display( ). \\n ENDMETHOD. \\nENDCLASS. \\\\TYPE=SCARR \\n\\\\TYPE=DEMO\_CDS\_NULL \\n\\\\CLASS=CL\_ABAP\_DOCU \\n\\\\INTERFACE=IF\_ABAP\_DOCU FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nout->write( cl\_abap\_typedescr=>describe\_by\_name( 'SCARR' \\n )->absolute\_name \\n )->write( cl\_abap\_typedescr=>describe\_by\_name( 'DEMO\_CDS\_NULL' \\n )->absolute\_name \\n )->write( cl\_abap\_typedescr=>describe\_by\_name( 'CL\_ABAP\_DOCU' \\n )->absolute\_name \\n )->write( cl\_abap\_typedescr=>describe\_by\_name( 'IF\_ABAP\_DOCU' \\n )->absolute\_name ). \\n\\ \\nout->display( ). \\\\INTERFACE=IF\_DEMO\_INTERFACE\_POOL\\\\TYPE=CHAR20 \\n\\\\CLASS=CL\_DEMO\_CLASS\_POOL\\\\TYPE=CHAR20 FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: \\n text1 TYPE if\_demo\_interface\_pool=>char20, \\n text2 TYPE cl\_demo\_class\_pool=>char20. \\n\\ \\nout->write( \\n cl\_abap\_typedescr=>describe\_by\_data( text1 \\n )->absolute\_name \\n )->write( \\n cl\_abap\_typedescr=>describe\_by\_data( text2 \\n )->absolute\_name ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA dref TYPE REF TO data. \\n\\ \\nDATA(type\_name) = \`\\\\CLASS-POOL=cl\_demo\_class\_pool\\\\TYPE=char10\`. \\nCREATE DATA dref TYPE (type\_name). \\nout->write( \\ncl\_abap\_typedescr=>describe\_by\_data( \\n dref->\* )->absolute\_name ). \\n\\ \\ntype\_name = \`\\\\PROGRAM=cl\_demo\_class\_pool============cp\\\\TYPE=char10\`. \\nCREATE DATA dref TYPE (type\_name). \\nout->write( \\ncl\_abap\_typedescr=>describe\_by\_data( \\n dref->\* )->absolute\_name ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA dref TYPE REF TO data. \\nDATA oref TYPE REF TO object. \\n\\ \\nFINAL(type\_name) = \\n \`\\\\CLASS-POOL=cl\_demo\_class\_pool\\\\CLASS=DEMO\\\\TYPE=char30\`. \\nCREATE DATA dref TYPE (type\_name). \\n\\ \\nDATA(class\_name) = \\n \`\\\\CLASS-POOL=CL\_DEMO\_CLASS\_POOL\\\\CLASS=DEMO\`. \\nCREATE OBJECT oref TYPE (class\_name). \\n\\ \\nCALL METHOD oref->('METH') \\n RECEIVING \\n text = dref->\*. \\nout->write( dref->\* ). \\n\\ \\nTRY. \\n class\_name = \\n \`\\\\CLASS-POOL=CL\_DEMO\_CLASS\_POOL\\\\CLASS=TEST\_DEMO\`. \\n CREATE OBJECT oref TYPE (class\_name). \\n CATCH cx\_sy\_create\_object\_error INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA dref TYPE REF TO data. \\n\\ \\nDATA(type\_name) = \`\\\\CLASS=cl\_demo\_class\_pool\\\\METHOD=meth\\\\TYPE=char10\`. \\nCREATE DATA dref TYPE (type\_name). \\nout->write( \\ncl\_abap\_typedescr=>describe\_by\_data( \\n dref->\* )->absolute\_name ). \\n\\ \\ntype\_name = \\n \`\\\\CLASS-POOL=cl\_demo\_class\_pool\\\\CLASS=demo\\\\METHOD=meth\\\\TYPE=char16\`. \\nCREATE DATA dref TYPE (type\_name). \\nout->write( \\ncl\_abap\_typedescr=>describe\_by\_data( \\n dref->\* )->absolute\_name ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES struc TYPE scarr. \\nTYPES itab1 TYPE TABLE OF scarr WITH EMPTY KEY. \\nTYPES itab2 TYPE TABLE OF scarr. \\n\\ \\nDATA struc TYPE struc. \\nDATA itab1 TYPE itab1. \\nDATA itab2 TYPE itab2. \\n\\ \\nDATA dref TYPE REF TO data. \\n\\ \\nFINAL(comp\_type) = \\n cl\_abap\_typedescr=>describe\_by\_data( struc \\n )->absolute\_name && '-carrid'. \\nTRY. \\n CREATE DATA dref TYPE (comp\_type). \\n out->write( 'Data object with type of component created' ). \\n CATCH cx\_sy\_create\_data\_error INTO DATA(exc). \\n out->write( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\nFINAL(line\_type1) = \\n cl\_abap\_typedescr=>describe\_by\_data( itab1 \\n )->absolute\_name && '\\\\LINE'. \\nTRY. \\n CREATE DATA dref TYPE (line\_type1). \\n out->write( 'Data object with type of table line created' ). \\n CATCH cx\_sy\_create\_data\_error INTO exc. \\n out->write( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\nFINAL(line\_type2) = \\n cl\_abap\_typedescr=>describe\_by\_data( itab2 \\n )->absolute\_name && '\\\\LINE'. \\nTRY. \\n CREATE DATA dref TYPE (line\_type2). \\n out->write( 'Data object with type of table line created' ). \\n CATCH cx\_sy\_create\_data\_error INTO exc. \\n out->write( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abentypes\_and\_objects.html