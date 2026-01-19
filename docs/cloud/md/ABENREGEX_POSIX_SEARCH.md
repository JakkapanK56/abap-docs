---
title: "ABENREGEX_POSIX_SEARCH"
description: |
  ABENREGEX_POSIX_SEARCH - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREGEX_POSIX_SEARCH.htm"
abapFile: "ABENREGEX_POSIX_SEARCH.html"
keywords: ["select", "insert", "do", "if", "case", "data", "internal-table", "ABENREGEX", "POSIX", "SEARCH"]
---

A main application of regular expressions is the search for and subsequent [replacement of](ABENREGEX_POSIX_REPLACE.html) substrings in character strings. In general, a user is interested in a specific selection of substrings that match a regular expression. In ABAP, searches using regular expressions are implemented using the addition [`REGEX`](ABAPFIND_PATTERN.html) of the statement [`FIND`](ABAPFIND.html) or one of the [search functions](ABENSEARCH_FUNCTION_GLOSRY.html). Here, the found substrings are determined with no overlaps in accordance with the leftmost-longest rule.

First, the substring furthest to the left in the character string, which matches the regular expression (*leftmost*), is identified. If there are multiple substrings, the longest sequence is chosen (*longest*). This procedure is then repeated for the remaining sequence after the occurrence.

For the regular expression `d*od*`, five substrings are found in `doobedoddoo`: *do* at offset 0, *o* at offset 2, *dodd* at offset 5, *o* at offset 9, and *o* at offset 10.

The following operators support searches in character strings. These operators consist of the special characters `^`, `$`, `\\`, `<`, `>`, `(`, `)`, `=`, and `!`. The special characters can be converted into literal characters using the prefix `\\`.

The operator `^` acts as an anchor character for the offset in front of the first character in a line. The operator `$` acts as an anchor character for the offset after the last character in a line.

Character-like data objects have at least one start and end of line, which are defined as follows:

If a character-like data object contains [control characters](ABENCONTROL_CHARACTER_GLOSRY.html) for a line feed or a return, further line starts and line ends are possible:

Within ABAP programs, control characters generally only occur when externally generated data records are imported or if the characters are specified explicitly in [string templates](ABENSTRING_TEMPLATE_GLOSRY.html).

The character string in `text` contains two [control characters](ABENSTRING_TEMPLATES_SEPARATORS.html) for line feeds, inserted using a string template. The first search finds three line starts with the offsets 0, 6, and 12. The second search finds three line ends with the offsets 5, 11, and 17.

The operators `\\A` and `\\z` act as anchor characters for the offset in front of the first character in a character string and the offset behind the last character of a character string. This means that the operator `\\A` always finds the offset 0. In a string of type `string`, `\\z` finds the offset behind the last character. In text fields of type `c`, trailing blanks are respected, which means that `\\z` always finds the offset behind the defined length.

In addition to `\\z`, there is another operator `\\Z` for the end of a character string. The operator `\\Z` works like `\\z`, but all line breaks at the end of the character string are ignored.

If a character string does not contain any control characters, the operators `^`, `$` and `\\A`, `\\z`, `\\Z` behave in the same way.

The following search finds *Smile* at the start of the first line and at the end of the last line of the internal table `text_tab`. If the line type were `string` instead of `c`, the search would find *Smile* at the end of every line.

The following searches illustrate the difference between `\\z` and `\\Z`. The first search is not successful because there are line feeds between the searched for text and the end of the character string. These are ignored in the second search.

The operator `\\<` matches the start and the operator `\\>` matches the end of a word. The operator `\\b` matches both the start and end of a word. Words are considered to be uninterrupted strings of alphanumeric characters.

The first search finds the five places where a word starts with *s* or *S*. The second search finds both instances of *s* at the end of a word.

The operator `(?=`...`)` defines a regular expression `s` as a subsequent condition for a previous regular expression `r`. The regular expression `r(?=s)` has the same effect in a search as the regular expression `r`, provided that the regular expression `s` matches the substring that directly follows the substring found with `r`.

The operator `(?!`...`)` acts in the same way as `(?=`...`)`, with the difference that `r(?!s)` matches the substring for `r` if `s` does not match the subsequent substring.

The substring found by the preview `s` is not a part of the match found by `r(?=s)`.

The following search finds the substring *la* at offset 7.

