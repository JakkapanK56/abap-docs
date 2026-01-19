---
title: "ABAPSUBMIT_PRINT_PARAMETERS"
description: |
  ABAPSUBMIT_PRINT_PARAMETERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSUBMIT_PRINT_PARAMETERS.htm"
abapFile: "ABAPSUBMIT_PRINT_PARAMETERS.html"
keywords: ["do", "if", "data", "types", "ABAPSUBMIT", "PRINT", "PARAMETERS"]
---

[Short Reference](ABAPSUBMIT_SHORTREF.html)

`... SPOOL PARAMETERS pri_params      [ARCHIVE PARAMETERS arc_params]\      WITHOUT SPOOL DYNPRO...`

These additions are used to supply the [spool request](ABENSPOOL_REQUEST_GLOSRY.html) with spool and archive parameters. The latter are necessary if the spool list is to be archived using [ArchiveLink](ABENARCHIVELINK_GLOSRY.html).

The addition `SPOOL PARAMETERS` passes the [spool parameters](ABENPRINT_PARAMETER_GLOSRY.html) in a structure `pri_params` of data type `PRI_PARAMS` from the ABAP Dictionary. If archiving is specified in `pri_params`, the archiving parameters must be passed using the addition `ARCHIVE PARAMETERS` in a structure `arc_params` of data type `ARC_PARAMS` from the ABAP Dictionary.

Structures of data types `PRI_PARAMS` and `ARC_PARAMS` must be supplied by the function module [`GET_PRINT_PARAMETERS`](ABENPRINT_PARAMETERS_FUNCTION.html). When the function module is called, either individual spool parameters or all spool parameters can be set in the program and/or a spool dialog box displayed. The function module creates a set of valid spool and archiving parameters in its output parameters for use as `pri_params` and `arc_params`.

If the structures `pri_params` or `arc_params` are initial, the spool parameters or archive parameters created by a call of the function modules `GET_PRINT_PARAMETERS` with initial input values are used.

The addition `WITHOUT SPOOL DYNPRO` suppresses the spool dialog box that is displayed as standard when the addition `TO SAP-SPOOL` is used.

Creation of a set of spool parameters with function module `GET_PRINT_PARAMETERS` and passing to a called program.

-   These additions must always be used as indicated here. It is particularly important that the standard spool dialog box that appears by default is suppressed. If the default spool dialog box is used, inconsistent spool parameters may be passed to the called program if the user exits the GUI window using *Cancel*. Instead, the spool dialog box can be displayed by executing the function module `GET_PRINT_PARAMETERS`. This function module has an output parameter `VALID` that indicates the consistency of the created spool parameters.
-   Use of the addition `WITHOUT SPOOL DYNPRO` without simultaneously passing spool parameters is only allowed outside ABAP objects. The spool parameters are then taken from the user master record as far as possible.
-   Calling the spool dialog box with `SUBMIT TO SAP-SPOOL` has the disadvantage that the *Back* function is not available. The system cannot return to in front of this statement after spooling has been switched on by such a statement. A termination can only be achieved using *Exit*, which terminates the entire program. If *Cancel* is used to terminate, inconsistent spool parameters can be passed to the program. To disconnect the spool dialog box from switching on spooling, it is recommended that the function module [`GET_PRINT_PARAMETERS`](ABENPRINT_PARAMETERS_FUNCTION.html) is called.
-   The same [obsolete additions](ABAPNEW-PAGE_PRINT_OBSOLETE.html) are available for the statement `SUBMIT TO SAP-SPOOL` as to the statement [`NEW-PAGE PRINT ON`](ABAPNEW-PAGE_PRINT.html).

DATA: params TYPE pri\_params, \\n valid TYPE c. \\n\\ \\nCALL FUNCTION 'GET\_PRINT\_PARAMETERS' \\n IMPORTING out\_parameters = params \\n valid = valid. \\n\\ \\nIF valid <> space. \\n SUBMIT myreport TO SAP-SPOOL WITHOUT SPOOL DYNPRO \\n SPOOL PARAMETERS params. \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_execution.html abenabap\_program\_call.html abenabap\_submit\_report.html abapsubmit.html abapsubmit\_list\_options.html