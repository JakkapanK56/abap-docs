---
title: "ABENPREDICATIVE_METHOD_CALLS"
description: |
  ABENPREDICATIVE_METHOD_CALLS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPREDICATIVE_METHOD_CALLS.htm"
abapFile: "ABENPREDICATIVE_METHOD_CALLS.html"
keywords: ["do", "if", "method", "class", "data", "ABENPREDICATIVE", "METHOD", "CALLS"]
---

`... meth( ... ) ...`

A predicative method call is a relational expression whose only operand is a [functional method call](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html)\\ `meth( ... )`. The result of the relational expression is true if the result of the functional method call is not initial and false if the result of the functional method call is initial. The data type of the result of the functional method call, that is, the return value of the called function method, is arbitrary. A check is made for the type-dependent initial value.

A predicative method call, like any relational expression, can be a full [logical expression](ABENLOGICAL_EXPRESSION_GLOSRY.html) or part of one. This means it can be specified as a condition in [control statements](ABENCONTROL_STATEMENT_GLOSRY.html) and other statements, as an argument in [Boolean functions](ABENBOOLE_FUNCTION_GLOSRY.html) or [conditional expressions](ABENCONDITIONAL_EXPRESSION_GLOSRY.html), or in combinations with [Boolean operators](ABENBOOLEAN_OPERATOR_GLOSRY.html).

Exit of the program if no SAP GUI is available. The called method `check` from the class `CL_DEMO_SAP_GUI` is a [predicate method](ABENPREDICATE_METHOD_GLOSRY.html).

[Predicative Method Calls](ABENPREDICATIVE_METHOD_CALL_ABEXA.html)

-   A predicative method call is a short form of the predicate expression:
-   [`... meth( ... ) IS NOT INITIAL ...`](ABENLOGEXP_INITIAL.html)
-   [Predicate methods](ABENPREDICATE_METHOD_GLOSRY.html) whose return value has the type `abap_bool` are particularly suitable for predicative method calls. Calling a predicate method in a predicative method call simulates the call of a method whose return value has the real Boolean data type that does not exist in ABAP.
-   As usual, the functional method call `meth( ... )` can be specified as an [individual method](ABAPCALL_METHOD_FUNCTIONAL.html) or as a [method chaining](ABAPCALL_METHOD_STATIC_CHAIN.html). If the first method called is an instance method, the functional method call can be introduced as usual using the instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) or the casting operator [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html).
-   In addition to the dedicated [predicate functions](ABENPREDICATE_FUNCTIONS.html), predicative method calls are the only way of creating a relational expression using a single operand.
-   For other expressions or data objects, the full predicate expression [`IS INITIAL`](ABENLOGEXP_INITIAL.html) or a comparison must be used to check the initial value but this is not recommended for many expressions anyway.

IF NOT cl\_demo\_sap\_gui=>check( ). \\n LEAVE PROGRAM. \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenpredicate.html