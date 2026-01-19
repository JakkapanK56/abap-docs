---
title: "ABAPIF_SHORTREF"
description: |
  ABAPIF_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPIF_SHORTREF.htm"
abapFile: "ABAPIF_SHORTREF.html"
keywords: ["if", "ABAPIF", "SHORTREF"]
---

[Reference](ABAPIF.html)

``IF [`log_exp1`](ABENLOG_EXP_SHORTREF.html).    [statement_block1]\  [ELSEIF [`log_exp2`](ABENLOG_EXP_SHORTREF.html).    [statement_block2]]\  ...  [ELSE.    [statement_blockn]]\  ENDIF.``

Defines a control structure with multiple statement blocks `statement_block1`, ..., `statement_blockn`. The statement block after the first true logical expression `log_exp1`, `log_exp2`, ... is executed. If no logical expression is true, the statement block after `ELSE` is executed.

abenabap.html abenabap\_reference.html abenabap\_shortref.html