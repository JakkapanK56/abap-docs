---
title: "ABAPCLEANUP"
description: |
  ABAPCLEANUP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLEANUP.htm"
abapFile: "ABAPCLEANUP.html"
keywords: ["update", "delete", "if", "try", "catch", "method", "class", "data", "types", "ABAPCLEANUP"]
---

[Short Reference](ABAPTRY_SHORTREF.html)

`CLEANUP [INTO oref].`

[`... INTO oref`](#ABAP_ONE_ADD@1@)

Introduces a statement block of a [`TRY`](ABAPTRY.html) control structure where cleanups can be performed.

A `CLEANUP` block is executed exactly when a class-based exception in the `TRY` block of the same `TRY` control structure is raised but is handled in a `CATCH` block of an external `TRY` control structure. A `CLEANUP` block is executed immediately before the context of the exception is deleted:

The `CLEANUP` block must be executed completely and must be exited using `ENDTRY` so that the exception can be propagated to its handler. If an attempt is made to exit the context of a `CLEANUP` block prematurely, a runtime error occurs. No [statements](ABENLEAVE_PROGRAM_UNITS.html) can be specified in a `CLEANUP` block where it is statically known that returning to the `CLEANUP` block is not possible. Program calls using [`SUBMIT`](ABAPSUBMIT.html) and [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html) should also be avoided here.

In an inner `TRY` block, either the exception `cx_demo0` or `cx_demo1` can be raised. If `cx_demo1` is raised, the `CLEANUP` block of the inner `TRY` block is executed before handling in the outer `TRY` block.

If the addition `INTO` is specified, a reference to the exception object is stored in `oref`. The following can be specified for `oref`:

`oref` can be used to access the exception object.

The `CLEANUP` block of the inner `TRY` block is executed before handling of the exception `cx_demo1` in the outer `TRY` block. The reference variable `exc` points to the exception object of the class `cx_demo1`.

-   If the addition `BEFORE UNWIND` is specified for the handling [`CATCH`](ABAPCATCH_TRY.html) block, the context is deleted when the `CATCH` block is exited, and the `CLEANUP` block is executed accordingly after handling.
-   If the addition `BEFORE UNWIND` is not specified, the context is deleted before the `CATCH` block is executed and the `CLEANUP` block is executed accordingly before it is processed.
-   If [`RESUME`](ABAPRESUME.html) is used to resume processing after a [resumable exception](ABENRESUMABLE_EXCEPTION_GLOSRY.html), the context is not deleted and therefore no `CLEANUP` block is executed.

-   The context of the `TRY` block can be cleaned up in a `CLEANUP` block. For example, objects can be updated to a consistent state or external resources released to which an external handler would no longer have access.
-   Since a `CLEANUP` block must always be executed completely, all the exceptions raised there must also be handled there.

-   [Exceptions, `TRY`](ABENTRY_ABEXA.html)
-   [Exceptions, `CATCH`](ABENCATCH_EXCEPTION_ABEXA.html)

-   An existing object reference variable of the type `CX_ROOT`
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where an object reference variable of the type `CX_ROOT` is declared.

-   Within the `CLEANUP` block, the current exception should not be raised again using `RAISE EXCEPTION oref`, since this would modify the attributes of the exception object.
-   Within a `CLEANUP` block, the attribute `IS_RESUMABLE` of the exception object is undefined.

TYPES: \\n BEGIN OF ENUM exception, \\n cx\_demo0, \\n cx\_demo1, \\n END OF ENUM exception. \\n\\ \\nCLASS cx\_demo0 DEFINITION INHERITING FROM cx\_no\_check. \\nENDCLASS. \\nCLASS cx\_demo1 DEFINITION INHERITING FROM cx\_no\_check. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n DATA(exception) = cx\_demo1. \\n cl\_demo\_input=>request( CHANGING field = exception ). \\n\\ \\n DATA exc TYPE REF TO cx\_no\_check. \\n exc = COND #( WHEN exception = cx\_demo0 THEN NEW cx\_demo0( ) \\n ELSE NEW cx\_demo1( ) ). \\n\\ \\n TRY. \\n TRY. \\n RAISE EXCEPTION exc. \\n CATCH cx\_demo0. \\n out->write( 'Catching cx\_demo0' ). \\n CLEANUP. \\n out->write( 'Cleanup' ). \\n ENDTRY. \\n CATCH cx\_demo1. \\n out->write( 'Catching cx\_demo1' ). \\n ENDTRY. \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. CLASS cx\_demo0 DEFINITION INHERITING FROM cx\_static\_check. \\nENDCLASS. \\nCLASS cx\_demo1 DEFINITION INHERITING FROM cx\_static\_check. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n TRY. \\n TRY. \\n RAISE EXCEPTION TYPE cx\_demo1. \\n CATCH cx\_demo0. \\n ... \\n CLEANUP INTO DATA(exc). \\n out->write( \\n cl\_abap\_classdescr=>get\_class\_name( p\_object = exc ) ). \\n ENDTRY. \\n CATCH cx\_demo1. \\n ... \\n ENDTRY. \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abenexceptions.html abaptry.html