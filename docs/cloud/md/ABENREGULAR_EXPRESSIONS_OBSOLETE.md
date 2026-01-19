---
title: "ABENREGULAR_EXPRESSIONS_OBSOLETE"
description: |
  ABENREGULAR_EXPRESSIONS_OBSOLETE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREGULAR_EXPRESSIONS_OBSOLETE.htm"
abapFile: "ABENREGULAR_EXPRESSIONS_OBSOLETE.html"
keywords: ["data", "ABENREGULAR", "EXPRESSIONS", "OBSOLETE"]
---

ABAP supports several [syntax flavors](ABENREGEX_SYNTAX.html) for [regular expressions](ABENREGULAR_EXPRESSION_GLOSRY.html). Because of these, the [POSIX syntax](ABENREGEX_POSIX_SYNTAX.html) is obsolete.

Using regular expressions in POSIX syntax leads to a warning from the syntax check that can be hidden by the pragma `##regex_posix`. It is recommended that regular expressions are [migrated](ABENREGEX_MIGRATING_POSIX.html) from POSIX to [PCRE](ABENREGEX_PCRE_SYNTAX.html) or another regular expression syntax supported by ABAP.

The PCRE syntax is more powerful than the obsolete POSIX syntax. Furthermore, PCRE regular expressions generally perform better than the POSIX regular expressions supported by ABAP.

-   [POSIX regular expression](ABENREGEX_POSIX_SYNTAX.html).
-   [`FIND, REPLACE REGEX posix`](ABAPFIND_REPLACE_REGEX_OBS.html)
-   [`string_func - regex`](ABENSTRING_FUNCTIONS_REGEX_OBS.html)

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencharacter\_string\_obsolete.html