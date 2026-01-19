---
title: "ABAPLET"
description: |
  ABAPLET - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLET.htm"
abapFile: "ABAPLET.html"
keywords: ["loop", "do", "while", "if", "method", "data", "types", "internal-table", "field-symbol", "ABAPLET"]
---

\\ `... LET \{var1 = rhs1\}|\{<fs1> = wrexpr1\}\          \{var2 = rhs2\}|\{<fs2> = wrexpr2\} ... IN ...`

[1. `... var = rhs ...`](#ABAP_ALTERNATIVE_1@2@)

[2. `... <fs> = wrexp ...`](#ABAP_ALTERNATIVE_2@2@)

A `LET` expression defines variables `var1`, `var2`, ... or field symbols `<fs1>`, `<fs2>`, ... as local helper fields in an expression and assigns values to them. The helper fields can be used from their declaration in the operand positions of the expression. There is no way of accessing a helper field statically outside of its expression. The documentation of each expression lists whether and in which lines it contains a `LET` expression. Any `LET` expressions in an expression or subexpression are evaluated first.

A helper field specified in a `LET` expression is valid in the context in which the `LET` expression is specified. This can be a full expression or just part of an expression. All helper fields of a full expression are in the same namespace. A previously specified helper field cannot be specified in a further `LET` expression of the same expression. Furthermore, the helper fields are in the same namespace as the data objects or field symbols of the current procedure or program. Helper fields cannot be defined in a `LET` expression if a data object or field symbol with the same name already exists in the procedure or program of the expression. Conversely, no data objects or field symbols with names assigned to helper fields can be declared after an expression with a `LET` expression.

When reusing helper fields in different expressions, the following applies:

[`LET` expression](ABENLET_ABEXA.html).

Definition of a local helper variable `var` as a helper field in a `LET` expression. The value of the right side `rhs` is assigned to the helper variable as an initial value.

For the right side `rhs` the same can be specified as in a regular assignment using the [assignment operator `=`](ABENEQUALS_OPERATOR.html). The data type of the helper variable is determined from the right side `rhs` as when an inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html) is specified on the left side of an assignment operator using the [assignment operator `=`](ABENEQUALS_OPERATOR.html). It must be possible to determine the data type completely from the right side to avoid syntax errors.

Definition of a helper variable `bias` in the context of a `VALUE` expression in front of `FOR` loop and of three local helper variables `x`, `y`, and `z` in the context of the `FOR` loop. construct the values of a structure. The values of the helper variables are used to construct the components of an internal table. While `bias` is constant in the `FOR` loop, `x`, `y`, and `z` are assigned new values within each loop pass.

Definition of a local field symbol `<fs>` as a helper field in a `LET` expression. The result of the [writable expression](ABENWRITABLE_EXPRESSION_GLOSRY.html)\\ `wrexp` is assigned to the field symbol. The same applies here as to assignments of writable expressions using [`ASSIGN`](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html), which means that only the expressions listed there can be specified. The typing of the field symbol depends on the type of `wrexp` and is performed in the same way as in inline declarations of a field symbol using the statement [`FIELD-SYMBOL`](ABENFIELD-SYMBOL_INLINE.html).

Definition of a field symbol and a variable as helper fields in a `LET` expression in a conversion expression. The lines of an internal table are assigned to the field symbol.

-   If a helper field is defined for the first time in the current procedure or program, it is declared as with an [inline declaration](ABENINLINE_DECLARATIONS.html) and the data type is derived accordingly.
-   If a helper field in the current procedure or program is defined again in a `LET` expression of a different expression and the derived data type matches, the helper field is bound to this expression and can be used there.
-   If a helper field in the current procedure or program is defined again in a `LET` expression of a different expression and the derived data type does not match, the helper field cannot be used there and a syntax error occurs.

-   `LET` expressions can currently only be used in [constructor expressions](ABENCONSTRUCTOR_EXPRESSIONS.html). Subexpressions in which `LET` expressions can be used are [iteration expressions](ABENITERATION_EXPRESSION_GLOSRY.html) using [`FOR`](ABENFOR.html) and results specified after `THEN` and `ELSE` in the [conditional expressions](ABENCONDITIONAL_EXPRESSION_GLOSRY.html)\\ [`COND`](ABENCONDITIONAL_EXPRESSION_COND.html) and [`SWITCH`](ABENCONDITIONAL_EXPRESSION_SWITCH.html).
-   In the assignment of a value operator `VALUE` to [structures](ABENVALUE_CONSTRUCTOR_PARAMS_STRUC.html) or [internal tables](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html), values on the left side can be saved to helper fields using a `LET` expression before the left side is overwritten.
-   A helper field defined in a `LET` expression can be addressed dynamically in the entire current context. This is not recommended, however, since expressions should be free of side effects.
-   It is a good idea to use `LET` expressions whenever helper fields are required for performance (avoiding multiple calculations) or the readability of an expression or whenever values from the left side of an assignment in a `VALUE` operator are needed on the right side.

-   The helper variables declared in a `LET` expression generally keep the value defined by `rhs` while the expression is calculated. It is possible to change the value of a helper variable in the expression, for example by binding to a `CHANGING` parameter of a method, but this would be unusual.
-   The helper variables declared in a `LET` expression are a good example of where long [readable names](ABENTELLING_NAMES_GUIDL.html) are not necessary and can even harm readability. The helper variables can only be used in their own expression, which means that short identifiers, even single-character names, are enough.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF struc, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF struc, \\n itab TYPE SORTED TABLE OF struc WITH NON-UNIQUE KEY col1. \\n\\ \\nFINAL(t) = cl\_demo\_date\_time=>get\_utc\_time( ). \\nFINAL(rnd) = cl\_abap\_random\_int=>create( \\n seed = CONV i( t ) min = 1 max = 10 ). \\n\\ \\n\\ \\nFINAL(itab) = VALUE itab( \\n LET bias = 100000 IN \\n FOR i = 1 UNTIL i > 5 \\n LET x = rnd->get\_next( ) \\n y = x \* x \\n z = i \* 1000 IN \\n ( col1 = bias + x + z \\n col2 = bias + y + z ) ). \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF date, \\n year TYPE c LENGTH 4, \\n month TYPE c LENGTH 2, \\n day TYPE c LENGTH 2, \\n END OF date, \\n dates TYPE TABLE OF date WITH EMPTY KEY. \\n\\ \\nFINAL(dates) = VALUE dates( \\n ( year = '2013' month = '07' day = '16' ) \\n ( year = '2014' month = '08' day = '31' ) \\n ( year = '2015' month = '09' day = '07' ) ). \\n\\ \\nDO lines( dates ) TIMES. \\n FINAL(isodate) = CONV string( \\n LET \= dates\[ sy-index \] \\n sep = '-' \\n IN \-year && sep && \-month && sep && \-day ). \\n out->write( isodate ). \\nENDDO. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendeclarations.html abenlocal\_expr\_declarations.html