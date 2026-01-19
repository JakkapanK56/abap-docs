---
title: "ABAPCOMMUNICATION_COMSTEP"
description: |
  ABAPCOMMUNICATION_COMSTEP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCOMMUNICATION_COMSTEP.htm"
abapFile: "ABAPCOMMUNICATION_COMSTEP.html"
keywords: ["if", "data", "types", "ABAPCOMMUNICATION", "COMSTEP"]
---

[Short Reference](ABAPCOMMUNICATION_SHORTREF.html)

`... \{INIT DESTINATION dest\}\    | ALLOCATE    | ACCEPT    |\ \{SEND BUFFER buf\}\    |\ \{RECEIVE BUFFER buf DATAINFO dat STATUSINFO stat\}\    | DEALLOCATE ...`

[1. `... INIT DESTINATION dest`](#ABAP_ALTERNATIVE_1@2@)

[2. `... ALLOCATE`](#ABAP_ALTERNATIVE_2@2@)

[3. `... ACCEPT`](#ABAP_ALTERNATIVE_3@2@)

[4. `... SEND BUFFER buf`](#ABAP_ALTERNATIVE_4@2@)

[5. `... RECEIVE BUFFER buf DATAINFO dat STATUSINFO stat`](#ABAP_ALTERNATIVE_5@2@)

[6. `... DEALLOCATE`](#ABAP_ALTERNATIVE_6@2@)

There are different alternatives for specifying `comstep`, each of which is responsible for a connection step.

The connection between the programs initialized by specifying `dest`. `dest` expects a [flat](ABENFLAT_GLOSRY.html) character-like data object of the length 8 that, when executing the statement, contains a value from the column `SDEST` of the DDIC database table `TXCOM`.

During initialization, the system automatically runs an authorization check on the [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html)\\ `S_CPIC`. The authorization can be checked before the connection is established using the function module `AUTHORITY_CHECK_CPIC`.

Establishes a connection to the partner identified in the previous addition `DESTINATION`. At the same time, a start request is passed to the partner, if it is a program.

This addition can be used to accept the established connection in a called partner program. After authentication, the called program is in receive status.

Sends data to the partner program. A data object can be specified for `buf`, for which all [flat](ABENFLAT_GLOSRY.html) elementary types are allowed and the memory requirement of 32000 bytes cannot be exceeded. If the statement `COMMUNICATION` is executed, the content of `buf` is passed to the partner program.

Receives data from the partner program. A data object can be specified for `buf`, for which all flat elementary types are allowed and the memory requirement of 32000 bytes cannot be exceeded. When the statement `COMMUNICATION` is executed, the content of `buf` is taken from the partner program.

After the execution of the statement, the data object `dat` contains information about whether the data is sent completely, and the content of the data object `stat` indicates whether the current program is in send or receive mode. Only byte-like data objects are allowed for `dat` and `stat`, the length should not be less than 4 bytes. The encoding for the values in `dat` and `stat` can be taken from the [include program](ABENINCLUDE_PROGRAM_GLOSRY.html)\\ `RSCPICDF`. Here, data objects with a descriptive name and [start values](ABENSTART_VALUE_GLOSRY.html) are declared which can be compared with `dat` and `stat`.

A connection step opened with `RECEIVE` must be followed by a connection step opened with `SEND`.

The connection is closed, and all memory areas are released.

-   A connection step opened with `SEND` must be followed by a connection step opened with `RECEIVE`.
-   Information loss, for example due to different number formats of the communication partners, is avoided if only character-like types are used for transferring the data. Furthermore, the data is only transferred completely if the sending and receiving buffers have the same structure and length.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenextern\_obsolete.html abenabap\_cpic.html abapcommunication.html