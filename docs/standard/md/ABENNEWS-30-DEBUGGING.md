---
title: "ABENNEWS-30-DEBUGGING"
description: |
  ABENNEWS-30-DEBUGGING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-30-DEBUGGING.htm"
abapFile: "ABENNEWS-30-DEBUGGING.html"
keywords: ["select", "insert", "delete", "do", "if", "internal-table", "ABENNEWS", "DEBUGGING"]
---

[1\. Debugging System Dynpros and System Programs](#ABAP_MODIFICATION_1@4@)

[2\. Debugging ABAP Lists](#ABAP_MODIFICATION_2@4@)

[3\. Table Editor](#ABAP_MODIFICATION_3@4@)

[4\. Structure Expansion](#ABAP_MODIFICATION_4@4@)

[5\. Program Overview](#ABAP_MODIFICATION_5@4@)

There are now special procedures for handling **system programs** and **system dynpros** in ABAP debugging. (System programs are programs with the status 'S' in the program properties, system dynpros are the [dynpros](ABENDYNPRO_GLOSRY.html) of system programs or dynpros that contain only system modules (module name `SYST`\-...).)

Examples for system dynpros: list dynpro, selection screen dynpro, ....

System programs and system dynpros must be debugged in **system debugging**. This can be accessed from anywhere in the system by choosing *System -> Utilities -> Debugging System* or by choosing *Settings -> System Debugging* from the debugger.

It is now possible to track how a list is built. As soon as a list is created, it can be displayed by pressing the Display List pushbutton in debugging. The display shows all existing lines with their formats. **Exception:** The only exception is the current line, which is not formatted until after [`NEW-LINE`](ABAPNEW-LINE.html).

In the display for internal tables, it is now also possible to change the displayed table. Rows can be changed, inserted, appended, and deleted.

In the structure and table displays, structures from fields and tables passed from external programs are now expanded.

A program overview is displayed. This lists all subroutines, functions, modules, and events belonging to the current program. The program source code can be displayed by double-clicking a line.

abenabap.html abennews.html abennews-30.html