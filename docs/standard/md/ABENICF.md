---
title: "ABENICF"
description: |
  ABENICF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENICF.htm"
abapFile: "ABENICF.html"
keywords: ["update", "do", "if", "method", "class", "data", "ABENICF"]
---

**This topic including all subnodes are out of maintenance. There is no guarantee that the information is complete and up-to-date. No active support is provided.**

An [AS ABAP](ABENAS_ABAP_GLOSRY.html) can act as a server as well as a client in the internet using the internet protocols HTTP, HTTPS, and SMTP. The technical basis for the communication with the internet is provided by the ABAP interfaces and classes of the [Internet Communication Framework (ICF)](ABENINTERNET_CON_FRA_GLOSRY.html). Any ABAP applications that communicate with the internet such as the OData-based [SAP Gateway](ABENSAP_GATEWAY_GLOSRY.html) or the [RAP runtime framework](ABENRAP_RUNT_FRAMEWORK_GLOSRY.html) are based on the ICF. ABAP Web Services or the ABAP REST Library are also based on ICF.

The current topic provides a brief introduction to the most important facts. The complete documentation of ICF is available under [Internet Communication Framework](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/48D40ACA1904154EE10000000A421937).

A service of the AS ABAP that can be accessed from the internet must be published as a node of the AS ABAP service tree. The service tree is maintained with the service editor (transaction `SICF`). Such a service is a transportable repository object that determines the properties of the service.

The initial node of the service tree stands for the AS ABAP Web address consisting of the host and the port. The position of the node in the tree determines the further URL path required to call a specific service. A URL can contain form fields after the actual address part, which are forwarded to ABAP by ICF.

HTTP requests to a service are handled by HTTP handler classes. At least one global ABAP class that implements the interface `IF_HTTP_EXTENSION` must be assigned to a service in the service tree. When a request is sent to the service, ICF creates a HTTP request handler as an instance of this class. The parameter `SERVER` of the interface method `HANDLE_REQUEST` provides access to a server object with the interface `IF_HTTP_SERVER`. The attributes and methods of the server object provide properties of the request, such as its address or the individual content of the form fields of the URL. The attributes `REQUEST` and `RESPONSE` refer to objects with the interfaces `IF_HTTP_REQUEST` or `IF_HTTP_RESPONSE`.

An HTTP/HTTPS request in an HTTP request handler is handled as [ICF](ABENICF_PROCESSING_GLOSRY.html) in a separate [ICF session](ABENICF_SESSION_GLOSRY.html). Special URL form fields, such as `sap-user`, `sap-client`, or `sap-language` that start with the prefix `sap-` are evaluated during the logon to the ICF session. Certain statements, like [`MESSAGE`](ABAPMESSAGE.html) or [`BREAK-POINT`](ABAPBREAK-POINT.html), are handled differently in an ICF session than, for example, in dialog processing. External breakpoints can be set to debug programs in an ICF session.

An example of a `HTTP` service is the Web version of this documentation itself.

If the proxy setting for an HTTP client is configured appropriately in transaction `SICF`, ABAP programs can send requests to the Internet using ICF and receive responses. This is done using client objects from the class `CL_HTTP_CLIENT`, which implements the interface `IF_HTTP_CLIENT`. A client object can be created using a factory method from this class, which associates it with a Web address. Like a server object, the attributes `REQUEST` and `RESPONSE` reference objects that implement the interfaces `IF_HTTP_REQUEST` or `IF_HTTP_RESPONSE` that can be used to send requests and receive responses.

-   Each ICF communication step leads to a [database commit](ABENDATABASE_COMMIT_GLOSRY.html), except during [update](ABENUPDATE_GLOSRY.html).
-   HTTP/HTTPS communication is not bidirectional, which means that one partner is always the client and one partner is always the server. Bidirectional communication is possible using the WebSocket protocol or TCP with [ABAP Push Channels](ABENAPC.html).

abenabap.html abenabap\_reference.html