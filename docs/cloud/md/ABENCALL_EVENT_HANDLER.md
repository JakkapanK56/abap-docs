---
title: "ABENCALL_EVENT_HANDLER"
description: |
  ABENCALL_EVENT_HANDLER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCALL_EVENT_HANDLER.htm"
abapFile: "ABENCALL_EVENT_HANDLER.html"
keywords: ["if", "method", "class", "ABENCALL", "EVENT", "HANDLER"]
---

Event handlers are special methods that are declared using the addition [`FOR EVENT ... OF`](ABAPMETHODS_EVENT_HANDLER.html) of the statements [`METHODS`](ABAPMETHODS.html) and [`CLASS-METHODS`](ABAPCLASS-METHODS.html). They are not usually called directly using explicit [method calls](ABENMETHOD_CALLS.html).

-   Instead, they are called indirectly using [`RAISE EVENT`](ABAPRAISE_EVENT.html).
-   They can only be executed if an event handler is registered using [`SET HANDLER`](ABAPSET_HANDLER.html).

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html