---
title: "The short form"
description: |
  of the conversion operator `CONV` acts like It creates the value 2 from the enumerated constant `peach` of the enumerated type `fruit`, which can be assigned to the enumerated variable `animal` with enumerated type `animal`. The output shows the associated name `DOG`. The example shows the differenc
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONV_CONSTRUCTOR_ENUM.htm"
abapFile: "ABENCONV_CONSTRUCTOR_ENUM.html"
keywords: ["do", "if", "case", "data", "types", "ABENCONV", "CONSTRUCTOR", "ENUM"]
---

If the constructor expression [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) is used on [enumerated types](ABENENUM_TYPE_GLOSRY.html), the following rules apply:

In all other cases, the normal [conversion rules](ABENCONVERSION_ENUMERATED.html) apply to `CONV`, where enumerated types can only be converted to the character-like types `c` and `string` and no types can be converted to enumerated types.

**Short form:**

If the enumerated type of an enumerated object `enum_dobj` has the same base type `base_type` as any other enumerated type `enum_type` and the enumerated value in the enumerated variable is also defined in `enum_type`, it is possible, according to the above rules, to nest constructor expressions `CONV` as follows:

CONV enum\_type( CONV base\_type( enum\_dobj ) )

The following short form can also be used for the nesting:

CONV enum\_type( enum\_dobj )

The result is the enumerated value from `enum_dobj` with the data type `enum_type`.

The first three assignments to the fields `text1`, `text2`, and `text3` follow the regular [conversion rules](ABENCONVERSION_ENUMERATED.html) for enumerated type to character-like. The result in each case is the name `BLUE`.

A direct assignment of the enumerated constant `blue` to a field `value1` of type `i` is not possible. The conversion operator `CONV` returns the actual enumerated value *1* for the base type `i`.

It is also not possible to assign the value 1 of type `i` to an enumerated variable `color1` with enumerated type `color`. However, the conversion operator `CONV` returns an enumerated value for the type `color` if the operand has the base type `i` and a allowed value.

The short form

of the conversion operator `CONV` acts like

It creates the value 2 from the enumerated constant `peach` of the enumerated type `fruit`, which can be assigned to the enumerated variable `animal` with enumerated type `animal`. The output shows the associated name `DOG`.

The example shows the difference between the regular [conversion rules](ABENCONVERSION_ENUMERATED.html) and using the conversion operator `CONV` for a character-like base type:

[Conversion Operator, Enumerated Types](ABENCONV_ENUM_ABEXA.html)

-   If the operand `dobj` is an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html)\\ `enum_dobj` and `type` corresponds exactly to the [base type](ABENBASE_TYPE_GLOSRY.html)\\ `base_type` of the enumerated type, the result is the actual [enumerated value](ABENENUMERATED_VALUE_GLOSRY.html) of the operand.
-   `... CONV base_type( enum_dobj ) ...`
-   If `type` is an enumerated type `enum_type`, the following can be specified for the operand `dobj`:

-   A data object of the same elementary type as the [base type](ABENBASE_TYPE_GLOSRY.html) of the enumerated type, with any length and number of decimal places
-   An expression allowed at this position whose result can be converted to the [base type](ABENBASE_TYPE_GLOSRY.html) of the enumerated type

-   If the operand represents a valid [enumerated value](ABENENUMERATED_VALUE_GLOSRY.html), the result is a temporary [enumerated variable](ABENENUMERATED_VARIABLE_GLOSRY.html) with this value. If the value is not valid, an exception `CX_SY_CONVERSION_NO_ENUM_VALUE` occurs.
-   `... CONV enum_type( dobj ) ...`

-   Using `CONV` for enumerated types deviates from the rule that `CONV` always behaves according to the regular conversion rules in assignments.
-   If the operand is an enumerated type with a character-like [base type](ABENBASE_TYPE_GLOSRY.html), and this base type is specified as `type`, the special rule above applies instead of the general conversion rule. That is, the enumerated value is returned, not the name.
-   Corresponding [rules](ABENEXACT_CONSTRUCTOR_ENUM.html) apply to the lossless operator [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html).

-   In assignments to `result1`, the regular conversion rules apply and the name `SECOND` is assigned.
-   In assignments to `result2`, the special rule for `CONV` with the specification of the base type applies and the enumerated value *aaaaaaaa* is assigned.

TYPES: \\n BEGIN OF ENUM color, \\n red, blue, green, \\n END OF ENUM color. \\n\\ \\nDATA: text1 TYPE string, \\n text2 TYPE string. \\n\\ \\ntext1 = blue. \\ntext2 = CONV #( blue ). \\nFINAL(text3) = CONV string( blue ). \\n\\ \\nASSERT text1 = text2. \\nASSERT text1 = text3. \\n\\ \\nDATA: value1 TYPE i, \\n value2 TYPE i. \\n\\ \\n"value1 = blue. \\nvalue2 = CONV #( blue ). \\nFINAL(value3) = CONV i( blue ). \\n\\ \\nASSERT value2 = value3. \\n\\ \\nDATA: color1 TYPE color, \\n color2 TYPE color. \\n\\ \\n"color1 = 1. \\ncolor2 = CONV #( 1 ). \\nFINAL(color3) = CONV color( 1 ). \\n\\ \\nASSERT color2 = color3. \\n\\ \\ncl\_demo\_output=>display( |Name: \\{ color3 \\n \\}\\\\nValue: \\{ value3 \\}| ). CONV animal( peach ) CONV animal( CONV i( peach ) ) TYPES: \\n BEGIN OF ENUM fruit, \\n apple, peach, orange, \\n END OF ENUM fruit. \\n\\ \\nTYPES: \\n BEGIN OF ENUM animal, \\n cat, dog, cow, \\n END OF ENUM animal. \\n\\ \\ncl\_demo\_output=>display( CONV animal( peach ) ). TYPES: \\n char8 TYPE c LENGTH 8, \\n BEGIN OF ENUM text BASE TYPE char8, \\n first VALUE IS INITIAL, \\n second VALUE 'aaaaaaaa', \\n third VALUE 'bbbbbbbb', \\n END OF ENUM text. \\n\\ \\nDATA: result1 TYPE char8, \\n result2 TYPE char8. \\n\\ \\nresult1 = second. \\nresult2 = CONV #( second ). \\n\\ \\ncl\_demo\_output=>display( \\n |result1: \\{ result1 \\}\\\\nresult2: \\{ result2 \\}| ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconstructor\_expression\_conv.html