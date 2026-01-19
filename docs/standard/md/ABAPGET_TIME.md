---
title: "ABAPGET_TIME"
description: |
  ABAPGET_TIME - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_TIME.htm"
abapFile: "ABAPGET_TIME.html"
keywords: ["update", "do", "if", "data", "ABAPGET", "TIME"]
---

[Short Reference](ABAPGET_TIME_SHORTREF.html)

`GET TIME [FIELD tim].`

[`... FIELD tim`](#ABAP_ONE_ADD@1@)

Without the addition `FIELD`, the [system fields for date and time](ABENTIME_SYSTEM_FIELDS.html), `sy-datlo`, `sy-datum`, `sy-timlo`, and `sy-uzeit`, are set to the current value. The content of the system fields `sy-dayst`, `sy-fdayw`, `sy-tzone`, and `sy-zonlo` is not updated.

Besides with `GET TIME`, the system fields are updated after a program is started, a [screen layout](ABENSCREEN_GLOSRY.html) is sent, and the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) is changed.

Approximate runtime measurement. The statement [`GET RUN TIME`](ABAPGET_RUN_TIME.html) should be used instead.

The addition `FIELD` is used to pass the current [system time](ABENSYSTEM_TIME_GLOSRY.html) in the format *hhmmss* to the variable `tim` instead of `sy-uzeit` and none of the system fields are updated. The return value of the statement has the data type `t`. The following can be specified for `tim`:

The example has the same function as the previous example.

-   An existing variable of the data type `t` or a variable to which the type `t` can be converted.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of type `t` is declared.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nGET TIME. \\nFINAL(t1) = sy-timlo. \\n\\ \\nDO 5000000 TIMES. \\nENDDO. \\n\\ \\nGET TIME. \\nFINAL(t2) = sy-timlo. \\n\\ \\nout->write( t2 - t1 ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nGET TIME. \\n\\ \\nDO 5000000 TIMES. \\nENDDO. \\n\\ \\nGET TIME FIELD FINAL(time). \\n\\ \\nout->write( time - sy-uzeit ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abentime\_system\_fields.html