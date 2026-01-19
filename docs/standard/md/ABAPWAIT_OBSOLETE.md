---
title: "This statement works in the same way as"
description: |
  `WAIT FOR ASYNCHRONOUS TASKS(ABAPWAIT_ARFC.html) UNTIL logexp UP TO sec SECONDS.` The complete form using `FOR ASYNCHRONOUS TASKS` should always be used. This addition expresses that an asynchronous RFC(ABENASYNCHRONOUS_RFC_GLOSRY.html) is expected and distinguishes the statement from `WAIT F
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWAIT_OBSOLETE.htm"
abapFile: "ABAPWAIT_OBSOLETE.html"
keywords: ["ABAPWAIT", "OBSOLETE"]
---

[Short Reference](ABAPWAIT_SHORTREF.html)

`WAIT UNTIL [log_exp](ABENLOGEXP.html)\ [UP TO sec SECONDS].`

This statement works in the same way as

`[WAIT FOR ASYNCHRONOUS TASKS](ABAPWAIT_ARFC.html) UNTIL logexp [UP TO sec SECONDS].`

The complete form using `FOR ASYNCHRONOUS TASKS` should always be used. This addition expresses that an [asynchronous RFC](ABENASYNCHRONOUS_RFC_GLOSRY.html) is expected and distinguishes the statement from [`WAIT FOR MESSAGING CHANNELS`](ABAPWAIT_AMC.html) or [`WAIT FOR PUSH CHANNELS`](ABAPWAIT_APC.html), which are waiting for messages from [ABAP Messaging Channels](ABENABAP_MESSAGING_CHANNELS_GLOSRY.html) or [ABAP Push Channels](ABENABAP_PUSH_CHANNELS_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenextern\_obsolete.html abenwait\_obsolete.html