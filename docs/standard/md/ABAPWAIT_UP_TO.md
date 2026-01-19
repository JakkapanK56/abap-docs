---
title: "ABAPWAIT_UP_TO"
description: |
  ABAPWAIT_UP_TO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWAIT_UP_TO.htm"
abapFile: "ABAPWAIT_UP_TO.html"
keywords: ["update", "do", "if", "data", "ABAPWAIT"]
---

[Short Reference](ABAPWAIT_SHORTREF.html)

`WAIT UP TO sec SECONDS.`

This statement interrupts the execution of the program by the number of seconds specified in `sec`. `sec` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) of the operand type `f` to which positive numbers can be passed, including 0. The unit of the number specified in `sec` is seconds and the time resolution is one millisecond. After the specified time has passed, the program execution continues with the statement following `WAIT`. When used, this statement always changes the [work process](ABENWORK_PROCESS_GLOSRY.html).

This statement always sets `sy-subrc` to 0.

The output of the following example should correspond to approximately one million microseconds.

-   Each time this variant of the statement `WAIT` is used, a [database commit](ABENDATABASE_COMMIT_GLOSRY.html) is triggered (except during [updates](ABENUPDATE_GLOSRY.html)). For this reason, `WAIT` must not be used between [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements that open or close a [database cursor](ABENDATABASE_CURSOR_GLOSRY.html).
-   The variants [`WAIT FOR ASYNCHRONOUS TASKS`](ABAPWAIT_ARFC.html), [`WAIT FOR MESSAGING CHANNELS`](ABAPWAIT_AMC.html), and [`WAIT FOR PUSH CHANNELS`](ABAPWAIT_APC.html) of this statement are useful only in combination with callback routines in [aRFC](ABENARFC_GLOSRY.html), [AMC](ABENAMC_GLOSRY.html), or [APC](ABENAPC_GLOSRY.html). The variant shown here does not wait for callback routines.

-   *Cause:* Negative time specification for `sec`.
    *Runtime error:*\\ `WAIT_ILLEGAL_TIME_LIMIT`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(timer) = cl\_abap\_runtime=>create\_hr\_timer( ). \\n\\ \\nFINAL(t1) = timer->get\_runtime( ). \\n\\ \\nWAIT UP TO 1 SECONDS. \\n\\ \\nFINAL(t2) = timer->get\_runtime( ). \\n\\ \\nout->write( |\\{ t2 - t1 STYLE = SCIENTIFIC \\}| ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenwait.html