---
title: "ABENFOR_IN_ITAB"
description: |
  ABENFOR_IN_ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENFOR_IN_ITAB.htm"
abapFile: "ABENFOR_IN_ITAB.html"
keywords: ["select", "loop", "if", "method", "data", "types", "internal-table", "field-symbol", "ABENFOR", "ITAB"]
---

``... FOR wa|<fs> IN itab [INDEX INTO idx]\ [[`cond`](ABENFOR_COND.html)]\ [[`let_exp`](ABAPLET.html)]  ...``

[`... INDEX INTO idx`](#ABAP_ONE_ADD@1@)

This variant of an [iteration expression](ABENITERATION_EXPRESSION_GLOSRY.html) for [table iterations](ABENTABLE_ITERATION_GLOSRY.html) using [`FOR`](ABENFOR_ITAB.html) evaluates an internal table `itab` sequentially, like a [line variant](ABAPLOOP_AT_ITAB.html) of a [`LOOP`](ABAPLOOP_AT_ITAB_VARIANTS.html). `itab` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html). As in [`LOOP`](ABAPLOOP_AT_ITAB.html), the order of the lines read depends on the table category or a key specified in [`cond`](ABENFOR_COND.html).

[`cond1`](ABENFOR_COND.html) can be used to set conditions for the evaluation. For each read line, the result is either assigned to a local work area `wa1` or to a field symbol `<fs>`. The work area or the field symbol is declared implicitly with the line type of the internal table and bound locally to the `FOR` expression as a subexpression of the entire constructor expression. The same applies to the namespace and visibility as to the helper fields declared in [`LET` expressions](ABAPLET.html). After the `FOR` expression, the work area or the field symbol can either be used in further subexpressions or to construct the result of a [table comprehension](ABENTABLE_COMPREHENSION_GLOSRY.html) or [table reduction](ABENTABLE_REDUCTION_GLOSRY.html).

Construction of an internal table `flights` in a table iteration with `FOR` with the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) ([table comprehension](ABENTABLE_COMPREHENSION_GLOSRY.html)). The lines of the internal table are merged from the content of two existing internal tables `scarr_tab` and `spfli_tab`.

For each read line of the associated `FOR` expression, this addition sets the helper variable `idx` to the value to which the system field `sy-tabix` would be set in a corresponding [`LOOP`](ABAPLOOP_AT_ITAB.html). The helper variable `idx` is declared implicitly with the type `i` and bound locally to the `FOR` expression as a subexpression of the entire constructor expression. The same applies to the namespace and visibility as to the helper fields declared in [`LET` expressions](ABAPLET.html).

Construction of an internal table `carriers` from an existing internal table `scarr_tab`. The first column is provided with the line index of the existing table.

-   Instead of using directly specified internal tables `itab`, this variant of `FOR` expressions can also be created using [mesh paths](ABENMESH_FOR.html), where `FOR` expressions from both categories can be used together in the same constructor expression.
-   Changes to the content of the internal table specified after `IN` within the `FOR` expression can only be made using method calls. Deleting or replacing the table completely always produces a runtime error.

-   [Examples of Table Comprehensions](ABENTABLE_COMPREHENSIONS_ABEXAS.html)
-   [Examples of Table Reductions](ABENTABLE_REDUCTIONS_ABEXAS.html)

SELECT carrid, carrname \\n FROM scarr \\n INTO TABLE @FINAL(scarr\_tab). \\n\\ \\nSELECT carrid, connid, cityfrom, cityto \\n FROM spfli \\n ORDER BY carrid, connid, cityfrom, cityto \\n INTO TABLE @FINAL(spfli\_tab). \\n\\ \\nTYPES: \\n BEGIN OF flight, \\n carrier TYPE scarr-carrname, \\n number TYPE spfli-connid, \\n departure TYPE spfli-cityfrom, \\n destination TYPE spfli-cityto, \\n END OF flight, \\n flights TYPE TABLE OF flight WITH EMPTY KEY. \\n\\ \\nFINAL(flights) = \\n VALUE flights( FOR IN spfli\_tab \\n ( carrier = VALUE #( \\n scarr\_tab\[ carrid = \-carrid \]-carrname \\n DEFAULT '???' ) \\n number = \-connid \\n departure = \-cityfrom \\n destination = \-cityto ) ). \\n\\ \\ncl\_demo\_output=>display( flights ). SELECT carrid, carrname \\n FROM scarr \\n INTO TABLE @FINAL(scarr\_tab). \\n\\ \\nTYPES: \\n columns LIKE LINE OF scarr\_tab, \\n BEGIN OF carrier, \\n no TYPE i. \\n INCLUDE TYPE columns. \\nTYPES: \\n END OF carrier, \\n carriers TYPE TABLE OF carrier WITH EMPTY KEY. \\n\\ \\nFINAL(carriers) = \\n VALUE carriers( FOR wa IN scarr\_tab INDEX INTO i \\n ( no = i carrid = wa-carrid carrname = wa-carrname ) ). \\n\\ \\ncl\_demo\_output=>display( carriers ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenfor\_itab.html