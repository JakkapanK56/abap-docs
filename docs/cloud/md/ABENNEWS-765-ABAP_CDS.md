---
title: "ABENNEWS-765-ABAP_CDS"
description: |
  ABENNEWS-765-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-765-ABAP_CDS.htm"
abapFile: "ABENNEWS-765-ABAP_CDS.html"
keywords: ["select", "if", "case", "data", "types", "ABENNEWS", "765", "ABAP", "CDS"]
---

[1\. Metadata Extensions](#ABAP_MODIFICATION_1@4@)

[2\. Annotations](#ABAP_MODIFICATION_2@4@)

[3\. Cross Join](#ABAP_MODIFICATION_3@4@)

[4\. Expressions and Functions](#ABAP_MODIFICATION_4@4@)

[5\. Access Control](#ABAP_MODIFICATION_5@4@)

[Metadata extensions](ABENCDS_META_DATA_EXTENSIONS.html) are new [CDS objects](ABENCDS_OBJECT_GLOSRY.html) that allow [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html) for a [CDS entity](ABENCDS_OBJECT_GLOSRY.html) to be created and transported separately from their [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html).

For each [element annotation](ABENCDS_F1_ELEMENT_ANNOTATION.html) that is not part of an [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html), the special value [`null`](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html) can be specified (without quotation marks).

As well as an inner and outer join, it is now possible to use a [cross join](ABENCDS_JOINED_DATA_SOURCE_V1.html) in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V1.html).

The following enhancements have been implemented:

A [literal](ABENCDS_LITERAL_V1.html) of a corresponding value is not handled as a field of type `INT8`. An exception to this are literals in the definition of CDS associations.

The following enhancements have been implemented in [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html):

-   [Aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V1.html) can now be used as operands in a [`CAST` expression](ABENCDS_CAST_EXPRESSION_V1.html).
-   In a [`CAST` expression](ABENCDS_CAST_EXPRESSION_V1.html), the data types `CHAR`, `SSTR`, and `NUMC` can now be cast to `ACCP`, and the other way round.
-   The following additional string functions are now supported: [`UPPER`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html) and [`LOWER`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html)
-   The following additional date/time functions are now supported: [`ABAP_SYSTEM_TIMEZONE`](ABENCDS_TIMEZONE_FUNCTIONS_V1.html), [`ABAP_USER_TIMEZONE`](ABENCDS_TIMEZONE_FUNCTIONS_V1.html), [`TSTMP_TO_DATS`](ABENCDS_DATE_TIME_CONVERSIONS_V1.html), [`TSTMP_TO_TIMS`](ABENCDS_DATE_TIME_CONVERSIONS_V1.html), [`TSTMP_TO_DST`](ABENCDS_DATE_TIME_CONVERSIONS_V1.html), and [`DATS_TIMS_TO_TSTMP`](ABENCDS_DATE_TIME_CONVERSIONS_V1.html)
-   An addition [`AS dtype`](ABENCDS_AVG_AS_V1.html) can now be specified for the [aggregate expression](ABENCDS_AGGREGATE_FUNCTIONS_V1.html)\\ `AVG` to determine the data type of the return value.
-   A new built-in conversion function [`FLTP_TO_DEC`](ABENCDS_CONV_FUNC_TYPES_V1.html) can be used to convert arguments of type `FLTP` to packed numbers.
-   [Built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V1.html) can now be specified on the right side of a [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) condition of a [`WHERE` condition](ABENCDS_COND_EXPR_WHERE_V1.html), an [`ON` condition](ABENCDS_JOINED_DATA_SOURCE_V1.html), a [filter condition](ABENCDS_COND_EXPR_FILTER_V1.html), or a [complex case distinction](ABENCDS_COND_EXPR_CASE_V1.html).
-   In [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) conditions, fields of data sources of the type `ACCP` can now be [compared](ABENCDS_COND_EXPR_TYPES_V1.html) with fields of the same type, and with literals of the type `NUMC`.

-   As well as [conditional access rules](ABENCDS_DCL_ROLE_COND_RULE.html), there are now also [full access rules](ABENCDS_DCL_ROLE_GRANT_RULE.html).
-   There is a new operator `?=` for [access conditions](ABENCDS_DCL_ROLE_CONDITIONS.html), which checks not only for a specified value but also the initial value or the null value.
-   A new [user condition](ABENCDS_F1_COND_USER.html) compares the value of an element of a CDS entity with the current user name.

abenabap.html abennews.html abennews-76.html abennews-765.html