---
title: "ABENAPC"
description: |
  ABENAPC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAPC.htm"
abapFile: "ABENAPC.html"
keywords: ["update", "do", "while", "if", "case", "method", "class", "data", "types", "ABENAPC"]
---

Each communication step using ABAP Push Channels, such as sending a message or responding to an event, can trigger the change of the [work process](ABENWORK_PROCESS_GLOSRY.html) and usually triggers a [database commit](ABENDATABASE_COMMIT_GLOSRY.html).

ABAP Push Channels (APC) enable bidirectional communication with the Internet for ABAP programs using:

Both communication protocols are based on the [transmission control protocol (TCP)](http://tools.ietf.org/html/rfc793), which enables push communication, unlike HTTP. With the traditional pull principle, each response of a server requires a preceding client request, however with the push principle, it is enough to have an open connection between client and server, used by the server to pass information as soon as it becomes available.

ABAP Push Channels can be used to make AS ABAP into a WebSocket server and a WebSocket client. The APC framework in AS ABAP makes the following scenarios possible:

All scenarios can be implemented for both protocols, WebSocket and TCP socket. The associated class-based APIs in AS ABAP for both protocols are very similar. For an AS ABAP as APC server, [ABAP push channels](ABENABAP_PUSH_CHANNEL_GLOSRY.html) need to be created as repository objects. A service in the [ITF](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/48D40ACA1904154EE10000000A421937) service tree and a special [APC handler class](ABENAPC_HANDLER_CLASS_GLOSRY.html) are then assigned to these objects. A WebSocket server can be addressed directly using a HTTP/HTTPS query, whereas corresponding TCP ports need to be configured for TCP sockets.

For both protocols, simple character and byte strings can be used as a format for messages. In the case of the WebSocket protocol, SAP's [Push Channel Protocol (PCP)](ABENPUSH_CHANNEL_PROTOCOL_GLOSRY.html) should also be used. For the WebSocket protocol, it is still possible to associate ABAP Push Channels with [ABAP Messaging Channels (AMC)](ABENAMC.html) to make AS ABAP communication with the Internet independent of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html).

To implement a stateless or stateful APC server on an AS ABAP, an [ABAP push channel](ABENABAP_PUSH_CHANNEL_GLOSRY.html) must be created as a repository object and an associated [APC handler class](ABENAPC_HANDLER_CLASS_GLOSRY.html) must be implemented.

An [ABAP push channel](ABENABAP_PUSH_CHANNEL_GLOSRY.html) defined as a [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) must exist for each APC server application. ABAP Push Channels can be created in the [Repository Browser](ABENREPOSITORY_BROWSER_GLOSRY.html) in the ABAP Workbench by opening the context menu of a package and choosing *Connectivity*. The `Connectivity Browser` of the Object Navigator provides another access option. To open the Object Navigator for APCs, transaction `SAPC` can be used.

When a push channel is created, either WebSocket or TCP socket must be defined as the *connection type*. The server must also be defined as stateless or stateful. On stateful servers, the context and, more specifically, the attributes of the APC handler are preserved each time the server is accessed by a client.

Each push channel has two further repository objects that are generated when a push channels is created:

An optional subprotocol of the WebSocket protocol can be assigned to a push channel that uses the WebSocket protocol. Currently, SAP's own [Push Channel Protocol (PCP)](ABENPUSH_CHANNEL_PROTOCOL_GLOSRY.html) can be assigned. The generated APC handler class inherits from a different superclass, depending on the protocol used, and implements other interfaces that enable specific access to the protocol.

See the ABAP push channels `DEMO_APC`, `DEMO_APC_PCP`, and `DEMO_APC_PCP_STATEFUL` in the package `SABAPDEMOS`. All three use the WebSocket protocol. `DEMO_APC` is stateless and does not use a subprotocol. `DEMO_APC_PCP` is stateless and uses the [Push Channel Protocol (PCP)](ABENPUSH_CHANNEL_PROTOCOL_GLOSRY.html) as a subprotocol. `DEMO_APC_PCP_STATEFUL` is like `DEMO_APC_PCP` but is stateful.

The APC handler class of each ABAP push channel inherits from one of the following superclasses, depending on its attributes:

All superclasses contain abstract interface methods `ON_START` and `ON_MESSAGE` that must be redefined as application-specific methods:

Further optional interface methods, such as `ON_ACCEPT`, `ON_CLOSE`, and `ON_ERROR` can be implemented to react to the corresponding events. More particularly, `ON_ACCEPT` can be used to decide whether an APC connection is opened.

The APC handler classes for the TCP socket protocol have an additional method `ON_CONNECTION_SETUP` from the interface `IF_APC_TCP_SERVER_CONFIG` in which the TCP framework structure must be defined. Here, a TCP framework type and a value for this type can be specified using constants of the interface `IF_APC_TCP_FRAME_TYPES`. The TCP framework structure can be determined using a terminator character or a length.

An APC message in an APC handler class is handled as [APC processing](ABENAPC_PROCESSING_GLOSRY.html) in a separate [APC session](ABENAPC_SESSION_GLOSRY.html). Here, certain statements, like [`MESSAGE`](ABAPMESSAGE.html) or [`BREAK-POINT`](ABAPBREAK-POINT.html), are handled differently than, for example, in dialog processing. External breakpoints can be set to debug programs during APC processing. In stateful APC processing, the program is executed in [non-blocking mode](ABENAPC_NON_BLOCKING_MODEL.html), where all statements are forbidden that could prevent inbound messages from being received.

See the APC handler class `CL_APC_WS_EXT_DEMO_APC` for the ABAP push channel `DEMO_APC` or `CL_APC_WSP_EXT_DEMO_APC_PCP` for the ABAP push channel `DEMO_APC_PCP`. The APC handler class `CL_APC_WSP_EXT_DEMO_APC_PCP_ST` for the ABAP push channel `DEMO_APC_PCP_STATEFUL` calls the identically named methods of `CL_APC_WSP_EXT_DEMO_APC_PCP`. Here, an object of the class is created in the method `ON_ACCEPT`. The executable example under [AS ABAP as WebSocket Server](ABENAPC_ABEXA.html) creates a Web site that accesses these APC services as a client.

The functions of APC clients in an AS ABAP are implemented in handler classes that include the following interfaces:

The interface methods `ON_OPEN`, `ON_MESSAGE`, `ON_CLOSE`, and `ON_ERROR` can be implemented in suitable ways in the handler classes. `ON_OPEN` and `ON_CLOSE` are executed when opening and closing a connection, whereas `ON_MESSAGE` is raised the next time messages from the server cause the work process to be switched. The attribute `MESSAGE` can be accessed in `ON_MESSAGE`. When a method like this is being processed, no [database commit](ABENDATABASE_COMMIT_GLOSRY.html) can be executed, implicitly or explicitly, since this causes the runtime error `APC_ILLEGAL_STATEMENT`.

The following classes are used to instantiate the actual client objects:

The address of the required server, a reference to the hander object, and the subprotocol, if necessary, are passed to these methods. In the case of the TCP socket protocol, the TCP framework structure must be defined by a terminator character or a length. Reference variables of the type `IF_APC_WSP_CLIENT` that point to a client object with the following interface methods are returned:

When an APC message is sent, messages can be received by the server in the client session. This requires that the current session be in a wait state, that is, rolled out by a change of work process. Messages directed to the client that are received by the AS ABAP during the wait state call the method `ON_MESSAGE` of the handler object when the session is rolled in. The work process can be switched explicitly or implicitly:

Like in AS ABAP as an APC client, detached APC clients open a connection from an [AS instance](ABENAS_INSTANCE_GLOSRY.html) to an APC server and detach it again immediately. Either the same AS ABAP or another can then attach itself to this connection as an attached APC client. The AS ABAP that opened the connection plays the role of an APC server as a detached client. This server can be stateless or stateful.

As in an APC client, a detached client requires handler classes with the interfaces `IF_APC_WSP_EVENT_HANDLER` or `IF_APC_WSP_EVENT_HANDLER_PCP`. In this case, however, only the method `ON_OPEN` is called and must be implemented accordingly. In the method `ON_OPEN`, the method `GET_CONNECTION_ATTACH_HANDLE` of the interface `IF_APC_WSP_SERVER_CONTEXT` can be used to get a connection handle for the detached client from the context object. This can then be used to connect with an attached client. Here, a security rule must be defined that specifies whether only sessions with the same client and user or only the current program can operate as an attached client in the same client.

The following classes are used to instantiate the actual detached client objects:

The methods `CREATE_...` have the same semantics as in a regular APC client and connect to an APC server.

The interface `IF_APC_WSP_CLIENT_CONN_DETACH` is used to access a detached client object. Once a connection is defined with a stateless or stateful APC, it is opened and then immediately detached using the method `CONNECT_AND_DETACH`. This executes the method `ON_OPEN`, which gets a connection handle for the connection using the context object.

To connect an AS ABAP with the detached client as an attached client, the method `ATTACH` of the classes `CL_APC_WSP_CLIENT_CONN_MANAGER` or `CL_APC_TCP_CLIENT_CONN_MANAGER` above is used to create attached client objects. Here, the connection handle for the connection must be passed. This can take place in the current session or in a different session. The interface `IF_APC_WSP_CLIENT_CONN_ATTACH` can be used to access an attached client object. As in regular client objects, messages can be sent using the message manager. It is not possible, however, to create a connection with a handler class to use [`WAIT FOR PUSH CHANNELS`](ABAPWAIT_APC.html) to wait for messages. Any connections to detached clients that are no longer needed should be closed using the method `CLOSE` of the attached client object.

On its own, the APC framework enables a WebSocket to communicate with exactly one [AS instance](ABENAS_INSTANCE_GLOSRY.html). To make communication independent of the current AS instance, these can be linked using [ABAP Messaging Channels](ABENAMC.html). Here, a push channel can be linked with an AMC consumer for a specific ABAP Messaging Channel with a suitable message type. This is done in the implementation of its APC handler class using the method `BIND_AMC_MESSAGE_CONSUMER` of the interface `IF_APC_WSP_BINDING_MANAGER` of one of the binding managers created for this purpose. Messages sent using this ABAP Messaging Channel are then handled automatically as APC messages. The APC framework wraps the required methods of the AMC framework. The only prerequisite is that the APC handler class is authorized to bind consumers and to send messages in the messaging channel used. The association with the AMC consumer can be removed explicitly using the method `UNBIND_AMC_MESSAGE_CONSUMER` of the binding manager. Any attempts to remove a nonexistent association raise an exception.

An AS ABAP can send a message to an APC connection with which it is not linked directly as long as it knows the connection handle for this connection. The APC connection can exist on the same AS instance or on a different AS instance. The APC handler class of the connection can use the method `GET_CONNECTION_ATTACH_HANDLE` of the interface `IF_APC_WSP_SERVER_CONTEXT` to get its connection handle from the context object. Here, a security rule must be defined that defines whether only sessions with the same client and user or only the current program can access the connection in the same client.

A program that knows the connection handle and meets the prerequisites can use the method `ATTACH` of the classes `CL_APC_WSP_CLIENT_CONN_MANAGER` or `CL_APC_TCP_CLIENT_CONN_MANAGER` to create an access object. These are the same methods as for creating an attached client for a detached client and the access object has the corresponding attributes. Its message manager can be used to create messages and send them to the APC connection.

[System-Wide Access](ABENAPC_CONNECT_VIA_HANDLE_ABEXA.html)

For the ABAP push channel, a virus scan profile can be specified for outbound and inbound messages. This profile is used for checks using the virus scan interface (VSI).

Furthermore, WebSocket messages can only be handled by default if the WebSocket object is created using a file or website from the same address or domain. In other cases, allowed addresses or domains must be created using transaction `SAPC_CROSS_ORIGIN` in the table `APC_CROSS_ORIGIN`. Authorization for the fields of authorization object `S_APC_ORIG` is required.

Error situations in sender and receiver programs, such as violations of rules set by the properties of a push channel, raise exceptions of the class `CX_APC_ERROR`.

The existing test and analysis tools, such as the [ABAP Debugger](ABENABAP_DEBUGGER_GLOSRY.html), [runtime analysis](ABENRUNTIME_ANALYSIS_GLOSRY.html), or [performance trace](ABENPERFORMANCE_TRACE_GLOSRY.html), can be used as usual for programs running on AS ABAP when sending and receiving APC messages.

An overview of all APC connections on an AS ABAP can be found in transaction `SMWS`. Any surplus connections can also be closed here.

Detailed information about APC can be found in the [ABAP Channels](https://help.sap.com/docs/ABAP_PLATFORM_NEW/05d041d3df1a4595a3c45f57c15e2325/18ef61f6415743658407d4d17f06e950) documentation in SAP Help Portal.

-   WebSockets
-   TCP sockets

-   An [AS ABAP](ABENAS_ABAP_GLOSRY.html) can use the [WebSocket](http://tools.ietf.org/html/rfc6455) protocol to communicate with clients and servers that support this protocol. All standard Web browsers, for example, support the WebSocket protocol. One example of clients are appropriately programmed Web pages in browsers that support WebSockets.
-   An [AS ABAP](ABENAS_ABAP_GLOSRY.html) can use TCP sockets directly using TCP/IP packets to communicate with clients and servers that do not support the WebSocket protocol. These can be, for example, embedded systems or programmable logic controllers (PLC). Direct communication is hence possible between ABAP programs and *intelligent things* in the Internet of Things (IoT) or devices used to control and monitor machines.

-   AS ABAP as an APC server

-   stateless
-   stateful

-   AS ABAP as APC client
-   AS ABAP as a detached APC client

-   stateless
-   stateful

-   A detached client is an AS ABAP [AS instance](ABENAS_INSTANCE_GLOSRY.html) that opens a connection to an APC server, is detached, and can then itself be addressed as an APC server.

-   A node in the service tree of [ICF](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/48D40ACA1904154EE10000000A421937), visible in transaction `SICF` (the service editor). Like all other ICF services, this node represents the Web address of the push channel. This node can be activated and deactivated in the service editor, but not tested directly.

-   In the case of the WebSocket protocol, other systems, such as a Web browser that supports the WebSocket protocol, can use this address to communicate with the push channel directly.
-   In the case of the TCP socket protocol, the alias mechanism in ICF must be used to configure a TCP port.

-   An APC handler class that is stored as a global class in the ABAP Class Library and which can be edited in the Class Builder or ADT. When a query is sent to a push channel, the APC framework creates an instance of the class as an APC handler in a dedicated [APC session](ABENAPC_SESSION_GLOSRY.html).

-   WebSocket protocol

-   `CL_APC_WSP_EXT_STATELESS_BASE`
-   (stateless if a subprotocol is not used)
-   `CL_APC_WSP_EXT_STATELESS_PCP_B`
-   (stateless if the [Push Channel Protocol (PCP)](ABENPUSH_CHANNEL_PROTOCOL_GLOSRY.html) is used)
-   `CL_APC_WSP_EXT_STATEFUL_BASE`
-   (stateful if a subprotocol is not used)
-   `CL_APC_WSP_EXT_STATEFUL_PCP_B`
-   (stateful if the [Push Channel Protocol (PCP)](ABENPUSH_CHANNEL_PROTOCOL_GLOSRY.html) is used)

-   TCP socket protocol.

-   `CL_APC_TCP_EXT_STATELESS_BASE`
-   (stateless)
-   `CL_APC_TCP_EXT_STATEFUL_BASE`
-   (stateful)

-   `ON_START`
-   The APC framework runs this method in the APC handler when the push channel is opened. Here, initial actions can be implemented that are to be performed at this time. For example, the binding can be made to an [ABAP Messaging Channel](ABENAMC.html) here. The method can also remain empty.
-   `ON_MESSAGE`
-   The APC framework executes this method in the APC handler when the push channel receives an APC message. All reactions to the message must be implemented or called here. Input parameters are available here that reference objects for the message, its context, and the message manager. For example, a message can be sent as a response.

-   In an APC without a subprotocol, text messages and binary message content can be read from received message objects and written to message objects to be sent.
-   In an APC with [Push Channel Protocol (PCP)](ABENPUSH_CHANNEL_PROTOCOL_GLOSRY.html), the content of received messages can be deserialized to ABAP data and ABAP data can be serialized to message objects to be sent.

-   Each time a message is sent and each time APC processing is exited, a [database commit](ABENDATABASE_COMMIT_GLOSRY.html) is executed, except during [updates](ABENUPDATE_GLOSRY.html).
-   If no subprotocol is used, there are no special requirements made for an APC client, such as a WebSocket-enabled browser. As a WebSocket server, an AS ABAP can be addressed using text messages and binary messages and with standard techniques. If SAP's own [Push Channel Protocol (PCP)](ABENPUSH_CHANNEL_PROTOCOL_GLOSRY.html) is used, a WebSocket client must use the associated API. For external clients such as WebSocket-enabled browsers, this API is available as a JavaScript file in the MIME repository under the node `/sap/public/bc/ur/sap-pcp-websocket.js`.

-   `IF_APC_WSP_EVENT_HANDLER`
-   for the WebSocket protocol and the TCP socket protocol without subprotocol.
-   `IF_APC_WSP_EVENT_HANDLER_PCP`
-   for the WebSocket protocol with the [Push Channel Protocol (PCP)](ABENPUSH_CHANNEL_PROTOCOL_GLOSRY.html)

-   `CL_APC_WSP_CLIENT_MANAGER`
-   using the methods `CREATE_BY_URL` or `CREATE_BY_DESTINATION` for the WebSocket protocol
-   `CL_APC_TCP_CLIENT_MANAGER`
-   using the method `CREATE` for the TCP socket protocol

-   The method `GET_CONTEXT` returns a context object whose method `GET_INITIAL_REQUEST` can be used in the WebSocket protocol to create an access object for the HTTP address. This object then adds paths and forms fields for the address.
-   The method `CONNECT` opens an APC connection to a server using the information from the client object. The method `CLOSE` can be used to close the connection again explicitly. If the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html) is closed while a connection is open, the connection is also closed implicitly. If a connection is closed by an error, the handler method `ON_ERROR` and then `ON_CLOSE` are called.
-   The method `GET_MESSAGE_MANAGER` returns a reference of type `IF_APC_WSP_MESSAGE_MANAGER_BAS` to a message manager object that can be cast to `IF_APC_WSP_MESSAGE_MANAGER` or `IF_APC_WSP_MESSAGE_MANAGER_PCP`, depending on the subprotocol. The message manager can be used to create messages and send them from the client to the server.

-   The statement [`WAIT FOR PUSH CHANNELS`](ABAPWAIT_APC.html) is used for explicit programming. Depending on a condition, this statement switches the work process, and hence rolls out the session, while waiting for messages.
-   Implicit switches of the work process, such as those that occur for example at the end of a [dialog step](ABENDIALOG_STEP_GLOSRY.html), are useful in GUI scenarios where `WAIT` needs to be avoided.

-   [AS ABAP as WebSocket client](ABENAPC_WS_CLIENT_ABEXA.html)
-   [AS ABAP as TCP socket client](ABENAPC_TCP_CLIENT_ABEXA.html)

-   `CL_APC_WSP_CLIENT_CONN_MANAGER`
-   using the methods `CREATE_BY_URL` or `CREATE_BY_DESTINATION` for the WebSocket protocol
-   `CL_APC_TCP_CLIENT_CONN_MANAGER`
-   using the method `CREATE` for the TCP socket protocol

-   A detached client supports scenarios where an AS ABAP that wants to operate as an APC server itself opens an APC connection.
-   If the same AS ABAP with the same ABAP push channel plays the role of the detached and attached client, the sent messages must be identified as suitable messages in the APC handler class to prevent it from responding to its own messages. The header fields of the [PCP protocol](ABENPCP.html) are an appropriate way of doing this.
-   While an AS ABAP is working as a stateful detached client, an ABAP program is processed in the [non-blocking mode](ABENAPC_NON_BLOCKING_MODEL.html). Here, all statements are forbidden that could prevent inbound messages from being received.
-   APC messages sent from an attached client object using the interface `IF_APC_WSP_CLIENT_CONN_ATTACH` are currently subject to a standard length restriction of approximately 1 MB. Character strings are converted to the [UTF-8](ABENUTF8_GLOSRY.html) format. The limit can be increased by changing the profile parameter `rdisp/long_messages/max_length`.

-   [Creating a Detached Client](ABENAPC_DETACHED_CLIENT_ABEXA.html)
-   [AS ABAP as Attached Client](ABENAPC_ATTACHED_CLIENT_ABEXA.html).

-   It is not possible to associate APC with AMC for TCP sockets.
-   It is not possible to associate APC with AMC during [updates](ABENUPDATE_GLOSRY.html).
-   A push channel can only be linked with a messaging channel once. Any attempts to bind a push channel repeatedly to a messaging channel that is already bound raise an exception. Any attempts to remove a nonexistent association raise an exception.
-   The methods `BIND_AMC_MESSAGE_CONSUMER` and `UNBIND_AMC_MESSAGE_CONSUMER` both cause a [database commit](ABENDATABASE_COMMIT_GLOSRY.html).
-   If an ABAP push channel is linked with a messaging channel, it is possible to stop messages from being sent to the custom connection, if the value of `abap_true` is passed to the parameter `I_SUPPRESS_ECHO` when the AMC sender object is created using the method `CREATE_MESSAGE_PRODUCER` of the class `CL_AMC_CHANNEL_MANAGER`. If the APC connection is part of the ABAP session that uses the AMC sender object to send, the AMC message to the custom APC connection is suppressed.

-   See [AS ABAP as WebSocket Server](ABENAPC_ABEXA.html), where ABAP Push Channels are demonstrated both with and without an association with AMC.
-   Execute `DEMO_APC_PING_PONG`.

-   System-wide sending of messages using an access object is technically the same as using an attached client object, but the scenario itself is different. Only attached clients can be used to access a detached client. System-wide access is possible in all scenarios if required.
-   APC messages sent from an attached client object using the interface `IF_APC_WSP_CLIENT_CONN_ATTACH` are currently subject to a standard length restriction of approximately 1 MB. Character strings are converted to the [UTF-8](ABENUTF8_GLOSRY.html) format. The limit can be increased by changing the profile parameter `rdisp/long_messages/max_length`.

abenabap.html abenabap\_reference.html abenabap\_channel\_daemon.html abenabap\_channels.html