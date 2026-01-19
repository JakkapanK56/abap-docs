---
title: "ABENRFC_DESTINATION"
description: |
  ABENRFC_DESTINATION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRFC_DESTINATION.htm"
abapFile: "ABENRFC_DESTINATION.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "ABENRFC", "DESTINATION"]
---

The information about the target system of an RFC call is specified by the RFC destination.

The properties of destinations are defined statically and managed in AS ABAP using the transaction `SM59`. Every destination managed in transaction `SM59` has a unique name that can be used to specify the destination after the addition [`DESTINATION`](ABAPCALL_FUNCTION_DESTINATION.html) in RFC. For every destination, a connection type, the partner program, and the target system are defined in transaction `SM59`. Logon data and further connection options can also be defined in the destination.

The documented function module `RFC_MODIFY_R3_DESTINATION` processes static destinations managed in transaction `SM59`.

In cases where it is not sufficient to use the static destinations managed using transaction `SM59`, the associated properties can be combined to form a dynamic destination. This is done using the class `CL_DYNAMIC_DESTINATION`. Its method `CREATE_RFC_DESTINATION` creates a text field that can be specified in the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html) in RFC after the addition [`DESTINATION`](ABAPCALL_FUNCTION_DESTINATION.html) and is interpreted as a destination by the runtime framework. A destination from transaction `SM59` can also be used as a template and modified accordingly. The validity of the new destination is not checked until it is used for an RFC.

A dynamic destination has the characters `%%` as a prefix. These dynamic destinations should now only be created using the class `CL_DYNAMIC_DESTINATION` and must never be copied to programs from outside. Further methods in the class make it possible to

[Dynamic RFC Destination](ABENRFC_DYNAMIC_DEST_ABEXA.html)

There are three predefined destinations that do not have to be maintained using transaction `SM59`:

In addition to the destinations created in transaction `SM59`, the dynamic destinations, and the two predefined destinations, destinations can also be specified directly using the name of an AS instance, as returned by the method `GET_INSTANCE_NAME` of the system class `CL_ABAP_SYST`. This name has the form `hostname_sysid_instnr`. Here, `hostname` is the name of the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the AS instance, `sysid` is the name of the AS ABAP, and `instnr` is the instance number of the AS instance, for example as displayed using transaction `SM51`.

The only systems that can be reached like this are the current systems or systems connected by a [trust relationship](ABENSMT1_2.html). For the current system, the logon data of the current user is used. For other systems, a logon is necessary.

This specification can also be composed dynamically without posing a security risk.

For a detailed description of the RFC destination, see the documentation [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) in SAP Help Portal.

-   invalidate a dynamic destination created for the current session,
-   check whether a destination entered from an external source is a dynamic destination,
-   invalidate any dynamic destinations entered from external sources, if necessary.

-   **NONE**
-   With destination *NONE* the function module starts in the same [AS instance](ABENAS_INSTANCE_GLOSRY.html) as the calling program, but using the RFC interface and in a separate [`RFC` session](ABENRFC_SESSION_GLOSRY.html) for the current user. This destination is possible for all execution modes.
-   **SELF**
-   Destination *SELF* works as *NONE* but uses the [RFC protocol](ABENRFC_PROTOCOL.html)\\ *fast serialization*.
-   **BACK**
-   Destination *BACK* can be used in a function module that is called remotely and refers back to the caller. This specification is only possible in function modules that were called synchronously. The destination *BACK* can be used to call any remote-capable function module of the calling system in all three execution types. In synchronous callbacks, the associated relevant function pool is loaded into the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of the calling program, if it does not yet exist there. The existing RFC connection is used for the callback.

-   If the predefined destination *NONE* is used, no logon data or password must be specified when the user session is opened. If an RFC is performed for the current AS instance using a destination maintained in the transaction `SM59`, it depends on the settings on the application server whether logon data needs to be specified or not.
-   The logon data user name, client, and logon language for an RFC session with the destination *NONE* is taken implicitly from the calling session. The [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html) of the calling session must be used for the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) instead of the logon language of the session. The text environment language can be set using the statement [`SET LOCALE LANGUAGE`](ABAPSET_LOCALE.html).

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abenrfc.html