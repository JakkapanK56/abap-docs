---
title: "ABAPDATA_SHORTREF"
description: |
  ABAPDATA_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDATA_SHORTREF.htm"
abapFile: "ABAPDATA_SHORTREF.html"
keywords: ["do", "if", "class", "data", "types", "internal-table", "ABAPDATA", "SHORTREF"]
---

[Reference](ABAPDATA.html)

`DATA var[(len)]\ [TYPE \{\ \{abap_type [LENGTH len]\                                     [DECIMALS dec]\}\                        |\ \{[LINE OF] type [BOXED]\}\                        |\ \{REF TO type\}\                        |\ \{\ \{\{[STANDARD] TABLE\}\                            |\{SORTED TABLE\}\                            |\{HASHED TABLE\}\}\                            OF [REF TO] type                            [\ \{WITH [UNIQUE|NON-UNIQUE]\                                 \{\ \{KEY [primary_key [ALIAS alias_name]\                                      COMPONENTS] comp1 comp2 ...\}\                                 |\ \{DEFAULT KEY\}\ \}\}\                            |\ \{WITH EMPTY KEY\}\ ]\                            \{[WITH \{UNIQUE HASHED\}|\{\{UNIQUE|NON-UNIQUE\} SORTED\}\                               KEY key_name1 [ALIAS alias_name1] COMPONENTS comp1 comp2 ...]\                             [WITH \{UNIQUE HASHED\}|\{\{UNIQUE|NON-UNIQUE\} SORTED\}\                               KEY key_name2 [ALIAS alias_name2] COMPONENTS comp1 comp2 ...]\                             ...\}\                            [INITIAL SIZE n]\                            [WITH HEADER LINE]\}\                          |\ \{RANGE OF type [INITIAL SIZE n]\                                           [WITH HEADER LINE]\}\                          |\ \{dbtab|view                              \{ READER|LOCATOR|\{LOB HANDLE\}\ \}\                            |\ \{ WRITER|LOCATOR \} FOR                              \{ COLUMNS blob1 blob2 ...  clob1 clob2 ... \}\                            |\ \{ ALL [OTHER]\ [BLOB|CLOB] COLUMNS \}\                                [...]\}\}\ ]\                |\ [LIKE \{\ \{[LINE OF] dobj\}\                        |\ \{REF TO dobj\}\                        |\ \{\ \{\{[STANDARD] TABLE\}\                            |\{SORTED TABLE\}\                            |\{HASHED TABLE\}\}\                            OF [REF TO] dobj                            [\ \{WITH [UNIQUE|NON-UNIQUE]\                                 \{\ \{KEY [primary_key [ALIAS alias_name]\                                      COMPONENTS] comp1 comp2 ...\}\                                 |\ \{DEFAULT KEY\}\ \}\}\                            |\ \{WITH EMPTY KEY\}\ ]\                            \{[WITH \{UNIQUE HASHED\}|\{\{UNIQUE|NON-UNIQUE\} SORTED\}\                               KEY key_name1 [ALIAS alias_name1] COMPONENTS comp1 comp2 ...]\                             [WITH \{UNIQUE HASHED\}|\{\{UNIQUE|NON-UNIQUE\} SORTED\}\                               KEY key_name2 [ALIAS alias_name2] COMPONENTS comp1 comp2 ...]\                             ...\}\                            [INITIAL SIZE n]\                            [WITH HEADER LINE]\}\                          |\ \{RANGE OF dobj [INITIAL SIZE n]\                                           [WITH HEADER LINE]\}\ \}]\                  [VALUE \{ val |\ \{IS INITIAL\}\ \}]\                  [READ-ONLY].`

Declares a variable or an instance attribute `var`.

-   [`(len)`](ABAPDATA_SIMPLE.html)\\
    Defines the length when making reference to generic built in ABAP types.
-   [`TYPE`](ABAPDATA.html)\\
    Defines the type by referring to a data type.
-   [`LIKE`](ABAPDATA.html)\\
    Defines the type by referring to a data object.
-   [`[LENGTH len]\ [DECIMALS dec]`](ABAPDATA_SIMPLE.html)\\
    Defines the length and number of [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) when referencing generically built-in ABAP types.
-   [`LINE OF`](ABAPDATA_REFERRING.html)\\
    Defines the type by referring to the line type of an internal table.
-   [`BOXED`](ABAPDATA_BOXED.html)\\
    Declares a structure as a [static box](ABENSTATIC_BOX_GLOSRY.html).
-   [`REF TO`](ABAPDATA_REFERENCES.html)\\
    Creates a reference variable.
-   [`\{[STANDARD] TABLE\}|\{SORTED TABLE\}|\{HASHED TABLE\}`](ABAPTYPES_TABCAT.html)\\
    Creates a [standard](ABENSTANDARD_TABLE_GLOSRY.html), [sorted](ABENSORTED_TABLE_GLOSRY.html), or [hashed table](ABENHASHED_TABLE_GLOSRY.html).
-   [`WITH \{[UNIQUE|NON-UNIQUE]\ \{KEY [primary_key [ALIAS alias_name] COMPONENTS] comp1 comp2 ...\}\}|\{DEFAULT KEY\}`](ABAPDATA_PRIMARY_KEY.html)\\
    Defines a unique or non-unique primary table key `primary_key`. The components of the key are either specified explicitly or are defined by a [standard key](ABENSTANDARD_KEY_GLOSRY.html). `ALIAS` can be used to define an alias name `alias_name`.
-   [`WITH EMPTY KEY`](ABAPDATA_PRIMARY_KEY.html)\\
    Defines an empty primary table key.
-   [`WITH \{UNIQUE HASHED\}|\{\{UNIQUE|NON-UNIQUE\} SORTED\} KEY key_name [ALIAS alias_name] COMPONENTS comp1 comp2 ...`](ABAPDATA_SECONDARY_KEY.html)\\
    Defines a secondary table key `key_name`. It is managed using either a unique hashed algorithm, a unique sorted secondary index, or a non-unique sorted secondary index. `ALIAS` can be used to define an alias name `alias_name`.
-   [`INITIAL SIZE n`](ABAPDATA_ITAB.html)\\
    Defines the initial memory usage of an internal table.
-   [`WITH HEADER LINE`](ABAPDATA_HEADER_LINE.html)\\
    **Obsolete**: Defines a [header line](ABENHEADER_LINE_GLOSRY.html) of the same name for an internal table.
-   [`RANGE OF`](ABAPDATA_RANGES.html)\\
    Defines a [ranges table](ABENRANGES_TABLE_GLOSRY.html) with the line type of a [ranges table](ABENRANGES_TABLE_GLOSRY.html).
-   [`VALUE \{ val |\ \{IS INITIAL\}\ \}`](ABAPDATA_OPTIONS.html)\\
    Defines a start value of the data object as `val` or as the initial value.
-   [`READ-ONLY`](ABAPDATA_OPTIONS.html)\\
    Protects non-[private](ABENPRIVATE_GLOSRY.html) attributes from writes from outside of their own class.
-   [`READER|WRITER|LOCATOR|\{LOB HANDLE\} FOR ... COLUMNS ...`](ABAPDATA_LOB_HANDLE.html)\\
    Derives an [LOB handle structure](ABENLOB_HANDLE_STRUCTURE_GLOSRY.html) from the structure of a database table or DDIC database view.

abenabap.html abenabap\_reference.html abenabap\_shortref.html