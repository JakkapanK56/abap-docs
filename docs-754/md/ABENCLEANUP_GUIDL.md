---
title: "Cleanups After Exceptions - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencleanup_guidl.htm"
abapFile: "abencleanup_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Architecture](ABENARCHITECTURE_GUIDL.md) →  [Error Handling](ABENERROR_HANDLING_GUIDL.md) → 

Cleanups After Exceptions

Background

Every TRY control structure can contain a CLEANUP block. If a class-based exception is raised in the TRY block of the same TRY control structure, but is handled in a CATCH block of an external TRY control structure, the CLEANUP block is executed before the context of the exception is deleted. Therefore, when a handler is executed the CLEANUP blocks of all TRY control structures that have been unsuccessfully searched for a handler up until that point are executed from the inside out.

The addition BEFORE UNWIND of the CATCH statement determines whether execution takes place before or after handling. However, the CLEANUP blocks are not executed if RESUME is used during exception handling to restart in the context of the exception.

Rule

Cleanup Before Forwarding

Before forwarding an exception to higher-level call layers, perform the necessary cleanups in the CLEANUP block.

Details

Each exception changes the program flow and can thus pose a significant risk to the consistency of an application. If you decide not to handle an exception, but to [forward](ABENHANDL_PROP_EXCEPT_GUIDL.md "Guideline") it, you must make sure that you leave the current software layer in a consistent state. You can implement the CLEANUP block in this case, to execute cleanups before the exception is forwarded to higher-level software layers.

Bad Example

The following source code shows the forwarding of an exception without first explicitly closing an open resource (in this case a database cursor). The closing of the database cursor is implicitly delegated to any exception handler.

TRY.
  OPEN CURSOR db\_cursor
    FOR SELECT ...
    ...
  CATCH cx\_sy\_sql\_error INTO exc.
    RAISE EXCEPTION TYPE cx\_persistency\_error
      EXPORTING previous = exc.
ENDTRY.

Good Example

The following source code shows the same example as above, but the database cursor is closed in the CLEANUP block.

TRY.
  OPEN CURSOR db\_cursor
    FOR SELECT ...
    ...
  CATCH cx\_sy\_sql\_error INTO exc.
    RAISE EXCEPTION TYPE cx\_persistency\_error
      EXPORTING previous = exc.
  CLEANUP.
    CLOSE CURSOR db\_cursor.
ENDTRY.
