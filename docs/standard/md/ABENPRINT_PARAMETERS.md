---
title: "ABENPRINT_PARAMETERS"
description: |
  ABENPRINT_PARAMETERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPRINT_PARAMETERS.htm"
abapFile: "ABENPRINT_PARAMETERS.html"
keywords: ["do", "if", "try", "data", "ABENPRINT", "PARAMETERS"]
---

For every [spool request](ABENPRINT_SPOOL.html), spool parameters must be defined that are used to format the spool list when the list is created, and to control the request.

In the ABAP statements [`NEW-PAGE PRINT ON`](ABAPNEW-PAGE_PRINT.html) and [`SUBMIT TO SAP-SPOOL`](ABAPSUBMIT_PRINT_PARAMETERS.html) the spool parameters are specified in a structure of type `PRI_PARAMS` from the ABAP Dictionary. Spool parameters can be enhanced by archiving parameters if the data of the spool request is to be archived using ArchiveLink. To do this, optical archiving using [ArchiveLink](ABENARCHIVELINK_GLOSRY.html) is switched on (archiving mode 2 or 3) in the spool parameters. Archiving parameters are specified in a structure of type `ARC_PARAMS` from the ABAP Dictionary.

The spool parameters are specified either explicitly or determined implicitly. The end user can make an interactive entry in the spool dialog box or the spool parameters can be set in a program-driven way.

The content of the structures `PRI_PARAMS` and `ARC_PARAMS` cannot be modified directly in programs and only the function module `GET_PRINT_PARAMETERS` can be used for this.

-   [Spool Dialog Box](ABENPRINT_PARAMETERS_WINDOW.html)
-   [Setting Program-Driven Spool Parameters](ABENPRINT_PARAMETERS_FUNCTION.html)
-   [Overview of All Spool Parameters](ABENPRINT_PARAMETERS_OVERVIEW.html)

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenprint.html