---
title: "ABENABAP_SYSTEM_COMMANDS_APPL_SXPG"
description: |
  ABENABAP_SYSTEM_COMMANDS_APPL_SXPG - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SYSTEM_COMMANDS_APPL_SXPG.htm"
abapFile: "ABENABAP_SYSTEM_COMMANDS_APPL_SXPG.html"
keywords: ["do", "if", "data", "internal-table", "ABENABAP", "SYSTEM", "COMMANDS", "APPL", "SXPG"]
---

The only recommended way of executing operating system statements from ABAP on the operating system of the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current AS instance or another server is to use the SXPG framework. This framework is based on a list of allowed operating system statements that can be called using function modules in the function pool `SXPG`.

The list of allowed operating system statements is defined by the system administrator in transaction `SM69`. Here, the platform-dependent physical operating system statements are assigned to a logical command name used to address them in ABAP. When one of these logical command names is passed to one of the function modules listed below, the operating system statement appropriate for the current platform is executed. Logical command names assigned to an operating system command used by all platforms can be flagged with the operating system `ANYOS`. Static parameters can be assigned to any operating system statement and further parameters can be specified for when the statement is called. When an operating system statement is called using a logical command name, implicit authorization checks are performed, which can be enhanced by user-defined checks. SAP provides a range of predefined logical command names with the type `SAP`. Logical command names created by customers have the type `KUNDE`.

If they have the right authorizations, developers can view the list of operating system statements in transaction `SM49` and execute them from here. The following function modules can be called from ABAP programs:

These function modules can also be called remotely.

For more information, see the documentation [Programming with External Commands](https://help.sap.com/docs/ABAP_PLATFORM_NEW/b07e7195f03f438b8e7ed273099d74f3/4d93907648846e73e10000000a15822b) in SAP Help Portal.

Call of the operating system statement `ping` for the central database server of the system on the host computer of the current AS instance using the logical command name `PING` predefined by SAP. The result of the call is passed to the internal table `result`. The function module `SXPG_CALL_SYSTEM` can raise more specific exceptions than those handled explicitly here.

-   `SXPG_CALL_SYSTEM` for execution on the host computer of the current AS instance
-   `SXPG_COMMAND_EXECUTE` for execution on other servers; the result can be waited for, but this is not mandatory
-   `SXPG_COMMAND_EXECUTE_LONG`, like `SXPG_COMMAND_EXECUTE` but with a longer parameter list

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA dbserver TYPE c LENGTH 255. \\nCALL 'C\_SAPGPARAM' ID 'NAME' FIELD 'SAPDBHOST' \\n ID 'VALUE' FIELD dbserver. \\n\\ \\nDATA parameters TYPE sxpgcolist-parameters. \\nparameters = |-c1 \\{ dbserver \\}|. \\n\\ \\nDATA result TYPE TABLE OF btcxpm WITH EMPTY KEY. \\nCALL FUNCTION 'SXPG\_CALL\_SYSTEM' \\n EXPORTING \\n commandname = 'PING' \\n additional\_parameters = parameters \\n TABLES \\n exec\_protocol = result \\n EXCEPTIONS \\n no\_permission = 1 \\n command\_not\_found = 2 \\n security\_risk = 3 \\n OTHERS = 4. \\n\\ \\nIF sy-subrc = 0. \\n out->write( result ). \\nELSE. \\n out->write( |Error, return code \\{ sy-subrc \\}| ). \\nENDIF. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_system\_commands\_appl.html