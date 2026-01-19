---
title: "ABAPCASE_SHORTREF"
description: |
  ABAPCASE_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCASE_SHORTREF.htm"
abapFile: "ABAPCASE_SHORTREF.html"
keywords: ["if", "case", "ABAPCASE", "SHORTREF"]
---

[Reference](ABAPCASE.html)

`CASE operand.    [WHEN operand1 [OR operand2 [OR operand3 [...]]].      [statement_block1]]\    ...    [WHEN OTHERS.      [statement_blockn]]\  ENDCASE.`

Defines a control structure with multiple statement blocks `statement_block1`, ..., `statement_blockn`. The first statement block, for which the content of the operand `operand` is identical to one of the operands `operand1`, `operand2`, ... in the `WHEN` statement, is executed first. If no matches are found, the statement block is executed after the statement `WHEN OTHERS`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html