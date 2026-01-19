---
title: "ABAPDELETE_DBTAB_OBSOLETE"
description: |
  ABAPDELETE_DBTAB_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDELETE_DBTAB_OBSOLETE.htm"
abapFile: "ABAPDELETE_DBTAB_OBSOLETE.html"
keywords: ["delete", "do", "if", "class", "data", "ABAPDELETE", "DBTAB", "OBSOLETE"]
---

`DELETE \{ dbtab | *dbtab \} VERSION vers.`

This variant of the statement `DELETE` works essentially like the [short form](ABAPDELETE_OBSOLETE.html) of the ABAP SQL statement, but belongs, along with the addition `VERSION`, to the number of [obsolete access statements](ABENDB_ACCESS_OBSOLETE.html), for which for `dbtab`, the name of a DDIC database table or a [DDIC table view](ABENTABLE_VIEW_GLOSRY.html) must be specified, beginning with *T* and comprising no more than five characters.

The use of addition `VERSION` means that the database table or view `dbtab` is not processed. Instead the table whose name is made up of *T* and the content of `vers` is processed. `vers` expects a data object with a maximum of four characters, of type `c`. The content of the key fields will continue to be obtained from the table work area `dbtab` or `dbtab*`. The statement is not executed if the database table or view does not exist or if it does not meet the name conventions specified above.

Usage of the `VERSION` addition for `DELETE`.

The ABAP SQL syntax to be used instead reads:

-   The `VERSION` addition is not allowed in classes. Instead, specify the database table or view dynamically in its operand position in ABAP SQL.
-   None of the additions possible in ABAP SQL can be specified with `VERSION`.
-   Obsolete access statements do not support [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html). The [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) of a database table must be specified explicitly. Note that application programs should only use data from the [current client](ABENCURRENT_CLIENT_GLOSRY.html).

TABLES t100. \\nDATA vers TYPE c LENGTH 4. \\n... \\nvers = '100'. \\n... \\nt100-sprsl = 'E'. \\nt100-arbgb = 'BC'. \\nt100-msgnr = '100'. \\nDELETE t100 VERSION vers. DATA: wa TYPE t100, \\n dbtab TYPE c LENGTH 5. \\n... \\ndbtab = 'T100'. \\n... \\nwa-sprsl = 'E'. \\nwa-arbgb = 'BC'. \\nwa-msgnr = '100'. \\nDELETE (dbtab) FROM @wa. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abendb\_access\_obsolete.html