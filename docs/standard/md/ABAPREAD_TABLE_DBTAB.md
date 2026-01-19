---
title: "ABAPREAD_TABLE_DBTAB"
description: |
  ABAPREAD_TABLE_DBTAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREAD_TABLE_DBTAB.htm"
abapFile: "ABAPREAD_TABLE_DBTAB.html"
keywords: ["select", "do", "if", "try", "class", "data", "ABAPREAD", "TABLE", "DBTAB"]
---

[Short Reference](ABAPREAD_TABLE_DBTAB_SHORTREF.html)

`READ TABLE \{ dbtab | *dbtab \}`\\ 
           `[WITH KEY key]`\\ 
           `[SEARCH \{FKEQ|FKGE|GKEQ|GKGE\}]`\\ 
           `[VERSION vers].`

[1. `... WITH KEY key`](#ABAP_ADDITION_1@3@)

[2. `... SEARCH \{FKEQ|FKGE|GKEQ|GKGE\}`](#ABAP_ADDITION_2@3@)

[3. `... VERSION vers`](#ABAP_ADDITION_3@3@)

This variant of the statement `READ`, which is forbidden in classes, reads a row from the database table `dbtab` or from a [DDIC table view](ABENTABLE_VIEW_GLOSRY.html) and assigns the content to a work area.

A [table work area](ABENTABLE_WORK_AREA_GLOSRY.html)\\ `dbtab` or `*dbtab` is used implicitly as the work area. This table work area must be declared using the statement [`TABLES`](ABAPTABLES.html). If the name `*dbtab` is used instead of the name of the database table or view `dbtab`, `dbtab` is accessed, but the [additional table work area](ABAPTABLES_ASTERISK.html) is used. All components of the table work area that match the [primary key fields](ABENPRIMARY_KEY_GLOSRY.html) of the database table or view `dbtab` must be character-like.

`dbtab` expects a database table or [DDIC table view](ABENTABLE_VIEW_GLOSRY.html) that starts with *T* and has a maximum length of five characters. If a database table or view is specified that does not begin with *T*, the first letter is implicitly replaced by *T*.

Without the addition `WITH KEY`, the row to be read is determined by the content of the components of the table work area that match the primary key fields of database table or view `dbtab`.

The addition `WITH KEY` determines the key by using the content of data object `key`, which expects a [flat](ABENFLAT_GLOSRY.html) character-like data type.

The content of the table work area or the data object `key` is taken from the database table or view as a search key (left-aligned with the length of the key components). A search for a matching entry is then made in the database table.

The addition `SEARCH` determines how the row is searched for:

If the addition `VERSION` is specified, the database table or view `dbtab` is not read, and the table whose name is composed of *T* and the content of `vers` is read instead. `vers` expects a data object with a maximum of four characters, of type `c`. If the database table or view is not available, `sy-subrc` is set to 12.

The content of the row is still assigned to the table work area of `dbtab` or `*dbtab`, where its type is cast. If the table work area is too short, `sy-subrc` is set to 8.

Reading of a row from the database table `T100` or another database table that starts with *T*.

The ABAP SQL syntax to be used instead reads as follows. It uses a dynamic `FROM` clause and `CREATE DATA` to create a suitable work area for the `INTO` clause.

-   This form of `READ` statement is not allowed in classes. It must be replaced by the [`SELECT`](ABAPSELECT.html) statement.
-   Obsolete access statements do not support [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html). The [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) of a database table must be specified explicitly. Note that application programs should only use data from the [current client](ABENCURRENT_CLIENT_GLOSRY.html).

-   Without the addition `SEARCH` and with `SEARCH FKEQ`, the first row in the database table or view that matches the search key is searched for.
-   `SEARCH GKEQ` is used to search generically for the first row of the database table or view that matches the search key. The search key handles blanks as if they match all values.
-   `SEARCH FKGE` searches the first row of the database table or view that is greater than or equal to the search key.
-   `SEARCH GKGE` generically searches the first row of the database table or view that is greater than or equal to the search key. The search key handles blanks as if they match all values.

TABLES t100. \\n\\ \\nPARAMETERS p TYPE c LENGTH 4 DEFAULT '100T'. \\n\\ \\nt100-sprsl = 'E'. \\nt100-arbgb = 'BC'. \\n\\ \\nREAD TABLE t100 SEARCH FKEQ VERSION p. \\nIF sy-subrc = 0. \\n ... \\nENDIF. PARAMETERS p TYPE c LENGTH 5 DEFAULT 'T100T'. \\n\\ \\nDATA dref TYPE REF TO data. \\n\\ \\nCREATE DATA dref TYPE (p). \\n\\ \\nSELECT SINGLE \* \\n FROM (p) \\n WHERE sprsl = 'E' AND \\n arbgb = 'BC' \\n INTO @dref->\*. \\n\\ \\nIF sy-subrc = 0. \\n ... \\nENDIF. `**sy-subrc**` **Meaning** 0 A table entry was read. 4 No table entry was found for the specified search key. 8 The table work area is too short. 12 The database table or view was not found. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abendb\_access\_obsolete.html