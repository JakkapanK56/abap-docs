---
title: "ABENPCP"
description: |
  ABENPCP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPCP.htm"
abapFile: "ABENPCP.html"
keywords: ["do", "if", "method", "class", "data", "ABENPCP"]
---

**This topic is out of maintenance. There is no guarantee that the information is complete and up-to-date. No active support is provided.**

The [Push Channel Protocol](ABENPUSH_CHANNEL_PROTOCOL_GLOSRY.html) (PCP) is a communications format specified by SAP for exchanging messages between ABAP programs and between ABAP programs and external interfaces. A message in Push Channel Protocol is similar to a simple `HTTP` message. It basically consists of header fields for metadata and a message body.

The following APIs are available for handling the Push Channel Protocol:

Currently, the Push Channel Protocol is used by the following ABAP frameworks:

-   A header field is a name-value pair separated by a colon (`:`) and followed by a line feed.
-   The message body can be either character-like or byte-like.

-   The encoding of a character-like message body is [UTF-8](ABENUTF8_GLOSRY.html). It can contain line feeds (`\\n`).
-   The encoding of a byte-like message body is [Base64](ABENBASE64_GLOSRY.html).

-   The escape character for the special characters `:`, `\\n`, and `\\` is a prefixed `\\`.

-   On AS ABAP, the class `CL_AC_MESSAGE_TYPE_PCP` and the interface `IF_AC_MESSAGE_TYPE_PCP` form an API that handles PCP messages.
-   In [SAPUI5](ABENSAPUI5_GLOSRY.html), the class [`sap.ui.core.ws.SapPcpWebSocket`](https://openui5.hana.ondemand.com/#/api/sap.ui.core.ws.SapPcpWebSocket) provides the necessary methods.
-   The JavaScript file `sap-pcp-websocket.js` can be loaded from the `MIME` repository as an API for other clients.

-   [ABAP Channels](ABENABAP_CHANNEL_GLOSRY.html)

-   PCP messages are an optional message type for [AMC](ABENAMC.html) messages
-   PCP messages are a possible subprotocol of the WebSocket protocol for [APC](ABENAPC.html) messages.

-   [ABAP daemons](ABENABAP_DAEMON_GLOSRY.html)
-   PCP messages are the only way of communicating between ABAP programs and [ABAP daemons](ABENABAP_DAEMON.html). ABAP daemons also have access to data in PCP format in the [ABAP daemon memory](ABENABAP_DAEMON_MEMORY_GLOSRY.html).

-   The Push Channel Protocol is recommended for AMC messages and APC messages. They provide a unified format and make it possible to send and evaluate context information as meta data in the header fields in addition to the message itself.
-   The methods of the SAPUI5 class `sap.ui.core.ws.SapPcpWebSocket` and the JavaScript file `sap-pcp-websocket.js` use an optional parameter to support multiplexing of virtual connections using a real WebSocket connection when PCP is used. For Web applications, it is advisable to use virtual connections, since many Web browsers only support a limited number of WebSocket connections. For APC applications that use the Push Channel Protocol, the use of multiplexing is transparent, which means that virtual connections can be constructed for existing APC applications without changes.
-   For detailed information about PCP, see the [ABAP Channels](https://help.sap.com/docs/ABAP_PLATFORM_NEW/05d041d3df1a4595a3c45f57c15e2325/18ef61f6415743658407d4d17f06e950) documentation in the SAP Help Portal.

abenabap.html abenabap\_reference.html abenabap\_channel\_daemon.html