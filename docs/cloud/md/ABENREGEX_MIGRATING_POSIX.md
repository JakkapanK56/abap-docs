---
title: "ABENREGEX_MIGRATING_POSIX"
description: |
  ABENREGEX_MIGRATING_POSIX - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREGEX_MIGRATING_POSIX.htm"
abapFile: "ABENREGEX_MIGRATING_POSIX.html"
keywords: ["do", "data", "ABENREGEX", "MIGRATING", "POSIX"]
---

The ABAP Kernel of an [AS ABAP](ABENAS_ABAP_GLOSRY.html) implements two libraries for regular expressions:

Regular expressions in [POSIX syntax](ABENREGEX_POSIX_SYNTAX.html) are obsolete. Using regular expressions in POSIX syntax leads to a warning from syntax check that can be hidden by the pragma `##regex_posix`. Therefore, it is recommended that regular expressions are migrated from POSIX to [PCRE syntax](ABENREGEX_PCRE_SYNTAX.html) or another regular expression syntax supported by ABAP.

The following table provides a general troubleshooting for migrating from POSIX to PCRE:

The following topics provide detailed assistance for the migration from POSIX to PCRE.

-   The [PCRE2 library](https://www.pcre.org/) for [PCRE regular expressions](ABENPCRE_REGEX_GLOSRY.html).
-   [Version 1.31 of the Boost.Regex Library](http://www.boost.org/doc/libs/1_31_0/libs/regex/doc/index.html) for [POSIX regular expressions](ABENPOSIX_REGEX_GLOSRY.html) (obsolete).

-   [Incompatibilities between POSIX and PCRE](ABENREGEX_POSIX_PCRE_INCOMPAT.html)
-   [New features in PCRE compared to POSIX](ABENREGEX_POSIX_PCRE_IMPROVE.html)

**Symptom** **Possible Solutions**\\ The PCRE library rejects the pattern (e.g. by giving a compiler error or raising an exception) Make sure to not use any features that are supported by POSIX but not by PCRE. Also pay close attention to the error message, which often contains useful information. The pattern does not match what it should after migrating to PCRE Make sure that you have taken PCRE's extended mode into account by either explicitly encoding whitespaces or by disabling extended mode. Ensure that you have set the correct Unicode handling for your context. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenregular\_expressions.html