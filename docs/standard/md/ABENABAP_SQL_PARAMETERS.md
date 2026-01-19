---
title: "ABENABAP_SQL_PARAMETERS"
description: |
  ABENABAP_SQL_PARAMETERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_PARAMETERS.htm"
abapFile: "ABENABAP_SQL_PARAMETERS.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENABAP", "SQL", "PARAMETERS"]
---

`... ( pname1 = act1, pname2 = act2, ... ) ...`

Specifies actual parameters `act1`, `act2`, ... for input parameters [`pname1`](ABENCDS_F1_PARAM.html), [`pname2`](ABENCDS_F1_PARAM.html), ... of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) in a parenthesized comma-separated list. Parameters can be passed to [CDS persistent entities](ABENCDS_SQL_ENTITY_GLOSRY.html) in the following positions in ABAP SQL statements:

If a CDS entity has [input parameters](ABENCDS_F1_PARAM.html) as the data source [`data_source`](ABAPSELECT_DATA_SOURCE.html) of a [query](ABENASQL_QUERY_GLOSRY.html) or `target` of a CDS association specified in a [path expression](ABENABAP_SQL_PATH.html), a matching actual parameter must be passed to each input parameter as follows:

[Literals](ABENABAP_SQL_LITERALS.html), [host variables](ABENABAP_SQL_HOST_VARIABLES.html), or [host expressions](ABENABAP_SQL_HOST_EXPRESSIONS.html), can be specified as actual parameters. The name of a host variable must be prefixed with the escape character `@`. The data type of the parameter must be convertible to the [built-in data type](ABENDDIC_BUILTIN_TYPES.html) in the ABAP Dictionary. The built-in data type is specified by the [typing](ABENCDS_TYPING.html) of the parameter. The content of the actual parameter must match the data type of the input parameter in accordance with the rules for a [lossless assignment](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html). Only typed literals are passed directly without conversion.

In the following cases, the parentheses `( )` after the name of a CDS entity can be empty or omitted:

Parentheses cannot be specified in CDS views without input parameters or in any dictionary objects.

Passing of a time zone to the input parameter `tz` of the CDS view entity `demo_cds_assoc_sairport_tz`.

A CDS [enumerated constant](ABENENUMERATED_CONSTANT_GLOSRY.html) is specified as a column in the `SELECT` list, in the `WHERE` clause, in the `ORDER BY` clause and passed as actual parameter.

[`SELECT`, CDS View Entity with Input Parameters](ABENSELECT_CDS_PARA_ABEXA.html)

-   After a CDS entity as the [data source](ABAPSELECT_DATA_SOURCE.html) of the [`FROM` clause](ABAPFROM_CLAUSE.html) of a [query](ABENASQL_QUERY_GLOSRY.html).
-   After the CDS associations of a [path expression](ABENABAP_SQL_PATH.html) in the [data source](ABAPSELECT_DATA_SOURCE.html) of the [`FROM` clause](ABAPFROM_CLAUSE.html) and in the [column specifications](ABENABAP_SQL_COLUMNS.html) of a [query](ABENASQL_QUERY_GLOSRY.html).

-   If an input parameter does not have an annotation [`@Environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html), an explicit actual parameter must be specified.
-   If an input parameter has an annotation [`@Environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) with one of the predefined values [`#SYSTEM_...`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html), an explicit actual parameter does not need to be specified. If no actual parameter is specified, ABAP SQL passes the nominal value of the system field assigned using the annotation implicitly. Here, only the date and time are taken from the system fields `sy-datum` and `sy-uzeit` and the language and user name are taken from secure sources.
-   If an input parameter has an annotation [`@Environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) with the predefined value [`#CLIENT`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html), an explicit actual parameter must not be specified. Instead, ABAP SQL passes the ID of the current [client](ABENCLIENT_GLOSRY.html) or a client specified using [`USING CLIENT`](ABAPSELECT_CLIENT.html) implicitly.

-   The function is a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) without input parameters.
-   The view is a [CDS view](ABENCDS_VIEW_GLOSRY.html) with input parameters that are all filled implicitly using the annotation [`@Environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html).

-   There are currently no optional input parameters for CDS entities and no real replacement values for input parameters. The annotation [`@Environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) bypasses this gap for some environment values by providing the caller with the non-optional parameters implicitly.
-   Currently, a [path expression](ABENABAP_SQL_PATH.html) in a [column specification](ABENABAP_SQL_COLUMNS.html) in a [query](ABENASQL_QUERY_GLOSRY.html) cannot contain any CDS associations for entities with input parameters.
-   When parameters are passed to an entity with parameters, the syntax check is performed in [strict mode from 7.40 SP08](ABENABAP_SQL_STRICTMODE_740_SP08.html). If a host expression is specified as an actual parameter, the syntax check is performed in [strict mode from ABAP release 7.60](ABENABAP_SQL_STRICTMODE_760.html). If a [path expression](ABENABAP_SQL_PATH.html) is used at the same time or if a parameter is passed in a path expression, the syntax check is performed in [strict mode from ABAP release 7.67](ABENABAP_SQL_STRICTMODE_767.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA timezone TYPE s\_tzone VALUE 'UTC+1'. \\ncl\_demo\_input=>request( CHANGING field = timezone ). \\n\\ \\nSELECT id \\n FROM demo\_cds\_assoc\_sairport\_tz( tz = @timezone ) \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). SELECT @demo\_cds\_enum\_weekday-tue AS EnumConstant \\n FROM demo\_cds\_enum\_type\_usage\_2( \\n p1 = @demo\_cds\_enum\_char-first\_value ) \\n WHERE friday = @demo\_cds\_enum\_weekday-fri \\n ORDER BY @demo\_cds\_enum\_char-initial\_value \\n INTO TABLE @FINAL(itab). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html