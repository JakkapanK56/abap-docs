---
title: "ABAPCALL_FUNCTION_REMOTE_SESSION"
description: |
  ABAPCALL_FUNCTION_REMOTE_SESSION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_FUNCTION_REMOTE_SESSION.htm"
abapFile: "ABAPCALL_FUNCTION_REMOTE_SESSION.html"
keywords: ["do", "if", "catch", "method", "class", "data", "types", "ABAPCALL", "FUNCTION", "REMOTE", "SESSION"]
---

[Short Reference](ABAPCALL_FUNCTION_SHORTREF.html)

``CALL FUNCTION func IN REMOTE SESSION session [`parameter_list`](ABAPCALL_FUNCTION_REMOTE_PARA.html).``

Synchronous call (sRFC) of a [remote-enabled function module](ABENREMOTE_ENABLED_FM_GLOSRY.html) specified in `func` using the [RFC interface](ABENRFC_INTERFACE_GLOSRY.html). The addition `IN REMOTE SESSION` is used to specify the remote session in `session`.

`func` expects character-like data objects. The calling program is continued after the `CALL FUNCTION` statement when the remotely called function has finished. A remote session may call the same system or another system.

The remote session object `session` can be created using a communication target object. A communication target object is a development object that can be created using the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html). A class for the communication target is generated with the same name.

Communication targets represent targets of remote function calls. Using communication targets, the following should be considered:

Predefined communication targets for making local calls are provided by the following classes:

The predefined communication targets are internal calls and do not change the system, the user, or the client. No additional RFC authorizations are required.

Two different types of remote sessions can be created using the following communication target instance methods:

**More Information**

[RFC - Remote Session](ABENRFC_REMOTE_SESSION_ABEXA.html)

`CX_APPDESTINATION`

`CX_COMMUNICATION_TARGET_ERROR`

`CX_SY_REMOTE_SESSION_ERROR`

`CX_SY_REMOTE_SESSION_APP_FAIL`

`CX_SY_REMOTE_SESSION_CLOSED`

`CX_SY_REMOTE_SESSION_COM_FAIL`

`CX_SY_REMOTE_SESSION_FAILURE`

-   For different scenarios, different communication targets should be used.
-   Only calls belonging to the same logon user should be made using the same communication target.
-   If calls have different security requirements, multiple communication targets must be used.

-   `SELF_RFC`: RFC call to the same server.
-   `SYSTEM_RFC`: RFC call to a server belonging to the same system via load balancing.
-   `WSSELF`: RFC call to the same server using the [WebSocket protocol](ABENWSP_GLOSRY.html). Calls to and from the SAP GUI as well as RFC callbacks using [*BACK*](ABENRFC_DESTINATION.html) are not available in here.

-   `GET_TRANSIENT_SESSION`
-   Using `GET_TRANSIENT_SESSION`, a transient session is created for every call. Every call opens a new [ABAP session](ABENABAP_SESSION_GLOSRY.html), which is closed after executing the function module. There is no relation between two successive calls. Depending on the application destination settings, the sessions may be established on the same server or any other server of the same system defined in the application destination. For performance reasons, connections might be reused, or new connections might be established automatically and transparently for the caller.
-   `CREATE_SESSION`
-   Using `CREATE_SESSION`, a stateful remote session is created. Every call using the same session object will result in a call with the same remote session. [Session variables](ABENSESSION_VARIABLE_GLOSRY.html) and objects are shared and stored in [session memory](ABENROLL_AREA_GLOSRY.html) between subsequent calls. The remote session lives as long as the session is not closed by an explicit close call, an error, or the end of the client session. The option `AUTO_REOPEN` can be set to reopen a closed session automatically. This option should only be used when a remote session can handle a session restart, for example, by recreating caches and reloading necessary data.

-   For more information about sRFC, refer to the documentation [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) in the SAP Help Portal.
-   For more information about the technical terms used here, the communication arrangement, communication target, and the application destination, refer to the documentation [Integration and Connectivity](https://help.sap.com/docs/ABAP_Cloud/eede1416d18c436e8810eaaeb20c38ae/7f07b344bc7a4e8b9ca748c00e379e74) in the SAP Help Portal.

-   Any self-created application-specific communication targets must be configured by an administrator using a [communication arrangement](https://help.sap.com/docs/ABAP_Cloud/eede1416d18c436e8810eaaeb20c38ae/85a7d0a1ba144a8fa1e0729edd749c96?version=sap_cross_product_abap) or an [application destination](https://help.sap.com/docs/ABAP_Cloud/eede1416d18c436e8810eaaeb20c38ae/f122d1e4026d4925b71319fcc514aab3?version=sap_cross_product_abap).
-   If a short dump should abort the program, it is recommended not to catch the exception `CX_SY_REMOTE_SESSION_ERROR` and any inherited exceptions. Short dumps written by the RFC runtime provide more details.
-   The built-in exceptions [`SYSTEM_FAILURE`](ABENRFC_EXCEPTION.html) and [`COMMUNICATION_FAILURE`](ABENRFC_EXCEPTION.html) are not supported.

-   *Cause:* The communication arrangement or the application destination configuration is missing, ambiguous, or has errors.
    *Runtime error:*\\ `UNCAUGHT_EXCEPTION`

-   *Cause:* During the communication target instantiation, an error occurred.
    *Runtime error:*\\ `UNCAUGHT_EXCEPTION`

-   *Cause:* There is an error or exception on the server side.

-   *Cause:* There is an exception in the application.
    *Runtime error:*\\ `REMOTE_SESSION_APP_FAIL`

-   *Cause:* The remote session is already closed.
    *Runtime error:*\\ `REMOTE_SESSION_CLOSED`

-   *Cause:* There is an error on the communication layer.
    *Runtime error:*\\ `REMOTE_SESSION_COM_FAIL`

-   *Cause:* There is an error or short dump on the server side.
    *Runtime error:*\\ `REMOTE_SESSION_FAILURE`

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html