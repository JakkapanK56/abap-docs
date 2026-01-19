---
title: "ABAPGET_BADI_SHORTREF"
description: |
  ABAPGET_BADI_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_BADI_SHORTREF.htm"
abapFile: "ABAPGET_BADI_SHORTREF.html"
keywords: ["if", "internal-table", "ABAPGET", "BADI", "SHORTREF"]
---

[Reference](ABAPGET_BADI.html)

`GET BADI \{ badi [FILTERS f1 = x1 f2 = x2 ...]\ \}`\\ 
       `|\ \{ badi TYPE (name)`\\ 
              `[\ \{FILTERS f1 = x1 f2 = x2 ...\}`\\ 
              `|\ \{FILTER-TABLE ftab\}]\ \}`\\ 
              `[CONTEXT con].`

Passes a [BAdI reference](ABENBADI_REFERENCE_GLOSRY.html) to a [BAdI object](ABENBADI_OBJECT_GLOSRY.html) to a [BAdI reference variable](ABENBADI_REFERENCE_VARIABLE_GLOSRY.html).

-   `TYPE (name)`\\
    Specifies the name of a BAdI dynamically.
-   `FILTERS f1 = x1 f2 = x2 ...`\\
    Specifies a setting `x1`, `x2`, ... for the filters `f1`, `f2`, ... of the [BAdIs](ABENBADI_GLOSRY.html) when searching for BAdI implementations.
-   `FILTER-TABLE ftab`\\
    Specifies the filter setting dynamically in an internal table.
-   `CONTEXT con`\\
    Specifies a [BAdI context object](ABENBADI_CONTEXT_OBJECT_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_shortref.html