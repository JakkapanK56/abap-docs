---
title: "ABENCONCATENATION_FUNCTIONS"
description: |
  ABENCONCATENATION_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCONCATENATION_FUNCTIONS.htm"
abapFile: "ABENCONCATENATION_FUNCTIONS.html"
keywords: ["insert", "if", "data", "types", "internal-table", "ABENCONCATENATION", "FUNCTIONS"]
---

`... concat_lines_of( [table =] itab [sep = sep] ) ...`

This [built-in function](ABENBUILT_IN_FUNCTIONS.html) concatenates all line content of an internal table `itab` and returns the result as a character string. `itab` expects an [index table](ABENINDEX_TABLE_GLOSRY.html) with character-like line type. `itab` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html).

`sep` can be used to specify a string as a separator, which is then inserted between the lines. `sep` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html). If `sep` is not specified, the line content of the internal table is appended to each other directly. If the line types or the argument `sep` have a fixed length, trailing blanks are ignored.

The formal parameter `table` must be specified explicitly only if `sep` is also specified.

The return value has the type `string`.

The [concatenation operator](ABENCONCATENATION_OPERATOR_GLOSRY.html)\\ `&&` can be used to concatenate elementary character strings.

This function returns *ABAP Objects*.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: c80 TYPE c LENGTH 80, \\n itab TYPE TABLE OF c80 WITH EMPTY KEY. \\n\\ \\nFINAL(itab) = VALUE itab( ( 'ABAP' ) ( 'Objects' ) ). \\n\\ \\nout->write( \\n concat\_lines\_of( table = itab sep = \` \` ) ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenprocess\_functions.html