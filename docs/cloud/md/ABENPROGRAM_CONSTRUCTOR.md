---
title: "ABENPROGRAM_CONSTRUCTOR"
description: |
  ABENPROGRAM_CONSTRUCTOR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENPROGRAM_CONSTRUCTOR.htm"
abapFile: "ABENPROGRAM_CONSTRUCTOR.html"
keywords: ["do", "class", "data", "ABENPROGRAM", "CONSTRUCTOR"]
---

The program constructor can be used to initialize the global data of a program. It is introduced using the statement:

The associated event occurs when a program is loaded into the [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

-   [`LOAD-OF-PROGRAM`](ABAPLOAD-OF-PROGRAM.html)

-   [Class pools](ABENCLASS_POOL_GLOSRY.html) do not have a program constructor, since the [static constructor](ABENSTATIC_CONSTRUCTOR_GLOSRY.html) from the global class defined in the class pool can be used instead.

abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html abenevent\_blocks.html