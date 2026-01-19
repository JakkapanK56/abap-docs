---
title: "ABENCONSTRUCTOR_EXPR_FILTER_TABLE"
description: |
  ABENCONSTRUCTOR_EXPR_FILTER_TABLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONSTRUCTOR_EXPR_FILTER_TABLE.htm"
abapFile: "ABENCONSTRUCTOR_EXPR_FILTER_TABLE.html"
keywords: ["select", "do", "if", "case", "data", "types", "internal-table", "ABENCONSTRUCTOR", "EXPR", "FILTER", "TABLE"]
---

``... FILTER type( itab \{[EXCEPT] IN ftab [USING KEY [`keyname`](ABENKEYNAME.html)]\}\                      |\ \{[USING KEY [`keyname`](ABENKEYNAME.html)]\ [EXCEPT] IN ftab\}\                         WHERE c1 op f1 [AND c2 op f2 [...]] ) ...``

[1. `... USING KEY keyname`](#ABAP_ADDITION_1@3@)

[2. `... WHERE c1 op v1 [AND c2 op v2 [...]]`](#ABAP_ADDITION_2@3@)

This variant of the filter operator [`FILTER`](ABENCONSTRUCTOR_EXPRESSION_FILTER.html) filters `itab` using values from an internal table `ftab`. In the `WHERE` condition, the columns of `itab` are compared with the values of the columns of the table key of the lines of the filter table `ftab`. Those lines in `itab` are used for which at least one line in `ftab` meets the `WHERE` condition or for which there is no line in `ftab` when `EXCEPT` is specified. `ftab` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html).

Depending on its position, `USING KEY` can be used to specify either a key of the table `ftab` or the table `itab`, which is then used to access the table. If `USING KEY` is not used, the filter table `ftab` must have a [sorted key](ABENSORTED_KEY_GLOSRY.html) or a [hash key](ABENHASH_KEY_GLOSRY.html) as the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html), which is then used to access the filter table.

The line types of `itab` and `ftab` do not need to be identical.

Filtering of three lines of the internal table `carriers`. The filter table has a sorted primary key. This is used implicitly and the addition `USING KEY` does not have to be specified.

Specification of the table key [`keyname`](ABENKEYNAME.html) with which the `WHERE` condition is evaluated. A sorted key or a hash key of the filter table can be specified after `ftab` or of the source table after `itab`. This can be the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) or a [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) that is specified using `primary_key` or the corresponding name.

The tables for which a key is specified depends on the optimization to be achieved.

Like the previous example, but here the addition `USING KEY` must be used for one of the tables, since the internal table `filter` is a standard table without a primary key.

Like the previous example, but here the addition `USING KEY` is used for the other table.

A condition for the table key used in the `FILTER` expression must be specified after `WHERE`:

Multiple comparisons can only be combined using [`AND`](ABENLOGEXP_AND.html) only. There can be no further comparisons apart from those mentioned for key components. In the variant with the filter table, key components of the filter table `ftab` must be specified for the right operands `f1`, `f2`, .... On the left side, components of the internal table `itab` must be specified that are compatible with the right side.

-   When `USING KEY` is specified for the filter table `ftab`, it must have a [sorted key](ABENSORTED_KEY_GLOSRY.html) or a [hash key](ABENHASH_KEY_GLOSRY.html). There are no requirements on the table keys of `itab`. The specified key is used to access the filter table.
-   When `USING KEY` is specified for the source table `itab`, it must have a [sorted key](ABENSORTED_KEY_GLOSRY.html) or a [hash key](ABENHASH_KEY_GLOSRY.html). There are no requirements on the table keys of `ftab`. The specified key is used to access the source table.
-   If `USING KEY` is not specified for `ftab` or `itab`, the filter table `ftab` must be a sorted table or a hashed table and the primary table key is used implicitly when accessing the filter table. There are no requirements on the table keys of `itab`.

-   In the case of a hash key, exactly one [comparison expression](ABENCOMPARISON_EXPRESSION_GLOSRY.html)\\ `c op f` for each key component. The only [comparison operator](ABENCOMP_OPERATOR_GLOSRY.html) allowed for `op` is [`=`](ABENLOGEXP_ANY_OPERAND.html).
-   In the case of a sorted key, an initial part of the key must be covered by [comparison expressions](ABENCOMPARISON_EXPRESSION_GLOSRY.html)\\ `c op f`. `op` can be any [binary comparison operator](ABENLOGEXP_ANY_OPERAND.html).

-   The Boolean operators [`NOT`](ABENLOGEXP_NOT.html), [`OR`](ABENLOGEXP_OR.html), and [`EQUIV`](ABENLOGEXP_EQUIV.html) cannot be used in the `WHERE` condition.
-   The [obsolete comparison operators](ABENOBSOLETE_LOGEXP_OP.html) cannot be used in the `WHERE` condition.

-   [Table Filtering, Filter Table](ABENFILTER_TABLE_ABEXA.html)
-   [Table Filtering, Filterings with Filter Table](ABENFILTER_TABLE_CONDITION_ABEXA.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(carriers). \\n\\ \\nDATA filter TYPE SORTED TABLE OF scarr-carrid \\n WITH UNIQUE KEY table\_line. \\nfilter = VALUE #( ( 'AA ' ) ( 'LH ' ) ( 'UA ' ) ). \\n\\ \\nout->write( FILTER #( \\n carriers IN filter WHERE carrid = table\_line ) ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(carriers). \\n\\ \\nDATA filter TYPE STANDARD TABLE OF scarr-carrid \\n WITH EMPTY KEY \\n WITH UNIQUE SORTED KEY line COMPONENTS table\_line. \\nfilter = VALUE #( ( 'AA ' ) ( 'LH ' ) ( 'UA ' ) ). \\n\\ \\nout->write( FILTER #( \\n carriers IN filter USING KEY line \\n WHERE carrid = table\_line ) ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA carriers TYPE SORTED TABLE OF scarr \\n WITH UNIQUE KEY carrid. \\nSELECT \* \\n FROM scarr \\n INTO TABLE @carriers. \\n\\ \\nDATA filter TYPE STANDARD TABLE OF scarr-carrid \\n WITH EMPTY KEY. \\nfilter = VALUE #( ( 'AA ' ) ( 'LH ' ) ( 'UA ' ) ). \\n\\ \\nout->write( FILTER #( \\n carriers USING KEY primary\_key IN filter \\n WHERE carrid = table\_line ) ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenconstructor\_expression\_filter.html