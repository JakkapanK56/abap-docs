---
title: "ABENCDS_DEFINE_ENUM_TYPE"
description: |
  ABENCDS_DEFINE_ENUM_TYPE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DEFINE_ENUM_TYPE.htm"
abapFile: "ABENCDS_DEFINE_ENUM_TYPE.html"
keywords: ["select", "insert", "delete", "do", "if", "class", "data", "types", "ABENCDS", "DEFINE", "ENUM", "TYPE"]
---

``[[`@type_annot1`](ABENCDS_ENUM_TYPE_ANNO.html)]\  [[`@type_annot2`](ABENCDS_ENUM_TYPE_ANNO.html)]\  ...    DEFINE TYPE EnumType : BaseType ENUM    \{      [@enum_annot1]\       EnumConstant1 = EnumValue1 | INITIAL;      [@enum_annot2]\       EnumConstant2 = EnumValue2 | INITIAL;      [...]\    \}  | DEFINE TYPE EnumTypeStack : EnumTypeBase[;]``

Defines a [CDS enumerated type](ABENCDS_ENUM_TYPE_GLOSRY.html)\\ `EnumType`. An enumerated type defines a set of [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html)\\ `EnumConstant1`, `EnumConstant2`, ... and each constant is assigned an [enumerated value](ABENENUMERATED_VALUE_GLOSRY.html)\\ `Enum1Value1`, `Enum1Value2`, .... [CDS enumerated elements](ABENCDS_ENUM_ELEMENT_GLOSRY.html) and [enumerated variables](ABENENUMERATED_VARIABLE_GLOSRY.html) in ABAP that are typed with a CDS enumerated type may take only one of the enumerated values. The enumerated constants and enumerated values define the set of allowed values of an enumerated type.

The statement for defining an enumerated type is `DEFINE TYPE ... ENUM`. A list of enumerated constants and enumerated values is defined in curly brackets. If an enumerated type `EnumTypeStack` is typed using another enumerated type `EnumTypeBase`, the enumerated constants are inherited automatically and the addition `ENUM` can be left out.

The name `EnumType` of a CDS enumerated type is defined after the `DEFINE TYPE` statement. It is in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP. The general rules for CDS object names described in topic [ABAP CDS - General Syntax Rules](ABENCDS_GENERAL_SYNTAX_RULES.html) apply. The name of the CDS enumerated type must be the same as the name of the source code.

The [base type](ABENBASE_TYPE_GLOSRY.html)\\ `BaseType` determines the technical storage type of the enumerated constants and the CDS enumerated elements. The following can be specified as base type:

The base type has the following effect:

**Note** The base type is the technical storage type of [CDS enumerated elements](ABENCDS_ENUM_ELEMENT_GLOSRY.html). However, in the code element information or in the debugger, the data type of CDS enumerated elements is displayed as *ENUM*.

Definition of an enumerated type `DEMO_CDS_ENUM_WEEKDAY`. The base type is `abap.int1` and the enumerated values of the enumerated constants `MON`, `TUE`, ... are 0 to 6.

The enumerated type can be used for declaring an enumerated variable `wd` in an ABAP program. By doing so, an [enumerated structure](ABENENUMERATED_STRUCTURE_GLOSRY.html) named `demo_cds_enum_weekday` is implicitly declared in the current context and can be used there. `wd` initially contains the content of the initial enumerated constant `demo_cds_enum_weekday-mon`. Note that the components of the structure are ordered alphabetically and not according to their definition.

The class `CL_DEMO_CDS_ENUM_TYPE` uses the type description class `CL_ABAP_ENUMDESCR` to return properties of the CDS enumerated type `DEMO_CDS_ENUM_WEEKDAY`.

The CDS view entity `DEMO_CDS_ENUM_2` defines two CDS enumerated elements in its `SELECT` list:

The following code snippets demonstrates access to the CDS view entity using ABAP SQL. It first inserts data into the database table `DEMO_DDIC_TYPES` and then it selects all elements from the CDS view entity. The columns `weekday` and `enumconstant` of the inline declared table `result` both have an enumerated type.

