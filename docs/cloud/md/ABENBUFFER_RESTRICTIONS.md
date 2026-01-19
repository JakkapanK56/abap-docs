---
title: "ABENBUFFER_RESTRICTIONS"
description: |
  ABENBUFFER_RESTRICTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBUFFER_RESTRICTIONS.htm"
abapFile: "ABENBUFFER_RESTRICTIONS.html"
keywords: ["select", "do", "if", "try", "data", "types", "internal-table", "ABENBUFFER", "RESTRICTIONS"]
---

Only [transparent tables](ABENTRANSPARENT_TABLE_GLOSRY.html) can be buffered. [Global temporary tables](ABENGLOBAL_TEMPORARY_TABLE_GLOSRY.html) cannot be buffered. There is no special restriction on the key length of the table when buffering, which means that keys in buffered tables can be up to [900 bytes](ABENDDIC_DATABASE_TABLES_KEY.html) long. For database accesses using [AMDP](ABENAMDP_GLOSRY.html), the table buffer is not used in principle.

Any [writes](ABENABAP_SQL_WRITING.html) access the data in the database table directly and trigger [asynchronous buffer synchronization](ABENBUFFER_SYNCHRO.html). After the invalidation of an entry in the buffer using a write statement, the next five reads that should have accessed the entry bypass the buffer of the current AS instance by default. The next read performed on the changed entry reloads it into the buffer and removes the invalidation.

A [read](ABENABAP_SQL_READING.html) statement should generally access the table buffer, but there are some restrictions that cause the buffer to be bypassed. Then, the statement is processed on the database and the DDIC database tables, DDIC views or CDS entities accessed directly.

-   For read accesses, the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) is used, which does not support all elements of ABAP SQL statements. If an ABAP SQL statement is used that is not supported by the ABAP SQL in-memory engine (see the topic [ABAP SQL In-Memory Engine, Restrictions](ABENSQL_ENGINE_RESTR.html)), the table buffer is bypassed.
-   For the [buffering types](ABENBUFFER_TYPE.html)\\ [single record buffering](ABENBUFFER_SINGLE_BUFFERING.html) and [generic buffering](ABENBUFFER_GENERIC_BUFFERING.html) there are additional restrictions for `WHERE` conditions that can also cause the buffer to be bypassed:

-   When a table or view with single record buffering is accessed, all key fields of the primary key must be listed using equality conditions joined using `AND`.
-   When a generically buffered area is accessed, it must be specified completely using equality conditions joined using `AND`.
-   Only [host variables](ABENHOST_VARIABLE_GLOSRY.html) or [host expressions](ABENHOST_EXPRESSION_GLOSRY.html) can be used on the right side of a relational expression that is used to identify a single record or a generically buffered area.
-   If [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) is used when accessing a table or view with generic buffering, the generic area must be specified exactly, and multiple generic areas cannot be joined using `OR`.
-   In the variant of the operator `IN` with an [operand list](ABENWHERE_LOGEXP_LIST_IN.html), only column specifications are allowed on the left side of `IN` and only host variables or expressions on the right side.

-   Reads on a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) that does not meet the [prerequisites](ABENCDS_V1_BUFFERING.html) for buffering bypass the buffer.

-   For performance reasons, the fact that the table buffer is bypassed when these restrictions are not met should always be remembered when accessing buffered tables or views.
-   To bypass the table buffer in the statement `SELECT` explicitly, the addition [`BYPASSING BUFFER`](ABAPSELECT_BYPASSING_BUFFER.html) should always be used. It is not enough to rely on the implicit behavior itself.
-   [`JOIN`](ABAPSELECT_JOIN.html) expressions currently always bypass the buffer. The ABAP SQL in-memory engine supports join expressions for internal tables accessed by [`SELECT ... FROM @itab`](ABAPSELECT_ITAB.html) but not yet for database tables in the table buffer.
-   The prerequisites for [table buffering of CDS view entities](ABENCDS_V2_VIEW_BUFFERING.html) are checked as restrictions for the view itself. If a CDS view entity can be enabled for table buffering and buffering is switched on with a [CDS entity buffer](ABENCDS_ENTITY_BUFFER_GLOSRY.html), there should be no reason for ABAP SQL to bypass the buffer.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abensap\_puffering.html