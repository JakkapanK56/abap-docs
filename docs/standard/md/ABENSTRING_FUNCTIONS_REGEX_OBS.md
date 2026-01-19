---
title: "ABENSTRING_FUNCTIONS_REGEX_OBS"
description: |
  ABENSTRING_FUNCTIONS_REGEX_OBS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_FUNCTIONS_REGEX_OBS.htm"
abapFile: "ABENSTRING_FUNCTIONS_REGEX_OBS.html"
keywords: ["data", "ABENSTRING", "FUNCTIONS", "REGEX", "OBS"]
---

`... ( ... regex = posix ...  ) ...`

In [string functions](ABENSTRING_FUNCTIONS.html), where the parameters [`pcre`](ABENSTRING_FUNCTIONS_REGEX.html) or [`xpath`](ABENSTRING_FUNCTIONS_REGEX.html) can be used, the parameter `regex` is also possible. `posix` is then a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html) that must contain a [POSIX regular expression](ABENREGEX_POSIX_SYNTAX.html).

Regular expressions in [POSIX syntax](ABENREGEX_POSIX_SYNTAX.html) are obsolete. Using regular expressions in POSIX syntax leads to a warning from syntax check that can be hidden by the pragma `##regex_posix`. It is recommended that [regular expressions are migrated from POSIX to PCRE](ABENREGEX_MIGRATING_POSIX.html) or another regular expression syntax supported by ABAP.

The result of the following function call is `<tag>def</tag>`. The POSIX regular expression is greedy and special care must be taken to find the desired substring between the tags.

cl\_demo\_output=>display( \\n replace( val = \`abc\` \\n regex = \`()\[^<\]+()\` ##regex\_posix \\n with = \`$1def$2\` ) ). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencharacter\_string\_obsolete.html abenregular\_expressions\_obsolete.html