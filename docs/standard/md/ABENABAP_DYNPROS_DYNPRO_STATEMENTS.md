---
title: "ABENABAP_DYNPROS_DYNPRO_STATEMENTS"
description: |
  ABENABAP_DYNPROS_DYNPRO_STATEMENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_DYNPROS_DYNPRO_STATEMENTS.htm"
abapFile: "ABENABAP_DYNPROS_DYNPRO_STATEMENTS.html"
keywords: ["loop", "data", "ABENABAP", "DYNPROS", "DYNPRO", "STATEMENTS"]
---

The dynpro flow logic is the procedural part of a [dynpro](ABENDYNPRO_GLOSRY.html). It is created using an ABAP-like programming language in the [Screen Painter](ABENSCREEN_PAINTER_GLOSRY.html) on the Flow Logic tab page. The syntax rules of the dynpro flow logic are largely like the rules for ABAP. In particular, statements are ended using a period, chained statements can be formed, and the same rules apply to comments. In suitable positions, literals can be used whose syntax matches that of ABAP [literals](ABENLITERAL.html) and whose value range is determined by the requirements of the current statement.

The dynpro flow logic, like ABAP programs, consists of processing blocks. Possible processing blocks are the four event blocks for the dynpro events [PBO](ABENPBO_GLOSRY.html), [PAI](ABENPAI_GLOSRY.html), [POH](ABENPOH_GLOSRY.html) and [POV](ABENPOV_GLOSRY.html), which all start with the key word [`PROCESS`](PROCESS.html). These event blocks contain a small set of statements that are described in the following sections, and which offer the following functions:

The statements in the event blocks of the dynpro flow logic are normally processed sequentially. Branches result from error handling following input checks in dialog modules. Screen elements in table form are processed in loops.

As well as the statements shown here, a range of [obsolete statements for dynpro flow logic](ABENDYNPRO_OBSOLET.html) exists.

-   Call dialog modules of the ABAP program using [`MODULE`](MODULE.html)
-   Control data transports to the ABAP program and handle [error messages](ABENERROR_MESSAGE_GLOSRY.html) using [`FIELD`](FIELD.html) and [`CHAIN`](CHAIN.html)
-   Execute loops using [table controls](ABENTABLE_CONTROL_GLOSRY.html) with [`LOOP`](LOOP.html)
-   Call [subscreens](ABENSUBSCREEN_GLOSRY.html) using [`CALL SUBSCREEN`](CALL.html)

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html