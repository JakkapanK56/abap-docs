---
title: "ABENABAP_SYSTEM_COMMANDS_APPL_DEPR"
description: |
  ABENABAP_SYSTEM_COMMANDS_APPL_DEPR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SYSTEM_COMMANDS_APPL_DEPR.htm"
abapFile: "ABENABAP_SYSTEM_COMMANDS_APPL_DEPR.html"
keywords: ["if", "catch", "data", "types", "internal-table", "ABENABAP", "SYSTEM", "COMMANDS", "APPL", "DEPR"]
---

In addition to calls of function modules in the [`SXPG` framework](ABENABAP_SYSTEM_COMMANDS_APPL_SXPG.html), operating system statements for the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current AS instance can also be executed in ABAP programs as follows:

Neither of these options should be used for common execution of operating system statements in ABAP programs.

Both statements cause the following problems:

Therefore, the [SXPG framework](ABENABAP_SYSTEM_COMMANDS_APPL_SXPG.html) should be used instead of these two options.

Before the statements `CALL 'SYSTEM'` is deactivated using the [profile parameter](ABENPROFILE_PARAMETER_GLOSRY.html)\\ `rdisp/call_system`, it must be ensured that it is no longer used in any programs. Any programs that still use `CALL 'SYSTEM'` must first be switched to using the [SXPG frameworks](ABENABAP_SYSTEM_COMMANDS_APPL_SXPG.html) before the unwanted statement can be deactivated. The options in the SXPG frameworks generally cover all requirements when calling operating system statements.

Call of the operating system statement `ping` for the central database server of the system on the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current AS instance using the addition `FILTER` of the statement `OPEN DATASET`. The output of the operating system statement is written to the opened file and can be read from there.

Call of the operating system statement `ping` for the central database server of the system on the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current AS instance using the addition `SYSTEM`. The result of the call is placed in the internal table `result`. This example can only be executed if the [profile parameter](ABENPROFILE_PARAMETER_GLOSRY.html)\\ `rdisp/call_system` allows the call.

-   The addition [`FILTER`](ABAPOPEN_DATASET_OS_ADDITION.html) of the statement [`OPEN DATASET`](ABAPOPEN_DATASET.html) can be used for executing operating system statements using pipes.
-   The internal statement [`CALL`](ABAPCALL-.html) can be used to call a special system function (`SYSTEM`), which can be used to execute operating system statements.

-   The addition [`FILTER`](ABAPOPEN_DATASET_OS_ADDITION.html) of [`OPEN DATASET`](ABAPOPEN_DATASET.html) should only be used, if at all, for operating system statements required for file handling.
-   Calls of the system function `SYSTEM` with the internal statement [`CALL`](ABAPCALL-.html) should never be made in application programs and can be deactivated using the [profile parameter](ABENPROFILE_PARAMETER_GLOSRY.html)\\ `rdisp/call_system`. If called, it then raises an uncatchable exception.

-   There are no central authorization checks.
-   The platform dependency of the operating system statements must be handled in the ABAP program itself.
-   Errors and exceptions cannot be handled specifically.
-   If input from external sources is used, it must be checked thoroughly and filtered to prevent [system command injections](ABENSYS_COMM_INJECTIONS_SCRTY.html) on any platform.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA msg TYPE msg. \\n\\ \\nDATA dbserver TYPE c LENGTH 255. \\nCALL 'C\_SAPGPARAM' ID 'NAME' FIELD 'SAPDBHOST' \\n ID 'VALUE' FIELD dbserver. \\n\\ \\nFINAL(command) = |ping -c1 \\{ dbserver \\}|. \\nFINAL(fname) = 'result.dat'. \\nOPEN DATASET fname FOR OUTPUT IN BINARY MODE FILTER command \\n MESSAGE msg. \\nCLOSE DATASET fname. \\n\\ \\nOPEN DATASET fname FOR INPUT IN BINARY MODE \\n MESSAGE msg. \\nDATA result TYPE xstring. \\nREAD DATASET fname INTO result. \\nCLOSE DATASET fname. \\nout->write( \\n cl\_abap\_conv\_codepage=>create\_in( )->convert( result ) ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES char255 TYPE c LENGTH 255. \\n\\ \\nDATA dbserver TYPE char255. \\nCALL 'C\_SAPGPARAM' ID 'NAME' FIELD 'SAPDBHOST' \\n ID 'VALUE' FIELD dbserver. \\n\\ \\nDATA command TYPE char255. \\ncommand = |ping -c1 \\{ dbserver \\}|. \\n\\ \\nDATA result TYPE TABLE OF char255 WITH EMPTY KEY. \\nCALL 'SYSTEM' ID 'COMMAND' FIELD command \\n ID 'TAB' FIELD result. \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_system\_commands\_appl.html