---
title: "ABENNONCAT_EXCEPTIONS"
description: |
  ABENNONCAT_EXCEPTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNONCAT_EXCEPTIONS.htm"
abapFile: "ABENNONCAT_EXCEPTIONS.html"
keywords: ["if", "catch", "class", "data", "ABENNONCAT", "EXCEPTIONS"]
---

Runtime errors indicate situations in which the execution of an ABAP program cannot be continued but must be terminated. Runtime errors can occur in one of the following situations when ABAP programs are executed:

Each runtime error is identified by a name and assigned to a specific error situation and leads to a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html). Following a program termination caused by a runtime error, the system generates a [short dump](ABENSHORT_DUMP_GLOSRY.html) which contains the name of the runtime error, the associated exception class, content of data objects, active calls, control structures, and so on, and allows the user to branch directly to the ABAP Debugger. Short dumps are kept in the system for 14 days by default and managed using the [ABAP dump analysis](ABENABAP_DUMP_ANALSYIS_GLOSRY.html)

Raising of the runtime error `COMPUTE_INT_ZERODIVIDE` when the exception `CX_SY_ZERODIVIDE` is not caught.

-   Non-handled exceptions:

-   A catchable exception is not handled.
-   A uncatchable exception is raised.

-   Program-driven raise:

-   The statement [`RAISE SHORTDUMP`](ABAPRAISE_SHORTDUMP.html) or the addition [`THROW SHORTDUMP`](ABENCONDITIONAL_EXPRESSION_RESULT.html) is used.
-   An [assertion](ABENASSERTION_GLOSRY.html) fails.
-   An [exit message](ABENEXIT_MESSAGE_GLOSRY.html) or [message](ABENMESSAGE_GLOSRY.html) of type *X* is sent.

cl\_demo\_output=>display( 1 / 0 ). abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html