---
title: "ABAPREFRESH_OBSOLETE"
description: |
  ABAPREFRESH_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREFRESH_OBSOLETE.htm"
abapFile: "ABAPREFRESH_OBSOLETE.html"
keywords: ["select", "do", "if", "class", "data", "internal-table", "ABAPREFRESH", "OBSOLETE"]
---

[Short Reference](ABAPREFRESH_FROM_SHORTREF.html)

`REFRESH itab FROM TABLE \{ dbtab | *dbtab\}.`

The variant of the statement `REFRESH`, which is forbidden in classes, initializes the internal table `itab`, reads multiple rows from a database table or [DDIC table view](ABENTABLE_VIEW_GLOSRY.html)\\ `dbtab`, and appends their content to the internal table `itab`. The row content is cast to the line type of the internal table. If the line type of the internal table is too short, it is truncated on the right.

`dbtab` expects a database table or a [DDIC table view](ABENTABLE_VIEW_GLOSRY.html) that starts with *T* and has a maximum length of five characters. For the database table or view `dbtab`, a [table work area](ABENTABLE_WORK_AREA_GLOSRY.html) or an [additional table work area](ABAPTABLES_ASTERISK.html) must be declared using the statement [`TABLES`](ABAPTABLES.html). The internal table `itab` must be an [index table](ABENINDEX_TABLE_GLOSRY.html). All components of the table work area that match the primary key fields of the database table or view `dbtab` must be character-like.

The rows to be read are determined by the content of the components of the table work area, which correspond with the [primary key fields](ABENPRIMARY_KEY_GLOSRY.html) of the database table or view `dbtab`. The content of these components is taken left-aligned as a search key, and the system makes a generic search for suitable entries in the database table or view. The search key handles blanks as if they match all values.

If the database table or view does not match the specified naming conventions, the behavior of the statement is undefined.

This statement always sets `sy-subrc` to 0.

Reads multiple rows from the database table `T100` into an internal table `itab`.

The ABAP SQL syntax to be used instead reads:

-   This form of the `REFRESH` statement must be replaced by the [`SELECT`](ABAPSELECT.html) statement.
-   Obsolete access statements do not support [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html). The [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) of a database table must be specified explicitly. Note that application programs should only use data from the [current client](ABENCURRENT_CLIENT_GLOSRY.html).

-   *Cause:* No memory available to execute the statement.
    *Runtime error:*\\ `REFRESH_NO_SHORT_MEMORY`

TABLES t100. \\nDATA itab TYPE STANDARD TABLE OF t100. \\nt100-sprsl = 'E'. \\nt100-arbgb = 'BC'. \\nREFRESH itab FROM TABLE t100. DATA itab TYPE STANDARD TABLE OF t100. \\nSELECT \* \\n FROM t100 \\n WHERE sprsl = 'E' AND \\n arbgb LIKE 'BC%' \\n INTO TABLE @itab. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abendb\_access\_obsolete.html