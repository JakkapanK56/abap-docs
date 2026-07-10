---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEXIT_PROCEDURE_GUIDL.html"
abapFile: "ABENEXIT_PROCEDURE_GUIDL.html"
type: "abap-reference"
---

## Background

You can exit procedures in the usual way using the `END...` statement or by using one of the following statements:

-   `RETURN`
-   `EXIT`
-   `CHECK log_exp`

These statements end a procedure properly, that is, the system passes output parameters for which passing by value is specified and returns values to the assigned actual parameters. In addition, you can terminate the processing of a procedure as follows, without supplying the actual parameters with values:

-   Calling another unit (program, dynpro) without returning to the procedure
-   Triggering an exception or sending a dialog message if an [error occurs](ABENERROR_HANDLING_GDL.md)

## Rule

**Only use `RETURN` to exit procedures**

Use the statement `RETURN` to properly exit a procedure (method, see rule [no implementations in function modules and subroutines](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md)) early.

## Details

The statement `RETURN` is used to exit procedures and always has this effect. The behavior of the `EXIT` and `CHECK` statements (conditional exit), in contrast, is context- dependent: Within a loop, only the loop is exited; outside a loop, the surrounding procedure is exited. This ambiguity limits the legibility of source code. Therefore, `EXIT` and `CHECK` should only be used to exit loops, and `RETURN` only to exit procedures. Only `RETURN` enables you to exit a procedure in a loop context.

The statements for [exiting programs](ABENABAP_LEAVE_PROGRAM.md) are not recommended inside procedures. They are not allowed in contexts like [unit tests](ABENUNIT_TEST_GLOSRY.md) or during [update](ABENDB_COMMIT_DURING_UPDATE.md) and lead to exceptions if a procedure is called from such a context.

## Hint

As well as the statements `RETURN`, `EXIT`, and `CHECK` specified here, the statements `REJECT` and `STOP` can be used to exit special [event blocks](ABENDIAL_MOD_EVENT_BLOCK_GUIDL.md). Conversely, `RETURN`, `EXIT`, and `CHECK` can also exit processing blocks other than procedures. In both cases, you must consider the particular behavior of the ABAP runtime framework regarding the exited processing block. Because other processing blocks are only supposed to contain one method call according to the rules [use ABAP Objects](ABENABAP_OBJ_PROGR_MODEL_GUIDL.md) and [no implementations in dialog modules and event blocks](ABENDIAL_MOD_EVENT_BLOCK_GUIDL.md), these cases should no longer occur in new programs.

## Use

An exception to the rule to only use `RETURN` to exit procedures are `CHECK` statements that are located at the beginning of a procedure and that check the prerequisites for the execution of the procedure there. Using the `CHECK` statement in such a way does not impair the legibility and is thus allowed. However, this exception does not apply to other positions within a procedure and outside loops.

## Bad Example

The following source code shows how a method is left early with a `CHECK` statement, whose meaning cannot be identified by simply looking at it. You have to know that `CHECK` exits the procedure if the following logical expression is false, which is why a double negation is necessary here.

```
METHOD some_method. 
   ... 
   CHECK is_finished = abap_false. 
   ... 
ENDMETHOD.
```

## Good Example

The following source code corrects and simplifies the above example by implementing a conditional exit with an `IF` control structure that is easy to read.

```
METHOD some_method. 
   ... 
   IF is_finished = abap_true. 
      RETURN. 
   ENDIF. 
   ... 
ENDMETHOD.
```
