---
title: "ABENSQL_EXP_PARENTHESES"
description: |
  ABENSQL_EXP_PARENTHESES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_EXP_PARENTHESES.htm"
abapFile: "ABENSQL_EXP_PARENTHESES.html"
keywords: ["select", "if", "ABENSQL", "EXP", "PARENTHESES"]
---

``... ( [`sql_exp`](ABAPSQL_EXPR.html) ) ...``

Every full SQL expression [`sql_exp`](ABAPSQL_EXPR.html) can be enclosed in parentheses `( ... )`. There must be a blank after the opening parenthesis and in front of the closing parenthesis. Parenthesis affect the priority with which expressions are evaluated. Parenthesis levels are evaluated from inside out and from left to right. The result of a parenthesis is the result of the outermost expression in the parenthesis.

Parenthesizing of a subtraction as the dividend in a division.

-   Using parentheses always means specifying an [SQL expression](ABAPSQL_EXPR.html). Parentheses can only be used for operand positions for which SQL expressions are possible. This particularly applies to placing parentheses around [elementary SQL expressions](ABENSQL_ELEM.html). Without parentheses, they can also be used in specific operand positions in which no SQL expressions are possible.
-   Parentheses are used especially in [arithmetic expressions](ABENSQL_ARITH.html) to affect the priority of calculations.

SELECT FROM sflight \\n FIELDS carrid, \\n connid, \\n fldate, \\n ( CAST( seatsmax AS FLTP ) - CAST( seatsocc AS FLTP ) ) \\n / CAST( seatsmax AS FLTP ) AS availability \\n ORDER BY carrid, connid, fldate \\n INTO TABLE @FINAL(result). \\n\\ \\ncl\_demo\_output=>display( result ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html