**Note** If the field *INT1* contains a value that is not contained in the list of enumerated values of the CDS enumerated type *DEMO\_CDS\_ENUM\_WEEKDAY*, a runtime error occurs.

The following CDS enumerated type `DEMO_CDS_ENUM_STACK` has the CDS enumerated type `DEMO_CDS_ENUM_WEEKDAY` as base type. It inherits the definition and the annotations of the referenced base type.

The following CDS view entity `DEMO_CDS_ENUM_TYPE_USAGE_1` uses an enumerated constant of the enumerated type as element of the `SELECT` list.

The following screenshot shows the code element information. The element typed with the enumerated type has the data type `enum(3)`.

The following CDS enumerated type `DEMO_CDS_ENUM_BOOLEAN` demonstrates how a generally available Boolean data type might look like.

The following code snippet shows its use in an ABAP program:

-   The enumerated values must comply with the base type and be within the value range of the base type.
-   The base type describes how each enumeration value of the value set is stored internally. It is part of the compatibility checks during cast expressions and in comparisons with CDS enumerated elements.
-   The base type is the technical storage type of a CDS enumerated type itself.

-   Header annotations [`@type_annot1`](ABENCDS_ENUM_TYPE_ANNO.html), [`@type_annot2`](ABENCDS_ENUM_TYPE_ANNO.html), ... can be specified in front of the statement `DEFINE TYPE`. All header annotations are optional, and an enumerated type can also be created without any header annotations.
-   Annotations for enumerated constants `enum_annot1`, `enum_annot2`, ... can optionally be specified in front of the enumerated constants to add semantic information. The following annotations are available for enumerated constants:

-   [`EndUserText.heading`](ABENCDS_ENUM_TYPE_ANNO.html)
-   [`EndUserText.label`](ABENCDS_ENUM_TYPE_ANNO.html)

-   Enumerated constants `EnumConstant1`, `EnumConstant2`, ... contain the enumerated values `EnumValue1`, `EnumValue2`, ... The data type of each constant is the enumerated type `ENUM`. Each name `EnumConstant1`, `EnumConstant2`, must follow the [naming rules](ABENCDS_GENERAL_SYNTAX_RULES.html). Most importantly, it can have up to 30 characters and each name must be unique within the enumerated type.
-   Enumerated values `EnumValue1`, `EnumValue2`, ... assign type-compliant values to the enumerated constants. Each enumerated value must be unique within the enumerated type. The order of the specified values is not important. The enumerated values are specified as [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html), and their content must be compatible with the base type of the CDS enumerated type in question.
-   The addition `INITIAL` must be specified for exactly one constant. It generates the initial value of the base type.

-   An enumerated type is always an elementary data type. Likewise, the associated type description class `CL_ABAP_ENUMDESCR` is a subclass of `CL_ABAP_ELEMDESCR`.
-   The enumerated values are specified as untyped literals. Internally, they are handled as typed literals of the base type, so the data type of the base type is used as a prefix.

-   The field `weekday` casts the field `INT1` to the CDS enumerated type `DEMO_CDS_ENUM_WEEKDAY`.
-   The field `EnumConstant` defines an enumerated constant as element in the `SELECT` list.

