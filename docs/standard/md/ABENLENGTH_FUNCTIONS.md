---
title: "ABENLENGTH_FUNCTIONS"
description: |
  ABENLENGTH_FUNCTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLENGTH_FUNCTIONS.htm"
abapFile: "ABENLENGTH_FUNCTIONS.html"
keywords: ["if", "data", "types", "ABENLENGTH", "FUNCTIONS"]
---

These [built-in](ABENBUILT_IN_FUNCTIONS.html) length functions have an unnamed character-like parameter.

`... func( arg ) ...`

The following table shows the length functions with an unnamed parameter. The arguments `arg` of all length functions except `dbmaxlen` are [character-like expression positions](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html). The argument of `dbmaxlen` is a character-like [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html). The return value has the type `i` for all length functions.

The functions listed here are some of the functions that can also be used in the obsolete [extended functional operand positions](ABENEXTENDED_FUNCTIONAL_POSITIONS.html) if their argument is a single data object.

The results of the following length determinations are 10 and 5.

The result of function `strlen` is 2 because ABAP handles the [surrogate pair](ABENSURROGATE_PAIR_GLOSRY.html) in the character string as two [UCS-2](ABENUCS2_GLOSRY.html) characters. When [counting](ABENCOUNT_FUNCTIONS.html) with a regular expression in [PCRE syntax](ABENREGEX_PCRE_SYNTAX.html) that is introduced with `(*UTF)`, the result is 1, because the surrogate pair is interpreted as one [UTF-16](ABENUTF16_GLOSRY.html) character.

DATA: \\n str TYPE string VALUE \`12345 \`, \\n txt TYPE c LENGTH 10 VALUE '12345 '. \\n\\ \\ncl\_demo\_output=>display( |\\{ strlen( str ) \\n \\}, \\{ strlen( txt ) \\}| ). FINAL(surrogate\_pair) = cl\_abap\_codepage=>convert\_from( \\n codepage = 'UTF-8' \\n source = CONV xstring( 'F09F91BD' ) ). \\n "U+1F47D, EXTRATERRESTRIAL ALIEN \\n\\ \\ncl\_demo\_output=>write\_text( surrogate\_pair ). \\n\\ \\nFINAL(ucs2\_len) = strlen( surrogate\_pair ). \\ncl\_demo\_output=>write( ucs2\_len ). \\nFINAL(utf16\_len) = count( val = surrogate\_pair pcre = \`(\*UTF).\` ). \\ncl\_demo\_output=>write( utf16\_len ). \\n\\ \\ncl\_demo\_output=>display( ). **Function func** **Return Value** `charlen` Length of the first character of `arg` in the [code page](ABENCODEPAGE_GLOSRY.html) used: 1 for a single Unicode character; 2 for [surrogate pairs](ABENSURROGATES_GLOSRY.html). `dbmaxlen` Maximum length of a string defined in the ABAP Dictionary (`RAWSTRING`, `SSTRING`, `STRING`, or `GEOM_EWKB`). If the string is unrestricted, the constant `abap_max_db_string_ln` or `abap_max_db_rawstring_ln` from the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `ABAP` is returned. The latter is also returned for the built-in ABAP types `string` and `xstring`. `numofchar` Number of characters in `arg`, where trailing blanks are neither counted in data objects with fixed lengths nor in data objects with the type `string`. `strlen` Number of characters in `arg`, where trailing blanks in data objects with fixed lengths are not counted, whereas in data objects with the type `string` they are. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abendescriptive\_functions.html