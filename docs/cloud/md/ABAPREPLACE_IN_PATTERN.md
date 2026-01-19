---
title: "ABAPREPLACE_IN_PATTERN"
description: |
  ABAPREPLACE_IN_PATTERN - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPREPLACE_IN_PATTERN.htm"
abapFile: "ABAPREPLACE_IN_PATTERN.html"
keywords: ["insert", "loop", "do", "while", "if", "case", "catch", "data", "internal-table", "ABAPREPLACE", "PATTERN"]
---

``REPLACE [\{FIRST OCCURRENCE\}|\ \{ALL OCCURRENCES\} OF]\ [`pattern`](ABAPREPLACE_PATTERN.html)``\\ 
        ``IN [[`section_of`](ABAPFIND_SECTION_OF.html)] dobj WITH new``\\ 
        `[IN \{CHARACTER|BYTE\} MODE]`\\ 
        ``[[`replace_options`](ABAPREPLACE_OPTIONS.html)].``

[1. `... \{FIRST OCCURRENCE\}|\{ALL OCCURRENCES\} OF`](#ABAP_ADDITION_1@3@)

[2. `... IN \{CHARACTER|BYTE\} MODE`](#ABAP_ADDITION_2@3@)

In pattern-based replacements, the data object `dobj` is searched for the character or byte strings specified in [`pattern`](ABAPREPLACE_PATTERN.html) and the occurrences are replaced by the content of the operand `new`. `new` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html).

If a regular expression is used in `pattern`, special [replacement patterns](ABENREGEX_POSIX_REPLACE.html) can be specified in `new` that allow a reference to the respective occurrence. It should be noted that, in regular replacement texts, the associated special characters `$`, `&`, `` ` ``, and `´` as well as the escape character `\\` must be transformed to literal characters using the prefix `\\`.

The syntax and effect of the addition [`section_of`](ABAPFIND_SECTION_OF.html) are the same as searching a data object for a substring using the statement [`FIND`](ABAPFIND.html), and the same catchable exception can be raised. The addition `MODE` defines whether a character or byte string is processed, and the addition [`replace_options`](ABAPREPLACE_OPTIONS.html) provides additional options for controlling and evaluating the statement.

The statement [`REPLACE IN TABLE`](ABAPREPLACE_ITAB.html) can be used to make replacements in internal tables.

The result of the replacement is *$bcd$*. While `$1` in the replacement pattern represents the parenthesized subgroup `bcd` of the regular expression `a(bcd)e`, the two `\\$` stand for the literal character *$*.

The optional addition `\{FIRST OCCURRENCE\}|\{ALL OCCURRENCES\} OF` specifies whether only the first occurrence or all occurrences of the search pattern are replaced by the content of `new`. If the addition `FIRST OCCURRENCE` or none of the additions are specified, the first occurrence is replaced. If `ALL OCCURRENCES` is used, all non-overlapping occurrences are replaced.

If `substring` is an empty string in [`pattern`](ABAPREPLACE_PATTERN.html) or is of the type `c`, `n`, `d`, or `t` and only contains blanks, the place in front of the first character or byte of the search range is found when searching for the first occurrence, and the content of `new` is inserted in front of the first character or byte. When searching for all occurrences, the exception `CX_SY_REPLACE_INFINITE_LOOP` is raised in this case.

If `regex` contains a [regular expression](ABENREGEX_SYNTAX.html) in [`pattern`](ABAPREPLACE_PATTERN.html) that matches the empty character string, the content of `new` is also inserted in front of the first character when searching for the first occurrence. When searching for all occurrences, the content of `new` is inserted in front of the first character in all spaces that are not in front of or inside a match, and after the last character.

If the addition `ALL OCCURRENCES` is used, no recursive processing takes place. This means that, if the statement finds further occurrences of the search pattern, they are not replaced automatically, since this could create endless loops.

After the replacement, `text` contains the value *x-xx-x*.

After the replacement, `text` still contains the substring *abcde* once.

The optional addition `IN \{CHARACTER|BYTE\} MODE` determines whether [character string or byte string processing](ABENSTRING_PROCESSING_STATEMENTS.html) is performed. If the addition is not specified, character string processing is performed. Depending on the processing type, `dobj`, `new`, and `substring` in [`pattern`](ABAPREPLACE_PATTERN.html) must be character-like or byte-like. If [regular expressions](ABENREGEX_SYNTAX.html) are used in `pattern`, only character string processing is allowed.

For replacements with character-like content that contains trailing blanks, `new` must have the data type `string`.

Replacement of all bytes that represent a hyphen in code page UTF-8 with bytes for an underscore.

`CX_SY_REPLACE_INFINITE_LOOP`

`CX_SY_INVALID_REGEX`

`CX_SY_REGEX_TOO_COMPLEX`

`CX_SY_INVALID_REGEX_FORMAT`

-   *Cause:* Substring of length **0** creates an endless loop when searching for all occurrences.
    *Runtime error:*\\ `REPLACE_INFINITE_LOOP`

-   *Cause:* Invalid expression after the addition `PCRE|REGEX`.
    *Runtime error:*\\ `INVALID_REGEX`

-   *Cause:* See [Exceptions in Regular Expressions](ABENREGEX_EXCEPTIONS.html).
    *Runtime error:*\\ `REGEX_TOO_COMPLEX`

-   *Cause:* Invalid [replacement pattern](ABENREGEX_POSIX_REPLACE.html) after the addition `WITH`.
    *Runtime error:*\\ `INVALID_FORMAT`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(str) = \`abcde\`. \\nREPLACE PCRE \`a(bcd)e\` IN str WITH \`\\\\$$1\\\\$\`. \\nout->write( str ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA text TYPE string VALUE '-uu-'. \\n\\ \\nREPLACE ALL OCCURRENCES OF PCRE 'u\*' IN text WITH 'x'. \\n\\ \\nout->write( text ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA text TYPE string VALUE 'xxababcdcdxx'. \\n\\ \\nREPLACE ALL OCCURRENCES OF 'abcd' IN text WITH \`\`. \\n\\ \\nout->write( text ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(xstr) = cl\_abap\_conv\_codepage=>create\_out( )->convert( \`a-b-c\` ). \\nREPLACE ALL OCCURRENCES OF CONV xstring( \`2D\` ) IN xstr \\n WITH CONV xstring( \`5F\` ) IN BYTE MODE. \\nout->write( \\n cl\_abap\_conv\_codepage=>create\_in( )->convert( xstr ) ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html abapreplace.html