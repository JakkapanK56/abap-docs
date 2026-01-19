---
title: "ABENABAP_SQL_HOST_EXPRESSIONS"
description: |
  ABENABAP_SQL_HOST_EXPRESSIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SQL_HOST_EXPRESSIONS.htm"
abapFile: "ABENABAP_SQL_HOST_EXPRESSIONS.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "method", "class", "data", "internal-table", "ABENABAP", "SQL", "HOST", "EXPRESSIONS"]
---

`... @( expr ) ...`

Specification of a [host expression](ABENHOST_EXPRESSION_GLOSRY.html) in an ABAP SQL statement. [Host expressions](ABENHOST_EXPRESSION_GLOSRY.html) are ABAP expressions `expr` that can be specified in operand positions in ABAP SQL. `expr` is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html). Any expressions or calls possible here, as well as individual data objects, can be specified.

Host expressions can be specified as [elementary SQL expressions](ABENSQL_ELEM.html) in all operand positions in which [SQL expressions](ABAPSQL_EXPR.html) are possible. They can also occur in the following read positions in which no SQL expressions are possible:

The relevant restrictions apply in operand positions in which host variables are handled like SQL expressions.

The host expressions of an ABAP SQL statement are evaluated from left to right and the results are passed to the database, like the content of [host variables](ABENABAP_SQL_HOST_VARIABLES.html). Conversions of the result of a host expression to the data type required in the operand position must be possible and be [lossless](ABAPMOVE_EXACT.html). The following additional restrictions apply:

Operands of host expressions can have a [CDS enumerated type](ABENCDS_ENUM_TYPE_GLOSRY.html) but not an [ABAP enumerated type](ABENENUMERATED_TYPE_GLOSRY.html).

Determination of the right side of a [comparison](ABENWHERE_LOGEXP_COMPARE.html) in a [`WHERE`](ABAPWHERE.html) condition using a [functional method call](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html) in a host expression. Within the host expression, the instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) is used here to create a temporary object.

-   Operand `n` after [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html).
-   Operand `n` after [`PACKAGE SIZE`](ABAPINTO_CLAUSE.html).
-   Right sides of [SQL conditions](ABENABAP_SQL_STMT_LOGEXP.html) except for `LIKE` and `IN`.
-   [Actual parameters](ABAPSELECT_DATA_SOURCE.html) for input parameters of CDS views or CDS table functions.
-   Work areas `wa` and the internal tables `itab` of the statements [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html) and [`DELETE`](ABAPDELETE_DBTAB.html).
-   Right side of a [`SET` expression](ABAPUPDATE_SET_EXPRESSION.html) in `UPDATE`.

-   Host expressions cannot be used in dynamic tokens.
-   In a host expression of a [`SELECT` list](ABAPSELECT_LIST.html), it is not possible to derive a data type from the operand position for the character `#` for a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html).

-   In the operand positions where host expressions can be specified, it is also always possible to specify [host variables](ABENABAP_SQL_HOST_VARIABLES.html) but not vice versa.
-   In some operand positions in which host expressions are forbidden, but [literals](ABENABAP_SQL_LITERALS.html) and [host variables](ABENABAP_SQL_HOST_VARIABLES.html) are allowed, the syntax `@( literal )` and `@( dobj )` can be used. It is handled as a literal or host variable rather than as an expression.

-   [Host Expressions in the `WHERE` Condition](ABENHOST_EXPR_IN_WHERE_COND_ABEXA.html)
-   [SQL Expressions in the `WHERE` Condition](ABENSQL_EXPR_IN_WHERE_COND_ABEXA.html)

CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n METHODS get\_url RETURNING VALUE(url) TYPE scarr-url. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD get\_url. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n SELECT FROM scarr \\n FIELDS carrname \\n WHERE url = @( NEW demo( )->get\_url( ) ) \\n INTO TABLE @FINAL(itab). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abensql\_operands.html