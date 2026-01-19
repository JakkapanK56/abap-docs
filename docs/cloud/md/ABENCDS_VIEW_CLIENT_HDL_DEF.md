---
title: "ABENCDS_VIEW_CLIENT_HDL_DEF"
description: |
  ABENCDS_VIEW_CLIENT_HDL_DEF - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_VIEW_CLIENT_HDL_DEF.htm"
abapFile: "ABENCDS_VIEW_CLIENT_HDL_DEF.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "VIEW", "CLIENT", "HDL", "DEF"]
---

For a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), client handling is done implicitly and automatically by filtering the client ID contained in the SAP HANA session variable `CDS_CLIENT` that can be accessed in CDS using the [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ [`$session.client`](ABENCDS_SESSION_VAR_BUILTIN_V2.html).

The [client dependency](ABENCLIENT_DEPENDENCY_GLOSRY.html) of a view entity is determined by the [data sources](ABENCDS_DATA_SOURCE_V2.html) used:

The client dependency of CDS view entities is not defined by annotations, as it is done for [CDS DDIC-based views](ABENCDS_VIEW_CLIENT_HANDLING_V1.html).

If a CDS view entity is client-dependent, the client handling is performed by filtering the client ID contained in the SAP HANA session variable `CDS_CLIENT`. The session variable algorithm expands the [joins](ABENJOIN_GLOSRY.html) of the view entity implicitly as shown in the following table. This applies to joins specified explicitly using `JOIN`, as well as to instances of joins created when using [SQL path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html).

In addition, when client-dependent database tables are accessed, [`WHERE` clauses](ABENCDS_WHERE_CLAUSE_V2.html) with comparisons of the client columns with the [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ [`$session.client`](ABENCDS_SESSION_VARIABLE_V2.html) are added to the view implicitly. If only client-dependent [CDS entities](ABENCDS_ENTITY_GLOSRY.html) are accessed, however, no clauses are added.

It is not possible to access the data of different clients in a single read.

The following CDS view entity `DEMO_CDS_CLIENT_HANDLING` defines different kinds of [joins](ABENJOIN_GLOSRY.html) ([left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html), [inner join](ABENINNER_JOIN_GLOSRY.html), and [right outer join](ABENRIGHT_OUTER_JOIN_GLOSRY.html)) between a client-independent database table (`T000`) and a client-dependent database table (`DEMO_SALES_ORDER`). It also defines and uses an [association](ABENCDS_ASSOCIATION_GLOSRY.html) between the same client-independent database table (`T000`) and the same client-dependent database table (`DEMO_SALES_ORDER`).

The image below shows the SQL statement that is generated on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). For the left outer join, an `ON` condition is added that compares the client field of the database table `DEMO_SALES_ORDER` with the [current client](ABENCURRENT_CLIENT_GLOSRY.html). The current client is determined using the built-in SAP HANA function `SESSION_CONTEXT ('CDS_CLIENT')`, which is the equivalent to the session variable `$session.client` in ABAP CDS. In the same way, a `WHERE` clause is added that compares the client of the database table with the current client.

Since client handling is performed completely implicitly in CDS view entities, a client field is not allowed in the `SELECT` list of a view entity. The result set of an ABAP SQL read on a CDS view entity can never contain a client column either.

-   If one of the data sources used in the view is client-dependent, the view is [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html).
-   If none of the data sources used in the view is client-dependent, the view is [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html).

-   The [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ [`$session.client`](ABENCDS_SESSION_VAR_BUILTIN_V2.html) is filled with the [current client](ABENCURRENT_CLIENT_GLOSRY.html) by default.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS View entity\_client handling'\\ndefine view entity DEMO\_CDS\_CLIENT\_HANDLING\\n as select from\\n t000 as client\_independent\\n left outer join demo\_sales\_order as \_LeftOuter\\n on \_LeftOuter.id = client\_independent.cccategory\\n inner join demo\_sales\_order as \_Inner\\n on \_Inner.id = client\_independent.cccategory\\n right outer join demo\_sales\_order as \_RightOuter\\n on \_RightOuter.id = client\_independent.cccategory\\n association to many demo\_sales\_order as \_Assoc\\n on \_Assoc.id = client\_independent.cccategory\\n \\{\\n key \_Assoc.so\_key,\\n \_Assoc.id,\\n \_Inner.id as id\_inner,\\n \_LeftOuter.id as id\_LeftOuter,\\n \_RightOuter.id as id\_RightOuter,\\n client\_independent.cccategory\\n \\}\\n where client\_independent.mtext = abap.char'SAP AG Konzern'\\n **Left Side** **Right Side** `INNER JOIN` \\ `LEFT OUTER JOIN` `RIGHT OUTER JOIN` `CROSS JOIN`\\ Client-dependent Client-dependent Compares the client columns in the `ON` condition Compares the client columns in the `ON` condition Compares the client columns in the `ON` condition Transforms the cross join to an inner join using an `ON` condition for the client columns Client-independent Client-dependent `-` Compares the client column with the value of the [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ [`$session.client`](ABENCDS_SESSION_VAR_BUILTIN_V2.html) in the `ON` condition `-` `-`\\ Client-dependent Client-independent `-` `-` Compares the client column with the value of the [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ [`$session.client`](ABENCDS_SESSION_VARIABLE_V2.html) in the `ON` condition `-`\\ Client-independent Client-independent `-` `-` `-` `-` abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_v2\_view\_client\_handling.html