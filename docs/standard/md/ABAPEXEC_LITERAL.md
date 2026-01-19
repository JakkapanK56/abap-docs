---
title: "ABAPEXEC_LITERAL"
description: |
  ABAPEXEC_LITERAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXEC_LITERAL.htm"
abapFile: "ABAPEXEC_LITERAL.html"
keywords: ["select", "if", "data", "ABAPEXEC", "LITERAL"]
---

``... \{\ [+|-]n[n[n[...]]]\      | 'c[c[c[...]]]' | `[c[c[c[...]]]]` \} ...``

Appropriate [literals](ABENABAP_LITERAL_GLOSRY.html) can be specified in ABAP syntax at suitable read positions in embedded [Native SQL](ABENNATIVE_SQL_GLOSRY.html) statements.

The [literal operator](ABENLITERAL_OPERATOR_GLOSRY.html) cannot be used in static Native SQL.

As it is common in ABAP, [trailing blanks](ABENSTRING_PROCESSING_TRAIL_BLANKS.html) are truncated in text field literals.

Reading of a row from the database table `SPFLI` using static Native SQL. The required row is specified using literals. The target range of the [`INTO` clause](ABAPEXEC_INTO.html) is specified as a [host variable](ABAPEXEC_HOST.html). If a row was found, `sy-subrc` is set to 0, otherwise it is set to 4.

DATA: BEGIN OF wa, \\n cityfrom TYPE spfli-cityfrom, \\n cityto TYPE spfli-cityto, \\n END OF wa. \\n\\ \\nEXEC SQL. \\n SELECT cityfrom, cityto \\n INTO :wa \\n FROM spfli \\n WHERE mandt = '100' AND \\n carrid = 'LH' AND connid = '0400' \\nENDEXEC. abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abennativesql.html abapexec.html