---
title: "ABENOS_QUERY_TERMS"
description: |
  ABENOS_QUERY_TERMS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOS_QUERY_TERMS.htm"
abapFile: "ABENOS_QUERY_TERMS.html"
keywords: ["select", "if", "method", "class", "data", "ABENOS", "QUERY", "TERMS"]
---

A query is used to search for persistent objects in the database using conditions and to create the corresponding instances of the persistent class in the ABAP program.

A query is implemented by an object (query object) that implements the interface `IF_OS_QUERY` and is created by a query manager.

A query is a logical expression that compares the attributes of a persistent class with freely selectable parameters or values, known as the [query condition](ABENOS_QUERY_FILTER_COND.html). Those objects are loaded whose attributes meet the query conditions. A query also contains a [sort condition](ABENOS_QUERY_SORT_COND.html), which determines the order of the loaded objects in the results table.

When a query is created using the query manager method `CREATE_QUERY`, the query conditions and sort conditions are passed to it.

The query itself is merely a container for the query condition and the sort condition. A query is executed by calling the interface method `IF_OS_CA_PERSISTENCY~GET_PERSISTENT_BY_QUERY` in the class agent of a persistent class. Similarly, the result of an executed query is not bound to the query, and it is returned by the method of the class agent as a table of references instead.

When the result set of a query is determined, the changes that are made to persistent objects in the current transaction are ignored. The query is executed directly in the database.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_object\_services.html abenabap\_object\_services\_query.html