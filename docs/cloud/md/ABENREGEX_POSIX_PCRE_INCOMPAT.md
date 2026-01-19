---
title: "ABENREGEX_POSIX_PCRE_INCOMPAT"
description: |
  ABENREGEX_POSIX_PCRE_INCOMPAT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREGEX_POSIX_PCRE_INCOMPAT.htm"
abapFile: "ABENREGEX_POSIX_PCRE_INCOMPAT.html"
keywords: ["do", "while", "if", "case", "try", "method", "class", "data", "ABENREGEX", "POSIX", "PCRE", "INCOMPAT"]
---

This topics lists all features of POSIX regular expressions that cannot be reused directly in PCRE but require some migration effort by rewriting the regular expressions.

For the most part the features supported by PCRE form a superset of the features supported by POSIX. There are however some key differences and missing features, which are outlined in the following sections.

Both PCRE and POSIX use a regex-directed, backtracking algorithm, meaning both implementations will in most cases yield the same result. There is however a crucial difference: PCRE will always return the leftmost match, while POSIX aims to return the leftmost longest match, meaning that if multiple possible matches start at the same offset, the longest of those is returned.

If you are making use of the leftmost longest matching rule in POSIX, you may need to reorder or rewrite parts of your regular expression to achieve the same results in PCRE.

PCRE stops after finding the first (leftmost) match, while POSIX also tries the other match starting at the same position and, as it is longer, considers it the better match.

To also return the longest match in the PCRE case, the example above can be rewritten as follows, reordering the alternations:

However the different matching strategies do not only affect alternations introduced by `|`, but all cases where multiple matches start at the same location, for example using the `?` quantifier:

In this case, a look-ahead assertion can be used to also return the longest match in the PCRE case:

By default PCRE syntax is compiled in an extended mode on AS ABAP: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes. In order to include whitespace into a pattern, they must be escaped. In order to explicitly match whitespaces in PCRE's extended mode, there are the following options:

While the extended mode allows you to write more readable regular expressions, it can be a bit confusing at first, especially when migrating POSIX regular expressions. The extended mode of PCRE can be switched of as follows:

The extended mode for PCRE is enabled when using parameter `pcre` in the following function. This means that whitespace characters are handled as not significant when the pattern is evaluated. The PCRE regular expression does not match the string `Hello World`.

The string `HelloWorld` however is matched by PCRE but not by POSIX:

The following example finally shows, how the extended mode can be switched of in built-in string functions:

In contrast to POSIX, where the dot (`.`) matches anything, in PCRE the dot by default matches everything but line breaks. The control characters that are interpreted as a line break in PCRE can be defined with the parameter `NEWLINE_MODE` of method `CREATE_PCRE` of class `CL_ABAP_REGEX` or by prefixing the regular expression with the respective [special control verb](ABENREGEX_PCRE_SYNTAX_SPECIALS.html).

In order to achieve the same behavior as for a POSIX regular expression, either the parameter `DOT_ALL` of method `CREATE_PCRE` of class `CL_ABAP_REGEX` can be set or `(?s)` can be used in the regular expression.

In the first regular expression, the line break is not replaced by the character *x*. In the regular expression with POSIX syntax and in the regular expression with PCRE syntax using `(?s)` it is replaced.

In the extended mode of PCRE, comments can be placed behind an unescaped `#`. In order to include the character `#` into a pattern in PCRE's extended mode, it must be escaped:

The pattern Hello\\\\#World matches Hello#World.

The extended mode of PCRE can be switched of as explained in the preceding topic.

The extended mode for PCRE is enabled when using parameter `pcre` in the following function. This means that the character `#` introduces a comment. The first PCRE regular expression does not match the string `Hello#World`. A POSIX regular expression and the second and third PCRE regular expression where `#` is escaped or the extended mode is switched off match the string.

