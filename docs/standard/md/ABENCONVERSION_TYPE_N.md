---
title: "ABENCONVERSION_TYPE_N"
description: |
  ABENCONVERSION_TYPE_N - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONVERSION_TYPE_N.htm"
abapFile: "ABENCONVERSION_TYPE_N.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENCONVERSION", "TYPE"]
---

The conversion rules are designed in such a way that when data objects of type [`n`](ABENBUILTIN_TYPES_CHARACTER.html) are assigned to character-like data objects they behave like character-like objects, and when assigned to numeric data objects they behave numerically. Valid data for data objects of type `n` is in the form of digit-only strings. When assigning valid data to numeric data objects, the numeric value of the string of digits is assigned to the target object. The conversion rules, however, also allow the assignment of numeric text fields that contain invalid data. The latter is not recommended.

The class [`CL_ABAP_DECFLOAT`](ABENCL_ABAP_DECFLOAT_DOC.html) contains the methods `READ_DECFLOAT34` and `READ_DECFLOAT16` for converting character strings into decimal floating point numbers. The exceptions of these methods are more significant than those of a regular assignment. Furthermore, the methods return a return value that reveals information about the rounding that was performed.

The result of the following conversion has the value *0*.

The string resulting from the conversion is `0000001234`.

The byte chain resulting from the conversion is `04D2`.

The value of the date field resulting from the conversion is the unchanged value *20000101* of the source field.

DATA num4 type n LENGTH 4 VALUE IS INITIAL. \\n\\ \\nFINAL(result) = CONV i( num4 ). DATA num4 TYPE n LENGTH 4 VALUE '1234'. \\n\\ \\nTYPES num10 TYPE n LENGTH 10. \\nFINAL(result) = CONV num10( num4 ). DATA num4 TYPE n LENGTH 4 VALUE '1234'. \\n\\ \\nFINAL(result) = CONV xstring( num4 ). DATA num8 TYPE n LENGTH 8 VALUE '20000101'. \\n\\ \\nFINAL(result) = CONV d( num8 ). **Target** **Conversion** **Target** **Conversion** **Target** **Conversion** **Target** **Conversion** `i`, `int8`, (`b`, `s`) Content is handled in the same way as a [source field of type `c`](ABENCONVERSION_TYPE_C.html) `p` Content is handled in the same way as a [source field of type `c`](ABENCONVERSION_TYPE_C.html) `decfloat16`, `decfloat34` Content is handled in the same way as a [source field of type `c`](ABENCONVERSION_TYPE_C.html) `f` Content is handled in the same way as a [source field of type `c`](ABENCONVERSION_TYPE_C.html) `c` Content is handled in the same way as a [source field of type `c`](ABENCONVERSION_TYPE_C.html) `n` The characters in the source field are passed right-aligned to the target field. Trailing blanks are passed. If the target field is longer than the characters passed, the field is padded with *0* characters on the left. If the target field is shorter, the characters are cut off on the left. `string` Content is handled in the same way as a [source field of type `c`](ABENCONVERSION_TYPE_C.html) `x` The content of the source field is first converted to data type `i` (see above) and then to type `x` (see [conversion table for source field type `i`, `int8`, (`b`, `s`)](ABENCONVERSION_TYPE_IBS.html)). `xstring` The content of the source field is first converted to data type `i` (see above) and then to type `xstring` (see [conversion table for source field type `i`, `int8`, (`b`, `s`)](ABENCONVERSION_TYPE_IBS.html)). `d` Content is handled in the same way as a [source field of type `c`](ABENCONVERSION_TYPE_C.html) `t` Content is handled in the same way as a [source field of type `c`](ABENCONVERSION_TYPE_C.html) `utclong` Not supported. Produces a syntax error or raises the exception `CX_SY_CONVERSION_NOT_SUPPORTED`. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconversion\_rules.html abenconversion\_elementary.html abencharacter\_source\_fields.html