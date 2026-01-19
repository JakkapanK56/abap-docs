---
title: "ABAPSELECTION-SCREEN_LDB_VERSION"
description: |
  ABAPSELECTION-SCREEN_LDB_VERSION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_LDB_VERSION.htm"
abapFile: "ABAPSELECTION-SCREEN_LDB_VERSION.html"
keywords: ["select", "if", "data", "ABAPSELECTION", "SCREEN", "LDB", "VERSION"]
---

[Short Reference](ABAPSELECTION-SCREEN_BOV_SHORTREF.html)

`SELECTION-SCREEN BEGIN OF VERSION vers text.`\\ 
`...`\\ 
`SELECTION-SCREEN EXCLUDE \{\ \{PARAMETERS para\}`\\ 
                         `|\ \{SELECT-OPTIONS selcrit\}`\\ 
                         `|\ \{RADIOBUTTON GROUPS group\}`\\ 
                         `|\ \{BLOCKS block\}`\\ 
                         `|\ \{IDS id\}\ \}.`\\ 
`...`\\ 
`SELECTION-SCREEN END OF VERSION vers.`

These variants of the statement [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html) define a version `vers` of the [standard selection screen](ABENSTANDARD_SELSCREEN_GLOSRY.html) for the [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html). `vers` expects a positive number with a maximum of three digits. `text` expects a text symbol from the [database program](ABENDATABASE_PROGRAM_GLOSRY.html) in the form `text-idf`, where `idf` is the three-character ID of the text symbol. `SELECTION-SCREEN` statements that have the addition `EXCLUDE` are the only statements that can be specified within the first and last statement and these statements can only be specified there.

The definition of a version must be specified after the definition of the standard selection screen. Each version is based on the standard selection screen. The inner `SELECTION-SCREEN EXCLUDE` statements remove the directly specified `para` selection parameters, `selcrit` selection criteria, `group` radio button groups, and `block` blocks from the version. The `IDS` addition removes all the elements of the standard selection screen for which the ID `id` was created when they were defined with the addition [`ID`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html).

When an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) is linked with a logical database in the [program properties](ABENPROGRAM_PROPERTY_GLOSRY.html), the number `vers` can be entered in the *Selection Screen Version* field. This version is then used instead of the complete standard selection screen from the logical database. The content of the text symbol specified in `text` is used as a description of the version in the input help (F4) for the input field.

-   A selection screen version can also be entered as a standard value in the program properties of the database program itself. The number 1000 must then be entered in the properties of an executable program that wants to use the complete standard selection screen. The version used in the database program can be identified using the function module `RS_SELSCREEN_VERSION`.
-   If logical databases are no longer created, it is no longer necessary to use this variant of the statement `SELECT-OPTIONS`.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_abap\_statements.html abenldb\_statements.html abapselection-screen\_ldb.html