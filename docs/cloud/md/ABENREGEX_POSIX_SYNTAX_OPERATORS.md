---
title: "ABENREGEX_POSIX_SYNTAX_OPERATORS"
description: |
  ABENREGEX_POSIX_SYNTAX_OPERATORS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREGEX_POSIX_SYNTAX_OPERATORS.htm"
abapFile: "ABENREGEX_POSIX_SYNTAX_OPERATORS.html"
keywords: ["do", "if", "method", "class", "data", "ABENREGEX", "POSIX", "SYNTAX", "OPERATORS"]
---

Character strings are represented by chainings or operators.

Chainings are valid regular expressions that are written after each other. If `r` and `s` are regular expressions, the chaining `rs` matches all character strings that can be formed from the chaining of character strings that match `r` and `s`.

These operators consist of the special characters `\{`, `\}`, `*`, `+`, `?`, `|`, `(`, `)`, and `\\`. The special characters can be made into literal characters using the prefix `\\` or by enclosing with `\\Q ... \\E`.

The operators `\{n\}`, `\{n,m\}`, `*`, `+`, and `?` (where `n` and `m` are natural numbers, including zero) can be written directly after a regular expression `r`, and thus create chainings `rrr...` of the regular expression:

For a regular expression with chaining operators, the primary rule is that the entire expression must match if possible. This rule restricts the length of character strings that match the chaining with the operators `*` and `+` and therefore their greedy behavior.

The first subexpression `a+` is compared with the first five characters *aaaaa* from `text`, whereas the last character *a* from `text` is reserved for the second subexpression `a`.

The operator `|` can be written between two regular expressions `r` and `s`, and thereby create one single regular expression `r|s`, that matches both `r` as well as `s`.

Chainings and other operators form a stronger bond than `|`, in other words `r|st` and `r|s+` are equivalent to `r|(?:st)` or `r|(?:s+)` but not to `(?:r|s)t` or `(?:r|s)+`.

The operators `(` ... `)` and `(?:` ... `)` group chainings of regular expressions into one unit and thus affect the scope of other operators such as `*` or `|`. Here, the regular expressions `(r)` and `(?:r)` match the regular expression `r`. The difference between `(` ... `)` and `(?:` ... `)` is that the operator `(` ... `)` stores the substrings found in registers and `(?:` ... `)` does not.

The greedy behavior of chaining operators mentioned above also applies to subgroups from left to right. However, this does not violate the rule that generally requires the entire regular expression to match.

In addition to its effect on creating subgroups, the operator `(` ... `)` also stores the substrings when matching the regular expression to a character string in the correct order in subgroup registers. The subgroups `(` ... `)` of the expression match these substrings. In this process, an operator `\\1`, `\\2`, `\\3`, ... is assigned to each subgroup, which can be specified within the expression after its subgroup and acts as a placeholder for the character string stored in the corresponding register. In [text replacements](ABENREGEX_POSIX_REPLACE.html), the special characters `$1`, `$2`, `$3`, ... can be used to access the last assignment of the register.

The number of subgroups and registers is only limited by the capacity of the platform.

The example demonstrates the greedy behavior of the operator `+` in subgroups and its relation to the primary rule that the entire regular expression must match if possible. The first subgroup takes up as many *a* characters as possible. It is assigned the first four characters *aaaa*. A character *a* remains for each of the other two subgroups.

The operators `\\Q` ... `\\E` form a character string of literal characters from all enclosed characters. Special characters are ignored in this character string.

The following table shows some results from a [matching](ABENREGEX_MTCH.html).

The character string `(?` ... `)` is generally reserved for later language enhancements. Apart from the operators already supported `(?:`...`)`, [`(?=`...`)`](ABENREGEX_POSIX_SEARCH.html), [`(?!`...`)`](ABENREGEX_POSIX_SEARCH.html), and [`(?>` ... `)`](ABENREGEX_POSIX_SEARCH.html), this string raises the exception `CX_SY_INVALID_REGEX`.

-   The regular expression `r\{n\}` is equivalent to an n-fold chaining of `r`. The regular expression `r\{0\}` matches an empty character string, and therefore also the offset before the first character of a character string, the spaces between the characters in character strings, and the offset after the last character in a character string.
-   The regular expression `r\{n,m\}` is equivalent to at least n and a maximum of m chainings of `r`. The value of n must be less than or equal to the value of m. The expression `r\{n\}` is equivalent to at least an n-fold chaining of `r`.
-   The regular expression `r?` is equivalent to `r\{0,1\}`, which means the expression `r` or the empty character string.
-   The regular expression `r*` is equivalent to `r\{0,\}`, in other words a chaining of `r` of any length, including the empty character string. When using subgroups (see below), and in a [text search](ABENREGEX_POSIX_SEARCH.html), `r*` matches the longest possible substring (greedy behavior).
-   The regular expression `r+` is equivalent to `r\{1,\}`, in other words a chaining of any length of `r` excluding the empty character string. When using subgroups, and in a text search, `r+` matches the longest possible substring (greedy behavior).
-   The regular expressions `r\{n,m\}?`, `r*?` and `r+?` are reserved for future language enhancements (economical behavior) and currently raise the exception `CX_SY_INVALID_REGEX`.

-   The addition `SUBMATCHES` of the statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE.html) and the identically named column of the results table filled using the addition `RESULTS` can be used to access the content of all subgroup registers for an occurrence. The class `CL_ABAP_MATCHER` contains the method `GET_SUBMATCH` for this purpose.
-   If only grouping is required and no substrings are to be stored in registers, the operator `(?:` ... `)` can be used instead of `(` ... `)`. With respect to the formation of subgroups, both operators have the same effect. However `(?:` ... `)` does not save anything in registers.

DATA TEXT type STRING. \\nDATA result\_tab TYPE match\_result\_tab. \\n\\ \\ntext = 'aaaaaa'. \\n\\ \\nFIND ALL OCCURRENCES OF REGEX '(a+)(a)' ##regex\_posix \\n IN text RESULTS result\_tab. DATA text TYPE string. \\nDATA result\_tab TYPE match\_result\_tab. \\n\\ \\ntext = 'aaaaaa'. \\n\\ \\nFIND ALL OCCURRENCES OF REGEX '(a+)(a+)(a+)' ##regex\_posix \\n IN text RESULTS result\_tab. **pattern** **Text** `match` `.+\\w\\d` Special: \\\\w\\\\d - `.+\\\\\w\\\\\d` Special: \\\\w\\\\d X `.+\\Q\\w\\d\\E` Special: \\\\w\\\\d X abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencharacter\_string\_obsolete.html abenregular\_expressions\_obsolete.html abenregex\_posix\_syntax.html