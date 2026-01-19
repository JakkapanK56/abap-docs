---
title: "ABENNEWS-71-STRING_PROCESSING"
description: |
  ABENNEWS-71-STRING_PROCESSING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-71-STRING_PROCESSING.htm"
abapFile: "ABENNEWS-71-STRING_PROCESSING.html"
keywords: ["if", "data", "types", "ABENNEWS", "STRING", "PROCESSING"]
---

[1\. String Expressions](#ABAP_MODIFICATION_1@4@)

[2\. String Templates](#ABAP_MODIFICATION_2@4@)

[3\. Concatenation Operator](#ABAP_MODIFICATION_3@4@)

[4\. String Functions](#ABAP_MODIFICATION_4@4@)

[5\. Bit Functions](#ABAP_MODIFICATION_5@4@)

[6\. Management of Short Strings](#ABAP_MODIFICATION_6@4@)

[7\. Streaming for Strings](#ABAP_MODIFICATION_7@4@)

[8. Any Start Values for Data Objects of Type `xstring`](#ABAP_MODIFICATION_8@4@)

[9. Maximum Length of Data Objects of Types `c`, `n`, and `x`](#ABAP_MODIFICATION_9@4@)

The program `DEMO_EXPRESSIONS` provides examples of character string and byte string processing for ABAP release 7.0, EhP2.

The new [string expressions](ABAPCOMPUTE_STRING.html) enhance the previous [calculation expressions](ABENCALCULATION_EXPRESSION_GLOSRY.html) and enable character string processing at specific [operand positions](ABENEXPRESSION_POSITIONS.html). A string expression is either a [string template](ABENSTRING_TEMPLATES.html) or a [concatenation](ABENSTRING_OPERATORS.html) with operator `&&`.

[String templates](ABENSTRING_TEMPLATES.html) have been introduced as a new way of creating character strings. A string template is enclosed between two *`|`* characters and creates a character string in a string expression from a

String templates replace the [`WRITE TO`](ABAPWRITE_TO.html) statement to a large extent.

The concatenation operator [`&&`](ABENSTRING_OPERATORS.html) is a new string operator that concatenates together two character-like operands as one operand in a string expression. The concatenation operator replaces the [`CONCATENATE`](ABAPCONCATENATE.html) statement to a large extent.

[String functions](ABENSTRING_FUNCTIONS.html) have been introduced as a new type of [embedded function](ABENBUILTIN_FUNCTION_GLOSRY.html). There are

The [Boolean function](ABENBOOLE_FUNCTIONS.html)\\ `boolc` can also be considered a string function.

The string functions enable many character string processing tasks to be performed in operand positions where separate statements and helper variables were required previously.

[Bit functions](ABENBIT_FUNCTIONS.html) have been introduced as a new type of [embedded function](ABENBUILTIN_FUNCTION_GLOSRY.html). A bit function (`bit-set`) currently exists for setting bits. The [Boolean function](ABENBOOLE_FUNCTIONS.html)\\ `boolx` can also be considered a bit function.

The internal management of short stings has been optimized to reduce the memory overhead that accumulates when short strings are managed for the relevant [string header](ABENMEMORY_CONSUMPTION_1.html). For string lengths of less than 30 characters or 60 bytes, the string header now only requires between 10 and 40 bytes. For longer strings, this remains at approximately 50 bytes. Before ABAP release 7.0, EhP2, the overhead of the string header was not related to the length of the string and was approximately 60 bytes for each string.

Strings are recommended instead of data objects for all character string and byte string operations where a fixed length is not important.

This change is also available before EhP2 if a kernel greater than ABAP release 7.0 is used.

The new [streaming](ABENSTREAMING_GLOSRY.html) concept supports [strings](ABENSTRING_STREAMS.html).

From ABAP release 7.0, EhP2, any suitable start value `val` can be specified for `xstring` after the addition [`VALUE`](ABAPDATA_OPTIONS.html) for statements `DATA`, `CONSTANTS` and so on. Previously, only `IS INITIAL` was possible.

The maximum length of data objects of types [`c`](ABENBUILT_IN_TYPES_COMPLETE.html) and [`n`](ABENBUILT_IN_TYPES_COMPLETE.html) has been increased from 65535 to 262143. The maximum length of data objects of type [`x`](ABENBUILT_IN_TYPES_COMPLETE.html) has been increased from 65535 to 524287.

-   literal text,
-   embedded expressions, and
-   [control characters](ABENCONTROL_CHARACTER_GLOSRY.html).

-   [Search functions](ABENSEARCH_FUNCTIONS.html)
-   a [similarity function](ABENDISTANCE_FUNCTIONS.html)
-   [Processing functions](ABENPROCESS_FUNCTIONS.html)

abenabap.html abennews.html abennews-70\_ehps.html abennews-71.html