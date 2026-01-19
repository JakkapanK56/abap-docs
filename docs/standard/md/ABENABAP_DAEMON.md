---
title: "ABENABAP_DAEMON"
description: |
  ABENABAP_DAEMON - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_DAEMON.htm"
abapFile: "ABENABAP_DAEMON.html"
keywords: ["delete", "do", "if", "case", "method", "class", "data", "internal-table", "ABENABAP", "DAEMON"]
---

**This topic including all subnodes are out of maintenance. There is no guarantee that the information is complete and up-to-date. No active support is provided.**

ABAP daemon framework (ADF) is an application programming interface (API) based on interfaces and classes for creating and handling [ABAP daemons](ABENABAP_DAEMON_GLOSRY.html). An ABAP daemon is an instance of an [ABAP daemon class](ABENABAP_DAEMON_CLASS_GLOSRY.html) that lives in a special [ABAP daemon session](ABENABAP_DAEMON_SESSION_GLOSRY.html). Every AS instance in an AS ABAP has access to any of the daemons in this AS ABAP. ABAP programs themselves use the [ABAP daemon manager](ABENABAP_DAEMON_MANAGER_GLOSRY.html) to access ABAP daemons.

The lifetime of an ABAP daemon that is not stopped explicitly using ADF methods is limited only by the lifetime of the AS instance in which it is executed. An ABAP daemon is created again automatically every time a [runtime error](ABENRUNTIME_ERROR_GLOSRY.html) or a [message](ABENMESSAGE_GLOSRY.html) of type *E*, *A*, or `X` causes a program termination. When its AS instance is shut down, a daemon can be moved to another AS instance by creating a new daemon containing the same context information as the preceding daemon. This enables the new daemon to do the same job.

The [processing of an ABAP daemon](ABENABAP_DAEMON_PROCESSING_GLOSRY.html) takes place in the background and controlled using events. A user of a daemon or the ABAP runtime framework can raise [ABAP daemon events](ABENABAP_DAEMON_EVENT_GLOSRY.html) to which the daemon reacts using predefined interface methods. A daemon must always be ready to react to inbound events and this is ensured by running ABAP daemon processing in a [non-blocking mode](ABENADF_NON_BLOCKING_MODEL.html).

