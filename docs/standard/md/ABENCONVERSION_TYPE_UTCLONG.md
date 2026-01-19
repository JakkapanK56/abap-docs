---
title: "ABENCONVERSION_TYPE_UTCLONG"
description: |
  ABENCONVERSION_TYPE_UTCLONG - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONVERSION_TYPE_UTCLONG.htm"
abapFile: "ABENCONVERSION_TYPE_UTCLONG.html"
keywords: ["if", "method", "class", "data", "ABENCONVERSION", "TYPE", "UTCLONG"]
---

The methods `UTCLONG2TSTMP` and `UTCLONG2TSTMP_SHORT` of class [`CL_ABAP_TSTMP`](ABENCL_ABAP_TSTMP.html) convert [time stamp fields](ABENTIMESTAMP_FIELD_GLOSRY.html) of the type `utclong` to [time stamps in packed numbers](ABENTIME_STAMPS_PACKED.html).

The formatting of an UTC time stamp of type `utclong` during the conversion follows the SQL standard according to ISO 9075 and corresponds to the formatting option [`TIMESTAMP`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) with the value `SPACE` for embedded expressions in string templates.

The example compares the formatting of the conversion with the corresponding formatting in a string template.

FINAL(ts) = utclong\_current( ). \\n\\ \\nASSERT CONV string( ts ) = \\n |\\{ ts TIMESTAMP = SPACE \\}|. **Target** **Conversion** **Target** **Conversion** **Target** **Conversion** **‎Target** **conversion** `i`, `int8`, (`b`, `s`) Not supported. Produces a syntax error or raises the exception `CX_SY_CONVERSION_NOT_SUPPORTED`. `p` Not supported. Produces a syntax error or raises the exception `CX_SY_CONVERSION_NOT_SUPPORTED`. `decfloat16`, `decfloat34` Not supported. Produces a syntax error or raises the exception `CX_SY_CONVERSION_NOT_SUPPORTED`. `f` Not supported. Produces a syntax error or raises the exception `CX_SY_CONVERSION_NOT_SUPPORTED`. `c` The internal representation of the UTC time stamp is converted to a character string that represents the time stamp in the notation *yyyy-mm-dd hh:mm:ss.fffffff*. Between the date and time specification there is a space, and a period (`.`) is used as a decimal separator. If the target field is shorter than 27, the character string is truncated on the right. If the target field is longer than 27, the field is padded with blanks on the right. If the source field is initial, the target field is filled with blanks. If the source field contains an invalid value, an exception of the class `CX_SY_CONVERSION_NO_DATE_TIME` is raised. `n` Not supported. Produces a syntax error or raises the exception `CX_SY_CONVERSION_NOT_SUPPORTED`. `string` As for a target field of type `c`. The resulting length of the target field is 27. If the source field is initial, the target field is an empty string. `x` Not supported. Produces a syntax error or raises the exception `CX_SY_CONVERSION_NOT_SUPPORTED`. `xstring` Not supported. Produces a syntax error or raises the exception `CX_SY_CONVERSION_NOT_SUPPORTED`. `d` Not supported. Produces a syntax error or raises the exception `CX_SY_CONVERSION_NOT_SUPPORTED`. `t` Not supported. Produces a syntax error or raises the exception `CX_SY_CONVERSION_NOT_SUPPORTED`. `utclong` The content of the source field is passed unconverted. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconversion\_rules.html abenconversion\_elementary.html abendate\_time\_source\_fields.html