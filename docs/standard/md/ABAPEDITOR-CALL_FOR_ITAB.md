---
title: "ABAPEDITOR-CALL_FOR_ITAB"
description: |
  ABAPEDITOR-CALL_FOR_ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEDITOR-CALL_FOR_ITAB.htm"
abapFile: "ABAPEDITOR-CALL_FOR_ITAB.html"
keywords: ["delete", "do", "if", "class", "data", "types", "internal-table", "ABAPEDITOR", "CALL", "FOR", "ITAB"]
---

[Short Reference](ABAPEDITOR-CALL_SHORTREF.html)

`EDITOR-CALL FOR itab [TITLE title]`\\ 
                     `[\{DISPLAY-MODE\}|\{BACKUP INTO jtab\}].`

[1. `... TITLE title`](#ABAP_ADDITION_1@3@)

[2. `... DISPLAY-MODE`](#ABAP_ADDITION_2@3@)

[3. `... BACKUP INTO jtab`](#ABAP_ADDITION_3@3@)

This statement passes the content of the internal table `itab` to a text editor and starts this text editor. The internal table must be a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) without [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html) with a character-like line type.

The text editor is based on a GUI control displayed in the current GUI window and has its own GUI status, part of which matches that of the ABAP Editor. The text editor has, depending its settings, a line width of 255 or 72 characters. This setting can be made in the GUI status and also applies to the ABAP Editor.

The content of the table lines is converted line by line in accordance with the [conversion rules for elementary data types](ABENCONVERSION_ELEMENTARY.html) into a field of the type `c` with length 255 or 72 and passed to the text editor. If the text editor is exited using the function **Save**, the previous content of the table is deleted and the content of each line of the editor is appended to the internal table from top to bottom. If necessary, this process involves a conversion of the type `c` of length 255 or 72 to the line type of the internal table.

This statement is replaced by using the [Control Framework](ABENCONTROL_FRAMEWORK_GLOSRY.html). Here, the class `CL_GUI_TEXTEDIT` wraps the corresponding [GUI control](ABENGUI_CONTROL_GLOSRY.html).

A character-like data object `title` can be specified after the addition `TITLE`. The first 50 characters of `title` are displayed in the header of the text editor.

If the addition `DISPLAY-MODE` is specified, the text editor is started in display mode.

The text editor is started in display mode but can be switched to change mode using a key combination.

If the addition `BACKUP INTO` is specified, the content of the internal table `itab` is assigned to an internal table `jtab` before the text editor is called. `jtab` can have any table category. The line types must be [compatible](ABENCOMPATIBLE_GLOSRY.html) or [convertible](ABENCONVERTIBLE_GLOSRY.html).

Calls a text editor for a table with text lines. The processing in the `IF` control structure is only executed if the content of the table was actually modified. `sy-subrc` = 0 does not necessarily indicate this.

TYPES text TYPE c LENGTH 255. \\n\\ \\nDATA: text\_tab TYPE TABLE OF text, \\n back\_tab LIKE text\_tab. \\n\\ \\nEDITOR-CALL FOR text\_tab BACKUP INTO back\_tab. \\n\\ \\nIF sy-subrc = 0 AND \\n text\_tab <> back\_tab. \\n ... \\nENDIF. `**sy-subrc**` **Meaning** 0 The text editor was exited using the **Save** function after the content was modified. 2 The text editor was exited using the **Save** function and no content was modified. 4 The text editor was not exited using the **Save** function. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abengui\_obsolete.html abentexteditor.html