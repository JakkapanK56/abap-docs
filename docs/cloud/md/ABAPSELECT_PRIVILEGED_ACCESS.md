---
title: "CDS or DDIC source code was not found"
description: |
  Unlike using the class `CL_DEMO_CDS_AUTH_LITERAL`, all data of the view are read. -   `WITH PRIVILEGED ACCESS`(ABAPSELECT_DATA_SOURCE.html) of the `FROM` clause that affects only one CDS entity. -   The addition `PRIVILEGED ACCESS` overrides all delivered and user-defined roles. -   CDS access con
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSELECT_PRIVILEGED_ACCESS.htm"
abapFile: "ABAPSELECT_PRIVILEGED_ACCESS.html"
keywords: ["select", "if", "class", "data", "ABAPSELECT", "PRIVILEGED", "ACCESS"]
---

`... PRIVILEGED ACCESS ...`

The addition `PRIVILEGED ACCESS` disables [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) for all [CDS entities](ABENCDS_ENTITY_GLOSRY.html) accessed in the current `SELECT` statement. Any [access conditions](ABENACCESS_CONDITION_GLOSRY.html) that are defined for a CDS entity by a [CDS role](ABENCDS_ROLE_GLOSRY.html) are not evaluated.

The addition `PRIVILEGED ACCESS` cannot be used together with the following additions:

Use of the addition `PRIVILEGED ACCESS` for a `SELECT` statement that accesses the CDS view `DEMO_CDS_AUTHORITY_LITERAL_2`, which is linked with the following CDS role:

CDS or DDIC source code was not found

Unlike using the class `CL_DEMO_CDS_AUTH_LITERAL`, all data of the view are read.

-   [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) of the `FROM` clause that affects only one CDS entity.

-   The addition `PRIVILEGED ACCESS` overrides all delivered and user-defined roles.
-   CDS access control can also be disabled using the annotation `@AccessControl.authorizationCheck:#NOT_ALLOWED` when a [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html) is defined.
-   In contrast to the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) of the `FROM` clause, `PRIVILEGED ACCESS` prevents the evaluation of any conditions from CDS access control for the complete `SELECT` statement. In particular, CDS access control is also disabled for entities that are addressed by a [SQL path expression](ABENABAP_SQL_PATH.html).
-   The addition `PRIVILEGED ACCESS` should not be specified without the explicit addition [`OPTIONS`](ABAPSELECT_OPTIONS.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM demo\_cds\_authority\_literal\_2 \\n ORDER BY carrid \\n INTO TABLE @FINAL(result) \\n OPTIONS \\n PRIVILEGED ACCESS. \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapselect\_options.html