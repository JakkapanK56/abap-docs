---
title: "ABENNEWS-762-RFC"
description: |
  ABENNEWS-762-RFC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-762-RFC.htm"
abapFile: "ABENNEWS-762-RFC.html"
keywords: ["do", "if", "method", "class", "ABENNEWS", "762", "RFC"]
---

[1\. Dynamic Destinations in RFC](#ABAP_MODIFICATION_1@4@)

[2\. Point-to-Point Communication for AMC](#ABAP_MODIFICATION_2@4@)

[3\. Enhancements for APC](#ABAP_MODIFICATION_3@4@)

[4\. Forbidden Accesses for APC](#ABAP_MODIFICATION_4@4@)

The methods of class `CL_DYNAMIC_DESTINATION` are used to manage dynamic [RFC destinations](ABENRFC_DESTINATION.html) in ABAP release 7.62 and higher. In particular, the method `CREATE_RFC_DESTINATION` makes it possible to create a dynamic destination, which can be used in the current sessions for RFCs.

Alongside the general publish-and-subscribe mechanism, a point-to-point communication option was introduced for the [ABAP messaging channels (AMC)](ABENAMC.html). Here, a sender object addresses exactly one receiver session. The send action can be either synchronous or asynchronous. This is done using the new factory method `CREATE_MESSAGE_PRODUCER_BY_ID` of the class `CL_AMC_CHANNEL_MANAGER`. The ID of a receiver session is provided by the method `GET_CONSUMER_SESSION_ID` of the same class.

The framework for [ABAP channels (APC)](ABENAPC.html) was expanded as follows:

See also the [ABAP Channels](https://help.sap.com/docs/ABAP_PLATFORM_NEW/05d041d3df1a4595a3c45f57c15e2325/18ef61f6415743658407d4d17f06e950) documentation in SAP Help Portal.

Up to now, any repeated attempts to bind a push channel to a bound messaging channel or any attempts to remove a nonexistent binding were ignored. From ABAP release 7.62, both situations raise an exception.

-   Alongside communication using the WebSocket protocol, communication using TCP sockets is now also possible.
-   An AS ABAP used as an APC server can now also stateful. Until now, only stateless servers were possible.
-   An AS ABAP as operate as an APC client.
-   Clients known as detached clients make it possible to open an `APC` connection to a stateless or stateful APC server and then detach it again immediately so that it can be accessed using attached clients.
-   A connection handle can be used to access existing APC connections across the entire system.
-   A [non-blocking mode](ABENAPC_NON_BLOCKING_MODEL.html) was introduced for stateful APC applications.
-   The class `CL_APC_TIMER_MANAGER` creates timer managers that can be accessed using the interface `IF_APC_TIMER_MANAGER`. A timer manager makes it possible to start and stop a timer in stateful APC applications in which the statement `WAIT` is not allowed. The interface `IF_APC_TIMER_HANDLER` is used to handle timer events.

abenabap.html abennews.html abennews-76.html abennews-762.html abennews-762-745.html