---
title: "ABENREGEX_PCRE_SYNTAX"
description: |
  ABENREGEX_PCRE_SYNTAX - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREGEX_PCRE_SYNTAX.htm"
abapFile: "ABENREGEX_PCRE_SYNTAX.html"
keywords: ["do", "if", "method", "class", "data", "ABENREGEX", "PCRE", "SYNTAX"]
---

Regular expressions with PCRE syntax can be specified after the addition [`PCRE`](ABAPFIND_PATTERN.html) of the statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE.html) and the parameter [`pcre`](ABENSTRING_FUNCTIONS_REGEX.html) of built-in functions for strings. Objects for PCRE regular expressions can be created with the factory method `CREATE_PCRE` of the system class [`CL_ABAP_REGEX`](ABENREGEX_SYSTEM_CLASSES.html) to be used in statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE.html) or with the system class [`CL_ABAP_MATCHER`](ABENREGEX_SYSTEM_CLASSES.html).

Currently, there is no detailed description of the PCRE syntax for regular expressions in the ABAP keyword documentation.

A regular expression in PCRE syntax can be compiled in a normal or extended mode. In the extended mode, most unescaped whitespace characters (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind `#`. In ABAP statements and built-in functions, the extended mode is switched on by default and can be switched off with [`(?-x)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) in the regular expression. When using `CL_ABAP_REGEX`, it can be switched by the parameter `EXTENDED` of method `CREATE_PCRE`.

For regular expressions in PCRE syntax, it can be defined whether valid [UTF-16](ABENUTF16_GLOSRY.html) character strings are expected or not. In ABAP statements and built-in functions, a PCRE regular expression can be introduced with [`(*UTF)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) in order to check for valid [UTF-16](ABENUTF16_GLOSRY.html) strings. When using `CL_ABAP_REGEX`, the parameter `UNICODE_HANDLING` of method `CREATE_PCRE` can be used. When the strict mode for working with UTF-16 strings is switched on, a [surrogate pair](ABENSURROGATE_PAIR_GLOSRY.html) is handled as a single character (see example for [counting](ABENCOUNT_FUNCTIONS.html)).

Searching for a PCRE regular expression in a character string. See also the class `CL_DEMO_FIND_REGEX`.

PCRE regular expressions support non-greedy behavior by placing a question mark (`?`) behind quantifiers as for example the character asterisk (`*`). In the following example, the asterisk quantifier in the first regular expression is greedy and finds everything between the first `<i>` and the last `</i>`. In the second regular expression, the asterisk quantifier is marked as non-greedy and only the substring between the first `<i>` and the following `</i>` is found. Non-greedy behavior is not supported in the obsolete [POSIX syntax](ABENREGEX_POSIX_SYNTAX.html) and other workarounds as for example `[^<]*` have to be used. For more information, see [New features in PCRE compared to POSIX](ABENREGEX_POSIX_PCRE_IMPROVE.html).

This example shows the effect of the extended mode, that is switched on by default and might lead to unexpected results. All replacements yield the same result `a-b` except the one in `r5`, where the line break character is not found but instead all empty spaces are replaced by the replacement character `-`. The reason is that the pattern `|\\n|` consists of nothing but the line break character and this is ignored in the extended mode. Therefore, the pattern is in fact an empty string and yields the same result as specifying an empty string directly. By switching off the extended mode with `(?-x)`, the linebreak character is not ignored and yields the same result as the special PCRE character `\\n`, which is expressed in different ways here.

This software uses the [PCRE2](https://www.pcre.org/) library under the [PCRE2 LICENCE](https://github.com/rurban/pcre/blob/master/LICENCE).

-   For a short syntax overview, see
-   [Special Characters in PCRE Regular Expressions](ABENREGEX_PCRE_SYNTAX_SPECIALS.html)
-   For the complete documentation, refer to:
-   [Perl documentation **perlre**](https://perldoc.perl.org/perlre.html)

-   Currently supported version: PCRE2, version 10.44.
-   The PCRE syntax is more powerful than the obsolete [POSIX syntax](ABENREGEX_POSIX_SYNTAX.html). Furthermore, PCRE regular expressions generally perform better than the POSIX regular expressions supported by ABAP. Therefore, it is recommended that [POSIX regular expressions are migrated to PCRE](ABENREGEX_MIGRATING_POSIX.html).
-   The PCRE syntax supports callouts that call ABAP methods during matching an regular expression with [`CL_ABAP_MATCHER`](ABENREGEX_SYSTEM_CLASSES.html).
-   [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html) also support the PCRE syntax with the built-in functions [`REPLACE_REGEXPR`](ABENSQL_FUNCTIONS_STRING.html), [`LIKE_REGEXPR`](ABENSQL_FUNCTIONS_STRING.html), and [`OCCURRENCES_REGEXPR`](ABENSQL_FUNCTIONS_STRING.html). These functions access the PCRE1 library implemented in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html).

-   [PCRE Regular Expression with Callouts](ABENPCRE_CALLOUT_ABEXA.html)
-   [Parsing with PCRE Regular Expression](ABENPCRE_PARSING_ABEXA.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(regex) = \`(\\\\b.at\\\\b)\`. \\nFINAL(text) = \`Cathy's cat with the hat sat on Matt's mat.\`. \\n\\ \\nFIND PCRE regex IN text SUBMATCHES FINAL(subm). \\n\\ \\nIF sy-subrc = 0. \\n out->write( subm ). \\nENDIF. \\n\\ \\nout->display( ). FINAL(text) = \`*abc*def*ghi*\`. \\n\\ \\nFIND PCRE \`*(.\*)*\` IN text SUBMATCHES FINAL(subm1). \\nIF sy-subrc = 0. \\n cl\_demo\_output=>write( |Greedy: \\{ subm1 \\}| ). \\nENDIF. \\n\\ \\nFIND PCRE \`*(.\*?)*\` IN text SUBMATCHES FINAL(subm2). \\nIF sy-subrc = 0. \\n cl\_demo\_output=>write( |Non-greedy: \\{ subm2 \\}| ). \\nENDIF. \\n\\ \\ncl\_demo\_output=>display( ). FINAL(text) = \`a\` && |\\\\n| && \`b\`. \\n\\ \\nFINAL(r0) = replace( val = text sub = |\\\\n| with = '-' occ = 0 ). \\n\\ \\nFINAL(r1) = replace( val = text pcre = \`\\\\n\` with = '-' occ = 0 ). \\nFINAL(r2) = replace( val = text pcre = \`(?-x)\\\\n\` with = '-' occ = 0 ). \\nFINAL(r3) = replace( val = text pcre = |\\\\\\\\\\n| with = '-' occ = 0 ). \\nFINAL(r4) = replace( val = text pcre = |(?-x)\\\\\\\\\\n| with = '-' occ = 0 ). \\nFINAL(r5) = replace( val = text pcre = |\\\\n| with = '-' occ = 0 ). \\nFINAL(r6) = replace( val = text pcre = |(?-x)\\\\n| with = '-' occ = 0 ). \\n\\ \\nFINAL(re) = replace( val = text pcre = \`\` with = '-' occ = 0 ). \\n\\ \\nASSERT r0 = r1. \\nASSERT r0 = r2. \\nASSERT r0 = r3. \\nASSERT r0 = r4. \\nASSERT r0 = r6. \\n\\ \\nASSERT re = r5. \\n\\ \\ncl\_demo\_output=>new( \\n )->write( r0 \\n )->write( r5 )->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenregular\_expressions.html abenregex\_syntax.html