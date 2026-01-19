---
title: "ABAPSYNTAX-CHECK_ERROR_HANDLING"
description: |
  ABAPSYNTAX-CHECK_ERROR_HANDLING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSYNTAX-CHECK_ERROR_HANDLING.htm"
abapFile: "ABAPSYNTAX-CHECK_ERROR_HANDLING.html"
keywords: ["while", "if", "data", "ABAPSYNTAX", "CHECK", "ERROR", "HANDLING"]
---

[Short Reference](ABAPSYNTAX-CHECK_SHORTREF.html)

`... [INCLUDE incl]`\\ 
    `[OFFSET off]`\\ 
    `[MESSAGE-ID mid] ...`

[1. `... INCLUDE incl`](#ABAP_ADDITION_1@3@)

[2. `... OFFSET off`](#ABAP_ADDITION_2@3@)

[3. `... MESSAGE-ID mid`](#ABAP_ADDITION_3@3@)

These additions can be used for analyzing the syntax errors detected using the statement [`SYNTAX-CHECK`](ABAPSYNTAX-CHECK_FOR_ITAB.html).

If one or more [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) are included in the source code contained in `itab`, and one of these programs contains the first syntax error of the checked program, the name of this include program is assigned to the variable `incl`. `incl` must be a character-like data object.

If the source code in `itab` contains one or more syntax errors, the offset of the first token with errors in relation to the line in the source code is assigned to the variable `off`. `off` expects the data type `i`.

If the source code in `itab` contains one or more syntax errors, the key under which the first error message in the database table `TRMSG` is stored is assigned to the variable `mid`.

The key of the database table `TRMSG` consists of the components `SPRAS` of length 1, `KEYWORD` of length 20, and `MSGNUMBER` of length 4. The component `MSGNUMBER` is used to include a three-character ID. The fourth position can contain a blank character or a letter. For error messages with multiple parts that occupy more than one line in `TRMSG`, all parts have the same three-character ID, while the fourth character indicates a part of the message.

The data object `mid` must have the data type `TRMSG_KEY` from the ABAP Dictionary, which consists of the components `SPRAS` with length 1, `KEYWORD` with length 20, and `MSGNUMBER` with length 3.

abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abenabap\_generic\_program.html abapsyntax-check\_for\_itab.html