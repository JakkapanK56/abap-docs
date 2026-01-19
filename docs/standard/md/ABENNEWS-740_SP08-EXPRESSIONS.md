---
title: "ABENNEWS-740_SP08-EXPRESSIONS"
description: |
  ABENNEWS-740_SP08-EXPRESSIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740_SP08-EXPRESSIONS.htm"
abapFile: "ABENNEWS-740_SP08-EXPRESSIONS.html"
keywords: ["select", "insert", "while", "if", "case", "method", "data", "types", "internal-table", "ABENNEWS", "740", "SP08", "EXPRESSIONS"]
---

[1\. Predicative Method Calls](#ABAP_MODIFICATION_1@4@)

[2\. New Boolean Function](#ABAP_MODIFICATION_2@4@)

[3\. Iteration Expressions](#ABAP_MODIFICATION_3@4@)

[4\. Table Filtering](#ABAP_MODIFICATION_4@4@)

[5\. Start Value for Constructor Expressions](#ABAP_MODIFICATION_5@4@)

[6\. Inserting Table Lines in Constructed Tables](#ABAP_MODIFICATION_6@4@)

[7\. Grouping Internal Tables](#ABAP_MODIFICATION_7@4@)

[8\. Default Value for Table Expressions](#ABAP_MODIFICATION_8@4@)

[9\. Restrictions Removed](#ABAP_MODIFICATION_9@4@)

The [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html)

[`meth( ) IS NOT INITIAL`](ABENLOGEXP_INITIAL.html)

can now be specified in a short form as a [predicate method call](ABENPREDICATIVE_METHOD_CALL_GLOSRY.html)

[`... meth( ) ...`](ABENPREDICATIVE_METHOD_CALLS.html)

This makes is possible to use [predicate methods](ABENPREDICATE_METHOD_GLOSRY.html) in logical expressions as if their return value had a real Boolean data type.

The new Boolean function [`xsdbool`](ABENBOOLE_FUNCTIONS.html) returns the value *X* or a blank of the type `c` with the length 1, depending on the truth value of the logical expression specified as the argument. This expands the existing function [`boolc`](ABENBOOLE_FUNCTIONS.html), whose return value has the type `string`. This can produce unexpected results in comparisons with text fields and in checks on the initial value.

The return value of [`xsdbool`](ABENBOOLE_FUNCTIONS.html) still references the special type `XSDBOOLEAN` from ABAP Dictionary. This means it is handled like a real truth value in serializations and deserializations to or from [asXML](ABENASXML_GLOSRY.html) and [asJSON](ABENASJSON_GLOSRY.html).

Critical uses of [`boolc`](ABENBOOLE_FUNCTIONS.html) now produce a syntax check warning.

The iteration expressions introduced using `FOR` (until now only available for table iterations in [table comprehensions](ABENTABLE_COMPREHENSION_GLOSRY.html)) have been expanded to include [conditional iterations](ABENFOR_CONDITIONAL.html) with the additions `UNTIL` and `WHILE`. This makes it possible to program any iteration in the constructor expressions [`NEW`](ABENNEW_CONSTRUCTOR_PARAMS_ITAB.html) and [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html) for creating internal tables.

A new [reduction operator](ABENREDUCE_OPERATOR_GLOSRY.html)\\ [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html) can execute these conditional iterations and table iterations to construct the results of any data types. In the case of table iterations, this is also known as [table reduction](ABENTABLE_REDUCTION_GLOSRY.html).

The new [filter operator](ABENFILTER_OPERATOR_GLOSRY.html)\\ [`FILTER`](ABENCONSTRUCTOR_EXPRESSION_FILTER.html) can be used to perform [table filtering](ABENTABLE_FILTERING_GLOSRY.html) in which conditions are used to select or remove lines from an internal table. The result is used to construct a new internal table.

The new addition `BASE` can be used to provide the return value of a constructor expression for structures or internal tables with a start value, before the actual construction starts. The addition `BASE` can be used in the following constructor expressions:

When internal tables are constructed using the instance operator [`NEW`](ABENNEW_CONSTRUCTOR_PARAMS_ITAB.html) and the value operator [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html), [`LINES OF`](ABENNEW_CONSTRUCTOR_PARAMS_LSPC.html) can now be used to insert multiple lines from an existing internal table in the target table.

The new variants [`FOR GROUPS ... OF`](ABENFOR_GROUPS_OF.html) and [`FOR ... IN GROUP`](ABENFOR_IN_GROUP.html) in an [iteration expression](ABENITERATION_EXPRESSION_GLOSRY.html) for [table iterations](ABENTABLE_ITERATION_GLOSRY.html) using [`FOR`](ABENFOR_ITAB.html) can be used to group the lines of internal tables and to evaluate the groups.

If the type of the result of a [table expression](ABENTABLE_EXPRESSIONS.html) or a chaining of table expressions is controlled using the constructor operators `VALUE` or `REF`, the additions [`OPTIONAL`](ABENTABLE_EXP_OPTIONAL_DEFAULT.html) and [`DEFAULT`](ABENTABLE_EXP_OPTIONAL_DEFAULT.html) can be used to specify a default value. If no lines are found, no exception is raised and the default value is returned instead.

The following restrictions were removed:

-   Instance operator [`NEW`](ABENNEW_CONSTRUCTOR_PARAMS_STRUCT.html) and value operator [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_STRUC.html) for structures
-   Instance operator [`NEW`](ABENNEW_CONSTRUCTOR_PARAMS_ITAB.html) and value operator [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html) for internal tables
-   Component operator [`CORRESPONDING`](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html) in the [basic form](ABENCORRESPONDING_CONSTR_ARG_TYPE.html)

-   In the conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html):

-   A [string expression](ABENSTRING_EXPRESSION_GLOSRY.html) can now be converted to any data type. Previously only character-like data types were allowed.
-   A [bit expression](ABENBIT_EXPRESSION_GLOSRY.html) can now be converted to the character-like data types `c` and `string`. Previously only byte-like data types were allowed. All other types remain invalid.
-   In conversions to a compatible type, a syntax check warning no longer appears when a [`LET` expression](ABAPLET.html) exists.

-   This makes the conversion operator `CONV` a full replacement for the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) for elementary data types. As before, the value operator cannot be used to construct any values for elementary data objects except for the initial value.
-   If a casting operator [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html) is specified in a [result position](ABENRESULT_POSITION_GLOSRY.html)

-   and the result of a [string expression](ABENSTRING_EXPRESSION_GLOSRY.html) is assigned, any data type can now be specified after `CAST`. Previously only character-like data types were allowed.
-   and the result of a [bit expression](ABENBIT_EXPRESSION_GLOSRY.html) is assigned, the data type specified after `CAST` can now also be a character-like data type `c` and `string`. Previously only byte-like data types were allowed. All other types remain invalid.

-   A [bit expression](ABENBIT_EXPRESSION_GLOSRY.html) on the right side of an [assignment](ABENEQUALS_BIT_EXPR.html) can now also be assigned to character-like data types `c` and `string`. Previously only byte-like data types were allowed. All other types remain invalid.

abenabap.html abennews.html abennews-740.html abennews-740\_sp08.html