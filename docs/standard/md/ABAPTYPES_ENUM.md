---
title: "ABAPTYPES_ENUM"
description: |
  ABAPTYPES_ENUM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTYPES_ENUM.htm"
abapFile: "ABAPTYPES_ENUM.html"
keywords: ["select", "loop", "do", "if", "try", "catch", "method", "class", "data", "types", "field-symbol", "ABAPTYPES", "ENUM"]
---

[Short Reference](ABAPTYPES_BEGIN_OF_ENUM_SHORTREF.html)

`TYPES: BEGIN OF ENUM enum_type                [STRUCTURE struc]\                [BASE TYPE dtype],           val1 [VALUE IS INITIAL],           val2 [VALUE val],           val3 [VALUE val],           ...         END OF ENUM enum_type                [STRUCTURE struc].`

[1. `... STRUCTURE struc`](#ABAP_ADDITION_1@3@)

[2. `... BASE TYPE dtype`](#ABAP_ADDITION_2@3@)

[3. `... VALUE \{IS INITIAL\}|val`](#ABAP_ADDITION_3@3@)

Definition of an [enumerated type](ABENENUMERATED_TYPE_GLOSRY.html)\\ `enum_type`. An enumerated type describes [enumerated variables](ABENENUMERATED_VARIABLE_GLOSRY.html), that is, elementary data objects that can only have certain [enumerated values](ABENENUMERATED_VALUE_GLOSRY.html). These values are defined in the form of [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html)\\ `val1`, `val2`, ... in the definition of the enumerated type as its value set. Enumerated variables and enumerated constants are both [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html).

The statements for defining an enumerated type are introduced with a `TYPES BEGIN OF ENUM` statement and end with a `TYPES END OF ENUM` statement. Between these are `TYPES` statements for defining the value set of the enumerated type. At least one enumerated value must be defined. No other statements are allowed.

The definition of an enumerated type includes:

Special [conversion rules](ABENCONVERSION_ENUMERATED.html) apply to enumerated types that ensure only the enumerated values defined in the enumerated type can be assigned to an [enumerated variable](ABENENUMERATED_VARIABLE_GLOSRY.html).

Definition of an enumerated type `planet` without using optional additions. The base type is `i` and the enumerated values of the enumerated constants `mercury`, `venus`, ... are 0 to 7. The enumerated variable `planet` is declared with the enumerated type `planet`. It can only be assigned the enumerated values defined in the enumerated type.

The enumerated type `number` comprises the same value set as the fixed values of the domain `DEMO_NUMBERS`. This is checked by the assignment of each domain fixed value to an enumerated variable `number` of the enumerated type `number`. The necessary [conversions](ABENCONV_CONSTRUCTOR_ENUM.html) are performed.

If the `STRUCTURE` addition is specified, no separate enumerated constant is created for each enumerated value `val1`, `val2`, .... Instead, a constant [enumerated structure](ABENENUMERATED_STRUCTURE_GLOSRY.html)\\ `struc` is declared in the namespace and validity area of the current context (procedure, class, program). The `TYPES` statements for the enumerated values `val1`, `val2`, ... define the components of the structure in the order they appear. They have the names `val1`, `val2`, ..., and each has the enumerated type `enum`. The components of the structure are special [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html).

Definition of an enumerated type `planet` using the optional `STRUCTURE` addition. This declares a constant enumerated structure `p` that can be addressed in the program, is declared with the components `mercury`, `venus`, ... with the base type `i` and the enumerated values 0 to 7. The enumerated variable `planet` is declared with the enumerated type `planet`. It can only be assigned the enumerated values declared in the enumerated type.

The `BASE TYPE` addition defines an explicit base type `dtype` for the enumerated values of the value set of the enumerated type `enum`. All built-in and user-defined flat elementary data types that are no longer than 16 bytes can be specified. This includes the following [built-in ABAP types](ABENBUILT_IN_TYPES_COMPLETE.html) and all [dictionary types](ABENDDIC_BUILTIN_TYPES_INTRO.html) that are mapped to them:

If the `BASE TYPE` addition is not specified, the base type `i` is used.

Declaration of an enumerated type `bool` in a class `boolean` with explicit specification of the base type `abap_bool` from the type pool `ABAP`. Unlike a variable of type `abap_bool`, an enumerated variable of type `boolean=>bool` can only have the enumerated values `abap_true` and `abap_false`. However, it is also not necessary to specify the base type explicitly in this example and usage of the class shown would also work with the implicit base type `i`.

The `VALUE` addition can be used to assign explicit enumerated values to the enumerated constants `val1`, `val2`, ... of the value set of the enumerated type `enum`. The `VALUE` addition must either be specified for all or for none of them. `IS INITIAL` must be specified for exactly one enumerated constant. An enumerated value `val` that matches the base type must be specified for all other enumerated constants.

The same applies to the `VALUE` addition as to the statements [`CONSTANTS`](ABAPCONSTANTS.html) and [`DATA`](ABAPDATA_OPTIONS.html):

Each enumerated value can only occur once within the value set of an enumerated type. If the `VALUE` addition is not specified, the enumerated values of the value set are set to 0, 1, 2, and so on, from left to right. If it is specified explicitly, the enumerated values do not have to be sorted by size.

In the following enumerated type, the planets are in alphabetical order. The explicit assignment of enumerated values, however, corresponds to their order in the solar system. Accordingly, the logical expression after `ASSERT` is true. The order of the components of the structure `p`, on the other hand, corresponds to the order of definition. The enumerated value is determined using the conversion operator [`CONV`](ABENCONV_CONSTRUCTOR_ENUM.html), to which a special rule applies.

-   **Name `enum_type`**.
-   The enumerated type, like any data type defined with `TYPES`, can be used with its name `enum_type`, for example, after a `TYPE` addition or in suitable [constructor expressions](ABENCONSTRUCTOR_EXPRESSIONS.html). It acts as a complete type in [typing](ABENTYPING.html) of field symbols or actual parameters.
-   **Base type**
-   The [base type](ABENBASE_TYPE_GLOSRY.html) determines the data type of the enumerated constants in the value set of the enumerated type and the technical type of enumerated variables.

-   If the `BASE TYPE` addition is not specified, the default base type is `i`.
-   The `BASE TYPE` addition can be used to explicitly define the base type; all flat elementary data types, including [CDS simple types](ABENCDS_SIMPLE_TYPE_GLOSRY.html), that are no longer than 16 bytes can be specified for `dtype`.

-   Enumerated constants
-   Each enumerated value `val1`, `val2`, ... is declared by a separate `TYPES` statement. However, it does not define a data type, and an enumerated constant that contains the enumerated value is defined instead. The data type of each constant is the enumerated type `enum`. The technical data type for the enumerated value is the base type. Each name `val1`, `val2`, ... must adhere strictly to the [naming conventions](ABENNAMING_CONVENTIONS.html).

-   If the `STRUCTURE` addition is not specified, each enumerated constant is a separate data object with the respective name `val1`, `val2`, .... The enumerated constants are declared in the namespace and validity area of the current context (procedure, class, program), and each name must be unique within the enumerated type as well as in the entire current context.
-   The `STRUCTURE` addition creates a constant structure `struc` with the components `val1`, `val2`, ... as an [enumerated structure](ABENENUMERATED_STRUCTURE_GLOSRY.html) in the current context. The enumerated values are stored in the components of this structure.

-   The individual enumerated constants or the constant enumerated structure can be [used](ABENENUMERATED_TYPES_USAGE.html) in certain read positions. In classes they belong, like all constants, to the static attributes and can be addressed accordingly using the component selectors `=>` and `->`.
-   Enumerated values
-   The enumerated values, that is, the content of the enumerated constants, are determined as follows:

-   If the `VALUE` addition is not specified, the base type must be numeric and the enumerated constants `val1`, `val2`, and so on are filled with the enumerated values 0, 1, and so on, from left to right.
-   The `VALUE` addition is used to assign explicit type-compliant enumerated values to the enumerated constants. The addition must be specified either for all or for none of the enumerated constants `val1`, `val2`, .... The `IS INITIAL` addition must be specified for exactly one constant. Each enumerated value must be unique within the enumerated type. The order of the specified values is not important. For non-numeric base types, the `VALUE` addition must be specified for each enumerated constant.

-   If `STRUCTURE` is not specified, an elementary type `enum` is declared, and a single data object is declared for each enumerated value of the value set. Each `TYPES` statement for defining an enumerated value `val` has a similar effect to a declaration.
-   `CONSTANTS val TYPE enum_type VALUE ...`
-   An enumerated type is always an elementary data type and is included in the generic type [`simple`](ABENBUILT_IN_TYPES_GENERIC.html). Likewise, the associated type description class `CL_ABAP_ENUMDESCR` is a subclass of `CL_ABAP_ELEMDESCR`.
-   The statements for defining an enumerated type are usually summarized in a [chained statement](ABENCHAINED_STATEMENT_GLOSRY.html).
-   In a [type pool](ABENTYPE_POOL_GLOSRY.html), the names of the enumerated constants, in addition to the type name `enum_type`, must have the name of the type pool as a prefix.
-   The definition of enumerated types is supported in the ABAP language and in [ABAP CDS](ABENCDS_GLOSRY.html) but not in ABAP Dictionary.

-   The definition of enumerated types in ABAP CDS is described in the topic [ABAP CDS - Enumerated Types](ABENCDS_ENUMERATION_TYPES.html).
-   Enumerated types defined in ABAP CDS can be used in ABAP programs in the same way as enumerated types defined in ABAP with an enumerated structure.
-   Enumerated types defined in ABAP CDS are represented in ABAP by an [enumerated structure](ABENENUMERATED_STRUCTURE_GLOSRY.html) with the name of the type. This structure is implicitly created as an ABAP data object in the global program context, before a CDS enumerated type is addressed for the first time in the program. After that, the CDS enumerated type can be used like an ABAP enumerated type with an enumerated structure of the same name.

-   For more information about usage, see [enumerated objects](ABENENUMERATED_TYPES_USAGE.html).

-   Enumerated types are not currently supported by classic [dynpros](ABENDYNPRO_GLOSRY.html).

-   If `STRUCTURE` is specified, an elementary type `enum` and a structured data object `struc` are declared. With regard to the structure, the `TYPES` statement has the following effect:
-   `CONSTANTS: BEGIN OF struc, val1 TYPE enum_type VALUE ... val2 TYPE enum_type VALUE ... val3 TYPE enum_type VALUE ... ... END OF struc.`
-   The structure `struc` is a data object and not a data type. It cannot be referred to by a `TYPE` addition.
-   If `STRUCTURE` is specified, the enumerated values of the enumerated type can be addressed using `struc-val1`, `struc-val2`, .... Additionally, the structure can be addressed as a whole, with the rules for structures whose components have enumerated types.
-   The enumerated type `enum` is an elementary type, even if `STRUCTURE` is specified.
-   In a [type pool](ABENTYPE_POOL_GLOSRY.html), the name of the enumerated structure, in addition to the type name `enum_type`, must have the name of the type pool as a prefix. This is not necessary for the components.
-   In a class, the enumerated structure cannot have the same name as the enumerated type.

-   All [numeric types](ABENBUILTIN_TYPES_NUMERIC.html)
-   The [character-like types](ABENBUILTIN_TYPES_CHARACTER.html)\\ `c` and `n` with a maximum length of 8, but no text strings
-   the [byte-like type](ABENBUILTIN_TYPES_CHARACTER.html)\\ `x` with a maximum length of 16, but no byte strings
-   The [date types and time types](ABENBUILTIN_TYPES_DATE_TIME.html)

-   The base type describes how each enumerated value of the value set is stored internally, but it is not the type of the associated enumerated constant that can be used in a program. Its type is the enumerated type `enum` itself.
-   If an explicitly specified base type is not numeric, the `VALUE` addition must be used for each enumerated value of the value set.
-   The explicit definition of a base type other than `i` is usually unnecessary.
-   To access an enumerated value of the value set in accordance with its representation in the base type, the conversion operator `CONV` can be used.

-   If the base type is numeric, `VALUE` can be specified.
-   If the base type is not numeric, `VALUE` must be specified.

-   `IS INITIAL` generates the initial value of the base type.
-   `val` can either be specified as a literal or as an already defined constant.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF ENUM planet, \\n mercury, \\n venus, \\n earth, \\n mars, \\n jupiter, \\n saturn, \\n uranus, \\n neptune, \\n END OF ENUM planet. \\n\\ \\nDATA planet type planet. \\n\\ \\nplanet = earth. \\n\\ \\nout->write( planet ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF ENUM number, \\n n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, \\n END OF ENUM number. \\n\\ \\nDATA doma\_values TYPE TABLE OF dd07v. \\nCALL FUNCTION 'DD\_DOMVALUES\_GET' \\n EXPORTING \\n domname = 'S\_NUMBERS' \\n TABLES \\n dd07v\_tab = doma\_values. \\n\\ \\nTRY. \\n LOOP AT doma\_values INTO FINAL(doma\_value). \\n FINAL(number) = CONV number( CONV i( doma\_value-domvalue\_l ) ). \\n ENDLOOP. \\n CATCH cx\_sy\_conversion\_no\_enum\_value. \\n out->write( \\n |\\{ doma\_value-domvalue\_l \\} does not match| ). \\nENDTRY. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF ENUM planet STRUCTURE p, \\n mercury, \\n venus, \\n earth, \\n mars, \\n jupiter, \\n saturn, \\n uranus, \\n neptune, \\n END OF ENUM planet STRUCTURE p. \\n\\ \\nDATA planet type planet. \\n\\ \\nplanet = p-earth. \\n\\ \\nout->write( planet ). \\n\\ \\nout->write( p ). \\n\\ \\nout->display( ). CLASS boolean DEFINITION. \\n PUBLIC SECTION. \\n TYPES: \\n BEGIN OF ENUM bool BASE TYPE abap\_boolean, \\n false VALUE IS INITIAL, \\n true VALUE abap\_true, \\n END OF ENUM bool. \\nENDCLASS. \\n\\ \\nCLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main \\n IMPORTING p TYPE any \\n RETURNING VALUE(bool) TYPE boolean=>bool. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD main. \\n bool = COND #( WHEN p IS INITIAL THEN boolean=>false \\n ELSE boolean=>true ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n IF demo=>main( 1 ). \\n out->write( |True| ). \\n ENDIF. \\n IF NOT demo=>main( ' ' ). \\n out->write( |False| ). \\n ENDIF. \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF ENUM planet STRUCTURE p, \\n earth VALUE 20, \\n jupiter VALUE 40, \\n mars VALUE 30, \\n mercury VALUE IS INITIAL, \\n neptune VALUE 70, \\n saturn VALUE 50, \\n uranus VALUE 60, \\n venus VALUE 10, \\n END OF ENUM planet STRUCTURE p. \\n\\ \\nASSERT p-mercury < p-venus AND \\n p-venus < p-earth AND \\n p-earth < p-mars AND \\n p-mars < p-jupiter AND \\n p-jupiter < p-saturn AND \\n p-saturn < p-uranus AND \\n p-uranus < p-neptune. \\n\\ \\nDO. \\n ASSIGN p-(sy-index) TO FIELD-SYMBOL(). \\n IF sy-subrc <> 0. \\n EXIT. \\n ENDIF. \\n out->write( \\n |Name: \\{ && \`,\` WIDTH = 8 \\} Value: \\{ CONV i( ) \\}| ). \\nENDDO. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html