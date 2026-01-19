---
title: "ABENDB_ACCESS_OBSOLETE"
description: |
  ABENDB_ACCESS_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDB_ACCESS_OBSOLETE.htm"
abapFile: "ABENDB_ACCESS_OBSOLETE.html"
keywords: ["delete", "loop", "do", "if", "data", "internal-table", "ABENDB", "ACCESS", "OBSOLETE"]
---

The following statements are predecessors of [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and are not part of it. The keywords of the obsolete access statements are based on the [processing statements for internal tables](ABENTABLE_PROCESSING_STATEMENTS.html) and not on [SQL](ABENSQL_GLOSRY.html).

The statements listed here are only possible for reasons of downward compatibility and only for database tables or [DDIC table views](ABENTABLE_VIEW_GLOSRY.html) whose names begin with *T* and have a maximum of five characters.

The statements `MODIFY` and `DELETE` specified here overlap the [short forms](ABENABAP_SQL_SHORT_FORMS_OBSOLETE.html) of ABAP SQL which are also obsolete. Since the keywords `MODIFY` and `DELETE` are also in SQL, these statements were transferred to ABAP SQL. `MODIFY` and `DELETE` stop being ABAP SQL statements only when used with the addition `VERSION`.

-   [`READ TABLE dbtab`](ABAPREAD_TABLE_DBTAB.html)
-   [`LOOP AT dbtab`](ABAPLOOP_AT_DBTAB.html)
-   [`REFRESH itab FROM`](ABAPREFRESH_OBSOLETE.html)
-   [`MODIFY dbtab - obsolete`](ABAPMODIFY_DBTAB_OBSOLETE.html)
-   [`DELETE dbtab - obsolete`](ABAPDELETE_DBTAB_OBSOLETE.html)

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html