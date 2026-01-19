---
title: "ABAPPRINT-CONTROL"
description: |
  ABAPPRINT-CONTROL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPRINT-CONTROL.htm"
abapFile: "ABAPPRINT-CONTROL.html"
keywords: ["select", "insert", "do", "if", "data", "ABAPPRINT", "CONTROL"]
---

[Short Reference](ABAPPRINT-CONTROL_SHORTREF.html)

`PRINT-CONTROL INDEX-LINE index_line.`

In spool lists, this statement creates index entries for optical archiving using [ArchiveLink](ABENARCHIVELINK_GLOSRY.html). This applies only to spool lists created using [`NEW-PAGE PRINT ON`](ABAPNEW-PAGE_PRINT.html), [`SUBMIT TO SAP-SPOOL`](ABAPSUBMIT_LIST_OPTIONS.html), and when selecting *Execute and Print* on the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html). It does not work for screen lists spooled during display by selecting *Print* (function code *PRI*).

This statement inserts the content of the data object `index_line` into the current spool list as an index line. `index_line` must be a flat character-like data object. If the [list cursor](ABENLIST_CURSOR_GLOSRY.html) of an output statement has been set in the current list line, the index line is inserted after the end of the line. Index lines can be used for the following purposes:

An index line is sent to the spool system as a part of the spool list and is displayed there, although not included in the print output. When a list is archived using [ArchiveLink](ABENARCHIVELINK_GLOSRY.html), the spool system divides it into a data file and a description file. The data file contains the actual spool lists, and the description file contains the index lines.

To enable the associated ArchiveLink search function to be used when an archived spool list is displayed or for the links to work, the index lines must contain certain information that must follow a fixed naming convention and be described in the [ArchiveLink documentation](https://help.sap.com/docs/ABAP_PLATFORM_NEW/bb9551032d3046c98c2b251ae486085f/7b5ef23cce27466f86ee4a6146ccf2ee).

Inserting index lines in a list of square numbers. After every hundredth line, index lines for archiving are created (`DAIN` lines) using the statement `PRINT-CONTROL`. The structure of the `DAIN` lines is defined at the start of the list in two additional index lines (`DKEY` lines). If the user selects *Execute and Print* on the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) and archives the list in the spool dialog, the archived list can be searched for the indexes. For more information, see the [ArchiveLink documentation](https://help.sap.com/docs/ABAP_PLATFORM_NEW/bb9551032d3046c98c2b251ae486085f/7b5ef23cce27466f86ee4a6146ccf2ee).

-   As `DAIN` lines whose structure is defined in `DKEY` lines. Here, they improve the performance of searches in archived spool lists.
-   As `DARC` lines, they enable hypertext links to other stored objects.

PARAMETERS number TYPE i. \\n\\ \\nDATA: index TYPE i, \\n square TYPE decfloat16, \\n numb TYPE i, \\n num TYPE c LENGTH 4, \\n dkey TYPE c LENGTH 100, \\n dain TYPE c LENGTH 100. \\n\\ \\ndkey = 'DKEYIndex'. \\ndkey+44 = '0'. \\ndkey+47 = '3'. \\nPRINT-CONTROL INDEX-LINE dkey. \\n\\ \\nCLEAR dkey. \\n\\ \\ndkey = 'DKEYNumber'. \\ndkey+44 = '3'. \\ndkey+47 = '4'. \\nPRINT-CONTROL INDEX-LINE dkey. \\n\\ \\nindex = 0. \\n\\ \\nDO number TIMES. \\n index += 1. \\n IF index = 100. \\n numb = sy-index / 100. \\n WRITE numb TO num LEFT-JUSTIFIED. \\n dain = 'DAIN' && 'IDX' && num. \\n PRINT-CONTROL INDEX-LINE dain. \\n index = 0. \\n ENDIF. \\n square = sy-index \*\* 2. \\n WRITE: / sy-index, square STYLE cl\_abap\_math=>scientific. \\nENDDO. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenprint.html abenprint\_control.html