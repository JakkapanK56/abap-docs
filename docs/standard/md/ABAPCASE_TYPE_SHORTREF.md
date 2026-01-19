---
title: "ABAPCASE_TYPE_SHORTREF"
description: |
  ABAPCASE_TYPE_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCASE_TYPE_SHORTREF.htm"
abapFile: "ABAPCASE_TYPE_SHORTREF.html"
keywords: ["if", "case", "class", "ABAPCASE", "TYPE", "SHORTREF"]
---

[Reference](ABAPCASE_TYPE.html)

`CASE TYPE OF oref    [WHEN TYPE class|intf [INTO target1].      [statement_block1]]\    [WHEN TYPE class|intf [INTO target2].      [statement_block2]]\    ...    [WHEN OTHERS.      [statement_blockn]]\  ENDCASE.`

Defines a control structure with multiple statement blocks `statement_block1`, ..., `statement_blockn`. The first statement block is executed for which an object type `class` or `intf` specified in the `WHEN TYPE` statement is more general or equal to the dynamic or static type of the object reference variable `oref`. If the condition is not met, the statement block is executed after the statement `WHEN OTHERS`.

-   `INTO target`\\
    Specifies a target variable to which the object reference can be copied.

abenabap.html abenabap\_reference.html abenabap\_shortref.html