---
title: "ABENNEWS-30-OTHER"
description: |
  ABENNEWS-30-OTHER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-30-OTHER.htm"
abapFile: "ABENNEWS-30-OTHER.html"
keywords: ["select", "loop", "do", "while", "if", "case", "try", "data", "internal-table", "ABENNEWS", "OTHER"]
---

[1. `SET TITLEBAR` with Numbered Variables](#ABAP_MODIFICATION_1@4@) 

[2. New Additions for `LEAVE`: `LEAVE PROGRAM`, `LEAVE LIST-PROCESSING`](#ABAP_MODIFICATION_2@4@)

[3. New Language Element `CONTINUE` for Continuing a Loop](#ABAP_MODIFICATION_3@4@) 

[4\. Editing ABAP Text Elements](#ABAP_MODIFICATION_4@4@)

[5. `ASSIGN COMPONENT` with Component Name](#ABAP_MODIFICATION_5@4@) 

[6\. User Interface for Entering Dynamic Selections](#ABAP_MODIFICATION_6@4@)

[7. New Addition `OR fld` for the `WHEN` Statement](#ABAP_MODIFICATION_7@4@)

[`SET TITLEBAR`](ABAPSET_TITLEBAR_DYNPRO.html) now also replaces the variables &1 ... &9.

The new additions [`LEAVE PROGRAM`](ABAPLEAVE_PROGRAM.html) and [`LEAVE LIST-PROCESSING`](ABAPLEAVE_LIST-PROCESSING.html) for `LEAVE` now make it possible to control the flow precisely when leaving processing.

[`CONTINUE`](ABAPCONTINUE.html) terminates the current pass through a `DO`, `WHILE`, `LOOP`, or `SELECT` loop. However, the loop is not exited as in [`EXIT`](ABAPEXIT_LOOP.html), but continues with the next loop element, as is the case when using [`CHECK`](ABAPCHECK_LOOP.html).

The term *numbered texts* has been changed to *text symbols*. Until now a text symbol had an implicit length, calculated by comparing the text from the right until the first character not a blank.

Due to translation difficulties (a text may sometimes need more space in a foreign language than in the original language), it became necessary to define the length explicitly. Here, the same process was chosen as already used for Screen Painter transactions. The underscore (*\_*) allows you to vary the length for each entry. The underscore itself, however, is replaced by a blank before saving. As a result, underscores cannot be used in text symbols. In change mode, underscores (and therefore the internal length) are visible. In display mode, the text symbols are displayed as saved (without underscores).

The Text Comparison function displays the text symbols in their defined lengths. Trailing blanks are shown as underscores.

For all [screens](ABENDYNPRO_GLOSRY.html), the function Print has been added to the Text Elements menu. This function can be used to print a list of the required text elements, dependent on context.

[`ASSIGN COMPONENT`](ABAPASSIGN.html) now handles the next field as a component name and not as a component number, if the field is of type `C` or has a structure that contains no internal table.

You can use the function modules `FREE_SELECTIONS_INIT` and `FREE_SELECTIONS_DIALOG` to create a dialog for entering selections for any database fields. The selections entered by the user are returned in several different forms, for example, as tables with `WHERE` clauses that can be passed directly to a [`SELECT`](ABAPSELECT.html) statement.

The addition `OR fld` can now be used to define any number of comparison values for the [`WHEN`](ABAPWHEN.html) statement.

abenabap.html abennews.html abennews-30.html