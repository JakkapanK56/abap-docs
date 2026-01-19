---
title: "ABENNEWS-751-ABAP_CDS"
description: |
  ABENNEWS-751-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-751-ABAP_CDS.htm"
abapFile: "ABENNEWS-751-ABAP_CDS.html"
keywords: ["select", "if", "case", "try", "class", "data", "types", "ABENNEWS", "751", "ABAP", "CDS"]
---

[1\. Client Handling](#ABAP_MODIFICATION_1@4@)

[2\. Expressions and Functions](#ABAP_MODIFICATION_2@4@)

[3\. Cross Join](#ABAP_MODIFICATION_3@4@)

[4\. CDS Associations](#ABAP_MODIFICATION_4@4@)

[5\. Session Variables](#ABAP_MODIFICATION_5@4@)

[6\. CDS DDIC-Based View Extensions](#ABAP_MODIFICATION_6@4@)

[7\. Annotations](#ABAP_MODIFICATION_7@4@)

[8\. Metadata Extensions](#ABAP_MODIFICATION_8@4@)

[9\. Access Control](#ABAP_MODIFICATION_9@4@)

[10\. Key Fields](#ABAP_MODIFICATION_10@4@)

The new annotation `@ClientHandling` specifies the client handling of [CDS views](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) and [CDS table functions](ABENCDS_FUNC_CLIENT_HANDLING.html). It replaces the annotation `@ClientDependent` and makes it obsolete.

The following enhancements have been implemented:

The following changes have been made:

As well as an inner and outer join, it is now possible to use a [cross join](ABENCDS_JOINED_DATA_SOURCE_V1.html) in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V1.html).

The following changes have been made:

When a [CDS view](ABENCDS_VIEW_GLOSRY.html) is accessed using ABAP SQL, it is possible to access the new session variable [`$session.system_date`](ABENCDS_SESSION_VARIABLE_V1.html) in which the values of the system field `sy-datum` are available.

The statement [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html) can now be used to extend the following CDS views too:

For enhancements of the `GROUP-BY` clause and `UNION` clauses, the existing CDS view must contain the new annotation array [`AbapCatalog.viewEnhancementCategory[ ]`](ABENCDS_VIEW_ANNO_V1.html) with suitable values. The value `#NONE` of this annotation array can be used to prevent any enhancements being made to a CDS view using CDS view enhancements.

The following changes have been made:

[Metadata extensions](ABENCDS_META_DATA_EXTENSIONS.html) are new [CDS objects](ABENCDS_OBJECT_GLOSRY.html) that allow [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html) for a [CDS entity](ABENCDS_OBJECT_GLOSRY.html) to be created and transported separately from their [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html). Metadata extensions are [included](ABENCDS_META_DATA_EXTENSION_EVAL.html) by default in the [evaluation of annotations](ABENCDS_ANNOTATIONS_ANALYSIS.html) with the class `CL_DD_DDL_ANNOTATION_SERVICE`.

Metadata extensions are created using the DDL statement [`ANNOTATE VIEW`](ABENCDS_F1_ANNOTATE_VIEW.html). Each metadata extension is linked to a layer, such as a branch, customer, or partner, which determines the priority.

The following enhancements have been implemented in CDS access control:

The following changes have been made:

-   [`CAST` expression](ABENCDS_CAST_EXPRESSION_V1.html)

-   In a [`CAST` expression](ABENCDS_CAST_EXPRESSION_V1.html), operands of the type `SSTRING` can now be cast to types other than themselves and back. Here, the type `SSTRING` behaves like the data type `CHAR`.
-   In a [`CAST` expression](ABENCDS_CAST_EXPRESSION_V1.html), operands of the types `CLNT`, `LANG`, `TIMS`, and `UNIT` can now be cast to the types `CHAR` and `SSTRING`. Here, the target type must be specified as a data element.
-   In a [`CAST` expression](ABENCDS_CAST_EXPRESSION_V1.html), the data types `CHAR`, `SSTR`, and `NUMC` can now be cast to `ACCP`, and the other way round.
-   [Aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V1.html) can now be used as operands in a [`CAST` expression](ABENCDS_CAST_EXPRESSION_V1.html).

-   New Functions

-   The following additional string functions are now supported: [`UPPER`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html) and [`LOWER`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html)
-   The following additional date/time functions are now supported: [`ABAP_SYSTEM_TIMEZONE`](ABENCDS_TIMEZONE_FUNCTIONS_V1.html), [`ABAP_USER_TIMEZONE`](ABENCDS_TIMEZONE_FUNCTIONS_V1.html), [`TSTMP_TO_DATS`](ABENCDS_DATE_TIME_CONVERSIONS_V1.html), [`TSTMP_TO_TIMS`](ABENCDS_DATE_TIME_CONVERSIONS_V1.html), [`TSTMP_TO_DST`](ABENCDS_DATE_TIME_CONVERSIONS_V1.html), and [`DATS_TIMS_TO_TSTMP`](ABENCDS_DATE_TIME_CONVERSIONS_V1.html)
-   A new built-in conversion function [`FLTP_TO_DEC`](ABENCDS_CONV_FUNC_TYPES_V1.html) can be used to convert arguments of type `FLTP` to packed numbers.

-   An addition [`AS dtype`](ABENCDS_AVG_AS_V1.html) can now be specified for the [aggregate expression](ABENCDS_AGGREGATE_FUNCTIONS_V1.html)\\ `AVG` to determine the data type of the return value.
-   Conditions

-   [Built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V1.html) can now be specified on the right side of a [`cond_expr`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) condition of a [`WHERE` condition](ABENCDS_COND_EXPR_WHERE_V1.html), an [`ON` condition](ABENCDS_JOINED_DATA_SOURCE_V1.html), a [filter condition](ABENCDS_PATH_EXPRESSION_FILTER_V1.html), or a [complex case distinction](ABENCDS_COND_EXPR_CASE_V1.html).
-   In [`cond_expr`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) conditions, fields of data sources of the type `ACCP` can now be [compared](ABENCDS_COND_EXPR_TYPES_V1.html) with fields of the same type, and with literals of the type `NUMC`.

-   In [`CAST` expressions](ABENCDS_CAST_EXPRESSION_V1.html) to data elements, the restriction no longer applies that the data type, the length, and the number of decimal places of operand and target data type must match precisely. This restriction can now be applied as an optional restriction using the new addition `PRESERVING TYPE`. This addition specifies explicitly that casts are to be applied to the semantic properties of a data element. `PRESERVING TYPE` suppresses the syntax warning that handles casts of identical technical types.

-   [Associations](ABENCDS_ASSOCIATION_V1.html) can now be published for union sets formed with [`UNION`](ABENCDS_UNION_V1.html). In this case, special rules apply.
-   `WITH DEFAULT FILTER` can be used to specify a default filter condition for an [association](ABENCDS_ASSOCIATION_V1.html). This condition is used as a filter condition in a [path expression](ABENCDS_PATH_EXPRESSION_V1.html) if no condition is specified for the association here.
-   In a [path expression](ABENCDS_PATH_EXPRESSION_V1.html), [`*:`](ABENCDS_PATH_EXPR_CARD_V1.html) can be used to declare an association as a non-unique association explicitly.

-   CDS views with [aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V1.html) and a [`GROUP-BY` clause](ABENCDS_GROUP_BY_V1.html)
-   CDS views with a [`UNION` clause](ABENCDS_UNION_V1.html) for union sets

-   Annotation for Key Fields
-   The new view annotation [`AbapCatalog.preserveKey`](ABENCDS_450773322_ANNO.html) can be used to override the default behavior of the addition [`KEY`](ABENCDS_SELECT_LIST_ENTRY_V1.html) for defining key fields of a CDS view. If the annotation is specified with the value `true`, the key fields defined using `KEY` are also used for the associated CDS database view.
-   Null Values of Annotations
-   For each [element annotation](ABENCDS_F1_ELEMENT_ANNOTATION.html) that is not part of an [annotation array](ABENCDS_ANNOTATIONS_SYNTAX_ARRAY.html), the special value [`null`](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html) can be specified (without quotation marks). This means that the annotations are ignored in the [evaluation](ABENCDS_ANNOTATIONS_ANALYSIS.html) with class `CL_DD_DDL_ANNOTATION_SERVICE` by default.

-   As well as [conditional access rules](ABENCDS_DCL_ROLE_COND_RULE.html), there are now also [full access rules](ABENCDS_DCL_ROLE_GRANT_RULE.html) and [inherited access rules](ABENCDS_DCL_ROLE_INHERITED_RULE.html).
-   There is a new operator `?=` for [access conditions](ABENCDS_DCL_ROLE_CONDITIONS.html), which checks not only for a specified value but also the initial value or the null value.
-   A new [user condition](ABENCDS_F1_COND_USER.html) compares the value of an element of a CDS entity with the current user name.

-   The key fields of a CDS view that are defined with [`KEY`](ABENCDS_SELECT_LIST_ENTRY_V1.html) must now, like the key fields of a CDS table function, be placed without gaps at the start of the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html).
-   The new view annotation [`AbapCatalog.preserveKey`](ABENCDS_VIEW_ANNO_V1.html) can be used to override the default behavior of the addition [`KEY`](ABENCDS_SELECT_LIST_ENTRY_V1.html) for defining key fields of a CDS view. If the annotation is specified with the value `true`, the key fields defined using `KEY` are also used for the associated CDS-managed DDIC view (obsolete).

abenabap.html abennews.html abennews-75.html abennews-751.html