---
title: "ABAPEVENTS_SHORTREF"
description: |
  ABAPEVENTS_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEVENTS_SHORTREF.htm"
abapFile: "ABAPEVENTS_SHORTREF.html"
keywords: ["if", "class", "ABAPEVENTS", "SHORTREF"]
---

[Reference](ABAPEVENTS.html)

``EVENTS evt [ EXPORTING VALUE(p1) [`typing`](ABENTYPING_SHORTREF.html)\                           [OPTIONAL|\{DEFAULT def1\}]\                         VALUE(p2) [`typing`](ABENTYPING_SHORTREF.html)\                           [OPTIONAL|\{DEFAULT def2\}]\                          ... ].``

Declares an instance event `evt` of a class or interface.

-   [`EXPORTING VALUE(p1) ... VALUE(p2) ...`](ABAPEVENTS.html)\\
    Defines the output parameters `p1`, `p2`, ... of the event.
-   [`typing`](ABENTYPING_SHORTREF.html)\\
    Assigns a type to the output parameter.
-   [`OPTIONAL|DEFAULT`](ABAPEVENTS_PARAMETERS.html)\\
    Specifies optional output parameters either with or without the replacement parameters `def1`, `def2`, ...

abenabap.html abenabap\_reference.html abenabap\_shortref.html