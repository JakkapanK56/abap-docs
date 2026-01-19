---
title: "ABENNEWS-40-OTHER-40AB"
description: |
  ABENNEWS-40-OTHER-40AB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-40-OTHER-40AB.htm"
abapFile: "ABENNEWS-40-OTHER-40AB.html"
keywords: ["if", "case", "data", "types", "ABENNEWS", "OTHER", "40AB"]
---

[1. Improved Behavior in `EDITOR-CALL FOR itab`](#ABAP_MODIFICATION_1@4@)

[2. New Variant `DESCRIBE FIELD f INTO td`](#ABAP_MODIFICATION_2@4@)

[3\. Invalid Declarations](#ABAP_MODIFICATION_3@4@)

[4\. ABAP Types 1 and 2](#ABAP_MODIFICATION_4@4@)

[5. `WRITE`: New Formatting Option `NO-GROUPING`](#ABAP_MODIFICATION_5@4@)

[6. `WRITE`: Improved Behavior in `WRITE (name)...TO`](#ABAP_MODIFICATION_6@4@)

[7. `SET RUN TIME ANALYZER ON/OFF`](#ABAP_MODIFICATION_7@4@)

[8. Arithmetic Using `DICTIONARY` Types `INT1` and `INT2`](#ABAP_MODIFICATION_8@4@)

[9. `PERFORM form(prog)`: Improved Behavior for Addition `IF FOUND`](#ABAP_MODIFICATION_9@4@)

[10\. Contexts](#ABAP_MODIFICATION_10@4@)

The table is only returned with changes if saved in the editor. The new addition `... BACKUP INTO` is used to return the table to its original state. `sy-subrc` is used to indicate whether change operations were performed in the editor.

This new variant can be used to determine all of the attributes of a data object `f`.

Also, a simple `DESCRIBE` can be used with the addition "`HELP-ID hlp`" to determine which help ID belongs to `f` if any.

Fields ending with a '+' or '()' are no longer allowed in `DATA`.

In ABAP release 3.x, the ABAP types 1 and 2 were still supported in some areas in a very basic manner to retain R/2 compatibility. This is no longer the case in ABAP release 4.0.

If a field of type `I` or type `P` is displayed, its thousands separator is suppressed.

If the content of the field `name` is invalid, a return code is set and the target field is left unchanged.

The addition `MODE` is no longer used.

Assignments and arithmetic using `DICTIONARY` types `INT1` and `INT2` as target fields must remain within the following value ranges:

Otherwise a runtime error is produced.

The `PERFORM` statement is ignored if the program specified cannot be found.

Refer to [Contexts (Obsolete)](ABENCONTEXT.html).

-   `INT1`: 0 to 255
-   `INT2`: -32768 to 32767.

abenabap.html abennews.html abennews-4.html abennews-40.html