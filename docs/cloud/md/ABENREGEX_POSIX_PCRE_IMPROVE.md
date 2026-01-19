---
title: "Difference between greedy and non-greedy behavior,"
description: |
  Leading and trailing look-behind assertions, like look-ahead assertions, are not part of the actual match. In some scenarios it is necessary to respect line feeds during matching, e.g. matching something only if it is located at the beginning of a line. PCRE makes this very convenient by providing a
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREGEX_POSIX_PCRE_IMPROVE.htm"
abapFile: "ABENREGEX_POSIX_PCRE_IMPROVE.html"
keywords: ["insert", "do", "while", "if", "case", "method", "class", "data", "ABENREGEX", "POSIX", "PCRE", "IMPROVE"]
---

While topic [Incompatibilities between POSIX and PCRE](ABENREGEX_POSIX_PCRE_INCOMPAT.html) deals with incompatibilities and missing features when migrating from POSIX to PCRE, it is also worth taking a look at the vast array of new features PCRE has to offer.

An introduction to some of these features is provided in the following, the list is however far from complete.

The most obvious downside of POSIX regular expressions in ABAP is the lack of lazy (also known as non-greedy or reluctant) quantifiers.

In PCRE a quantifier can be made lazy by adding a trailing [`?:`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html):

Difference between greedy and non-greedy behavior,

Leading and trailing look-behind assertions, like look-ahead assertions, are not part of the actual match.

In some scenarios it is necessary to respect line feeds during matching, e.g. matching something only if it is located at the beginning of a line. PCRE makes this very convenient by providing a large amount of control over the handling of multiple lines in the matching process.

When creating a regular expression using method `CREATE_PCRE` of system class [`CL_ABAP_REGEX`](ABENREGEX_SYSTEM_CLASSES.html) multi line handling can be controlled by the following parameters:

Despite their names, single line and multi line mode are not mutually exclusive and can be combined.

It is also possible to set these options directly in the pattern, which is especially useful for regular expressions used in statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE.html) behind [`PCRE`](ABAPFIND_PATTERN.html) or in built-in functions behind [`pcre`](ABENSTRING_FUNCTIONS_REGEX.html):

While the first regular expression matches only the beginning of the character string, the second one also matches the beginning of new lines that are defined by the syntax [`\\n`](ABENSTRING_TEMPLATES_SEPARATORS.html) for line feeds in a string template.

PCRE supports the naming of capture groups, meaning you can assign a name to a capture group, e.g. using the [`(?<name>...)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) syntax. You can refer to a named capture group by its name, e.g. in a backreference using the [`\\k<name>`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) syntax.

The regular expression matches the character string. The capture group is used by its name to match further occurrences of the pattern defined for the group.

Apart from referring to the content of a group via backreferences, PCRE supports calling groups as subroutines using the [`(?n)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) syntax. It is also possible to call a named group as a subroutine, e.g. using the [`(?&name)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) syntax.

The example shows the calling of groups as subroutines in three blocks:

Callouts are another powerful feature. It invokes ABAP code from within the pattern during the matching process, passing data from the pattern to the callout routine.

Callouts are achieved with the [`(?C...)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html). A callout routine cannot only access the numeric data `n` provided by the callout `(?Cn)` or the string data `str` provided by the callout `(?C"str")`, but also a lot of other properties and information about the current matcher state.

[PCRE Regular Expression with Callouts](ABENPCRE_CALLOUT_ABEXA.html)

PCRE's conditional substitution syntax allows you to check if a certain capture group did participate in the match, specifying different replacement strings for when it did and did not participate.

Conditional substitutions with [`\{id...\}`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html).

Using the [`\\u`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html), [`\\U`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html), [`\\l`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) and [`\\L`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) modifiers in the PCRE replacement string, the case of the inserted text can be converted to uppercase or lowercase. While `\\u` and `\\l` only affect the first character following them, `\\U` and `\\L` affect all following characters, until a different case conversion modifier or the termination operator `\\E` is reached.

The case conversion syntax can also be combined with conditional substitution.

Replacements with case conversions. The latter two use conditional substitutions.

-   Single line mode can be enabled using the option setting syntax [`(?s)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html), valid for the following part of the group in which it is specified.
-   Multi line mode can be enabled using the option setting syntax [`(?m)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html), valid for the following part of the group in which it is specified.
-   What gets recognized as a line feed character can be controlled by the following syntax that can only appear at the start of the pattern:

-   [`(*CR)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) carriage return only
-   [`(*LF)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) linefeed only
-   [`(*CRLF)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) carriage return followed by linefeed
-   [`(*ANYCRLF)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) all three of the above
-   [`(*ANY)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) any Unicode line feed sequence
-   [`(*NUL)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) the `NUL` character (binary zero)

-   In the first block, the backreference [`\\1`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) simply matches whatever the first capture group actually matched most recently, instead of matching all the things the capture group could match.
-   The second block shows, how this behavior can be achieved by calling the group as a subroutine using the [`(?n)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) syntax.
-   The third block shows, how by recursing over the whole pattern using the [`(?R)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) syntax in one branch of the alternation, it is ensured that there is a balanced but arbitrary number of opening (`\\(`) and closing (`\\)`) parentheses to either side of the digits. Note that the pattern makes use of the possessive quantifier `++` that acts the same as `+` but prevents backtracking into what was matched by the quantifier.

