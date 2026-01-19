---
title: "ABAPCALL_DB_PROC_PARAMETER_TABLES"
description: |
  ABAPCALL_DB_PROC_PARAMETER_TABLES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_DB_PROC_PARAMETER_TABLES.htm"
abapFile: "ABAPCALL_DB_PROC_PARAMETER_TABLES.html"
keywords: ["method", "class", "data", "internal-table", "ABAPCALL", "PROC", "PARAMETER", "TABLES"]
---

`... PARAMETER-TABLE ptab`

The addition `PARAMETER-TABLE` uses a hashed table `ptab` to assign actual parameters to the input and output parameters defined in the database procedure. This method of passing parameters can be used in dynamic calls only.

The internal table `ptab` must have the type `abap_parmbind_tab` from the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `ABAP` and the same applies to passing parameters as in [dynamic method calls](ABAPCALL_METHOD_PARAMETER_TABLES.html).

The column `NAME` must contain the names of the proxy parameters. Here, the column `KIND` can only contain the values of the constants `EXPORTING` and `IMPORTING` of the class `CL_ABAP_OBJECTDESCR`.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abenhana\_xsc\_obsolete.html abensap\_hana\_access\_xsc.html abensql\_script.html abapcall\_database\_procedure.html