---
title: "ABENNEWS-761-OTHERS"
description: |
  ABENNEWS-761-OTHERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-761-OTHERS.htm"
abapFile: "ABENNEWS-761-OTHERS.html"
keywords: ["do", "if", "method", "class", "ABENNEWS", "761", "OTHERS"]
---

[1. Specifying the Logon Language in `SUBMIT VIA JOB`](#ABAP_MODIFICATION_1@4@)

[2\. Results Table in ADBC](#ABAP_MODIFICATION_2@4@)

[3\. Full Text Search in the Web Version of the ABAP Keyword Documentation](#ABAP_MODIFICATION_3@4@)

The new addition `LANGUAGE` of the statement [`SUBMIT VIA JOB`](ABAPSUBMIT_VIA_JOB.html) makes it possible to set the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) of the background session, which was previously only possible when using the function module `JOB_SUBMIT` directly.

The method `SET_PARAM_TABLE` of the class `CL_SQL_STATEMENT`, used to access sets in [ADBC queries](ABENADBC_QUERY.html), now accepts sorted and hashed tables as well as standard tables.

Quotation marks (*"*) can be placed around a search term in the input fields of the Web version of the ABAP keyword documentation to force a full text search. If there are no quotation marks, an index search is performed and a full text search is made only if the index search does not find any hits.

The full text search option has been available in the SAP GUI Version of the ABAP keyword documentation for some time now using radio buttons.

abenabap.html abennews.html abennews-76.html abennews-761.html