---
title: "ABENABAP_LANGUAGE_MODULARIZATION"
description: |
  ABENABAP_LANGUAGE_MODULARIZATION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_LANGUAGE_MODULARIZATION.htm"
abapFile: "ABENABAP_LANGUAGE_MODULARIZATION.html"
keywords: ["do", "method", "data", "ABENABAP", "LANGUAGE", "MODULARIZATION"]
---

Each ABAP program is modularized by [processing blocks](ABENPROCESSING_BLOCK_GLOSRY.html). Each accessible statement of an ABAP program that does not belong to the global declaration part of the program belongs to a [processing block](ABENPROCESSING_BLOCK_GLOSRY.html).

The possible processing blocks are:

Processing blocks are arranged in any order in the source code of an ABAP program. Non-declarative statements that are listed between or after completed processing blocks cannot be accessed and can never be executed. The syntax check reports such dead source code as errors. Declarative statements that are listed between or after completed processing blocks are part of the global data declarations of an ABAP program and are visible in all subsequent processing blocks.

[Macros](ABENMACRO_GLOSRY.html) and [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) can be used to [modularize source code](ABENABAP_LANGUAGE_INCLUDES.html) that is not bound to processing blocks.

[ABAP Objects as a Programming Model](ABENABAP_OBJ_PROGR_MODEL_GUIDL.html)

-   [Procedures](ABENABAP_LANGUAGE_PROCEDURES.html)
-   ABAP statements are used to process procedures. Possible [procedures](ABENPROCEDURE_GLOSRY.html) are: [Methods](ABENMETHOD_GLOSRY.html), [function modules](ABENFUNCTION_MODULE_GLOSRY.html), and [subroutines](ABENSUBROUTINE_GLOSRY.html)
-   [Dialog modules](ABAPMODULE.html)
-   [Dynpro flow logic](ABENDYNPRO_FLOW_LOGIC_GLOSRY.html) is used to process dialog modules.
-   [Event blocks](ABENEVENT_BLOCKS.html)
-   [Events](ABENEVENT_GLOSRY.html) in the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) are used to process event blocks.

abenabap.html abenabap\_reference.html abenabap\_program\_layout.html