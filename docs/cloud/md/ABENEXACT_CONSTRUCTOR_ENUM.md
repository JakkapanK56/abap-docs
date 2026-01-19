---
title: "ABENEXACT_CONSTRUCTOR_ENUM"
description: |
  ABENEXACT_CONSTRUCTOR_ENUM - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENEXACT_CONSTRUCTOR_ENUM.htm"
abapFile: "ABENEXACT_CONSTRUCTOR_ENUM.html"
keywords: ["do", "if", "try", "catch", "data", "types", "ABENEXACT", "CONSTRUCTOR", "ENUM"]
---

If the constructor expression [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) is applied to [enumerated types](ABENENUM_TYPE_GLOSRY.html), the same [rules](ABENCONV_CONSTRUCTOR_ENUM.html) apply as to the conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html):

The conditions of losslessness also apply:

If the conversion operator is used, the operand is converted to the base type `c` with length 4, cutting off any surplus places. If the lossless operator is used, this results in an exception.

If an arithmetic expression is used in the conversion operator, the result is converted to the base type `i`, cutting off the decimal places. If the lossless operator is used, this results in an exception.

-   An [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) can be converted to the [base type](ABENBASE_TYPE_GLOSRY.html) of its enumerated type, as with `CONV`.
-   `... EXACT base_type( enum_dobj ) ...`
-   A data object that can be converted to the [base type](ABENBASE_TYPE_GLOSRY.html) of an [enumerated type](ABENENUM_TYPE_GLOSRY.html) can be converted to the enumerated type, as with `CONV`.
-   `... EXACT enum_type( dobj ) ...`

-   If a data object that can be converted to the base type is converted to the enumerated type, this happens in accordance with the [rules](ABAPMOVE_EXACT.html) of [lossless assignment](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html).
-   If an [arithmetic expression](ABAPCOMPUTE_ARITH.html) is used as the operand of a conversion to the enumerated type, the result must be obtained in accordance with the [rules](ABENLOSSLESS_CALCULATION.html) of [lossless calculation](ABENLOSSLESS_CALCULATION_GLOSRY.html).

TYPES: \\n char8 TYPE c LENGTH 4, \\n BEGIN OF ENUM text BASE TYPE char8, \\n first VALUE IS INITIAL, \\n second VALUE 'Seco', \\n third VALUE 'Thrd', \\n END OF ENUM text. \\n\\ \\nFINAL(result1) = CONV text( \`Seco\` && \`nd\` ). \\n\\ \\nTRY. \\n FINAL(result2) = EXACT text( \`Seco\` && \`nd\` ). \\n CATCH cx\_sy\_conversion\_data\_loss. \\n cl\_demo\_output=>display( \`Oops!\` ). \\nENDTRY. \\n TYPES: \\n BEGIN OF ENUM number, \\n n0, n1, n2, \\n END OF ENUM number. \\n\\ \\nFINAL(result1) = CONV number( + '1.2' ). \\n\\ \\nTRY. \\n FINAL(result2) = EXACT number( + '1.2' ). \\n CATCH cx\_sy\_conversion\_rounding. \\n cl\_demo\_output=>display( \`Oops!\` ). \\nENDTRY. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenlossless\_move.html abenconstructor\_expression\_exact.html