---
title: "ABAPCHECK_SELECT-OPTIONS"
description: |
  ABAPCHECK_SELECT-OPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCHECK_SELECT-OPTIONS.htm"
abapFile: "ABAPCHECK_SELECT-OPTIONS.html"
keywords: ["select", "loop", "do", "if", "method", "data", "ABAPCHECK", "SELECT", "OPTIONS"]
---

[Short Reference](ABAPCHECK_SHORTREF.html)

`CHECK SELECT-OPTIONS.`

This form of the statement [`CHECK`](ABAPCHECK_PROCESSING_BLOCKS.html) for exiting processing blocks is only intended for use in executable programs that are linked with a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html), and then only in the event blocks for the [reporting events](ABENREPORTING_EVENT_GLOSRY.html)\\ [`GET`](ABAPGET-.html). It must not be used in methods.

The statement checks whether the content of the [interface work area](ABENINTERFACE_WORK_AREA_GLOSRY.html) that was filled for the current `GET` event by the logical database meets the conditions in all [selection tables](ABENSELECTION_TABLE_GLOSRY.html) that are linked with the current node of the logical database. The name of the node is taken statically from the next highest `GET` statement in the program. The following restrictions apply:

If the conditions in one of the selection tables are not met, and the statement is not listed within a loop, the `GET` event block is exited and the runtime framework behaves as with the other variant of [`CHECK`](ABAPCHECK_PROCESSING_BLOCKS.html) used for exiting processing blocks. If the statement is listed within a loop, then only the current loop pass is exited.

Exiting a `GET` event block if the content of the components `seatsmax` and `seatsocc` of the interface work area `sflight` do not meet the conditions in the selection tables `s_max` or `s_occ`. Before the program can be processed, it must be linked with the logical database `F1S`.

-   The statement `CHECK SELECT-OPTIONS` is only effective when the type of the current node of the logical database is a DDIC database table.
-   If the node is intended for dynamic selections, the statement evaluates only those selection criteria that were declared using the `NO DATABASE SELECTION` addition of the [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS_LDB.html) statement.

-   For performance reasons, the `CHECK` statement should only be used to check data selections during `GET` events if the selections provided by the logical database are not sufficient.
-   The statement `CHECK SELECT-OPTIONS` should not be used within a loop, since it otherwise only exits the current loop pass.
-   If logical databases are no longer used, it is no longer necessary to use this variant of the statement `CHECK`.

-   *Cause:* Incorrect `OPTION` in the `SELECT-OPTIONS` table or the `RANGES` table
    *Runtime error:*\\ `CHECK_SELOPT_ILLEGAL_OPTION`
-   *Cause:* Incorrect `SIGN` in the `SELECT-OPTIONS` table or the `RANGES` table
    *Runtime error:*\\ `CHECK_SELOPT_ILLEGAL_SIGN`
-   *Cause:* Access to a nonexistent memory area
    *Runtime error:*\\ `CHECK_ADDR_NOT_ALLOC`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nNODES sflight. \\nSELECT-OPTIONS: s\_max FOR sflight-seatsmax, \\n s\_occ FOR sflight-seatsocc. \\n\\ \\nGET sflight. \\n out->write( |\\{ sflight-carrid \\} \\{ \\n sflight-connid \\}| ). \\n CHECK SELECT-OPTIONS. \\n out->write( |\\{ sflight-seatsmax \\} \\{ \\n sflight-seatsocc \\}| ). \\n\\ \\nEND-OF-SELECTION. \\n out->display( ). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_abap\_statements.html abenldb\_reporting\_statements.html