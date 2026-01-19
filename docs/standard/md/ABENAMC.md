---
title: "ABENAMC"
description: |
  ABENAMC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAMC.htm"
abapFile: "ABENAMC.html"
keywords: ["update", "delete", "do", "while", "if", "case", "method", "class", "data", "types", "ABENAMC"]
---

ABAP Messaging Channels (AMC) are a method of communication between ABAP programs using messages. Using a publish and subscribe mechanism, messages can be exchanged between any AS ABAP programs, which allows communication between different user sessions and AS instances. Messages can be implemented as data objects with specific data types. Messages that can be sent and received are:

ABAP messaging channels are implemented as repository objects that can be accessed in sender and receiver programs using an interface-based and class-based programming interface (API). The classes and interfaces of the API use the naming convention `CL_AMC_...` and `IF_AMC_...` respectively. Communication between different AS instances takes place using the [message server](ABENMESSAGE_SERVER_GLOSRY.html).

An [ABAP messaging channel](ABENABAP_MESSAGING_CHANNEL_GLOSRY.html) defined as a [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) must exist for each AMC communication. An ABAP messaging channel like this can be created in the [Repository Browser](ABENREPOSITORY_BROWSER_GLOSRY.html) in the ABAP Workbench by opening the context menu of a package and choosing *Connectivity*. The *Connectivity Browser* of the Object Navigator provides another access option. To open the Object Navigator for AMCs, the transaction `SAMC` can be used.

An ABAP messaging channel is identified by its assignment to an *application* and by its name. The name must start with a forward slash character (`/`) and is not case-sensitive. The following properties can be defined for an ABAP messaging channel:

See the messaging channels `/demo_text` and `/demo_binary` of the application `DEMO_AMC` in the package `SABAPDEMOS`.

Before an AMC message can be sent in an authorized program (publish), the factory method `CREATE_MESSAGE_PRODUCER` of the system class `CL_AMC_CHANNEL_MANAGER` must be used to create a sender object for a messaging channel from the repository. The application and name of the channel are passed here. The returned reference variable of type `IF_AMC_MESSAGE_PRODUCER` must be cast to a type-specific interface that contains a method `SEND` used to send type-compliant messages. The following interfaces are possible, depending on the type of messaging channel used:

Objects of the class `CL_AC_MESSAGE_TYPE_PCP`, which implement the interface `IF_AC_MESSAGE_TYPE_PCP`, can be used to create messages for the [Push Channel Protocol](ABENPCP.html).

Before an AMC message can be received in an authorized program (subscribe), the factory method `CREATE_MESSAGE_CONSUMER` of the system class `CL_AMC_CHANNEL_MANAGER` must be used to create a consumer for a messaging channel from the repository. The application and name of the channel are passed here. The returned reference variable has the type `IF_AMC_MESSAGE_CONSUMER`. The consumer methods `START_MESSAGE_DELIVERY` and `STOP_MESSAGE_DELIVERY` fulfill two tasks:

Once one or more receiver objects have been registered, the statement [`WAIT FOR MESSAGING CHANNELS`](ABAPWAIT_AMC.html) can be used to put the program in a wait state where it is ready to receive the messages. If, while the program is waiting, a message is received through a messaging channel for which a receiver object is registered, the associated `RECEIVE` method is executed and a check is made to see whether a logical condition is true or false. The wait state is persisted for as long as the condition is false, whereby a maximum duration can be configured. In this way, multiple messages can be consumed until a message is received that ends the wait state.

[Receiving AMC Messages](ABENAMC_RECEIVE_ABEXA.html)

In addition to the publish-and-subscribe mechanism, where the sender of message does not know the receivers, AMC also provides point-to-point communication, where a sender can create an AMC message for a specific receiver. The ID of the receiver session is required here.

The parameter `I_COMMUNICATION_TYPE` of the method `CREATE_MESSAGE_PRODUCER_BY_ID` can be used to configure whether a message is sent synchronously or asynchronously, whereby the latter is the default. When a message is sent synchronously, the sender waits for confirmation that the message was passed to the receiver session and otherwise raises an exception.

The executable example [Receiving AMC Messages](ABENAMC_RECEIVE_ABEXA.html) displays the ID of the receiver session. If this ID is entered in the example [Sending AMC Messages](ABENAMC_SEND_ABEXA.html), the message is sent synchronously and to this receiver session only.

Access to an ABAP messaging channel is controlled by specifying the authorized programs and their activities. When binding an APC WebSocket and when receiving using an APC WebSocket as a consumer, it is also possible to specify a virus scan profile to be used for the check performed by the virus scan interface (VSI).

Error situations in sender and receiver programs, such as violations of rules set by the properties of a messaging channel, raise exceptions of the class `CX_AMC_ERROR`.

AMC messages are both sent and received in AS ABAP, which means that existing test and analysis tools, such as the [ABAP Debugger](ABENABAP_DEBUGGER_GLOSRY.html), [runtime analysis](ABENRUNTIME_ANALYSIS_GLOSRY.html), or [performance trace](ABENPERFORMANCE_TRACE_GLOSRY.html) can be used as usual. There is also a special AMC logger:

The transaction `SMAMC` provides an overview of all ABAP messaging channels for which AMC consumers are currently registered.

