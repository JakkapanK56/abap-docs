---
title: "ABENAMDP_CLIENT_HDL_DEF"
description: |
  ABENAMDP_CLIENT_HDL_DEF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAMDP_CLIENT_HDL_DEF.htm"
abapFile: "ABENAMDP_CLIENT_HDL_DEF.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "ABENAMDP", "CLIENT", "HDL", "DEF"]
---

The client handling of an AMDP method that does not implement a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) is defined by the usage of the respective AMDP options [`client_handling`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) that can be used behind the statements `METHODS` or `CLASS-METHODS`. The client handling of an AMDP method that implements a CDS table function by [`FOR TABLE FUNCTION`](ABAPCLASS-METHODS_FOR_TABFUNC.html) is governed by the [client handling](ABENCDS_FUNC_CLIENT_HANDLING.html) of the table function.

The following options are possible:

For all of the above client-dependent options, the client selection is not done by the AMDP framework but depends on the method implementation, that is on the data sources and the `WHERE` conditions used for the client ID.

In [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html), an AMDP method must be [client-safe](ABENCLIENT_SAFE_GLOSRY.html). For client-dependent data sources this can only achieved by using the AMDP option [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html). Then it is guaranteed, that all data sources are filtered implicitly by the current client.

For a detailed overview, how the `USING` list depends on the client handling, refer to [Client Handling/`USING` Matrices](ABENAMDP_CALL_MATRICES.html).

-   [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html)
-   This option sets the HANA [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ `CDS_CLIENT` to the ID of the [client](ABENCLIENT_GLOSRY.html) of the current [logon](ABENLOGON_GLOSRY.html) to the [AS ABAP](ABENAS_ABAP_GLOSRY.html) when the method is called from ABAP. Furthermore, it restricts the [`USING`](ABAPMETHOD_BY_DB_PROC.html) list to client-independent objects or to client-dependent objects that can access data of that client only. Such an AMDP method is [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html) and [client-safe](ABENCLIENT_SAFE_GLOSRY.html).
-   [`CLIENT INDEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html)
-   This option restricts the [`USING`](ABAPMETHOD_BY_DB_PROC.html) list to [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html) objects. The AMDP method is itself client-independent and [client-safe](ABENCLIENT_SAFE_GLOSRY.html).
-   [`CDS SESSION CLIENT CURRENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html)
-   This option sets the HANA [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ `CDS_CLIENT` in the same way as the option `CDS SESSION CLIENT DEPENDENT` but does not restrict the [`USING`](ABAPMETHOD_BY_DB_PROC.html) list. It depends on the objects used and the implementation of the method which data of which clients are accessed. Such an AMDP method is not [client-safe](ABENCLIENT_SAFE_GLOSRY.html).
-   [`CDS SESSION CLIENT clnt`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html)
-   This option sets the HANA [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ `CDS_CLIENT` to the value that is passed to the parameter `clnt` of the method. It does not restrict the [`USING`](ABAPMETHOD_BY_DB_PROC.html) list. It depends on the objects used and the implementation of the method which data of which clients are accessed. Such an AMDP method is not [client-safe](ABENCLIENT_SAFE_GLOSRY.html).
-   If none of the above options are used:
-   The HANA [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ `CDS_CLIENT` is not set when the method is called. The [`USING`](ABAPMETHOD_BY_DB_PROC.html) list can contain all kinds of objects that are not restricted to data of the client represented by the HANA session variable `CDS_CLIENT`. It depends on the objects used and the implementation of the method which data of which clients are accessed. Such an AMDP method is not [client-safe](ABENCLIENT_SAFE_GLOSRY.html).

-   If CDS entities are accessed that are filtered implicitly for the HANA session variable `CDS_CLIENT`, one of the options [`CDS SESSION CLIENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) must be used. The data sources return data of that client only. If a `WHERE` condition of the implementation filters data of another client, the result is empty.
-   If [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) are accessed in AMDP methods with the addition `CDS SESSION CLIENT DEPENDENT`, not the database table itself is accessed, but an implicitly generated database view that is filtered for the HANA session variable `CDS_CLIENT` and returns data of the client contained in that variable only.
-   If data sources that are not filtered implicitly for the HANA session variable `CDS_CLIENT` are accessed and none of the options [`CDS SESSION CLIENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) are used, the required client ID must be selected explicitly in the implementation. In such cases, the parameter interface of an AMDP method must usually contain an input parameter for the client ID that is used in a `WHERE` condition for he client ID.

-   For AMDP methods that use one of the options [`CDS SESSION CLIENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) and that access only data sources that are filtered implicitly for the HANA session variable `CDS_CLIENT`, usually do not need an input parameter for a client ID. This is especially the case for the option [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html).
-   In [SQLScript](ABENAMDP_HDB_SQLSCRIPT.html) implementations, the built-in function [`SESSION_CONTEXT`](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f) can be used to access the [ABAP-specific session variables](ABENHANA_SESSION_VARIABLES.html)\\ `CLIENT` and `CDS_CLIENT` of the SAP HANA database. In a call from ABAP, these variables contain a client ID:

-   `CLIENT` always contains the nominal value of the ABAP system field [`sy-mandt`](ABENSYSTEM_FIELDS.html).
-   `CDS_CLIENT` contains the same value as `CLIENT` by default, but can be modified during the execution of an ABAP SQL statement by the addition [`USING CLIENT`](ABAPSELECT_CLIENT.html) and in an AMDP method call from ABAP by the addition [`AMDP OPTIONS CDS SESSION CLIENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html).

-   Access of this type should be used only if it is guaranteed that an AMDP method is called only from ABAP.

abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_client\_handling.html