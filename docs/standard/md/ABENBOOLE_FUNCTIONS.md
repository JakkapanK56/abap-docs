---
title: "ABENBOOLE_FUNCTIONS"
description: |
  ABENBOOLE_FUNCTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBOOLE_FUNCTIONS.htm"
abapFile: "ABENBOOLE_FUNCTIONS.html"
keywords: ["do", "if", "method", "data", "types", "ABENBOOLE", "FUNCTIONS"]
---

[1. `... boolc( log_exp ) ...`](#ABAP_VARIANT_1@1@)

[2. `... boolx( bool = log_exp bit = bit ) ...`](#ABAP_VARIANT_2@1@)

[3. `... xsdbool( log_exp ) ...`](#ABAP_VARIANT_3@1@)

The [built-in](ABENBUILT_IN_FUNCTIONS.html) Boolean functions determine the [truth value](ABENTRUTH_VALUE_GLOSRY.html) of a logical expression [`log_exp`](ABENLOGEXP.html) specified as an argument. For `log_exp`, any logical expression can be specified in accordance with the applicable rules. The return value of a Boolean function has a data type dependent on the function and expresses the truth value of the logical expression with a value of this type.

These functions can be considered a partial replacement for the Boolean data type for truth values that is not available in ABAP. In particular, `xsdbool` and, under certain circumstances, `boolc` can be used in many operand positions where values of the type `ABAP_BOOLEAN` (or `abap_bool` of the type pool `ABAP`) are expected.

The function `boolc` returns a single-character character string of the type `string`. If the logical expression is true, *X* is returned. If the logical expression is false, a blank is returned. In principle, `boolc` is one of the [processing functions with character-like results](ABENPROCESS_FUNCTIONS.html) and can be specified in [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html) and in [character-like expression positions](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html).

The value 0, 1, or 2 is assigned to the variable `bool_value`, depending on the result of the logical expressions `log_exp1` and `log_exp2`.

Call of a method, where the input parameter `no_dialog` is supplied with the character-like representation of the results of a predicate expression.

The function `boolx` returns a byte chain of the type `xstring`. If the logical expression is true, the byte chain is filled as if the function [`bit-set( bit )`](ABENBIT_FUNCTIONS.html) were executed. If the logical expression is false, the byte chain is filled as if the function [`bit-set( 0 )`](ABENBIT_FUNCTIONS.html) were executed. `bit` expects a data object of the type `i`. In principle, `boolx` belongs to the [bit functions](ABENBIT_FUNCTIONS.html) and can be used in all positions where a [bit expression](ABENBIT_EXPRESSION_GLOSRY.html) is also allowed.

The function `boolx` can be used for efficient storage of sequences of truth values.

The result of the following [bit expression](ABENBIT_EXPRESSION_GLOSRY.html) is hexadecimal `55`, which corresponds to the calculated bit string `01010101`.

The bit expression above can be expressed using the following iteration with the operator [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html).

Like `boolc`, the function `xsdbool` returns the value *X* for true and a blank for false. The data type of the return value, however, has the type `c` of the length 1 here.

The return value references the type `XSDBOOLEAN` from the ABAP Dictionary. This type, which refers to the identically named domain of type `CHAR` and length 1, is handled like a real Boolean type in serializations and deserializations to or from [asXML](ABENABAP_XSLT_ASXML_SCHEMA.html) and [asJSON](ABENABAP_ASJSON_SCHEMA.html) using [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html). The XML or JSON values `true` and `false` are assigned to the values *X* and blank of this type.

`xsdbool` can be specified in [general](ABENGENERAL_EXPR_POSITION_GLOSRY.html) and [character-like expression positions](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html).

This example sets the type and the value of the variable `gui_flag` declared inline using the Boolean function `xsdbool` for whose argument a [predicative method call](ABENPREDICATIVE_METHOD_CALL_GLOSRY.html) is listed. The variable is then serialized to [asXML](ABENASXML_GLOSRY.html) and [asJSON](ABENASJSON_GLOSRY.html) using the predefined [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ [`ID`](ABENABAP_XSLT_ID.html). This produces the value *true* or `false`. After a comparison with the identically typed constant `abap_false`, the formatted result of the serialization is either read or displayed.

The result would be quite different if `boolc` were used instead of `xsdbool`. First, the transformations would have a different result since the values *X* and blank are not transformed to `true` or `false`; second, the logical expression `gui_flag = abap_false` would always be false, since `abap_false` loses its blank when converting to the type `string`.

-   If `boolc` requires return values other than *X* or blank (for example, *Y* and *N* or *1* and *0*), the result of `boolc` can be processed directly using the function [`translate`](ABENTRANSLATE_FUNCTIONS.html) or another suitable [processing function](ABENPROCESS_FUNCTIONS.html).
-   The result of `boolc` should not be compared with the constants `abap_true` and `abap_false` in relational expressions, since the latter converts from `c` to `string` and ignores any blanks. Comparisons of this type are not usually necessary. If a comparison of this type is to be executed anyway, the function `xsdbool` can be used instead of `boolc` whose result has the ABAP type mapped to `ABAP_BOOLEAN`.
-   If the logical expression is false, the result of `boolc` does not meet the condition [`IS INITIAL`](ABENLOGEXP_INITIAL.html), since a blank and no empty string is returned. If this is desired, the function `xsdbool` can be used instead of `boolc`.
-   If `boolc` is used in inappropriate places as specified in the points above, this leads to a syntax warning, which can be hidden using a pragma.

-   The result of `xsdbool` can be used like a value of the type `ABAP_BOOLEAN` and can be compared with the constants `abap_true` and `abap_false` without any problems.
-   If the logical expression is false, the result of `boolc` fulfills the condition [`IS INITIAL`](ABENLOGEXP_INITIAL.html), since the returned blank is the type-dependent initial value at the same time.
-   The result of `xsdbool` cannot usually be converted directly using a [processing function](ABENPROCESS_FUNCTIONS.html) such as [`translate`](ABENTRANSLATE_FUNCTIONS.html), since the trailing blanks here are ignored in text fields of type `c`. The result of a false logical expression would be ignored. The result of the function `boolc` of type `string` is better suited for conversions of this type.
-   The abbreviation `xsd` stands for [XML schema data types](http://www.w3.org/TR/xmlschema-2/).

DATA bool\_value TYPE i. \\n\\ \\nbool\_value = strlen( condense( val = boolc( log\_exp1 ) ) ) + \\n strlen( condense( val = boolc( log\_exp2 ) ) ). PARAMETERS word TYPE c length 30. \\nDATA result\_tab TYPE cl\_abap\_docu=>search\_results. \\n\\ \\ncl\_abap\_docu=>start( \\n EXPORTING word = word \\n no\_dialog = boolc( sy-batch IS NOT INITIAL ) \\n IMPORTING search\_results = result\_tab ). FINAL(result) = boolx( bool = 2 > 1 bit = 8 ) \\n BIT-OR boolx( bool = 2 < 1 bit = 7 ) \\n BIT-OR boolx( bool = 2 > 1 bit = 6 ) \\n BIT-OR boolx( bool = 2 < 1 bit = 5 ) \\n BIT-OR boolx( bool = 2 > 1 bit = 4 ) \\n BIT-OR boolx( bool = 2 < 1 bit = 3 ) \\n BIT-OR boolx( bool = 2 > 1 bit = 2 ) \\n BIT-OR boolx( bool = 2 < 1 bit = 1 ). FINAL(result) = \\n REDUCE xstring( INIT x TYPE xstring \\n FOR j = 4 THEN j - 1 UNTIL j < 1 \\n LET b1 = 2 \* j b2 = 2 \* j - 2 IN \\n NEXT x = x BIT-OR boolx( bool = 2 > 1 bit = b1 ) \\n BIT-OR boolx( bool = 2 < 1 bit = b2 ) ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(gui\_flag) = xsdbool( cl\_demo\_sap\_gui=>check( ) ). \\n\\ \\nCALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag \\n RESULT XML FINAL(xml). \\n\\ \\nFINAL(writer) = \\n cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_json ). \\nCALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag \\n RESULT XML writer. \\nFINAL(json) = writer->get\_output( ). \\n\\ \\nout->write\_xml( xml ). \\nout->write\_json( json ). \\n\\ \\nIF gui\_flag = abap\_false. \\n out->get( ). \\nELSE. \\n out->display( ). \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogic\_functions.html