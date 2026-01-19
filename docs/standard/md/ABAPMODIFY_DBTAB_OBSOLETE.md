---
title: "ABAPMODIFY_DBTAB_OBSOLETE"
description: |
  ABAPMODIFY_DBTAB_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMODIFY_DBTAB_OBSOLETE.htm"
abapFile: "ABAPMODIFY_DBTAB_OBSOLETE.html"
keywords: ["do", "if", "class", "data", "ABAPMODIFY", "DBTAB", "OBSOLETE"]
---

[Short Reference](ABAPMODIFY_DBTAB_SHORTREF.html)

`MODIFY \{ dbtab | *dbtab \} VERSION vers.`

This variant of the statement `MODIFY` works essentially like the [short form](ABAPMODIFY_OBSOLETE.html) of the ABAP SQL statement, but is one of the [obsolete access statements](ABENDB_ACCESS_OBSOLETE.html) along with the addition `VERSION`. For these statements, the name of a database table or a [DDIC table view](ABENTABLE_VIEW_GLOSRY.html) must be specified for `dbtab`, beginning with *T* and comprising no more than five characters.

The addition `VERSION` dictates that the database table or view `dbtab` is not processed, and the table whose name is made up of *T* and the content of `vers` is processed instead. `vers` expects a data object with a maximum of four characters, of type `c`. The row content is still taken from the table work area `dbtab` or `dbtab*`. The statement is not executed if the database table or view does not exist or if it does not follow the naming conventions specified above.

-   The addition `VERSION` is not allowed in classes. Instead, the database table or view should be specified dynamically in its operand position in ABAP SQL.
-   None of the additions possible in ABAP SQL can be specified with `VERSION`.
-   Obsolete access statements do not support [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html). The [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) of a database table must be specified explicitly. Note that application programs should only use data from the [current client](ABENCURRENT_CLIENT_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abendb\_access\_obsolete.html