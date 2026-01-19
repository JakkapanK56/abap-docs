---
title: "ABAPCALL_FUNCTION_DESTINATION"
description: |
  ABAPCALL_FUNCTION_DESTINATION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_FUNCTION_DESTINATION.htm"
abapFile: "ABAPCALL_FUNCTION_DESTINATION.html"
keywords: ["update", "do", "if", "data", "ABAPCALL", "FUNCTION", "DESTINATION"]
---

[Short Reference](ABAPCALL_FUNCTION_SHORTREF.html)

``CALL FUNCTION func DESTINATION dest [`parameter_list`](ABAPCALL_FUNCTION_DESTINATION_PARA.html).``

Synchronous call (sRFC) of a [remote-enabled function module](ABENREMOTE_ENABLED_FM_GLOSRY.html) specified in `func` using the [RFC interface](ABENRFC_INTERFACE_GLOSRY.html). The addition `DESTINATION` is used to specify the [destination](ABENRFC_DESTINATION.html) in `dest`. `func` and `dest` expect character-like data objects. The calling program is continued after the `CALL FUNCTION` statement when the remotely called function has finished.

**More Information**

For more information about sRFC, see the documentation [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) in SAP Help Portal.

-   If an empty string or a text field consisting only of blanks is specified for `dest`, the addition `DESTINATION` is ignored and a regular [`CALL FUNCTION func`](ABAPCALL_FUNCTION_GENERAL.html) call is performed.
-   The synchronous RFC triggers a [database commit](ABENDATABASE_COMMIT_GLOSRY.html) in the calling program with the following exception: No database commit is triggered by an sRFC during [update](ABENUPDATE_GLOSRY.html) processing. sRFC is not [forbidden during updates](ABENDB_COMMIT_DURING_UPDATE.html).

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html