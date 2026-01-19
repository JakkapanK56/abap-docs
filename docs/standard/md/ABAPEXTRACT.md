---
title: "ABAPEXTRACT"
description: |
  ABAPEXTRACT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXTRACT.htm"
abapFile: "ABAPEXTRACT.html"
keywords: ["select", "insert", "delete", "loop", "if", "catch", "method", "class", "data", "types", "internal-table", "ABAPEXTRACT"]
---

[Short Reference](ABAPEXTRACT_SHORTREF.html)

`EXTRACT [ header | field_group ].`

This statement appends the current content of the fields that were previously included with the statement [`INSERT`](ABAPINSERT_FG.html) in the field group `header` or `field_group` to the [extract dataset](ABENEXTRACT_DATASET_GLOSRY.html) of the program. If no field group is specified after `EXTRACT`, the field group `header` is added implicitly.

The extract dataset is created the first time the `EXTRACT` statement of a program is executed and the first row is added. Once an `EXTRACT` statement is executed, no other fields can be included in the specified field group `field_group` using `INSERT`. Otherwise, an uncatchable exception is raised by the next `EXTRACT` statement for the same field group.

Fields of the types [`s`](ABENBUILTIN_TYPES_NUMERIC.html), [`i`](ABENBUILTIN_TYPES_NUMERIC.html), and [`int8`](ABENBUILTIN_TYPES_NUMERIC.html) with the minimum value -32768, -2147483648, or -9223372036854775808 are set to the value 0 when extracted to the field group `header`.

This example continues the example under [`INSERT`](ABAPINSERT_FG.html). The fields of the field groups `flight_info` and `flight_date` are filled in a nested `LOOP` and appended to the extract dataset.

-   The field group `header` is the initial part and sort key of every field group, which means that no more fields can be included in `header` after `EXTRACT` is executed for the first time.
-   The rows of an extract dataset cannot be deleted explicitly and are persisted for as long as the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of the program.
-   In global classes, no field groups can be defined or processed. In methods of local classes of programs other than class pools, the statement `EXTRACT` is possible for globally defined field groups.
-   Extracts are obsolete. [Internal tables](ABENITAB.html) should be used instead.

-   *Cause:*\\ `EXTRACT` after `SORT` or `LOOP`.
    *Runtime error:*\\ `EXTRACT_AFTER_SORT/LOOP`
-   *Cause:* Not enough roll memory to create the extracts.
    *Runtime error:*\\ `EXTRACT_BUFFER_NO_ROLL`\\
    *Runtime error:*\\ `EXTRACT_NO_ROLL_OLD_KEY`
-   *Cause:* Too much length of a single field is occupied.
    *Runtime error:*\\ `EXTRACT_FIELD_TOO_LARGE`
-   *Cause:* Problems when creating the extract dataset master file.
    *Runtime error:*\\ `EXTRACT_FILE_PTR_NOT_EMPTY`\\
    *Runtime error:*\\ `EXTRACT_INIT_DIR_EXTRACT`\\
    *Runtime error:*\\ `EXTRACT_INIT_FILEMASK_INVALID`\\
    *Runtime error:*\\ `EXTRACT_INIT_FILEMASK_TOO_LARG`\\
    *Runtime error:*\\ `EXTRACT_INIT_FN_EXTRACT`
-   *Cause:* The field group `HEADER` was modified after `EXTRACT` was used to extract records.
    *Runtime error:*\\ `EXTRACT_HEADER_NOT_UNIQUE`
-   *Cause:* Local data is not allowed in field groups.
    *Runtime error:*\\ `EXTRACT_INSERT_LOCAL_DATA`
-   *Cause:* Error when opening the external dataset file.
    *Runtime error:*\\ `EXTRACT_OPEN_EXTRACTFILE_OPEN`
-   *Cause:* Total data length of a record to be extracted (including `HEADER` fields) is too big.
    *Runtime error:*\\ `EXTRACT_TOO_LARGE`

REPORT ... \\n\\ \\nDATA: spfli\_wa TYPE spfli, \\n sflight\_wa TYPE sflight, \\n spfli\_tab LIKE TABLE OF spfli\_wa, \\n sflight\_tab LIKE TABLE OF sflight\_wa. \\n\\ \\nFIELD-GROUPS: header, flight\_info, flight\_date. \\n\\ \\nSTART-OF-SELECTION. \\n INSERT: spfli\_wa-carrid spfli\_wa-connid sflight\_wa-fldate \\n INTO header, \\n spfli\_wa-cityfrom spfli\_wa-cityto \\n INTO flight\_info. \\n\\ \\n SELECT \* \\n FROM spfli \\n INTO TABLE @spfli\_tab. \\n\\ \\n SELECT \* \\n FROM sflight \\n INTO TABLE @sflight\_tab. \\n\\ \\n LOOP AT spfli\_tab INTO spfli\_wa. \\n sflight\_wa-fldate = '00000000'. \\n EXTRACT flight\_info. \\n LOOP AT sflight\_tab INTO sflight\_wa \\n WHERE carrid = spfli\_wa-carrid AND \\n connid = spfli\_wa-connid. \\n EXTRACT flight\_date. \\n ENDLOOP. \\n ENDLOOP. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenabap\_extracts\_extended.html