For the representation of character strings, the ABAP programming language supports the two byte [Unicode character representation](ABENUNICODE_CHAR_REPRESENT_GLOSRY.html)\\ [UCS-2](ABENUCS2_GLOSRY.html). The [system code page](ABENSYSTEM_CODEPAGE_GLOSRY.html) of an AS ABAP is [UTF-16](ABENUTF16_GLOSRY.html), that supports all characters of the Unicode standard. UCS-2 is a subset of UTF-16 that supports the so called Basic Multilingual Plane (BMP) of the Unicode standard. In UTF-16, the other Unicode planes are encoded as [surrogates](ABENSURROGATES_GLOSRY.html) ( [surrogate pairs](ABENSURROGATE_PAIR_GLOSRY.html)) in the [surrogate area](ABENSURROGATE_AREA_GLOSRY.html).

POSIX regular expressions always assume UCS-2 and handle characters that are represented by surrogate pairs as two separate characters what might lead to unexpected results. Unlike POSIX, PCRE can handle character strings as both UCS-2 or UTF-16. This can be configured in different ways depending on the type of regular expression operation performed:

The following table gives a quick overview of which Unicode mode to use when migrating a pattern from POSIX to PCRE:

The special character `.` matches two UCS-2 characters in the first two replacements, even though they form a surrogate pair for a a single UTF-16 character. The third replacement uses `(*UTF)` at the beginning of a PCRE regular expression and only the UTF-16 character is matched and replaced.

PCRE does not directly support the POSIX syntax [`\\u`](ABENREGEX_POSIX_SYNTAX_SPECIALS.html) and [`\\l`](ABENREGEX_POSIX_SYNTAX_SPECIALS.html) to match an uppercase and lowercase letter respectively. This includes the corresponding negations [`\\U`](ABENREGEX_POSIX_SYNTAX_SPECIALS.html) and [`\\L`](ABENREGEX_POSIX_SYNTAX_SPECIALS.html).

As an alternative PCRE's [`\\p\{xx\}`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) and [`\\P\{xx\}`](ABENREGEX_POSIX_SYNTAX_SPECIALS.html) syntax can be used to match characters having certain Unicode character properties:

The following replacements yield the same result.

While PCRE supports most of the named sets available in the POSIX syntax, there is one exception: [`[[:unicode:]]`](ABENREGEX_POSIX_SYNTAX_SPECIALS.html), which matches any character whose code is greater than 255.

Depending on the context there are different ways to achieve the same behavior in PCRE:

Alternatively, if you only care about the character range from 0 to 127, or the negation thereof, you can use the POSIX named set `[[:ascii:]]` available in PCRE. Using PCRE's negative POSIX named set syntax `([[:^ascii:]])`, you can match non-ASCII characters. The negative POSIX named set syntax can also be used in negated character classes, allowing for a lot of flexibility.

The following searches yield the same result.

PCRE does not directly support the POSIX syntax [`\\<`](ABENREGEX_POSIX_SYNTAX_SPECIALS.html) and [`\\>`](ABENREGEX_POSIX_SYNTAX_SPECIALS.html) to match the start and end of a word respectively. As an alternative the word anchor [`\\b`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) (which matches the start and the end of a word) can be used in conjunction with a look-ahead or look-behind assertion. Alternatively, a special character set can be used.

The following replacements yield the same result.

Apart from referring to the content of a capture group by its number (`$1`, `$2`, `$3`, ...), the replacement string syntax and capabilities of PCRE are quite different to those of POSIX.

POSIX offers both [`$0`](ABENREGEX_POSIX_SYNTAX_SPECIALS.html) and [`$&`](ABENREGEX_POSIX_SYNTAX_SPECIALS.html) as placeholders for the whole match in the replacement string. PCRE only supports the former syntax [`$0`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html), with the latter syntax `$&` raising an exception. If you are using `$&` in your POSIX patterns, simply replace it with [`$0`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) when migrating to PCRE.

The following replacements yield the same result.

