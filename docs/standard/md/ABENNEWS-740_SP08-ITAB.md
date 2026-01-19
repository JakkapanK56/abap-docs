---
title: "ABENNEWS-740_SP08-ITAB"
description: |
  ABENNEWS-740_SP08-ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740_SP08-ITAB.htm"
abapFile: "ABENNEWS-740_SP08-ITAB.html"
keywords: ["loop", "if", "case", "internal-table", "ABENNEWS", "740", "SP08", "ITAB"]
---

[1\. Groupings](#ABAP_MODIFICATION_1@4@)

[2\. Expressions for Internal Tables](#ABAP_MODIFICATION_2@4@)

A new variant [`LOOP AT itab ... GROUP BY`](ABAPLOOP_AT_ITAB_VARIANTS.html) of the statement [`LOOP AT itab`](ABENGROUP_LOOP_GLOSRY.html) enables the lines in an internal table to be grouped and then the groups evaluated in a [group loop](ABAPLOOP_AT_GROUP.html). The new statement [`LOOP AT GROUP`](ABAPLOOP_AT_GROUP.html) for [member groups](ABENMEMBER_LOOP_GLOSRY.html) is used to access the lines in a group.

The new variants [`FOR GROUPS ... OF`](ABENFOR_GROUPS_OF.html) and [`FOR ... IN GROUP`](ABENFOR_IN_GROUP.html) in an [iteration expression](ABENITERATION_EXPRESSION_GLOSRY.html) for [table iterations](ABENTABLE_ITERATION_GLOSRY.html) using [`FOR`](ABENFOR_ITAB.html) can be used to perform the same groupings (and evaluate them) in [table comprehensions](ABENTABLE_COMPREHENSION_GLOSRY.html) and [table reductions](ABENTABLE_REDUCTION_GLOSRY.html) as well.

The new options for grouping internal tables exist alongside the existing [group level processing](ABENGROUP_LEVEL_PROCESSING_GLOSRY.html) functions and can replace them in many cases.

The following new aspects of [expressions](ABENNEWS-740_SP08-EXPRESSIONS.html) apply in particular to the processing of internal tables:

-   Custom [iteration expressions](ABENFOR_CONDITIONAL.html) in constructor expressions using [`NEW`](ABENNEW_CONSTRUCTOR_PARAMS_ITAB.html) and [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html) for creating internal tables.
-   [Table reductions](ABENTABLE_REDUCTION_GLOSRY.html) with the new [reduction operator](ABENREDUCE_OPERATOR_GLOSRY.html)\\ [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html).
-   [Table filtering](ABENTABLE_FILTERING_GLOSRY.html) with the new [filter operator](ABENFILTER_OPERATOR_GLOSRY.html)\\ [`FILTER`](ABENCONSTRUCTOR_EXPRESSION_FILTER.html).
-   [`LINES OF`](ABENNEW_CONSTRUCTOR_PARAMS_LSPC.html) for specifying lines in the constructor operators [`NEW`](ABENNEW_CONSTRUCTOR_PARAMS_ITAB.html) and [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html).
-   Default value [`OPTIONAL`](ABENTABLE_EXP_OPTIONAL_DEFAULT.html) or [`DEFAULT`](ABENTABLE_EXP_OPTIONAL_DEFAULT.html) for [table expressions](ABENTABLE_EXPRESSIONS.html).

abenabap.html abennews.html abennews-740.html abennews-740\_sp08.html