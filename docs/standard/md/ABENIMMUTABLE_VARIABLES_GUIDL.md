---
title: "ABENIMMUTABLE_VARIABLES_GUIDL"
description: |
  ABENIMMUTABLE_VARIABLES_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENIMMUTABLE_VARIABLES_GUIDL.htm"
abapFile: "ABENIMMUTABLE_VARIABLES_GUIDL.html"
keywords: ["loop", "if", "data", "types", "internal-table", "ABENIMMUTABLE", "VARIABLES", "GUIDL"]
---

An [immutable variable](ABENIMMUTABLE_VARIABLE_GLOSRY.html) is a special variable that can be assigned a value at exactly one write position of a [context](ABENCONTEXT_GLOSRY.html) which cannot be changed at other write positions. Immutable variables can be declared inline with the declaration operator [`FINAL`](ABENFINAL_INLINE.html).

**Consider using immutable variables**

Whenever you want a variable to be filled at exactly one write position and to be read only at all other positions, use an immutable variable.

An immutable variable prevents unwanted changes to the value of a variable. It combines the robustness of a constant with the flexibility of filling it at any write position. When reading the value of an immutable variable, it is guaranteed that it is filled with the value assigned during the inline declaration and that no other write access can have happened in between. If you are declaring an immutable variable inside a loop, you can be sure that its value is stable for each loop pass.

An internal table is declared inline with the declaration operator `DATA` and filled with values that are not expected to be changed any more.

Using the declaration operator `FINAL`, an immutable table is created, where any later change of the content is prevented in the current context.

TYPES primary\_colors TYPE HASHED TABLE OF string \\n WITH UNIQUE KEY table\_line. \\n\\ \\nDATA(primary\_colors) = VALUE primary\_colors( ( \`yellow\` ) \\n ( \`red\` ) \\n ( \`blue\` ) ). TYPES primary\_colors TYPE HASHED TABLE OF string \\n WITH UNIQUE KEY table\_line. \\n\\ \\nFINAL(primary\_colors) = VALUE primary\_colors( ( \`yellow\` ) \\n ( \`red\` ) \\n ( \`blue\` ) ). abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abendata\_type\_obj\_gdl.html