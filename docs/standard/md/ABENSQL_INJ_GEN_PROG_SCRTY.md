---
title: "ABENSQL_INJ_GEN_PROG_SCRTY"
description: |
  ABENSQL_INJ_GEN_PROG_SCRTY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_INJ_GEN_PROG_SCRTY.htm"
abapFile: "ABENSQL_INJ_GEN_PROG_SCRTY.html"
keywords: ["select", "if", "case", "method", "class", "data", "ABENSQL", "INJ", "GEN", "PROG", "SCRTY"]
---

Generic programming is the most unsafe of all dynamic programming techniques. In principle, the [ABAP statement injections](ABENGENERIC_PROG_SCRTY.html) cover all individual security risks that can occur in dynamic programming, and most significantly SQL injections. The more generic the programming, the more difficult it is to prevent SQL injections from exploiting input that originates outside the program.

The following program section demonstrates [static embedded of Native SQL](ABENNATIVESQL.html) in a program generated using [`GENERATE SUBROUTINE POOL`](ABAPGENERATE_SUBROUTINE_POOL.html). Before [ADBC](ABENADBC_GLOSRY.html) was introduced, this was the only way of creating dynamic parts in [Native SQL](ABENNATIVE_SQL_GLOSRY.html). In the case in question, the input `key` must be escaped using the method `ESCAPE_QUOTES` of the class `CL_ABAP_DYN_PRG` to prevent SQL injections. In a more realistic example, of course, [host variables](ABAPEXEC_HOST.html) would be the preferred method.

DATA source TYPE TABLE OF string WITH EMPTY KEY. \\nsource = VALUE #( \\n ( \`PROGRAM.\` ) \\n ( \`FORM exec\_sql CHANGING name TYPE string.\` ) \\n ( \` EXEC SQL.\` ) \\n ( \` SELECT carrname\` ) \\n ( \` INTO :name\` ) \\n ( \` FROM scarr\` ) \\n ( \` WHERE mandt = 'sy-mandt' AND\` ) \\n ( \` carrid = 'key'\` ) \\n ( \` ENDEXEC.\` ) \\n ( \`ENDFORM.\` ) ). \\n\\ \\nDATA key TYPE string. \\ncl\_demo\_input=>request( CHANGING field = key ). \\nREPLACE \`sy-mandt\` IN TABLE source WITH sy-mandt. \\nREPLACE \`key\` IN TABLE source \\n WITH cl\_abap\_dyn\_prg=>escape\_quotes( to\_upper( key ) ). \\n\\ \\nDATA name TYPE string. \\nGENERATE SUBROUTINE POOL source NAME FINAL(pool). \\nIF sy-subrc = 0. \\n PERFORM exec\_sql IN PROGRAM (pool) CHANGING name. \\nENDIF. \\ncl\_demo\_output=>display( name ). abenabap.html abenabap\_reference.html abenabap\_security.html abendynamic\_programming\_scrty.html abensql\_injections\_scrty.html