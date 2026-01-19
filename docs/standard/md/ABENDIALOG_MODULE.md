---
title: "ABENDIALOG_MODULE"
description: |
  ABENDIALOG_MODULE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDIALOG_MODULE.htm"
abapFile: "ABENDIALOG_MODULE.html"
keywords: ["data", "types", "ABENDIALOG", "MODULE"]
---

Dialog modules help prepare and process [screens](ABENSCREEN_GLOSRY.html) of [dynpros](ABENDYNPRO_GLOSRY.html). No local data types and data objects can be declared within a dialog module whose functions are implemented between the following statements:

[MODULE](ABAPMODULE.html)\\ \\n  ... \\n[ENDMODULE](ABAPENDMODULE.html)

All declarative statements in dialog modules are global data declarations of the ABAP program and are visible in all subsequent processing blocks. A dialog module works with the global data types and data objects of the [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html) and should therefore not contain its own declarations.

abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html