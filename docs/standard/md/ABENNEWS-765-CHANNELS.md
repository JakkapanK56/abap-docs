---
title: "ABENNEWS-765-CHANNELS"
description: |
  ABENNEWS-765-CHANNELS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-765-CHANNELS.htm"
abapFile: "ABENNEWS-765-CHANNELS.html"
keywords: ["if", "method", "class", "ABENNEWS", "765", "CHANNELS"]
---

[1\. Length Restriction for AMC and APC](#ABAP_MODIFICATION_1@4@)

[2\. Suppressing AMC Messages](#ABAP_MODIFICATION_2@4@)

The length restriction for messages that can be sent using [AMC](ABENAMC.html) has been extended from approximately 30,000 bytes to approximately 1 MB. This limit can be increased even further by changing the profile parameter `rdisp/long_messages/max_length`.

The same applies to [APC](ABENAPC.html) messages, which are sent with an attached client object using the interface `IF_APC_WSP_CLIENT_CONN_ATTACH`.

The new parameter `I_SUPPRESS_ECHO` of the method `CREATE_MESSAGE_PRODUCER` of the class `CL_AMC_CHANNEL_MANAGER` can be used to control whether [AMC](ABENAMC.html) messages can be sent to the current ABAP session or not.

abenabap.html abennews.html abennews-76.html abennews-765.html