@EndUserText.label: 'Days of the week' \\ndefine type DEMO\_CDS\_ENUM\_WEEKDAY : abap.int1 enum \\n\\{ \\n @EndUserText.label: 'Monday' \\n MON = initial; \\n @EndUserText.label: 'Tuesday' \\n TUE = 1; \\n @EndUserText.label: 'Wednesday' \\n WED = 2; \\n @EndUserText.label: 'Thursday' \\n THU = 3; \\n @EndUserText.label: 'Friday' \\n FRI = 4; \\n @EndUserText.label: 'Saturday' \\n SAT = 5; \\n @EndUserText.label: 'Sunday' \\n SUN = 6; \\n\\} \\n\\ \\n\\ \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA wd TYPE demo\_cds\_enum\_weekday. \\n\\ \\nASSERT wd = demo\_cds\_enum\_weekday-mon. \\n\\ \\nout->write( demo\_cds\_enum\_weekday ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES my\_type TYPE demo\_cds\_enum\_weekday. \\nDATA my\_data TYPE my\_type. \\n\\ \\nFINAL(descr) = cl\_abap\_enumdescr=>describe\_by\_data( my\_data ). \\n\\ \\nout->next\_section( 'CL\_ABAP\_ENUMDESCR' ). \\n\\ \\nFINAL(enum\_descr) = CAST cl\_abap\_enumdescr( \\ncl\_abap\_typedescr=>describe\_by\_data( my\_data ) ). \\n\\ \\nout->write\_data( enum\_descr->kind \\n )->write\_data( enum\_descr->type\_kind \\n )->write\_data( enum\_descr->base\_type\_kind \\n )->write\_data( enum\_descr->members ). \\n\\ \\nout->display( ). @EndUserText.label: 'Cast to enum'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_ENUM\_2\\n as select from demo\_ddic\_types\\n\\{\\n key id,\\n int1,\\n cast(int1 as DEMO\_CDS\_ENUM\_WEEKDAY) as weekday,\\n DEMO\_CDS\_ENUM\_CHAR.#first\_value as EnumConstant\\n\\}\\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n\*fill database table \\nDELETE FROM demo\_ddic\_types. \\nINSERT demo\_ddic\_types FROM TABLE @( VALUE #( \\n ( id = 'A' int1 = 1 ) \\n ( id = 'B' int1 = 6 ) \\n\*( id = 'C' int1 = 7 ) -> runtime error. 7 is not an allowed value. \\n) ). \\n\\ \\n\*SELECT from cds view entity \\nSELECT \* \\nFROM demo\_cds\_enum\_2 \\nINTO TABLE @DATA(result). \\n\\ \\n\*display result \\nout->write( result ). \\n\\ \\nout->display( ). @EndUserText.label: 'CDS enum typed with another enum' \\ndefine type DEMO\_CDS\_ENUM\_STACK: DEMO\_CDS\_ENUM\_WEEKDAY @EndUserText.label: 'CDS view entity, enumerated types'\\n\\ndefine view entity DEMO\_CDS\_ENUM\_TYPE\_USAGE\_1\\n as select from demo\_expressions\\n\\{\\n key id as Id,\\n num1 as integer1,\\n DEMO\_CDS\_ENUM\_STACK.#FRI as friday\\n\\}\\n @EndUserText.label: 'Boolean' \\ndefine type DEMO\_CDS\_ENUM\_BOOLEAN : abap.char(1) enum \\n\\{ \\n @EndUserText.label: 'false' \\n FALSE = initial; \\n @EndUserText.label: 'true' \\n TRUE = 'X'; \\n\\} DATA gui\_flag TYPE demo\_cds\_enum\_boolean. \\n\\ \\nIF cl\_demo\_sap\_gui=>check( ). \\n gui\_flag = demo\_cds\_enum\_boolean-true. \\nELSE. \\n gui\_flag = demo\_cds\_enum\_boolean-false. \\nENDIF. **`BaseType`** **Dictionary Type**\\ `abap.int1` [`INT1`](ABENDDIC_BUILTIN_TYPES.html)\\ `abap.int2` [`INT2`](ABENDDIC_BUILTIN_TYPES.html)\\ `abap.int4` [`INT4`](ABENDDIC_BUILTIN_TYPES.html)\\ `abap.char( len )`. \\
`len` can be 1 to 8. \\ [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with length `len`. `abap.numc( len )`. \\
`len` can be 1 to 8. \\ [`NUMC`](ABENDDIC_BUILTIN_TYPES.html) with length `len`. abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_tdl.html abencds\_define\_type.html abencds\_enumeration\_types.html