Detailed information about AMC can be found in the [ABAP Channels](https://help.sap.com/docs/ABAP_PLATFORM_NEW/05d041d3df1a4595a3c45f57c15e2325/18ef61f6415743658407d4d17f06e950) documentation in SAP Help Portal.

-   Text strings
-   Byte strings
-   Content that is serialized in accordance with fixed protocols. Helper classes are available for serializations and deserializations.

-   Any data object can be sent by being serialized in a suitable way by the sender and deserialized by the receiver. Possible formats are [XML](ABENABAP_XML.html) or [JSON](ABENABAP_JSON.html) in strings or SAP's own [Push Channel Protocol](ABENPUSH_CHANNEL_PROTOCOL_GLOSRY.html).
-   The sendable messages are currently subject to a standard length restriction of approximately 1 MB. Character strings are converted to the [UTF-8](ABENUTF8_GLOSRY.html) format. The limit can be increased by changing the profile parameter `rdisp/long_messages/max_length`.

-   **Message type**
-   The message type determines the data type of the data objects that can be sent and received as messaging channels messages. Currently there are

-   *TEXT* for text strings
-   *BINARY* for byte strings
-   *PCP* for SAP's own [Push Channel Protocol (PCP)](ABENPUSH_CHANNEL_PROTOCOL_GLOSRY.html)

-   **Scope**
-   The scope defines who can receive a message sent using this messaging channel. Current scopes are

-   *System*

-   All programs of all user sessions in the current AS ABAP can receive messages.

-   *Client*

-   All programs of user sessions in the current AS ABAP logged on with the same [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) as the sender program can receive messages.

-   *User*

-   Only programs of user sessions in the current AS ABAP logged on with the same [user name](ABENUSER_NAME_GLOSRY.html) and the same [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) as the sender program can receive messages.
-   No other restrictions apply apart from these settings. More specifically, it is possible to send and receive messages between different [AS instances](ABENAS_INSTANCE_GLOSRY.html).
-   **Authorized programs**
-   Each program that is authorized to send or receive messages using the messaging channel or a predecessor program in the current [call sequence](ABENCALL_SEQUENCE_GLOSRY.html) must be specified with the appropriate activity in an include list. Possible activities are:

-   *Send*, which authorizes the program to send AMC messages
-   *Receive*, which authorizes the program to receive AMC messages
-   *Bind APC WebSocket as consumer*, which authorizes the program (usually the class pool of an [APC handler class](ABENAPC.html)) to bind its WebSocket connection to an ABAP messaging channel. This makes the [APC](ABENAPC_GLOSRY.html) connection partners (such as Web browsers) into AMC consumers.

-   `IF_AMC_MESSAGE_PRODUCER_TEXT`
-   `IF_AMC_MESSAGE_PRODUCER_BINARY`
-   `IF_AMC_MESSAGE_PRODUCER_PCP`

-   The sender of an AMC message implements the publish part of the publish-and-subscribe mechanism in AMC. The sender does not usually know whether receivers are registered for the AMC message.
-   The parameter `I_SUPPRESS_ECHO` of the method `CREATE_MESSAGE_PRODUCER` can be used to control whether messages are sent to the current ABAP session or not. It may be particularly helpful to suppress messages like these when joining AMC with [APC](ABENAPC.html) to stop superfluous messages from being sent.

-   [Sending AMC Messages](ABENAMC_SEND_ABEXA.html)
-   [Suppressing Standalone Messages](ABENAMC_SUPPRESS_ECHO_ABEXA.html)

-   Definition of the AMC delivery phase
-   The method `START_MESSAGE_DELIVERY` makes the receiver program for the messaging channel of the consumer ready to receive messages. The method `STOP_MESSAGE_DELIVERY` undoes this step. Messages sent using the messaging channel are received only if the program is ready to receive.
-   Registration of the receiver objects for messaging channel messages
-   Receiver objects are instances of local or global classes that implement at least one of the type-specific interfaces

-   `IF_AMC_MESSAGE_RECEIVER_TEXT`
-   `IF_AMC_MESSAGE_RECEIVER_BINARY`
-   `IF_AMC_MESSAGE_RECEIVER_PCP`

-   These interfaces each have a `RECEIVE` method that acts as a callback routine for the messaging channel for which a receiver object is registered. The input parameters of the callback routines receive the messages sent during registration in a type-compliant way and can be processed or forwarded in the methods. An object of the class `CL_AC_MESSAGE_TYPE_PCP`, pointed to by the attribute `PCP_MESSAGE` of the receiver object, can be used to read messages in SAP's own [Push Channel Protocol](ABENPCP.html).
-   When the receiver objects are registered, object references are created in the AMC framework to the recipient objects to keep them alive. It is also possible to deregister the objects using the method `STOP_MESSAGE_DELIVERY`. This deletes the references. The objects are deregistered implicitly at the end of the program.

-   The methods `START_MESSAGE_DELIVERY` and `STOP_MESSAGE_DELIVERY` both cause a [database commit](ABENDATABASE_COMMIT_GLOSRY.html).
-   It is not possible to receive AMC messages during the [update](ABENUPDATE_GLOSRY.html) process.

-   A receiver can use the static method `GET_CONSUMER_SESSION_ID` of the class `CL_AMC_CHANNEL_MANAGER` to get the ID of its session and pass it to the sender in an appropriate way.
-   A sender that knows the ID of a receiver session can use the factory method `CREATE_MESSAGE_PRODUCER_BY_ID` of the class `CL_AMC_CHANNEL_MANAGER` to create a special sender object for point-to-point communication for this receiver session. An AMC message sent using an object like this is only processed by the receiver of the receiver session passed to the parameter `I_CONSUMER_SESSION_ID`.

-   The transaction `AMC_LOG_ADMIN` can be used to switch AMC logging on and off for specific ABAP messaging channels.
-   The transaction `AMC_LOG_PROCESSING` can be used to manage the AMC log entries.

abenabap.html abenabap\_reference.html abenabap\_channel\_daemon.html abenabap\_channels.html