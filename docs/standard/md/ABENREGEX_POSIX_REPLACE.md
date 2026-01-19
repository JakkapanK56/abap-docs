---
title: "ABENREGEX_POSIX_REPLACE"
description: |
  ABENREGEX_POSIX_REPLACE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENREGEX_POSIX_REPLACE.htm"
abapFile: "ABENREGEX_POSIX_REPLACE.html"
keywords: ["if", "data", "ABENREGEX", "POSIX", "REPLACE"]
---

In addition to [searching](ABENREGEX_POSIX_SEARCH.html), the replacement of substrings in character strings is the most important application of regular expressions. When replacing, the occurrences of a search, that is, the substrings that match a regular expression, are replaced by one or more different character strings. In ABAP, the replacement is implemented using regular expressions with the addition [`REGEX`](ABAPFIND_PATTERN.html) of the statement [`REPLACE`](ABAPREPLACE.html).

In contrast to regular text replacements, when regular expressions are used, operators can be used in the replacement text that refer to the relevant occurrence.

The following operators can be specified in the replacement text. These operators consist of the special characters `$`, `&`, `` ` ``, and `´`. The special characters can be converted into literal characters by prefixing the escape character `\\` or by using the addition [`VERBATIM`](ABAPREPLACE_OPTIONS.html) of the [`REPLACE`](ABAPREPLACE.html) statement, where the latter improves the performance.

The operators `$0` and `$&` can be specified in the replacement text as placeholders for the entire current occurrence.

After replacement, `text` contains the content *Yeah Yeah Yeah!*.

The operators `$1`, `$2`, `$3`, ... can be used in the replacement text as placeholders for the character strings stored in the registers of [subgroups](ABENREGEX_POSIX_SYNTAX_OPERATORS.html) for the current occurrence. If the n-th subgroup is not available, or it was not supplied with a value in the match, the corresponding operator `$n` is replaced by the empty character string.

After replacement, `text` has the content *Roll'n'Rock*.

The operator `` $` `` can be used in the replacement text as a placeholder in front of the current occurrence. If multiple occurrences are replaced using `REPLACE ALL OCCURRENCES`, `` $` `` contains the unchanged text from the beginning of the text to the start of the occurrence, for every occurrence.

After replacement, `text` contains the content *again and again*.

The operator `$'` can be used in the replacement text as a placeholder for the entire text after the current occurrence.

After replacement, `text` contains the content *and again and*.

DATA text TYPE string. \\n\\ \\ntext = \`Yeah!\`. \\n\\ \\nREPLACE REGEX \`\\\\w+\` IN text WITH \`$0 $0 $&\` ##regex\_posix. DATA text TYPE string. \\n\\ \\ntext = \`Rock'n'Roll\`. \\n\\ \\nREPLACE REGEX \`(\\\\w+)(\\\\W\\\\w\\\\W)(\\\\w+)\` IN text WITH \`$3$2$1\` ##regex\_posix. DATA text TYPE string. \\n\\ \\ntext = \`again and\`. \\n\\ \\nREPLACE REGEX 'and' IN text WITH '$0 $\`' ##regex\_posix. DATA: text TYPE string. \\n\\ \\ntext = \`again and\`. \\n\\ \\nREPLACE REGEX \`again \` IN text WITH \`$' $0\` ##regex\_posix. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencharacter\_string\_obsolete.html abenregular\_expressions\_obsolete.html abenregex\_posix\_syntax.html