FINAL(greedy\_result) = \\n match( val = \`

\` pcre = \`<(.+)>\` ). \\n " --> '

' \\nFINAL(lazy\_result) = \\n match( val = \`

\` pcre = \`<(.+?)>\` ). \\n " --> '' FINAL(result1) = find( val = \`meter\` pcre = \`(? found; matches whole string \\nFINAL(result2) = find( val = \`millimeter\` pcre = \`(? found; match starts at offset 5 \\nFINAL(result3) = find( val = \`centimeter\` pcre = \`(? not found FINAL(result1) = replace( val = |xxx\\\\nyyy\\\\nzzz| \\n pcre = \`^\` \\n with = \`\_\` \\n occ = 0 ). \\n " --> \_xxx\\\\nyyy\\\\nzzz \\n\\ \\nFINAL(result2) = replace( val = |xxx\\\\nyyy\\\\nzzz| \\n pcre = \`(\*LF)(?m)^\` \\n with = \`\_\` \\n occ = 0 ). \\n " --> \_xxx\\\\n\_yyy\\\\n\_zzz ASSERT matches( val = \`foobarfoo\` \\n pcre = \`(?foo)bar\\\\k\` ). ASSERT matches( \\n val = \`sense and sensibility\` \\n pcre = \`(sens|respons)e\\\\ and\\\\ \\\\1ibility\` ). \\nASSERT matches( \\n val = \`response and responsibility\` \\n pcre = \`(sens|respons)e\\\\ and\\\\ \\\\1ibility\` ). \\nASSERT NOT matches( \\n val = \`sense and responsibility\` \\n pcre = \`(sens|respons)e\\\\ and\\\\ \\\\1ibility\` ). \\nASSERT NOT matches( \\n val = \`response and sensibility\` \\n pcre = \`(sens|respons)e\\\\ and\\\\ \\\\1ibility\` ). \\n\\ \\nASSERT matches( \\n val = \`sense and sensibility\` \\n pcre = \`(sens|respons)e\\\\ and\\\\ (?1)ibility\` ). \\nASSERT matches( \\n val = \`response and responsibility\` \\n pcre = \`(sens|respons)e\\\\ and\\\\ (?1)ibility\` ). \\nASSERT matches( \\n val = \`sense and responsibility\` \\n pcre = \`(sens|respons)e\\\\ and\\\\ (?1)ibility\` ). \\nASSERT matches( \\n val = \`response and sensibility\` \\n pcre = \`(sens|respons)e\\\\ and\\\\ (?1)ibility\` ). \\n\\ \\nASSERT matches( \\n val = \`(((123456)))\` \\n pcre = \`\\\\( ( \\\\d++ | (?R) ) \\\\)\` ). \\nASSERT matches( \\n val = \`((((((123456))))))\` \\n pcre = \`\\\\( ( \\\\d++ | (?R) ) \\\\)\` ). \\nASSERT NOT matches( \\n val = \`((((((123456)))\` \\n pcre = \`\\\\( ( \\\\d++ | (?R) ) \\\\)\` ). FINAL(result1) = replace( val = \`male\` \\n pcre = \`(fe)?male\` \\n with = \`$\\{1:+her:his\\} majesty\` ). \\n " --> 'his majesty' \\nFINAL(result2) = replace( val = \`female\` \\n pcre = \`(fe)?male\` \\n with = \`$\\{1:+her:his\\} majesty\` ). \\n " --> 'her majesty' FINAL(result) = replace( \\n val = \`thEsE aRe noT THe dROiDs YoU arE loOKInG FOr\` \\n pcre = \`(\\\\w)(\\\\w\*)\` with = \`\\\\u$1\\\\L$2\` occ = 0 ). \\n " --> 'These Are Not The Droids You Are Looking For' \\n\\ \\nFINAL(result1) = replace( \\n val = \`body\` \\n pcre = \`(some)?(body)\` with = \`$\\{1:+\\\\U:\\\\L\\}HeLLo\` ). \\n " --> 'hello' \\nFINAL(result2) = replace( \\n val = \`somebody\` \\n pcre = \`(some)?(body)\` with = \`$\\{1:+\\\\U:\\\\L\\}HeLLo\` ). \\n " --> 'HELLO' **Description** **PCRE Syntax**\\ 0 or 1, preferred 0 `??`\\ 0 or more, as few as possible `*?`\\ 1 or more, as few as possible `+?`\\ at least n, no more than m, as few as possible `\{n,m\}?`\\ at least n, as few as possible `\{n,\}?` **Description** **PCRE Syntax**\\ positive look-behind assertion; succeeds if the current match position is preceded by the given pattern `(?<=...)`\\ negative look-behind assertion; succeeds if the current match position is not preceded by the given pattern `(?<!...)` **Parameter** **Description**\\ `DOT_ALL` single line mode; if enabled, special character `.` also matches line feed characters `ENABLE_MULTILINE` multi line mode; if enabled, special characters `^` and `$` not only match the start and the end of the character string, but also the start and the end of a line respectively; a line is ended by a line feed character `NEWLINE_MODE` controls what gets recognized as a line feed character abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenregular\_expressions.html abenregex\_migrating\_posix.html