---
title: "ABENREGEX_POSIX_SIMPLE"
description: |
  ABENREGEX_POSIX_SIMPLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENREGEX_POSIX_SIMPLE.htm"
abapFile: "ABENREGEX_POSIX_SIMPLE.html"
keywords: ["do", "if", "class", "data", "ABENREGEX", "POSIX", "SIMPLE"]
---

In addition to the regular expressions in accordance with the extended [POSIX](https://en.wikipedia.org/wiki/POSIX) standard IEEE 1003.1, the class `CL_ABAP_REGEX` also offers an alternative type of simplified regular expression with restricted functions. These simplified regular expressions (short: simplified expressions) do not support all POSIX operators and use partially different syntax. The semantics of regular expressions and simplified expressions are, however, the same.

The following table provides an overview of the syntax differences between regular expressions and simplified regular expressions.

This table shows that many special characters in the regular syntax have no effect in the simplified syntax. Parentheses and curly brackets must be prefixed with the character `\\` if they are to keep their function in the regular syntax.

This table shows the differences in parentheses between regular syntax and simplified syntax. The final two columns show examples that match the expressions in the first column, depending on the syntax used.

The first search uses regular syntax and finds the first three letters *aaa*. The second search has simplified syntax, where *+* does not have any meaning as a special character and finds the substring *a+* from offset 2.

-   Regular expressions with simplified syntax can only be used within the class `CL_ABAP_REGEX`. If the value `'X'` is passed to the input parameter `simple_regex`, the regular expression is handled in accordance with the simplified syntax. By default, syntax in accordance with the extended POSIX standard is used. If the simplified syntax is to be used in the statements `FIND` or `REPLACE`, an object of the class `CL_ABAP_REGEX` must be passed.
-   The simplified syntax corresponds to the syntax of regular expressions in the command `grep` on Unix.

DATA res TYPE match\_result\_tab. \\n\\ \\nFIND ALL OCCURRENCES OF REGEX ##regex\_posix \\n cl\_abap\_regex=>create\_posix( pattern = 'a+' \\n simple\_regex = abap\_false ) \\n IN 'aaa+bbb' RESULTS res. \\n\\ \\nFIND ALL OCCURRENCES OF REGEX ##regex\_posix \\n cl\_abap\_regex=>create\_posix( pattern = 'a+' \\n simple\_regex = abap\_true ) \\n IN 'aaa+bbb' RESULTS res. **Regular Syntax** **Simplified Syntax** **Pattern** **Regular Syntax** **Simplified Syntax** `*` `*` `+` Not supported `\{ \}` `\\\\{ \\\\}` `( )` `\\( \\)` `[ ]` `[ ]` `|` Not supported `(?= ) (?! )` Not supported `(?: )` Not supported `(.)` a (a) `\\(.\\)` (a) a abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencharacter\_string\_obsolete.html abenregular\_expressions\_obsolete.html abenregex\_posix\_syntax.html