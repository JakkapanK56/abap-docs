---
title: "Cardinality Syntax Written in Words"
description: |
  Numeric Syntax -   `EXACT ONE TO EXACT ONE` -   `EXACT ONE TO MANY` -   `EXACT ONE TO ONE` -   `MANY TO EXACT ONE` -   `MANY TO MANY` -   `MANY TO ONE` -   `ONE TO EXACT ONE` -   `ONE TO MANY` -   `ONE TO ONE` -   `TO ONE` -   `TO EXACT ONE` -   `TO MANY` -   Specifying the cardinality as to-one car
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_PATH_EXPR_CARD_V2.htm"
abapFile: "ABENCDS_PATH_EXPR_CARD_V2.html"
keywords: ["select", "insert", "if", "class", "data", "ABENCDS", "PATH", "EXPR", "CARD"]
---

`...[\ \{\{EXACT ONE\}\ | MANY | ONE\}\ ] TO \{\{EXACT ONE\}\ |MANY | ONE \}:`\\

`... 1|*: ...`

Specifies the [cardinality](ABENCARDINALITY_GLOSRY.html) of the current CDS association as unique or non-unique. The cardinality can be specified in words or in numbers. The syntax written in words is recommended.

The syntax written in words can specify the [source](ABENSOURCE_CARDINALITY_GLOSRY.html) and [target cardinalities](ABENTARGET_CARDINALITY_GLOSRY.html). However, it is also possible to specify only the target cardinality. The source cardinality can be omitted. The following combinations are possible:

The numeric syntax only specifies the target cardinality. The target cardinality can be specified either as `1` (to-one), or as `*` (to-many). The source cardinality is implicitly set to `MANY`.

A colon (`:`) must be placed at the end of the cardinality specification.

If the target cardinality is specified as to-one (using the syntax additions `TO EXACT ONE:`, `TO ONE:`, or `1:`), it is possible to use filter conditions in path expressions, which are used in [`WHERE`](ABENCDS_WHERE_CLAUSE_V2.html) clauses or [`HAVING`](ABENCDS_HAVING_CLAUSE_V2.html) clauses. In a clause like this, it overwrites the [cardinality](ABENCARDINALITY_GLOSRY.html) of the [CDS association](ABENCDS_ASSOCIATION_V2.html).

The cardinality cannot be specified as the only addition in square brackets. It must always be combined with a [filter condition](ABENCDS_PATH_EXPRESSION_FILTER_V2.html).

The following CDS view entity filters the association `_Text` using the cardinality specification written in words.

The class `CL_DEMO_CDS_PATH_EXPRESSION` first enters data into the database tables using `INSERT`, and then selects data from the CDS view entity `DEMO_CDS_PATH_EXP` using a `SELECT` statement.

Due to the path expression with filter condition, the result set consists of three rows. Without filter condition, the result set would contain more rows.

Cardinality Syntax Written in Words

Numeric Syntax

-   `EXACT ONE TO EXACT ONE`
-   `EXACT ONE TO MANY`
-   `EXACT ONE TO ONE`
-   `MANY TO EXACT ONE`
-   `MANY TO MANY`
-   `MANY TO ONE`
-   `ONE TO EXACT ONE`
-   `ONE TO MANY`
-   `ONE TO ONE`
-   `TO ONE`
-   `TO EXACT ONE`
-   `TO MANY`

-   Specifying the cardinality as to-one cardinality prevents a syntax error if a path specified with filter conditions or with a non-unique cardinality is used in a [`WHERE`](ABENCDS_WHERE_CLAUSE_V2.html) clause or [`HAVING`](ABENCDS_HAVING_CLAUSE_V2.html) clause. However, at runtime, there is no check to validate whether the condition achieves the required unique cardinality.
-   When a path expression of a `TO EXACT ONE` association is used with [attributes](ABENCDS_PATH_EXPR_ATTR_V2.html), then the join is rewritten to a `TO ONE` join on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) to avoid potential cardinality conflicts. This is indicated by a syntax check warning. The syntax check warning can be suppressed by explicitly specifying the current association as `TO EXACT ONE`.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, card in path\_expr'\\n\\ndefine view entity DEMO\_CDS\_PATH\_EXP\\n as select from demo\_sales\_mat\\n\\n association of exact one to many DEMO\_SALES\_CDS\_MAT\_TEXT as \_Text \\n on $projection.material = \_Text.material\\n\\{\\n key matnr as material,\\n mtart as material\_type,\\n mtgrp as material\_group,\\n \_Text,\\n \_Text\[to exact one: inner where language = 'D' \].material\_name\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_path\_expression\_v2.html abencds\_path\_expr\_attr\_v2.html