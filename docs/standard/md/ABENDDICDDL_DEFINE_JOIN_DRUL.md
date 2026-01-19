---
title: "ABENDDICDDL_DEFINE_JOIN_DRUL"
description: |
  ABENDDICDDL_DEFINE_JOIN_DRUL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDICDDL_DEFINE_JOIN_DRUL.htm"
abapFile: "ABENDDICDDL_DEFINE_JOIN_DRUL.html"
keywords: ["select", "insert", "do", "if", "case", "data", "ABENDDICDDL", "DEFINE", "JOIN", "DRUL"]
---

`DEFINE JOIN DEPENDENCY RULE drul    ON dbtab1, dbtab2      IF \{ cond_pattern \}        THEN \{ derived_cond \}`

Variant of the [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) statement [`DEFINE DEPENDENCY RULE`](ABENDDICDDL_DEFINE_DRUL.html) used to define a join [dependency rule](ABENDEPENDENCY_RULE_GLOSRY.html). A join dependency rule can be defined for exactly two database tables `dbtab1` and `dbtab2`, separated by a comma. It derives an additional join condition `derived_cond` from the pattern `cond_pattern`. When two DDIC database tables joined by a join expression are read, the SAP HANA database optimizer finds the pattern in the `ON` condition of the expression and, if necessary, adds the additional join condition `AND` to this condition. If any further additional conditions are defined by [filter dependency rules](ABENDDICDDL_DEFINE_FILTER_DRUL.html) for one of the two database tables, these rules are also applied to the other DDIC database table, if they apply to the columns specified in the join condition.

**cond\_pattern**

In `cond_pattern`, a pattern from a relational expression can be specified in the curly brackets after `IF` as follows:

`lhs = rhs [AND lhs = rhs ...]`

Comparisons with the operator `=` joined using `AND` are possible. Joins using `OR` or negations using `NOT` are not possible.

**derived\_cond**

In `derived_cond`, a template for a relational expression can be specified in the curly brackets after `THEN` as follows:

`lhs =|<|>|<=|>= rhs [OR lhs =|<|>|<=|>= rhs ...]`

Single comparisons can be placed in parentheses `( )`. Negations using `NOT` are not possible.

The following dependency rules are defined:

The program `DEMO_DEPENDENCY_RULE_3` uses the following `SELECT` statement to access `DEMO_PARTS_3` and `DEMO_PARTS_4`:

The SAP HANA database optimizer adds the following condition to the `ON` condition implicitly:

It also adds the following filter conditions to the `WHERE` condition implicitly:

If the data in the DDIC database tables is structured correctly, the dependency rules do not modify the result set.

-   The following can be specified as the left side `lhs` of the comparison:

-   `dbtab1.column` or `dbtab2.column` for a column `column` of the DDIC database tables `dbtab1` or `dbtab2`.

-   The following can be specified as the right side `rhs` of the comparison:

-   `dbtab1.column` or `dbtab2.column` for a column `column` of the DDIC database tables `dbtab1` or `dbtab2`.
-   An untyped character literal or an untyped numeric literal. This syntax is the same as in [untyped literals in ABAP CDS](ABENCDS_UNTYPED_LITERAL_V2.html).
-   A numbered placeholder `$1`, `$2`, ...

-   The following can be specified as the left side `lhs` of a comparison:

-   `dbtab1.column` or `dbtab2.column` for a column `column` of the database table `dbtab1` or `dbtab2`.

-   The following can be specified as the right side `rhs` of a comparison:

-   `dbtab1.column` or `dbtab2.column` for a column `column` of the database table `dbtab1` or `dbtab2`.
-   An untyped character literal or an untyped numeric literal. This syntax is the same as in [untyped literals in ABAP CDS](ABENCDS_UNTYPED_LITERAL_V2.html).
-   A numbered placeholder `$1`, `$2`, ..., which must also be specified in `cond_pattern`. When the condition is added, the operand for the condition is inserted into this placeholder. The same placeholder for the same operand value must exist in the pattern `cond_pattern`.
-   [Built-in functions in ABAP Dictionary](ABENDDIC_BUILTIN_FUNCTIONS.html) in [ABAP CDS](ABENCDS_BUILTIN_FUNCTIONS_V2.html) syntax.
-   [Simple case distinctions](ABENCDS_SIMPLE_CASE_EXPRESSION_V2.html) in ABAP CDS syntax.

-   It cannot be guaranteed that the SAP HANA database optimizer finds the pattern `cond_pattern`. This is why the additional condition `derived_cond` must not modify the result set of the original query. It is technically possible to modify the result set with a dependency rule, but should be avoided since it produces undefined behavior in cases where the SAP HANA database optimizer finds the pattern `cond_pattern` in some reads but not in others.
-   The additional condition for a query can be viewed in the [SQL Trace](ABENSQL_TRACE_GLOSRY.html) tool (transaction `ST05`) by choosing *Display Execution Plan*.

DEFINE FILTER DEPENDENCY RULE demo\_drul\_3 \\n ON demo\_parts\_3 \\n IF \\{ demo\_parts\_3.value >= 30 \\} \\n THEN \\{ demo\_parts\_3.area >= 3 \\} \\nDEFINE FILTER DEPENDENCY RULE demo\_drul\_4 \\n ON demo\_parts\_3 \\n IF \\{ demo\_parts\_3.value < 40 \\} \\n THEN \\{ demo\_parts\_3.area < 4 \\} \\nDEFINE JOIN DEPENDENCY RULE demo\_drul\_5 \\n ON demo\_parts\_3, demo\_parts\_4 \\n IF \\{ demo\_parts\_3.client = demo\_parts\_4.client AND \\n demo\_parts\_3.id = demo\_parts\_4.id AND \\n demo\_parts\_3.value = demo\_parts\_4.value \\} \\n THEN \\{ demo\_parts\_3.area = demo\_parts\_4.area \\} SELECT demo\_parts\_3~id, demo\_parts\_3~value, demo\_parts\_4~text \\n FROM demo\_parts\_3 \\n INNER JOIN demo\_parts\_4 \\n ON demo\_parts\_3~id = demo\_parts\_4~id AND \\n demo\_parts\_3~value = demo\_parts\_4~value \\n WHERE demo\_parts\_3~value >= 30 AND \\n demo\_parts\_3~value < 40 \\n ORDER BY demo\_parts\_3~id \\n INTO TABLE @DATA(result). AND demo\_parts\_3~area = demo\_parts\_4~area AND demo\_parts\_3~area >= 3 \\nAND demo\_parts\_3~area < 4 \\nAND demo\_parts\_4~area >= 3 \\nAND demo\_parts\_4~area < 4 abenabap.html abenabap\_dictionary.html abenddic\_tuning\_objects.html abenddic\_dependency\_rules.html abenddic\_define\_dependency\_rule.html abenddicddl\_define\_drul.html