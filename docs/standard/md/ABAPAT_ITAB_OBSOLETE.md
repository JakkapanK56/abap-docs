---
title: "ABAPAT_ITAB_OBSOLETE"
description: |
  ABAPAT_ITAB_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPAT_ITAB_OBSOLETE.htm"
abapFile: "ABAPAT_ITAB_OBSOLETE.html"
keywords: ["loop", "if", "class", "data", "field-symbol", "ABAPAT", "ITAB", "OBSOLETE"]
---

`[AT](ABAPAT_ITAB.html)\ \{NEW\}|\{END OF\} <fsi>`.

If the additions `INTO wa` or `ASSIGNING <fs>` are used in the statement [`LOOP`](ABAPLOOP_AT_ITAB.html), a field symbol `<fsi>` can be specified after [`AT \{NEW\}|\{END OF\}`](ABAPAT_ITAB.html), outside of classes. The associated component of the work area `wa` or the field symbol `<fs>` is assigned to this field symbol.

This form of specifying components dynamically has been replaced by [`(name)`](ABENITAB_COMPONENTS.html).

Using a field symbol behind `AT`.

name = 'WA-COL1'.\\ 
ASSIGN (name) TO <comp>.\\ 
\\ 
LOOP AT itab INTO wa.\\ 
  AT NEW <comp>.\\ 
    ...\\ 
  ENDAT.\\ 
ENDLOOP.

Using `(name)` behind `AT`.

name = 'COL1'.\\ 
\\ 
LOOP AT itab INTO wa.\\ 
  AT NEW (name).\\ 
    ...\\ 
  ENDAT.\\ 
ENDLOOP.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenitab\_obsolete.html