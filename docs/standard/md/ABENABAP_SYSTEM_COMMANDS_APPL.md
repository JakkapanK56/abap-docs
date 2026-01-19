---
title: "ABENABAP_SYSTEM_COMMANDS_APPL"
description: |
  ABENABAP_SYSTEM_COMMANDS_APPL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SYSTEM_COMMANDS_APPL.htm"
abapFile: "ABENABAP_SYSTEM_COMMANDS_APPL.html"
keywords: ["ABENABAP", "SYSTEM", "COMMANDS", "APPL"]
---

Operating system statements or system commands execute statements or programs directly on the operating system of the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of an [AS instance](ABENAS_INSTANCE_GLOSRY.html). Executing operating system statements from ABAP programs should be the exception rather than the rule, however it may become necessary in system or administration programs to call operating system functions that cannot be accessed by ABAP statements. In certain circumstances, input from external sources may need to be passed to the operating system.

For executing operating system instructions on the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html), there is one recommended framework and two deprecated options:

Using input from external sources in operating system statements poses the risk of [system command injections](ABENSYS_COMM_INJECTIONS_SCRTY.html).

-   [SXPG Framework for Operating System Statements](ABENABAP_SYSTEM_COMMANDS_APPL_SXPG.html)
-   [Deprecated Calls of Operating System Statements](ABENABAP_SYSTEM_COMMANDS_APPL_DEPR.html)

abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html