For each ABAP daemon, there must be a [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that defines the properties of the daemon. The repository object can have another or the same name as the ABAP daemon class. Properties defined by the repository object are:

An [ABAP daemon class](ABENABAP_DAEMON_CLASS_GLOSRY.html) is a global class that inherits from the abstract system class `CL_ABAP_DAEMON_EXT_BASE` and it must also be possible to create public instances of this daemon class. From the superclass, an ABAP daemon class inherits the methods of the interface `IF_ABAP_DAEMON_EXTENSION` that it uses to react to [ABAP daemon events](ABENABAP_DAEMON_EVENT_GLOSRY.html) if they are implemented in the ABAP daemon class.

Except for `ON_ACCEPT`, each of these methods has an input parameter `I_CONTEXT` with the static type `IF_ABAP_DAEMON_CONTEXT` that points to a context object. The context object has interface methods that handle context information about the current daemon or that stop or restart it:

An ABAP daemon class can contain further helper methods and can call any number of other procedures in its methods. The implementation of an ABAP daemon class and the procedures it calls must be executable in [non-blocking mode](ABENADF_NON_BLOCKING_MODEL.html) to prevent the runtime error `DAEMON_ILLEGAL_STATEMENT` in [ABAP daemon processing](ABENABAP_DAEMON_PROCESSING_GLOSRY.html) and a subsequent restart of the daemon.

ABAP daemons are created and used with the static methods of the class `CL_ABAP_DAEMON_CLIENT_MANAGER` in ABAP daemon manager. The following rules apply here:

The ABAP daemon manager or the class `CL_ABAP_DAEMON_CLIENT_MANAGER` has the following methods:

The transaction `SMDAEMON` lists the ABAP daemons on the current AS instance and they can also be restarted or stopped here.

User-specific [breakpoints](ABENBREAKPOINT_GLOSRY.html) can be set when an ABAP daemon is being processed (namely when the methods of the ABAP daemon class and the procedures called here are executed) to debug the daemon.

See also the class `CL_AD_EXT_SIMPLE_DAEMON`, which can be used by the program `RS_ABAP_DAEMON_TEST`. Unlike in the preceding simple examples, this example is more reliable in producing a system-wide singleton ABAP daemon.

-   ABAP daemons can be used as event handlers with long lifetimes, for example to respond to changes in shared internal or external AS ABAP resources.
-   For details about ABAP daemon framework, see [ABAP daemons](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/311af9b769d84fffa7b7384bae27109c).

-   Name of the ABAP daemon class
-   Type of the daemon:

-   Application daemon
-   System daemon

-   Start type of the daemon:

-   Automatically started
-   Explicitly started

-   Caller Object

-   `ON_ACCEPT`
-   This method is executed before the actual start of the daemon. The return value of the method has the type `ABAP_DAEMON_SETUP_MODE` from the ABAP Dictionary and must be set to a value specified by the components of the constant structure `CO_SETUP_MODE` of the interface `IF_ABAP_DAEMON_EXTENSION`. The daemon start is accepted or rejected using these values. The method can be implemented to decide whether the start should be accepted or not. For example, user-dependent authorizations can be evaluated, and the start of the daemon can be limited to specific programs. To do this, the object passed in the input parameter `I_CONTEXT_BASE` of the static type `IF_ABAP_DAEMON_CONTEXT_BASE` can be evaluated. Its methods `GET_START_PARAMETER` and `GET_START_CALLER_INFO` return the required information. They behave in the same way as the identically named methods of a context object.
-   `ON_START`
-   This method is executed when a daemon is started using the method `START` in the [ABAP daemon managers](ABENABAP_DAEMON_MANAGER_GLOSRY.html) and directly after the daemon is instantiated. The daemon can be initialized in its implementation in the following ways:

-   How context information is stored in the [ABAP Daemon Memory](ABENABAP_DAEMON_MEMORY_GLOSRY.html) or to other suitable memory areas, such as [shared memory](ABENSHARED_MEMORY_GLOSRY.html) or database tables.
-   How [ABAP Messaging Channels](ABENABAP_MESSAGING_CHANNEL_GLOSRY.html) are bound for communication with consumers.
-   Whether an [ABAP Timer](ABENABAP_TIMER_GLOSRY.html) is created to limit the lifetime of the daemon if required.

-   `ON_MESSAGE`
-   This method is executed when the daemon receives a [PCP](ABENPCP_GLOSRY.html) message sent using the method `SEND` of an [ABAP daemon handle](ABENABAP_DAEMON_HANDLE_GLOSRY.html). To do this, the method `ATTACH` of the [ABAP daemon manager](ABENABAP_DAEMON_MANAGER_GLOSRY.html) returns a reference to a daemon handle. The messages in the input parameter `I_MESSAGE` can be evaluated in the implementation of the method `ON_MESSAGE`.
-   `ON_ERROR`
-   This method is executed after the daemon has been restarted automatically due to a [message](ABENMESSAGE_GLOSRY.html) of the type *E*, *A*, or *X* or because of a [runtime error](ABENRUNTIME_ERROR_GLOSRY.html). A runtime error terminates the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of the daemon, deletes the associated [ABAP memory](ABENABAP_MEMORY_GLOSRY.html), and produces a [short dump](ABENSHORT_DUMP_GLOSRY.html). The automatic restart opens a new internal session. The context of the daemon can be restored in the implementation of the method by accessing context information preserved in the [ABAP daemon memory](ABENABAP_DAEMON_MEMORY_GLOSRY.html) or in another repository. The input parameter `I_CODE` contains information about the source of the runtime error. Runtime errors should be avoided in the method `ON_ERROR` itself. If a runtime error still occurs here, the execution of the next method is delayed by 30 seconds.
-   `ON_RESTART`
-   This method is executed when the daemon is restarted using its context object or after the event `ON_BEFORE_RESTART_BY_SYSTEM` (see below). The context of the daemon can be restored in the implementation of the method by accessing context information preserved in the [ABAP daemon memory](ABENABAP_DAEMON_MEMORY_GLOSRY.html) or in another repository,
-   `ON_SERVER_SHUTDOWN`
-   This method is executed when the current AS instance is shut down. This method can be implemented so that the daemon is moved to another free AS instance (if available) by starting a new daemon here with the same context information. The daemon is stopped automatically after this method is executed.
-   `ON_SYSTEM_SHUTDOWN`
-   This method is executed when the current AS ABAP is shut down. This method can be implemented to include cleanup activities, such as deleting temporary daemon data in persistent repositories. The daemon is stopped automatically after this method is executed.
-   `ON_BEFORE_RESTART_BY_SYSTEM`
-   This method is executed when an inconsistent state is detected in the daemon. This can occur when programs used by a daemon are modified and need to be reloaded. If necessary, this method can be implemented to perform appropriate tasks, such as updating the saved context information. After this method is executed, a restart is performed automatically and the method `ON_RESTART` is then executed.
-   `ON_STOP`
-   This method is executed when the daemon is stopped using the method `STOP` of the [ABAP daemon manager](ABENABAP_DAEMON_MANAGER_GLOSRY.html) or using its context object (see below). This method can be implemented to include cleanup activities, such as deleting temporary daemon data in the relevant memory areas. In the input parameter `I_MESSAGE`, the method is sent the [PCP](ABENPCP_GLOSRY.html) message, which can be passed optionally when the daemon is stopped.

-   `GET_START_PARAMETER`
-   This method returns the [PCP](ABENPCP_GLOSRY.html) message that was passed to the [ABAP daemon manager](ABENABAP_DAEMON_MANAGER_GLOSRY.html) when the daemon was started.
-   `GET_START_CALLER_INFO`
-   This method returns information about the context of the consumer of the daemon, such as the client, user name, or ABAP program in a structure of the type `ABAP_DAEMON_START_CALLER_INFO`.
-   `GET_INSTANCE_ID`
-   This method returns the unique internal ID of the current daemon.
-   `SET_APPLICATION_PARAMETER`
-   This method writes data to the [ABAP daemon memory](ABENABAP_DAEMON_MEMORY_GLOSRY.html) in [PCP](ABENPCP_GLOSRY.html) format. Here, this data is assigned to the current daemon and it is preserved for the entire lifetime of the daemon, including any restarts. If `SET_APPLICATION_PARAMETER` is used again, all existing data is overwritten.
-   `GET_APPLICATION_PARAMETER`
-   This method reads the latest data written using `SET_APPLICATION_PARAMETER` from the [ABAP daemon memory](ABENABAP_DAEMON_MEMORY_GLOSRY.html).
-   `RESTART`
-   This method restarts the current daemon with the same internal ID. This deletes the internal session of the daemon with all associated memories, such as the [ABAP memory](ABENABAP_MEMORY_GLOSRY.html), and opens a new internal session. The restart raises the event `ON_RESTART`.
-   `STOP`
-   This method stops the current daemon and raises the event `ON_STOP` at the same time.

-   To write context information, it is advisable to create a central helper method that is called by the methods `ON_START`, `ON_ERROR`, and `ON_RESTART`. The [ABAP daemon memory](ABENABAP_DAEMON_MEMORY_GLOSRY.html) linked with the daemon is particularly well suited for this task, although other repositories can also be used, such as the shared memory or database tables.
-   The interface `IF_ABAP_TIMER_HANDLER` can be implemented to turn an ABAP daemon class into an [ABAP timer handler](ABENABAP_TIMER_HANDLER_GLOSRY.html) too and hence make it able to react to [ABAP timer](ABENABAP_TIMER_GLOSRY.html) events. This makes it possible, for example, to wait for certain events or to stop the daemon after a certain time.

-   An ABAP daemon can be created and used from any ABAP program.
-   An ABAP daemon can only be used in the same AS ABAP as the creating program and the [ABAP daemon session](ABENABAP_DAEMON_SESSION_GLOSRY.html) always has the same [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) as the current [user session](ABENUSER_SESSION_GLOSRY.html). No predefined restrictions exist for the user who is using the creating program.
-   Only the program that created an ABAP daemon using the ABAP daemon manager can use this daemon in the ABAP daemon manager. If any other programs attempt this, an exception is raised. It is also not possible for a daemon to access itself using the ABAP daemon manager. If multiple programs are to access the same daemon, it is best to wrap these ABAP Daemon Manager reads in a class whose class pool is the only program that can access this daemon.

-   `START`
-   This method starts an ABAP daemon of an ABAP daemon class passed to the input parameter `I_CLASS_NAME` under a name passed to the input parameter `I_NAME`. This daemon is started only if it is allowed by the interface method `ON_ACCEPT` of the ABAP daemon class. When the daemon is started, a new [ABAP daemon session](ABENABAP_DAEMON_SESSION_GLOSRY.html) is opened whose [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) is adopted by the current user session and whose [user name](ABENUSER_NAME_GLOSRY.html) and [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) are determined using an [RFC destination](ABENRFC_DEST_GLOSRY.html) that can be passed to the input parameter `I_DESTINATION` (this is optional). The default value is the predefined RFC destination *NONE*. An explicitly specified RFC destination must meet the following prerequisites:

-   It must be an internal connection to the same AS ABAP.
-   It must be an ABAP connection with or without load distribution.
-   A client ID used in the RFC destination must be the same ID as used in the current user session.
-   An AS instance specified as `hostname_sysid_instnr` must belong to the current AS ABAP.

-   The input parameter `I_PRIORITY` can be used to specify a priority with which the daemon reacts to [ABAP daemon events](ABENABAP_DAEMON_EVENT_GLOSRY.html). The input parameter `I_PARAMETER` can be used to pass a [PCP](ABENPCP_GLOSRY.html) message to the daemon as a start parameter and the daemon can access this message using its context object.
-   The output parameter `E_SETUP_MODE` gets the return value of the interface method `ON_ACCEPT` of the ABAP daemon class. The output parameter `E_INSTANCE_ID` returns the internal ID of the started daemon, which is used by ABAP daemon manager to access this daemon.
-   `ATTACH`
-   In its return value with the static type `IF_ABAP_DAEMON_HANDLE`, this method returns a reference to an [ABAP daemon handle](ABENABAP_DAEMON_HANDLE_GLOSRY.html) for the daemon whose internal ID was passed to the input parameter `I_INSTANCE_ID`. The method `SEND` of the daemon handle can be used by the consumer to send [PCP](ABENPCP_GLOSRY.html) messages to the daemon and the daemon can handle these messages in its interface method `ON_MESSAGE`.
-   `STOP`
-   This method stops the daemon whose internal ID was passed to the input parameter `I_INSTANCE_ID`. The [ABAP daemon event](ABENABAP_DAEMON_EVENT_GLOSRY.html)\\ `ON_STOP` is raised first. In the associated method, the daemon can evaluate the [PCP](ABENPCP_GLOSRY.html) passed to the input parameter `I_PARAMETER`.
-   `GET_DAEMON_INFO`
-   Returns an internal table containing information about all ABAP daemons of the current AS ABAP for the ABAP daemon class that is passed to the input parameter `I_CLASS_NAME`.

-   It is advisable to create dedicated [RFC destinations](ABENRFC_DEST_GLOSRY.html) for ABAP daemons with a suitable user:

-   ABAP daemons are processed in the background, which means that the user should not be a dialog user.
-   The user should have exactly those authorizations required for daemon processing.

-   One consumer can create multiple ABAP daemons of an ABAP daemon class, which can then be distinguished by using different names. It can also be useful, however, to allow just one daemon from an ABAP daemon class as a singleton in a single AS ABAP. The corresponding checks must be programmed by the consumer.
-   In most cases, a consumer does not need to know the internal ID of an ABAP daemon. If the method calls of the ABAP daemon handler are wrapped in a class, as recommended, this class can encapsulate the ID in a private attribute.
-   A consumer can communicate with an ABAP daemon only by using [PCP](ABENPCP_GLOSRY.html) messages.
-   On its own, the method `GET_DAEMON_INFO` of the ABAP daemon manager is not enough to create an ABAP daemon as a system-wide singleton. Parallel reads can be used to start multiple daemons in the same ABAP daemon class before they are returned by `GET_DAEMON_INFO`.
-   Internally, ABAP daemons are handled using the [RFC interface](ABENRFC_INTERFACE_GLOSRY.html). Accordingly, a consumer of daemons must also have the associated [RFC authorizations](ABENRFC_AUTHORITY.html).
-   The class pool of an ABAP daemon or the instance of an ABAP daemon class is always the only [ABAP session](ABENABAP_SESSION_GLOSRY.html) program in its [ABAP daemon session](ABENABAP_DAEMON_SESSION_GLOSRY.html), since no program calls are possible in the associated [non-blocking mode](ABENADF_NON_BLOCKING_MODEL.html).
-   When an ABAP daemon is stopped or restarted due to an error, its entire context is removed. The associated [ABAP daemon session](ABENABAP_DAEMON_SESSION_GLOSRY.html) is also ended and, if the daemon is restarted, a new session is started. This affects context information in the [ABAP daemon memory](ABENABAP_DAEMON_MEMORY_GLOSRY.html), any [ABAP Timers](ABENABAP_TIMER_GLOSRY.html) that were started, and all non-persistent data in the associated [ABAP session](ABENABAP_SESSION_GLOSRY.html). More specifically, any [SAP locks](ABENSAP_LOCK_GLOSRY.html) that were set are released.

-   It is the task of the consumer to delete any daemon-specific data in the shared memory or other persistent repositories.
-   In cases where a daemon is moved to a different AS instance, the consumer must also ensure that the required settings are transferred at the same time.

-   [ADF, Mini ABAP Daemon](ABENABAP_MINI_DAEMON_ABEXA.html)
-   [ADF, Creating and Using an ABAP Daemon](ABENABAP_DAEMON_ABEXA.html)

abenabap.html abenabap\_reference.html abenabap\_channel\_daemon.html