---
title: "ABAPCREATE_DATA_SHORTREF"
description: |
  ABAPCREATE_DATA_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCREATE_DATA_SHORTREF.htm"
abapFile: "ABAPCREATE_DATA_SHORTREF.html"
keywords: ["do", "if", "data", "types", "internal-table", "ABAPCREATE", "DATA", "SHORTREF"]
---

[Reference](ABAPCREATE_DATA.html)

`CREATE DATA dref [ AREA HANDLE handle ]\                   [ TYPE \{\ \{abap_type|(name)                             [LENGTH len]\ [DECIMALS dec]\}\                          |\ \{[LINE OF] type|(name)\}\                          |\ \{REF TO type|(name)\}\                          |\ \{\ \{\{[STANDARD] TABLE\}\                             |\{SORTED TABLE\}\                             |\{HASHED TABLE\}\}\                             OF [REF TO]\ \{type|(name)\}\                             [\ \{WITH [UNIQUE|NON-UNIQUE]\                                  \{KEY \{comp1 comp2 ...\}|(keytab)\}|\{DEFAULT KEY\}\}\                             |\ \{WITH EMPTY KEY\}\ ]\                             [INITIAL SIZE n]\}\                          |\ \{HANDLE handle\}\ \}\ ]\                 |\ [ LIKE \{\ \{[LINE OF] dobj\}\                          |\ \{REF TO dobj\}\                          |\ \{\ \{\{[STANDARD] TABLE\}\                             |\{SORTED TABLE\}\                             |\{HASHED TABLE\}\}\                             OF dobj                             [\ \{WITH [UNIQUE|NON-UNIQUE]\                                  \{KEY \{comp1 comp2 ...\}|(keytab)\}|\{DEFAULT KEY\}\}\                             |\ \{WITH EMPTY KEY\}\ ]\                             [INITIAL SIZE n]\}\ \}\ ].`

Creates an [anonymous data object](ABENANONYMOUS_DATA_OBJECT_GLOSRY.html) and sets the data reference in `dref` to the data object. If no `TYPE` or `LIKE` addition is specified, `dref` has to be completely typed and this type is used for the data object.

-   [`AREA HANDLE handle`](ABAPCREATE_DATA_AREA_HANDLE.html)\\
    Creates a [shared object](ABENSHARED_OBJECT_GLOSRY.html), where a reference to an [area handle](ABENAREA_HANDLE_GLOSRY.html) has to be specified in `handle`.
-   [`TYPE`](ABAPCREATE_DATA.html)\\
    Defines the type by referring to a data type.
-   [`LIKE`](ABAPCREATE_DATA.html)\\
    Defines the type by referring to a data object.
-   [`abap_type|(name) [LENGTH len]\ [DECIMALS dec]`](ABAPCREATE_DATA_BUILT_IN.html)\\
    Specifies a [built-in](ABENBUILTIN_DATA_TYPE_GLOSRY.html)\\ [elementary data type](ABENELEMENTARY_DATA_TYPE_GLOSRY.html) statically or dynamically and defines the length and the number of [decimal places](ABENDECIMAL_PLACE_GLOSRY.html).
-   \\ [`[LINE OF] type|(name)`](ABAPCREATE_DATA_EXISTING.html)\\
    Specifies a defined data type statically or dynamically. Here, `LINE OF` can be used to reference the line type of an internal table.
-   [`REF TO`](ABAPCREATE_DATA_REFERENCE.html)\\
    Creates a reference variable.
-   [`\{[STANDARD] TABLE\}|\{SORTED TABLE\}|\{HASHED TABLE\}`](ABAPTYPES_TABCAT.html)\\
    Creates an internal table, see `DATA`.
-   [`WITH \{[UNIQUE|NON-UNIQUE] KEY\{comp1 comp2 ...\}|(keytab) \}|\{DEFAULT KEY\}`](ABAPCREATE_DATA_ITAB.html)\\
    Defines the primary table key. Here, components can be specified dynamically in an internal table `keytab`.
-   [`WITH EMPTY KEY`](ABAPCREATE_DATA_ITAB.html)\\
    Defines an empty primary table key.
-   [`INITIAL SIZE n`](ABAPCREATE_DATA_ITAB.html)\\
    Defines the initial memory usage, see `DATA`.
-   [`HANDLE handle`](ABAPCREATE_DATA_HANDLE.html)\\
    Specifies the data type using a `handle` reference to an [RTTS](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html)\\ [type description object](ABENTYPE_OBJECT_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_shortref.html