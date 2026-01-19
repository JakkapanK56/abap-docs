---
title: "CDS Views, Client Handling"
description: |
  -   If one of the data sources used in the view is client-dependent(ABENCLIENT_DEPENDENT_GLOSRY.html), the view is client-dependent. -   If none of the data sources used in the view is client-dependent(ABENCLIENT_DEPENDENT_GLOSRY.html), the view is a client-independent view. -   CDS views for ap
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_VIEW_CLIENT_HANDLING_V1.htm"
abapFile: "ABENCDS_VIEW_CLIENT_HANDLING_V1.html"
keywords: ["select", "do", "if", "case", "method", "data", "ABENCDS", "VIEW", "CLIENT", "HANDLING"]
---

For a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) in ABAP CDS, the [CDS annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`@ClientHandling`](ABENCDS_VIEW_ANNO_V1.html) can be used to specify client handling.

CDS DDIC-Based Views are not [client-safe](ABENCLIENT_SAFE_GLOSRY.html) and cannot be used in the [`USING`](ABAPMETHOD_BY_DB_PROC.html) list of an [AMDP method](ABENAMDP_METHOD_GLOSRY.html).

The annotation `@ClientHandling.type` determines the client dependency of the view. The following values can be specified for the annotation:

Default value. The client dependency of the view is determined by the [data sources](ABENCDS_DATA_SOURCE_V1.html) used.

The view is client-dependent. A prerequisite for this is that at least on of the [data sources](ABENCDS_DATA_SOURCE_V1.html) used in the view is client-dependent. If not, a syntax error occurs.

The view is a client-independent view. A prerequisite for this is that none of the [data sources](ABENCDS_DATA_SOURCE_V1.html) used in the view is client-dependent. If not, a syntax error occurs.

The annotation `@ClientHandling.algorithm` determines how implicit client handling is performed. The following values can be specified for the annotation:

Default value for the values `#INHERITED` and `#CLIENT_DEPENDENT` of the annotation `@ClientHandling.type`. Cannot be used together with its value `#CLIENT_INDEPENDENT`.

The value `#AUTOMATED` expands the joins of the [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) implicitly as shown in the following table. In the case of outer joins, client-independent sides are made into client-dependent sides artificially using cross joins, which avoids null values. This applies to joins specified directly using `JOIN` and to instances of joins created when using [SQL path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html).

Cannot be used together with the value `#CLIENT_INDEPENDENT` of the annotation `@ClientHandling.type`.

The value `#SESSION_VARIABLE` expands the joins of the [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) implicitly as shown in the following table. This applies to joins specified explicitly and directly using `JOIN` and to instances of joins created when using [SQL path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html).

