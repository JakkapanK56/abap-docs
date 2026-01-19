---
title: "ABAPIF"
description: |
  ABAPIF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPIF.htm"
abapFile: "ABAPIF.html"
keywords: ["while", "if", "try", "ABAPIF"]
---

[Short Reference](ABAPIF_SHORTREF.html)

``IF [`log_exp1`](ABENLOGEXP.html).``\\ 
  `[statement_block1]`\\ 
``[ELSEIF [`log_exp2`](ABENLOGEXP.html).``\\ 
  `[statement_block2]]`\\ 
`...`\\ 
`[ELSE.`\\ 
  `[statement_blockn]]`\\ 
`ENDIF.`

These statements define a control structure that can contain multiple statement blocks `statement_block` of which a maximum of one is executed, depending on the logical expressions [`log_exp`](ABENLOGEXP.html).

After `IF` and `ELSEIF` any logical expressions [`log_exp`](ABENLOGEXP.html) can be listed, while the expressions `statement_block` stand for any statement blocks.

The logical expressions, beginning with the `IF` statement, are checked from top to bottom and the statement block after the first real logical expression is executed. If none of the logical expressions are true, the statement block after the `ELSE` statement is executed.

If the end of the executed statement block is reached or if no statement block is to be executed, the processing is continued after `ENDIF`.

The [conditional operator](ABENCONDITIONAL_OPERATOR_GLOSRY.html)\\ [`COND`](ABENCONDITIONAL_EXPRESSION_COND.html) can also be used to implement branches in operand positions that are based on logical expressions.

Transformation of a time to the 12-hour format (see also [Country-Specific Formats](ABENCOUNTRY_FORMATS.html)).

See also the example for [`COND`](ABENCONDITIONAL_EXPRESSION_COND.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(time) = cl\_demo\_date\_time=>get\_user\_time( ). \\n\\ \\nIF time < '120000'. \\n out->write( \\n |\\{ time TIME = ISO \\} AM| ). \\nELSEIF time > '120000' AND \\n time < '240000'. \\n out->write( \\n |\\{ CONV t( time - 12 \* 3600 ) TIME = ISO \\} PM| ). \\nELSE. \\n out->write( \\n |High Noon| ). \\nENDIF. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abencontrol\_structures.html abenabap\_branches.html