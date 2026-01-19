---
title: "ABENCONSTRUCTOR_EXPRESSIONS"
description: |
  ABENCONSTRUCTOR_EXPRESSIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONSTRUCTOR_EXPRESSIONS.htm"
abapFile: "ABENCONSTRUCTOR_EXPRESSIONS.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "internal-table", "ABENCONSTRUCTOR", "EXPRESSIONS"]
---

``... [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html)|[`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html)|[`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html)|[`CORRESPONDING`](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html)|[`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html)|[`REF`](ABENCONSTRUCTOR_EXPRESSION_REF.html)|[`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html)|[`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html)|[`FILTER`](ABENCONSTRUCTOR_EXPRESSION_FILTER.html)|[`COND`](ABENCONDITIONAL_EXPRESSION_COND.html)|[`SWITCH`](ABENCONDITIONAL_EXPRESSION_SWITCH.html)\       type( ... ) ...``

A constructor expression consists of the following:

Each constructor expression creates a result whose data type is determined by the specified type. The parameters specified in parentheses are used to pass input values. The following constructor operators exist:

A constructor expression can be specified in [general expression positions](ABENGENERAL_EXPRESSION_POSITIONS.html) and [functional positions](ABENFUNCTIONAL_POSITIONS.html) with an appropriate [operand type](ABENOPERAND_TYPE_GLOSRY.html). The result is used as an operand here. In a [calculation expression](ABENCALCULATION_EXPRESSION_GLOSRY.html) or [relational expression](ABENRELATIONAL_EXPRESSION_GLOSRY.html), the specified type `type` is used in the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) or [comparison type](ABENCOMPARISON_TYPE_GLOSRY.html). An expression with the operator `VALUE` that is not used to create an initial value cannot be specified directly in an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) because it never matches the operand type here. Expressions with the operators `NEW` and `CAST` can be positioned directly in front of the [object component selector](ABENOBJECT_COMPONENT_SELECT_GLOSRY.html)\\ `->` and can occur in [chainings](ABENCHAINING_GLOSRY.html).

Data types and classes that are visible and usable in the current operand position can be specified for `type`. This includes the [built-in ABAP types](ABENBUILTIN_ABAP_TYPE_GLOSRY.html), types defined using [`TYPES`](ABAPTYPES.html), types from the [ABAP Dictionary](ABENABAP_DICTIONARY.html), and both local and global classes. If the data type required in an operand position is unique and can be identified completely, the `#` character can be used instead of an explicit type specification `type` and the [operand type](ABENOPERAND_TYPE_GLOSRY.html) is used. If the operand type is not unique and is not known completely, if possible, a type inference is performed to determine a data type. This is described in each constructor expression.

[`LET`](ABAPLET.html) expressions can be used to define local helper fields in all suitable constructor expressions.

Filling of an internal table `itab` with the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html). The data type is inferred from the left side of the assignment.

-   A built-in [constructor operator](ABENCONSTRUCTOR_OPERATOR_GLOSRY.html)
-   A data type or object type `type` that matches the operator and that can be derived implicitly from the operand position using the specification `#`
-   Type-specific parameters specified in parentheses

-   The instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) is used to create objects in operand positions. The result is a reference variable of the static type `type` that points to the created object. The input values determine the content of the created object.
-   The value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) is used to fill complex data objects with values in operand positions, create initial values of any data type, or control the result of [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html). The result is a data object of the specified type `type`. The input values determine the content of the result.
-   The conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) is used for conversions between data types in operand positions. The result is a data object of the specified type `type` produced by the conversion from an input value.
-   The casting operator [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html) is used for downcasts of reference variables in operand positions. The result is a reference variable of the static type `type` produced by the assignment from an input value.
-   The reference operator [`REF`](ABENCONSTRUCTOR_EXPRESSION_REF.html) is used to construct a data reference to a data object in operand positions or to control the results of [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html). The result is a [data reference variable](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html).
-   The component operator [`CORRESPONDING`](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html) is used to construct a structure or an internal table in an operand position. The result is a structure or internal table whose components are filled with values from identically named components or components of a parameter specified using a mapping rule.
-   The lossless operator [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) is used to create a value in an operand position without losing data. The result is a data object of the specified type that originates from a [lossless assignment](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html) or a [lossless calculation](ABENLOSSLESS_CALCULATION_GLOSRY.html).
-   The reduction operator [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html) constructs a value from conditional iterations or from table iterations.
-   The filter operator [`FILTER`](ABENCONSTRUCTOR_EXPRESSION_FILTER.html) constructs an internal table by filtering the lines of an internal table.
-   The conditional operators [`COND`](ABENCONDITIONAL_EXPRESSION_COND.html) and [`SWITCH`](ABENCONDITIONAL_EXPRESSION_COND.html) are used to create values or raise class-based exceptions in operand positions in accordance with conditions. The result depends on any logical expressions or on a case distinction.

-   Constructor operators can be classified as follows:

-   Constructor operators like `NEW` and `VALUE` construct new values, for which components are passed except when the initial value is created, whereas constructor operators like `CONV`, `CAST`, `REF`, and `EXACT` convert a single passed value.
-   Constructor operators like `NEW`, `CAST`, and `REF` always return reference variables, whereas constructor operators like `VALUE`, `CONV`, and `EXACT` return all types of data objects.

-   Unlike [method chainings](ABENMETHOD_CHAINING_GLOSRY.html) or [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html), constructor expressions cannot be placed on the left side of a [structure component selector](ABENSTRUCTURE_COMPONENT_SEL_GLOSRY.html), since constructing a structure only to access a single component is pointless.
-   If a data type from ABAP Dictionary is used for the type, the result of a constructor is given its semantic properties.
-   A [calculation expression](ABENCALCULATION_EXPRESSION_GLOSRY.html) does not determine the type of its operands. If constructor expressions are used as operands of calculation expressions, the `#` character can only be specified for `type` if the type can be determined from the constructor expression itself.

DATA itab TYPE TABLE OF i WITH EMPTY KEY. \\n\\ \\nitab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ). abenabap.html abenabap\_reference.html abenbuilt\_in.html