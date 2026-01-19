---
title: "ABENSYS_COMM_INJECTIONS_SCRTY"
description: |
  ABENSYS_COMM_INJECTIONS_SCRTY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSYS_COMM_INJECTIONS_SCRTY.htm"
abapFile: "ABENSYS_COMM_INJECTIONS_SCRTY.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENSYS", "COMM", "INJECTIONS", "SCRTY"]
---

A [system command injection](ABENSYST_COMM_INJECTION_GLOSRY.html) is a attack method that can result from insufficiently secure input from outside. A system command injection forwards malicious [operating system statements](ABENABAP_SYSTEM_COMMANDS_APPL.html), which enter a program from an external source, to the operating system. In ABAP, this can occur when the following programming techniques are used:

The [SXPG framework](ABENABAP_SYSTEM_COMMANDS_APPL_SXPG.html) is the only recommended method for executing operating system statements from the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current AS instance in ABAP. Here, only predefined logical command names can be passed to function modules in the function pool `SXPG`, so enabling a certain amount of independence from the operating system in question. These predefined logical command names comprise an include list, preventing both unwanted operating system statements from being executed and also direct system command injections. When the statement is called, authorization checks and other checks take place. If further parameters can be passed to the function modules, they can be checked for unwanted code relatively easily.

The two other ways of executing operating system statements from the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current AS instance are not at all secure (even with no external input) and should be avoided in ABAP programs. Calls of the `SYSTEM` function using internal statements should be especially avoided and can and should be deactivated using the [profile parameter](ABENPROFILE_PARAMETER_GLOSRY.html)\\ `rdisp/call_system`. External statements or parts of external statements should never be passed to the operating system without being checked first. Checking and filtering user input when using `FILTER` or `CALL 'SYSTEM'` is, however, particularly difficult, since all possible operating systems and code pages must be covered.

In principle, all input from outside must be checked if passed to the parameters of SXPG framework function modules and to parameters of the method or function module used to execute operating system statements on the presentation server. This prevents unwanted effects from operating system statements.

In the following program section, the operating system statement `ping` of the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current AS instance is executed for a database server using the unwanted system function `SYSTEM`. If this function has been deactivated (using the profile parameter `rdisp/call_system`), a runtime error occurs. The number of *pings* and the database server can be set externally. The program can be manipulated by two attacks:

In the following program section, the unwanted use of the system function `SYSTEM` is replaced by calling the function module `SXPG_CALL_SYSTEM` for the logical command name `PING` predefined by SAP. The function module call only shows some of the possible exceptions.

The example above can itself be improved by using a user-defined logical command name instead of the predefined logical command name `PING`. For each operating system used, this command name gives the `ping` statement a specific path, such as `/bin/ping` for Linux or `c:\\Windows\\System32\\ping.exe` for MS Windows. This calls the specified statement precisely and any attacker is unable to smuggle a statement with the same name (but with the wrong function) into a directory in front of the required target directory in the environment variable for the path.

-   In the application layer

-   Input forwarded from an external source to the parameters of the function modules used to call operating system statements using the [SXPG framework](ABENABAP_SYSTEM_COMMANDS_APPL_SXPG.html)
-   When the addition [`FILTER`](ABAPOPEN_DATASET_OS_ADDITION.html) of the statement [`OPEN DATASET`](ABAPOPEN_DATASET.html) is used and some or all of the specified operating system statement originates from outside the program.
-   Using the internal statement [`CALL`](ABAPCALL-.html) for the special system function `SYSTEM` if part of the specified operating system statement or some or all of its parameters come from outside the program.

-   In the presentation layer

-   Input forwarded from an external source to the parameters of the method, the class, or the function module.

-   The number of *pings* is unlimited, which means that *Denial of Service attack* can take place.
-   The input field DBSERVER for the database server, whose default is the current database server, is at risk from system command injections. If, for example, the string `; ls -l /etc` is appended to the name of the database server in a Unix operating system, the operating system statement `ls` is executed after the *pings* and the content of the directory `/etc` is produced.

-   *Denial of Service attacks* are prevented by limiting the number of *pings* to a maximum of 10.
-   The system command injections shown above are not possible, since the [SXPG framework](ABENABAP_SYSTEM_COMMANDS_APPL_SXPG.html) input is detected as invalid parameter passing to `ping`.

TYPES char255 TYPE c LENGTH 255. \\n\\ \\nDATA dbserver TYPE char255. \\nCALL 'C\_SAPGPARAM' ID 'NAME' FIELD 'SAPDBHOST' \\n ID 'VALUE' FIELD dbserver. \\n\\ \\nDATA pings TYPE i VALUE 1. \\ncl\_demo\_input=>add\_field( CHANGING field = pings ). \\ncl\_demo\_input=>add\_field( CHANGING field = dbserver ). \\ncl\_demo\_input=>request( ). \\n\\ \\nIF dbserver IS INITIAL. \\n cl\_demo\_output=>display( 'DBSERVER must not be initial ...' ). \\n RETURN. \\nENDIF. \\n\\ \\nDATA command TYPE char255. \\ncommand = |ping -c\\{ COND i( WHEN pings <= 1 THEN 1 \\n ELSE pings ) \\n \\} \\{ dbserver \\}|. \\n\\ \\nDATA result TYPE TABLE OF char255 WITH EMPTY KEY. \\nCALL 'SYSTEM' ID 'COMMAND' FIELD command \\n ID 'TAB' FIELD result. \\n\\ \\ncl\_demo\_output=>display( result ). DATA dbserver TYPE c LENGTH 255. \\nCALL 'C\_SAPGPARAM' ID 'NAME' FIELD 'SAPDBHOST' \\n ID 'VALUE' FIELD dbserver. \\n\\ \\nDATA pings TYPE i VALUE 1. \\ncl\_demo\_input=>add\_field( CHANGING field = pings ). \\ncl\_demo\_input=>add\_field( CHANGING field = dbserver ). \\ncl\_demo\_input=>request( ). \\n\\ \\nDATA parameters TYPE sxpgcolist-parameters. \\nparameters = |-c\\{ COND i( WHEN pings <= 1 THEN 1 \\n WHEN pings >= 10 THEN 10 \\n ELSE pings ) \\n \\} \\{ dbserver \\}|. \\n\\ \\nDATA result TYPE TABLE OF btcxpm WITH EMPTY KEY. \\nCALL FUNCTION 'SXPG\_CALL\_SYSTEM' \\n EXPORTING \\n commandname = 'PING' \\n additional\_parameters = parameters \\n TABLES \\n exec\_protocol = result \\n EXCEPTIONS \\n no\_permission = 1 \\n command\_not\_found = 2 \\n security\_risk = 3 \\n OTHERS = 4. \\n\\ \\nIF sy-subrc = 0. \\n cl\_demo\_output=>display( result ). \\nELSE. \\n cl\_demo\_output=>display( |Error, return code \\{ sy-subrc \\}| ). \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_security.html abendynamic\_programming\_scrty.html