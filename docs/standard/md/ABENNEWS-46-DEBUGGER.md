---
title: "ABENNEWS-46-DEBUGGER"
description: |
  ABENNEWS-46-DEBUGGER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-46-DEBUGGER.htm"
abapFile: "ABENNEWS-46-DEBUGGER.html"
keywords: ["do", "if", "data", "types", "ABENNEWS", "DEBUGGER"]
---

In Release 4.6A, the following functions were added to ABAP Debugger:

[1\. Editing Strings](#ABAP_MODIFICATION_1@4@)

[2\. Enhancements in ABAP Objects](#ABAP_MODIFICATION_2@4@)

[3\. Other](#ABAP_MODIFICATION_3@4@)

The display of the data types `string` and `xstring` can now be scrolled. The cursor can be positioned on the string by double-clicking it. It is also possible to declare strings as watchpoints.

[Static attributes](ABENSTATIC_ATTRIBUTE_GLOSRY.html) and handlers of [static events](ABENSTATIC_EVENT_GLOSRY.html) can now be displayed without specifying an instance. It is also possible to find all references to a specific object. The same applies to data references.

The 'System Debugging' setting is saved too when breakpoints are saved. Furthermore, the new 'Last [Short Dump](ABENSHORT_DUMP_GLOSRY.html)' button makes it possible to display the last runtime error created. This can also be done using the transaction `LAST_SHORTDUMP`.

abenabap.html abennews.html abennews-4.html abennews-46a.html