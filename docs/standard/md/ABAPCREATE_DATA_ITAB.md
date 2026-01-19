---
title: "ABAPCREATE_DATA_ITAB"
description: |
  ABAPCREATE_DATA_ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCREATE_DATA_ITAB.htm"
abapFile: "ABAPCREATE_DATA_ITAB.html"
keywords: ["select", "do", "if", "data", "types", "internal-table", "ABAPCREATE", "DATA", "ITAB"]
---

[Short Reference](ABAPCREATE_DATA_SHORTREF.html)

`CREATE DATA dref```\ [[`area_handle`](ABAPCREATE_DATA_AREA_HANDLE.html)]``\\ 
                 `\{\ \{TYPE [STANDARD]|SORTED|HASHED TABLE OF [REF TO]\ \{type|(name)\}\}`\\ 
                 `|\ \{LIKE [STANDARD]|SORTED|HASHED TABLE OF dobj\}\ \}`\\ 
                 ``[ WITH \{\ \{[UNIQUE|NON-UNIQUE]\                             `\{KEY \{comp1 comp2 ...\}|(keytab)\}|`\{DEFAULT KEY\}\}\}``\\ 
                        `|\ \{EMPTY KEY\}  ]`\\ 
                 `[INITIAL SIZE n].`

The statement `CREATE DATA` uses the addition `tabkind OF` to create an internal table. The meaning of the additions is the same as when declaring internal tables using the statement [`DATA`](ABAPDATA_ITAB.html), but with special rules for [`CREATE DATA`](ABAPCREATE_DATA_EXISTING.html) if `dobj` is specified after `LIKE`. The explicit definition of the primary table key is only optional if a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) is created.

Whereas for `DATA` all specifications must be static, the following dynamic specifications are possible for `CREATE DATA`:

Creation and use of an anonymous hashed table.

[Creating Tabular Data Objects](ABENCREATE_TABULAR_DATA_ABEXA.html)

-   The line type after `TYPE` or the static type of a line flagged as a reference variable after `TYPE REF TO` can be specified as the content of a character-like data object called `name`, whereby the same rules apply as in the other variants of `CREATE DATA`.
-   For the definition of the primary table key a parenthesized internal table `keytab` can be specified instead of static components `comp1 comp2 ...`. The table `keytab` must have a character-like data type and, when the statement is executed, it must contain the name of a valid component in each line or the identifier `table_line` for the primary table key in a single line.
-   A numeric data object can be specified for `n` after `INITIAL SIZE`.

-   The following restrictions apply to the definition of the table key, unlike to `DATA`:

-   No [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html) can be defined in the statement `CREATE DATA`.
-   The name [`primary_key`](ABAPDATA_PRIMARY_KEY.html) and the addition [`COMPONENTS`](ABAPDATA_PRIMARY_KEY.html) cannot be specified explicitly in the definition of the primary key.

-   [Runtime type creation](ABENRUN_TIME_TYPE_CREATION_GLOSRY.html) should be used instead to create dynamic table types with secondary keys. The same applies to the dynamic creation of an [empty table key](ABENITAB_EMPTY_KEY.html), since the internal table `keytab` can only be used to define non-empty keys.
-   `CREATE DATA` cannot be used to create internal tables with [header lines](ABENHEADER_LINE_GLOSRY.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA dref TYPE REF TO data. \\n\\ \\nCREATE DATA dref TYPE HASHED TABLE OF scarr \\n WITH UNIQUE KEY carrid. \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE @dref->\*. \\n\\ \\nout->write( dref->\* ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abencreate\_objects.html abapcreate\_data.html