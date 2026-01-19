---
title: "ABENSQL_INJ_OS_QUERY_SCRTY"
description: |
  ABENSQL_INJ_OS_QUERY_SCRTY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_INJ_OS_QUERY_SCRTY.htm"
abapFile: "ABENSQL_INJ_OS_QUERY_SCRTY.html"
keywords: ["if", "try", "class", "data", "ABENSQL", "INJ", "QUERY", "SCRTY"]
---

[Filter conditions](ABENOS_QUERY_FILTER_COND.html) are passed to a query as character strings in the [query service](ABENQUERY_SERVICE_GLOSRY.html) in the [Object Services](ABENOBJECT_SERVICES_GLOSRY.html). If a filter condition like this (or part of it) originates outside the program, the same risk of an SQL injection is incurred as when a dynamic `WHERE` condition is manipulated in [ABAP SQL](ABENSQL_INJ_DYN_TOKENS_SCRTY.html). To prevent SQL injections of this nature, either parameters from a parameter list or must be used or parts escaped using the class `CL_ABAP_DYN_PRG`.

The executable example [`CL_DEMO_QUERY_SERVICE`](ABENOS_QUERY_ABEXA.html) is secure, since the interactive input is passed to the query using parameter bindings. If the source code after the statement `TRY` is replaced as follows, however, SQL injections are possible:

If `airpfrom` and `airpto` contain the values *FRA' OR AIRPFROM <> '* and *SIN' OR AIRPTO <> '*, for example, all existing data is read. If no parameter bindings are used, therefore, `airpfrom` and `airpto` must be escaped.

\\    query = query\_manager->create\_query( \\n      i\_filter  = \`AIRPFROM = \` && \\n                  cl\_abap\_dyn\_prg=>quote( airpfrom ) && \\n                  \`  AND AIRPTO = \` && \\n                  cl\_abap\_dyn\_prg=>quote( airpto ) ).

TRY. \\n query\_manager = cl\_os\_system=>get\_query\_manager( ). \\n query = query\_manager->create\_query( \\n i\_filter = \`AIRPFROM = '\` && airpfrom && \\n \`' AND AIRPTO = '\` && airpto && \`'\` ). \\n connections = \\n agent->if\_os\_ca\_persistency~get\_persistent\_by\_query( \\n i\_query = query ). \\n ... abenabap.html abenabap\_reference.html abenabap\_security.html abendynamic\_programming\_scrty.html abensql\_injections\_scrty.html