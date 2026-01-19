---
title: "ABENNEWS-46-SONSTIGES"
description: |
  ABENNEWS-46-SONSTIGES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-46-SONSTIGES.htm"
abapFile: "ABENNEWS-46-SONSTIGES.html"
keywords: ["select", "loop", "do", "if", "catch", "method", "data", "internal-table", "ABENNEWS", "SONSTIGES"]
---

[1. `LOOP` in Extracts](#ABAP_MODIFICATION_1@4@) 

[2\. Time Zone Handling in RFC Calls](#ABAP_MODIFICATION_2@4@)

[3\. Bit Operations with Differing Operand Lengths](#ABAP_MODIFICATION_3@4@)

[4. Multiple-Field `ASSIGN` on Method Parameters](#ABAP_MODIFICATION_4@4@) 

[5\. Obsolete Read Access to Database Tables](#ABAP_MODIFICATION_5@4@)

[6\. Error Handling for File Statements](#ABAP_MODIFICATION_6@4@)

As with internal tables, `SY-SUBRC` is now set to 4 in an extract if, in a [`LOOP ... ENDLOOP`](ABAPLOOP-.html), the loop pass is not executed.

RFC calls in AS ABAP where the default time zone differs from the personal time zone of the user are now executed using the caller's personal time zone.

If operands with differing lengths are joined using statements such as [`COMPUTE x = bitexp.`](ABAPCOMPUTE_BIT.html), all operands are standardized to the length of the longest operand involved. The shorter operands are padded with trailing `HEX 0` characters. Until now, the length of the target field was respected, but now only the operands of the right side are considered in the calculation.

[`ASSIGN f TO <fs>`](ABAPASSIGN.html) statements on method parameters passed by reference that exceed the length of the parameter are now forbidden. This used to be allowed as long as the statement did not exceed the segment length.

When database tables are accessed using the statements [`READ TABLE dbtab`](ABAPREAD_TABLE_DBTAB.html) and [`LOOP AT dbtab`](ABAPLOOP_AT_DBTAB.html), a runtime error occurs if the key of the database table contains components that do not have a character-like type. Both statements are obsolete anyway, and can be replaced using appropriate [`SELECT`](ABAPSELECT.html) statements.

All file statements now include error handling, which means that any errors detected raise a catchable exception. Previously, only some statements set a return code in the field `SY-SUBRC`.

abenabap.html abennews.html abennews-4.html abennews-46a.html