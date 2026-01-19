---
title: "ABAPLOAD-OF-PROGRAM"
description: |
  ABAPLOAD-OF-PROGRAM - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPLOAD-OF-PROGRAM.htm"
abapFile: "ABAPLOAD-OF-PROGRAM.html"
keywords: ["do", "if", "class", "ABAPLOAD", "PROGRAM"]
---

`LOAD-OF-PROGRAM.`

This event keyword defines the [program constructor](ABENPROGRAM_CONSTRUCTOR_GLOSRY.html) of a function pool The program constructor is an event block whose event is raised by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) if such a program is loaded into the [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

The first time an external [procedure](ABENPROCEDURE_GLOSRY.html) is called, the [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html) of the called procedure is loaded into the internal session of the caller and the event `LOAD-OF-PROGRAM` is raised. The event block is executed before the called procedure. Each time a procedure of the same compilation unit is called again by a caller of the same internal session, the event `LOAD-OF-PROGRAM` is no longer raised.

The include program `LABAP_DOCUE00` implements the `LOAD-OF-PROGRAM` event block of a function pool. It sets a global variable and triggers an action that is relevant for the complete function pool.

-   The event `LOAD-OF-PROGRAM` should not be used to call sophisticated processes, where the program flow cannot be controlled by the caller. This includes especially those that involve user interactions, because then it cannot be guaranteed that the event block is fully executed.
-   If a program is only loaded because declarations are required of it, for example, when using [absolute type names](ABENABSOLUTE_TYPENAME_GLOSRY.html), the `LOAD-OF-PROGRAM` event is not raised. The program constructor is only executed if an executable unit of the program is called afterwards.
-   [Class pools](ABENCLASS_POOL_GLOSRY.html) do not have a program constructor, since the [static constructor](ABENSTATIC_CONSTRUCTOR_GLOSRY.html) of the global class defined in the class pool can be used instead.

abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html abenevent\_blocks.html abenprogram\_constructor.html