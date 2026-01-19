---
title: "ABENDDICDDL_DEFINE_DRUL"
description: |
  ABENDDICDDL_DEFINE_DRUL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDICDDL_DEFINE_DRUL.htm"
abapFile: "ABENDDICDDL_DEFINE_DRUL.html"
keywords: ["select", "if", "case", "method", "data", "types", "ABENDDICDDL", "DEFINE", "DRUL"]
---

``DEFINE [`FILTER`](ABENDDICDDL_DEFINE_FILTER_DRUL.html)|[`JOIN`](ABENDDICDDL_DEFINE_JOIN_DRUL.html) DEPENDENCY RULE drul    ON dbtab [, ...]\      IF \{ cond_pattern \}        THEN \{ derived_cond \}``

[Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) statement used to define a [dependency rule](ABENDEPENDENCY_RULE_GLOSRY.html). The statement has two variants:

The name `drul` of a dependency rule must comply with the [naming conventions for data types](ABENDDIC_TYPES_NAMES.html) and can have a maximum of 30 characters. The name is in the namespace of the [DDIC data types](ABENDDIC_DATA_TYPES.html) and must match the name of the [DRUL source code](ABENDRUL_SOURCE_CODE_GLOSRY.html).

After `ON`, the name(s) `dbtab` of DDIC database table(s) for which the dependency rule is defined are specified:

`cond_pattern` is used to specify a pattern for a relational expression after `IF`. In the case of reads made on the database table `dbtab`, the SAP HANA database optimizer searches for this pattern in the associated `WHERE` condition or `ON` condition. If the pattern is found, the optimizer uses `AND` to add the condition `derived_cond` specified after `THEN` to the corresponding `WHERE` condition or `ON` condition. The potential conditions are specified in the same way as in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) or [CDS DCL](ABENCDS_DDL_GLOSRY.html) syntax and are described in the filter and join dependency rules.

It cannot be guaranteed that the SAP HANA database optimizer finds the pattern `cond_pattern`. This is why the additional condition `derived_cond` must not modify the result set of the original query. It is technically possible to modify the result set with a dependency rule, but should be avoided since it produces undefined behavior in cases where the SAP HANA database optimizer finds the pattern `cond_pattern` in some reads but not in others.

-   [`DEFINE FILTER DEPENDENCY RULE`](ABENDDICDDL_DEFINE_FILTER_DRUL.html) for filter dependency rules.
-   [`DEFINE JOIN DEPENDENCY RULE`](ABENDDICDDL_DEFINE_JOIN_DRUL.html) for join dependency rules.

-   In the case of filter dependency rules, exactly one DDIC database table must be specified.
-   In the case of join dependency rules, exactly two comma-separated DDIC database tables must be specified.

-   The derived condition `derived_cond` from a pattern `cond_pattern` usually defines a dependency between semantic and technical columns of a DDIC database table. When an application accesses a table with a specific selection condition for semantic columns, an additional condition for technical columns is created implicitly. In the [optimization of access to deprecated data](ABENHANA_DATA_AGING_DRULS.html), regular date columns are the semantic columns and the [temperature column](ABENTEMPERATURE_COLUMN_GLOSRY.html) is the technical column.
-   If multiple dependency rules are defined for a DDIC database table, `AND` is used to join all additional conditions and append them to the original condition.
-   Dependency rules can be defined for DDIC database tables only; they cannot be defined for DDIC views. The SAP HANA database optimizer evaluates all SQL accesses on DDIC database tables, including accesses with ABAP SQL, AMDP, and Native SQL, plus all accesses made on views that contain the DDIC database table as a data source.
-   Dependency rules are not evaluated when a DDIC database table is accessed with a method other than ABAP SQL, such as in calculation views.
-   Partners and customers cannot currently define their own dependency rules.

abenabap.html abenabap\_dictionary.html abenddic\_tuning\_objects.html abenddic\_dependency\_rules.html abenddic\_define\_dependency\_rule.html