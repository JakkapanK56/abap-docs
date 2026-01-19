---
title: "ABENNEWS-740_SP08-ABAP_CHANNELS"
description: |
  ABENNEWS-740_SP08-ABAP_CHANNELS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740_SP08-ABAP_CHANNELS.htm"
abapFile: "ABENNEWS-740_SP08-ABAP_CHANNELS.html"
keywords: ["do", "if", "method", "class", "data", "ABENNEWS", "740", "SP08", "ABAP", "CHANNELS"]
---

[1\. Protocol for ABAP Messaging Channels](#ABAP_MODIFICATION_1@4@)

[2\. New Classes and Interfaces for ABAP Push Channels](#ABAP_MODIFICATION_2@4@)

[3\. Subprotocol for ABAP Push Channels](#ABAP_MODIFICATION_3@4@)

From ABAP release 7.40, SP05, [ABAP Messaging Channels (AMC)](ABENAMC.html) can be used to send and receive messages in SAP's own [Push Channel Protocol (PCP)](ABENPUSH_CHANNEL_PROTOCOL_GLOSRY.html). This uses the message type `PCP` and the class `CL_AC_MESSAGE_TYPE_PCP` for serializing and deserializing ABAP data. The documentation for [AMC](ABENAMC.html) and the associated [executable examples](ABENAMC_ABEXAS.html) have been revised to reflect this.

The previous classes and interfaces in the [APC frameworks](ABENAPC.html), introduced using the prefixes `IF_APC_WS_` and `CL_APC_WS_`, are replaced by the (identically named) classes and interfaces with the prefixes `IF_APC_WSP_` and `CL_APC_WSP_`. Unlike the previous classes and interfaces, the new classes and interfaces also support optional subprotocols of the WebSocket protocol.

It is recommended that the new classes and interfaces are used. When new ABAP push channels are created, the APC handler class becomes the subclass of the new class `CL_APC_WSP_EXT_STATELESS_BASE` automatically. The previous classes and interfaces have been kept for compatibility reasons but can be switched easily to the new classes and interfaces. New functions, such as the method `ON_ACCEPT` of the interface `IF_APC_WSP_EXTENSION`, are accepted only for the new classes and interfaces.

A subprotocol can be specified when creating an [ABAP Push Channel (APC)](ABENAPC.html). Currently, SAP's own [Push Channel Protocol (PCP)](ABENPUSH_CHANNEL_PROTOCOL_GLOSRY.html) can be specified. The APC framework contains new classes and interfaces for handling messages in the PCP format. The APC handler class of an ABAP push channel with PCP is generated accordingly. ABAP push channels can be linked with an [ABAP Messaging Channel (AMC)](ABENAMC.html) with the appropriate message type, `PCP`. For WebSocket clients, the API for PCP is provided as a JavaScript file in the MIME repository.

abenabap.html abennews.html abennews-740.html abennews-740\_sp08.html