In addition, when Client-dependent data tables are accessed, `WHERE` clauses with comparisons of the client columns with the [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ [`$session.client`](ABENCDS_SESSION_VARIABLE_V1.html) are added to the view implicitly. If only client-dependent CDS entities are accessed, however, no clauses are added.

If the session variable `$session.client` is evaluated in the view, it is not possible to access the data of different clients in a single read. This applies in the following cases:

The addition `USING` of the statement [`SELECT`](ABAPSELECT.html) for switching [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) is allowed and the client specified here is used implicitly.

Default value for the value `#CLIENT_INDEPENDENT` of the annotation `@ClientHandling.type`. Cannot be used together with its values `INHERITED` and `#CLIENT_DEPENDENT`. No implicit client handling takes place.

In ABAP SQL reads, the client dependency of a CDS view has the following consequences for the CDS entity and any associated [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html):

CDS Views, Client Handling

-   If one of the data sources used in the view is [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html), the view is client-dependent.
-   If none of the data sources used in the view is [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html), the view is a client-independent view.

-   CDS views for application data should usually be client-dependent.
-   Unlike the annotation `@ClientDependent`, the annotation `@ClientHandling.type` cannot be used to make a CDS DDIC-based view (obsolete) into a client-independent view if it contains client-dependent data sources.
-   If the annotation `@ClientHandling.type` is not specified, client dependency is derived implicitly from the client dependency of the data sources uses, as when specified with the value `#INHERITED`.

-   When a client-dependent DDIC database table is a data source of the view or is a CDS view used as a data source and hence an implicit `WHERE` clause exists for the session variable.
-   When client-dependent and client-independent sides are joined in an outer join and there is an implicit `ON` condition for the session variable.

-   If a view with the value `#INHERITED` of the annotation `@ClientHandling.type` is a client-independent view, no implicit client handling takes place and the values `#AUTOMATED` and `#SESSION_VARIABLE` are ignored.
-   If no annotation `@ClientHandling.type` is specified, the annotation `@ClientHandling.algorithm` can be specified with the values `#AUTOMATED` or `#SESSION_VARIABLE` for the default value `#INHERITED`.
-   If an annotation `@ClientHandling.type` is specified but an annotation `@ClientHandling.algorithm` is not specified, the value `#AUTOMATED` is set in `#INHERITED` and `#CLIENT_DEPENDENT` implicitly and the value `#NONE` is set in `#CLIENT_INDEPENDENT`, also implicitly.
-   If none of the annotations is specified, the default values `#INHERITED` for `@ClientHandling.type` and `#AUTOMATED` for `@ClientHandling.algorithm` apply.
-   The value `#NONE` can only be specified for views declared explicitly as client-independent views. If specified for views declared explicitly as client-dependent views using `#CLIENT_DEPENDENT`, self-programmed client handling would be required and this is not currently supported.
-   The values `#AUTOMATED` and `#SESSION_VARIABLE` produce the same result when a client-dependent CDS view is used. They modify the way client handling is implemented internally, but do not modify the definition of the view or, its use. The value `#SESSION_VARIABLE` can improve performance by concentrating on a single client.

-   [CDS entity](ABENCDS_ENTITY_GLOSRY.html)

-   The view fields of the CDS entity of a client-dependent CDS view do not cover a client column. A client column of a client-dependent CDS view specified explicitly in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) is also not a component of the structured data type represented by the CDS entity and is removed implicitly from the result set of a [`SELECT`](ABAPSELECT.html) statement.
-   If [`SELECT`](ABAPSELECT.html) is used to access a client-dependent CDS entity, the data of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) is read implicitly.

-   [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html)

-   The view fields of a CDS-managed DDIC view (obsolete) of a client-dependent CDS view always cover a client column. This applies regardless of whether the client column is specified in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html).
-   If an obsolete access is made on the CDS-managed DDIC view (obsolete) using [`SELECT`](ABAPSELECT.html), the view is handled in accordance with regular [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html), which itself can be defined using the addition `USING`.
-   The name of the client column of a CDS-managed DDIC view (obsolete) with activated client handling is defined in accordance with the following hierarchy: If the client column is specified in the `SELECT` list, its name or its alternative name is used. If the client column is not specified in the `SELECT` list, `MANDT` is used. If `MANDT` is already used as an (alternative) element name in the `SELECT` list, `CLIENT` is used. If neither `MANDT` or `CLIENT` is possible, a syntax error occurs.

**Left Side** **Right Side** `INNER JOIN` \\ `LEFT OUTER JOIN` `RIGHT OUTER JOIN` `CROSS JOIN`\\ Client-dependent Client-dependent Compares the client columns in the `ON` condition Compares the client columns in the `ON` condition Compares the client columns in the `ON` condition Transforms the cross join to an inner join using an `ON` condition for the client columns Client-independent Client-dependent `-` The left side is replaced by a cross join of the client-independent data source with the DDIC database table `T000` and a comparison of the client columns in the `ON` condition. `-` `-`\\ Client-dependent Client-independent `-` `-` The right side is replaced by a cross join of the client-independent data source with the DDIC database table `T000` and the client columns are compared in the `ON` condition. `-`\\ Client-independent Client-independent `-` `-` `-` `-` **Left Side** **Right Side** `INNER JOIN` \\ `LEFT OUTER JOIN` `RIGHT OUTER JOIN` `CROSS JOIN`\\ Client-dependent Client-dependent Compares the client columns in the `ON` condition Compares the client columns in the `ON` condition Compares the client columns in the `ON` condition Transforms the cross join to an inner join using an `ON` condition for the client columns Client-independent Client-dependent `-` Compares the client column with the value of the [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ [`$session.client`](ABENCDS_SESSION_VARIABLE_V1.html) in the `ON` condition `-` `-`\\ Client-dependent Client-independent `-` `-` Compares the client column with the value of the [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ [`$session.client`](ABENCDS_SESSION_VARIABLE_V1.html) in the `ON` condition `-`\\ Client-independent Client-independent `-` `-` `-` `-` abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html