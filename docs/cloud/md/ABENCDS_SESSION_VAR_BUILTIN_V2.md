---
title: "ABENCDS_SESSION_VAR_BUILTIN_V2"
description: |
  ABENCDS_SESSION_VAR_BUILTIN_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SESSION_VAR_BUILTIN_V2.htm"
abapFile: "ABENCDS_SESSION_VAR_BUILTIN_V2.html"
keywords: ["select", "if", "method", "class", "data", "ABENCDS", "SESSION", "VAR", "BUILTIN"]
---

`... $session.vname ...`

Specifies a built-in [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ `vname` in an operand position in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). The variable must be prefixed by `$session.`.

Session variables have a predefined name and provide context-dependent information. The following built-in session variables exist:

The following CDS view entity contains all possible session variables in the `SELECT` list.

The following CDS view entity `DEMO_CDS_SELECT_T100_VE` accesses the CDS view entity `DEMO_CDS_SELECT_T100_LANGU_VE`, which contains a language input parameter to which the annotation [`environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) with the value `system_language` is assigned. Unlike in ABAP SQL, there is no implicit pass of the actual parameter to the input parameter here and the corresponding session variable `$session.system_language` is passed instead. The class `CL_DEMO_CDS_T100_VE` uses ABAP SQL to access both view entities and the result is identical. When `DEMO_CDS_SELECT_T100_LANGU_VE` is accessed, the value of the system field `sy-langu` is passed implicitly to the input parameter. When `DEMO_CDS_SELECT_T100` is accessed, the session variable `$session.system_language` is filled with this value.

-   From a technical perspective, session variables indicate global variables of the current database that are set to their value when the CDS view entity is used in ABAP SQL. If ABAP SQL is not used to access a CDS view entity with session variables, the content of the variables is undefined (with the exception of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html)).
-   For [input parameters](ABENCDS_PARAMETER_LIST_V2.html) of CDS view entities annotated with the annotation [`environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html), ABAP SQL automatically passes the values of the session variables. It is generally preferable to use this type of local input parameter.
-   In existing CDS view entities without corresponding input parameters, session variables can be passed to the input parameters of CDS view entities or CDS table functions used there.
-   In CDS view entities, [client handling](ABENCDS_V2_VIEW_CLIENT_HANDLING.html) takes place implicitly by using the session variable `client`.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_SELECT\_T100\_VE\\n as select from DEMO\_CDS\_SELECT\_T100\_LANGU\_VE(\\n p\_langu: $session.system\_language )\\n \\{\\n key sprsl,\\n key arbgb,\\n key msgnr,\\n text\\n \\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_SELECT\_T100\_LANGU\_VE\\n with parameters\\n @Environment.systemField:#SYSTEM\_LANGUAGE\\n p\_langu : lang\\n as select from t100\\n \\{\\n key sprsl,\\n key arbgb,\\n key msgnr,\\n text\\n \\}\\n where\\n sprsl = $parameters.p\_langu\\n and arbgb = 'SABAPDEMOS'\\n **vname** **Value when accessed**\\ `user` Current [user name](ABENUSER_NAME_GLOSRY.html), nominal value of the ABAP system field [`sy-uname`](ABENSYSTEM_FIELDS.html). The returned value has the data type `CHAR`. `client` Current [client](ABENCLIENT_GLOSRY.html). The default value is the current client (nominal value of the ABAP system field [`sy-mandt`](ABENSYSTEM_FIELDS.html)). In reads of certain CDS entities with an ABAP SQL statement with the addition `USING CLIENT` and in calls of an [AMDP method](ABENAMDP_METHOD_GLOSRY.html) from ABAP in whose declaration the addition [`AMDP OPTIONS CDS SESSION CLIENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) is specified, it is the value specified here. The returned value has the data type `CLNT`, length 3. `system_language` \\ [Text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html) of the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html), nominal value of the ABAP system field [`sy-langu`](ABENSYSTEM_FIELDS.html). The returned value has the data type `LANG`, length 1. `system_date` Current [system date](ABENSYSTEM_DATE_GLOSRY.html) of the AS ABAP, nominal value of the ABAP system field [`sy-datum`](ABENSYSTEM_FIELDS.html). The returned value is of data type `DATS`, length 8. `user_timezone` [User time zone](ABENUSER_TIME_ZONE_GLOSRY.html), nominal value of the ABAP system field [`sy-zonlo`](ABENSYSTEM_FIELDS.html). The returned value has the data type `CHAR`, length 6. `user_date` Current [user date](ABENUSER_DATE_GLOSRY.html), nominal value of the ABAP system field [`sy-datlo`](ABENSYSTEM_FIELDS.html). The returned value is of data type `DATS`, length 8. abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_operands\_v2.html abencds\_session\_variable\_v2.html