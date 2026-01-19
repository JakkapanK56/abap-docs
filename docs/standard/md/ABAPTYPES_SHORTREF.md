---
title: "ABAPTYPES_SHORTREF"
description: |
  ABAPTYPES_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTYPES_SHORTREF.htm"
abapFile: "ABAPTYPES_SHORTREF.html"
keywords: ["do", "if", "data", "types", "internal-table", "ABAPTYPES", "SHORTREF"]
---

[Reference](ABAPTYPES.html)

`TYPES dtype[(len)]\ \{TYPE \{\ \{abap_type [LENGTH len]\                                        [DECIMALS dec]\}\                           |\ \{[LINE OF] type\}\                           |\ \{REF TO type\}\                           |\ \{\ \{\{[STANDARD] TABLE\}\                               |\ \{SORTED TABLE\}\                               |\{HASHED TABLE\}\}\                               OF [REF TO] type                               [\ \{WITH [UNIQUE|NON-UNIQUE]\                                    \{\ \{KEY [primary_key [ALIAS alias_name]\                                         COMPONENTS] comp1 comp2 ...\}\                                    |\ \{DEFAULT KEY\}\ \}  \}\                               |\ \{WITH EMPTY KEY\}\ ]\                               \{[WITH \{UNIQUE HASHED\}|\{\{UNIQUE|NON-UNIQUE\} SORTED\}\                                  KEY key_name1 [ALIAS alias_name1] COMPONENTS comp1 comp2 ...]\                                [WITH \{UNIQUE HASHED\}|\{\{UNIQUE|NON-UNIQUE\} SORTED\}\                                  KEY key_name2 [ALIAS alias_name2] COMPONENTS comp1 comp2 ...]\                                ...\}\                               [\{WITH|WITHOUT\} FURTHER SECONDARY KEYS]\                               [INITIAL SIZE n]\}\                             |\ \{RANGE OF type [INITIAL SIZE n]\}\ \}\                             |\ \{dbtab|view                                 \{ READER|LOCATOR|\{LOB HANDLE\}\ \}\                               |\ \{ WRITER|LOCATOR \} FOR                                 \{ COLUMNS blob1 blob2 ...  clob1 clob2 ... \}\                               |\ \{ ALL [OTHER]\ [BLOB|CLOB] COLUMNS \}\                                   [...]\}\}\                   |\ \{LIKE \{\ \{[LINE OF] dobj\}\                           |\ \{REF TO dobj\}\                           |\ \{\ \{\{[STANDARD] TABLE\}\                               |\{SORTED TABLE\}\                               |\{HASHED TABLE\}\                               |\{ANY TABLE\}\                               |\{INDEX TABLE\}\}\                               OF [REF TO] dobj                               [\ \{WITH [UNIQUE|NON-UNIQUE]\                                    \{\ \{KEY [primary_key [ALIAS alias_name]\                                         COMPONENTS] comp1 comp2 ...\}\                                    |\ \{DEFAULT KEY\}\ \}\}\                               |\ \{WITH EMPTY KEY\}\ ]\                               \{[WITH \{UNIQUE HASHED\}|\{\{UNIQUE|NON-UNIQUE\} SORTED\}\                                  KEY key_name1 [ALIAS alias_name1] COMPONENTS comp1 comp2 ...]\                                [WITH \{UNIQUE HASHED\}|\{\{UNIQUE|NON-UNIQUE\} SORTED\}\                                  KEY key_name2 [ALIAS alias_name2] COMPONENTS comp1 comp2 ...]\                                ...\}\                               [\{WITH|WITHOUT\} FURTHER SECONDARY KEYS]\                               [INITIAL SIZE n]\}\                             |\ \{RANGE OF dobj [INITIAL SIZE n]\}\ \}\}.`

Defines a data type `dtype`.

-   [`(len)`](ABAPDATA_SIMPLE.html)\\
    Defines the length when referencing generic built-in ABAP types.
-   [`TYPE`](ABAPTYPES.html)\\
    Defines the type referencing a data type.
-   [`LIKE`](ABAPTYPES.html)\\
    Defines the type by referencing a data object.
-   [`[LENGTH len]\ [DECIMALS dec]`](ABAPTYPES_SIMPLE.html)\\
    Defines the length and number of [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) when referencing generically built-in ABAP types.
-   [`LINE OF`](ABAPTYPES_REFERRING.html)\\
    Reference to the line type of an internal table.
-   [`REF TO`](ABAPTYPES_REFERENCES.html)\\
    Creates a reference type.
-   [`\{[STANDARD] TABLE\}|\{SORTED TABLE\}|\{HASHED TABLE\}|\{ANY TABLE\}|\{INDEX TABLE\}`](ABAPTYPES_TABCAT.html)\\
    Creates a table type for the non-generic table categories [standard](ABENSTANDARD_TABLE_GLOSRY.html), [sorted](ABENSORTED_TABLE_GLOSRY.html), or [hashed tables](ABENHASHED_TABLE_GLOSRY.html) or for the generic table categories `ANY TABLE` or `INDEX TABLE`.
-   [`WITH \{[UNIQUE|NON-UNIQUE]\ \{KEY [primary_key [ALIAS alias_name] COMPONENTS] comp1 comp2 ...\}\}|\{DEFAULT KEY\}`](ABAPTYPES_PRIMARY_KEY.html)\\
    Defines a unique or non-unique primary table key `primary_key`. The components of the key are either specified explicitly or are defined by a [standard key](ABENSTANDARD_KEY_GLOSRY.html). `ALIAS` can be used to define an alias name `alias_name`.
-   [`WITH EMPTY KEY`](ABAPTYPES_PRIMARY_KEY.html)\\
    Defines an empty primary table key.
-   [`WITH \{UNIQUE HASHED\}|\{\{UNIQUE|NON-UNIQUE\} SORTED\} KEY key_name [ALIAS alias_name] COMPONENTS comp1 comp2 ...`](ABAPTYPES_SECONDARY_KEY.html)\\
    Defines a secondary table key `key_name`. It is managed using either a unique hashed algorithm, a unique sorted secondary index, or a non-unique sorted secondary index. `ALIAS` can be used to define an alias name `alias_name`.
-   [`\{WITH|WITHOUT\} FURTHER SECONDARY KEYS`](ABAPTYPES_KEYDEF.html)\\
    Defines the genericness of the table type with respect to the secondary table key.
-   [`INITIAL SIZE n`](ABAPTYPES_ITAB.html)\\
    Defines the initial memory usage of an internal table.
-   [`RANGE OF`](ABAPTYPES_RANGES.html)\\
    Derives a [ranges table](ABENRANGES_TABLE_GLOSRY.html).
-   [`READER|WRITER|LOCATOR|\{LOB HANDLE\} FOR ... COLUMNS ...`](ABAPTYPES_LOB_HANDLE.html)\\
    Derives an [LOB handle structure](ABENLOB_HANDLE_STRUCTURE_GLOSRY.html) from the structure of a database table or DDIC database view.

abenabap.html abenabap\_reference.html abenabap\_shortref.html