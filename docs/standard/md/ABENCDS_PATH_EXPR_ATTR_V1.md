---
title: "ABENCDS_PATH_EXPR_ATTR_V1"
description: |
  ABENCDS_PATH_EXPR_ATTR_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_PATH_EXPR_ATTR_V1.htm"
abapFile: "ABENCDS_PATH_EXPR_ATTR_V1.html"
keywords: ["select", "if", "ABENCDS", "PATH", "EXPR", "ATTR"]
---

``... [ [`[1|*:]`](ABENCDS_PATH_EXPR_CARD_V1.html)\ [`[INNER|\{LEFT OUTER\}]`](ABENCDS_PATH_EXPR_JOINTYPE_V1.html)\ [`[WHERE]\ [cds_cond]`](ABENCDS_PATH_EXPRESSION_FILTER_V1.html) ] ...``

For every CDS association [`_assoc`](ABENCDS_ASSOCIATION_V1.html) of a [path expression](ABENCDS_PATH_EXPRESSION_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), attributes for this part of the path expression can be defined in square brackets `[ ]`. The following attributes can be specified:

-   With [`1|*:`](ABENCDS_PATH_EXPR_CARD_V1.html), the [cardinality](ABENCARDINALITY_GLOSRY.html) of the section can be specified.
-   With [`INNER|\{LEFT OUTER\}`](ABENCDS_PATH_EXPR_JOINTYPE_V1.html) the [join type](ABENJOIN_TYPE_GLOSRY.html) can be specified.
-   With [`[WHERE] cds_cond`](ABENCDS_PATH_EXPRESSION_FILTER_V1.html) a filter condition `cds_cond` can be specified.

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_path\_expression\_v1.html