---
title: "ABENCDS_NULL_VALUES"
description: |
  ABENCDS_NULL_VALUES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_NULL_VALUES.htm"
abapFile: "ABENCDS_NULL_VALUES.html"
keywords: ["select", "do", "case", "data", "ABENCDS", "NULL", "VALUES"]
---

A [null value](ABENNULL_VALUE_GLOSRY.html) is a special value returned by a [database](ABENDATABASE_GLOSRY.html) in order to indicate an undefined value or result.

In ABAP CDS, null values can be handled using one of the following:

In the `SELECT` statement of a CDS view entity, null values can be produced by

The topic [ABAP SQL - Null Values](ABENABAP_SQL_NULL_VALUES.html) explains the handling of null values in ABAP SQL.

In the following example, the field `NullResult` contains a null value because the `CASE` expression on the left side does not find a true `WHEN` condition. It evaluates the `ELSE` branch, and sets the result to null accordingly.

The following `SELECT` statement evaluates the CDS view entity using the [ABAP SQL coalesce function](ABENSQL_COALESCE.html). Since the case expression returns a null value, the coalesce function returns `'Null'` as result.

-   The condition [`IS NULL`](ABENCDS_COND_EXPR_NULL_V2.html).
-   The addition [`ELSE NULL`](ABENCDS_CASE_EXPRESSION_V2.html) in a case distinction in a CDS view entity.
-   The function [`COALESCE`](ABENCDS_COALESCE_EXPRESSION_V2.html).
-   The parameter `on_null` in [date and time conversion functions](ABENCDS_DATE_TIME_CONVERSIONS_V2.html).

-   [aggregate functions](ABENAGGREGATE_FUNCTION_GLOSRY.html),
-   in outer [joins](ABENJOIN_GLOSRY.html),
-   in [CDS expressions](ABENCDS_EXPRESSION_GLOSRY.html).

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity that return a null value'\\ndefine view entity DEMO\_CDS\_NULL\\n as select from demo\_expressions\\n\\{\\n 'A' as id,\\n\\n case\\n when id = 'Y'\\n then 'Z'\\n else null \\n end as NullResult\\n\\}\\n SELECT \\n FROM demo\_cds\_null \\n FIELDS coalesce( NullResult, 'Null' ) AS coalesced \\n INTO TABLE @FINAL(result). abenabap.html abencds.html