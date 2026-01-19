---
title: "Cardinality Syntax Written in Words"
description: |
  Numeric Syntax -   The cardinality can be written in words. In this case, a source(ABENSOURCE_CARDINALITY_GLOSRY.html) and a target cardinality(ABENTARGET_CARDINALITY_GLOSRY.html) can be specified. This syntax variant is the recommended option. -   The cardinality can be specified in numbers in
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_CARDINALITY_V2.htm"
abapFile: "ABENCDS_CARDINALITY_V2.html"
keywords: ["select", "do", "while", "if", "case", "class", "data", "ABENCDS", "CARDINALITY"]
---

`OF \{\{EXACT ONE\}\ | MANY | ONE\} TO \{\{EXACT ONE\}\ | MANY | ONE\}`\\

`[min..max]`

[1. `OF \{EXACT ONE | MANY | ONE\} TO \{EXACT ONE | MANY | ONE\}`](#ABAP_ALTERNATIVE_1@2@)

[2. `... [min..max] ...`](#ABAP_ALTERNATIVE_2@2@)

Specifies a [cardinality](ABENCARDINALITY_GLOSRY.html) to express the relation between the rows of the data sources. The following options are available:

The cardinality specification documents the semantics of the data model. It is used by the [SAP HANA SQL Optimizer](ABENQUERY_OPTIMIZER_GLOSRY.html) for performance optimizations by suppressing surplus joins on any databases that support this addition. It is important that the cardinality specification matches the data in question. Otherwise, the result is undefined and can depend on the entries in the `SELECT` list.

If no cardinality is specified, the implicit default cardinality is `MANY TO ONE`.

The following example shows how an incorrect cardinality leads to unexpected results. A CDS view entity joins the DDIC database tables `SCARR` and `SPFLI` in a CDS association `_spfli` without specifying the cardinality explicitly. The implicitly set cardinality is `MANY TO ONE`. If the CDS association is used in a path specified in the `SELECT` list, this is implemented on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) as a left outer join using the addition `MANY TO ONE`. The actual cardinality of the data is, however, `TO MANY`.

The class `CL_DEMO_CDS_WRONG_CRDNLTY_1` uses different `SELECT` statements to access the view. The two reads return a different number of rows. This shows that the cardinality should always be defined explicitly to match the data in question to avoid unexpected behavior.

The following CDS view entity joins the DDIC database tables `SCARR` and `SPFLI` in a CDS association `_spfli` while specifying the cardinality explicitly and correctly. If the CDS association is used in a path specified in the `SELECT` list, this is implemented on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) as a left outer many-to-many join. This matches the actual cardinality of the data.

The class `CL_DEMO_CDS_EXPLICIT_CARD_1` uses different `SELECT` statements to access the view. The two reads return the same number of rows.

The cardinality written in words specifies the source and target cardinality, that means, how many entries of the data source match the entries of the association target. The following cardinality specifications are possible:

The cardinality syntax written in words is available in [CDS table entities](ABENCDS_TABLE_ENTITY_GLOSRY.html), [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html), [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html), and [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html). It is not available in any other CDS entity.

The following CDS view entity defines an association with the cardinality `EXACT ONE TO ONE` to a text provider view.

The SQL statement generated on the database shows that the path expression is transformed into a left outer exact one to one join on the database.

The numeric syntax specifies the cardinality of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of a CDS view entity. The square brackets `[ ]` are part of the syntax. For `min` and `max`, positive integers (including 0) and asterisks (`*`) can be specified:

If the cardinality is not defined explicitly, the cardinality to-one is used implicitly (`[min..1]`).

With the numeric syntax, no source cardinality can be specified, only the cardinality of the association target. The target cardinality can be specified with high precision, since the exact number of data records returned by an association can be specified. In the SQL statement that is generated on the database, the numeric syntax is translated into words.

SAP recommends using the cardinality syntax written in words instead of the numeric syntax, since it improves query performance in some scenarios.

The following CDS view entity specifies the cardinality of the association target as to-many using the syntax `[*]`.

The SQL statement generated on the database shows that the path expression is transformed into a left outer join. The SQL statement does not contain an explicit cardinality, which means that the implicit default cardinality `MANY TO MANY` is used.

Cardinality Syntax Written in Words

Numeric Syntax

