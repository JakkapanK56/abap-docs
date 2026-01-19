---
title: "ABAPMODIFY_SCREEN"
description: |
  ABAPMODIFY_SCREEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMODIFY_SCREEN.htm"
abapFile: "ABAPMODIFY_SCREEN.html"
keywords: ["select", "loop", "do", "if", "case", "data", "ABAPMODIFY", "SCREEN"]
---

[Short Reference](ABAPMODIFY_SCREEN_SHORTREF.html)

`MODIFY SCREEN FROM wa.`

This statement can be used in the statement block after [`LOOP AT SCREEN`](ABAPLOOP_AT_SCREEN.html) only and makes sense only during [PBO](ABENPBO_GLOSRY.html) processing. A work area `wa` of the type [`SCREEN`](ABENSCREEN.html) from the ABAP Dictionary must be specified after `FROM`. The statement modifies the properties of the current screen element with the values from the work area.

The `name` component must contain the name of the current screen element, otherwise the statement is not executed. Apart from the components `group1` through `group4` and `length`, all other components of `wa` have either the value 0 or 1. The value 0 deactivates the corresponding field property and the value 1 activates it. In addition, [`required`](ABENSCREEN.html) and [`value_help`](ABENSCREEN.html) can also have the value 2:

If `MODIFY SCREEN` is executed during PBO processing, the modified properties for the display of the [screen layout](ABENSCREEN_GLOSRY.html) affect the current [dynpro](ABENDYNPRO_GLOSRY.html) after PBO processing. The properties of the screen elements of the dynpro are reset to their static properties at the start of each PBO processing, so that the execution of `MODIFY SCREEN` during [PAI](ABENPAI_GLOSRY.html) processing does not affect the display of the following screen layout.

**The active component**

The `active` component is used to set the `input`, `output`, and `invisible` components at the same time. When PBO processing starts, the component `active` is always 1. If `active` is set to 0 by `MODIFY SCREEN`, `input` and `output` are set to 0 and `invisible` is set to 1. Any other values in `input`, `output`, and `invisible` are ignored. Conversely, setting `input` and `output` to 0 and `invisible` to 1 automatically sets `active` to 0 and any other values in `active` are ignored.

**Special Cases**

The following special cases should be noted:

**Modifications in Table Controls and Step Loops**

When processing a [table control](ABENTABLE_CONTROL_GLOSRY.html) or a [step loop](ABENSTEP_LOOP_GLOSRY.html), the changes affect the current line of the table control or the current step loop group. Before the processing of a table control, the change to the properties of a screen element that is part of a line in the table control does not affect the table control, since the values are passed from the structure created using [`CONTROLS`](ABAPCONTROLS.html). Before a step loop is processed, the change to the properties of a screen elements that is part of a step loop group affects all groups in the step loop.

**Modifications to Tabstrip Controls**

If the `active` component for a [tab title](ABENTAB_TITLE_GLOSRY.html) of a [tabstrip control](ABENTABSTRIP_CONTROL_GLOSRY.html) is set to 0, the whole tabstrip page is hidden.

In the following PBO module, an input field called `val` is made mandatory and converted to display in the foreground.

The program `DEMO_DYNPRO_MODIFY_SCREEN` demonstrates all possible dynamic screen modifications.

-   If the current dynpro field with the property *output field only* is defined in Screen Painter, it cannot be set to ready for input and the assignment of the value 1 to the component `input` is ignored.
-   If the current dynpro field with the property *required* is defined in Screen Painter or if the component `required` is set to 1, the component `input` should stay as 1. Otherwise, setting `input` to 0 would cancel the `required` property.

-   More specifically, the statement `MODIFY SCREEN` can be used for selection screens during the selection screen event [`AT SELECTION-SCREEN OUTPUT`](ABAPAT_SELECTION-SCREEN_EVENTS.html) in [selection screen processing](ABENSELECTION_SCREEN_EVENTS.html).
-   This statement has an [obsolete short form](ABENMODIFY_SCREEN_OBSOLETE.html) that works with the obsolete built-in structure [`screen`](ABENSCREEN_STRUCTURE_OBSOLETE.html).
-   The obsolete built-in structure [`screen`](ABENSCREEN_STRUCTURE_OBSOLETE.html) should not be specified explicitly after `FROM`.

MODULE modify\_0100 OUTPUT. \\n LOOP AT SCREEN INTO DATA(screen\_wa). \\n IF screen\_wa-name = 'VAL'. \\n screen\_wa-required = '1'. \\n screen\_wa-intensified = '1'. \\n MODIFY SCREEN FROM screen\_wa. \\n ENDIF. \\n ENDLOOP. \\nENDMODULE. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html abaploop\_at\_screen.html