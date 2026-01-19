---
title: "ABENCDS_PATH_EXPR_JOINTYPE_V1"
description: |
  ABENCDS_PATH_EXPR_JOINTYPE_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_PATH_EXPR_JOINTYPE_V1.htm"
abapFile: "ABENCDS_PATH_EXPR_JOINTYPE_V1.html"
keywords: ["select", "if", "ABENCDS", "PATH", "EXPR", "JOINTYPE"]
---

`... INNER|\{LEFT OUTER\} ...`

Defines the [join type](ABENJOIN_TYPE_GLOSRY.html) with which the current CDS association is implemented:

If the join type is not specified explicitly, the type depends on the place where the path expression is used:

In the DDL source text editor of the [ADT](ABENADT_GLOSRY.html), you can view the configuration of the join in the display of the generated SQL DDL statement.

[Joins of CDS Associations](ABENCDS_ASSOC_JOIN_V1_ABEXA.html)

-   `INNER` determines an [inner join](ABENINNER_JOIN_GLOSRY.html)
-   `LEFT OUTER` determines a [left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html)

-   After [`FROM`](ABENCDS_SELECT_STATEMENT_V1.html), it is an inner join (`INNER JOIN`)
-   In all other locations, it is a left outer join (`LEFT OUTER JOIN`)

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_path\_expression\_v1.html abencds\_path\_expr\_attr\_v1.html