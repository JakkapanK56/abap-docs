---
title: "ABAPSET_USER-COMMAND"
description: |
  ABAPSET_USER-COMMAND - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_USER-COMMAND.htm"
abapFile: "ABAPSET_USER-COMMAND.html"
keywords: ["select", "if", "case", "data", "ABAPSET", "USER", "COMMAND"]
---

[Short Reference](ABAPSET_USER-COMMAND_SHORTREF.html)

`SET USER-COMMAND fcode.`

Raises a list event with a function code specified in `fcode`. `fcode` must be a [character-like data object](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html). This statement can be used when creating a list. After completion, but before display of the current list, the runtime framework responds as if a user action were performed in the displayed list using the function code specified in `fcode`.

The assignment of list events to function codes corresponds to the description under [`AT USER-COMMAND`](ABAPAT_USER-COMMAND.html):

If the corresponding event block is implemented, the content of `sy-lsind` is increased by one and the event block is executed.

If multiple `SET USER-COMMAND` statements are used when creating a list, only the last statement is respected

Program-driven creation of a basic list and two details lists and display of a search dialog box in the second details list using the predefined function code *%SC*. The statement `SET CURSOR` is used to position the cursor in a list line in the event block `AT LINE-SELECTION` to enable the function code *PICK*.

-   The predefined function codes of the tables specified under `AT USER-COMMAND` are caught by the runtime framework
-   The function codes *PICK* and *PFnn* raise the events [`AT LINE-SELECTION`](ABAPAT_LINE-SELECTION.html) or [`AT PFnn`](ABAPAT_PFNN.html)
-   all other functions raise the event [`AT USER-COMMAND`](ABAPAT_USER-COMMAND.html)

-   The function code *PICK* only raises an event if the cursor is positioned on a list line.
-   If a function code is assigned to the Return key in the current [GUI status](ABENGUI_STATUS_GLOSRY.html), this function code is used instead of the one specified in `fcode`.

START-OF-SELECTION. \\n SET USER-COMMAND 'MYCOMM'. \\n WRITE 'Basic List'. \\n\\ \\nAT USER-COMMAND. \\n CASE sy-ucomm. \\n WHEN 'MYCOMM'. \\n WRITE 'Details List from USER-COMMAND,'. \\n WRITE: 'SY-LSIND', sy-lsind. \\n SET CURSOR LINE 1. \\n SET USER-COMMAND 'PICK'. \\n ENDCASE. \\n\\ \\nAT LINE-SELECTION. \\n WRITE 'Details List from LINE-SELECTION,'. \\n WRITE: 'SY-LSIND', sy-lsind. \\n SET USER-COMMAND '%SC'. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists\_interactive.html