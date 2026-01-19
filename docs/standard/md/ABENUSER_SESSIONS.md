---
title: "ABENUSER_SESSIONS"
description: |
  ABENUSER_SESSIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUSER_SESSIONS.htm"
abapFile: "ABENUSER_SESSIONS.html"
keywords: ["select", "update", "if", "method", "class", "data", "types", "ABENUSER", "SESSIONS"]
---

Each execution of an ABAP program takes place in an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) in an [ABAP session](ABENABAP_SESSION_GLOSRY.html) within an [AS instance](ABENAS_INSTANCE_GLOSRY.html)\\ [user session](ABENUSER_SESSION_GLOSRY.html). For this, at least one ABAP session is open in each user session.

A user session is opened whenever an [ABAP user](ABENABAP_USER_GLOSRY.html)\\ [logs on](ABENLOGON_GLOSRY.html) to an [AS ABAP](ABENAS_ABAP_GLOSRY.html). Here, the following fixed properties of the user session are defined:

There are different types of user sessions in which different rules and restrictions apply when ABAP programs are executed:

The [user memory](ABENUSER_MEMORY_GLOSRY.html) is assigned a user session as a dedicated memory area for [SPA/GPA parameters](ABENSPA_GPA_PARAMETER_GLOSRY.html) and an [ABAP daemon memory](ABENABAP_DAEMON_MEMORY_GLOSRY.html) as a subarea.

From a user session, it is possible to programmatically open further user sessions on the same or another AS instance. For example:

-   [User name](ABENUSER_NAME_GLOSRY.html)
-   The user name is assigned a [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html) and [authorizations](ABENAUTHORIZATION_GLOSRY.html) that affect the behavior of an ABAP program. The current user name is returned by the method `GET_USER_NAME` of the class `CL_ABAP_SYST` and is available in the [system field](ABENSYSTEM_FIELD_GLOSRY.html)\\ `sy-uname`.
-   [Client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html)
-   The client ID determines the current [client](ABENCLIENT_GLOSRY.html). When database content is accessed using [ABAP SQL](ABENABAP_SQL_GLOSRY.html), [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) is used by default where only the data of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) is accessed. The current client is returned by the method `GET_CLIENT` of the class `CL_ABAP_SYST` and is available in the [system field](ABENSYSTEM_FIELD_GLOSRY.html)\\ `sy-mandt`.
-   [Logon language](ABENLOGON_LANGUAGE_GLOSRY.html)
-   The logon language determines the access to certain text repositories and is also the [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html) by default. The current logon language is returned by the method `GET_LOGON_LANGUAGE` of the class `CL_ABAP_SYST`. The [system field](ABENSYSTEM_FIELD_GLOSRY.html)\\ `sy-langu`, on the other hand, contains the text environment language of the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html), which can also be set to a different value.

-   [Dialog sessions](ABENDIALOG_SESSION_GLOSRY.html)
-   Dialog sessions are used for [dialog processing](ABENDIALOG_PROCESSING_GLOSRY.html) with the [SAP GUI](ABENSAP_GUI_GLOSRY.html). The ABAP programs are controlled by classic [dynpros](ABENDYNPRO_GLOSRY.html) and their special forms, [selection screens](ABENSELECTION_SCREEN_GLOSRY.html) and classic [lists](ABENCLASSIC_LIST_GLOSRY.html).
-   [Background sessions](ABENBATCH_SESSION_GLOSRY.html)
-   Background sessions are used for [background processing](ABENBACKROUND_PROCESSING_GLOSRY.html), namely the execution of ABAP programs in the background without user interaction.
-   [Update sessions](ABENUPDATE_SESSION_GLOSRY.html)
-   Update sessions are used for classic non-local [updates](ABENUPDATE_GLOSRY.html), namely the execution of registered [update function modules](ABENUPDATE_FUNCTION_MODULE_GLOSRY.html) in a dedicated work process.
-   [RFC sessions](ABENRFC_SESSION_GLOSRY.html)
-   RFC sessions are used for [RFC processing](ABENRFC_PROCESSING_GLOSRY.html), namely the execution of remotely called function modules ([RFMs](ABENRFM_GLOSRY.html)).
-   [ICF sessions](ABENICF_SESSION_GLOSRY.html)
-   ICF sessions are used for [ICF](ABENICF_PROCESSING_GLOSRY.html) processing, namely the processing of HTTP/HTTPS or SMTP queries to the AS ABAP in a handler class.
-   [APC sessions](ABENAPC_SESSION_GLOSRY.html)
-   APC sessions are used for [APC](ABENAPC_PROCESSING_GLOSRY.html) processing, namely the processing of WebSocket or TCP queries to the AS ABAP in a handler class.
-   [ABAP daemon sessions](ABENABAP_DAEMON_SESSION_GLOSRY.html)
-   ABAP daemon sessions are used for [ABAP daemon processing](ABENABAP_DAEMON_PROCESSING_GLOSRY.html), namely the execution of an [ABAP daemon](ABENABAP_DAEMON_GLOSRY.html) that is automatically restarted after a program termination.

-   A [remote function call](ABENREMOTE_FUNCTION_CALL_GLOSRY.html) with the destination *NONE* or *SELF* opens a user session on the same AS instance.
-   Calls of [update modules](ABENUPDATE_MODULE_GLOSRY.html) using [`COMMIT WORK`](ABAPCOMMIT.html) or execution of executable programs in [background programming](ABENBACKROUND_PROCESSING_GLOSRY.html) open separate user sessions.
-   ICF and APC clients can address the current or another AS instance as ICF or APC servers and thus open new user sessions.

abenabap.html abenabap\_reference.html abenabap\_oview.html abenorganization\_of\_modules.html