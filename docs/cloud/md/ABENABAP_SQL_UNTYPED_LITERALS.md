---
title: "ABENABAP_SQL_UNTYPED_LITERALS"
description: |
  ABENABAP_SQL_UNTYPED_LITERALS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SQL_UNTYPED_LITERALS.htm"
abapFile: "ABENABAP_SQL_UNTYPED_LITERALS.html"
keywords: ["select", "while", "if", "try", "data", "ABENABAP", "SQL", "UNTYPED", "LITERALS"]
---

``... \{\ [+|-]n[n[n[...]]]\      | 'c[c[c[...]]]' | `[c[c[c[...]]]]` \} ...``

[Untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html) in ABAP SQL correspond to general [ABAP literals](ABENLITERAL.html) and the same rules apply. In ABAP SQL, untyped literals can be specified in read positions of ABAP SQL statements where [host variables](ABENABAP_SQL_HOST_VARIABLES.html) are possible. The following applies, depending on the operand position:

Reading of data from the DDIC database table `SPFLI` using ABAP SQL. The read rows are specified as untyped text literals in the `WHERE` condition. After `UP TO`, an untyped numeric literal specifies the maximum number of rows to read.

-   If an untyped literal is specified in an operand position in which it is handled like an [elementary SQL expression](ABENSQL_ELEM.html), the corresponding rules apply and the untyped literal is mapped to a dictionary type and evaluated accordingly on the database.
-   If an untyped literal is specified in an operand position in which it is not handled like an SQL expression, it is handled like a [host variable](ABENABAP_SQL_HOST_VARIABLES.html). If necessary, an ABAP specific type conversion takes place and a [lossless assignment](ABAPMOVE_EXACT.html) to the data type required in the operand position must be possible. Non-matching untyped literals produce, syntax errors.

-   While general ABAP supports untyped literals only, ABAP SQL also supports [typed literals](ABENABAP_SQL_TYPED_LITERALS.html) which should be preferred.
-   In some operand positions in which untyped literals are allowed and [host expressions](ABENABAP_SQL_HOST_EXPRESSIONS.html) are forbidden, an untyped literal can be specified with the syntax `@( literal )` and is handled as an untyped literal and not as an expression.

SELECT FROM spfli \\n FIELDS 'Lufthansa' AS name, \\n cityfrom, \\n cityto \\n WHERE carrid = 'LH' AND \\n countryfr = 'DE' \\n INTO TABLE @FINAL(wa) \\n UP TO 10 ROWS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abensql\_operands.html abenabap\_sql\_literals.html