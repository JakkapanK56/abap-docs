---
title: "ABAPGET_CURSOR_DYNPRO"
description: |
  ABAPGET_CURSOR_DYNPRO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_CURSOR_DYNPRO.htm"
abapFile: "ABAPGET_CURSOR_DYNPRO.html"
keywords: ["loop", "if", "data", "ABAPGET", "CURSOR", "DYNPRO"]
---

[Short Reference](ABAPGET_CURSOR_SHORTREF.html)

``GET CURSOR \{\ \{ FIELD  field [[`field_properties`](ABAPGET_CURSOR_FIELD.html)]\ \}``\\ 
           `|\ \{ LINE line \}\ \}.`

If this statement is specified during [PAI](ABENPAI_GLOSRY.html) processing, depending on how `FIELD` or `LINE` is specified, it passes either the name of the screen element or the number of the line of a [table control](ABENTABLE_CONTROL_GLOSRY.html) or of the group of a [step loop](ABENSTEP_LOOP_GLOSRY.html) on which the screen cursor is positioned after a user action to the data objects `field` or `line`. `field` expects a character-like variable; `line` expects a variable of the type `i`. In [`field_properties`](ABAPGET_CURSOR_FIELD.html), further properties of the screen element can be defined.

If the cursor is in the command field of the [standard toolbar](ABENSTANDARD_TOOLBAR_GLOSRY.html) or on a pushbutton in the [screen layout](ABENSCREEN_GLOSRY.html), the statement is ignored, and the specified variables remain unchanged. If the cursor in the first variant is not in a screen element of the current [dynpro](ABENDYNPRO_GLOSRY.html) but on a bar in the GUI status, the content of `field` and the variables specified in [`field_properties`](ABAPGET_CURSOR_FIELD.html) is initialized. If the cursor in the second variant is not on a screen element that is part of a table control or a step loop, the variable `line` is initialized.

In the second variant, the same additions `VALUE`, `LENGTH`, and `OFFSET` can be specified after `LINE` as when using the statement [`GET CURSOR`](ABAPGET_CURSOR_LIST.html) for lists. However, when using the statement for dynpros all variables specified behind these additions are initialized during PAI processing.

`**sy-subrc**` **Meaning** 0 If `FIELD` is specified, the cursor is on a screen element of the current dynpro, or on the input field of the [standard toolbar](ABENSTANDARD_TOOLBAR_GLOSRY.html). If `LINE` is specified, the cursor is on a screen element within a table control or a step loop. 4 If `FIELD` is specified, the cursor is on a toolbar in the GUI status or, if `LINE` is specified, the cursor is outside a table control or a step loop. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html