---
title: "ABENCDS_PATH_EXPR_ATTR_V2"
description: |
  ABENCDS_PATH_EXPR_ATTR_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_PATH_EXPR_ATTR_V2.htm"
abapFile: "ABENCDS_PATH_EXPR_ATTR_V2.html"
keywords: ["select", "if", "ABENCDS", "PATH", "EXPR", "ATTR"]
---

``... [ [`[cardinality]`](ABENCDS_PATH_EXPR_CARD_V2.html)\ [`[INNER|\{LEFT OUTER\}]`](ABENCDS_PATH_EXPR_JOINTYPE_V2.html)\ [`[WHERE]\ [cds_cond]`](ABENCDS_PATH_EXPRESSION_FILTER_V2.html) ] ...``

For every CDS association [`_assoc`](ABENCDS_ASSOCIATION_V2.html) of a [path expression](ABENCDS_PATH_EXPRESSION_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), attributes for this part of the path expression can be defined in square brackets `[ ]`. The following attributes can be specified:

The CDS view entity contains path expressions with filter conditions in the `FROM` clause, in the `SELECT` list, and in the `WHERE` clause.

-   With [`cardinality`](ABENCDS_PATH_EXPR_CARD_V2.html), the [cardinality](ABENCARDINALITY_GLOSRY.html) of the section can be specified.
-   With [`INNER|\{LEFT OUTER\}`](ABENCDS_PATH_EXPR_JOINTYPE_V2.html) the [join type](ABENJOIN_TYPE_GLOSRY.html) can be specified.
-   With [`[WHERE] cds_cond`](ABENCDS_PATH_EXPRESSION_FILTER_V2.html) a filter condition `cds_cond` can be specified.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_SALES\_CDS\_PATH\_EXPR\_1\\n as select from\\n DEMO\_SALES\_CDS\_SO\_I.\_SalesOrder \\n \[lifecycle\_status <> 'C' and lifecycle\_status <> 'X'\]\\n association to exact one demo\_so\_inv\_he as \_invoice\_header\\n on DEMO\_SALES\_CDS\_SO.id = \_invoice\_header.buyer\_id\\n \\{\\n key so\_key as soKey,\\n lifecycle\_status,\\n \_invoice\_header.dunning\_level,\\n DEMO\_SALES\_CDS\_SO.\_Buyer,\\n DEMO\_SALES\_CDS\_SO\[inner\].buyer\_id,\\n DEMO\_SALES\_CDS\_SO.id\\n \\}\\n where\\n \_invoice\_header.dunning\_level > '0' and\\n \_Items\[to one:currency <> 'EUR'\].material = 'WOOD'\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_path\_expression\_v2.html