---
title: "ABAPSET_HANDLER_SHORTREF"
description: |
  ABAPSET_HANDLER_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_HANDLER_SHORTREF.htm"
abapFile: "ABAPSET_HANDLER_SHORTREF.html"
keywords: ["if", "method", "class", "ABAPSET", "HANDLER", "SHORTREF"]
---

[Reference](ABAPSET_HANDLER.html)

`SET HANDLER handler1 handler2 ...              [FOR oref|\{ALL INSTANCES\}]\              [ACTIVATION act].`

Registers or deregisters [event handlers](ABENEVENT_HANDLER_GLOSRY.html)\\ `handler1`, `handler2`, ... for events of classes.

-   Specifies the handler methods `handler1`, `handler2`, ... :
    \\
    `meth` (list of methods of the same class)
    `oref->meth` (list of methods of referenced objects)
    `class=>meth` (list of static methods of specified classes)
-   [`FOR \{ oref |\ \{ALL INSTANCES\}\ \}`](ABAPSET_HANDLER_INSTANCE.html)\\
    Registers instance event handlers for an object referenced using `oref` or for all objects that can raise the event.
-   [`ACTIVATION act`](ABAPSET_HANDLER_INSTANCE.html)\\
    Specifies a registration or deregistration in `act`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html