POSIX supports [`` $` ``](ABENREGEX_POSIX_SYNTAX_SPECIALS.html) and [`$'`](ABENREGEX_POSIX_SYNTAX_SPECIALS.html) as placeholders for the text in front of and after the match respectively. PCRE does not offer any directly equivalent functionality. If your pattern makes use of these POSIX features, you can however try to emulate them, e.g. by introducing additional capture groups

There are however limitations to this approach. If your pattern or replacement string is more complex, you may have to either perform the replacement manually (using string operations and the offset and length obtained from the match), or keep your POSIX pattern with the `##regex_posix` pragma.

The following replacements yield the same result.

-   Escape the whitespace in the pattern. The pattern `Hello\\ World` matches `Hello World`.
-   Match all whitespaces using the special character [`\\s`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html). `Hello\\sWorld` matches `Hello World`. The same applies to `Hello \\s World`, which might be more readable.

-   By passing `ABAP_FALSE` to the parameter `EXTENDED` when creating a PCRE regular expression with method `CREATE_PCRE` of class [`CL_ABAP_REGEX`](ABENREGEX_SYSTEM_CLASSES.html).
-   By using the special character [`(?-x)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) in the pattern itself. This also works for the addition [`PCRE`](ABAPFIND_PATTERN.html) in statements and the parameter [`pcre`](ABENSTRING_FUNCTIONS_REGEX.html) in string functions.

FINAL(pcre\_result) = \\n match( val = \`unfoldable\` \\n pcre = \`un(fold|foldable)\` ). \\n " --> returns 'unfold' \\nFINAL(posix\_result) = \\n match( val = \`unfoldable\` \\n regex = \`un(fold|foldable)\` ) ##regex\_posix. \\n " --> returns 'unfoldable' FINAL(pcre\_result) = \\n match( val = \`unfoldable\` \\n pcre = \`un(foldable|fold)\` ). \\n " --> returns 'unfoldable' FINAL(pcre\_result) = \\n match( val = \`unfoldable\` \\n pcre = \`un(fold)?(foldable)?\` ). \\n " --> returns 'unfold' \\n\\ \\nFINAL(posix\_result) = \\n match( val = \`unfoldable\` \\n regex = \`un(fold)?(foldable)?\` ) ##regex\_posix. \\n " --> returns 'unfoldable' FINAL(pcre\_result) = \\n match( val = \`unfoldable\` \\n pcre = \`un(fold(?!able))?(foldable)?\` ). \\n " --> returns 'unfoldable' ASSERT NOT \\n matches( val = \`Hello World\` pcre = \`Hello World\` ). \\n\\ \\nASSERT \\n matches( val = \`Hello World\` regex = \`Hello World\` ) ##regex\_posix. ASSERT \\n matches( val = \`HelloWorld\` pcre = \`Hello World\` ). \\n\\ \\nASSERT NOT \\n matches( val = \`HelloWorld\` regex = \`Hello World\` ) ##regex\_posix. ASSERT \\n matches( val = \`Hello World\` pcre = \`(?-x)Hello World\` ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(pcre\_result1) = replace( val = |Hello\\\\nWorld| pcre = \`.\` \\n with = \`x\` occ = 0 ). \\nDATA(posix\_result) = replace( val = |Hello\\\\nWorld| regex = \`.\` \\n with = \`x\` occ = 0 ) ##regex\_posix. \\nDATA(pcre\_result2) = replace( val = |Hello\\\\nWorld| pcre = \`(?s).\` \\n with = \`x\` occ = 0 ). \\n\\ \\nout->write( pcre\_result1 \\n )->write( posix\_result \\n )->write( pcre\_result2 \\n )->display( ). ASSERT NOT \\n matches( val = \`Hello#World\` pcre = \`Hello#World\` ). \\n\\ \\nASSERT \\n matches( val = \`Hello#World\` regex = \`Hello#World\` ) ##regex\_posix. \\n\\ \\nASSERT \\n matches( val = \`Hello#World\` pcre = \`Hello\\\\#World\` ). \\n\\ \\nASSERT \\n matches( val = \`Hello#World\` pcre = \`(?-x)Hello#World\` ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(surrogate\_pair) = cl\_abap\_codepage=>convert\_from( \\n codepage = 'UTF-8' \\n source = CONV xstring( 'F09F91BD' ) ). \\n "U+1F47D, EXTRATERRESTRIAL ALIEN \\n\\ \\nout->write\_text( surrogate\_pair \\n )->write\_text( replace( val = surrogate\_pair \\n regex = \`.\` \\n with = \`Alien\` occ = 0 ) ##regex\_posix \\n )->write\_text( replace( val = surrogate\_pair \\n pcre = \`.\` \\n with = \`Alien\` occ = 0 ) \\n )->write\_text( replace( val = surrogate\_pair \\n pcre = \`(\*UTF).\` \\n with = \`Alien\` occ = 0 ) \\n )->display( ). ASSERT replace( val = \`uuuUuuu\` regex = \`\\\\u\` with = \`X\` ) ##regex\_posix \\n = replace( val = \`uuuUuuu\` pcre = \` \\\\p\\{Lu\\} \` with = \`X\` ). \\n " --> uuuXuuu FINAL(c\_circumflex) = cl\_abap\_codepage=>convert\_from( \\n source = CONV xstring( 'C488' ) ). \\n\\ \\nFINAL(text) = \`xxx\` && c\_circumflex && \`xxx\`. \\n\\ \\nASSERT find( val = text regex = \`\[\[:unicode:\]\]\` ) ##regex\_posix \\n = find( val = text pcre = \`\[^\\\\x\\{00\\}-\\\\x\\{ff\\}\]\` ). \\n " --> 3 FINAL(text) = \`xxx yyy zzz\`. \\n\\ \\nASSERT replace( val = text regex = \`\\\\>\` ##regex\_posix \\n with = \`-\` occ = 0 ) \\n = replace( val = text pcre = \`\\\\b(?<=\\\\w)\` \\n with = \`-\` occ = 0 ). \\n\\ \\nASSERT replace( val = text regex = \`\\\\>\` ##regex\_posix \\n with = \`-\` occ = 0 ) \\n = replace( val = text pcre = \`\[\[:>:\]\]\` \\n with = \`-\` occ = 0 ). \\n\\ \\n " --> xxx- yyy- zzz- ASSERT \\n replace( val = \`abc\` regex = \`a(b)c\` with = \`$0$&\` ) ##regex\_posix \\n= replace( val = \`abc\` pcre = \`a(b)c\` with = \`$0$0\` ). \\n " --> 'abcabc' ASSERT \\n replace( val = \`again and\` \\n regex = \`and\` \\n with = '$0 $\`' ) ##regex\_posix \\n= replace( val = \`again and\` \\n pcre = \`^(.+?)and\` \\n with = \`$0 $1\` ). \\n " --> 'again and again' **Operation** **Description** **Default Behavior**\\ Methods of system classes [`CL_ABAP_REGEX`](ABENREGEX_SYSTEM_CLASSES.html) and [`CL_ABAP_MATCHER`](ABENREGEX_SYSTEM_CLASSES.html) Unicode handling is controlled by parameter `UNICODE_HANDLING` of factory method `CREATE_PCRE`. The following values can be passed: \\
\\
`STRICT` - handle character string as UTF-16, raise an exception upon encountering invalid UTF-16 (broken surrogate pairs) \\
\\
`IGNORE` - handle character string as UTF-16, ignore invalid UTF-16; parts of the input that are not valid UTF-16 cannot be matched in any way \\
\\
`RELAXED` - handle character string as UCS-2; special character `\\C` is enabled in patterns, the matching of surrogate pairs by their Unicode code point is however no longer possible \\ `STRICT`\\ Addition [`PCRE`](ABAPFIND_PATTERN.html) of statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE.html), \\
\\
Parameter [`pcre`](ABENSTRING_FUNCTIONS_REGEX.html) of built-in functions for strings No addition exists to control Unicode handling, instead the syntax `(*UTF)` can be specified at the start of the pattern to switch on the strict mode (see above) Without `(*UTF)` the relaxed mode (see above) is used, the special character `\\C` can however not be used **Operation** **Handle Input as UCS-2 or UTF-16?** **Accept Invalid UTF-16?** **Action**\\ Methods of system classes [`CL_ABAP_REGEX`](ABENREGEX_SYSTEM_CLASSES.html) and [`CL_ABAP_MATCHER`](ABENREGEX_SYSTEM_CLASSES.html) UTF-16 Yes Set `UNICODE_HANDLING` to `IGNORE`\\ Methods of system classes [`CL_ABAP_REGEX`](ABENREGEX_SYSTEM_CLASSES.html) and [`CL_ABAP_MATCHER`](ABENREGEX_SYSTEM_CLASSES.html) UTF-16 No Set `UNICODE_HANDLING` to `STRICT` (default) Methods of system classes [`CL_ABAP_REGEX`](ABENREGEX_SYSTEM_CLASSES.html) and [`CL_ABAP_MATCHER`](ABENREGEX_SYSTEM_CLASSES.html) UCS-2 (ABAP default) - Set `UNICODE_HANDLING` to `RELAXED`\\ Statements and built-in functions UTF-16 Yes This cannot be achieved with the addition `PCRE` of statements and the parameter `pcre` of built-in functions; use objects of `CL_ABAP_REGEX`\\ Statements and built-in functions UTF-16 No Add syntax `(*UTF)` to the pattern Statements and built-in functions UCS-2 (ABAP default) - No action required, relaxed mode is default **Description** **POSIX Syntax** **PCRE Syntax**\\ uppercase letter `\\u` `\\p\{Lu\}`\\ not an uppercase letter `\\U` `\\P\{Lu\}`\\ lowercase letter `\\l` `\\p\{Ll\}`\\ not a lowercase letter `\\L` `\\P\{Ll\}` **POSIX Syntax** **PCRE Syntax** **Description**\\ `[[:unicode:]]` `[^\\x\{00\}-\\x\{ff\}]` a standalone `[[:unicode:]]` can be replaced by the negation of the range of characters from `0x00` to `0xff`\\ `[^[:unicode:]]` `[\\x\{00\}-\\x\{ff\}]` similarly, a standalone `[^[:unicode:]]` can be replaced by the range of characters from `0x00` to `0xff`\\ `[[:unicode:]...]` `[\\x\{100-\\xffff\}...]` if `[[:unicode:]]` is used in conjunction with other elements in a character class, the range of characters has to be specified explicitly (not by negation); when the regular expression is to be executed in a non-UTF-16 context ( `UNICODE_HANDLING` is set to `RELAXED`), this is the character range from `0x100` to `0xffff`\\ `[[:unicode:]...]` `[\\x\{100\}-\\x\{10ffff\}...]` in a UTF-16 context (`UNICODE_HANDLING` is set to `STRICT` or `IGNORE`) this range becomes `0x100` to `0x10ffff`\\ `[^[:unicode:]...]` `[^\\x\{100\}-\\x\{ffff\}...]` similarly, when the `[[:unicode:]]` is used in conjunction with other elements in a negated character class, the range from `0x100` to `0xffff` for a non-UTF-16 context has to be specified explicitly `[^[:unicode:]...]` `[^\\x\{100\}-\\x\{10ffff\}...]` in a UTF-16 context this range becomes `0x100` to `0x10ffff` Description **POSIX Syntax** **PCRE Syntax**\\ start of word `\\<` `\\b(?=\\w)` or `[[:<:]]`\\ end of word `\\>` `\\b(?<=\\w)` or `[[:>:]]` abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenregular\_expressions.html abenregex\_migrating\_posix.html