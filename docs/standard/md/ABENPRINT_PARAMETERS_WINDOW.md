---
title: "ABENPRINT_PARAMETERS_WINDOW"
description: |
  ABENPRINT_PARAMETERS_WINDOW - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPRINT_PARAMETERS_WINDOW.htm"
abapFile: "ABENPRINT_PARAMETERS_WINDOW.html"
keywords: ["select", "if", "case", "method", "ABENPRINT", "PARAMETERS", "WINDOW"]
---

The spool dialog box makes it possible to interactively determine all spool parameters and checks the input values for consistency and completeness. The call is either automatic or program controlled.

When the *spool dialog box* is called automatically, the `SET_PRINT_PARAMETERS` function module can be used to set standard values. The function module `SET_PRINT_PARAMETERS` mainly has the same input parameters as the function module `GET_PRINT_PARAMETERS` (see [Overview of All Spool Parameters](ABENPRINT_PARAMETERS_OVERVIEW.html)) and no output parameters. An additional input parameter called `FOOT_LINE` is used when [spooling a screen list](ABENPRINT_SCREEN.html) to specify the output of a footer and is only respected here.

-   The spool dialog box appears automatically if a user chooses *Execute and Print* on the selection screen, and also when [spooling screen lists](ABENPRINT_SCREEN.html). In these cases, the spool dialog box cannot be suppressed.
-   The function module `GET_PRINT_PARAMETERS` can be used to call the spool dialog box in a program-driven way.

-   Displaying the *spool dialog box* using `GET_PRINT_PARAMETERS` is the recommended method for program-driven spooling, and thereby decouples the dialog from the statements [`NEW-PAGE PRINT ON`](ABAPNEW-PAGE_PRINT.html) and [`SUBMIT TO SAP SPOOL`](ABAPSUBMIT_LIST_OPTIONS.html). It is still possible to call the spool dialog box with the latter, however, the functions *Back* or *Cancel* cannot be processed properly.
-   The standard values for the spool dialog box must be set before sending the selection screen or list to the screen when the spool dialog box is called automatically. It is advisable to use `SET_PRINT_PARAMETERS` only at the [`INITIALIZATION`](ABAPINITIALIZATION.html) event of an executable program.
-   Using `SET_PRINT_PARAMETERS` only allows the setting those spool parameters that are stored in components of the `PRI_PARAMS` structure.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenprint.html abenprint\_parameters.html