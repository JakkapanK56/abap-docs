---
title: "ABENNEWS-758-SYSTEM_CLASSES"
description: |
  ABENNEWS-758-SYSTEM_CLASSES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-758-SYSTEM_CLASSES.htm"
abapFile: "ABENNEWS-758-SYSTEM_CLASSES.html"
keywords: ["do", "while", "if", "method", "class", "internal-table", "ABENNEWS", "758", "SYSTEM", "CLASSES"]
---

[1\. System Classes for Numbers](#ABAP_MODIFICATION_1@4@)

[2. New Class `CL_ABAP_DIFF`](#ABAP_MODIFICATION_2@4@)

[3. New Methods in `CL_ABAP_TSTMP`](#ABAP_MODIFICATION_3@4@)

[4. New Method in `CL_ABAP_BEHV_AUX`](#ABAP_MODIFICATION_4@4@)

Two new system classes for numeric calculations are available:

The new class [`CL_ABAP_DIFF`](ABENCL_ABAP_DIFF.html) compares the content of internal tables and returns information about any differences found.

The new methods `MOVE_TRUNC`, `MOVE_TO_SHORT_TRUNC`, `ADD_TO_SHORT_TRUNC` and `SUBTRACTSECS_TO_SHORT_TRUNC` of system class [`CL_ABAP_TSTMP`](ABENCL_ABAP_TSTMP.html) round the fractional seconds of long UTC time stamps down while the existing methods `MOVE`, `MOVE_TO_SHORT`, `ADD_TO_SHORT` and `SUBTRACTSECS_TO_SHORT` round commercially. Since the latter might be unexpected, the new methods can be used now in order to preserve the integer part of a long time stamp.

Using the new method `GET_CURRENT_PHASE`, you get information about the current RAP transactional phase.

-   [`CL_ABAP_BIGINT`](ABENCL_ABAP_BIGINT_DOC.html) contains methods for calculations with any size of integer in ABAP.
-   [`CL_ABAP_RATIONAL`](ABENCL_ABAP_RATIONAL_DOC.html) contains methods for calculating with rational numbers without any precision loss.

abenabap.html abennews.html abennews-75.html abennews-758.html