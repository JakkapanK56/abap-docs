---
title: "ABAPLOOP_AT_SCREEN"
description: |
  ABAPLOOP_AT_SCREEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLOOP_AT_SCREEN.htm"
abapFile: "ABAPLOOP_AT_SCREEN.html"
keywords: ["select", "loop", "if", "data", "internal-table", "ABAPLOOP", "SCREEN"]
---

[Short Reference](ABAPLOOP_AT_SCREEN_SHORTREF.html)

`LOOP AT SCREEN INTO wa.`\\ 
  `...`\\ 
`ENDLOOP.`

The statement `LOOP AT SCREEN ... ENDLOOP` defines a loop around a statement block. For every screen element of the current dynpro to which a [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html) is assigned, one loop pass is executed. `wa` can be specified as the following:

After the statement `LOOP`, the work area contains the properties of the screen element in question.

When a [table control](ABENTABLE_CONTROL_GLOSRY.html) or a [step loop](ABENSTEP_LOOP_GLOSRY.html) is processed (that is, within a [`LOOP`](LOOP.html) of the [dynpro flow logic](ABENDYNPRO_FLOW_LOGIC_GLOSRY.html)), the current properties are determined for its screen elements in the current line or group. Outside of the processing of a table control or step loop, the statically predefined properties of all lines or groups are determined for its screen elements.

[Dynpros, Dynamic Screen Modifications](ABENDYNPRO_MOD_SIMPLE_ABEXA.html)

-   an existing work area of the data type [`SCREEN`](ABENSCREEN.html) from the ABAP Dictionary,
-   an inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a work area of the type `SCREEN` is declared.

-   The statement `LOOP AT SCREEN` behaves like the statement [`LOOP`](ABAPLOOP_AT_ITAB.html) in a loop across an internal table, where a system table is used instead of an internal table.
-   In particular, the statement `LOOP AT SCREEN` can be used for selection screens during [selection screen processing](ABENSELECTION_SCREEN_EVENTS.html).
-   This statement also has an [obsolete short form](ABENLOOP_AT_SCREEN_OBSOLETE.html), which works with an obsolete built-in structure [`screen`](ABENSCREEN_STRUCTURE_OBSOLETE.html).
-   The obsolete built-in structure [`screen`](ABENSCREEN_STRUCTURE_OBSOLETE.html) should not be specified explicitly after `INTO`.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html