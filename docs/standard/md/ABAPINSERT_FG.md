---
title: "ABAPINSERT_FG"
description: |
  ABAPINSERT_FG - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINSERT_FG.htm"
abapFile: "ABAPINSERT_FG.html"
keywords: ["select", "insert", "do", "if", "catch", "method", "class", "data", "internal-table", "field-symbol", "ABAPINSERT"]
---

[Short Reference](ABAPINSERT_FIELD-GROUP_SHORTREF.html)

`INSERT dobj1 dobj2 ... INTO \{ header | field_group \}.`

This statement is used to build a structure of a field group of the [extract dataset](ABENEXTRACT_DATASET_GLOSRY.html) of the program, where the field group is defined using [`FIELD-GROUPS`](ABAPFIELD-GROUPS.html). A list of global [flat](ABENFLAT_GLOSRY.html) data objects `dobj` can be specified after `INSERT`. Specifying local data objects raises an exception. The list defines the components of the field group `header` or `field_group`. Any name can be specified directly for `field_group`, whereas `header` is a predefined name of a special field group whose components are automatically a part and a key of all other field groups. The components of a field group are pointers to data objects whose content is appended to the extract dataset as a line when executing the statement [`EXTRACT`](ABAPEXTRACT.html).

The statement `INSERT` can be used in any [processing block](ABENPROCESSING_BLOCK_GLOSRY.html) of a program and is executed at the appropriate time during the program execution. A field group can have different `INSERT` statements. Additional components can be added to a field group until the first corresponding line with `EXTRACT` is appended to the extract dataset. More specifically, components can only be added to the field group `header` until a field group of the program is extracted because it is a part of all field groups. An `INSERT` statement for an already extracted field group raises an uncatchable exception.

Field symbols can be specified for `dobj`, but not dereferenced data references. A field symbol is ignored if no data object is assigned to it. Specifying a data reference raises an uncatchable exception.

In this example, three field groups are declared in the global declaration part of an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) and its components are specified in the event block `START-OF-SELECTION`. The field group `flight_info` contains five components: those of the field group `header` and its own. The field group `flight_date` contains only the components of the field group `header`.

-   A field group `field_group` to which no fields are explicitly added still contains the field of the special field group `header`.
-   In global classes, no field groups can be defined or processed. In methods of local classes of programs other than class pools, the statement `INSERT` is possible for globally defined field groups.
-   Extracts are obsolete. [Internal tables](ABENITAB.html) should be used instead.

-   *Cause:* Local data objects are to be inserted into a field group.
    *Runtime error:*\\ `EXTRACT_INSERT_LOCAL_DATA`
-   *Cause:* Field group contains `INSERT` after sets of this set type have already been extracted using `EXTRACT`.
    *Runtime error:*\\ `INSERT_INTO_LOCKED_FIELD_GROUP`

REPORT ... \\n\\ \\nDATA: spfli\_wa TYPE spfli, \\n sflight\_wa TYPE sflight. \\n\\ \\nFIELD-GROUPS: header, flight\_info, flight\_date. \\n\\ \\nSTART-OF-SELECTION. \\n\\ \\n INSERT: spfli\_wa-carrid spfli\_wa-connid sflight\_wa-fldate \\n INTO header, \\n spfli\_wa-cityfrom spfli\_wa-cityto \\n INTO flight\_info. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenabap\_extracts\_extended.html