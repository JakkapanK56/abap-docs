---
title: "When using the statements"
description: |
  to create spool lists, it must be ensured that either the spool parameters window(ABENPRINT_PARAMETERS_WINDOW.html) is displayed or that a consistent set of spool parameters(ABENPRINT_PARAMETERS.html) is passed. The additions of the statements above are used to pass the spool parameters. They us
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPNEW-PAGE_PRINT_OBSOLETE.htm"
abapFile: "ABAPNEW-PAGE_PRINT_OBSOLETE.html"
keywords: ["do", "if", "case", "class", "data", "ABAPNEW", "PAGE", "PRINT", "OBSOLETE"]
---

When using the statements

to create spool lists, it must be ensured that either the [spool parameters window](ABENPRINT_PARAMETERS_WINDOW.html) is displayed or that a consistent set of [spool parameters](ABENPRINT_PARAMETERS.html) is passed. The additions

of the statements above are used to pass the spool parameters. They use the function module `GET_PRINT_PARAMETERS` to pass filled structures to the SAP spool system. Without simultaneously passing spool parameters, the statements `NEW-PAGE PRINT ON NO DIALOG` and `SUBMIT ... TO SAP-SPOOL WITHOUT SPOOL DYNPRO` produce a syntax error in classes and a syntax warning outside of classes.

As well as these additions, the obsolete additions in the table below also exist. Each of these additions passes only one spool parameter and cannot therefore ensure the consistency and completeness of the passed parameters. These obsolete additions were replaced by the additions `[SPOOL] PARAMETERS` and `ARCHIVE PARAMETERS`. The second column of the table specifies, for each obsolete addition, the corresponding input parameter of the function module `GET_PRINT_PARAMETERS`. The required value should be passed to this parameter instead of using the addition. For the meaning of the spool parameters, see [Spool Parameters Overview](ABENPRINT_PARAMETERS_OVERVIEW.html).

`flag` expects a single-character text field, where a blank character activates the parameter and any other character deactivates the parameter. `KEEP IN SPOOL` has the reverse semantics of the parameter `RELEASE` of the function module. This means that a blank character passes an *X* to the function module. In all other cases, the parameters correspond to the possible values for the [input parameters](ABENPRINT_PARAMETERS_OVERVIEW.html) of the function module.

-   [`NEW-PAGE PRINT ON`](ABAPNEW-PAGE_PRINT.html)
-   [`SUBMIT ... TO SAP-SPOOL`](ABAPSUBMIT_LIST_OPTIONS.html)

-   `[SPOOL] PARAMETERS`
-   `ARCHIVE PARAMETERS`

**Obsolete Addition** **Input Parameters** `ARCHIVE MODE arcmode` `ARCHIVE_MODE` `COPIES cop` `COPIES` `COVER PAGE flag` (only for `SUBMIT`) `COVER_PAGE` `COVER TEXT text` `LIST_TEXT` `DESTINATION dest` `DESTINATION` `DATASET EXPIRATION days` `EXPIRATION` `DEPARTMENT dep` `DEPARTMENT` `IMMEDIATELY flag` `IMMEDIATELY` `KEEP IN SPOOL flag` `RELEASE` `LAYOUT layout` `LAYOUT` `LINE-COUNT line` `LINE_COUNT` `LINE-SIZE col` `LINE_SIZE` `LIST AUTHORITY auth` `AUTHORITY` `LIST DATASET dsn` `DATA_SET` `LIST NAME name` `LIST_NAME` `NEW LIST IDENTIFICATION flag` `NEW_LIST_ID` `RECEIVER user` `RECEIVER` `SAP COVER PAGE mode` `SAP_COVER_PAGE` abenabap.html abenabap\_reference.html abenabap\_obsolete.html abengui\_obsolete.html abenlists\_obsolete.html abenprinting\_obsolete.html