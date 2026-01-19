---
title: "ABENCONSTRUCTOR_EXPR_FILTER_BASIC"
description: |
  ABENCONSTRUCTOR_EXPR_FILTER_BASIC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONSTRUCTOR_EXPR_FILTER_BASIC.htm"
abapFile: "ABENCONSTRUCTOR_EXPR_FILTER_BASIC.html"
keywords: ["select", "do", "if", "case", "data", "internal-table", "ABENCONSTRUCTOR", "EXPR", "FILTER", "BASIC"]
---

``... FILTER type( itab [EXCEPT]\ [USING KEY [`keyname`](ABENKEYNAME.html)]\                         WHERE c1 \{op f1\}|\{IS [NOT] INITIAL\}\                          [AND c2 \{op f2\}|\{IS [NOT] INITIAL\}\ [...]] ) ...``

[1. `... USING KEY keyname`](#ABAP_ADDITION_1@3@)

[2. `... WHERE c1 \{op f1\}|\{IS [NOT] INITIAL\}\ [AND c2 \{op f2\}|\{IS [NOT] INITIAL\}\ [...]]`](#ABAP_ADDITION_2@3@)

This variant of the filter operator [`FILTER`](ABENCONSTRUCTOR_EXPRESSION_FILTER.html) filters `itab` using single values. The columns of a table key of `itab` are compared with single values in the `WHERE` condition. Those lines of `itab` are used that meet the `WHERE` condition or do not meet it when `EXCEPT` is specified.

Here, the internal table `itab` must have at least one [sorted key](ABENSORTED_KEY_GLOSRY.html) or one [hash key](ABENHASH_KEY_GLOSRY.html) used for access. This can be

This variant of the filter operator is not possible for an internal table `itab` without a sorted key or hash key.

Filtering of the messages of a work area from the database table `T100` by language.

Specifies the table key [`keyname`](ABENKEYNAME.html) with which the `WHERE` condition is evaluated. A sorted key or a hash key of the table `itab` can be specified. If the primary key of `itab` is not a sorted key or hash key, `itab` must have a secondary key of this type and it must be specified using `USING KEY`.

Like the preceding example, but here a secondary table key must be specified explicitly since the internal table `messages` is a standard table without a primary key.

A condition for the table key used in the `FILTER` expression must be specified after `WHERE`:

Multiple comparisons can be combined using [`AND`](ABENLOGEXP_AND.html) only. There can be no further comparisons apart from those mentioned for key components. In the basic form, key components of the internal table `itab` must be specified for the left operands `c1`, `c2`, ... On the right side, operands `f1`, `f2`, ... must be specified after `=` or `op` that are compatible with the left side. `f1`, `f2`, ... are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html).

[Table Filtering, Single Values](ABENFILTER_VALUE_CONDITION_ABEXA.html)

-   either the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) used without specifying `USING KEY` or by specifying its name `primary_key` after `USING KEY`,
-   or a [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) used by specifying its name after `USING KEY`.

-   In the case of a hash key, exactly one [comparison expression](ABENCOMPARISON_EXPRESSION_GLOSRY.html)\\ [`c = f`](ABENLOGEXP_ANY_OPERAND.html) or `[c IS INITIAL](ABENLOGEXP_INITIAL.html)` for each key component. The only [comparison operator](ABENCOMP_OPERATOR_GLOSRY.html) allowed for `op` is [`=`](ABENLOGEXP_ANY_OPERAND.html). The condition [`IS NOT INITIAL`](ABENLOGEXP_INITIAL.html) is not allowed.
-   In the case of a sorted key, an initial part of the key must be covered by [comparison expressions](ABENCOMPARISON_EXPRESSION_GLOSRY.html)\\ [`c op f`](ABENLOGEXP_ANY_OPERAND.html) or `[c IS [NOT] INITIAL](ABENLOGEXP_INITIAL.html)`. `op` can be any [binary comparison operator](ABENLOGEXP_ANY_OPERAND.html).

-   The Boolean operators [`NOT`](ABENLOGEXP_NOT.html), [`OR`](ABENLOGEXP_OR.html), and [`EQUIV`](ABENLOGEXP_EQUIV.html) cannot be used in the `WHERE` condition. Note that the `NOT` in `IS NOT INITIAL` is not a Boolean operator.
-   The [obsolete comparison operators](ABENOBSOLETE_LOGEXP_OP.html) cannot be used in the `WHERE` condition.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA messages TYPE SORTED TABLE OF t100 WITH NON-UNIQUE KEY sprsl. \\nSELECT \* \\n FROM t100 \\n WHERE arbgb = 'SABAPDEMOS' \\n ORDER BY msgnr \\n INTO TABLE @messages. \\n\\ \\nout->write( FILTER #( messages WHERE sprsl = 'D' ) ). \\nout->write( FILTER #( messages WHERE sprsl = 'E' ) ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA messages TYPE STANDARD TABLE OF t100 \\n WITH NON-UNIQUE SORTED KEY langu COMPONENTS sprsl. \\nSELECT \* \\n FROM t100 \\n WHERE arbgb = 'SABAPDEMOS' \\n ORDER BY msgnr \\n INTO TABLE @messages. \\n\\ \\nout->write( FILTER #( messages USING KEY langu \\n WHERE sprsl = 'D' ) ). \\nout->write( FILTER #( messages USING KEY langu \\n WHERE sprsl = 'E' ) ). \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenconstructor\_expression\_filter.html