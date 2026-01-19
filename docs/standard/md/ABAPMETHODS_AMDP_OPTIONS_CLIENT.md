---
title: "Client-Safe Variants"
description: |
  Non Client-Safe Variants -   `CDS SESSION CLIENT DEPENDENT` -   `CLIENT INDEPENDENT` -   The ABAP-specific session variable(ABENSESSION_VARIABLE_GLOSRY.html) `CDS_CLIENT` of the HANA database (refer to ABAP-Specific Session Variables in SAP HANA(ABENHANA_SESSION_VARIABLES.html)) is set to its
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMETHODS_AMDP_OPTIONS_CLIENT.htm"
abapFile: "ABAPMETHODS_AMDP_OPTIONS_CLIENT.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "ABAPMETHODS", "AMDP", "OPTIONS", "CLIENT"]
---

[Short Reference](ABAPMETHODS_SHORTREF.html)

`... AMDP OPTIONS \{CDS SESSION CLIENT DEPENDENT\}\ |\ \{CLIENT INDEPENDENT\} ...`

`... AMDP OPTIONS [CDS SESSION CLIENT CURRENT|clnt] ...`

[1. `... CDS SESSION CLIENT DEPENDENT`](#ABAP_VARIANT_1@1@)

[2. `... CLIENT INDEPENDENT`](#ABAP_VARIANT_2@1@)

[3. `... CDS SESSION CLIENT CURRENT|clnt`](#ABAP_VARIANT_3@1@)

These variants of the addition [`AMDP OPTIONS`](ABAPMETHODS_AMDP_OPTIONS.html) define the [client handling](ABENAMDP_CLIENT_HANDLING.html) of an [AMDP method](ABENAMDP_METHOD_GLOSRY.html). The variants

restrict the [`USING`](ABAPMETHOD_BY_DB_PROC.html) list and involve also checks of the SQLScript source code. They are necessary for the [client safety](ABENAMDP_CLIENT_SAFETY.html) of the AMDP method. One of the variants must be used in [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html).

If the variant `CDS SESSION CLIENT CURRENT|clnt` is used there is no restriction to the [`USING`](ABAPMETHOD_BY_DB_PROC.html) list. If none of the AMDP options for client handling is used, the [`USING`](ABAPMETHOD_BY_DB_PROC.html) list is restricted to objects that do not depend on the HANA session variable `CDS_CLIENT`. In both cases the AMDP method is not protected against cross-client access to data sources. The method implementation can access the data of any client of client-dependent sources.

For a detailed overview, how the `USING` list depends on the client handling, refer to [Client Handling/`USING` Matrices](ABENAMDP_CALL_MATRICES.html).

An AMDP method that accesses a CDS entity whose client handling is governed implicitly or explicitly by the HANA session variable `CDS_CLIENT`, must be declared with one of the options `CDS SESSION CLIENT`. Otherwise, a syntax error occurs.

The option `CDS SESSION CLIENT DEPENDENT` declares the AMDP method implementation explicitly to be [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html) and the client handling of the AMDP method is as follows:

Refer to [AMDP - Implementation of SQLScript Procedures (Client-safe)](ABENAMDP_CS_ABEXA.html) for the only way of handling client-dependent data that is client-safe.

The option `CLIENT INDEPENDENT` defines the method implementation to be [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html). Only client-independent data sources can be accessed and specified after the addition [`USING`](ABAPMETHOD_BY_DB_PROC.html). The SQLScript method implementation is checked as described under [AMDP - Client Safety](ABENAMDP_CLIENT_SAFETY.html). A client-independent method implementation is automatically [client-safe](ABENCLIENT_SAFE_GLOSRY.html).

The AMDP methods `GET_DOKIL_CDS` and `GET_DOKIL_DDIC` of AMDP class `CL_DEMO_AMDP_TABFNC_CLNTINDPCS` have the AMDP option `CLIENT INDEPENDENT` and access a client-independent CDS view entity as well as a client-independent DDIC database table.

The following code snippet calls the AMDP methods. Both results are the same.

This variant sets the ABAP-specific [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ `CDS_CLIENT` of the HANA database (refer to [ABAP-Specific Session Variables in SAP HANA](ABENHANA_SESSION_VARIABLES.html)) when the AMDP method is called from ABAP.

The session variable is only set when the AMDP method is called from ABAP. If the associated database procedure or function is called from another AMDP method or from a database procedure or function that is not managed by AMDP, the session variable is not affected.

Refer to [AMDP - Implementation of an SQLScript Procedure (not Client-safe)](ABENAMDP_ABEXA.html) for different ways of client handling that are not client-safe.

Client-Safe Variants

Non Client-Safe Variants

-   `CDS SESSION CLIENT DEPENDENT`
-   `CLIENT INDEPENDENT`

-   The ABAP-specific [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ `CDS_CLIENT` of the HANA database (refer to [ABAP-Specific Session Variables in SAP HANA](ABENHANA_SESSION_VARIABLES.html)) is set to its default value when the AMDP method is called from ABAP. That is the [client](ABENCLIENT_GLOSRY.html) of the current [logon](ABENLOGON_GLOSRY.html) to the [AS ABAP](ABENAS_ABAP_GLOSRY.html) (nominal value of the ABAP system field [`sy-mandt`](ABENSYSTEM_FIELDS.html)).
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
-   Generally, for each [AMDP access](ABENABAP_MANAGED_DB_OBJECTS_AMDP.html) to a DDIC database table, a view is generated implicitly in order to preserve the order of fields as defined in the ABAP Dictionary. If the option `CDS SESSION CLIENT DEPENDENT` is used, this view is extended with a condition for the client.

-   If `CURRENT` is specified, the session variable is set to its default value, that is, to the nominal value of the ABAP system field [`sy-mandt`](ABENSYSTEM_FIELDS.html) or the [client](ABENCLIENT_GLOSRY.html) of the current [logon](ABENLOGON_GLOSRY.html). In this case there can be no input parameter with the name `current`.
-   For `clnt`, the name of an input parameter of the current method can be specified. Its type must be compatible with the built-in DDIC type [`CLNT`](ABENDDIC_BUILTIN_TYPES.html). The session variable is set to the value passed to this parameter during the call, or to the value of the replacement parameter declared with [`DEFAULT`](ABAPMETHODS_PARAMETERS.html).

-   The option `CDS SESSION CLIENT CURRENT` sets the session variable `CDS_CLIENT` in the same way as the option `CDS SESSION CLIENT DEPENDENT` but is not sufficient to make the AMDP method [client-safe](ABENCLIENT_SAFE_GLOSRY.html), because it does not restrict the [`USING`](ABAPMETHOD_BY_DB_PROC.html) list.
-   If `CDS SESSION CLIENT` is used for an AMDP method, the AMDP framework sets the session variable `CDS_CLIENT` exactly once when this method is called from ABAP. The following recommendations apply:

-   The value of the input parameter marked with `clnt` should be handled as a constant and should not be changed when executing the implementation, so that it always matches the value of the session variable. When calling other implementations of AMDP methods that are declared with `CDS SESSION CLIENT`, only the client ID that matches the value of the session variable should be passed.
-   The value of the session variable should not be overwritten using database methods.

-   This ensures that the data of the same [client](ABENCLIENT_GLOSRY.html) is used when using the input parameter in self-programmed conditions and accessing CDS-managed DDIC views (obsolete).
-   AMDP methods can call each other and when this is done, the client handling must match:

-   In a call chain that leads to a method with the addition `CURRENT`, the session variable that belongs to [`$session.client`](ABENCDS_SESSION_VARIABLE_V2.html) can only have the nominal value of the ABAP system field [`sy-mandt`](ABENSYSTEM_FIELDS.html).
-   In a call chain that leads to a method that specifies `clnt`, the session variable that belongs to `$session.client` can have a value defined explicitly by `clnt`.

-   In AMDP methods that do not access a [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), whose [client handling](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) is defined by the annotation [`@ClientHandling.algorithm: #SESSION_VARIABLE`](ABENCDS_VIEW_CLIENT_HANDLING_V1.html), the option `CDS SESSION CLIENT` can be used to set [`$session.client`](ABENCDS_SESSION_VARIABLE_V1.html) to a particular value, but this is generally not necessary. Instead of accessing the session variables for the client ID in the implementation, these should be passed to an input parameter and this should then be used.
-   The option `CDS SESSION CLIENT` is mainly required if an AMDP method accesses the [CDS-managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), whose [client handling](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) is determined by the annotation [`@ClientHandling.algorithm: #SESSION_VARIABLE`](ABENCDS_VIEW_CLIENT_HANDLING_V1.html). In such DDIC database views, the session variable belonging to [`$session.client`](ABENCDS_SESSION_VARIABLE_V1.html) is usually evaluated in comparisons with a client column. If the option `CDS SESSION CLIENT` is not used when calling AMDP methods or the addition [`USING CLIENT`](ABAPSELECT_CLIENT.html) in ABAP SQL, the default value for the session variable would be the nominal value of the ABAP system field [`sy-mandt`](ABENSYSTEM_FIELDS.html). By setting the session variable when an AMDP method is called, the [CDS-managed DDIC views (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) that are used select the data of the required [client](ABENCLIENT_GLOSRY.html). If, in the implementation of the AMDP method, there is a separate selection of a client ID when the CDS-managed DDIC view (obsolete) is accessed that does not match the value of the session variable, the result set is empty.

METHOD get\_dokil\_cds \\n BY DATABASE PROCEDURE FOR HDB \\n LANGUAGE SQLSCRIPT \\n OPTIONS READ-ONLY \\n USING demo\_cds\_dokil. \\n\\ \\n docu\_objects = \\n select \* \\n from demo\_cds\_dokil \\n where id = :id and \\n object like :object and \\n langu = 'E' \\n order by object; \\n\\ \\nENDMETHOD. METHOD get\_dokil\_ddic \\n BY DATABASE PROCEDURE FOR HDB \\n LANGUAGE SQLSCRIPT \\n OPTIONS READ-ONLY \\n USING dokil. \\n\\ \\n docu\_objects = \\n select id, object, langu, typ, version, masterlang \\n from dokil \\n where id = :id and \\n object like :object and \\n langu = 'E' \\n order by object; \\n\\ \\nENDMETHOD. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA id TYPE dokil-id VALUE 'SD'. \\nDATA object TYPE dokil-object VALUE 'ABENABAP\*'. \\ncl\_demo\_input=>new( \\n )->add\_field( CHANGING field = id \\n )->add\_field( CHANGING field = object \\n )->request( ). \\n\\ \\nREPLACE ALL OCCURRENCES OF '\*' IN object WITH '%'. \\n\\ \\ncl\_demo\_amdp\_tabfnc\_clntindpcs=>get\_dokil\_cds( \\n EXPORTING \\n id = id \\n object = object \\n IMPORTING \\n docu\_objects = FINAL(objects\_cds) ). \\n\\ \\n\\ \\ncl\_demo\_amdp\_tabfnc\_clntindpcs=>get\_dokil\_ddic( \\n EXPORTING \\n id = id \\n object = object \\n IMPORTING \\n docu\_objects = FINAL(objects\_ddic) ). \\n\\ \\nASSERT objects\_cds = objects\_ddic. \\n\\ \\nout->write( objects\_cds ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_methods.html abapmethods\_amdp\_options.html