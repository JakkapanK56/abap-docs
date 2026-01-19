---
title: "ABENCONSTRUCTOR_EXPRESSION_VALUE"
description: |
  ABENCONSTRUCTOR_EXPRESSION_VALUE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCONSTRUCTOR_EXPRESSION_VALUE.htm"
abapFile: "ABENCONSTRUCTOR_EXPRESSION_VALUE.html"
keywords: ["delete", "do", "if", "data", "types", "internal-table", "ABENCONSTRUCTOR", "EXPRESSION", "VALUE"]
---

`... VALUE type( ... ) ...`

A [constructor expression](ABENCONSTRUCTOR_EXPRESSIONS.html) with the value operator `VALUE` creates a result of a data type specified using `type`. The following can be specified for `type`:

The operator does the following:

The content of the result is determined by the parameters specified in parentheses. The syntax for passing parameters depends on the type used when the value was constructed. There are specialized types of parameter passing for each possible type.

In [assignments](ABENEQUALS_OPERATOR.html) of constructor expressions to a data object using `VALUE`, the data object is used directly. It is completely overwritten with an initial value or start value before it is assigned the values specified in the parentheses.

Construction of the values of a structure of type `T100`\\ [declared inline](ABENINLINE_DECLARATIONS.html).

-   A non-generic data type `dtype`.
-   The `#` character as a symbol for the [operand type](ABENOPERAND_TYPE_GLOSRY.html). This specification is only possible if the data type required in an operand position is unique and completely identifiable at compile time. The following exceptions apply:

-   When an initial value [`VALUE #( )`](ABENVALUE_CONSTRUCTOR_PARAMS_INIT.html) is passed to a generically typed formal parameter, the type is derived from the generic type.
-   The operand after `BASE` can be evaluated when a [structure](ABENVALUE_CONSTRUCTOR_PARAMS_STRUC.html) or an [internal table](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html) is constructed.
-   When used for a single table expression [`VALUE #( table_exp )`](ABENTABLE_EXP_RESULT.html).

-   It creates initial values for any non-generic data types.
-   It constructs the content of the following:

-   Structured types
-   Table types

-   It controls the type of the result of [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html) and so enables a default value to be specified for any lines not found.

-   Pass by parameter when constructing values:

-   [Initial value for all types](ABENVALUE_CONSTRUCTOR_PARAMS_INIT.html)
-   [Structures](ABENVALUE_CONSTRUCTOR_PARAMS_STRUC.html)
-   [Internal tables](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html)

-   If a single [table expression](ABENTABLE_EXPRESSIONS.html) is specified as a parameter, `VALUE` does not construct a value and controls the type of the [result](ABENTABLE_EXP_RESULT.html) instead.

-   The value operator `VALUE` can also be used to construct the content of existing complex data objects (structures and internal tables) and thus goes beyond the functionality of the [`VALUE`](ABAPDATA_OPTIONS.html) addition.
-   The value operator `VALUE` uses mainly the same syntax as in the instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) to create values.
-   Elementary data types as well as reference types cannot be explicitly specified for the construction of values with the `VALUE` operator except for the creation of an initial value. In contrast to the instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html), the corresponding result can also be achieved by direct assignments. For this reason, the specification of a single operand, which is possible with `NEW`, is also not necessary and therefore not permitted. This does not affect the use of `VALUE` to control [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html) for which any suitable data types can be specified.
-   Since arithmetic calculations with the results of `VALUE` for constructing values are not possible, except when creating an initial value, constructor expressions of this type cannot be specified directly in the operand positions of [arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html). This does not affect constructor expressions with `VALUE` used to control [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html), which can be used for calculations for suitable results.
-   The conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) closes the gap where no elementary data objects can be constructed in operand positions using `VALUE`.
-   If a constructor expression with `VALUE` is not used as the source of an assignment to a data object, the value operator `VALUE` creates a new temporary data object whose data type is determined by the specified type and whose content is determined by the parameters passed. This data object is used as the operand of a statement and then deleted after use. It is deleted either when the current statement is closed or when a relational expression is evaluated after the truth value is determined.
-   In assignments to a data object, the target variable is used directly and no temporary data object is created. This variable is initialized or overwritten completely before the assignment of the values specified in the parentheses. Its original value, however, is still available in an optional [`LET` expression](ABAPLET.html). This is the difference between `VALUE` and the instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html).

FINAL(wa) = VALUE t100( sprsl = 'E' \\n arbgb = 'DEMO' \\n msgnr = '111' \\n text = '...' ). abenabap.html abenabap\_reference.html abencreate\_objects.html