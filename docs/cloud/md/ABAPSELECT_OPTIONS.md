---
title: "ABAPSELECT_OPTIONS"
description: |
  ABAPSELECT_OPTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSELECT_OPTIONS.htm"
abapFile: "ABAPSELECT_OPTIONS.html"
keywords: ["select", "if", "data", "ABAPSELECT", "OPTIONS"]
---

``... [OPTIONS]\        [`[PRIVILEGED ACCESS]`](ABAPSELECT_PRIVILEGED_ACCESS.html)\        [`[BYPASSING BUFFER]`](ABAPSELECT_BYPASSING_BUFFER.html)\        [`[CONNECTION ...]`](ABAPSELECT_CONNECTION.html) ...``

`OPTIONS` introduces a set of ABAP-specific additions to [`SELECT`](ABAPSELECT.html), [`WITH`](ABAPWITH.html):

The addition `OPTIONS` itself is optional but should be used in front of these additions. It must be placed at the end of a `SELECT` statement. If `OPTIONS` is specified, it must be followed by at least one of the additions and none of the additions must be placed before `OPTIONS`.

If `OPTIONS` is not specified, the additions must be placed after the [`INTO` clause](ABAPINTO_CLAUSE.html) of a `SELECT` statement. The order of the additions is prescribed as shown above.

-   [`PRIVILEGED ACCESS`](ABAPSELECT_PRIVILEGED_ACCESS.html) disables [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html).
-   [`BYPASSING BUFFER`](ABAPSELECT_BYPASSING_BUFFER.html) bypasses [table buffering](ABENTABLE_BUFFERING_GLOSRY.html).
-   [`CONNECTION`](ABAPSELECT_CONNECTION.html) specifies a [database connection](ABENDATABASE_CONNECTION_GLOSRY.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html