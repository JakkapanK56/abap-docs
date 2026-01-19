---
title: "ABENPROGRAM_TYPE_OVIEW"
description: |
  ABENPROGRAM_TYPE_OVIEW - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPROGRAM_TYPE_OVIEW.htm"
abapFile: "ABENPROGRAM_TYPE_OVIEW.html"
keywords: ["select", "if", "method", "class", "types", "ABENPROGRAM", "TYPE", "OVIEW"]
---

The type of an ABAP program determines, among other things, which declarations and processing blocks a program can contain and how it can be executed in the ABAP runtime framework.

The following table shows the program types for standalone programs ([compilation units](ABENCOMPILATION_UNIT_GLOSRY.html)) and how they affect their properties:

The second column of the table shows the respective [program-initiating statement](ABENABAP_PROGRAM_STATEMENT.html), the third column shows the type of execution for which the program type is mainly designated. The fourth column shows which declarations can be made in the [global declaration part](ABENGLOBAL_DECLARATION_SECT_GLOSRY.html) of a program with the specified type. The fifth column indicates which [processing blocks](ABENPROCESSING_BLOCK_GLOSRY.html) the program can contain. The sixth column indicates whether standalone [dynpros](ABENDYNPRO_GLOSRY.html) are supported. The final column indicates whether standalone [text pools](ABENTEXT_POOL_GLOSRY.html) can be created.

[ABAP Program Types](ABENPROGRAM_TYPE_GUIDL.html)

**Program Type** **Program-Initiating Statement** **Execution** **Global Declarations** \\ **Processing Blocks** **Dynpros** **Text Pools** [Class pool](ABENCLASS_POOL_GLOSRY.html) [`CLASS-POOL`](ABAPCLASS-POOL.html) \\ [Call](ABENMETHOD_CALLS.html) of a visible method or using a [transaction code](ABENTRANSACTION_CODE_GLOSRY.html) for an [object transaction](ABENOO_TRANSACTION_GLOSRY.html). A global class of the class library, local interfaces and classes, statements [`TYPES`](ABAPTYPES.html) and [`CONSTANTS`](ABAPCONSTANTS.html) Methods only No Yes [Interface pool](ABENINTERFACE_POOL_GLOSRY.html) \\ [`INTERFACE-POOL`](ABAPINTERFACE-POOL.html) None A global interface of the class library None No No [Function pool](ABENFUNCTION_POOL_GLOSRY.html) or [function group](ABENFUNCTION_GROUP_GLOSRY.html) \\ [`FUNCTION-POOL`](ABAPFUNCTION-POOL.html) Call of a function module using [`CALL FUNCTION`](ABAPCALL_FUNCTION.html) or of a dynpro using a [transaction code](ABENTRANSACTION_CODE_GLOSRY.html)\\ Local interfaces and classes, all other declarative statements All except event blocks for [reporting events](ABENREPORTING_EVENT_GLOSRY.html) Yes Yes [Executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) \\ [`REPORT`](ABAPREPORT.html) Statement [`SUBMIT`](ABAPSUBMIT.html) or call of a dynpro or selection screen using a [transaction code](ABENTRANSACTION_CODE_GLOSRY.html) Local interfaces and classes, all other declarative statements All except function modules Yes Yes [Module pool](ABENMODUL_POOL_GLOSRY.html) \\ [`PROGRAM`](ABAPPROGRAM.html) Call of a dynpro using a [transaction code](ABENTRANSACTION_CODE_GLOSRY.html) Local interfaces and classes, all declarative statements All except function modules and event blocks for reporting events Yes Yes [Subroutine pool](ABENSUBROUTINE_POOL_GLOSRY.html) \\ [`PROGRAM`](ABAPPROGRAM.html) External call of local procedures (subroutines or methods) Local interfaces and classes, all other declarative statements Event block [`LOAD-OF-PROGRAM`](ABAPLOAD-OF-PROGRAM.html), subroutines, methods No Yes [Type pool](ABENTYPE_POOL_GLOSRY.html) or [type group](ABENTYPE_GROUP_GLOSRY.html) \\ [`TYPE-POOL`](ABAPTYPE-POOL.html) None Statements [`TYPES`](ABAPTYPES.html) and [`CONSTANTS`](ABAPCONSTANTS.html) None No No abenabap.html abenabap\_reference.html abenabap\_program\_layout.html