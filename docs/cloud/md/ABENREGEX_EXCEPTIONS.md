---
title: "ABENREGEX_EXCEPTIONS"
description: |
  ABENREGEX_EXCEPTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREGEX_EXCEPTIONS.htm"
abapFile: "ABENREGEX_EXCEPTIONS.html"
keywords: ["do", "if", "case", "try", "catch", "class", "data", "ABENREGEX", "EXCEPTIONS"]
---

Invalid regular expressions that are known statically lead to syntax errors. Errors that are recognized during processing lead to catchable exceptions of classes `CX_SY_REGEX_...` or `CX_SY_..._REGEX...`. Such exceptions can occur due to invalid syntax or invalid operations.

A special exception can occur for a regular expression that has correct syntax but is too complex. Then, it cannot be executed by the libraries that are integrated in the ABAP Kernel and an exception of the class `CX_SY_REGEX_TOO_COMPLEX` is raised.

A regular expression is too complex if the number of transitions exceeds a certain limit. This is usually the case for regular expressions that have been programmed disadvantageously or are inadequate because they would lead to extensive backtracking for certain texts.

The following code section demonstrates that a rather simple regular expression `.*X.*` leads to an exception in the POSIX library if the text is several hundred characters or longer. This is a result of the [leftmost-longest rule](ABENREGEX_POSIX_SEARCH.html) and the greedy behavior of the [chaining operator](ABENREGEX_POSIX_SYNTAX_OPERATORS.html)\\ `*` where all occurrences of substrings that match the first part of the regular expression (`.*`) are saved internally until the last *X* has been found. In POSIX regular expressions, a chaining like `.*`, which matches any number of substrings, should therefore be avoided at the beginning of a regular expression. In the PCRE library, the same combination of regular expression and text does not lead to an exception. Nevertheless, the last part of the example shows that unfavorable combinations can also lead to an exception in the PCRE library.

In the case of `.*X.*`, a search is successful for every character string that contains at least one *X* and any number of other characters. For such a search, the use of a regular expression is not necessary at all and can be replaced by

FIND SUBSTRING 'X' IN text.\\ 
IF sy-subrc = 0.\\ 
  ...\\ 
ENDIF.

or by

IF text CS 'X'.\\ 
  ...\\ 
ENDIF.

-   The occurrence of the `CX_SY_REGEX_TOO_COMPLEX` exception depends on both the regular expression and the text to be matched. A regular expression that works for one text may raise an exception for another text.
-   As a rule, [POSIX regular expressions](ABENPOSIX_REGEX_GLOSRY.html) (obsolete) are more vulnerable to this error situation than [PCRE regular expressions](ABENPCRE_REGEX_GLOSRY.html). Therefore, it is recommended that [POSIX regular expressions are migrated to PCRE](ABENREGEX_MIGRATING_POSIX.html).

FINAL(text) = repeat( val = \`a\` occ = \`500\` ). \\n\\ \\nTRY. \\n FIND REGEX \`.\*X.\*\` IN text MATCH OFFSET DATA(moff) ##regex\_posix. \\n IF sy-subrc = 0. \\n cl\_demo\_output=>write( |POSIX, offset: \\{ moff \\}| ). \\n ELSE. \\n cl\_demo\_output=>write( |POSIX, nothing found| ). \\n ENDIF. \\n CATCH cx\_sy\_regex\_too\_complex INTO DATA(exc). \\n cl\_demo\_output=>write( |POSIX: \\{ exc->get\_text( ) \\}| ). \\nENDTRY. \\n\\ \\nTRY. \\n FIND PCRE \`.\*X.\*\` IN text MATCH OFFSET moff. \\n IF sy-subrc = 0. \\n cl\_demo\_output=>write( |PCRE, offset: \\{ moff \\}| ). \\n ELSE. \\n cl\_demo\_output=>write( |PCRE, nothing found| ). \\n ENDIF. \\n CATCH cx\_sy\_regex\_too\_complex INTO exc. \\n cl\_demo\_output=>write( |PCRE: \\{ exc->get\_text( ) \\}| ). \\nENDTRY. \\n\\ \\nTRY. \\n FIND PCRE \\n \`(\*LIMIT\_DEPTH=1)(\*LIMIT\_MATCH=1)(\*NO\_START\_OPT)(a+a+a+a+a+)+b\` \\n IN text MATCH OFFSET moff. \\n IF sy-subrc = 0. \\n cl\_demo\_output=>write( |PCRE, offset: \\{ moff \\}| ). \\n ELSE. \\n cl\_demo\_output=>write( |PCRE, nothing found| ). \\n ENDIF. \\n CATCH cx\_sy\_regex\_too\_complex INTO exc. \\n cl\_demo\_output=>write( |PCRE: \\{ exc->get\_text( ) \\}| ). \\nENDTRY. \\n\\ \\n\\ \\ncl\_demo\_output=>display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenregular\_expressions.html