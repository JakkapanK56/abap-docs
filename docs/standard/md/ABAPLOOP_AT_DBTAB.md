---
title: "ABAPLOOP_AT_DBTAB"
description: |
  ABAPLOOP_AT_DBTAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLOOP_AT_DBTAB.htm"
abapFile: "ABAPLOOP_AT_DBTAB.html"
keywords: ["select", "loop", "do", "if", "class", "data", "ABAPLOOP", "DBTAB"]
---

[Short Reference](ABAPLOOP_AT_DBTAB_SHORTREF.html)

`LOOP AT \{ dbtab | *dbtab \}\ [VERSION vers].`\\ 
  `...`\\ 
`ENDLOOP.`

[`... VERSION vers`](#ABAP_ONE_ADD@1@)

The statements `LOOP` and `ENDLOOP` define a loop around a statement block, which is forbidden in classes. `dbtab` expects a database table or [DDIC table view](ABENTABLE_VIEW_GLOSRY.html) that starts with *T* and has a maximum length of five characters. For the database table or view `dbtab`, a [table work area](ABENTABLE_WORK_AREA_GLOSRY.html) or an [additional table work area](ABAPTABLES_ASTERISK.html) must be declared using the statement [`TABLES`](ABAPTABLES.html). All components of the table work area that match the primary key fields of the database table or view `dbtab` must be character-like.

In each loop pass, the statement `LOOP` reads a row from the database table or view `dbtab` and assigns its content either to the table work area, or if `*dbtab` is specified, to the additional table work area. The rows to be read are determined by the content of the components of the table work area that match the [primary key fields](ABENPRIMARY_KEY_GLOSRY.html) of the database table or view `dbtab`. Before the first loop pass, the content of these components is taken left-aligned as the search key and the database table or view is searched generically for suitable entries. The search key handles blanks as if they match all values.

If a database table or view is specified that does not start with *T*, the first letter is implicitly replaced by *T*. The loop is not executed if the database table or view does not exist.

If the addition `VERSION` is specified, the database table or view `dbtab` is not read, and the table or view whose name is composed of *T* and the content of `vers` is read instead. `vers` expects a data object with a maximum of four characters, of type `c`. The content of the row is still assigned to the table work area of `dbtab` or `*dbtab` and its type is cast. If the table work area is too short, a runtime error occurs.

Sequential reading of rows from database table `T100`.

The ABAP SQL syntax to be used instead reads:

-   This form of the `LOOP`\-loop is not allowed in classes. It must be replaced by the [`SELECT`](ABAPSELECT.html) statement.
-   Obsolete access statements do not support [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html). The [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) of a database table must be specified explicitly. Note that application programs should only use data from the [current client](ABENCURRENT_CLIENT_GLOSRY.html).

TABLES t100. \\n\\ \\nt100 = space. \\nt100-sprsl = 'E'. \\nt100-arbgb = 'BC'. \\nt100-msgnr = '1'. \\n\\ \\nLOOP AT t100. \\n ... \\nENDLOOP. DATA wa TYPE t100. \\n\\ \\nSELECT \* \\n FROM t100 \\n WHERE sprsl = 'E' AND \\n arbgb = 'BC' AND \\n msgnr LIKE '1%' \\n INTO @wa. \\n ... \\nENDSELECT. `**sy-subrc**` **Meaning** 12 The database table or view was not found. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abendb\_access\_obsolete.html