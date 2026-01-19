---
title: "ABENSELECTION_SCREEN_CALL"
description: |
  ABENSELECTION_SCREEN_CALL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSELECTION_SCREEN_CALL.htm"
abapFile: "ABENSELECTION_SCREEN_CALL.html"
keywords: ["select", "do", "if", "ABENSELECTION", "SCREEN", "CALL"]
---

[Selection screens](ABENSELECTION_SCREEN_GLOSRY.html) can be called as follows:

Each call starts [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html). The display language of the selection screen is determined by the current [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html), which can be set with the statement [`SET LOCALE LANGUAGE`](ABAPSET_LOCALE.html).

When an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) is called using the statement `SUBMIT`, the standard selection screen or the selection screen specified in the statement is called between the events [`INITIALIZATION`](ABAPINITIALIZATION.html) and [`START-OF-SELECTION`](ABAPSTART-OF-SELECTION.html), if it contains at least one input field or pushbutton.

When a report transaction is executed, the assigned executable program is also started internally using `SUBMIT` and the selection screen defined for the transaction is called between the events `INITIALIZATION` and `START-OF-SELECTION`.

If a selection screen of the associated program is defined as the initial dynpro in a dialog transaction, the transaction code is used to call the selection screen when this program is executed. This selection screen is not handled like the first dynpro in a [dynpro sequence](ABENDYNPRO_SEQUENCE_GLOSRY.html) however (see [Selection Screen Processing](ABENSELECTION_SCREEN_EVENTS.html)).

-   by the statement [`SUBMIT`](ABAPSUBMIT.html)
-   as a selection screen of a [report transaction](ABENREPORT_TRANSACTION_GLOSRY.html)
-   as the initial dynpro of a [dialog transaction](ABENDIALOG_TRANSACTION_GLOSRY.html)
-   by the statement [`CALL SELECTION-SCREEN`](ABAPCALL_SELECTION_SCREEN.html)

-   A selection screen should not be used as the initial dynpro of a dialog transaction, since this does not generally produce the expected program behavior.
-   The display language of a general dynpro is the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) and not the [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html