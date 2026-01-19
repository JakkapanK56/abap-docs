---
title: "ABAPWAIT_SHORTREF"
description: |
  ABAPWAIT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWAIT_SHORTREF.htm"
abapFile: "ABAPWAIT_SHORTREF.html"
keywords: ["ABAPWAIT", "SHORTREF"]
---

[Reference](ABAPWAIT_UP_TO.html)

``WAIT \{UP TO t SECONDS\}\     |\ \{FOR [ASYNCHRONOUS TASKS UNTIL [`log_exp`](ABENLOG_EXP_SHORTREF.html)\ [UP TO t SECONDS]]\            [MESSAGING CHANNELS UNTIL [`log_exp`](ABENLOG_EXP_SHORTREF.html)\ [UP TO t SECONDS]]\            [PUSH CHANNELS UNTIL [`log_exp`](ABENLOG_EXP_SHORTREF.html)\ [UP TO t SECONDS]]\}.``

Interrupts the execution of a program.

-   [`UP TO t SECONDS`](ABAPWAIT_UP_TO.html)\\
    Interrupts the execution of a program for (a maximum of) `t` seconds.
-   [`FOR ASYNCHRONOUS TASKS UNTIL log_exp`](ABAPWAIT_ARFC.html)\\
    Interrupts the execution of a program until the logical expression `log_exp` after a callback routine of an [asynchronous RFC](ABENASYNCHRONOUS_RFC_GLOSRY.html) is true.
-   [`FOR MESSAGING CHANNELS UNTIL log_exp`](ABAPWAIT_AMC.html)\\
    Interrupts the execution of a program until the logical expression `log_exp` after a receiving a message from [ABAP messaging channels](ABENABAP_MESSAGING_CHANNELS_GLOSRY.html) is true.
-   [`FOR PUSH CHANNELS UNTIL log_exp`](ABAPWAIT_APC.html)\\
    Interrupts the execution of a program until the logical expression `log_exp` after a receiving a message from [ABAP Push Channels](ABENABAP_PUSH_CHANNELS_GLOSRY.html) is true.

abenabap.html abenabap\_reference.html abenabap\_shortref.html