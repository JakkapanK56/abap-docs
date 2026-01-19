---
title: "ABENNEWS-740_SP08-OTHERS"
description: |
  ABENNEWS-740_SP08-OTHERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740_SP08-OTHERS.htm"
abapFile: "ABENNEWS-740_SP08-OTHERS.html"
keywords: ["do", "if", "class", "data", "types", "ABENNEWS", "740", "SP08", "OTHERS"]
---

[1\. Constants for Maximum Lengths of Elementary Data Types](#ABAP_MODIFICATION_1@4@)

[2. Time Resolution in `WAIT UP TO`](#ABAP_MODIFICATION_2@4@)

[3\. Reference Documentation for ABAP Dictionary](#ABAP_MODIFICATION_3@4@)

From ABAP release 7.40, SP08, the system class `CL_ABAP_ELEMDESCR` contains the constants `TYPE_P_MAX_LENGTH`, `TYPE_P_MAX_DECIMALS`, `TYPE_C_MAX_LENGTH`, `TYPE_N_MAX_LENGTH`, and `TYPE_X_MAX_LENGTH` for the maximum lengths and decimal places of the generic elementary data types [`p`](ABENBUILTIN_TYPES_NUMERIC.html), [`c`](ABENBUILTIN_TYPES_CHARACTER.html), [`n`](ABENBUILTIN_TYPES_CHARACTER.html), and [`x`](ABENBUILTIN_TYPES_BYTE.html).

In ABAP release 7.40, SP08, the operand type of the operand `sec` of the statement [`WAIT UP TO`](ABAPWAIT_UP_TO.html) was changed from `i` to `f` and the time resolution changed from seconds to milliseconds. There is no longer any difference here from the variants [`WAIT FOR ASYNCHRONOUS TASKS`](ABAPWAIT_ARFC.html) and [`WAIT FOR MESSAGING CHANNELS`](ABAPWAIT_AMC.html).

Reference documentation for the most important ABAP Dictionary objects in the programming language is now available under the [ABAP Dictionary](ABENABAP_DICTIONARY.html) node in the ABAP keyword documentation.

abenabap.html abennews.html abennews-740.html abennews-740\_sp08.html