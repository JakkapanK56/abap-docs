---
title: "ABENOS_QUERY_SORT_COND"
description: |
  ABENOS_QUERY_SORT_COND - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOS_QUERY_SORT_COND.htm"
abapFile: "ABENOS_QUERY_SORT_COND.html"
keywords: ["if", "method", "ABENOS", "QUERY", "SORT", "COND"]
---

A sort condition is a list of attributes `attr` that specifies the direction in which they are to be sorted. Only attributes with an elementary type can be specified. For each attribute, an order must be specified, either ascending or descending. This information is placed after the attribute. Only public attributes can be used.

`attr ASCENDING`

`attr DESCENDING`

The sort condition and its parameter list are analyzed when a query is executed and transformed into an internal representation. To bypass parsing each time the query is executed, the methods of the interface `IF_OS_QUERY_EXPR_FACTORY` can be used to create reusable sort conditions in the internal representation.

Sort conditions.

price ASCENDING date DESCENDING abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_object\_services.html abenabap\_object\_services\_query.html