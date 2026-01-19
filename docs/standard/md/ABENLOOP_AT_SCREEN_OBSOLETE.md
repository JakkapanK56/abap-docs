---
title: "This is a short form of the statement"
description: |
  LOOP AT SCREEN INTO screen.(ABAPLOOP_AT_SCREEN.html) n  ... nENDLOOP.(ABAPLOOP_AT_SCREEN.html) The short form uses a structure with the name `screen` implicitly instead of an explicitly declared work area `wa`. This is either the obsolete built-in structure `screen`(ABENSCREEN_STRUCTURE_
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOOP_AT_SCREEN_OBSOLETE.htm"
abapFile: "ABENLOOP_AT_SCREEN_OBSOLETE.html"
keywords: ["loop", "data", "internal-table", "ABENLOOP", "SCREEN", "OBSOLETE"]
---

`LOOP AT SCREEN. ... ENDLOOP.`

This is a short form of the statement

[LOOP AT SCREEN INTO screen.](ABAPLOOP_AT_SCREEN.html)\\ \\n  ... \\n[ENDLOOP.](ABAPLOOP_AT_SCREEN.html)

The short form uses a structure with the name `screen` implicitly instead of an explicitly declared work area `wa`. This is either the obsolete built-in structure [`screen`](ABENSCREEN_STRUCTURE_OBSOLETE.html) or a structure declared in the current context called `screen`, which must have the data type `SCREEN`.

-   The [long form](ABAPLOOP_AT_SCREEN.html) with an explicitly declared work area should be used instead of the short form.
-   The short form of the statement `LOOP AT SCREEN` behaves like the statement [`LOOP`](ABAPLOOP_AT_ITAB.html) in a loop across an internal table with a [header line](ABENHEADER_LINE_GLOSRY.html), where the built-in structure is used as the header line.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abengui\_obsolete.html abenabap\_dynpro\_obsolet.html