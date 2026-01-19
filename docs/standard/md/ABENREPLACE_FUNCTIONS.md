---
title: "The result of the following replacement is"
description: |
  The substring bb starting at offset 3 having a length of 2 is replaced with XX. The result of the following replacements are and First, all occurrences (`occ = 0`) of substring - are replaced with _, then these are replaced by an empty string, hence removed. The result of the following rep
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENREPLACE_FUNCTIONS.htm"
abapFile: "ABENREPLACE_FUNCTIONS.html"
keywords: ["insert", "if", "case", "class", "data", "ABENREPLACE", "FUNCTIONS"]
---

1\. ``... replace( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)\ [[`off = off`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [[`len = len`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\                 with = new ) ...``

2\. ``... replace( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)\ \{[`sub = substring`](ABENSTRING_FUNCTIONS_SUB.html)\}|\{[`pcre = regex`](ABENSTRING_FUNCTIONS_REGEX.html)\}\                 with = new [[`case = case`](ABENSTRING_FUNCTIONS_CASE.html)]\ [[`occ = occ`](ABENSTRING_FUNCTIONS_OCC.html)] ) ...``

This [built-in function](ABENBUILT_IN_FUNCTIONS.html) replaces a substring of [`text`](ABENSTRING_FUNCTIONS_VAL.html) with the character string specified in `new` and returns the changed text.

The substring is determined as follows:

`new` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html). If this has a fixed length, trailing blanks are ignored.

The return value has the type `string`.

The result of the following replacement is

The substring *bb* starting at offset 3 having a length of 2 is replaced with *XX*.

The result of the following replacements are

and

First, all occurrences (`occ = 0`) of substring *\-* are replaced with *\_*, then these are replaced by an empty string, hence removed.

The result of the following replacement is

<title>Th<b>i</b>s <b>i</b>s the <i>T<b>i</b>tle</i></title>.

In an HTML line, a particular letter is surrounded by format tags if it is not within a tag itself.

`CX_SY_RANGE_OUT_OF_BOUNDS`

`CX_SY_REGEX_TOO_COMPLEX`

`CX_SY_STRG_PAR_VAL`

-   The variant with the parameters [`off`](ABENSTRING_FUNCTIONS_OFF_LEN.html) and [`len`](ABENSTRING_FUNCTIONS_OFF_LEN.html) replaces the substring determined by the offset `off` and the length `len`. At least one of these additions must be defined.
-   The variant with the parameters `sub` or [`pcre`](ABENSTRING_FUNCTIONS_REGEX.html) searches the `text` for the occurrence specified in [`occ`](ABENSTRING_FUNCTIONS_OCC.html) for a match with the substring specified in [`substring`](ABENSTRING_FUNCTIONS_SUB.html) or with a [regular expression](ABENREGEX_SYNTAX.html) specified in [`regex`](ABENSTRING_FUNCTIONS_REGEX.html) and replaces the occurrence.
-   `regex` must contain a [PCRE regular expression](ABENREGEX_PCRE_SYNTAX.html). A regular expression in PCRE syntax is compiled in an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind `#`. In order to include whitespace and `#` into a pattern, they must be escaped or the extended mode must be switched of with [`(?-x)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) in the regular expression.
-   If `occ` contains the value 0, all occurrences are replaced. If `substring` is empty, an exception of the class `CX_SY_STRG_PAR_VAL` is raised. Note that a character string in `substring` of a fixed length containing only blanks is handled like an empty string. This also applies to the predefined constant `space`. For more information, refer to [Trailing Blanks in Character String Processing](ABENSTRING_PROCESSING_TRAIL_BLANKS.html). The search is case-sensitive by default, but this can be overridden using the parameter `case`. If no substring is found, the unchanged content of `text` is returned.

-   Borderline cases for the variants with the parameters `off` and `len`:

-   If only `off` is specified or if the value 0 is specified for `len`, `replace` works like the [`insert`](ABENINSERT_FUNCTIONS.html) function.
-   If only `len` is specified or if `off` has the value 0, the first segment of the length `len` is replaced.
-   If the value of `off` is equal to the length of `text`, the value of `len` must be equal to 0 or `len` is not specified. The character string `new` is then appended to the end of `text`.

-   If a regular expression is used with [`regex`](ABENSTRING_FUNCTIONS_REGEX.html), special [replacement patterns](ABENREGEX_POSIX_REPLACE.html) that allow references to the respective occurrences can be specified in `new`. It should be noted that in regular replacement texts, the associated special characters `$`, `&`, `` ` ``, and `´` as well as the escape character `\\` must be transformed to literal characters using the prefix `\\`.
-   Besides `pcre`, also the obsolete parameter [`regex`](ABENSTRING_FUNCTIONS_REGEX_OBS.html) can be used. Then an obsolete [POSIX regular expression](ABENREGEX_POSIX_SYNTAX.html) must be passed.

-   *Cause:* Illegal offset or length specified in `off` and `len`.
    *Runtime error:*\\ `STRING_OFFSET_TOO_LARGE`

-   *Cause:* More information: [Exceptions in Regular Expressions](ABENREGEX_EXCEPTIONS.html).
    *Runtime error:*\\ `REGEX_TOO_COMPLEX`

-   *Cause:* Substring in `sub` or regular expression in `regex` is empty.
    *Runtime error:*\\ `STRG_ILLEGAL_PAR`

aa\_XX\_cc DATA(text) = \`aa-bb-cc\`. \\ncl\_demo\_output=>write( text ). \\n\\ \\ntext = replace( val = text off = 3 len = 2 with = \`XX\` ). \\ncl\_demo\_output=>write( text ). \\n\\ \\ncl\_demo\_output=>display( ). aa\_bb\_cc aabbcc DATA(text) = \`aa-bb-cc\`. \\ncl\_demo\_output=>write( text ). \\n\\ \\ntext = replace( val = text sub = \`-\` with = \`\_\` occ = 0 ). \\ncl\_demo\_output=>write( text ). \\n\\ \\ntext = replace( val = text sub = \`\_\` with = \`\` occ = 0 ). \\ncl\_demo\_output=>write( text ). \\n\\ \\ncl\_demo\_output=>display( ). DATA(html) = \`This is the <i>Title</i>\`. \\nFINAL(repl) = \`i\`. \\n\\ \\nhtml = replace( val = html \\n pcre = repl && \`(?!\[^<>\]\*>)\` \\n with = \`**$0**\` \\n occ = 0 ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenprocess\_functions.html