---
title: "ABENSQL_TIMEZONE_FUNC"
description: |
  ABENSQL_TIMEZONE_FUNC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_TIMEZONE_FUNC.htm"
abapFile: "ABENSQL_TIMEZONE_FUNC.html"
keywords: ["select", "if", "class", "data", "types", "ABENSQL", "TIMEZONE", "FUNC"]
---

`... ABAP_SYSTEM_TIMEZONE( [client   = client][,                                   on_error = on_error] )    | ABAP_USER_TIMEZONE( [user     = user ][,                           client   = client][,                           on_error = on_error] ) ...`

[1. `... ABAP_SYSTEM_TIMEZONE( ... )`](#ABAP_VARIANT_1@1@)

[2. `... ABAP_USER_TIMEZONE( ... )`](#ABAP_VARIANT_2@1@)

These SQL functions return the client-dependent [system time zone](ABENSYSTEM_TIME_ZONE_GLOSRY.html) and the user-dependent [user time zone](ABENUSER_TIME_ZONE_GLOSRY.html) of the current AS ABAP.

The arguments of the functions are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and in front of the closing parenthesis. The functions have optional [keyword parameters](ABENKEYWORD_PARAMETER_GLOSRY.html) to which actual parameters can be assigned when called.

[SQL expressions](ABAPSQL_EXPR.html), in particular individual columns, literals, SQL functions, host variables or host expressions can be specified as actual parameters. Only [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html) of specific classes can be passed to the parameter `on_error`. If an actual parameter contains the [null value](ABENNULL_VALUE_GLOSRY.html), every function returns a null value.

The use of these functions enforces the [strict mode from ABAP release 7.72](ABENABAP_SQL_STRICTMODE_772.html).

The function `ABAP_SYSTEM_TIMEZONE` returns the [system time zone](ABENSYSTEM_TIME_ZONE_GLOSRY.html) of the AS ABAP for the [client](ABENCLIENT_GLOSRY.html) passed to `client`. The actual parameter for the optional formal parameter `client` must have the built-in dictionary type [`CLNT`](ABENDDIC_BUILTIN_TYPES.html) and contain a valid [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html). The default value is the [current client](ABENCURRENT_CLIENT_GLOSRY.html).

The result has the type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with the length 6. If the system time zone cannot be detected, an error occurs.

The optional parameter `on_error` affects how errors are handled. The parameter for `on_error` must be an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) with the [enumerated type](ABENENUMERATED_TYPE_GLOSRY.html)\\ `ON_ERROR` from the class `SQL_ABAP_SYSTEM_TIMEZONE` and the following [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html) can be passed:

The system time zone returned is the client-dependent content of column `TZONESYS` in DDIC database table `TTZCU`.

The function `ABAP_USER_TIMEZONE` returns the [user time zone](ABENUSER_TIME_ZONE_GLOSRY.html) of AS ABAP for the [user name](ABENUSER_NAME_GLOSRY.html) passed to `user` and the [client](ABENCLIENT_GLOSRY.html) passed to `client`.

The actual parameter for the optional formal parameter `user` must have the built-in type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with length 12. The default value is the user name of the current [ABAP user](ABENABAP_USER_GLOSRY.html). The same applies to the parameter `client` as to the function `ABAP_SYSTEM_TIMEZONE`.

The result has the type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with the length 6. If the user time zone cannot be detected, an error occurs.

The optional parameter `on_error` affects how errors are handled. The actual parameter for `on_error` must be an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) with the [enumerated type](ABENENUMERATED_TYPE_GLOSRY.html)\\ `ON_ERROR` from the class `SQL_ABAP_USER_TIMEZONE` and the following [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html) can be passed:

For the current client, the returned user time zone corresponds to the content of system field [`sy-zonlo`](ABENSYSTEM_FIELDS.html) in ABAP.

The following `SELECT` statement returns the values for system time zone and user time zone that were read with the `ABAP_SYSTEM_TIMEZONE` and `ABAP_USER_TIMEZONE` functions for the current client and the current user. The optional parameters `client` and `user` are filled explicitly with [host variables](ABENHOST_VARIABLE_GLOSRY.html). The system fields contain the default values and could be omitted if required. The class `CL_DEMO_SQL_TIMEZONE_FUNCTIONS` executes the statement and displays the result.

The [example for date/time conversions](ABENSQL_DATE_TIME_CONVERSIONS.html) uses the function `ABAP_SYSTEM_TIMEZONE` without parameters being specified explicitly.

-   `SQL_ABAP_SYSTEM_TIMEZONE=>FAIL`, an error raises an exception (default)
-   `SQL_ABAP_SYSTEM_TIMEZONE=>SET_TO_NULL`, an error returns the null value

-   `SQL_ABAP_USER_TIMEZONE=>FAIL`, an error raises an exception (default)
-   `SQL_ABAP_USER_TIMEZONE=>SET_TO_NULL`, an error returns the null value

SELECT SINGLE \\n FROM demo\_expressions \\n FIELDS \\n abap\_system\_timezone( \\n on\_error = @sql\_abap\_system\_timezone=>set\_to\_null ) \\n AS system\_tz, \\n abap\_user\_timezone( \\n user = @sy-uname, \\n on\_error = @sql\_abap\_user\_timezone=>set\_to\_null ) \\n AS user\_tz \\n INTO @FINAL(result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_special\_functions.html abenabap\_sql\_date\_time\_functions.html