The operator `(?>`...`)` intervenes in the processing of the character string pattern search. The search is usually performed in accordance with the leftmost-longest rule of the POSIX standard. First, all first possible matches are found and then the longest match is selected. Backtracking, as it is known, is executed when matching concatenations with alternatives. The search returns to branching points to determine whether another alternative or another iteration of a concatenation produces a longer match.

The cut operator deactivates backtracking for the subexpression contained therein. The entire search is terminated after the first successful match of the subexpression and the result is returned. The leftmost-longest rule and the rule requiring as much as possible of the entire expression to match are overridden.

The first search without a cut operator finds *aabbaaaa* at offset 2. The second search with a cut operator only finds *aabb*. This corresponds to the first alternative. The search for the second alternative, which would be longer in this case, is not executed. The third search is not successful. The subexpression `a+` captures all text characters which follow offset 2 (greedy behavior), so that no character remains for the individual pattern `a` outside of the cut operator. The latter violates the usually applicable rule that generally the entire regular expression must match primarily.

-   In a text field of the type `c` and the other character-like data objects with fixed lengths, a line starts in front of the first character and ends after the defined length.
-   In a string of the type `string`, a line starts in front of the first character and ends after its current length.

-   A line end precedes each control character for a line feed or a return.
-   A line start follows each control character for a line feed or a return.

-   When the cut operator is used, the search behavior of regular expressions that do not follow the POSIX standard is simulated in Perl.
-   The cut operator should only be used by very experienced developers for tasks that cannot be achieved in any other way.

DATA result\_tab TYPE match\_result\_tab. \\nFIND ALL OCCURRENCES OF regex 'd\*od\*' IN 'doobedoddoo' ##regex\_posix \\n RESULTS result\_tab. DATA TEXT type STRING. \\nDATA result\_tab TYPE match\_result\_tab. \\n\\ \\ntext = |Line1\\\\nLine2\\\\nLine3|. \\n\\ \\nFIND ALL OCCURRENCES OF REGEX '^' ##regex\_posix \\n IN text RESULTS result\_tab. \\n\\ \\nFIND ALL OCCURRENCES OF REGEX '$' ##regex\_posix \\n IN text RESULTS result\_tab. DATA text(10) TYPE c. \\nDATA text\_tab LIKE TABLE OF text. \\n\\ \\nDATA result\_tab TYPE match\_result\_tab. \\n\\ \\nAPPEND 'Smile' TO text\_tab. \\nAPPEND ' Smile' TO text\_tab. \\nAPPEND ' Smile' TO text\_tab. \\nAPPEND ' Smile' TO text\_tab. \\nAPPEND ' Smile' TO text\_tab. \\nAPPEND ' Smile' TO text\_tab. \\n\\ \\nFIND ALL OCCURRENCES OF regex '\\\\A(?:Smile)|(?:Smile)\\\\z' \\n IN TABLE text\_tab RESULTS result\_tab ##regex\_posix. DATA text TYPE string. \\n\\ \\ntext = |... this is the end\\\\n\\\\n\\\\n|. \\n\\ \\nFIND REGEX 'end\\\\z' IN text ##regex\_posix. \\nIF sy-subrc <> 0. \\n cl\_demo\_output=>write\_text( \`There's no end.\` ). \\nENDIF. \\nFIND REGEX 'end\\\\Z' IN text ##regex\_posix. \\nIF sy-subrc = 0. \\n cl\_demo\_output=>write\_text( \`The end is near the end.\` ). \\nENDIF. \\ncl\_demo\_output=>display( ). DATA text TYPE string. \\nDATA result\_tab TYPE match\_result\_tab. \\n\\ \\ntext = \`Sometimes snow seems so soft.\`. \\n\\ \\nFIND ALL OCCURRENCES OF regex '\\\\write\_text( |\\{ text+moff(mlen) \\}| ). \\nENDIF. \\n\\ \\nFIND REGEX '(?>a+b+|\[ab\]+)' IN text MATCH OFFSET moff ##regex\_posix \\n MATCH LENGTH mlen. \\nIF sy-subrc = 0. \\n cl\_demo\_output=>write\_text( |\\{ text+moff(mlen) \\}| ). \\nENDIF. \\n\\ \\nFIND REGEX '(?>a+|a)a' IN text MATCH OFFSET moff ##regex\_posix \\n MATCH LENGTH mlen. \\nIF sy-subrc <> 0. \\n cl\_demo\_output=>write\_text( 'Nothing found' ). \\nENDIF. \\ncl\_demo\_output=>display( ). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencharacter\_string\_obsolete.html abenregular\_expressions\_obsolete.html abenregex\_posix\_syntax.html