---
title: "Calling the program"
description: |
  Scheduling a background job. -   Using the statement `NEW-PAGE PRINT ON`(ABAPNEW-PAGE_PRINT.html). -   Choosing the function Execute + Print on the standard selection screen(ABENSTANDARD_SELSCREEN_GLOSRY.html) of an executable program. -   Calling an executable program with the addition `TO S
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPRINT_ON_OFF.htm"
abapFile: "ABENPRINT_ON_OFF.html"
keywords: ["select", "if", "data", "ABENPRINT", "OFF"]
---

If spooling is switched off, all list output is written to the list buffer for the current screen list. When spooling is switched on, a spool list is created. Spooling can be switched on as follows:

If `NEW-PAGE PRINT ON` is used, spooling is switched on explicitly in the program. With the other three options, spooling is switched on from the start of execution of an executable program. Switching on spooling opens a new [spool list level](ABENSPOOL_LIST_LEVEL_GLOSRY.html).

Only spooling switched on with `NEW-PAGE PRINT ON` can be switched off again using `NEW-PAGE PRINT OFF`. Spooling that is switched on at the start of a program cannot be switched off within this same program. In particular, spooling is always switched on when executing a program in [background processing](ABENBACKROUND_PROCESSING_GLOSRY.html).

Switches on spooling explicitly.

Switching optical archiving on explicitly.

Calling the program

Scheduling a background job.

-   Using the statement [`NEW-PAGE PRINT ON`](ABAPNEW-PAGE_PRINT.html).
-   Choosing the function *Execute + Print* on the [standard selection screen](ABENSTANDARD_SELSCREEN_GLOSRY.html) of an executable program.
-   Calling an executable program with the addition [`TO SAP-SPOOL`](ABAPSUBMIT_LIST_OPTIONS.html) of the statement [`SUBMIT`](ABAPSUBMIT.html).
-   Scheduling an executable program in a background job using the additions [`VIA JOB`](ABAPSUBMIT_VIA_JOB.html) and [`TO SAP-SPOOL`](ABAPSUBMIT_LIST_OPTIONS.html) of the statement [`SUBMIT`](ABAPSUBMIT.html).

DATA: params TYPE pri\_params, \\n valid TYPE c. \\n\\ \\nCALL FUNCTION 'GET\_PRINT\_PARAMETERS' \\n IMPORTING out\_parameters = params \\n valid = valid. \\n\\ \\nIF valid <> space. \\n NEW-PAGE PRINT ON PARAMETERS params NO DIALOG. \\n\\ \\n WRITE / ... \\n\\ \\n NEW-PAGE PRINT OFF. \\nENDIF. DATA: pri\_params TYPE pri\_params, \\n arc\_params TYPE arc\_params, \\n valid TYPE c. \\n\\ \\nCALL FUNCTION 'GET\_PRINT\_PARAMETERS' \\n IMPORTING out\_parameters = pri\_params \\n out\_archive\_parameters = arc\_params \\n valid = valid. \\n\\ \\nIF valid <> space. \\n NEW-PAGE PRINT ON PARAMETERS pri\_params \\n ARCHIVE PARAMETERS arc\_params NO DIALOG. \\n PRINT-CONTROL INDEX-LINE ' '. \\n\\ \\n WRITE / .... \\n\\ \\n NEW-PAGE PRINT OFF. \\nENDIF. DATA: params TYPE pri\_params, \\n valid TYPE c. \\n\\ \\nCALL FUNCTION 'GET\_PRINT\_PARAMETERS' \\n IMPORTING out\_parameters = params \\n valid = valid. \\n\\ \\nIF valid <> space. \\n SUBMIT myreport TO SAP-SPOOL WITHOUT SPOOL DYNPRO \\n SPOOL PARAMETERS params. \\nENDIF. DATA: params TYPE pri\_params, \\n valid TYPE c. \\n\\ \\nCALL FUNCTION 'GET\_PRINT\_PARAMETERS' \\n EXPORTING mode = 'BATCH' \\n report = 'MYREPORT' \\n IMPORTING out\_parameters = params \\n valid = valid. \\n\\ \\nIF valid <> space. \\n CALL FUNCTION 'JOB\_OPEN' .... EXPORTING jobcount ... \\n SUBMIT myreport VIA JOB 'MY\_JOB' NUMBER jobcount \\n TO SAP-SPOOL WITHOUT SPOOL DYNPRO \\n SPOOL PARAMETERS params. \\n CALL FUNCTION 'JOB\_CLOSE' ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenprint.html