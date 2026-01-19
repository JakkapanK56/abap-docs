---
title: "ABENSAP_LUW_GLOSRY"
description: |
  ABENSAP_LUW_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSAP_LUW_GLOSRY.htm"
abapFile: "ABENSAP_LUW_GLOSRY.html"
keywords: ["update", "do", "if", "data", "ABENSAP", "LUW", "GLOSRY"]
---

Interrelated sequence of programming units, the execution of which, for example, in [dialog steps](ABENDIALOG_STEP_GLOSRY.html) or in [remote function calls](ABENREMOTE_FUNCTION_CALL_GLOSRY.html), can be distributed across several [work processes](ABENWORK_PROCESS_GLOSRY.html). However, their database changes are processed within a single [database LUW](ABENDATABASE_LUW_GLOSRY.html). SAP LUWs are implemented by bundling techniques, in which programming units such as [update function modules](ABENUPDATE_FUNCTION_MODULE_GLOSRY.html) or [subroutines](ABENSUBROUTINE_GLOSRY.html) are registered in different work processes but executed by a single work process. An SAP LUW is usually started by opening a new [internal session](ABENINTERNAL_SESSION_GLOSRY.html) and completed by the [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement [`COMMIT WORK`](ABAPCOMMIT.html). Changes within one SAP LUW can be undone by the ABAP SQL statement [`ROLLBACK WORK`](ABAPROLLBACK.html).

The [controlled SAP LUW](ABENCONTROLLED_SAP_LUW_GLOSRY.html) is an extension to the SAP LUW.

[**\-> More about**](ABENSAP_LUW.html)

ABENTECHNO\_GLOSSARY.html