---
title: "ABENPROGRAM_CONSTRUCTOR"
description: |
  ABENPROGRAM_CONSTRUCTOR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPROGRAM_CONSTRUCTOR.htm"
abapFile: "ABENPROGRAM_CONSTRUCTOR.html"
keywords: ["do", "case", "class", "data", "ABENPROGRAM", "CONSTRUCTOR"]
---

The program constructor can be used to initialize the global data of a program. It is introduced using the statement:

The associated event occurs when a program is loaded into the [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

-   [`LOAD-OF-PROGRAM`](ABAPLOAD-OF-PROGRAM.html)

-   [Class pools](ABENCLASS_POOL_GLOSRY.html) do not have a program constructor, since the [static constructor](ABENSTATIC_CONSTRUCTOR_GLOSRY.html) from the global class defined in the class pool can be used instead.
-   The program constructor should only be used according to its purpose to initialize global program data. It should not be used to call sophisticated processes, where the program flow cannot be controlled by the caller. This includes especially those that involve user interactions. Especially for [executable programs](ABENEXECUTABLE_PROGRAM_GLOSRY.html), the event block [`INITIALIZATION`](ABAPINITIALIZATION.html), that is executed as part of processing such a program, is preferable for use cases that involve user interactions.

abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html abenevent\_blocks.html