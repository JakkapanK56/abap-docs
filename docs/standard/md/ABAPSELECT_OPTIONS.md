---
title: "ABAPSELECT_OPTIONS"
description: |
  ABAPSELECT_OPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT_OPTIONS.htm"
abapFile: "ABAPSELECT_OPTIONS.html"
keywords: ["select", "if", "data", "ABAPSELECT", "OPTIONS"]
---

``... [OPTIONS]\        [`[USING ...]`](ABAPSELECT_OPTIONS_USING.html)\        [`[PRIVILEGED ACCESS]`](ABAPSELECT_PRIVILEGED_ACCESS.html)\        [`[BYPASSING BUFFER]`](ABAPSELECT_BYPASSING_BUFFER.html)\        [`[CONNECTION ...]`](ABAPSELECT_CONNECTION.html) ...``

`OPTIONS` introduces a set of ABAP-specific additions to [`SELECT`](ABAPSELECT.html), [`WITH`](ABAPWITH.html) or [`OPEN CURSOR`](ABAPOPEN_CURSOR.html):

The addition `OPTIONS` itself is optional but should be used in front of these additions. It must be placed at the end of a `SELECT` or `OPEN CURSOR` statement. Only if `USING` is used at the end of the statement, `OPTIONS` is not optional. If `OPTIONS` is specified, it must be followed by at least one of the additions and none of the additions must be placed before `OPTIONS`.

If `OPTIONS` is specified, the order of the additions is prescribed as shown above. If `OPTIONS` is not specified, at least [`PRIVILEGED ACCESS`](ABAPSELECT_PRIVILEGED_ACCESS.html) must be placed in front of the other options.

If the [`INTO` clause](ABAPINTO_CLAUSE.html) is specified as last clause of a `SELECT` statement (recommended and enforced in [strict mode from ABAP release 7.60](ABENABAP_SQL_STRICTMODE_760.html)), these additions must be placed after the `INTO` clause. Otherwise, `BYPASSING BUFFER` and `CONNECTION` can also be placed after the [`SELECT` clause](ABAPSELECT_LIST.html) or after the [`FROM` clause](ABAPFROM_CLAUSE.html) as long as the addition `OPTIONS` is not specified.

If the `OPTIONS` addition is used, the syntax check is performed in the [strict mode for ABAP release 7.96](ABENABAP_SQL_STRICTMODE_796.html).

-   [`[USING ...]`](ABAPSELECT_OPTIONS_USING.html) switches implicit client handling for all client-dependent data sources of the queries of the ABAP SQL statement.
-   [`PRIVILEGED ACCESS`](ABAPSELECT_PRIVILEGED_ACCESS.html) disables [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html).
-   [`BYPASSING BUFFER`](ABAPSELECT_BYPASSING_BUFFER.html) bypasses [table buffering](ABENTABLE_BUFFERING_GLOSRY.html).
-   [`CONNECTION`](ABAPSELECT_CONNECTION.html) specifies a [database connection](ABENDATABASE_CONNECTION_GLOSRY.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html