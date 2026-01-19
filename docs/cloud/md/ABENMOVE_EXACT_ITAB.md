---
title: "ABENMOVE_EXACT_ITAB"
description: |
  ABENMOVE_EXACT_ITAB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMOVE_EXACT_ITAB.htm"
abapFile: "ABENMOVE_EXACT_ITAB.html"
keywords: ["do", "if", "try", "catch", "data", "types", "internal-table", "ABENMOVE", "EXACT", "ITAB"]
---

The operator [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) checks a table specified as an operand line-by-line against the tabular target type:

The [table category](ABENTABLE_CATEGORY_GLOSRY.html) and the [table key](ABENTABLE_KEY_GLOSRY.html) are ignored by the check.

If the check raises an exception due to an invalid value or loss of values, the target table is filled with all lines assigned up to that point.

The first seven lines of the internal table `itab` are assigned to the internal table `jtab`. When the eighth line is assigned, the exception `CX_SY_CONVERSION_NO_DATE` occurs.

-   If the line types are elementary, each line is checked for [elementary data objects](ABENMOVE_EXACT_ELEMENTARY.html).
-   If the line types are structured, each line is checked for [structures](ABENMOVE_EXACT_STRUCTURE.html).
-   If the line types are tabular, the check described here is performed. If the inner table is a table with an elementary line type, the line types must be compatible.

-   If an internal table with elementary line type is converted, this line type does not have to be compatible with the target line type but only needs to be convertible according to the conditions of `EXACT`. If an internal table with elementary line type is converted that occurs as an inner table of another table, it is handled like a structure component and the line types must be compatible.
-   If internal tables are converted using the operator `EXACT`, only internal tables with elementary line type can raise an exception.

DATA itab TYPE STANDARD TABLE OF d \\n WITH EMPTY KEY. \\n\\ \\nFINAL(invalid\_date) = '20160ß01'. \\n\\ \\nitab = VALUE #( ( CONV d( '20160101' ) ) \\n ( CONV d( '20160201' ) ) \\n ( CONV d( '20160301' ) ) \\n ( CONV d( '20160401' ) ) \\n ( CONV d( '20160501' ) ) \\n ( CONV d( '20160601' ) ) \\n ( CONV d( '20160701' ) ) \\n ( CONV d( invalid\_date ) ) \\n ( CONV d( '20160901' ) ) \\n ( CONV d( '20161001' ) ) \\n ( CONV d( '20161101' ) ) \\n ( CONV d( '20161201' ) ) ). \\n\\ \\nDATA jtab TYPE SORTED TABLE OF string \\n WITH UNIQUE KEY table\_line. \\n\\ \\nTRY. \\n jtab = EXACT #( itab ). \\n CATCH cx\_sy\_conversion\_no\_date. \\nENDTRY. \\n\\ \\ncl\_demo\_output=>display( jtab ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenlossless\_move.html abapmove\_exact.html