---
title: "ABENEQUALS_RETURN_VALUES"
description: |
  ABENEQUALS_RETURN_VALUES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENEQUALS_RETURN_VALUES.htm"
abapFile: "ABENEQUALS_RETURN_VALUES.html"
keywords: ["if", "method", "data", "types", "internal-table", "ABENEQUALS", "RETURN", "VALUES"]
---

``destination = [`meth( )`](ABAPCALL_METHOD_FUNCTIONAL.html)\ |\ [`func( )`](ABENBUILT_IN_FUNCTIONS_SYNTAX.html)\ |\ [`constr_expr`](ABENCONSTRUCTOR_EXPRESSIONS.html)\ |\ [`table_expr`](ABENTABLE_EXPRESSIONS.html).``

If one of the following calls or expressions is specified on the right side of the [assignment operator `=`](ABENEQUALS_OPERATOR.html), their return value or result is determined and assigned to the left side, `destination`. If necessary, type-dependent conversions are performed in accordance with the [conversion rules](ABENCONVERSION_RULES.html). The following items are possible on the right side:

The following can be specified for `destination`:

If an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) is specified as an argument for one of the overloaded [numeric functions](ABENMATHEMATICAL_FUNCTIONS.html), the function itself works like an arithmetic expression and its assignment is one of the [assignments of arithmetic expressions](ABENEQUALS_ARITH_EXPR.html), which can cause a different order of conversions.

Assignment of the return value of a method to an internal table declared inline.

The example shows different results when assigning offset/length specifications to inline declarations. The first offset/length specification is directly applied to a data object and the resulting data object has type `n` of length 2. The second offset/length specification is applied to the result of a constructor expression and the resulting data object has type `n` of length 8. The last output shows that the data type of the substring is used at runtime when passed to a method.

-   A [functional method call](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html)\\ [`meth( )`](ABAPCALL_METHOD_FUNCTIONAL.html) including [method chainings](ABAPCALL_METHOD_STATIC_CHAIN.html). The return value of a function method or an attribute addressed using a method chaining always has a complete type that must match the type of the left side.
-   A [built-in function](ABENBUILTIN_FUNCTION_GLOSRY.html)\\ [`func( )`](ABENBUILT_IN_FUNCTIONS_SYNTAX.html). The type of the return value, which can depend on the data type of the argument in some numeric functions, must match the type of the left side.
-   A [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html)\\ [`constr_expr`](ABENCONSTRUCTOR_EXPRESSIONS.html). The type of the result is determined by the `type` specified for the constructor expression and must match the type of the left side.
-   A [table expression](ABENTABLE_EXPRESSION_GLOSRY.html)\\ [`table_expr`](ABENTABLE_EXPRESSIONS.html). The type of the result must match the type on the left side.

-   A [variable](ABENVARIABLE_GLOSRY.html) that is compatible with the return value or result, or in whose type the return value or result can be converted.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). The data type of the declared variable `var` is the statically known type of the return value or result. If an [offset/length specification](ABENOFFSET_LENGTH.html) is applied to the result of a chaining where a constructor expression or a table expression is involved, the data type of the declared variable is the data type of the result in its full length and not in the length of the substring.

METHOD m1. \\n DATA(itab) = m2( ). \\n ... \\nENDMETHOD. TYPES text TYPE n LENGTH 8. \\nDATA text TYPE text VALUE '12345678'. \\n\\ \\nFINAL(test1) = text+2(2). \\nFINAL(test2) = CAST text( REF text( text ) )->\*+2(2). \\n\\ \\ncl\_demo\_output=>new( \\n )->write( test1 \\n )->write( test2 \\n )->write( CAST text( REF text( text ) )->\*+2(2) \\n )->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenequals\_operator.html