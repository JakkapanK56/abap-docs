---
title: "ABENUPDATE_FUNCTION_MODULE_GLOSRY"
description: |
  ABENUPDATE_FUNCTION_MODULE_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUPDATE_FUNCTION_MODULE_GLOSRY.htm"
abapFile: "ABENUPDATE_FUNCTION_MODULE_GLOSRY.html"
keywords: ["update", "data", "ABENUPDATE", "FUNCTION", "MODULE", "GLOSRY"]
---

[Function module](ABENFUNCTION_MODULE_GLOSRY.html) for which the property *update module* is marked in the [Function Builder](ABENFUNCTION_BUILDER_GLOSRY.html). It is the basis of the [update](ABENUPDATE_GLOSRY.html) function. An update function module generally contains changing database accesses and the statement [`CALL FUNCTION ... IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html) can be used to register it for later execution with the statement [`COMMIT WORK`](ABAPCOMMIT.html). When an update function module is created, it is assigned either a high or low priority level.

ABENABALA\_GLOSSARY.html