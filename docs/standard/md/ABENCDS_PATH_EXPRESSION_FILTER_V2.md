---
title: "ABENCDS_PATH_EXPRESSION_FILTER_V2"
description: |
  ABENCDS_PATH_EXPRESSION_FILTER_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_PATH_EXPRESSION_FILTER_V2.htm"
abapFile: "ABENCDS_PATH_EXPRESSION_FILTER_V2.html"
keywords: ["select", "if", "case", "data", "types", "ABENCDS", "PATH", "EXPRESSION", "FILTER"]
---

``... [WHERE]\ [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) ...``

[Filter condition](ABENFILTER_CONDITION_GLOSRY.html) for the current CDS association. If the join type is explicitly defined with [`INNER|\{LEFT OUTER\}`](ABENCDS_PATH_EXPR_JOINTYPE_V2.html), the addition `WHERE` must be specified explicitly. If this is not the case, `WHERE` must not be specified.

A filter condition is a condition [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) implemented as an expanded condition for the join when transforming the CDS association into a join.

For the operands of the filter condition of a path expression of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), the following rules apply:

Special rules apply when the operands of the condition are [CDS enumerated elements](ABENCDS_ENUM_ELEMENT_GLOSRY.html). These rules are described in the topic [CDS TDL - Using CDS Enumerated Types](ABENCDS_USE_ENUM_TYPE.html).

If no filter condition is specified in the path expression, any default filter condition specified for the [CDS association](ABENCDS_ASSOCIATION_V2.html) is used.

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), the filter conditions of multiple CDS associations are by default compared semantically. If the filter conditions match, the associated join expression is created only once. This generally improves performance.

The following CDS view entity contains path expressions with filter conditions in its `SELECT` list that are implemented as join expressions upon activation.

The following image shows the joins created on the database:

-   All relational operators are allowed.
-   The Boolean operators `NOT`, `AND`, and `OR` are allowed.
-   `lhs` expects a [field](ABENCDS_FIELD_V2.html) of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the current [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) or a [CDS enumerated constant](ABENCDS_ENUM_FIELD_V2.html).
-   `rhs` expects a [field](ABENCDS_FIELD_V2.html) of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the current [CDS association](ABENCDS_ASSOCIATION_V2.html), a [literal](ABENCDS_LITERAL_V2.html), a [parameter](ABENCDS_PARAMETER_V2.html), a [session variable](ABENCDS_SESSION_VARIABLE_V2.html), an [SQL-based scalar function](ABENCDS_SQL_SCALAR_FUNCTION.html), or a [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V2.html).
-   **Exception:** if the operator `LIKE` is used, then `rhs` must be a character literal.
-   Path expressions are not supported.
-   Other [expressions](ABENCDS_EXPRESSIONS_V2.html) are not supported.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_ASSOC\_FILTER\_VE\\n as select from demo\_join1\\n association to Demo\_Cds\_Assoc\_Join2 as \_demo\_join2 \\n on \_demo\_join2.d = demo\_join1.d\\n\\{\\n key a,\\n \_demo\_join2\[inner where d = '1' \].d as d\_2,\\n \_demo\_join2\[inner where d = '1' \].e as e\_2,\\n \_demo\_join2\[inner where d = '1' \].\\n \_demo\_join3\[inner where i = '2' \].i as i\_3,\\n \_demo\_join2\[inner where d = '1' \].\\n \_demo\_join3\[\\n inner where i = '2' \].j as j\_3\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_path\_expression\_v2.html abencds\_path\_expr\_attr\_v2.html