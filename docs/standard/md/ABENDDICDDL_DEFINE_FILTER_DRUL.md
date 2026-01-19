---
title: "ABENDDICDDL_DEFINE_FILTER_DRUL"
description: |
  ABENDDICDDL_DEFINE_FILTER_DRUL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDICDDL_DEFINE_FILTER_DRUL.htm"
abapFile: "ABENDDICDDL_DEFINE_FILTER_DRUL.html"
keywords: ["select", "insert", "do", "if", "case", "data", "ABENDDICDDL", "DEFINE", "FILTER", "DRUL"]
---

`DEFINE FILTER DEPENDENCY RULE drul    ON dbtab      IF \{ cond_pattern \}        THEN \{ derived_cond \}`

Variant of the [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) statement [`DEFINE DEPENDENCY RULE`](ABENDDICDDL_DEFINE_DRUL.html) used to define a filter [dependency rule](ABENDEPENDENCY_RULE_GLOSRY.html). A filter dependency rule can be defined for exactly one DDIC database table `dbtab`. It derives an additional filter condition `derived_cond` from the pattern `cond_pattern`. When the DDIC database table is read, the SAP HANA database optimizer finds the pattern in the `WHERE` condition and, if necessary, adds the additional filter condition `AND` to this condition.

`cond_pattern`

In `cond_pattern`, a pattern from a relational expression can be specified in the curly brackets after `IF` as follows:

`lhs =|<|>|<=|>= rhs`

It is not possible to join multiple expressions using `AND` or `OR` or to negate them using `NOT`.

`derived_cond`

In `derived_cond`, a template from a relational expression can be specified in the curly brackets after `THEN` as follows:

`lhs =|<|>|<=|>= rhs [OR lhs =|<|>|<=|>= rhs ...]`

Single comparisons can be placed in parentheses `( )`. Negations using `NOT` are not possible.

The following dependency rule demonstrates how the additional condition works:

On the SAP HANA database, this dependency rule modifies the result set of every read performed on the DDIC database table `DEMO_PARTS_1`. This is done for demonstration purposes here and should never occur in real situations. The program `DEMO_DEPENDENCY_RULE_1` uses identical `SELECT` statements to access the DDIC database table `DEMO_PARTS_1` with a dependency rule and an identical table, `DEMO_PARTS`, without a dependency rule:

When `DEMO_PARTS_1` is accessed, the SAP HANA database optimizer evaluates the dependency rule. It finds the pattern

and adds the additional condition accordingly to create the following logical condition:

WHERE value > @num AND area = @num.

This restricts the result set to those rows in which the column `AREA` also has the value of `num`. This restriction does not apply when `DEMO_PARTS` is accessed.

If the first `SELECT` statement is transformed into a [`WITH`](ABAPWITH.html) statement or if alias names are used, for example, the optimizer may not find the pattern and may not add an additional condition. Therefore, the result of this example is dependent on the behavior of the optimizer, which should never occur in production programs.

The following filter dependency rule for the DDIC database table `DEMO_PARTS_2` should not modify the result set. For this to happen, the data in the DDIC database table must have the expected values.

The program `DEMO_DEPENDENCY_RULE_2` uses identical `SELECT` statements to access the DDIC database table `DEMO_PARTS_2` with a dependency rule and an identical table, `DEMO_PARTS`, without a dependency rule:

If the data in the DDIC database table is structured so that in rows where the column `VALUE` contains values greater than or equal to 30 and the values in the column `AREA` are greater than or equal to 3, the result sets of both reads are identical. To derive an additional condition with a dependency on the condition `value < 40`, a further filter dependency rule could be defined for the same DDIC database table.

-   The following can be specified as the left side `lhs` of the comparison:

-   `dbtab.column` for a column `column` of the DDIC database table `dbtab`.

-   The following can be specified as the right side `rhs` of the comparison:

-   `dbtab.column` for a column `column` of the DDIC database table `dbtab`.
-   An untyped character literal or an untyped numeric literal. This syntax is the same as in [untyped literals in ABAP CDS](ABENCDS_UNTYPED_LITERAL_V2.html).
-   A numbered placeholder `$1`, `$2`, ...

-   The following can be specified as the left side `lhs` of a comparison:

-   `dbtab.column` for the column `column` of the database table `dbtab`.

-   The following can be specified as the right side `rhs` of a comparison:

-   `dbtab.column` for the column `column` of the database table `dbtab`.
-   An untyped character literal or an untyped numeric literal. This syntax is the same as in [untyped literals in ABAP CDS](ABENCDS_UNTYPED_LITERAL_V2.html).
-   A numbered placeholder `$1`, `$2`, ..., which must also be specified in `cond_pattern`. When the condition is added, the operand for the condition is inserted into this placeholder. The same placeholder for the same operand value must exist in the pattern `cond_pattern`.
-   [Built-in functions in ABAP Dictionary](ABENDDIC_BUILTIN_FUNCTIONS.html) in [ABAP CDS](ABENCDS_BUILTIN_FUNCTIONS_V2.html) syntax.
-   [Simple case distinctions](ABENCDS_SIMPLE_CASE_EXPRESSION_V2.html) in ABAP CDS syntax.

-   It cannot be guaranteed that the SAP HANA database optimizer finds the pattern `cond_pattern`. This is why the additional condition `derived_cond` must not modify the result set of the original query. It is technically possible to modify the result set with a dependency rule, but produces undefined behavior in cases where the SAP HANA database optimizer finds the pattern `cond_pattern` in some reads but not in others.
-   The additional condition for a query can be viewed in the [SQL Trace](ABENSQL_TRACE_GLOSRY.html) tool (transaction `ST05`) by choosing *Display Execution Plan*.

DEFINE FILTER DEPENDENCY RULE demo\_drul\_1 \\n ON demo\_parts\_1 \\n IF \\{ demo\_parts\_1.value > $1 \\} \\n THEN \\{ demo\_parts\_1.area = $1 \\} DATA num TYPE i. \\ncl\_demo\_input=>request( CHANGING field = num ). \\n"Dependency Rule demo\_drul\_1 \\nSELECT \* \\n FROM demo\_parts\_1 \\n WHERE value > @num \\n ORDER BY id \\n INTO TABLE @DATA(result1). \\ncl\_demo\_output=>write( result1 ). \\n"No Dependency Rule \\nSELECT \* \\n FROM demo\_parts \\n WHERE value > @num \\n ORDER BY id \\n INTO TABLE @DATA(result2). \\ncl\_demo\_output=>display( result2 ). demo\_parts\_1.value > $1 DEFINE FILTER DEPENDENCY RULE demo\_drul\_2 \\n ON demo\_parts\_2 \\n IF \\{ demo\_parts\_2.value >= 30 \\} \\n THEN \\{ demo\_parts\_2.area >= 3 \\} \\ \\n"Dependency Rule demo\_drul\_2 \\nSELECT \* \\n FROM demo\_parts\_2 \\n WHERE value >= 30 AND value < 40 \\n ORDER BY id \\n INTO TABLE @DATA(result1). \\n"No Dependency Rule \\nSELECT \* \\n FROM demo\_parts \\n WHERE value >= 30 AND value < 40 \\n ORDER BY id \\n INTO TABLE @DATA(result2). \\nASSERT result1 = result2. abenabap.html abenabap\_dictionary.html abenddic\_tuning\_objects.html abenddic\_dependency\_rules.html abenddic\_define\_dependency\_rule.html abenddicddl\_define\_drul.html