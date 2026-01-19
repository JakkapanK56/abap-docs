---
title: "ABENLOGEXP_BITMASKS"
description: |
  ABENLOGEXP_BITMASKS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGEXP_BITMASKS.htm"
abapFile: "ABENLOGEXP_BITMASKS.html"
keywords: ["if", "data", "ABENLOGEXP", "BITMASKS"]
---

The table below shows the comparison operators for comparisons of operands (single data objects or return values or [bit expressions](ABENBIT_EXPRESSION_GLOSRY.html)) with bit patterns in byte-like operands in [comparison expressions](ABENCOMPARISON_EXPRESSION_GLOSRY.html). The data type of the right operand `operand2` must be byte-like (`x` or `xstring`). It contains the bit pattern with which the left operand `operand1` is compared. If `operand1` is shorter than `operand2`, hexadecimal zeros are appended to the right of `operand1` in accordance with the [comparison rules](ABENLOGEXP_RULES_OPERANDS.html) to lengthen it appropriately. No further conversion takes place. The data type of `operand1` must also be byte-like (`x` or `xstring`).

For the result of the comparisons, it is irrelevant whether the bits that are 0 in `operand2`, are 1 or 0 in `operand1`.

The logical expression in the `IF` statement is false because `00` is appended to the right of `hex1` before the comparison. If the content of `hex2` were `111100`, the comparison would be true.

DATA: hex1 TYPE xstring, \\n hex2 TYPE xstring. \\n\\ \\nhex1 = 'FFFF'. \\nhex2 = '111111'. \\n\\ \\nIF hex1 O hex2. \\n ... \\nENDIF. `**operator**` **Meaning** `O` Ones: True, if the bits that are 1 in `operand2`, are also 1 in `operand1`. If `operand2` contains only zeros, the comparison expression is always true. `Z` Zeros: True, if the bits that are 1 in `operand2` are 0 in `operand1`. If `operand2` contains only zeros, the comparison expression is always true. `M` Mixed: True, if of the bits that are 1 in `operand2`, at least one is 1 and one is 0 in `operand1`. If `operand2` contains only zeros, the comparison expression is always false. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_op.html