---
title: "ABENCDS_COND_EXPR_OPERANDS_V1"
description: |
  ABENCDS_COND_EXPR_OPERANDS_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_COND_EXPR_OPERANDS_V1.htm"
abapFile: "ABENCDS_COND_EXPR_OPERANDS_V1.html"
keywords: ["select", "if", "case", "data", "types", "ABENCDS", "COND", "EXPR", "OPERANDS"]
---

The following rules apply to the operands `lhs` and `rhs` in relational expressions of the `SELECT` statement in a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html):

For [comparisons](ABENCDS_COND_EXPR_COMP_V1.html), the tables of [comparable types](ABENCDS_COND_EXPR_TYPES_V1.html) show which data types can be compared with each other.

-   General Rules

-   [Character literals](ABENCDS_LITERAL_V1.html) cannot be used in comparisons with numeric values.
-   [Numeric literals](ABENCDS_LITERAL_V1.html) that represent a value outside the value range of [`INT8`](ABENDDIC_BUILTIN_TYPES.html) must be specified as floating point literals with a decimal point.

-   Special Context-Specific Rules:

-   [Rules](ABENCDS_COND_EXPR_WHERE_V1.html) for use in a `WHERE` condition
-   [Rules](ABENCDS_COND_EXPR_HAVING_V1.html) for use in a `HAVING` condition
-   [Rules](ABENCDS_JOINED_DATA_SOURCE_V1.html) for use in an `ON` condition of a join expression
-   [Rules](ABENCDS_COND_EXPR_ON_ASSOC_V1.html) for use in an `ON` condition of a CDS association
-   [Rules](ABENCDS_COND_EXPR_FILTER_V1.html) for use in a filter condition of a path expression
-   [Rules](ABENCDS_COND_EXPR_CASE_V1.html) for use in a complex case distinction.

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_conditional\_expression\_v1.html