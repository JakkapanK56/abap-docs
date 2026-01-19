---
title: "ABAPSTOP"
description: |
  ABAPSTOP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSTOP.htm"
abapFile: "ABAPSTOP.html"
keywords: ["select", "if", "catch", "method", "data", "ABAPSTOP"]
---

[Short Reference](ABAPSTOP_SHORTREF.html)

`STOP.`

The statement `STOP` is only to be used in [executable programs](ABENEXECUTABLE_PROGRAM_GLOSRY.html) and in the following event blocks:

These event blocks are exited immediately using `STOP` and the runtime framework raises the event `END-OF-SELECTION`.

The statement `STOP` is forbidden in methods and raises a uncatchable exception when processing [dynpros](ABENDYNPRO_GLOSRY.html) called using [`CALL SCREEN`](ABAPCALL_SCREEN.html), during a [`LOAD-OF-PROGRAM`](ABAPLOAD-OF-PROGRAM.html) event, and in programs not called using [`SUBMIT`](ABAPSUBMIT.html).

Termination of the event block `GET sbook` of the [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html)\\ `F1S`, after `max` postings have been issued, and branching to `END-OF-SELECTION`.

-   [`AT SELECTION-SCREEN`](ABAPAT_SELECTION-SCREEN.html) (without additions)
-   [`START-OF-SELECTION`](ABAPSTART-OF-SELECTION.html)
-   [`GET`](ABAPGET-.html)

-   *Cause:* The statement `STOP` was executed outside the process flow for an executable program.
    *Runtime error:*\\ `STOP_NO_REPORT`
-   *Cause:* The statement `STOP` was executed during the process flow for a dynpro and therefore outside the allowed events.
    *Runtime error:*\\ `STOP_WITHIN_CALLED_DYNPRO`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nNODES: sflight, \\n sbook. \\n\\ \\nDATA: bookings TYPE i, \\n max TYPE i VALUE 100. \\n\\ \\nGET sflight. \\n out->next\_section( |\\{ sflight-carrid \\} | && \\n |\\{ sflight-connid \\} | && \\n |\\{ sflight-fldate \\}| ). \\n\\ \\nGET sbook. \\n bookings += 1. \\n out->write( |\\{ sbook-bookid \\} | && \\n |\\{ sbook-customid \\}| ). \\n IF bookings = max. \\n STOP. \\n ENDIF. \\n\\ \\nEND-OF-SELECTION. \\n out->line( ). \\n out->write( |First \\{ bookings \\} bookings| ). \\n\\ \\n out->display( ). abenabap.html abenabap\_reference.html abenabap\_execution.html abenleave\_program\_units.html abenleave\_processing\_blocks.html