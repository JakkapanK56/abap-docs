---
title: "ABENCDS_PATH_EXPR_JOINTYPE_V2"
description: |
  ABENCDS_PATH_EXPR_JOINTYPE_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_PATH_EXPR_JOINTYPE_V2.htm"
abapFile: "ABENCDS_PATH_EXPR_JOINTYPE_V2.html"
keywords: ["select", "if", "ABENCDS", "PATH", "EXPR", "JOINTYPE"]
---

`... INNER|\{LEFT OUTER\} ...`

Defines the [join type](ABENJOIN_TYPE_GLOSRY.html) with which the current CDS association is implemented:

If the join type is not specified explicitly, the type depends on the place where the path expression is used:

[Joins of CDS Associations](ABENCDS_ASSOC_JOIN_V2_ABEXA.html)

-   `INNER` determines an [inner join](ABENINNER_JOIN_GLOSRY.html)
-   `LEFT OUTER` determines a [left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html)

-   After [`FROM`](ABENCDS_SELECT_STATEMENT_V2.html), it is an inner join
-   In all other locations, it is a left outer join

-   In the DDL source text editor of the [ADT](ABENADT_GLOSRY.html), you can view the configuration of the join in the display of the generated SQL DDL statement.
-   For the last CDS association of a path expression, the specification of a join type property is not allowed. If a path expression consists of one single CDS association, then the join type cannot be specified.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_path\_expression\_v2.html abencds\_path\_expr\_attr\_v2.html