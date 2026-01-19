---
title: "The following non-parenthesized chaining of join expressions"
description: |
  is parenthesized implicitly as follows: No elements from `tab1` can be specified in the inner `ON` condition. The following view entity contains a cross join of table `T000` of all clients of an AS ABAP with the entries for the message class `SABAPDEMOS` in the table `T100`. The class `CL_DEMO_CDS_C
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_JOINED_DATA_SOURCE_V2.htm"
abapFile: "ABENCDS_JOINED_DATA_SOURCE_V2.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "ABENCDS", "JOINED", "DATA", "SOURCE"]
---

``... \{\ [INNER]\ [cardinality] JOIN       | LEFT OUTER [cardinality] JOIN       | RIGHT OUTER JOIN       | CROSS JOIN \}\         [`data_source`](ABENCDS_DATA_SOURCE_V2.html)\ [ON [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html)] ...``

[1. `... ON cds_cond`](#ABAP_ADDITION_1@3@)

[2. `... cardinality`](#ABAP_ADDITION_2@3@)

Defines a [join](ABENJOIN_GLOSRY.html) between two data sources of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). The code above is part of the syntax of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html) and recursively contains the syntax of a second data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html). Two joined data sources represent a join expression.

Every join expression for an inner or outer join must contain a join condition [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) after `ON` (for details, see Addition 1 below). A join expression for a cross join cannot contain any join condition.

When joining two or more data sources, each element of the `SELECT` list must have the name of its data source as prefix.
Example: `source1.field`

[Inner joins](ABENINNER_JOIN_GLOSRY.html), [outer joins](ABENOUTER_JOIN_GLOSRY.html), and [cross joins](ABENCROSS_JOIN_GLOSRY.html) are possible:

Nested join expressions are evaluated in the following order:

The following CDS view entity `DEMO_CDS_CLIENT_HANDLING` defines different kinds of [joins](ABENJOIN_GLOSRY.html) ([left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html), [inner join](ABENINNER_JOIN_GLOSRY.html), and [right outer join](ABENRIGHT_OUTER_JOIN_GLOSRY.html)) between the database table `T000` and the database table `DEMO_SALES_ORDER`.

The following non-parenthesized chaining of join expressions

is parenthesized implicitly as follows:

No elements from `tab1` can be specified in the inner `ON` condition.

The following view entity contains a cross join of table `T000` of all clients of an AS ABAP with the entries for the message class `SABAPDEMOS` in the table `T100`. The class `CL_DEMO_CDS_CROSS_JOIN_VE` accesses the view entity. Without the `WHERE` condition, the result set would be very large.

[Join condition](ABENJOIN_CONDITION_GLOSRY.html). A join condition must be specified for an inner or outer join. A join condition must not be specified for a cross join.

The syntax of the relational expressions of a join condition [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) is subject to the following restrictions:

Special rules apply when the operands of the `ON` condition are [CDS enumerated elements](ABENCDS_ENUM_ELEMENT_GLOSRY.html). These rules are described in the topic [CDS DDL - Using CDS Enumerated Types](ABENCDS_USE_ENUM_TYPE.html).

For an inner join or a left outer join, a [cardinality](ABENCARDINALITY_GLOSRY.html) can optionally be specified. A [source](ABENSOURCE_CARDINALITY_GLOSRY.html) and [target](ABENTARGET_CARDINALITY_GLOSRY.html) cardinality can be specified, or only a target cardinality. The following cardinality specifications are possible:

The [SQL Optimizer](ABENQUERY_OPTIMIZER_GLOSRY.html) uses the cardinality specification for performance optimization. It attempts to suppress surplus joins. To avoid undefined behavior, the cardinality should always be defined to match the data in question.

Incorrect use of `TO ONE` in CDS view entities. The data in the DDIC database tables `SCARR` and `SPFLI` do not have the cardinality `TO ONE`, but `TO MANY`. On a SAP HANA database, the result is dependent on the [`SELECT` list](ABAPSELECT_LIST.html). If the [`SELECT` list](ABAPSELECT_LIST.html) contains columns from both the left and right side of the join expression, no optimization takes place. If the [`SELECT` list](ABAPSELECT_LIST.html) does not contain any columns from the right side of the join expression, an optimization takes place. If the aggregate function `COUNT(*)` is used, an optimization takes place. When an optimization takes place, only that data is read that meets the specified cardinality.

The class `CL_DEMO_CDS_WRONG_TO_ONE_VE` accesses the CDS view entities and displays the results.

-   A join between two data sources using `INNER JOIN` or just `JOIN` selects all entries of the data sources whose fields match the `ON` condition.
-   A join between two data sources using `LEFT OUTER JOIN` selects all entries on the left side. A join between two data sources using `RIGHT OUTER JOIN` selects all entries on the right side. Entries that match the `ON` condition have the same content as in the inner join. In entries that do not match the `ON` condition, the elements on the right or left side have the [null value](ABENNULL_VALUE_GLOSRY.html). When the CDS view entity is used in ABAP SQL, null values are set to the type-dependent initial value.
-   When two data sources are joined using `CROSS JOIN`, the result is their cross product. All entries on the left side are combined with all entries on the right side. The number of rows in the result set is the number of rows on the left side multiplied by the number of rows on the right side.

-   In the case of inner and outer joins, by the arrangement of the `ON` conditions. From left to right, the most adjacent `ON` conditions are assigned to each `JOIN` and this expression is parenthesized implicitly. These implicit parentheses can be made explicit using actual parentheses, `( )`. This is optional.
-   By default, cross joins are evaluated from left to right. The priority of the evaluation can be affected by parentheses `( )`.

-   If multiple cross joins are combined, the order of the evaluation is irrelevant. The result is always the same and the number of rows is the product of the number of rows of all involved data sources.
-   If cross joins are combined with inner and outer joins, the result can depend on the order of evaluation or the parentheses.

-   A `WHERE` condition for a `SELECT` statement with joins affects the result set created using the joins.
-   An inner join or a cross join between two individual data sources is commutative. If the left and right side are switched, the result remains the same.
-   The function [`coalesce`](ABENCDS_COALESCE_EXPRESSION_V2.html) can be used to prevent null values in the result set.
-   A cross join behaves like an inner or outer join whose `ON` condition is always true. A cross join with a `WHERE` condition has the same result as an inner join with an identical `ON` condition. Unlike the inner join, in a cross join all data is read first before the condition is evaluated. In an inner join only data that meets the `ON` condition is read.
-   Cross joins should be used with caution. Since it is not possible to specify an `ON` condition, all data of all involved data sources is read. In the case of very large datasets, the result set (whose number of rows is always the product of the number of all rows of both data sources) can quickly become very large.
-   On the database, a cross join of two client-dependent data sources is defined internally as an inner join, whose `ON` condition checks whether the client columns of the left and right side are equal. If one side is client-independent, the cross join is defined as specified.
-   In nested join expressions, parentheses are recommended for making the code easier to read. In the case of inner and outer joins, the parentheses can be specified exactly where the `ON` conditions specify parentheses implicitly.

-   All [relational operators](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) are allowed. That means all comparison operators are allowed as well as `BETWEEN`, `LIKE`, `IS [NOT] NULL`, and `IS [NOT] INITIAL`.
-   The Boolean operators `NOT`, `AND`, and `OR` are allowed.
-   `lhs` expects a [field](ABENCDS_FIELD_V2.html) of one of the two [`data_sources`](ABENCDS_DATA_SOURCE_V2.html) of the join. If a comparison operator is used as operator, then `lhs` can also be a literal.
-   `rhs` expects a [field](ABENCDS_FIELD_V2.html) of one of the two [`data_sources`](ABENCDS_DATA_SOURCE_V2.html) of the join, a [literal](ABENCDS_LITERAL_V2.html), a [parameter](ABENCDS_PARAMETER_V2.html), a [session variable](ABENCDS_SESSION_VARIABLE_V2.html), a [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V2.html), or a [CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html). **Exception:** when using the operator `LIKE`, then `rhs` must be a character literal.
-   Path expressions are not allowed
-   Other CDS DDL expressions are not allowed.

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

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS View entity\_client handling'\\ndefine view entity DEMO\_CDS\_CLIENT\_HANDLING\\n as select from\\n t000 as client\_independent\\n left outer join demo\_sales\_order as \_LeftOuter\\n on \_LeftOuter.id = client\_independent.cccategory\\n inner join demo\_sales\_order as \_Inner\\n on \_Inner.id = client\_independent.cccategory\\n right outer join demo\_sales\_order as \_RightOuter\\n on \_RightOuter.id = client\_independent.cccategory\\n association to many demo\_sales\_order as \_Assoc\\n on \_Assoc.id = client\_independent.cccategory\\n \\{\\n key \_Assoc.so\_key,\\n \_Assoc.id,\\n \_Inner.id as id\_inner,\\n \_LeftOuter.id as id\_LeftOuter,\\n \_RightOuter.id as id\_RightOuter,\\n client\_independent.cccategory\\n \\}\\n where client\_independent.mtext = abap.char'SAP AG Konzern'\\n ... from tab1 \\n join \\n tab2 \\n join \\n tab3 on tab2.id = tab3.id \\n on tab1.id = tab2.id ... ... from tab1 \\n join \\n ( tab2 \\n join \\n tab3 on tab2.id = tab3.id ) on tab1.id = tab2.id ... @EndUserText.label: 'CDS view entity with a cross join'\\ndefine view entity DEMO\_CDS\_CROSS\_JOIN\_VE\\n as select from\\n t000\\n cross join t100\\n \\{\\n key t000.mandt,\\n t000.mtext,\\n t100.sprsl,\\n t100.arbgb,\\n t100.msgnr,\\n t100.text\\n \\}\\n where\\n t100.arbgb = abap.char'SABAPDEMOS'\\n @EndUserText.label: 'CDS view entity with join expression'\\ndefine view entity DEMO\_CDS\_WRONG\_TO\_ONE\_1\_VE\\n as select from\\n scarr as c\\n left outer many to one join spfli as p\\n on c.carrid = p.carrid\\n \\{\\n c.carrid as carrid,\\n c.carrname as carrname,\\n p.connid as connid\\n \\}\\n @EndUserText.label: 'CDS view entity with join expression'\\ndefine view entity DEMO\_CDS\_WRONG\_TO\_ONE\_2\_VE\\n as select from scarr as c\\n left outer many to one join spfli as p on c.carrid = p.carrid\\n\\{\\n c.carrid as carrid,\\n c.carrname as carrname\\n\\}\\n @EndUserText.label: 'CDS view entity with join expression'\\ndefine view entity DEMO\_CDS\_WRONG\_TO\_ONE\_3\_VE\\n as select from scarr as c\\n left outer many to one join spfli as p on c.carrid = p.carrid\\n\\{\\n count(\*) as cnt\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_data\_source\_v2.html