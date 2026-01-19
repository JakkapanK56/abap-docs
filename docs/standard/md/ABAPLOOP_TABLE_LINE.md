---
title: "ABAPLOOP_TABLE_LINE"
description: |
  ABAPLOOP_TABLE_LINE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLOOP_TABLE_LINE.htm"
abapFile: "ABAPLOOP_TABLE_LINE.html"
keywords: ["loop", "do", "if", "class", "data", "ABAPLOOP", "TABLE", "LINE"]
---

`[LOOP AT itab](ABAPLOOP_AT_ITAB.html) ... [WHERE](ABAPLOOP_AT_ITAB_COND.html) TABLE LINE ...`.

The addition `TABLE LINE` can also be specified outside of classes in the `WHERE` condition of a `LOOP` statement, instead of the pseudo component `table_line`.

The existence of this addition should be considered as an error in the ABAP Compiler, retained only for reasons of downward compatibility. The pseudo component `table_line` should always be specified instead of `TABLE LINE`.

Usage of `WHERE TABLE LINE`

Usage of `WHERE table_line`.

DATA: itab TYPE TABLE OF i, \\n wa TYPE i. \\n\\ \\nLOOP AT itab INTO wa WHERE TABLE LINE > 10. \\n\\ \\nENDLOOP. DATA: itab TYPE TABLE OF i, \\n wa TYPE i. \\n\\ \\nLOOP AT itab INTO wa WHERE table\_line > 10. \\n\\ \\nENDLOOP. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenitab\_obsolete.html