---
title: "ABENNEW_CONSTRUCTOR_PARAMS_STRUCT"
description: |
  ABENNEW_CONSTRUCTOR_PARAMS_STRUCT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEW_CONSTRUCTOR_PARAMS_STRUCT.htm"
abapFile: "ABENNEW_CONSTRUCTOR_PARAMS_STRUCT.html"
keywords: ["select", "do", "if", "case", "data", "types", "internal-table", "ABENNEW", "CONSTRUCTOR", "PARAMS", "STRUCT"]
---

``... NEW dtype|#( [[`let_exp`](ABAPLET.html)]\                   [BASE dobj]\                   comp1 = dobj1 comp2 = dobj2 ... ) ...``

If `dtype` is a structured data type or `#` stands for such a type, the individual components can be specified as `comp1`, `comp2`, ... Each component of the created anonymous data object can be assigned a data object with the same data type as the component, or can be converted to it. The assignment is made for all data types in accordance with the corresponding [assignment rules](ABENCONVERSION_RULES.html).

An addition `BASE` can be specified in front of the individual component assignments, followed by a data object `dobj`. `dobj` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html). The type of `dobj` must be convertible to the type of the anonymous data object. If `BASE` is specified, the content of `dobj` is assigned to the anonymous data object before the individual components are assigned. If the character `#` is specified for the type of the anonymous data object and the type cannot be determined from the operand position of the `VALUE` expression, the type of `dobj` is used for this expression if it is known and structured.

`dobj1`, `dobj2`, ... are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html). Optionally, a `LET` expression [`let_exp`](ABAPLET.html) can be specified in front of the assignments to define local helper fields that can be used on the right side of the assignments.

If a component is structured itself, either a suitable data object can be assigned to the entire substructure or its components can be specified using the structure component selector (`-`). Non-specified components are ignored and keep their type-specific initial value, or the value assigned using `BASE`. If the addition `BASE` is used, at least one component must also be specified.

It is not allowed to assign multiple values to a component.

Construction of an anonymous data object with a nested structure type and tabular components. The subcomponents of `col2` are addressed directly using the structure component selector. [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) must be used to construct the tabular component `col3` because the [syntax](ABENNEW_CONSTRUCTOR_PARAMS_ITAB.html) for constructing internal tables cannot be specified directly as an operand.

Use of `BASE`. The type of the return value of `base1` is transferred in the construction of `ref1`. This is not possible in the construction of `ref2`, since `base2` is not structured. In both results, `col1` and `col3` have the values `xx` or `zz` assigned using `BASE`, whereas `col2` has the directly assigned value *BB*.

See also the examples for the value operator [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_STRUC.html).

-   It leads to a syntax error, if the name of a component appears more than once on the left side of an assignment.
-   A syntax warning occurs, if structures are involved that contain [component groups](ABENCOMPONENT_GROUP_GLOSRY.html). Then, the respective components can be addressed as usual as components of the including structures or by using the name of the component group. In that case, a component might be assigned more than one value and the latest assignment is considered.

-   The assignments can be specified in any order in parentheses.
-   If a component with a complex data type is to be constructed in an operand position, the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) can be used. This affects tabular components, for example. This is also possible for structured components but is not necessary since the subcomponents can be addressed using the structure component selector.
-   When a constructor expression is assigned to a reference variable using `NEW`, the original reference is available in the entire expression in the target variable. The target variable is not overwritten until the expression is completed. In the case of the value operator [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_STRUC.html), however, the target variable can only be assigned to a helper variable using `LET` and is then no longer available.

TYPES: t\_itab TYPE TABLE OF i WITH EMPTY KEY, \\n BEGIN OF t\_struct, \\n col1 TYPE i, \\n BEGIN OF col2, \\n col1 TYPE i, \\n col2 TYPE t\_itab, \\n END OF col2, \\n col3 TYPE t\_itab, \\n END OF t\_struct. \\n\\ \\nDATA itab TYPE t\_itab. \\n\\ \\nDATA dref TYPE REF TO data. \\n\\ \\ndref = NEW t\_struct( col1 = 1 \\n col2-col1 = 2 \\n col2-col2 = itab \\n col3 = VALUE #( ( 1 ) \\n ( 2 ) \\n ( 3 ) ) ). TYPES: \\n BEGIN OF struct, \\n col1 TYPE c LENGTH 2, \\n col2 TYPE c LENGTH 2, \\n col3 TYPE c LENGTH 2, \\n END OF struct. \\n\\ \\nFINAL(base1) = VALUE struct( col1 = 'xx' col2 = 'yy' col3 = 'zz' ). \\nFINAL(ref1) = NEW #( BASE base1 col2 = 'BB' ). \\n\\ \\nFINAL(base2) = \`xxyyzz\`. \\nFINAL(ref2) = NEW struct( BASE base2 col2 = 'BB' ). \\n\\ \\ncl\_demo\_output=>write( ref1->\* ). \\ncl\_demo\_output=>display( ref2->\* ). abenabap.html abenabap\_reference.html abencreate\_objects.html abenconstructor\_expression\_new.html