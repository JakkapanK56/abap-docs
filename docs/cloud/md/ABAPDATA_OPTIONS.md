---
title: "ABAPDATA_OPTIONS"
description: |
  ABAPDATA_OPTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDATA_OPTIONS.htm"
abapFile: "ABAPDATA_OPTIONS.html"
keywords: ["select", "do", "while", "if", "case", "method", "class", "data", "types", "internal-table", "field-symbol", "ABAPDATA", "OPTIONS"]
---

`... [ VALUE val|\{IS INITIAL\}\ ]\      [ READ-ONLY ].`

[1. `... VALUE val|\{IS INITIAL\}`](#ABAP_ADDITION_1@3@)

[2. `... READ-ONLY`](#ABAP_ADDITION_2@3@)

The additions `VALUE` and `READ-ONLY` are specifically for data objects and distinguish the `DATA` syntax from the `TYPES` syntax.

The addition `VALUE` can be used to define a [start value](ABENSTART_VALUE_GLOSRY.html)\\ `val` for the content of a variable for all forms of the variable declaration. This value is used to initialize the variable when it is created before [`LOAD-OF-PROGRAM`](ABAPLOAD-OF-PROGRAM.html). The addition `VALUE` is not allowed in the declaration part of an interface for the statement `DATA`.

The start value `val` can either be specified as a literal or as a constant. Constants, rather than using the actual value, work like the literal that is specified after `VALUE` when it is declared. If the data type of the literal does not match the data type of the declaration, it is usually converted in accordance with the [conversion rules](ABENCONVERSION_ELEMENTARY.html) for elementary data types during program generation when the program is activated. If the literal cannot be converted to the data type, an exception is raised when the program is generated instead.

Without the addition `VALUE`, or if `IS INITIAL` is specified, the content is initial. The [initial values](ABENINITIAL_VALUE_GLOSRY.html) depend on the data type.

The initial values of elementary types are dependent on the [built-in ABAP types](ABENBUILT_IN_TYPES_COMPLETE.html). In the case of initial structures, the components are initial, initial reference variables contain the [null reference](ABENNULL_REFERENCE_GLOSRY.html), which does not point to an object, and initial internal tables do not contain any lines.

The addition `VALUE` is possible for all data types, particularly for the [deep](ABENDEEP_GLOSRY.html) types (strings, reference types, table types, or structured types with deep components, including [boxed components](ABENBOXED_COMPONENT_GLOSRY.html)). A start value `val`, however, can only be specified for the ABAP types `string` and `xstring`. Otherwise, only `IS INITIAL` is possible. `IS INITIAL` is also the only possible start value for structures with non-character-like and flat components.

Declaration of data by specifying the initial value, where one value is specified by a constant.

The following example demonstrates that if a constant is used after `VALUE`, the literal that is specified after the `VALUE` addition of the constant declaration is evaluated. The variable `text1` is given the full content of the literal while the variable `text2` is assigned the value of the constant that contains only the digits of the literal and any leading zeros in accordance with the [conversion rule](ABENCHARACTER_SOURCE_FIELDS.html) from `c` to `n`.

This addition is always possible in the [public](ABENPUBLIC_GLOSRY.html) visibility section class or in an interface. This addition ensures that an attribute declared using `DATA` can be read from outside of the class but can only be changed using methods of the class or its subclasses. This addition has no effect on the [friends](ABENFRIEND_GLOSRY.html) of the class.

A class attribute defined using `READ-ONLY` can be used outside of the class, its friends, and subclasses only in [read positions](ABENREAD_POSITION_GLOSRY.html) in ABAP statements.

Use of the static constructor as the factory method of a class with instances created privately. The reference to the created singleton objects is available in the `READ-ONLY` attribute `clsref`.

-   A start value should be specified according to type. In particular, no values that are longer can be specified and, in the case of certain data types such as `d` and `t`, the length must match exactly.
-   If numbers with [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) are specified or specified as a start value for data objects of the data types `p` or `f` in scientific notation with mantissa and exponents, it should be ensured that there are no literals for these numbers. Instead, the character literals must be specified with the appropriate content. These are then converted into the numeric data type in accordance with the conversion rules for elementary data types. The same applies to byte-like data objects.
-   If the data object is character-like, the [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html)\\ `val1`, `val2`, ... of the value set of an [enumerated type](ABAPTYPES_ENUM.html)\\ `enum` can also be specified for `val`. The constant then is given the name of the enumerated constant as its value.
-   The [value operator](ABENVALUE_OPERATOR_GLOSRY.html)\\ [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) can also be used to construct the content of complex data objects (structures, internal tables).
-   In the [declaration part](ABENDECLARATION_PART_GLOSRY.html) of [global classes](ABENGLOBAL_CLASS_GLOSRY.html) the character representation of default values is limited to 132 characters. When you work in [ADT](ABENABAP_DEV_ENVIR_GLOSRY.html), exceeding characters will not be truncated. However, a syntax warning appears.

-   If a read-only attribute is a [reference variable](ABENREFERENCE_VARIABLE_GLOSRY.html), the read-only property concerns the [reference](ABENREFERENCE_GLOSRY.html) but not the content of the object referred by the reference. A read-only reference variable followed by the [object component selector](ABENOBJECT_COMPONENT_SELECT_GLOSRY.html) (`->`) can be used in [write positions](ABENWRITE_POSITION_GLOSRY.html).
-   The declaration of attributes using the addition `READ-ONLY` does not prevent methods of the class from passing [references](ABENREFERENCE_GLOSRY.html) to these attributes externally as [reference variables](ABENREFERENCE_VARIABLE_GLOSRY.html) or [field symbols](ABENFIELD_SYMBOL_GLOSRY.html) and therefore making the attributes modifiable outside of the class.
-   The addition `READ-ONLY` is always recommended if attributes need to be invisible, but a `GET` method is not executed for every read for performance reasons.

CONSTANTS underscores TYPE string VALUE \`\_\_\_\_\_\_\_\_\_\_\`. \\n\\ \\nDATA: \\n num TYPE i VALUE 123, \\n txt TYPE string VALUE underscores, \\n hex TYPE xstring VALUE \`0123456789ABCDEF\`. \\ \\nCONSTANTS \\n const TYPE n LENGTH 10 VALUE 'x1x1x1x'. \\n\\ \\nTYPES \\n text TYPE c LENGTH 10. \\n\\ \\nDATA: \\n text1 type text VALUE const, \\n text2 TYPE text. \\n\\ \\ntext2 = const. \\n\\ \\ncl\_demo\_output=>display( \\n |text1: \\{ text1 \\}\\\\ntext2: \\{ text2 \\}| ). CLASS cls DEFINITION CREATE PRIVATE. \\n PUBLIC SECTION. \\n CLASS-DATA clsref TYPE REF TO cls READ-ONLY. \\n CLASS-METHODS \\n class\_constructor. \\n ... \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD class\_constructor. \\n IF clsref IS INITIAL. \\n clsref = NEW #( ). \\n ENDIF. \\n ENDMETHOD. \\n ... \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html abapdata.html