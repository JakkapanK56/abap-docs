---
title: "ABAPMOVE"
description: |
  ABAPMOVE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMOVE.htm"
abapFile: "ABAPMOVE.html"
keywords: ["loop", "do", "if", "case", "method", "data", "types", "internal-table", "field-symbol", "ABAPMOVE"]
---

`destination = dobj.`

In the simplest assignment case, a data object `dobj` is on the right side of the [assignment operator `=`](ABENEQUALS_OPERATOR.html) and can be specified as described under [Read Positions](ABENDATA_OBJECTS_USAGE_READING.html). The content of the data object is assigned to the left side, `destination`. If necessary, type-dependent conversions are made in accordance with the [conversion rules](ABENCONVERSION_RULES.html). The variant shown here applies to all assignments between operands that are not reference variables. Special [rules](ABAPMOVE_CAST.html) apply to reference variables.

The following can be specified for `destination`:

Assignment of a literal to a text string.

Assignment of a generically typed field symbol, `<fs>`, to a data object, `number`, declared inline. In the assignment, the field symbol has the type `i` but the field `number` is already created with the type `decfloat34` when the program is generated. A syntax check warning about this is hidden using the pragma `##type`.

`CX_SY_CONVERSION_NO_NUMBER`

`CX_SY_CONVERSION_OVERFLOW`

-   Any data object that can be specified in a [write position](ABENWRITE_POSITION_GLOSRY.html). The data type of the data object must be either [compatible](ABENCOMPATIBLE_GLOSRY.html) with the data type of `dobj` or the content of `dobj` must be convertible to the data type of `destination` in accordance with one of the [conversion rules](ABENCONVERSION_RULES.html).
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). If the data type of `dobj` is complete, it is used for the declaration. If `dobj` is a generically typed field symbol or a formal parameter of this type, the following data types are used:

-   `string` for `csequence` and `clike`
-   `xstring` for `xsequence`
-   `decfloat34` for `numeric` and `decfloat`
-   `p` with the length 8 and no decimal places if `p` is generic
-   The [standard key](ABENSTANDARD_KEY_GLOSRY.html) for a standard table type with generic primary table key
-   Generic data types other than table types that are explicitly generic with respect to their secondary table keys cannot be made more concrete and produce a syntax error.

-   An [offset/length specification](ABENOFFSET_LENGTH.html) can be applied to `dobj`. If `dobj` has a data type of fixed length, `off` and `len` must be literals or constants. Variables are not allowed. The data type used for the declaration is the data type of the substring as described for [offset/length specifications](ABENOFFSET_LENGTH.html).

-   The special assignment operator [?=](ABAPMOVE_CAST.html) performs [downcasts](ABENDOWN_CAST_GLOSRY.html) and is available for [assignments of reference variables](ABENREFERENCE_ASSIGNMENTS.html).
-   If `dobj` and/or `destination` are field symbols, the content of the data objects to which the field symbols point is used as in all ABAP statements. The actual pointer content of a field symbol can only be changed using the statement [`ASSIGN`](ABAPASSIGN.html) or the addition `ASSIGNING` when processing internal tables ([value semantics](ABENVALUE_SEMANTICS_GLOSRY.html)).
-   Inline declarations are not possible for every conceivable generic type of `dobj`. This is because the rules for deriving the used data type apply even in an inline declaration at the position of an actual parameter for a generically typed output parameter of a method apply. Here, the typing check allows fewer combinations than the conversion rules of an assignment.
-   If an internal table with a [header line](ABENHEADER_LINE_GLOSRY.html) is specified as an operand of an assignment, in nearly all [operand positions](ABENOPERANDS_DATA_OBJECTS.html), the header line is addressed and not the [table body](ABENTABLE_BODY_GLOSRY.html). To address the table body of a table with a header line, `[]` must be appended to the table name.
-   Strings and internal tables are addressed internally using references. When assignments are made between strings and between internal tables of the same type (if the line types themselves do not contain any table types), only the internal administrative information is passed for performance reasons. After the assignment, the actual string or the actual [table body](ABENTABLE_BODY_GLOSRY.html) is addressed by the source object as well as the target object ([sharing](ABENSHARING_GLOSRY.html)). Sharing is only removed when the data object is accessed to be changed and a copy of the content is made. The sharing is shown in the memory consumption display of the ABAP Debugger. For internal tables whose line type itself contains internal table types, no sharing takes place. Sharing can, however, take place for the subtables of a certain line type.
-   The sharing is also shown in the [Memory Inspector](ABENMEMORY_INSPECTOR_GLOSRY.html) tool.
-   The statement [`MOVE`](ABAPMOVE_OBS.html) is an obsolete way of assigning data objects.

-   *Cause:* Operand cannot be interpreted as number when assigned to a [numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html)\\
    *Runtime error:*\\ `CONVT_NO_NUMBER`

-   *Cause:* Overflow in arithmetic operation (type `p`, with specified length)
    *Runtime error:*\\ `BCD_FIELD_OVERFLOW`
-   *Cause:* Operand too big or (interim) result too big
    *Runtime error:*\\ `CONVT_OVERFLOW`

-   *Cause:* Source field (type `p`) contains an incorrect BCD format
    *Runtime error:*\\ `BCD_BADDATA`
-   *Cause:* Assignment for deep structures not allowed if they overlap
    *Runtime error:*\\ `MOVE_COMPLEX_OVERLAP`
-   *Cause:* Type conflict in assignment between object references
    *Runtime error:*\\ `MOVE_INTERFACE_NOT_SUPPORTED`,
    *Runtime error:*\\ `MOVE_IREF_NOT_CONVERTIBLE`,
    *Runtime error:*\\ `MOVE_IREF_TO_OREF`,
    *Runtime error:*\\ `MOVE_OREF_NOT_CONVERTIBLE`
-   *Cause:* Type conflict in assignment between data references.
    *Runtime error:*\\ `MOVE_DREF_NOT_COMPATIBLE`
-   *Cause:* Assignment between the involved types is not supported
    *Runtime error:*\\ `MOVE_NOT_SUPPORTED`\\
    *Runtime error:*\\ `OBJECTS_MOVE_NOT_SUPPORTED`
-   *Cause:* Constants and literals cannot be overwritten
    *Runtime error:*\\ `MOVE_TO_LIT_NOTALLOWED`
-   *Cause:* Constants and literals cannot be overwritten
    *Runtime error:*\\ `MOVE_TO_LIT_NOTALLOWED_NODATA`
-   *Cause:* During a loop on an internal table, an attempt is made to overwrite a reference variable that refers to the internal table.
    *Runtime error:*\\ `MOVE_TO_LOOP_REF`

DATA text TYPE string. \\n\\ \\ntext = \`blah\`. FIELD-SYMBOLS TYPE numeric. \\n\\ \\nASSIGN 1 TO . \\n\\ \\nFINAL(number) = ##type. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenequals\_operator.html