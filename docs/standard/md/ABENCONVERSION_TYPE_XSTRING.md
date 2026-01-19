---
title: "ABENCONVERSION_TYPE_XSTRING"
description: |
  ABENCONVERSION_TYPE_XSTRING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONVERSION_TYPE_XSTRING.htm"
abapFile: "ABENCONVERSION_TYPE_XSTRING.html"
keywords: ["if", "data", "ABENCONVERSION", "TYPE", "XSTRING"]
---

The result of the following conversion has the value *123456789*. The first three bytes `FFFFFF` of the source field are ignored.

The string resulting from the conversion is `FFFFFF075BCD15`. All bytes of the source field are included in the conversion.

The byte chain resulting from the conversion is `FFFFFF075BCD15`. All bytes of the source field are included in the conversion.

The value of the date field resulting from the conversion is `20170111` corresponding to 736341 days since 01/01/0001. The first three bytes `FFFFFF` of the source field are ignored.

DATA hex TYPE xstring VALUE 'FFFFFF075BCD15'. \\n\\ \\nFINAL(result) = CONV i( hex ). DATA hex TYPE xstring VALUE 'FFFFFF075BCD15'. \\n\\ \\nFINAL(result) = CONV string( hex ). DATA hex TYPE xstring VALUE 'FFFFFF075BCD15'. \\n\\ \\nFINAL(result) = hex. DATA hex TYPE xstring VALUE 'FFFFFF000B3C55'. \\n\\ \\nFINAL(result) = CONV d( hex ). **Target** **Conversion** **Target** **Conversion** **Target** **Conversion** **‎Target** **Conversion** `i`, `int8`, (`b`, `s`) Content is handled in the same way as a [source field of type `x`](ABENCONVERSION_TYPE_X.html). If the source field has length 0, the target field is assigned the value 0. `p` Content is handled in the same way as a [source field of type `x`](ABENCONVERSION_TYPE_X.html). If the source field has length 0, the target field is assigned the value 0. `decfloat16`, `decfloat34` Content is handled in the same way as a [source field of type `x`](ABENCONVERSION_TYPE_X.html). If the source field has length 0, the target field is assigned the value 0. `f` Content is handled in the same way as a [source field of type `x`](ABENCONVERSION_TYPE_X.html). If the source field has length 0, the target field is assigned the value 0. `c` The content is handled in the same way as a [source field of type `x`](ABENCONVERSION_TYPE_X.html). If the length of the source field is 0, the target field is padded with blank characters. `n` The content is handled in the same way as a [source field of type `x`](ABENCONVERSION_TYPE_X.html). If the length of the source field is 0, the target field is padded with the character *0*. `string` The content is handled in the same way as a [source field of type `x`](ABENCONVERSION_TYPE_X.html). If the length of the source field is 0, the length of the target field is also 0 after the assignment. `x` The content is handled in the same way as a [source field of type `x`](ABENCONVERSION_TYPE_X.html). If the length of the source field is 0, the target field is padded with the hexadecimal 0. `xstring` The content is handled in the same way as a [source field of type `x`](ABENCONVERSION_TYPE_X.html). If the length of the source field is 0, the length of the target field is also 0 after the assignment. `d` The content is handled in the same way as a [source field of type `x`](ABENCONVERSION_TYPE_X.html). If the length of the source field is 0, the target field is padded with the character *0*. `t` The content is handled in the same way as a [source field of type `x`](ABENCONVERSION_TYPE_X.html). If the length of the source field is 0, the target field is padded with the character *0*. `utclong` Not supported. Produces a syntax error or raises the exception `CX_SY_CONVERSION_NOT_SUPPORTED`. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconversion\_rules.html abenconversion\_elementary.html abenbyte\_source\_fields.html