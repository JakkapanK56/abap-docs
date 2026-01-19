---
title: "ABENNEWS-740-ITAB"
description: |
  ABENNEWS-740-ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740-ITAB.htm"
abapFile: "ABENNEWS-740-ITAB.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "internal-table", "ABENNEWS", "740", "ITAB"]
---

[1\. Table Expressions](#ABAP_MODIFICATION_1@4@)

[2\. Built-In Functions for Internal Tables](#ABAP_MODIFICATION_2@4@)

[3\. Explicit Definition of an Empty Key](#ABAP_MODIFICATION_3@4@)

[4\. Table Sharing for Boxed Components](#ABAP_MODIFICATION_4@4@)

[5\. References in Dynamically Specified Components](#ABAP_MODIFICATION_5@4@)

[6. Optimization of the `WHERE` Condition](#ABAP_MODIFICATION_6@4@) 

[7\. Expression for Dynamic Sorts](#ABAP_MODIFICATION_7@4@)

The new [table expressions](ABENTABLE_EXPRESSIONS.html) allow reads to be performed on internal tables in operand positions.

The following built-in functions were introduced:

The new addition [`EMPTY KEY`](ABAPTYPES_PRIMARY_KEY.html) of the statements [`TYPES`](ABAPTYPES_PRIMARY_KEY.html), [`DATA`](ABAPDATA_PRIMARY_KEY.html), and so on can be used to define an [empty table key](ABENITAB_EMPTY_KEY.html) explicitly for standard tables. Without this addition, empty table keys occur only if the [standard key](ABENITAB_STANDARD_KEY.html) of a standard table does not contain any components suitable as key fields.

Until now there was no [table sharing](ABENTABLE_SHARING_GLOSRY.html) if the line types contained [boxed components](ABENBOXED_COMPONENT_GLOSRY.html). This restriction has now been lifted.

Object component selectors can now be specified when [components are specified](ABENITAB_COMPONENTS.html) dynamically (this was not previously the case). However, those specifications can be made that are statically possible. For example, when using `ASSIGN` attributes cannot be accessed that are not known statically. This is the case, for example, when using superclass references to access subclass components.

The rules described under [Optimization of the `WHERE` Condition](ABENITAB_WHERE_OPTIMIZATION.html) have been modified as follows:

In the statement [`SORT itab`](ABAPSORT_ITAB.html), the table `(otab)` can now be specified for dynamic sorts as the result of an expression or functional method call.

-   The function [`line_index`](ABENLINE_INDEX_FUNCTION.html) can be used to identify a line number in an index of an internal table and use it in operand positions.
-   The [predicate function](ABENPREDICATE_FUNCTION_GLOSRY.html)\\ [`line_exists`](ABENLINE_EXISTS_FUNCTION.html) can be used to check the existence of table lines; the resulting truth value can then be used directly.

-   Except in comparisons for equality, optimizations are now also performed for the [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html)\\ [`IS INITIAL`](ABENLOGEXP_INITIAL.html). This enables a simple check to be made on the initial value, in particular for columns typed as [reference variables](ABENREFERENCE_VARIABLE_GLOSRY.html). A static `WHERE` condition cannot contain any duplicate or overlapping specified keys, if the prerequisites for optimizations are met. This means that this change is occasionally incompatible: Syntax errors are now produced in those `WHERE` conditions in which a key column is checked using both a comparison for equality with one value and using `IS INITIAL`.
-   Syntax warnings are no longer produced by mistake for non-optimizable type combinations in comparisons, even if the comparison does not contain any key columns. Non-optimizable type combinations now produce syntax warnings only if they actually modify key fields of a hash key or of the initial part of a sorted key. The syntax warnings have been improved so that the non-optimizable combination is mentioned in the text.
-   The following type combinations were not previously detected as non-optimizable when secondary keys were used in comparisons:

-   `string` with `n`, `i` (`b`, `s`), `f`, `decfloat16`, and `decfloat34`
-   `xstring` with `c` and `string`

-   There was no syntax error or exception in these cases. Instead, all lines of the internal table were checked linearly when the statement was executed or reads performed using the primary key. Optimized reads are guaranteed when using secondary keys, which is why the combinations above now produce syntax errors or raise exceptions. This represents an incompatible change.

abenabap.html abennews.html abennews-740.html abennews-740\_sp02.html