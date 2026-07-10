---
title: "Exiting Procedures - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexit_procedure_guidl.htm"
abapFile: "abenexit_procedure_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [Modularization units](ABENMODULARIZATION_UNIT_GUIDL.md) → 

Exiting Procedures

Background

You can exit procedures in the usual way using the END... statement or by using one of the following statements:

-   RETURN

-   EXIT

-   CHECK log\_exp

These statements end a procedure properly, that is, the system passes output parameters for which passing by value is specified and returns values to the assigned actual parameters. In addition, you can terminate the processing of a procedure as follows, without supplying the actual parameters with values:

-   Calling another unit (program, dynpro) without returning to the procedure

-   Triggering an exception or sending a dialog message if an [error occurs](ABENERROR_HANDLING_GUIDL.md "Guideline")

Rule

Only use RETURN to exit procedures

Use the statement RETURN to properly exit a procedure (method, see rule [no implementations in function modules and subroutines](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md "Guideline")) early.

Details

The statement RETURN is used to exit procedures and always has this result. The behavior of the EXIT and CHECK statements (conditional exit), in contrast, is context- dependent: Within a loop, only the loop is exited; outside a loop, the surrounding procedure is exited. This ambiguity limits the legibility of source code. Therefore, EXIT and CHECK should only be used to exit loops, and RETURN only to exit procedures. Only RETURN enables you to exit a procedure in a loop context.

Note

As well as the statements RETURN, EXIT, and CHECK specified here, the statements REJECT and STOP can be used to exit special [event blocks](ABENDIAL_MOD_EVENT_BLOCK_GUIDL.md "Guideline"). Conversely, RETURN, EXIT, and CHECK can also exit processing blocks other than procedures. In both cases, you must consider the particular behavior of the ABAP runtime environment regarding the exited processing block. Because other processing blocks are only supposed to contain one method call according to the rules [use ABAP Objects](ABENABAP_OBJ_PROGR_MODEL_GUIDL.md "Guideline") and [no implementations in dialog modules and event blocks](ABENDIAL_MOD_EVENT_BLOCK_GUIDL.md "Guideline"), these cases should no longer occur in new programs.

Exception

An exception to the rule to only use RETURN to exit procedures are CHECK statements that are located at the beginning of a procedure and that check the prerequisites for the execution of the procedure there. Using the CHECK statement in such a way does not impair the legibility and is thus allowed. However, this exception does not apply to other positions within a procedure and outside loops.

Bad Example

The following source code shows how a method is left early with a CHECK statement, whose meaning cannot be identified by simply looking at it. You have to know that CHECK exits the procedure if the following logical expression is wrong, which is why a double negation is necessary here.

METHOD some\_method.
   ...
   CHECK is\_finished = abap\_false.
   ...
ENDMETHOD.

Good Example

The following source code corrects and simplifies the above example by implementing a conditional exit with an IF control structure that is easy to read.

METHOD some\_method.
   ...
   IF is\_finished = abap\_true.
      RETURN.
   ENDIF.
   ...
ENDMETHOD.
