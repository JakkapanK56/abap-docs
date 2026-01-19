---
title: "ABENCDS_SET_OPERATORS"
description: |
  ABENCDS_SET_OPERATORS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_SET_OPERATORS.htm"
abapFile: "ABENCDS_SET_OPERATORS.html"
keywords: ["select", "ABENCDS", "SET", "OPERATORS"]
---

[Set operators](ABENCDS_SET_OPERATORS_GLOSRY.html) merge the result sets of multiple queries into a single result set. In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), the following set operators are available:

The following image illustrates how each set operator merges several result sets:

-   [`EXCEPT`](ABENCDS_EXCEPT_V2.html) returns all distinct rows of the first result set that are not part of the following result sets.
-   [`INTERSECT`](ABENCDS_INTERSECT_V2.html) returns all distinct rows that are part of all result sets.
-   [`UNION`](ABENCDS_UNION_V2.html) merges the result sets of all queries.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_select\_clauses\_v2.html