---
title: "ABAPDEMAND_SHORTREF"
description: |
  ABAPDEMAND_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDEMAND_SHORTREF.htm"
abapFile: "ABAPDEMAND_SHORTREF.html"
keywords: ["data", "internal-table", "ABAPDEMAND", "SHORTREF"]
---

[Reference](ABAPDEMAND.html)

`DEMAND val1 = f1 val2 = f2 ...         FROM CONTEXT context_ref         [MESSAGES INTO itab].`

**Obsolete:** Assigns the derived values `val1`, `val2`, ... of a [context](ABENCONTEXT_GLOSRY.html) instance referenced by `context_ref` to the data objects `f1`, `f2`, ...

-   `MESSAGES INTO itab`\\
    Appends [messages](ABENMESSAGE_GLOSRY.html) of the context to the internal table `itab`. Otherwise messages are sent.

abenabap.html abenabap\_reference.html abenabap\_shortref.html