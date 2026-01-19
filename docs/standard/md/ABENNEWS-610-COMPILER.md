---
title: "ABENNEWS-610-COMPILER"
description: |
  ABENNEWS-610-COMPILER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-610-COMPILER.htm"
abapFile: "ABENNEWS-610-COMPILER.html"
keywords: ["do", "if", "catch", "class", "data", "types", "internal-table", "ABENNEWS", "610", "COMPILER"]
---

[1. Error Handling Using the Statement `SYNTAX-CHECK`](#ABAP_MODIFICATION_1@4@)

[2\. Static Checks in Specified Offsets/Lengths](#ABAP_MODIFICATION_2@4@)

[3. Data Types for Source Code in `SCAN ABAP-SOURCE`](#ABAP_MODIFICATION_3@4@)

[4\. Implementation in TOP Includes](#ABAP_MODIFICATION_4@4@)

[5\. Faster Generation of Program Segments](#ABAP_MODIFICATION_5@4@)

[6\. Generating Data and Types in System Includes](#ABAP_MODIFICATION_6@4@)

[7\. Converting C Literals with a Negative Maximum Value](#ABAP_MODIFICATION_7@4@)

[8\. Changing Read-Only DDIC Database Views](#ABAP_MODIFICATION_8@4@)

[9. Passing the Source Code in `GENERATE SUBROUTINE POOL`](#ABAP_MODIFICATION_9@4@)

The statement [`SYNTAX-CHECK`](ABAPSYNTAX-CHECK_FOR_ITAB.html) has been enhanced so that the syntax check also continues after error messages occur, as long as the parameter `ID` = `ERR` is set. Any error messages are written to an internal table, which can be specified using `TABLE`. The collected errors also provide the return code `sy-subrc` = 4.

Previously, in offsets/lengths specified as `field+offset(length)` the values were not checked for convertibility to numbers of the types I, F, or P until runtime. This is now checked as part of the syntax check.

The statement [`SCAN ABAP-SOURCE`](ABAPSCAN.html) has been enhanced so that fields of type C or `string` are allowed in the scanned source code, instead of an internal table. This means that an internal table no longer needs to be edited.

If implementations of the type `FORM`, `FUNCTION`, or `CLASS ... IMPLEMENTATION` are made in a top include, a syntax warning is now produced. The program can still be activated however.

Program segments can be generated much more quickly, now that pre-compiled headers have been introduced. Pre-compiled headers allow the system to import and reuse previously processed data declarations of global classes, interfaces, and type pools more quickly, both during the syntax check and when generating the program. This means it is no longer necessary to import program segments repeatedly. If the compiler does not find a pre-compiled header for the required program segment, it generates one and stores it in the program buffer ([PXA](ABENPXA_GLOSRY.html)).

The addition `WITH PRECOMPILED HEADERS` of the statement [`GENERATE REPORT`](ABAPGENERATE_REPORT.html) can now be used to speed up generation from within an ABAP program.

Data and types in includes of the form <...> were previously viewed as system objects and packed into a separate name space; however, this was ignored when the program was generated. For this reason, objects of this type could be hidden by global program definitions, so that it was unclear at runtime which definition was used. Now both generation and runtime handle system objects in the same way. Therefore in future, the following example will always produce the value 5.

include <SCREEN>. \\ndata SCREEN type I value 5. \\nwrite / SCREEN.

Previously, if an attempt was made to assign the highest negative integer value to a type I variable, in the form of the C literal '-2147483648', the system raised a catchable exception, `CX_SY_CONVERSION_OVERFLOW`. On the other hand, an assignment in the form of a numeric literal was accepted. Now both forms are supported, as the following example shows:

In the editing status of the dictionary, it is possible to set a DDIC database view to *read only*, so that ABAP programs cannot make any changes. Previously the editing status was only checked at runtime. Now a syntax error is produced when this situation is known statically.

In the statement [`GENERATE SUBROUTINE POOL`](ABAPGENERATE_REPORT.html), source code can now also be passed in an internal table of line type `string`.

DATA int TYPE i. \\nint = '-2147483648'. \\nint = -2147483648. \\nWRITE int. abenabap.html abennews.html abennews-6.html abennews-610.html