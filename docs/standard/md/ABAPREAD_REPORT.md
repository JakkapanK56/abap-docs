---
title: "ABAPREAD_REPORT"
description: |
  ABAPREAD_REPORT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREAD_REPORT.htm"
abapFile: "ABAPREAD_REPORT.html"
keywords: ["select", "insert", "delete", "loop", "do", "if", "case", "catch", "class", "data", "internal-table", "ABAPREAD", "REPORT"]
---

[Short Reference](ABAPREAD_REPORT_SHORTREF.html)

`READ REPORT prog INTO itab [MAXIMUM WIDTH INTO wid].`

[`... MAXIMUM WIDTH INTO wid`](#ABAP_ONE_ADD@1@)

This statement reads the source code of the program specified in `prog` from the [repository](ABENREPOSITORY_GLOSRY.html) and copies its lines into the internal table `itab`. The previous content of `itab` is deleted. If the program cannot be loaded, the content of `itab` remains unchanged. By default, the source code of the active version of the program is read.

`prog` expects a [flat](ABENFLAT_GLOSRY.html) character-like data object, which contains the name of the program to be read. The name is not case-sensitive. The internal table `itab` must be a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) without [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html) with a character-like line type. When the line length of the internal table is fixed, it must be long enough for the longest program line. Program lines that are too long raise a catchable exception. In the case of the line type `string`, the length of each line depends on the length of the imported program line. An empty program line produces an empty string.

After a program is imported into an internal table `source`, a dedicated line is replaced by different source code from another internal table `insertion`. After a syntax check, a subroutine pool is generated from the modified program. The required security checks are indicated by comments.

If the addition `MAXIMUM WIDTH` is used, the number of characters of the longest imported source code line is assigned to the variable `wid`, which expects the data type `i`.

The following program determines the widest and narrowest source code in the programs of a package stored in the database table `TADIR`

`CX_SY_READ_SRC_LINE_TOO_LONG`

-   A precise working knowledge of the programs' structures and names is vital if the statement `READ REPORT` is used for programs organized in a [master program](ABENMASTER_PROGRAM_GLOSRY.html) and with [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) when they were created in the ABAP Workbench.
-   The names of the master programs for [class pools](ABENCLASS_POOL_GLOSRY.html) and [function pools](ABENFUNCTION_POOL_GLOSRY.html) do not match the names of the global class or function pool (see statements [`CLASS-POOL`](ABAPCLASS-POOL.html) and [`FUNCTION-POOL`](ABAPFUNCTION-POOL.html)).

-   *Cause:* At least one line of the source code is longer than the lines of the internal table `itab`.
    *Runtime error:*\\ `READ_REPORT_LINE_TOO_LONG`

DATA: \\n template TYPE c LENGTH 30, \\n generated TYPE c LENGTH 30, \\n source TYPE TABLE OF string, \\n insertion TYPE TABLE OF string, \\n idx TYPE i, \\n mess TYPE string, \\n lin TYPE i, \\n wrd TYPE string. \\n\\ \\ntemplate = '...'. \\n\\ \\n"Authority checks \\n... \\n\\ \\nREAD REPORT template INTO source. \\n\\ \\nIF sy-subrc <> 0. \\n RETURN. \\nENDIF. \\n\\ \\n"Fill insertion \\n... \\n\\ \\nFIND '\* insertion' IN TABLE source MATCH LINE idx. \\nDELETE source INDEX idx. \\nINSERT LINES OF insertion INTO source INDEX idx. \\n\\ \\nSYNTAX-CHECK FOR source MESSAGE mess LINE lin WORD wrd \\n PROGRAM template. \\n... \\n\\ \\n"Security checks \\n... \\n\\ \\nGENERATE SUBROUTINE POOL source NAME generated. \\n\\ \\n "Execution \\n ... SELECT obj\_name AS name \\n FROM tadir \\n WHERE pgmid = 'R3TR' AND \\n object = 'PROG' AND \\n devclass = 'SABAPDEMOS' \\n INTO TABLE @FINAL(programs). \\n\\ \\nDATA(max) = 0. \\nDATA(min) = 1000000. \\nDATA(width) = 0. \\nDATA source TYPE TABLE OF string WITH EMPTY KEY. \\nLOOP AT programs ASSIGNING FIELD-SYMBOL(). \\n READ REPORT INTO source MAXIMUM WIDTH INTO width. \\n IF width > max. \\n max = width. \\n FINAL(max\_name) = . \\n ENDIF. \\n IF width < min AND width <> 0. \\n min = width. \\n FINAL(min\_name) = . \\n ENDIF. \\nENDLOOP. `**sy-subrc**` **Meaning** 0 The program was imported. 4 The specified program was not found in the repository. 8 The specified program is a system program protected against reads. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abenabap\_generic\_program.html