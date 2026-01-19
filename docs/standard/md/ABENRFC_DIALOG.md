---
title: "ABENRFC_DIALOG"
description: |
  ABENRFC_DIALOG - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRFC_DIALOG.htm"
abapFile: "ABENRFC_DIALOG.html"
keywords: ["do", "if", "case", "class", "data", "ABENRFC", "DIALOG"]
---

In an [RFM](ABENRFM_GLOSRY.html) called using RFC, both variants [sRFC](ABENSRFC_GLOSRY.html) and [aRFC](ABENARFC_GLOSRY.html) can execute dialog interactions using the SAP GUI or call dynpros. This is not possible with the variants [bgRFC](ABENTRFC_2_GLOSRY.html), [tRFC](ABENTRFC_2_GLOSRY.html), and [qRFC](ABENQRFC_GLOSRY.html). It is technically possible for [pRFC](ABENPRFC_GLOSRY.html) but not recommended.

Dialog interactions executed by sRFC and aRFC require the RFC client to be executed in the foreground in a dialog work process and that the user defined in the destination has dialog authorization. RFM does not open a GUI window on the RFC server, but instead:

The screen data is passed back by the RFC interface to the calling system. Statements for classic list output, such as `WRITE`, which are executed when a function module is called remotely, write to the list buffer of the RFC server. The lists can be displayed using the statement `LEAVE TO LIST-PROCESSING` during a dynpro sequence displayed in a GUI window of the caller. List output in programs called from RFM is also displayed in a GUI window of the caller.

In both cases, entering `/otcode` commands in the command field of the standard toolbar opens another ABAP session on the RFC server and an additional ABAP session for displaying a GUI window on the client side, in which the transaction specified by *tcode* is executed.

-   sRFC uses the current GUI window of the caller, which means that the current screen is replaced temporarily by the screen of the remotely called function. Entering `/ntcode` commands in the command field of the [standard toolbar](ABENSTANDARD_TOOLBAR_GLOSRY.html) ends the remote connection and the calling program continues its processing after the RFC. The behavior on the server side is then no longer defined.
-   aRFC opens a new [ABAP session](ABENABAP_SESSION_GLOSRY.html) in the RFC client and displays the remotely executed application in a new GUI window there. Entering `/ntcode` commands in the command field of the standard toolbar executes the transaction *tcode* in this session.

-   If RFMs are called externally using dialog interactions, only dialog box, that is, GUI windows without a standard toolbar, should be displayed, so that no commands can be entered in the command field.
-   Logon windows that appear in a different system when an RFM is called are already dialog interactions.

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abenrfc.html