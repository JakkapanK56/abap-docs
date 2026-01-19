---
title: "ABENCDS_TIMEZONE_FUNCTIONS_V2"
description: |
  ABENCDS_TIMEZONE_FUNCTIONS_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_TIMEZONE_FUNCTIONS_V2.htm"
abapFile: "ABENCDS_TIMEZONE_FUNCTIONS_V2.html"
keywords: ["select", "if", "case", "class", "data", "types", "ABENCDS", "TIMEZONE", "FUNCTIONS"]
---

`... ABAP_SYSTEM_TIMEZONE(clnt,on_error)    | ABAP_USER_TIMEZONE(user,clnt,on_error) ...`

[1. `... ABAP_SYSTEM_TIMEZONE(clnt,on_error)`](#ABAP_VARIANT_1@1@)

[2. `... ABAP_USER_TIMEZONE(user,clnt,on_error)`](#ABAP_VARIANT_2@1@)

In a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), these functions return the client-dependent [system time zone](ABENSYSTEM_TIME_ZONE_GLOSRY.html) and the user-dependent [user time zone](ABENUSER_TIME_ZONE_GLOSRY.html) of the current AS ABAP. The functions have [positional parameters](ABENPOSITIONAL_PARAMETER_GLOSRY.html) to which actual parameters must be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](ABENCDS_DATA_SOURCE_V2.html), [literals](ABENCDS_LITERAL_V2.html), [parameters](ABENCDS_PARAMETER_V2.html), [path expressions](ABENCDS_PATH_EXPRESSION_V2.html), [built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V2.html), [SQL-based scalar functions](ABENCDS_SQL_SCALAR_FUNCTION.html), [expressions](ABENCDS_EXPRESSIONS_V2.html), or [reuse expressions](ABENCDS_REUSABLE_EXPRESSION_V2.html) using `$projection` can all be specified as actual parameters. Only literals can be passed to the parameter `on_error`. If an actual parameter contains the [null value](ABENNULL_VALUE_GLOSRY.html), every function returns a null value.

For [user time zone](ABENUSER_TIME_ZONE_GLOSRY.html), there is also the [session variable](ABENCDS_SESSION_VARIABLE_V2.html)\\ `user_timezone` available. It returns the same result as the built-in function `ABAP_USER_TIMEZONE`.

The function `ABAP_SYSTEM_TIMEZONE` returns the [system time zone](ABENSYSTEM_TIME_ZONE_GLOSRY.html) of the AS ABAP for the [client](ABENCLIENT_GLOSRY.html) specified with `clnt`. The actual parameter `clnt` must have the built-in dictionary type [`CLNT`](ABENDDIC_BUILTIN_TYPES.html) and must contain a valid [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html). In [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html), only the session variable [`$session.client`](ABENCDS_SESSION_VARIABLE_V2.html) can be specified for `clnt`.

The result has the [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) type with a length of 6. If the system time zone cannot be determined, an error is raised.

The actual parameter `on_error` controls error handling. It must have the built-in data type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with the length 10 and must have one of the following values:

The values are case-sensitive. Any incorrectly specified values raise an exception.

The system time zone returned is the client-dependent content of column `TZONESYS` in DDIC database table `TTZCU`.

The function `ABAP_USER_TIMEZONE` returns the [user time zone](ABENUSER_TIME_ZONE_GLOSRY.html) of the AS ABAP for the [ABAP user](ABENABAP_USER_GLOSRY.html) specified with `user` and the [client](ABENCLIENT_GLOSRY.html) specified with `clnt`. The actual parameter `user` must have the built-in type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html). The same applies to the actual parameter `clnt` as to function `ABAP_SYSTEM_TIMEZONE`. The result has the [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) type with a length of 6. If the user time zone cannot be determined, an error is raised.

The actual parameter `on_error` controls error handling and the same applies as in function `ABAP_SYSTEM_TIMEZONE`.

For the [current client](ABENCURRENT_CLIENT_GLOSRY.html), the returned user time zone corresponds with the content of system field [`sy-zonlo`](ABENSYSTEM_FIELDS.html) in ABAP.

The following `SELECT` statement returns the values for system time zone and user time zone that were read with the `ABAP_SYSTEM_TIMEZONE` and `ABAP_USER_TIMEZONE` functions for the current client and current user. The actual parameters of the functions are supplied with suitable [session variables](ABENSESSION_VARIABLE_GLOSRY.html). The class `CL_DEMO_CDS_TIMEZONE_FUNC_VE` accesses the view, compares the CDS values with the corresponding ABAP values, and returns the result.

-   *FAIL* (an error raises an exception)
-   *NULL* (an error returns the null value)
-   *INITIAL* (an error returns the initial value)

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_TIMEZONE\_FUNC\_VE\\n as select from demo\_expressions\\n\\{\\n key id,\\n abap\_system\_timezone( $session.client,'NULL' ) as system\_tz,\\n abap\_user\_timezone( $session.user,$session.client,'NULL' ) \\n as user\_tz,\\n $session.user\_timezone as user\_tz\_session\_var\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html abencds\_builtin\_functions\_v2.html abencds\_special\_functions\_v2.html abencds\_date\_time\_functions\_v2.html