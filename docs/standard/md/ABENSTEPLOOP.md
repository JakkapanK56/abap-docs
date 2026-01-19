---
title: "ABENSTEPLOOP"
description: |
  ABENSTEPLOOP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTEPLOOP.htm"
abapFile: "ABENSTEPLOOP.html"
keywords: ["loop", "do", "if", "data", "ABENSTEPLOOP"]
---

Step loops are the predecessors of [table controls](ABENTABLE_CONTROL_GLOSRY.html) and are defined without individual names in [Screen Painter](ABENSCREEN_PAINTER_GLOSRY.html). A step loop contains screen elements that, unlike table controls, can occupy multiple rows, are grouped together in a group that can be repeated multiple times within the step loop on the [screen layout](ABENSCREEN_GLOSRY.html). The properties of the screen elements of the first group define the properties of the entire step loop. For this reason, the fields of a group must only be created once in each of the [dynpro](ABENDYNPRO_GLOSRY.html) and the ABAP program.

In the Screen Painter, it is also possible to determine whether the size of the step loop is fixed or variable. For each screen, more than one fixed step loop can be defined, but only one variable step loop. If the user changes the vertical size of the GUI window, this also changes the vertical size of the variable step loop. This raises the event [PAI](ABENPAI_GLOSRY.html).

Processing of step loops and table controls is based on the step loop technique, whose main features are the statements `LOOP ... ENDLOOP` in the [dynpro flow logic](ABENDYNPRO_FLOW_LOGIC_GLOSRY.html). These statements produce a loop pass across the step loop rows displayed on the screen and a data transport between the ABAP program and dynpro for all identically named data objects.

Independent step loops are obsolete and have been replaced by table controls, which are based on step loop but encapsulate them. Accordingly, the specified variants of the [`LOOP`](LOOP_OBSOLETE.html) statement are obsolete in the dynpro flow logic. The `LOOP` statement of the dynpro flow logic should only be used with the [`WITH CONTROL`](LOOP.html) addition, which assigns a table control to the statement.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abengui\_obsolete.html abendynpro\_obsolet.html