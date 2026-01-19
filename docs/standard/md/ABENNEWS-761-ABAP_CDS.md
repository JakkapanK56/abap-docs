---
title: "ABENNEWS-761-ABAP_CDS"
description: |
  ABENNEWS-761-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-761-ABAP_CDS.htm"
abapFile: "ABENNEWS-761-ABAP_CDS.html"
keywords: ["select", "if", "method", "class", "data", "types", "ABENNEWS", "761", "ABAP", "CDS"]
---

[1\. CDS Table Functions](#ABAP_MODIFICATION_1@4@)

[2\. Annotation for Input Parameters](#ABAP_MODIFICATION_2@4@)

[3\. API for Evaluation of Annotations](#ABAP_MODIFICATION_3@4@)

[4\. Expressions and Functions](#ABAP_MODIFICATION_4@4@)

[5\. Extensions](#ABAP_MODIFICATION_5@4@)

The new CDS DDL statement [`DEFINE TABLE FUNCTION`](ABENCDS_F1_DEFINE_TABLE_FUNCTION.html) can be used to define [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) as a new category of [CDS entities](ABENCDS_ENTITY_GLOSRY.html). In platform-dependent SQL, a CDS table function is implemented in an associated [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html).

An [input parameter](ABENCDS_F1_PARAM.html) of a [CDS view](ABENCDS_VIEW_GLOSRY.html) or a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) can now be annotated with an annotation [`@Environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html). The potential values of the annotation assign ABAP system fields to the input parameters. If a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) of this type is used a [data source](ABAPSELECT_DATA_SOURCE.html) in ABAP SQL, the assigned values can be passed implicitly. In particular, the value [`#CLIENT`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) enables the client ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) to be passed implicitly, which provides support for client handling in platform-dependent SQL of the implementation of a CDS table function.

The class `CL_DD_DDL_ANNOTATION_SERVICE` has been made available for evaluating annotations. It contains methods used to read the [annotations](ABENCDS_ANNOTATION_GLOSRY.html) of [CDS entities](ABENCDS_ENTITY_GLOSRY.html) from the associated system tables.

The following enhancements have been implemented:

The following changes have been made:

The statement [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html) for [CDS DDIC-based view extensions](ABENCDS_VIEW_EXTEND_GLOSRY.html) was expanded as follows:

-   The new date function [`DATS_IS_VALID`](ABENCDS_DATE_FUNCTIONS_V1.html) checks the validity of dates.
-   The new time function [`TIMS_IS_VALID`](ABENCDS_TIME_FUNCTIONS_V1.html) checks the validity of times.
-   The new time stamp functions [`TSTMP_IS_VALID`](ABENCDS_TIMESTAMP_FUNCTIONS_V1.html), [`TSTMP_CURRENT_UTCTIMESTAMP`](ABENCDS_TIMESTAMP_FUNCTIONS_V1.html), [`TSTMP_SECONDS_BETWEEN`](ABENCDS_TIMESTAMP_FUNCTIONS_V1.html), and [`TSTMP_ADD_SECONDS`](ABENCDS_TIMESTAMP_FUNCTIONS_V1.html) perform operations with UTC [time stamps in packed numbers](ABENTIME_STAMPS_PACKED.html).
-   [`CAST` expressions](ABENCDS_CAST_EXPRESSION_V1.html) can now be used to cast operands of the types `DATS` and `TIMS` to `CHAR` (if the length of the target type is sufficient).

-   In [`CAST` expressions](ABENCDS_CAST_EXPRESSION_V1.html), the restriction no longer applies that casts of operands of the types `DEC`, `CURR`, and `QUAN` to the same types expect the target type to be long enough. In casts from `NUMC` to `NUMC`, however, the lengths must now match exactly.
-   In the [conversion functions](ABENCDS_CONVERSION_FUNCTIONS_V1.html)\\ `UNIT_CONVERSION` and `DECIMAL_SHIFT`, the result type was set to the data type [`QUAN`](ABENDDIC_BUILTIN_TYPES.html) or [`CURR`](ABENDDIC_BUILTIN_TYPES.html) with length 31 and 14 decimal places.
-   In the function [`DATS_ADD_MONTHS`](ABENCDS_DATE_FUNCTIONS_V1.html), an invalid input date is now initialized or set to the value *00010101* and no longer produces an error.

-   [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) for the `SELECT` statement of the extended CDS view can now be specified after `EXTEND VIEW`.
-   The following can now be specified in the extension list `select_list_extension`:

-   [Input parameters](ABENCDS_PARAMETER_V1.html) of the extended CDS view
-   [Path expressions](ABENCDS_PATH_EXPRESSION_V1.html) for dedicated CDS associations and CDS associations of the extended CDS view
-   [Special functions](ABENCDS_SPECIAL_FUNCTIONS_V1.html)

abenabap.html abennews.html abennews-76.html abennews-761.html