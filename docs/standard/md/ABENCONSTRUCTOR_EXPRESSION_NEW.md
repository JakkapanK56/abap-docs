---
title: "ABENCONSTRUCTOR_EXPRESSION_NEW"
description: |
  ABENCONSTRUCTOR_EXPRESSION_NEW - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONSTRUCTOR_EXPRESSION_NEW.htm"
abapFile: "ABENCONSTRUCTOR_EXPRESSION_NEW.html"
keywords: ["select", "delete", "if", "case", "method", "class", "data", "types", "internal-table", "field-symbol", "ABENCONSTRUCTOR", "EXPRESSION", "NEW"]
---

`... NEW type( ... ) ...`

A [constructor expression](ABENCONSTRUCTOR_EXPRESSIONS.html) with the instance operator `NEW` creates an [anonymous data object](ABENANONYMOUS_DATA_OBJECT_GLOSRY.html) or an [instance](ABENINSTANCE_GLOSRY.html) of a class and assigns values to the new object. The result is a reference variable that points to the created object. The following can be specified for `type`:

The same descriptions apply as to the `CREATE` statements. After an object is created successfully, it is supplied with values using the parameters specified in parentheses. The syntax of the parameter passing depends on the type used. There are specialized types of parameter passing for complex types.

If a constructor expression is [assigned](ABENEQUALS_OPERATOR.html) to a reference variable using `NEW`, the information in the parentheses is evaluated before the created object is bound to the target variable.

If an instance of a [class](ABENNEW_CONSTRUCTOR_PARAMS_CLASS.html) is created successfully, the instance operator `NEW` sets `sy-subrc` to 0. Since non-class-based exceptions of the instance constructor cannot be handled, `sy-subrc` is never set to a value other than 0. The return code `sy-subrc` is not set when anonymous data objects are created.

Creation of an anonymous data object of the type `i` with the value 555 and an instance of a local class `cls` whereby this is derived implicitly from the static type of `oref`. In this case, the last statement could be written explicitly as `oref = NEW cls( )` or as `DATA(oref) = NEW cls( )`, using an inline declaration instead of the preceding `DATA` statement.

-   A non-generic data type `dtype`.
-   The operator `NEW` creates an anonymous data object of data type `dtype`. The result of `NEW` is a data reference variable of [static type](ABENSTATIC_TYPE_GLOSRY.html)\\ `dref` that points to the anonymous data object. The operator `NEW` works in the same way as the statement [`CREATE DATA dref TYPE dtype`](ABAPCREATE_DATA_EXISTING.html) where `dref` corresponds to the result of the expression. A constructor expression of this type cannot be extended using a [component selector](ABENCOMPONENT_SELECTOR_GLOSRY.html).
-   A class `class`.
-   The operator `NEW` creates an object of the class `class`. The result of `NEW` is a object reference variable of [static type](ABENSTATIC_TYPE_GLOSRY.html)\\ `class` that points to the object. The operator `NEW` works in the same way as the statement [`CREATE OBJECT oref TYPE class`](ABAPCREATE_OBJECT_EXPLICIT.html) where `oref` corresponds to the result of the expression.

-   In [general expression positions](ABENGENERAL_EXPRESSION_POSITIONS.html), [functional positions](ABENFUNCTIONAL_POSITIONS.html) and [result positions](ABENRESULT_POSITION_GLOSRY.html) an object component selector `->` can be placed behind `NEW( ... )` and point to an attribute of the class:
-   `... NEW class( ... )->attr|('attr_name') ...`

-   The attribute can be specified statically as `attr` or dynamically as content of a character-like data object `attr_name` in parentheses. A single expression that points to an attribute of the class using exactly one subsequent object component selector can also be used as the target field of assignments.

-   [Standalone](ABAPCALL_METHOD_STATIC_SHORT.html) and [functional](ABAPCALL_METHOD_FUNCTIONAL.html) method calls, including [chained method calls](ABENCHAINED_METHOD_CALL_GLOSRY.html), can be introduced:
-   `... NEW class( ... )->meth( ... ) ...`
-   The method must be specified statically.

-   The `#` character.
-   If the data type required in an operand position is unique and can be identified completely, the `#` character can be used instead of an explicit type specification `type` and the [operand type](ABENOPERAND_TYPE_GLOSRY.html) is used. If the operand type is not known completely, the `#` character cannot be used, with the following exception: The operand can be evaluated after `BASE` when a [structure](ABENNEW_CONSTRUCTOR_PARAMS_STRUCT.html) or an [internal table](ABENNEW_CONSTRUCTOR_PARAMS_ITAB.html) is constructed.

-   [Initial value for all types](ABENNEW_CONSTRUCTOR_PARAMS_INITIAL.html)
-   [Initial value for all data types](ABENNEW_CONSTRUCTOR_PARAMS_SINGLE.html)
-   [Structures](ABENNEW_CONSTRUCTOR_PARAMS_STRUCT.html)
-   [Internal tables](ABENNEW_CONSTRUCTOR_PARAMS_ITAB.html)
-   [Classes](ABENNEW_CONSTRUCTOR_PARAMS_CLASS.html)

-   To create the values for a new data object, the instance operator `NEW` uses mainly the same syntax as the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html).
-   The instance operator `NEW` always creates a new temporary reference variable that points to the created object. The reference variable is used as the operand of a statement and then deleted. It is deleted when the current statement is closed or after the evaluation of a relational expression once the truth value is determined. The created object is passed to the Garbage Collector if it is not received by a [heap reference](ABENHEAP_REFERENCE_GLOSRY.html) or a field symbol after the temporary reference variable has been deleted.
-   [Assignments](ABENEQUALS_OPERATOR.html) to a reference variable also always create a temporary reference variable that is only assigned to the target variable afterwards. This means that the object to which the target variable points before the assignment can be addressed using it throughout the entire expression. This is the difference between `NEW` and the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html).

CLASS cls DEFINITION. \\n ... \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA: dref TYPE REF TO data, \\n oref TYPE REF TO cls. \\n\\ \\n dref = NEW i( 555 ). \\n oref = NEW #( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abencreate\_objects.html