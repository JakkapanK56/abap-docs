---
title: "ABENSQL_FUNCTIONS_UUID"
description: |
  ABENSQL_FUNCTIONS_UUID - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_FUNCTIONS_UUID.htm"
abapFile: "ABENSQL_FUNCTIONS_UUID.html"
keywords: ["select", "do", "internal-table", "ABENSQL", "FUNCTIONS", "UUID"]
---

The following table shows the SQL functions for [UUIDs](ABENUUID_GLOSRY.html) that can be used by [ABAP CDS](ABENABAP_CDS_GLOSRY.html) and [ABAP SQL](ABENABAP_SQL_GLOSRY.html). The columns **CDS DDIC-Based Views**, **CDS View Entities**, and **ABAP SQL** indicate where a function can be used. The **ABAP SQL In-Memory Engine** column indicates whether the function can be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) for accessing the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table with [`FROM @itab`](ABAPSELECT_ITAB.html).

The function is described in the relevant [ABAP SQL](ABENSQL_UUID.html) documentation.

**SQL Function** **Result** \\ **CDS DDIC-Based Views** \\ **CDS View Entities**\\ **ABAP SQL** **ABAP SQL In-Memory Engine**\\ `UUID( )` Creates [UUID](ABENUUID_GLOSRY.html) values. - - [x](ABENSQL_UUID.html) - abenabap.html abenabap\_dictionary.html abenddic\_builtin\_functions.html abensql\_functions.html