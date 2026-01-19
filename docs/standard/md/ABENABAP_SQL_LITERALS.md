---
title: "ABENABAP_SQL_LITERALS"
description: |
  ABENABAP_SQL_LITERALS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_LITERALS.htm"
abapFile: "ABENABAP_SQL_LITERALS.html"
keywords: ["if", "types", "ABENABAP", "SQL", "LITERALS"]
---

[ABAP SQL literals](ABENABAP_SQL_LITERAL_GLOSRY.html) can be used in read positions of ABAP SQL statements where [host variables](ABENABAP_SQL_HOST_VARIABLES.html) are possible. Unlike host variables, they are not prefixed with the escape character `@`. The [literal operator](ABENLITERAL_OPERATOR_GLOSRY.html) can be used to combine two literals of the same type into a single literal.

In ABAP SQL, there are two different kinds of literals:

-   [Typed literals](ABENABAP_SQL_TYPED_LITERALS.html) (cover most built-in types of the ABAP Dictionary)
-   Typed literals are always handled like elementary SQL expressions
-   [Untyped literals](ABENABAP_SQL_UNTYPED_LITERALS.html) (character literals and numeric literals)
-   Untyped literals are either handled like elementary SQL expressions or like host variables.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abensql\_operands.html