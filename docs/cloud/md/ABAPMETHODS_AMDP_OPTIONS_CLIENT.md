---
title: "Client-Safe Variants"
description: |
  -   `CDS SESSION CLIENT DEPENDENT` -   `CLIENT INDEPENDENT` -   The ABAP-specific session variable(ABENSESSION_VARIABLE_GLOSRY.html) `CDS_CLIENT` of the HANA database is set to its default value when the AMDP method is called from ABAP. That is the client(ABENCLIENT_GLOSRY.html) of the current
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMETHODS_AMDP_OPTIONS_CLIENT.htm"
abapFile: "ABAPMETHODS_AMDP_OPTIONS_CLIENT.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABAPMETHODS", "AMDP", "OPTIONS", "CLIENT"]
---

`... AMDP OPTIONS \{CDS SESSION CLIENT DEPENDENT\}\ |\ \{CLIENT INDEPENDENT\} ...`

[1. `... CDS SESSION CLIENT DEPENDENT`](#ABAP_VARIANT_1@1@)

[2. `... CLIENT INDEPENDENT`](#ABAP_VARIANT_2@1@)

These variants of the addition [`AMDP OPTIONS`](ABAPMETHODS_AMDP_OPTIONS.html) define the [client handling](ABENAMDP_CLIENT_HANDLING.html) of an [AMDP method](ABENAMDP_METHOD_GLOSRY.html). The variants

restrict the [`USING`](ABAPMETHOD_BY_DB_PROC.html) list and involve also checks of the SQLScript source code. They are necessary for the [client safety](ABENAMDP_CLIENT_SAFETY.html) of the AMDP method. One of the variants must be used in [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html).

For a detailed overview, how the `USING` list depends on the client handling, refer to [Client Handling/`USING` Matrices](ABENAMDP_CALL_MATRICES.html).

An AMDP method that accesses a CDS entity whose client handling is governed implicitly or explicitly by the HANA session variable `CDS_CLIENT`, must be declared with one of the options `CDS SESSION CLIENT`. Otherwise, a syntax error occurs.

The option `CDS SESSION CLIENT DEPENDENT` declares the AMDP method implementation explicitly to be [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html) and the client handling of the AMDP method is as follows:

Refer to [AMDP - Implementation of SQLScript Procedures (Client-safe)](ABENAMDP_CS_ABEXA.html) for the only way of handling client-dependent data that is client-safe.

The option `CLIENT INDEPENDENT` defines the method implementation to be [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html). Only client-independent [CDS entities](ABENCDS_ENTITY_GLOSRY.html) and [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) can be accessed and specified after the addition [`USING`](ABAPMETHOD_BY_DB_PROC.html). The SQLScript method implementation is checked as described under [AMDP - Client Safety](ABENAMDP_CLIENT_SAFETY.html). A client-independent method implementation is automatically [client-safe](ABENCLIENT_SAFE_GLOSRY.html).

The AMDP methods `GET_DOKIL_CDS` and `GET_DOKIL_DDIC` of AMDP class `CL_DEMO_AMDP_TABFNC_CLNTINDPCS` have the AMDP option `CLIENT INDEPENDENT` and access a client-independent CDS view entity as well as a client-independent DDIC database table.

The following code snippet calls the AMDP methods. Both results are the same.

Client-Safe Variants

-   `CDS SESSION CLIENT DEPENDENT`
-   `CLIENT INDEPENDENT`

-   The ABAP-specific [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ `CDS_CLIENT` of the HANA database is set to its default value when the AMDP method is called from ABAP. That is the [client](ABENCLIENT_GLOSRY.html) of the current [logon](ABENLOGON_GLOSRY.html) to the [AS ABAP](ABENAS_ABAP_GLOSRY.html) (nominal value of the ABAP system field [`sy-mandt`](ABENSYSTEM_FIELDS.html)).
-   The method implementation is made [client-safe](ABENCLIENT_SAFE_GLOSRY.html). Only the following client-safe objects can be accessed and specified after the addition [`USING`](ABAPMETHOD_BY_DB_PROC.html):

-   [Client-dependent CDS view entities](ABENCDS_V2_VIEW_CLIENT_HANDLING.html) filtered by the HANA session variable `CDS_CLIENT` (CDS [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ [`$session.client`](ABENCDS_SESSION_VAR_BUILTIN_V2.html)).
-   [Client-dependent CDS table functions](ABENCDS_FUNC_CLIENT_HANDLING.html) that are [client-safe](ABENCDS_FUNC_CLIENT_SAFETY.html).
-   Client-dependent [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html). When accessed by AMDP methods with the addition `CDS SESSION CLIENT DEPENDENT`, an implicitly generated database view is accessed that wraps the database table and selects data for the client contained in the HANA session variable `CDS_CLIENT` only. Only read accesses are allowed.
-   Client-independent CDS objects and DDIC database tables
-   Other client-dependent or client-independent AMDP methods with the AMDP option `CDS SESSION CLIENT DEPENDENT` or `CLIENT INDEPENDENT`

-   The SQLScript method implementation is checked as described under [AMDP - Client Safety](ABENAMDP_CLIENT_SAFETY.html).

-   It makes no sense, to pass an explicit parameter for the client to a method with the option `CDS SESSION CLIENT DEPENDENT` and use it in a `WHERE` condition for a client column. Since the results of the allowed data sources are implicitly restricted to the current client, the result would be empty for all clients other than the current client.
-   When accessing a client-dependent DDIC database table from an AMDP method where `CDS SESSION CLIENT DEPENDENT` is used, the data source implicitly becomes client-safe.
-   Together with `CDS SESSION CLIENT DEPENDENT`, there can be no input parameter with the name `dependent`.
-   The HANA session variable `CDS_CLIENT` can be addressed in the CDS DDL of [ABAP CDS](ABENCDS_DDL_GLOSRY.html) under the name [`$session.client`](ABENCDS_SESSION_VARIABLE_V2.html).

METHOD get\_dokil\_cds \\n BY DATABASE PROCEDURE FOR HDB \\n LANGUAGE SQLSCRIPT \\n OPTIONS READ-ONLY \\n USING demo\_cds\_dokil. \\n\\ \\n docu\_objects = \\n select \* \\n from demo\_cds\_dokil \\n where id = :id and \\n object like :object and \\n langu = 'E' \\n order by object; \\n\\ \\nENDMETHOD. METHOD get\_dokil\_ddic \\n BY DATABASE PROCEDURE FOR HDB \\n LANGUAGE SQLSCRIPT \\n OPTIONS READ-ONLY \\n USING dokil. \\n\\ \\n docu\_objects = \\n select id, object, langu, typ, version, masterlang \\n from dokil \\n where id = :id and \\n object like :object and \\n langu = 'E' \\n order by object; \\n\\ \\nENDMETHOD. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA id TYPE dokil-id VALUE 'SD'. \\nDATA object TYPE dokil-object VALUE 'ABENABAP\*'. \\ncl\_demo\_input=>new( \\n )->add\_field( CHANGING field = id \\n )->add\_field( CHANGING field = object \\n )->request( ). \\n\\ \\nREPLACE ALL OCCURRENCES OF '\*' IN object WITH '%'. \\n\\ \\ncl\_demo\_amdp\_tabfnc\_clntindpcs=>get\_dokil\_cds( \\n EXPORTING \\n id = id \\n object = object \\n IMPORTING \\n docu\_objects = FINAL(objects\_cds) ). \\n\\ \\n\\ \\ncl\_demo\_amdp\_tabfnc\_clntindpcs=>get\_dokil\_ddic( \\n EXPORTING \\n id = id \\n object = object \\n IMPORTING \\n docu\_objects = FINAL(objects\_ddic) ). \\n\\ \\nASSERT objects\_cds = objects\_ddic. \\n\\ \\nout->write( objects\_cds ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_methods.html abapmethods\_amdp\_options.html