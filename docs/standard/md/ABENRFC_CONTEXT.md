---
title: "ABENRFC_CONTEXT"
description: |
  ABENRFC_CONTEXT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRFC_CONTEXT.htm"
abapFile: "ABENRFC_CONTEXT.html"
keywords: ["if", "data", "ABENRFC", "CONTEXT"]
---

Every remote call of a function module using an RFC interface defines an [RFC session](ABENRFC_SESSION_GLOSRY.html) as a dedicated [user session](ABENUSER_SESSION_GLOSRY.html) in the target system.

The logon data of an RFC session is defined during the definition of an [RFC destination](ABENRFC_DESTINATION.html) in transaction `SM59`. If no values are defined for the [user name](ABENUSER_NAME_GLOSRY.html), the [client](ABENCLIENT_GLOSRY.html), or the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) in this definition, they are filled implicitly when the session is loaded for the first time with the user name (`sy-uname`), the client (`sy-mandt`), and the [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html) (`sy-langu`) of the calling session.

The function pool of the function module is loaded into an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of the RFC session and remains there, so that multiple calls of function modules of the same [RFC destination](ABENRFC_DEST_GLOSRY.html) and the same function pool share the global data of this function group. When functions are called in an external non-ABAP system, the RFC Library API simulates this behavior. A connection and its RFC session are preserved until it is explicitly closed, or until the calling program is finished. The function module `RFC_CONNECTION_CLOSE` or API functions RfcAbort and RfcClose are used to explicitly close a connection.

It should be noted that when the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) is passed from the current session, the logon language of the session is not used, but the [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html), which, unlike the logon language, can be affected by the statement [`SET LOCALE LANGUAGE`](ABAPSET_LOCALE.html). This applies particularly to the destination *NONE* and *SELF* and therefore also to the [asynchronous remote function call](ABENASYNCHRONOUS_RFC_GLOSRY.html) without a specified destination.

[Implicit Logon Data in RFC](ABENRFC_LOGON_DATA_ABEXA.html).

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abenrfc.html