---
title: "ABAPCOMMUNICATION_OPTIONS"
description: |
  ABAPCOMMUNICATION_OPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCOMMUNICATION_OPTIONS.htm"
abapFile: "ABAPCOMMUNICATION_OPTIONS.html"
keywords: ["if", "case", "try", "data", "ABAPCOMMUNICATION", "OPTIONS"]
---

[Short Reference](ABAPCOMMUNICATION_SHORTREF.html)

`... [RETURNCODE rc]`\\ 
    `[LENGTH leng]`\\ 
    `[RECEIVED rec]`\\ 
    `[HOLD].`

[1. `... RETURNCODE rc`](#ABAP_ADDITION_1@3@)

[2. `... LENGTH leng`](#ABAP_ADDITION_2@3@)

[3. `... RECEIVED rec`](#ABAP_ADDITION_3@3@)

[4. `... HOLD`](#ABAP_ADDITION_4@3@)

Further additions for the statement `COMMUNICATION`.

This addition can be specified for any communication steps and receives the return code in `rc`. `rc` expects the data type `i`. The meaning of the return codes is encoded in the [include program](ABENINCLUDE_PROGRAM_GLOSRY.html)\\ `RSCPICDF`. Here, data objects with descriptive names and [start values](ABENSTART_VALUE_GLOSRY.html) are declared and can be compared with `rc`. The following table contains a list of possible return values.

The same return codes are also written to the system field `sy-subrc`.

This addition can only be specified in the communication steps `SEND` and `RECEIVE`. As a result, the data buffer `buffer` is only sent or received in the length `leng`. The length `leng` expects a data object of the data type `i`.

This addition can only be specified for the communication step `RECEIVE`. The data object `rec` contains the number of bytes received by the partner program. Only byte-like data objects of length 4 are allowed for `rec`.

This addition can only be specified for the communication step `RECEIVE`. It prevents a change of the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) when receiving data to avoid the possible loss of the [database cursor](ABENDATABASE_CURSOR_GLOSRY.html). In this case, the current work process waits until all data has been received.

`rc` **Data Object from `RSCPICDF`** 0 `cm_ok` 1 `cm_allocate_failure_no_retry` 2 `cm_allocate_failure_retry` 3 `cm_conversation_type_mismatch` 6 `cm_security_not_valid` 8 `cm_sync_lvl_not_supported_pgm` 9 `cm_tpn_not_recognized` 10 `cm_tp_not_available_no_retry` 11 `cm_tp_not_available_retry` 12 `cm_deallocated_abend` 13 `cm_deallocated_normal` 14 `cm_parameter_error` 15 `cm_product_specific_error` 16 `cm_program_error_no_trunc` 18 `cm_program_error_no_trunc` 19 `cm_program_error_trunc` 26 `cm_resource_failure_no_retry` 27 `cm_resource_failure_retry` 28 `cm_unsuccessful` abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenextern\_obsolete.html abenabap\_cpic.html abapcommunication.html