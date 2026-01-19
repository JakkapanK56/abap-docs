---
title: "ABENAMDP_CLIENT_SAFETY"
description: |
  ABENAMDP_CLIENT_SAFETY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENAMDP_CLIENT_SAFETY.htm"
abapFile: "ABENAMDP_CLIENT_SAFETY.html"
keywords: ["do", "if", "method", "data", "ABENAMDP", "CLIENT", "SAFETY"]
---

The AMDP framework does not introduce implicit client conditions into the AMDP method implementations and there is no implicit client handling when executing an AMDP method. Therefore, [client safety](ABENCLIENT_SAFE_GLOSRY.html) must be delegated to the objects accessed in an AMDP method and declared in its [`USING`](ABAPMETHOD_BY_DB_PROC.html) list. An AMDP method is [client-safe](ABENCLIENT_SAFE_GLOSRY.html) if the following prerequisites are met:

For a detailed overview, how the `USING` list depends on the client handling, refer to [Client Handling/`USING` Matrices](ABENAMDP_CALL_MATRICES.html).

The executable example of an [SQLScript procedure](ABENAMDP_CS_ABEXA.html) demonstrates client handling using the HANA session variable `CDS_CLIENT` that is [client-safe](ABENCLIENT_SAFE_GLOSRY.html).

-   One of the following AMDP options must be used:

-   [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html)
-   The method is declared as client dependent, the HANA [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ `CDS_CLIENT` is set to its default value. Client safety is achieved by the fact that the results of all objects of the `USING` list are restricted to the current client via implicit filter conditions for the CDS session [`$session.client`](ABENCDS_SESSION_VAR_BUILTIN_V2.html) that addresses the HANA session variable `CDS_CLIENT`. For that, the `USING` list is checked for the following client-safe objects only:
-   [Client-dependent CDS view entities](ABENCDS_V2_VIEW_CLIENT_HANDLING.html).
-   [Client-dependent CDS table functions](ABENCDS_FUNC_CLIENT_HANDLING.html) that are [client-safe](ABENCDS_FUNC_CLIENT_SAFETY.html).
-   Client-dependent [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html)
-   Other client-dependent AMDP methods with the AMDP option `CDS SESSION CLIENT DEPENDENT`.
-   Client-independent CDS objects, DDIC database tables or AMDP methods
-   [`CLIENT INDEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html)
-   The method is declared as [client independent](ABENCLIENT_INDEPENDENT_GLOSRY.html) and client safety is achieved by checking the `USING` list for the following client-safe objects only:
-   [Client-independent CDS view entities](ABENCDS_V2_VIEW_CLIENT_HANDLING.html)
-   [Client-independent CDS table functions](ABENCDS_FUNC_CLIENT_HANDLING.html) that are [client-safe](ABENCDS_FUNC_CLIENT_SAFETY.html).
-   Client-independent [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html)
-   Other client-independent AMDP methods with the AMDP option `CLIENT INDEPENDENT`.

-   The SQLScript code of client-safe AMDP methods must not contain one of the following:

-   Access to database objects that are not managed by ABAP. In particular, it is not allowed to call SQLScript procedures that are not managed by AMDP and it is not allowed to access database objects outside the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) that cannot be controlled by the `USING` list.
-   Cross-client access when accessing built-in HANA functions, that have an actual parameter for the client ID. Such functions are `CONVERT_CURRENCY`, `CONVERT_UNIT`, `ADD_WORKDAYS`, `WORKDAYS_BETWEEN`, `ABAP_USER_TIMEZONE`, or `ABAP_SYSTEM_TIMEZONE`.

-   AMDP methods that have the [ABAP language version](ABENABAP_VERSION_GLOSRY.html)\\ [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html) or are a [released API](ABENRELEASED_API_GLOSRY.html) with a [C1 contract](ABENC1_CONTRACT_GLOSRY.html) or a [C4 contract](ABENC4_CONTRACT_GLOSRY.html) must be client-safe and must access client-safe objects only.
-   When using a client-dependent [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) in an AMDP method with the option `CDS SESSION CLIENT DEPENDENT`, the database table is not accessed directly. Instead an implicitly created view is accessed that is client-safe by a filter condition for the HANA session variable `CDS_CLIENT`.
-   Refer also to SAP Note [3472859](https://launchpad.support.sap.com/#/notes/3472859).

abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_client\_handling.html