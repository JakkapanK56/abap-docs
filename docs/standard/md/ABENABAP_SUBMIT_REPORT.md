---
title: "ABENABAP_SUBMIT_REPORT"
description: |
  ABENABAP_SUBMIT_REPORT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SUBMIT_REPORT.htm"
abapFile: "ABENABAP_SUBMIT_REPORT.html"
keywords: ["if", "ABENABAP", "SUBMIT", "REPORT"]
---

[Executable programs](ABENEXECUTABLE_PROGRAM_GLOSRY.html) can only be executed directly from the perspective of the end user. Whenever an executable program is started using *System -> Services -> Reporting* or a [report transaction](ABENREPORT_TRANSACTION_GLOSRY.html), the statement [`SUBMIT`](ABAPSUBMIT.html) is executed internally. Executable programs are the only programs that can be called using `SUBMIT`.

When the statement `SUBMIT` is executed, an authorization check is performed using the [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html)\\ `S_PROGRAM` for the [authorization group](ABENAUTHORIZATION_GROUP_GLOSRY.html) specified in the [program properties](ABENPROGRAM_PROPERTY_GLOSRY.html).

-   [Flow of an Executable Program After `SUBMIT`](ABENREPORTING_PROCESS.html)
-   [`SUBMIT`](ABAPSUBMIT.html)

abenabap.html abenabap\_reference.html abenabap\_execution.html abenabap\_program\_call.html