---
title: "ABENPRINT_SPOOL"
description: |
  ABENPRINT_SPOOL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPRINT_SPOOL.htm"
abapFile: "ABENPRINT_SPOOL.html"
keywords: ["select", "do", "while", "if", "case", "ABENPRINT", "SPOOL"]
---

Every output to a spool list is assigned to exactly one [spool request](ABENSPOOL_REQUEST_GLOSRY.html). For every spool request, [spool parameters](ABENPRINT_PARAMETERS.html) are specified that can no longer be changed. Spool lists can be stacked in spool list levels. A spool list level always has exactly one spool request assigned to it.

The following operations create a new spool list level:

Up to 20 spool list levels can be stacked.

The first output statement within a spool list level opens a new spool request whose [spool number](ABENSPOOL_NUMBER_GLOSRY.html) is placed into system field `sy-spono`. If another spool request is already open, it remains open and is used again after the spool list level has been exited. In a spool list level that has been created by calling a dynpro sequence, the spool request inherits the spool parameters of the preceding spool request. In all other cases, the explicitly specified spool parameters apply.

When leaving a spool list level that was not opened with `NEW-PAGE PRINT ON`, that is, at the end of the program or when leaving a dynpro sequence, the spool request associated with the spool list level is closed. If a spool request stacked on the spool list level with `NEW-PAGE PRINT ON` has not yet been closed using `NEW-PAGE PRINT OFF`, it is also closed. Subsequent output statements continue to write to the spool list of the previous spool request or to the current screen list.

The statement `NEW-PAGE PRINT OFF` closes only spool requests for which spooling was activated using `NEW-PAGE PRINT ON`. If after that no previous spool request is open, spooling is switched off again, that is, subsequent output statements continue to write to the screen list. If a previous spool request existed, spooling remains activated and the output is again written into its spool list. `NEW-PAGE PRINT OFF` is ignored by spool requests not opened using `NEW-PAGE PRINT ON`.

After a spool request is closed, the number of the closed spool request remains in system field `sy-spono` until an output statement writes to a spool list again. This may be a new spool list or the list of a previous spool request. If after closing a spool request a previous spool request exists, the number in `sy-spono` differs from the number of that request until another output into its spool list is performed.

It is best always to close a spool request that was opened using `NEW-PAGE PRINT ON` explicitly using `NEW-PAGE PRINT OFF`, before it is closed implicitly at the end of the program or when leaving a dynpro sequence.

[Lists, Spooling](ABENPRINT_LIST_ABEXA.html).

-   Choosing *Execute + Print* on the selection screen
-   Program call with [`SUBMIT TO SAP-SPOOL`](ABAPSUBMIT_LIST_OPTIONS.html)
-   Executing a program in a background job
-   [Dynpro sequence](ABENDYNPRO_SEQUENCE_GLOSRY.html) call using [`CALL SCREEN`](ABAPCALL_SCREEN.html) if a spool request is already open.
-   Executing the statement [`NEW-PAGE PRINT ON`](ABAPNEW-PAGE_PRINT.html). This statement, however, does not create an arbitrarily stackable spool list level.

-   In a spool list level created with `NEW-PAGE PRINT ON`, no other spool list level can be created with `NEW-PAGE PRINT ON`. However, the other operations for creating spool list levels are still valid. If the addition `NEW SECTION` is used in `NEW-PAGE PRINT ON`, the existing request is used again or it is closed implicitly before a new one is opened.
-   In a spool list level not created with `NEW-PAGE PRINT ON` or while creating a screen list, no more than one spool list level can be created using `NEW-PAGE PRINT ON`.

-   A spool list level created with `NEW-PAGE PRINT ON` can thus be stacked only on a spool list level that was not created with `NEW-PAGE PRINT ON` or stacked when a screen list was created.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenprint.html