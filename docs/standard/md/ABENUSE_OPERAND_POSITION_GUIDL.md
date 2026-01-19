---
title: "ABENUSE_OPERAND_POSITION_GUIDL"
description: |
  ABENUSE_OPERAND_POSITION_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUSE_OPERAND_POSITION_GUIDL.htm"
abapFile: "ABENUSE_OPERAND_POSITION_GUIDL.html"
keywords: ["loop", "do", "if", "case", "method", "ABENUSE", "OPERAND", "POSITION", "GUIDL"]
---

Statements that modify the content of system fields generally evaluate the operands first and then set the system fields. In some complex statements, however, a system field could be set first, before all operand positions are evaluated.

**Do not use system fields in statements that set the fields**

For reasons of robustness, do not use system fields as operands of statements that themselves set these system fields.

A program does not always define whether a particular system field is set in a statement before or after an operand is evaluated. This means that, to reduce risks and to make the program easier to read, the content of a system field should always be copied to a helper variable and only this copy should be used within the statement in question.

Also take note of how functional methods are used in operand positions. These methods also modify important system fields. Also be careful here when using system fields in operand positions of the same statement.

The following source code shows how the system field `sy-tabix` is used in a `READ` statement that sets the system field itself. The case shown here does not itself present any difficulties, however we still recommend you follow the rule above, not least to make the code more readable.

The following source code makes the example above more robust by assigning the value of the system field `sy-tabix` to a helper variable before it is used.

LOOP AT itab1 ... WHERE ... \\n ... \\n READ TABLE itab2 ... INDEX sy-tabix. \\n ... \\nENDLOOP. LOOP AT itab1 ... WHERE ... \\n index = sy-tabix. \\n ... \\n .... itab2\[ index \] ... \\n ... \\nENDLOOP. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abensystem\_fields\_gdl.html