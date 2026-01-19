---
title: "Execute"
description: |
  The transaction `DEMO_SCREEN_FLOW` uses three dynpros. The dynpros 100 and 200 form a sequence. Dynpro 210 is a modal dialog box and is only called under special circumstances. This transaction is a good example of how a dynpro sequence is implemented. A closer look at dynpro 200 shows how the modal
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_FLOW_ABEXA.htm"
abapFile: "ABENDYNPRO_FLOW_ABEXA.html"
keywords: ["update", "do", "if", "case", "data", "ABENDYNPRO", "FLOW", "ABEXA"]
---

This example demonstrates how dynpro sequences behave.

Execute

The transaction `DEMO_SCREEN_FLOW` uses three dynpros. The dynpros 100 and 200 form a sequence. Dynpro 210 is a modal dialog box and is only called under special circumstances.

This transaction is a good example of how a dynpro sequence is implemented. A closer look at dynpro 200 shows how the modal dialog box is called. When processing the *BACK* or *EXIT* function codes, the PAI module must check if the flight data has been changed since it was last displayed or saved. If this is the case, dynpro 210 is to be called as a modal dialog box. The following parts of the flow logic of dynpro 200 are relevant here:

PROCESS AFTER INPUT. \\n  MODULE exit\_0200 AT EXIT-COMMAND. \\n  ... \\n  MODULE user\_command\_0200.

The system calls two dialog modules at the PAI event. The user interface of transaction `DEMO_SCREEN_FLOW` offers the functions *Back*, *Exit*, and *Cancel* as return commands. On the screen of dynpro 200, the user should only be able to leave the screen directly and return to dynpro 100 using *Cancel*. The function code is processed in the module `exit_200`. The next dynpro is set dynamically to 100, and dynpro 200 is terminated immediately using `LEAVE SCREEN`. All other function codes for the screen 200 are processed in the module `user_command_200`:

If the *Exit* function is chosen (function code *EXIT*), the user leaves the transaction completely since the dynpro sequence is ended dynamically using `SET SCREEN 0`. If the user chooses *Back* (function code *BACK*), the next dynpro is changed dynamically to 100 using `SET SCREEN 100`.

The subroutine `safety_check` first compares the current values of the dynpro fields with the values saved. If the values match, the user does not have to save and the subroutine terminates. If the values differ, `safety_check` calls the modal dialog box of dynpro 210. This asks the user whether they want to save and returns the answer to the field `ok_code`. The static next dynpro for dynpro 210 is 210. However, the processing logic (module `user_command_210`) always sets the next dynpro dynamically to 0, which returns control to the subroutine.

The following figure summarizes the flow of the dynpro sequences in the example:

-   Dynpro 100: The user enters flight data, chooses *Continue* to request a detailed display of the flight data, or ends the transaction.
-   Dynpro 200: The system displays complete details about the flight in input fields. The user overwrites the displayed data to enter the changes.
-   Dynpro 210: The modal dialog box is only displayed if the user attempts to exit dynpro 200 by choosing Back or Exit without saving the values modified. It enables the user to save changes or cancel the operation.

-   The *Save* function triggers a database update.
-   The *Exit* and *Back* functions call the subroutine `safety_check`. This subroutine checks to see whether there is unsaved data on the screen, and, if required, calls dynpro 210.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_processing.html