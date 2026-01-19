---
title: "ABENNEWS-610-OTHERS"
description: |
  ABENNEWS-610-OTHERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-610-OTHERS.htm"
abapFile: "ABENNEWS-610-OTHERS.html"
keywords: ["select", "insert", "delete", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "ABENNEWS", "610", "OTHERS"]
---

[1. Dynamic Pass by Parameter in `CALL FUNCTION`](#ABAP_MODIFICATION_1@4@)

[2. New Predicate Expression `IS BOUND`](#ABAP_MODIFICATION_2@4@)

[3\. Negated Relational Operators](#ABAP_MODIFICATION_3@4@)

[4\. Unconditional Exit from a Processing Block](#ABAP_MODIFICATION_4@4@)

[5\. Extended Search in the Keyword Documentation](#ABAP_MODIFICATION_5@4@)

[6\. Runtime Analysis](#ABAP_MODIFICATION_6@4@)

[7\. Calling Predefined Arithmetic Functions](#ABAP_MODIFICATION_7@4@)

[8\. Transformation of XML Data into ABAP Variables](#ABAP_MODIFICATION_8@4@)

[9\. Displaying the Generation Limits in the Program Check](#ABAP_MODIFICATION_9@4@)

[10\. Increase in Line Length in ABAP Editor](#ABAP_MODIFICATION_10@4@)

[11. Enhancement of the `MESSAGE` Statement](#ABAP_MODIFICATION_11@4@) 

[12\. Displaying Exceptions for Runtime Errors](#ABAP_MODIFICATION_12@4@)

[13\. Separate Logical Units of Work for Application and Generation](#ABAP_MODIFICATION_13@4@)

[14\. Minimum and Maximum Values for Elementary Data Types](#ABAP_MODIFICATION_14@4@)

[15\. Name for a Component in the Structure Buffer](#ABAP_MODIFICATION_15@4@)

[16\. Reading a Program Title](#ABAP_MODIFICATION_16@4@)

[17\. New Medium for Data Clusters](#ABAP_MODIFICATION_17@4@)

[18\. Selecting and Deleting Data Clusters](#ABAP_MODIFICATION_18@4@)

[19. New Additions for `INSERT REPORT`](#ABAP_MODIFICATION_19@4@)

The addition [`PARAMETER-TABLE itab`](ABAPCALL_FUNCTION.html) can be used to fill the interface of a function module with parameters dynamically. The addition [`EXCEPTION-TABLE itab`](ABAPCALL_FUNCTION.html) is used to pass a table of exceptions to the called function module. At the same time, the number value to be assigned to the system field `sy-subrc` after the exception is raised is passed to the component `VALUE`.

The predicate expression [`IS BOUND`](ABENLOGEXP_BOUND.html) indicates whether a reference variable contains a valid reference.

A new word order has been introduced for the negation of the following relational operators. Instead of `IF NOT (f IS INITIAL)`, the spelling `IF f IS NOT INITIAL` is now possible. This word order is available for the following relational operators:

The new statement [`RETURN`](ABAPRETURN.html) can be used to exit a [processing block](ABENPROCESSING_BLOCK_GLOSRY.html) explicitly.

The keyword documentation has been enhanced in such a way that more general terms like `RADIOBUTTON`, `INNER JOIN`, or `FOR ALL ENTRIES` are now also processed. Until now the system only searched for keywords like `DATA` or `CLASS`. If a number of documents contain the same term, the search can be limited in the *hit list*. A further improvement is that the system displays the found document at the relevant point.

From now on, the runtime analysis can also be called within a program unit by calling the methods `ON` or `OFF` from the class `CL_ABAP_TRACE_SWITCH`. Additionally, the *measurement restrictions* now have an input help for [program types](ABENPROGRAM_TYPE_GLOSRY.html) and the *Tips and Tricks* interface has been completely redesigned and now includes a tree structure and a text editor.

In expressions, the [arithmetic functions](ABAPCOMPUTE_ARITH.html) can be used at the same positions as [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html). The following cases are supported:

Another new addition is the [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html) statement, which enables the transformation of [XML](ABENXML_GLOSRY.html) data into ABAP variable content. The following transformations are possible:

When choosing *Program -> Check -> Generation Limits* in the ABAP Editor menu, the system displays the load size and the available kernel resources for the selected program.

From now on, ABAP programs support a line length of 255 characters instead of 72 characters. Literals or statement lists that exceed a line with 72 characters now produce a syntax error. However, this only affects programs that are modified in an editor with a line length of more than 72 characters.

The form `MESSAGE msg TYPE t` is a new in the statement [`MESSAGE`](ABAPMESSAGE.html). It produces direct output of character strings or other strings. This option is designed for exception classes that have exception texts of data type `string`.

The new addition `DISPLAY LIKE` can also be used to modify the icons in the display of the [message](ABENMESSAGE_GLOSRY.html).

The display of runtime errors now includes the columns *Name of Runtime Error* and *Exception*. The same fields are also displayed and explained in the [short dump](ABENSHORT_DUMP_GLOSRY.html), immediately after an uncaught runtime error.

If a program was not modified by its own logical unit of work ([LUW](ABENDB_TRANSACTION.html)), generation is started in a separate work process when the program is used. The program is generated in the same work process only if no other work process is free.

If, for example, modified programs were used in a background process, these were only accessible to other users after the background process was finished. After the program was generated, the system could not trigger a [`COMMIT WORK`](ABAPCOMMIT.html), since this may have caused inconsistencies in the background processing data. The separation of application and generation now ensures that a program is available to other applications immediately after it is generated.

The class `CL_ABAP_EXCEPTIONAL_VALUES` provides the methods `GET_MAX_VALUE` and `GET_MIN_VALUE`, which are used to establish the value ranges of the elementary [data types](ABAPDATA_SIMPLE.html).

Previously, if you used [`<ASSIGN COMPONENT`](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html) to access components of a Dictionary structure, then up to now the statement `DESCRIBE FIELD ... HELP-ID` returned the name of the corresponding data element. The name of the component of the dictionary structure is now returned instead.

The following code snippet now produces the value *TRDIR-NAME* instead of `PROGRAMM`.

Previously, the program title was read from the ABAP text elements using the statement [`READ TEXTPOOL`](ABAPREAD_TEXTPOOL.html). For performance and buffering reasons, the program title is now read from the table `TRDIRT`.

The medium `SHARED MEMORY` has been added to the statements [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html) and [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html). Unlike the variant `SHARED BUFFER`, whose memory is automatically modified after a displacement, memories must be managed explicitly if this type of repository is used. To do this, the statement [`DELETE FROM SHARED MEMORY`](ABAPDELETE_CLUSTER.html) or a method of the class `CL_ABAP_EXPIMP_SHMEM` can be used.

There are new methods in the following classes for selecting and deleting data clusters:

The following new additions are available for the statement [`INSERT REPORT`](ABAPINSERT_REPORT.html):

-   [`[NOT] BETWEEN`](ABENLOGEXP_BETWEEN.html)
-   [`[NOT] IN`](ABENLOGEXP_SELECT_OPTION.html)
-   [`IS [NOT] INITIAL`](ABENLOGEXP_INITIAL.html)
-   [`IS [NOT] ASSIGNED`](ABENLOGEXP_ASSIGNED.html)
-   [`IS [NOT] REQUESTED`](ABENLOGEXP_REQUESTED.html)
-   [`IS [NOT] SUPPLIED`](ABENLOGEXP_SUPPLIED.html)

-   Source fields of the [`MOVE`](ABAPMOVE_OBS.html) statement
-   Arithmetic expressions of the [`COMPUTE`](ABAPCOMPUTE_ARITH.html) statement
-   Logical [expressions](ABENLOGEXP.html)
-   The [`CASE`](ABAPCASE.html) statement of the `CASE control structure`
-   The [`WHEN`](ABAPWHEN.html) statement of the `CASE` control structure
-   The [`WHERE`](ABAPLOOP_AT_ITAB.html) condition in the `LOOP AT` statement

-   XML to ABAP
-   ABAP to XML
-   ABAP to ABAP
-   XML to XML

-   `CL_ABAP_EXPIMP_MEM`
-   `CL_ABAP_EXPIMP_SHMEM`
-   `CL_ABAP_EXPIMP_SHBUF`
-   `CL_ABAP_EXPIMP_DB`

-   `... KEEPING DIRECTORY ENTRY`
-   `... DIRECTORY ENTRY trdir`
-   `... UNICODE ENABLING uc`
-   `... FIXED-POINT ARITHMETIC fp`
-   `... PROGRAM TYPE pt`
-   `... MAXIMUM WIDTH INTO w`

DATA: mydir TYPE trdir, \\n hlpid(61) type c. \\nFIELD-SYMBOLS TYPE ANY. \\n\\ \\nASSIGN mydir TO . \\nASSIGN COMPONENT 1 OF STRUCTURE TO . \\nDESCRIBE FIELD HELP-ID hlpid. \\nWRITE / hlpid. abenabap.html abennews.html abennews-6.html abennews-610.html