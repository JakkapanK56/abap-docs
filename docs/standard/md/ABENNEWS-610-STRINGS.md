---
title: "ABENNEWS-610-STRINGS"
description: |
  ABENNEWS-610-STRINGS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-610-STRINGS.htm"
abapFile: "ABENNEWS-610-STRINGS.html"
keywords: ["do", "if", "data", "types", "field-symbol", "ABENNEWS", "610", "STRINGS"]
---

The following new functions are available for character strings in ABAP release 6.10:

[1\. Identify the Length and Number of a Character](#ABAP_MODIFICATION_1@4@)

[2. New Statements `FIND` and `REPLACE`](#ABAP_MODIFICATION_2@4@)

[3\. Faster Access to Strings](#ABAP_MODIFICATION_3@4@)

[4\. Support for Strings in the Database](#ABAP_MODIFICATION_4@4@)

[5\. Definition of String Constants](#ABAP_MODIFICATION_5@4@)

[6\. Introduction of Text String Literals](#ABAP_MODIFICATION_6@4@)

New functions:

There is a new statement, [`FIND`](ABAPFIND.html), for searching in character strings. This replaces the [`SEARCH`](ABAPSEARCH-.html) statement. For replacing characters in character strings, the statement [`REPLACE`](ABAPREPLACE_IN_POSITION.html) has been expanded to include position-based replacements.

Offset/length access is now the fastest way to process a string character by character. This technique is also faster than searching in a field of type C that is assigned to a field symbol.

From ABAP release 6.10, character strings and binary data can be stored in database columns of types `STRING` or `RAWSTRING`. The system distinguishes short strings from long strings:

When working with strings, some restrictions have to be observed. Further details are available [here](ABENDDIC_CHARACTER_BYTE_TYPES.html).

Strings can now also be defined as [constants](ABAPCONSTANTS.html) and can be given an initial value using the keyword `VALUE`.

CONSTANTS str1 TYPE string VALUE 'ABC'. \\nDATA      str2 TYPE string VALUE 'XYZ'. \\nstr2 = str1. \\nstr1 = str2.              "Syntax error \\nWRITE: / str1, str2.

[Text string literals](ABENLITERAL.html) are enclosed by backquotes in the form `` str = `ABC` ``. Text string literals are of data type `string` and trailing blanks are not ignored, unlike in text field literals.

Text string literals.

The length for the string `str1` is `cnt1` = 3 and the length for the string `str2` is `cnt2` = 5.

-   The function [`charlen`](ABAPCOMPUTE_ARITH.html) provides the length of the first character of a string or of a character-like field.
-   [`numofchar`](ABAPCOMPUTE_ARITH.html) can be used to obtain the number of characters in a string or a character-like field.
-   [`dbmaxlen`](ABAPCOMPUTE_ARITH.html) provides the maximum length of the string as stored in ABAP Dictionary.

-   Short strings consist of a maximum of 256 characters, do not have trailing blanks, and can be compared on the database.
-   Long strings can be of any length and do have trailing blanks; however they cannot be compared on the database.

DATA: str1 TYPE string VALUE 'ABC ', \\n str2 TYPE string VALUE \`ABC \`, \\n cnt1 TYPE i, \\n cnt2 TYPE i. \\ncnt1 = strlen( str1 ). \\ncnt2 = strlen( str2 ). \\nWRITE: / cnt1, cnt2. abenabap.html abennews.html abennews-6.html abennews-610.html