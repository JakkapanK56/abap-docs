---
title: "ABENPRINT_PARAMETERS_FUNCTION"
description: |
  ABENPRINT_PARAMETERS_FUNCTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPRINT_PARAMETERS_FUNCTION.htm"
abapFile: "ABENPRINT_PARAMETERS_FUNCTION.html"
keywords: ["do", "if", "case", "ABENPRINT", "PARAMETERS", "FUNCTION"]
---

Spool and archiving parameters can only be set in a program using the following function module: `GET_PRINT_PARAMETERS`. If the corresponding structures are changed directly and the parameters in question are then used in `NEW-PAGE PRINT ON` or `SUBMIT TO SAP-SPOOL`, a runtime error occurs. The `GET_PRINT_PARAMETERS` function module can be used to execute the following functions:

The interface parameters for the function module are listed in [Overview of All Spool Parameters](ABENPRINT_PARAMETERS_OVERVIEW.html).

The [spool dialog box](ABENPRINT_PARAMETERS_WINDOW.html) is displayed by default and can be switched off using the parameter `NO_DIALOG`. The values passed to the function module are used as the default values in the spool dialog box and can be overwritten there.

The function module gets all parameters that have not been set from the system, taking some values from the user master record. Dependent parameters are set automatically. If the function module is unable to generate a record with valid spool and archiving parameters, it raises an exception. The generated records are either complete or empty. The export parameter `VALID` indicates whether a complete record could be created if the *spool dialog box* is used.

-   Creating a complete set of spool and archiving parameters.
-   Determining the spool parameters that are currently valid during spooling
-   Changing individual spool parameters
-   Interactive querying of the spool parameters in the spool dialog box

-   For `GET_PRINT_PARAMETERS`, the completeness of the parameter records and the run capability of the spool request are of primary importance. The function module does not perform a complete consistency test like the spool dialog box. Consistency is only established in cases where it is significant for the run capability of the spool request. Inconsistent entries are partly ignored, partly replaced. For example:

-   The `LINE_SIZE` parameter or `LINE_COUNT` parameter can be used to set values that are not compatible with the `LAYOUT` parameter and lead to truncated output. Such inconsistencies are recognized in the spool dialog box.
-   Even if invalid values are passed to `DESTINATION`, it is still possible to set `IMMEDIATELY` to *X*. The function module replaces the output device with a standard value (LP01) and initializes `IMMEDIATELY`. This causes the spool system to store the request using the settings that are suitable for the default printer.

-   The `GET_PRINT_PARAMETERS` function module can be called multiple times consecutively. For example, the spool dialog box can be called at the start of a program if the user enters the basic setting. When it is called again, the parameter records created in this way can be passed collectively to the `PRI_PARAMS` and `ARC_PARAMS` input parameters of the function module and partially overwritten there. This enables the spooling of wide lists in landscape format or narrow lists in portrait format with otherwise unchanged settings.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenprint.html abenprint\_parameters.html