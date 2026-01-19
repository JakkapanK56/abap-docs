---
title: "ABAPLOAD-OF-PROGRAM"
description: |
  ABAPLOAD-OF-PROGRAM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLOAD-OF-PROGRAM.htm"
abapFile: "ABAPLOAD-OF-PROGRAM.html"
keywords: ["select", "do", "if", "class", "data", "types", "ABAPLOAD", "PROGRAM"]
---

[Short Reference](ABAPLOAD-OF-PROGRAM_SHORTREF.html)

`LOAD-OF-PROGRAM.`

This event keyword defines the [program constructor](ABENPROGRAM_CONSTRUCTOR_GLOSRY.html) of a function pool, executable program, module pool, or subroutine pool. The program constructor is an event block whose event is raised by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) if such a program is loaded into the [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

When a program is called using `SUBMIT` or a transaction code, a new internal session is opened each time a call is made and the event block is executed once for each call. Global data objects of the program can be initialized here. The event block must be fully executed, otherwise a runtime error occurs. This means that no [statements](ABENLEAVE_PROGRAM_UNITS.html) can be executed that exit the event block without returning to it.

The first time an external [procedure](ABENPROCEDURE_GLOSRY.html) or a [subscreen](ABENSUBSCREEN_GLOSRY.html) is called, the [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html) of the called procedure is loaded into the internal session of the caller and the event `LOAD-OF-PROGRAM` is raised. The event block is executed before the called procedure. Each time a procedure of the same compilation unit is called again by a caller of the same internal session, the event `LOAD-OF-PROGRAM` is no longer raised.

The include program `LABAP_DOCUE00` implements the `LOAD-OF-PROGRAM` event block of a function pool. It sets a global variable and triggers an action that is relevant for the complete function pool.

-   The event `LOAD-OF-PROGRAM` should not be used to call sophisticated processes, where the program flow cannot be controlled by the caller. This includes especially those that involve user interactions, because then it cannot be guaranteed that the event block is fully executed.
-   If a program is only loaded because declarations are required of it, for example, when using [absolute type names](ABENABSOLUTE_TYPENAME_GLOSRY.html), the `LOAD-OF-PROGRAM` event is not raised. The program constructor is only executed if an executable unit of the program is called afterwards.
-   [Class pools](ABENCLASS_POOL_GLOSRY.html) do not have a program constructor, since the [static constructor](ABENSTATIC_CONSTRUCTOR_GLOSRY.html) of the global class defined in the class pool can be used instead.
-   The event `LOAD-OF-PROGRAM` should mainly be used to initialize global data when calling external procedures or [transactions](ABENTRANSACTION_GLOSRY.html).
-   Any statements that exit the event block `LOAD-OF-PROGRAM` like [`RETURN`](ABAPRETURN.html) raise the runtime error `SYSTEM_LOAD_OF_PROGRAM_FAILED` and lead to errors from the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html). Although the statement [`LEAVE PROGRAM`](ABAPLEAVE_PROGRAM.html) does not cause a runtime error, it should still not be used.
-   It is discouraged to send any [messages](ABENMESSAGE_GLOSRY.html) in the event block `LOAD-OF-PROGRAM` that require user interaction and block the program flow, because this is not appropriate in the moment of loading a program. Since the [behavior of messages](ABENABAP_MESSAGES_TYPES.html) depends on the context, where a program is loaded, you should not use them at all. A message of type *E* leads to runtime error `SYSTEM_LOAD_OF_PROGRAM_FAILED` anyway.
-   For executable programs that are called using `SUBMIT`, it is recommended that the event [`INITIALIZATION`](ABAPINITIALIZATION.html) is used, since the [start values](ABENSTART_VALUE_GLOSRY.html) for parameter and selection criteria are set after `LOAD-OF-PROGRAM` (see [program flow after `SUBMIT`](ABENREPORTING_PROCESS.html)) and because its event block must not be fully executed.

abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html abenevent\_blocks.html abenprogram\_constructor.html