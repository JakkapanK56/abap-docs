---
title: "ABAPLEAVE_SCREEN"
description: |
  ABAPLEAVE_SCREEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLEAVE_SCREEN.htm"
abapFile: "ABAPLEAVE_SCREEN.html"
keywords: ["do", "if", "catch", "data", "ABAPLEAVE", "SCREEN"]
---

[Short Reference](ABAPLEAVE_SCREEN_SHORTREF.html)\\ \\n

`LEAVE \{ SCREEN |\ \{TO SCREEN dynnr\}\ \}.`

[1. `LEAVE SCREEN.`](#ABAP_VARIANT_1@1@)

[2. `LEAVE TO SCREEN dynnr.`](#ABAP_VARIANT_2@1@)

This statement ends the processing of the current [dynpro](ABENDYNPRO_GLOSRY.html). The current [processing block](ABENPROCESSING_BLOCK_GLOSRY.html) of the ABAP program and the current processing block of the dynpro are exited immediately.

The variant `LEAVE SCREEN` calls the current [next dynpro](ABENNEXT_DYNPRO_GLOSRY.html). This is either specified defined statically in the properties of the current dynpro or was previously set using the statement [`SET SCREEN`](ABAPSET_SCREEN.html).

The variant `LEAVE TO SCREEN` calls the dynpro with the number `dynnr` as the [next dynpro](ABENNEXT_DYNPRO_GLOSRY.html). `dynnr` expects a data object of the type `n` and the length 4. It must contain either the [dynpro number](ABENDYNPRO_NUMBER_GLOSRY.html) of a dynpro in the [main program](ABENMAIN_PROGRAM_GLOSRY.html) of the current [program group](ABENPROGRAM_GROUP_GLOSRY.html) or the value 0, otherwise an uncatchable exception is raised. This statement is a short form of the statements `SET SCREEN dynnr` and `LEAVE SCREEN`.

-   This statement does not terminate the entire dynpro sequence and instead branches to another dynpro in the same sequence. Only if the number 0 is used to branch to the next dynpro does `LEAVE SCREEN` terminate the dynpro sequence.
-   This statement must not be used when handling events of the [Control Framework](ABENCONTROL_FRAMEWORK_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html