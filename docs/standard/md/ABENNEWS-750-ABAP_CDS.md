---
title: "ABENNEWS-750-ABAP_CDS"
description: |
  ABENNEWS-750-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-750-ABAP_CDS.htm"
abapFile: "ABENNEWS-750-ABAP_CDS.html"
keywords: ["select", "if", "case", "method", "class", "data", "types", "ABENNEWS", "750", "ABAP", "CDS"]
---

[1\. CDS Table Functions](#ABAP_MODIFICATION_1@4@)

[2\. CDS Access Control](#ABAP_MODIFICATION_2@4@)

[3\. Expressions and Functions](#ABAP_MODIFICATION_3@4@)

[4\. Session Variables](#ABAP_MODIFICATION_4@4@)

[5\. Annotation for Input Parameters](#ABAP_MODIFICATION_5@4@)

[6\. API for Evaluation of Annotations](#ABAP_MODIFICATION_6@4@)

[7\. Exposing CDS Associations](#ABAP_MODIFICATION_7@4@)

[8\. Extensions](#ABAP_MODIFICATION_8@4@)

[9\. CDS Views with Input Parameters](#ABAP_MODIFICATION_9@4@)

The new DDL statement [`DEFINE TABLE FUNCTION`](ABENCDS_F1_DEFINE_TABLE_FUNCTION.html) can be used to define [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) as a new category of [CDS entities](ABENCDS_ENTITY_GLOSRY.html). In platform-specific SQL, a CDS table function is implemented in an associated [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html).

[ABAP CDS](ABENABAP_CDS_GLOSRY.html)\\ [access control](ABENCDS_ACCESS_CONTROL.html), introduced in [ABAP release 7.40, SP10](ABENNEWS-740_SP10-ABAP_CDS.html), was expanded to include implicit evaluations of [CDS roles](ABENCDS_ROLE_GLOSRY.html) defined in the [ABAP CDS](ABENABAP_CDS_GLOSRY.html)\\ [DDL](ABENCDS_F1_DCL_SYNTAX.html) in ABAP SQL. If a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is associated with a CDS role, an additional [access condition](ABENACCESS_CONDITION_GLOSRY.html) is checked by default when the CDS entity is accessed using ABAP SQL. Only that data is read for which the current user has an authorization or that matches a literal condition.

The following enhancements have been implemented:

When a [CDS view](ABENCDS_VIEW_GLOSRY.html) is accessed using ABAP SQL, three session variables ([`$session.user`](ABENCDS_SESSION_VARIABLE_V1.html), [`$session.client`](ABENCDS_SESSION_VARIABLE_V1.html), and [`$session.system_language`](ABENCDS_SESSION_VARIABLE_V1.html)) can be accessed here. In these variables, the values of the system fields `sy-uname`, `sy-mandt` and `sy-langu` are available.

An [input parameter](ABENCDS_F1_PARAM.html) of a [CDS view](ABENCDS_VIEW_GLOSRY.html) or a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) can now be annotated with an annotation [`@Environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html). The potential values of the annotation assign ABAP system fields to the input parameters. If a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) of this type is used a [data source](ABAPSELECT_DATA_SOURCE.html) in ABAP SQL, the assigned values can be passed implicitly. In particular, the value [`#CLIENT`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) enables the client ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) to be passed implicitly, which provides support for client handling in Native SQL of the implementation of a CDS table function.

The class `CL_DD_DDL_ANNOTATION_SERVICE` contains methods for evaluating the [annotations](ABENCDS_ANNOTATION_GLOSRY.html) of [CDS entities](ABENCDS_ENTITY_GLOSRY.html).

Path expressions can now be published with more than one association in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) of a CDS view. The fields of the source data source from the `ON` condition of the published associated, which then also need to be specified, must be defined using an appropriately specified path.

The statement [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html) for [CDS DDIC-based view extensions](ABENCDS_VIEW_EXTEND_GLOSRY.html) was expanded as follows:

In ABAP release 7.50 and higher, the [input parameters](ABENCDS_PARAMETER_LIST_V1.html) of CDS views are supported by all database platforms and can be used in ABAP SQL. It is no longer necessary to query property `VIEWS_WITH_PARAMETERS` using method `USE_FEATURES` of class [`CL_ABAP_DBFEATURES`](ABENCL_ABAP_DBFEATURES.html). Querying this property results in a warning check from the syntax check.

-   Enhancements to the [`CAST` expression](ABENCDS_CAST_EXPRESSION_V1.html) of a [CDS view](ABENCDS_VIEW_GLOSRY.html):

-   A [`CAST` expression](ABENCDS_CAST_EXPRESSION_V1.html) now contain nested cast expressions and [case distinctions](ABENCDS_CASE_EXPRESSION_V1.html) as an operand.
-   Data elements can now be specified as the target type in [`CAST` expressions](ABENCDS_CAST_EXPRESSION_V1.html). This passes its semantic properties to the result. This also makes it possible to map more built-in types to itself than previously.
-   In [`CAST` expressions](ABENCDS_CAST_EXPRESSION_V1.html), the restriction no longer applies that casts of operands of the types `DEC`, `CURR`, and `QUAN` to the same types expect the target type to be long enough. In casts from `NUMC` to `NUMC`, however, the lengths must now match exactly.
-   [`CAST` expressions](ABENCDS_CAST_EXPRESSION_V1.html) can now be used to cast operands of the types `DATS` and `TIMS` to `CHAR` (if the length of the target type is sufficient).

-   A one character literal with the type `NUMC` can now be [compared](ABENCDS_COND_EXPR_TYPES_V1.html) with a data source of the type `LANG`.
-   New SQL functions for [CDS views](ABENCDS_VIEW_GLOSRY.html):

-   String functions: [`CONCAT_WITH_SPACE`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html), [`INSTR`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html), [`LEFT`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html), [`LENGTH`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html), [`LTRIM`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html), [`RIGHT`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html), [`RPAD`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html),[`RTRIM`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html)
-   Byte chain functions: [`BINTOHEX`](ABENCDS_CONV_FUNC_TYPES_V1.html), [`HEXTOBIN`](ABENCDS_CONV_FUNC_TYPES_V1.html)

-   Date functions and time functions for [CDS views](ABENCDS_VIEW_GLOSRY.html):

-   The special date functions [`DATS_DAYS_BETWEEN`](ABENCDS_DATE_FUNCTIONS_V1.html), [`DATS_ADD_DAYS`](ABENCDS_DATE_FUNCTIONS_V1.html), and [`DATS_ADD_MONTHS`](ABENCDS_DATE_FUNCTIONS_V1.html) make it possible to calculate with values of the built-in dictionary type [`DATS`](ABENDDIC_BUILTIN_TYPES.html) in [CDS views](ABENCDS_VIEW_GLOSRY.html).
-   The new date function [`DATS_IS_VALID`](ABENCDS_DATE_FUNCTIONS_V1.html) checks the validity of dates.
-   The new time function [`TIMS_IS_VALID`](ABENCDS_TIME_FUNCTIONS_V1.html) checks the validity of times.
-   The new time stamp functions [`TSTMP_IS_VALID`](ABENCDS_TIMESTAMP_FUNCTIONS_V1.html), [`TSTMP_CURRENT_UTCTIMESTAMP`](ABENCDS_TIMESTAMP_FUNCTIONS_V1.html), [`TSTMP_SECONDS_BETWEEN`](ABENCDS_TIMESTAMP_FUNCTIONS_V1.html) and [`TSTMP_ADD_SECONDS`](ABENCDS_TIMESTAMP_FUNCTIONS_V1.html) perform operations with UTC [time stamps](ABENTIME_STAMPS_PACKED.html) in packed numbers.

-   [Input parameters](ABENCDS_PARAMETER_V1.html) from the parameter list [`parameter_list`](ABENCDS_PARAMETER_LIST_V1.html) of a CDS view can be passed to many parameters of [built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V1.html).
-   In the [conversion functions](ABENCDS_CONVERSION_FUNCTIONS_V1.html)\\ `UNIT_CONVERSION` and `DECIMAL_SHIFT`, the result type was set to the data type [`QUAN`](ABENDDIC_BUILTIN_TYPES.html) or [`CURR`](ABENDDIC_BUILTIN_TYPES.html) with length 31 and 14 decimal places.

-   [Associations](ABENCDS_ASSOCIATION_V1.html) for the `SELECT` statement of the extended CDS view can now be specified after `EXTEND VIEW`.
-   The following can now be specified in the extension list `select_list_extension`:

-   [Input parameters](ABENCDS_PARAMETER_V1.html) of the extended CDS view
-   [Path expressions](ABENCDS_PATH_EXPRESSION_V1.html) for custom associations and for associations of the extended CDS view
-   [Special functions](ABENCDS_SPECIAL_FUNCTIONS_V1.html)

abenabap.html abennews.html abennews-75.html abennews-750.html