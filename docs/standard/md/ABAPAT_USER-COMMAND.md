---
title: "ABAPAT_USER-COMMAND"
description: |
  ABAPAT_USER-COMMAND - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPAT_USER-COMMAND.htm"
abapFile: "ABAPAT_USER-COMMAND.html"
keywords: ["select", "do", "if", "case", "ABAPAT", "USER", "COMMAND"]
---

[Short Reference](ABAPAT_USER-COMMAND_SHORTREF.html)

`AT USER-COMMAND.`

This statement defines an event block whose event is raised by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) if, when a screen list is displayed, a function with a user-defined function code is chosen. The function code is available in the system field `sy-ucomm` when processing starts.

User-defined function codes are all those that include character combinations, except for the following:

**Table 1**

**Table 2**

The following section of an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) works with a user-defined GUI status `MYLIST`. The function linked there with the function code `MY_SELECTION` raises the event `AT USER-COMMAND` when the list is displayed and creates details lists.

-   The function codes *PICK* and *PFnn* (*nn* stands for 01 to 24) do not raise the event `AT USER-COMMAND`, and instead raise the events `AT LINE-SELECTION` and `AT PFnn`.
-   All function codes that start with the character *%* are interpreted as system functions and do not raise the event `AT USER-COMMAND`. The system functions for lists are listed in the following table 1.
-   The function codes in the following table 2, likewise, do not raise the event `AT USER-COMMAND`, but are handled by the list processor.

START-OF-SELECTION. \\n SET PF-STATUS 'MYLIST'. \\n WRITE 'List line'. \\n\\ \\nAT USER-COMMAND. \\n IF sy-lsind = 20. \\n SET PF-STATUS 'MYLIST' EXCLUDING 'MY\_SELECTION'. \\n ENDIF. \\n CASE sy-ucomm. \\n WHEN 'MY\_SELECTION'. \\n WRITE: / 'You worked on list', sy-listi, \\n / 'You are on list', sy-lsind. \\n ... \\n ENDCASE. **Function Code** **Function** **Function Code** **Function** `%CTX` Calls a context menu `%EX` Exit `%PC` Save to file `%PRI` Spool `%SC` Search for ... `%SC+` Find next `%SL` Save in Office `%ST` Save in report tree *BACK* Back `P-` Scroll to previous page `P--` Scroll to first page `P+` Scroll to next page `P++` Scroll to last page `PFILE name` Stores list lines in a [text file](ABENFILE_GLOSRY.html) named *abap.lst* in standard character format in the standard directory on the [AS instance](ABENAS_INSTANCE_GLOSRY.html)\\ [host computer](ABENHOST_COMPUTER_GLOSRY.html). If a name is entered using `name`, this is converted to lowercase letters and used as the file name. `PL-` Scroll to first line of the page `PL-n` Scroll back n lines `PL+` Scroll to last line of the page `PL+n` Scroll forward n lines `PNOP` None `PP-` Scroll back one page `PP-n` Scroll back n pages `PP+` Scroll forward one page `PP+n` Scroll forward n pages `PPn` Scroll to beginning of page n `PRI, PRINT` Spool `PS--` Scroll to first column `PS++` Scroll to last column `PS-` Scroll one column to the left `PS-n` Scroll n columns to the left `PS+` Scroll one column to the right `PS+n` Scroll n columns to the right `PSn` Scroll to column n `PZn` Scroll to line n `RW` Cancel abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists\_interactive.html abapat\_list\_event.html