---
title: "The following non-parenthesized chaining of join expressions"
description: |
  is parenthesized implicitly as follows: No elements from `tab1` can be specified in the inner `ON` condition. The following view contains a cross join of table `T000` of all clients of an AS ABAP with the entries for the message class `SABAPDEMOS` in the table `T100`. The class `CL_DEMO_CDS_CROSS_JO
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_JOINED_DATA_SOURCE_V1.htm"
abapFile: "ABENCDS_JOINED_DATA_SOURCE_V1.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "ABENCDS", "JOINED", "DATA", "SOURCE"]
---

``... \{\ [INNER] JOIN \}|\{ LEFT|RIGHT OUTER [TO ONE|MANY] JOIN \}|\{ CROSS JOIN \}\        [`data_source`](ABENCDS_DATA_SOURCE_V1.html)\ [ON [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html)] ...``

[1. `... ON cds_cond`](#ABAP_ADDITION_1@3@)

[2. `... TO ONE|MANY`](#ABAP_ADDITION_2@3@)

Defines a [join](ABENJOIN_GLOSRY.html) between two data sources of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). The code above is part of the syntax of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html) and contains the recursive syntax of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html). Two joined data sources represent a join expression.

Every join expression for an inner or outer join must contain a join condition [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) after `ON` (for details, see Addition 1 below). A join expression for a cross join cannot contain any join condition.

[Inner joins](ABENINNER_JOIN_GLOSRY.html), [outer joins](ABENOUTER_JOIN_GLOSRY.html), and [cross joins](ABENCROSS_JOIN_GLOSRY.html) are possible:

Nested join expressions are evaluated in the following order:

The following CDS view works in exactly the same way as the [DDIC database view](ABENDDIC_DATABASE_VIEWS.html)\\ `DEMO_SCARR_SPFLI`. The class `CL_DEMO_CDS_JOIN` uses `SELECT` to access the view. Unlike when the DDIC view `DEMO_CDS_SCARR_SPFLI` is accessed, no client column is returned when the CDS entity `DEMO_SCARR_SPFLI` is accessed. The CDS-managed DDIC view `DEMO_CDS_JOIN` returns the client column too.

The following non-parenthesized chaining of join expressions

is parenthesized implicitly as follows:

No elements from `tab1` can be specified in the inner `ON` condition.

The following view contains a cross join of table `T000` of all clients of an AS ABAP with the entries for the message class `SABAPDEMOS` in the table `T100`. The class `CL_DEMO_CDS_CROSS_JOIN` accesses the view. The result set would be very large without this `WHERE` condition.

Join condition. A join condition must be specified for an inner or outer join. A join condition must not be specified for a cross join.

The syntax of the relational expressions of a join condition [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) is subject to the following restrictions:

Specifies the [cardinality](ABENCARDINALITY_GLOSRY.html) of a left outer join. This addition is positioned after `LEFT OUTER`, but is not possible after `RIGHT OUTER`. Only certain specific database systems apply this addition.

If the addition `TO ONE` is specified, any databases that support this addition assume that the result set defined by the left outer join matches this cardinality and the [SQL Optimizer](ABENQUERY_OPTIMIZER_GLOSRY.html) attempts to suppress any surplus joins. If the result set does not match the cardinality, the result is undefined and may be dependent on the entries in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html). If the addition `TO MANY` is specified, no optimization takes place as a rule.

Incorrect use of `TO ONE` in CDS views. The data in the DDIC database tables `SCARR` and `SPFLI` do not have the cardinality `TO ONE` and have the cardinality `TO MANY` instead. On a SAP HANA database, for example, the result is dependent on the [`SELECT` list](ABAPSELECT_LIST.html). If the left and right side are specified here, no optimization takes place. If no columns are specified on the right side (and the aggregate function [`COUNT(*)`](ABENCDS_AGGREGATE_FUNCTIONS_V1.html) is used), an optimization takes place. Here, only that data is read that meets the prerequisite cardinality.

The class `CL_DEMO_CDS_WRONG_TO_ONE` accesses the CDS views and displays the results.

-   A join between two data sources using `INNER JOIN` or just `JOIN` selects all entries of the data sources whose fields meet the `ON` condition.
-   A join between two data sources using `LEFT OUTER JOIN` selects all entries on the left side. A join between two data sources using `RIGHT OUTER JOIN` selects all entries on the right side. Entries that meet the `ON` condition have the same content as in the inner join. In entries that do not meet the `ON` condition, the elements on the right or left side have the [null value](ABENNULL_VALUE_GLOSRY.html). When the CDS view is used in ABAP SQL, null values are set to the type-dependent initial value.
-   When two data sources are joined using `CROSS JOIN`, their cross product is produced. All entries on the left side are combined with all entries on the right side. The number of rows in the result set is the number of rows on the left side multiplied by the number of rows on the right side.

-   In the case of inner and outer joins, by the arrangement of the `ON` conditions. From left to right, the most adjacent `ON` conditions are assigned to each `JOIN` and this expression is parenthesized implicitly. These implicit parentheses can be made explicit using actual parentheses, `( )`. This is optional.
-   By default, cross joins are evaluated from left to right. The priority of the evaluation can be affected by parentheses `( )`.

-   If multiple cross joins are combined, the order of the evaluation is irrelevant. The result is always the same and the number of rows is the product of the number of rows of all involved data sources.
-   If cross joins are combined with inner and outer joins, the result can depend on the order of evaluation or the parentheses.

-   A `WHERE` condition for a `SELECT` statement with joins affects the result set created using the joins.
-   An inner join or a cross join between two individual data sources is commutative. If the left and right side are switched, the result remains the same.
-   [Buffering](ABENCDS_V1_BUFFERING.html) is not recommended for a CDS view that contains an outer join. The result set can contain [null values](ABENNULL_VALUE_GLOSRY.html), which means that ABAP SQL reads can behave differently to direct database reads when the buffer is read, since null values in the buffer are transformed to initial values.
-   The function [`coalesce`](ABENCDS_COALESCE_EXPRESSION_V1.html) can be used to prevent null values in the result set.
-   A cross join behaves like an inner or outer join whose `ON` condition is always true. A cross join with a `WHERE` condition has the same result as an inner join with an identical `ON` condition. Unlike the inner join, in a cross join all data is read first before the condition is evaluated. In an inner join only data that meets the `ON` condition is read.
-   A cross join should only be used with extreme caution. Since it is not possible to specify an `ON` condition, all data of all involved data sources is read. In the case of very large datasets, the result set (whose number of rows is always the product of the number of all rows of both data sources) can quickly become very large.
-   On the database, a cross join of two client-dependent data sources is defined internally as an inner join, whose `ON` condition checks whether the client columns of the left and right side are equal. If one side is not client-dependent, the cross join is defined as specified.
-   In nested join expressions, parentheses are recommended for making the code easier to read. In the case of inner and outer joins, the parentheses can be specified wherever the `ON` conditions specify parentheses implicitly.
-   There is no limit on the number of join expressions in a `SELECT` statement of a CDS view in the DDL, but there is an [ATC](ABENATC_GLOSRY.html) check that produces a message once a specific number of expressions is reached.

-   General Rules

-   [Character literals](ABENCDS_LITERAL_V1.html) cannot be used in comparisons with numeric values.
-   [Numeric literals](ABENCDS_LITERAL_V1.html) that represent a value outside the value range of [`INT8`](ABENDDIC_BUILTIN_TYPES.html) must be specified as floating point literals with a decimal point.

-   Special Rules:

-   All [relational operators](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) are allowed. That means all comparison operators are allowed as well as `BETWEEN`, `LIKE`, `IS [NOT] NULL`, and `IS [NOT] INITIAL`.
-   `lhs` expects a [field](ABENCDS_FIELD_V1.html) of one of the two [`data_sources`](ABENCDS_DATA_SOURCE_V1.html) of the join.
-   `rhs` expects a [field](ABENCDS_FIELD_V1.html) of one of the two [`data_sources`](ABENCDS_DATA_SOURCE_V1.html) of the join, a [literal](ABENCDS_LITERAL_V1.html) with optional domain prefix, a [parameter](ABENCDS_PARAMETER_V1.html), a [session variable](ABENCDS_SESSION_VARIABLE_V1.html), or a [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V1.html).
-   [Path expressions](ABENCDS_PATH_EXPRESSION_V1.html) cannot be used.
-   [CDS DDL expressions](ABENCDS_EXPRESSIONS_V1.html) cannot be used.

-   More information can be found in the documentation of the current database system. The [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), for example, supports the additions `TO ONE` and `TO MANY` and their description is part of the [HANA-specific SQL documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).
-   To avoid undefined and platform-dependent behavior, `TO ONE` or `TO MANY` can be specified only if the data being read meets the relevant prerequisites.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_JOIN'\\n@AccessControl.authorizationCheck: #NOT\_ALLOWED\\ndefine view demo\_cds\_scarr\_spfli(\\n id,\\n carrier,\\n flight,\\n departure,\\n destination\\n )\\n as select from spfli\\n join scarr on scarr.carrid = spfli.carrid\\n\\{\\n key spfli.carrid,\\n key scarr.carrname,\\n key spfli.connid,\\n spfli.cityfrom,\\n spfli.cityto\\n\\}\\n ... from tab1 \\n join \\n tab2 \\n join \\n tab3 on tab2.id = tab3.id \\n on tab1.id = tab2.id ... ... from tab1 \\n join \\n ( tab2 \\n join \\n tab3 on tab2.id = tab3.id ) on tab1.id = tab2.id ... @AbapCatalog.sqlViewName: 'DEMO\_CDS\_CRSJN'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view demo\_cds\_cross\_join\\n as select from\\n t000\\n cross join t100\\n \\{\\n key t000.mandt,\\n t000.mtext,\\n t100.sprsl,\\n t100.arbgb,\\n t100.msgnr,\\n t100.text\\n \\}\\n where\\n t100.arbgb = 'SABAPDEMOS' \\n @AbapCatalog.sqlViewName: 'DEMOCDSWTO1'\\ndefine view demo\_cds\_wrong\_to\_one\_1\\n as select from\\n scarr as c\\n left outer to one join spfli as p on\\n c.carrid = p.carrid\\n \\{\\n c.carrid as carrid,\\n c.carrname as carrname,\\n p.connid as connid\\n \\}\\n @AbapCatalog.sqlViewName: 'DEMOCDSWTO2'\\ndefine view demo\_cds\_wrong\_to\_one\_2\\n as select from\\n scarr as c\\n left outer to one join spfli as p on\\n c.carrid = p.carrid\\n \\{\\n c.carrid as carrid,\\n c.carrname as carrname\\n \\}\\n @AbapCatalog.sqlViewName: 'DEMOCDSWTO3'\\ndefine view demo\_cds\_wrong\_to\_one\_3\\n as select from\\n scarr as c\\n left outer to one join spfli as p on\\n c.carrid = p.carrid\\n \\{\\n count(\*) as cnt\\n \\}\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_data\_source\_v1.html