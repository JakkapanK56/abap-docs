---
title: "ABENRFC_SYSTEM_FIELDS"
description: |
  ABENRFC_SYSTEM_FIELDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRFC_SYSTEM_FIELDS.htm"
abapFile: "ABENRFC_SYSTEM_FIELDS.html"
keywords: ["if", "class", "types", "exception-handling", "ABENRFC", "SYSTEM", "FIELDS"]
---

RFC initializes the system field `sy-subrc` is initialized in the calling program or sets it to the value specified in exception handling, as with every function module call. In addition, each time a function module is called remotely, the system fields for messages (`sy-msgid`, `sy-msgno`, `sy-msgty`, and `sy-msgv1` through `sy-msgv4`) are initialized in the calling program. If the statement [`MESSAGE`](ABAPMESSAGE.html) is used to send a [message of the type *A*, *E*, or *X*](ABENABAP_MESSAGE_RFC.html) when a remotely called function module is executed, the classic exception `SYSTEM_FAILURE` is usually raised in the calling program. When the exception is raised, the system fields for messages of both types of [exception handling](ABENRFC_EXCEPTION.html) are filled with the properties of the message.

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abenrfc.html