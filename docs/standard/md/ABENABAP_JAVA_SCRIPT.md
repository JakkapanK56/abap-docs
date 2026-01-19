---
title: "ABENABAP_JAVA_SCRIPT"
description: |
  ABENABAP_JAVA_SCRIPT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_JAVA_SCRIPT.htm"
abapFile: "ABENABAP_JAVA_SCRIPT.html"
keywords: ["method", "class", "data", "ABENABAP", "JAVA", "SCRIPT"]
---

In the kernel of an AS ABAP, a JavaScript (JS) Engine is integrated, in which JavaScript programs can be executed either in normal or in debugging mode (server-side scripting). The JavaScript (JS) Engine used supports JavaScript Version 1.5. Proxies can be used to bind script variables to data objects in ABAP programs.

The class `CL_JAVA_SCRIPT` implements an API, which can be used in ABAP programs, for the JavaScript (JS) Engine implemented in the kernel. This class encapsulates the JavaScript C Engine API and makes methods and attributes available to the ABAP programmer to perform JavaScript programs.

**Support for the connection of JavaScript to ABAP is scheduled to be discontinued. This means that the class `CL_JAVA_SCRIPT` can no longer be used.**

The program `DEMO_JAVA_SCRIPT_MINI_EDITOR` is an example of a minimal JavaScript editor in which JavaScript programs can be edited, executed, and tested. This program was created using ABAP methods only and uses the class `CL_JAVA_SCRIPT`.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenextern\_obsolete.html