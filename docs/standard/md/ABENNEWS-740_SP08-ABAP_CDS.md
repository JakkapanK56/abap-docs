---
title: "ABENNEWS-740_SP08-ABAP_CDS"
description: |
  ABENNEWS-740_SP08-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740_SP08-ABAP_CDS.htm"
abapFile: "ABENNEWS-740_SP08-ABAP_CDS.html"
keywords: ["select", "do", "if", "case", "try", "data", "ABENNEWS", "740", "SP08", "ABAP", "CDS"]
---

[1\. CDS Annotations](#ABAP_MODIFICATION_1@4@)

[2\. CDS Views with Parameters](#ABAP_MODIFICATION_2@4@)

[3\. CDS View Extensions](#ABAP_MODIFICATION_3@4@)

[4\. Expressions and Functions](#ABAP_MODIFICATION_4@4@)

[5\. Join Type for CDS Associations](#ABAP_MODIFICATION_5@4@)

[6\. Path Expressions with Filter Conditions in Conditions](#ABAP_MODIFICATION_6@4@)

[7\. Checking Literals Against Fixed Values of Domains](#ABAP_MODIFICATION_7@4@)

The following enhancements have been introduced for [CDS annotations](ABENCDS_ANNOTATIONS.html):

In the statement [`DEFINE VIEW`](ABENCDS_DEFINE_VIEW_V1.html), [input parameters](ABENCDS_PARAMETER_LIST_V1.html) can now be defined for [CDS views](ABENCDS_VIEW_GLOSRY.html) that can be used in operand positions in the view.

When using a CDS view with parameters in a CDS view or in ABAP SQL, the input parameters must be given actual parameters; new additions are available for this in shape of parenthesized, comma-separated lists in the statements [`SELECT`](ABENCDS_SELECT_PARAMETERS_V1.html) of the DDL and [`SELECT`](ABAPSELECT_DATA_SOURCE.html) of ABAP SQL.

The new statement [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html) of the DDL of the ABAP CDS makes it possible to add new view fields to existing [CDS views](ABENCDS_VIEW_GLOSRY.html) - without making changes - by using [CDS DDIC-based view extensions](ABENCDS_VIEW_EXTEND_GLOSRY.html).

The following enhancements have been implemented:

The new attributes [`INNER`](ABENCDS_PATH_EXPR_ATTR_V1.html) and [`LEFT OUTER`](ABENCDS_PATH_EXPR_ATTR_V1.html) for a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) of a [path expression](ABENCDS_PATH_EXPRESSION_V1.html) enable to declare explicitly in which join the CDS association is performed.

The new addition [`1:`](ABENCDS_PATH_EXPR_ATTR_V1.html) before a [filter condition](ABENCDS_PATH_EXPR_ATTR_V1.html) of a [path expression](ABENCDS_PATH_EXPRESSION_V1.html) declares this condition as unique and enables the path expression to be used in a [`WHERE`](ABENCDS_WHERE_CLAUSE_V1.html) clause or [`HAVING`](ABENCDS_HAVING_CLAUSE_V1.html) clause.

The new syntax [`#domain.literal`](ABENCDS_LITERAL_V1.html) enables literal values `literal` of a [CDS view](ABENCDS_VIEW_GLOSRY.html) to be checked against the [fixed values](ABENFIXED_VALUE_GLOSRY.html) of a [DDIC domain](ABENDOMAIN_GLOSRY.html).

-   Annotations in a [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) of a [CDS view](ABENCDS_VIEW_GLOSRY.html) can now be entered after an [element](ABENCDS_SELECT_LIST_ENTRY_V1.html). Before the name of an annotation, `@<` must be written instead of `@`.
-   A new [syntax](ABENCDS_ANNOTATIONS.html) with square and curly brackets makes it possible to use value lists and annotation lists as value specification after the colon of an annotation specification.
-   The new [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ [`AbapCatalog.compiler.compareFilter`](ABENCDS_VIEW_ANNO_V1.html) can be used to specify whether, in cases when a CDS association is used more than once, the [filter conditions](ABENCDS_PATH_EXPRESSION_FILTER_V1.html) are compared for the path expressions of a view. If the filter condition has identical semantics, the associated join expression is created only once in the variant of the view on the database.

-   Division with operator `/` is now supported in [arithmetic expressions](ABENCDS_ARITHMETIC_EXPRESSION_V1.html).
-   The following new [built-in functions](ABENCDS_SQL_FUNCTIONS_V1.html) have been added:

-   String functions `CONCAT` and `REPLACE`
-   Numeric functions `ABS`, `DIV`, `DIVISION`, `FLOOR`, `MOD`, and `ROUND`

-   The new [coalesce function](ABENCDS_COALESCE_EXPRESSION_V1.html) has been added.
-   In addition to [simple](ABENCDS_SIMPLE_CASE_EXPRESSION_V1.html) case distinction, [complex](ABENCDS_SEARCHED_CASE_EXPR_V1.html)\\ [case distinction](ABENCDS_CASE_EXPRESSION_V1.html) (searched case) is now also available.
-   The special conversion functions [`UNIT_CONVERSION`](ABENCDS_CONVERSION_FUNCTIONS_V1.html), [`CURRENCY_CONVERSION`](ABENCDS_CONVERSION_FUNCTIONS_V1.html), and [`DECIMAL_SHIFT`](ABENCDS_CONVERSION_FUNCTIONS_V1.html) enable unit conversions and currency conversions.

abenabap.html abennews.html abennews-740.html abennews-740\_sp08.html