---
title: "ABENCDS_PV_NO_CONTRACT"
description: |
  ABENCDS_PV_NO_CONTRACT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_PV_NO_CONTRACT.htm"
abapFile: "ABENCDS_PV_NO_CONTRACT.html"
keywords: ["if", "case", "ABENCDS", "CONTRACT"]
---

It is possible, but not recommended, to define a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html) without a [provider contract](ABENCDS_PV_PROVIDER_CONTRACT.html). The default provider contract, if no provider contract is set explicitly, is [`TRANSACTIONAL_QUERY`](ABENCDS_PV_PROVIDER_CONTRACT.html). The same features are available as for [transactional queries](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html) and a projection view without provider contract can be used in the same scenarios. However, there are some minor differences in the syntax checks applied:

Specifying a provider contract is strongly recommended, but not enforced, in most cases. However, there is one exception: if the projected entity is a [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html), then the provider contract `TRANSACTIONAL_QUERY` is mandatory. When no provider contract is specified, a syntax check error occurs.

-   In a transactional projection view with provider contract `TRANSACTIONAL_QUERY`, path fields `[path_expr](ABENCDS_PROJ_VIEW_PATH_EXPR.html).element` can be used in an [association `ON` condition](ABENCDS_PROJ_VIEW_ASSOCIATION.html) via `$projection`. In a projection view without provider contract, this is not allowed.
-   Example:
    Field in the projection list:
    `_assoc.fieldName`\\
    This path field can be used in an association `ON` condition in a transactional query, but not in a projection view without provider contract:
    `... on $projection.fieldName = 'A' ...`

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html