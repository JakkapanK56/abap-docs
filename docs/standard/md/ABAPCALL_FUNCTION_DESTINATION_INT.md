---
title: "ABAPCALL_FUNCTION_DESTINATION_INT"
description: |
  ABAPCALL_FUNCTION_DESTINATION_INT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_FUNCTION_DESTINATION_INT.htm"
abapFile: "ABAPCALL_FUNCTION_DESTINATION_INT.html"
keywords: ["do", "case", "data", "ABAPCALL", "FUNCTION", "DESTINATION", "INT"]
---

**This addition is for internal use only. \\nIt must not be used in application programs.**

[`... KEEPING LOGICAL UNIT OF WORK`](#ABAP_ONE_ADD@1@)

This addition has the effect that the [work process](ABENWORK_PROCESS_GLOSRY.html) of the caller is kept, and no [database commit](ABENDATABASE_COMMIT_GLOSRY.html) is performed.

When this addition is used incorrectly, the worst-case scenario is a system shutdown.

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abapcall\_function\_destination.html