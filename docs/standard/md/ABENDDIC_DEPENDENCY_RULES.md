---
title: "ABAP Dictionary dependency rules are defined using the"
description: |
  It cannot be guaranteed that the SAP HANA database evaluates a dependency rule correctly and creates the required additional selection condition. In queries with common table expressions(ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html), alias names, and so on, it can occur that the optimizer does not dete
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DEPENDENCY_RULES.htm"
abapFile: "ABENDDIC_DEPENDENCY_RULES.html"
keywords: ["select", "do", "if", "case", "data", "ABENDDIC", "DEPENDENCY", "RULES"]
---

A dependency rule is a [HANA tuning object](ABENHANA_TUNING_OBJECT_GLOSRY.html) for which an instance is created on an [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). A dependency rule is defined for one or more DDIC database tables. From a relational expression of a selection condition, it derives an additional condition for these DDIC database tables. The SAP HANA database optimizer evaluates this rule when the DDIC database tables are read. If possible, it creates the additional selection conditions and uses `AND` to join it with the other conditions.

ABAP Dictionary dependency rules are defined using the

It cannot be guaranteed that the SAP HANA database evaluates a dependency rule correctly and creates the required additional selection condition. In queries with [common table expressions](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html), alias names, and so on, it can occur that the optimizer does not detect the selection condition in question. For this reason, dependency rules must only be defined in ways that do not modify the result set and that are solely intended for internal optimization. When a DDIC database table is accessed by an application program, the result must always be the same, regardless of any dependency rules. This is the only way to avoid producing results that are dependent on the behavior of the optimizer.

-   [Dictionary DDL for defining dependency rules](ABENDDIC_DEFINE_DEPENDENCY_RULE.html)

-   Dependency rules usually join semantic columns of a DDIC database table with technical columns of the same table. Semantic columns contain regular data and technical columns contain data used for internal database processes. ABAP programs should not access the data in technical columns in most cases. A dependency rule can be used to create additional selection conditions for technical columns from existing selection conditions for semantic columns. This modifies access to the table in a transparent way for the ABAP program.
-   One important application for dependency rules is the [optimization of access to deprecated data](ABENHANA_DATA_AGING_DRULS.html) in [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) where [data aging](ABENDATA_AGING_GLOSRY.html) is enabled. In this case, dependency rules join the [temperature column](ABENTEMPERATURE_COLUMN_GLOSRY.html) of a DDIC database table with regular date columns in the table.
-   In all SQL reads on DDIC database tables, the SAP HANA database optimizer evaluates their dependency rules. This is done regardless of the [access type](ABENABAP_MANAGED_DB_OBJECTS_ACCESS.html) and covers access with ABAP SQL, AMDP, and Native SQL, plus access to views that have a DDIC database table as a data source. Dependency rules are not evaluated in reads not made using SQL (such as in calculation views).
-   Partners and customers cannot currently define their own dependency rules.

abenabap.html abenabap\_dictionary.html abenddic\_tuning\_objects.html