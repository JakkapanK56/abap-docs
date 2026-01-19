---
title: "ABAPFIND_REPLACE_REGEX_OBS"
description: |
  ABAPFIND_REPLACE_REGEX_OBS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFIND_REPLACE_REGEX_OBS.htm"
abapFile: "ABAPFIND_REPLACE_REGEX_OBS.html"
keywords: ["select", "if", "data", "ABAPFIND", "REPLACE", "REGEX", "OBS"]
---

`FIND|REPLACE REGEX posix ... .`

In this variant for specifying a [pattern](ABAPFIND_PATTERN.html) in the statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE.html), a character string `posix` is specified behind `REGEX` instead of a reference variable [`regex_ref`](ABAPFIND_PATTERN.html).

`posix` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html) that can contain a valid [POSIX regular expression](ABENREGEX_POSIX_SYNTAX.html).

The occurrences are determined according to the *leftmost-longest* rule. Of all possible matches between the regular expression and the character string to be searched, the substring that starts at the furthest position to the left is selected. If there are multiple matches at this position, the longest of these substrings is selected.

Regular expressions in [POSIX syntax](ABENREGEX_POSIX_SYNTAX.html) are obsolete. Using regular expressions in POSIX syntax leads to a warning from syntax check that can be hidden by the pragma `##regex_posix`. It is recommended that [regular expressions are migrated from POSIX to PCRE](ABENREGEX_MIGRATING_POSIX.html) or another regular expression syntax supported by ABAP.

The search uses obsolete POSIX regular expression syntax and finds the substring `'ababb'` from offset 3. The substring `'babboo'` from offset 4, which also matches, is not found because of the leftmost-longest rule of POSIX regular expressions.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(text) = \`oooababboo\`. \\n\\ \\nFIND REGEX 'a.|\[ab\]+|b.\*' IN text ##regex\_posix \\n MATCH OFFSET FINAL(moff) \\n MATCH LENGTH FINAL(mlen). \\nIF sy-subrc = 0. \\n out->write( substring( val = text off = moff \\n len = mlen ) ). \\nENDIF. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencharacter\_string\_obsolete.html abenregular\_expressions\_obsolete.html