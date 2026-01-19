---
title: "ABAPIUMD_OPTIONS"
description: |
  ABAPIUMD_OPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPIUMD_OPTIONS.htm"
abapFile: "ABAPIUMD_OPTIONS.html"
keywords: ["insert", "update", "delete", "if", "data", "ABAPIUMD", "OPTIONS"]
---

\\ ``... [OPTIONS]\       [[`PRIVILEGED ACCESS`](ABAPIUMD_PRIV.html)]\       [[`CONNECTION ...`](ABAPIUMD_CONN.html)] ...``

`OPTIONS` introduces a set of ABAP-specific additions to [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), [`DELETE`](ABAPDELETE_DBTAB.html).

The addition `OPTIONS` itself is optional but should be used in front of these additions. It must be placed at the end of a DML statement.

If `OPTIONS` is specified, it must be followed by at least one of the additions and none of the additions must be placed before `OPTIONS`. The order of the additions is prescribed as shown above.

If `OPTIONS` is not specified, the addition `CONNECTION` can be placed after the target specification. The addition `PRIVILEGED ACCESS` can be placed behind `OPTIONS` only.

If the `OPTIONS` addition is used in a DML statement, the syntax check is performed in the [strict mode for ABAP release 9.14](ABENABAP_SQL_STRICTMODE_914.html).

-   [`CONNECTION`](ABAPIUMD_CONN.html) specifies a [database connection](ABENDATABASE_CONNECTION_GLOSRY.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html