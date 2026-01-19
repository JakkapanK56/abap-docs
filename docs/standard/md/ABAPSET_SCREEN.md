---
title: "ABAPSET_SCREEN"
description: |
  ABAPSET_SCREEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_SCREEN.htm"
abapFile: "ABAPSET_SCREEN.html"
keywords: ["while", "if", "catch", "data", "ABAPSET", "SCREEN"]
---

[Short Reference](ABAPSET_SCREEN_SHORTREF.html)

`SET SCREEN dynnr.`

This statement sets the [dynpro](ABENDYNPRO_GLOSRY.html) with the [dynpro number](ABENDYNPRO_NUMBER_GLOSRY.html) specified in `dynnr` as the [next dynpro](ABENNEXT_DYNPRO_GLOSRY.html) of the current dynpro. `dynnr` expects a data object of the type `n` and the length 4. It must contain either the dynpro number of a dynpro in the [main program](ABENMAIN_PROGRAM_GLOSRY.html) of the current [program group](ABENPROGRAM_GROUP_GLOSRY.html) or the value 0, otherwise an uncatchable exception is raised. The specified next dynpro overwrites the previously defined next dynpro.

The next dynpro is called automatically when the end of [PAI](ABENPAI_GLOSRY.html) processing is reached for the current dynpro. If the dynpro number of the next dynpro is 0, the current dynpro sequence is ended.

There is always a next dynpro defined while a dynpro is being processed. After a dynpro is called, the next dynpro whose properties are defined statically applies, which can be overwritten using the statement `SET SCREEN` for as long as the current dynpro is being processed.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html