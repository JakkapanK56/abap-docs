---
title: "ABENNEWS-610-DEBUGGER"
description: |
  ABENNEWS-610-DEBUGGER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-610-DEBUGGER.htm"
abapFile: "ABENNEWS-610-DEBUGGER.html"
keywords: ["select", "update", "do", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "ABENNEWS", "610", "DEBUGGER"]
---

[1\. Displaying Program Properties](#ABAP_MODIFICATION_1@4@)

[2\. Displaying Data References](#ABAP_MODIFICATION_2@4@)

[3\. Special Display of Deep Data Objects](#ABAP_MODIFICATION_3@4@)

[4\. Setting Breakpoints at Methods](#ABAP_MODIFICATION_4@4@)

[5\. Support for Class-Based Exceptions](#ABAP_MODIFICATION_5@4@)

[6\. Debugging Mode for Business Server Pages with ABAP Scripting](#ABAP_MODIFICATION_6@4@)

[7\. Transferring Breakpoints to HTTP and Update Sessions](#ABAP_MODIFICATION_7@4@)

[8\. Displaying Statements for the Database Interface](#ABAP_MODIFICATION_8@4@)

[9\. Navigating Forwards and Backwards in the Source Code](#ABAP_MODIFICATION_9@4@)

[10\. Displaying Memory Use](#ABAP_MODIFICATION_10@4@)

[11\. Displaying the Structure Fragment View](#ABAP_MODIFICATION_11@4@)

If *Goto -> Further Information -> Program Properties* is chosen in the menu, the system displays the properties *Fixed Point Arithmetic*, *System Program*, and *Unicode Check*.

If a data reference `dref` is double-clicked in the *Field Names* column, information about the technical properties of the reference are displayed. If the *Field Content* column is double-clicked, the content of the data reference is displayed. The referenced object is displayed when the data reference `dref->*` is double-clicked in the *Field Names* column.

The headers of strings, internal tables as well as data and object references are displayed if you place an asterisk at the beginning of the name. For example, to display the header of the internal table `itab` in hexadecimal form, enter `*itab` in the *Field Name* column. The field contains zeros if a table does not have a header.

If the data object name is prefixed with an ampersand, the relevant reference of the strings, internal tables, data references, or object references is displayed in hexadecimal form. For example, specifying `&str` displays the reference to the string `str`.

A breakpoint can be set for a method by choosing *Breakpoint -> Breakpoint At -> Method*.

The following functions are available when an exception is raised:

Business Server Pages ([`BSP`](ABENBUSINESS_SERVER_PAGES_GLOSRY.html)) can now be run in debugging mode. It is also possible to display and set breakpoints there. Business Server Pages can be displayed in Object Navigator by selecting an appropriate application under *BSP Applications*.

If an HTTP session or [update session](ABENUPDATE_GLOSRY.html) is called from a logical unit of work ([LUW](ABENDB_TRANSACTION.html)), new work processes are started for these sessions. Any breakpoints set in this calling LUW are inherited by the new sessions and can be displayed by choosing *Breakpoints*. For example, if the update module `func` is called using [`CALL FUNCTION func IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html), the new work process is displayed in a new GUI window, provided update debugging is selected under *Settings* in debugging mode. Here, all the breakpoints set in the calling LUW can be processed.

The most recent statements passed to the database now can be checked. Choose *Goto -> System -> System Areas* after the debugger is started and enter `Area = OSQL` in the input field.

If *Debugging - > Goto Statement* is chosen from the menu, the line containing the cursor is displayed. This allows simple forward and backward navigation within the displayed source code.

If *Settings -> Memory Display On/Off* is chosen from the menu, the memory used by objects, tables, references, or individual fields is displayed. It distinguishes between allocated and referenced memory and also displays the memory actually used by every data object.

A hit list of the 25 data objects with the highest memory consumption can be displayed by choosing *Goto -> System -> System Areas*. The following values can be entered in the *Area* field:

Choosing *Goto -> Display Data Object -> System Information* in the menu displays the [structure fragment view](ABENUNICODE_FRAGMENT_VIEW_GLOSRY.html). In this view, structures, internal tables, strings, data references, and objects are broken down into alignment gaps, character-like and byte-like areas, and all remaining types (such as P, I, F, strings, references, or internal tables).

Adjacent, character-like components of a structure (with the exception of strings) are organized internally into the same group, but only if there are no alignment gaps between these components. All possible alignment requirements for characters are respected here. In the same way, adjacent byte-like components are also grouped together.

1.  If the addition [`INTO ref`](ABAPCATCH_TRY.html) is missing from the statement `CATCH`, an exception object can be created in the debugger under *Settings*.
2.  If *Display Exception Object* is chosen, the attributes and interfaces of the exception class are displayed together with their content.
3.  If *Statement that Caused the Exception* is chosen, the line of the source code containing the statement that raised the exception is displayed. The statement is marked explicitly in the source code.

1.  `ITAB-TOP25` to display internal tables
2.  `OBJ-TOP25` to display objects
3.  `REF-TOP25` to display references

1.  `ALL-TOP25` to display all data objects

abenabap.html abennews.html abennews-6.html abennews-610.html