---
title: "ABAPREPORT"
description: |
  ABAPREPORT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREPORT.htm"
abapFile: "ABAPREPORT.html"
keywords: ["if", "class", "data", "ABAPREPORT"]
---

[Short Reference](ABAPREPORT_SHORTREF.html)

``REPORT rep [[`list_options`](ABAPREPORT_LIST_OPTIONS.html)]``\\ 
           `[MESSAGE-ID mid]`\\ 
           ``[[`DEFINING DATABASE ldb`](ABAPREPORT_DEFINING.html)]``\\ 
           `[REDUCED FUNCTIONALITY].`

[1. `... MESSAGE-ID mid`](#ABAP_ADDITION_1@3@)

[2. `... REDUCED FUNCTIONALITY`](#ABAP_ADDITION_2@3@)

The statement `REPORT` introduces an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html). It must be the first statement of a standalone program after any [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) are resolved. The name `rep` must be specified directly. The optional additions [`list_options`](ABAPREPORT_LIST_OPTIONS.html) can be used to affect the [basic list](ABENBASIC_LIST_GLOSRY.html) of the program. A [message class](ABENMESSAGE_CLASS_GLOSRY.html) can be specified using `MESSAGE-ID`.

The addition [`DEFINING DATABASE`](ABAPREPORT_DEFINING.html) is used to define a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html), whereas `REDUCED FUNCTIONALITY` should only be used for [`PROGRAM`](ABAPPROGRAM.html).

This addition specifies a message class `mid` that allows the use of short forms of the statement [`MESSAGE`](ABAPMESSAGE.html) in the program in which only the message type and message number are specified. The message class must be specified directly and appear in the column `ARBGB` of the database table `T100`. The variants of the statement [`MESSAGE`](ABAPMESSAGE.html) in which the message class is specified override the addition `MESSAGE-ID`.

Default setting of the message class `DEMO_FLIGHT` for a program.

This addition is only intended for use with the statement [`PROGRAM`](ABAPPROGRAM.html) in subroutine pools and is described [there](ABAPPROGRAM.html).

-   The keyword `PROGRAM` can also be replaced by the keyword [`REPORT`](ABAPPROGRAM.html). In executable programs, `PROGRAM` means the same as `REPORT` and can be used with its additions. As a rule, however, executable programs should only be introduced using `REPORT`.
-   Although it is not absolutely necessary to specify the name `rep`, the name of the ABAP program from the [repository](ABENREPOSITORY_GLOSRY.html) should always be used.

REPORT ... MESSAGE-ID demo\_flight. abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_program\_statement.html