-   The cardinality can be written in words. In this case, a [source](ABENSOURCE_CARDINALITY_GLOSRY.html) and a [target cardinality](ABENTARGET_CARDINALITY_GLOSRY.html) can be specified. This syntax variant is the recommended option.
-   The cardinality can be specified in numbers in square brackets. In this case, the minimum and maximum cardinality of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is specified. No source cardinality can be specified. The implicit default source cardinality is `MANY`.
-   The cardinality is optional and can be left out. In this case, the implicit default is many-to-one. SAP recommends always specifying the cardinality explicitly.

-   To avoid undefined behavior, the cardinality should always be defined to match the data in question.
-   **Note** The cardinality is mainly descriptive, not prescriptive. It does not force a matching result set.
-   The specified cardinality is evaluated by the syntax check in the CDS DDL of CDS or in ABAP SQL. A non-matching cardinality usually produces a syntax check warning.
-   The numeric syntax and the syntax written in words must not be mixed. It is not possible, for example, to specify the source cardinality of an association in words and the target cardinality of the same association in numbers.

-   `OF EXACT ONE TO EXACT ONE`
-   `OF EXACT ONE TO MANY`
-   `OF EXACT ONE TO ONE`
-   `OF MANY TO EXACT ONE`
-   `OF MANY TO MANY`
-   `OF MANY TO ONE`
-   `OF ONE TO EXACT ONE`
-   `OF ONE TO MANY`
-   `OF ONE TO ONE`

-   SAP recommends using the cardinality syntax written in words instead of the numeric syntax, since it improves query performance in some scenarios.
-   Further details can be found on SAP Help Portal in the SAP HANA SQL Reference Guide for SAP HANA Platform.
-   In case of [to-child associations](ABENTO_CHILD_ASSOCIATION_GLOSRY.html), the source cardinality must be set to `EXACT ONE`. It can also be left out and is then implicitly set to `EXACT ONE`. No other source cardinality is valid for to-child associations.
-   When a [path expression](ABENPATH_EXPRESSION_GLOSRY.html) of a `TO EXACT ONE` association is used with a [filter condition](ABENFILTER_CONDITION_GLOSRY.html), then the join is rewritten to a `TO ONE JOIN` on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) to avoid potential cardinality conflicts. This is indicated by a syntax check warning. This can be circumvented by specifying the cardinality [attribute](ABENCDS_PATH_EXPR_CARD_V2.html)\\ `TO EXACT ONE` in this path expression. Then, the join is not rewritten and remains a `TO EXACT ONE` join on the SAP HANA database.

-   `max` cannot be 0.
-   An asterisk `*` for `max` means any number of rows.
-   `min` can be omitted (set to 0 if omitted).
-   `min` cannot be `*`.
-   When a CDS association is used in a [`WHERE` condition](ABENCDS_WHERE_CLAUSE_V2.html), 1 must be specified for `max`.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_WRONG\_CARDINALITY\_1\\n as select from scarr\\n/\*+\[hideWarning\] \\{ "IDS" : \[ "CARDINALITY\_CHECK" \] \\}\*/\\n association to spfli as \_spfli on \_spfli.carrid = scarr.carrid\\n\\{\\n key scarr.carrid as carrid,\\n scarr.carrname as carrname,\\n \_spfli.connid as connid\\n\\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_EXPLICIT\_CARD\_1\\n as select from scarr\\n association of many to many spfli as \_spfli \\n on \_spfli.carrid = scarr.carrid\\n\\{\\n key scarr.carrid as carrid,\\n scarr.carrname as carrname,\\n \_spfli.connid as connid\\n\\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, card in words'\\n@AbapCatalog.entityBuffer.propagationAllowed:true\\n\\ndefine view entity DEMO\_CDS\_CARDINALITY\_IN\_WORDS\\n as select from demo\_sales\_mat\\n\\n association of exact one to one DEMO\_SALES\_CDS\_MAT\_TEXT as \_Text \\n on $projection.material = \_Text.material\\n and \_Text.language = $session.system\_language\\n\\{\\n key matnr as material,\\n mtart as material\_type,\\n mtgrp as material\_group,\\n \_Text,\\n \_Text.material\_name\\n\\}\\n @EndUserText.label: 'CDS view entity, numeric cardinality'\\ndefine view entity DEMO\_CDS\_CAR\_NUMERIC\\n as select from spfli\\n association \[\*\] to sflight as \_Flights \\n on $projection.carrid = \_Flights.carrid\\n and $projection.connid = \_Flights.connid\\n\\{\\n key carrid,\\n key connid,\\n \_Flights.fldate\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_association\_v2.html abencds\_simple\_association\_v2.html