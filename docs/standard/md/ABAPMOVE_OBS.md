---
title: "This statement works in the same way as"
description: |
  `destination ?= source.`(ABAPMOVE_CAST.html) `source` and `destination` must have reference types. The addition `?TO` makes downcasts(ABENDOWN_CAST_GLOSRY.html) possible, whereas in `TO` only upcasts(ABENUP_CAST_GLOSRY.html) can be used. Assignments with the assignment operators `=` and `?=`
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMOVE_OBS.htm"
abapFile: "ABAPMOVE_OBS.html"
keywords: ["do", "if", "case", "method", "data", "types", "ABAPMOVE", "OBS"]
---

[Short Reference](ABAPMOVE_SHORTREF.html)

`MOVE \{[EXACT] source  TO destination\}\     |\ \{        source ?TO destination\}.`

[1. `MOVE [EXACT] source TO destination.`](#ABAP_VARIANT_1@1@)

[2. `MOVE source ?TO destination.`](#ABAP_VARIANT_2@1@)

Obsolete form of the [assignment](ABENEQUALS_OPERATOR.html) of data objects and reference variables `source` to target variables `destination`. If `EXACT` is specified, only data objects can be specified for `source`. If `EXACT` is not specified, the following can be specified for `source` alongside data objects:

The following cannot be specified with `MOVE`:

Without the addition `EXACT`, this statement works in the same way as

[`destination = source.`](ABENEQUALS_OPERATOR.html)

If the addition `EXACT` is specified, the statement works like

[`destination = EXACT #( source ).`](ABENLOSSLESS_MOVE.html)

In this way, the addition `EXACT` produces a [lossless assignment](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html) in accordance with the rules that apply when using the [lossless operator](ABENLOSSLESS_OPERATOR_GLOSRY.html)\\ [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html). This can raise exceptions if values are lost or if they are invalid. If an exception is raised when the operator `EXACT` is used, the statement is not executed, and the value of the target field remains unchanged. In assignments made without the operator `EXACT`, the target field contains an undefined value when an exception raised by the conversion is handled.

When `MOVE` is used for [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html), addition `EXACT` and the lossless operator [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) have the special effect that they can enable assignments, which would otherwise have not been possible.

The two commented out assignments of a number to the [enumerated variable](ABENENUMERATED_VARIABLE_GLOSRY.html)\\ `num` is not possible. The assignment is possible using `EXACT`, because in this case the assignment follows the same [rules](ABENEXACT_CONSTRUCTOR_ENUM.html) as the lossless operator shown below.

This statement works in the same way as

[`destination ?= source.`](ABAPMOVE_CAST.html)

`source` and `destination` must have reference types. The addition `?TO` makes [downcasts](ABENDOWN_CAST_GLOSRY.html) possible, whereas in `TO` only [upcasts](ABENUP_CAST_GLOSRY.html) can be used.

[Assignments with the assignment operators `=` and `?=` only](ABENASSIGN_CALC_GUIDL.html)

-   [Functional method calls](ABAPCALL_METHOD_FUNCTIONAL.html)
-   [Certain built-in functions](ABENEXTENDED_FUNCTIONAL_POSITIONS.html)

-   [Constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html), [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html), and [calculation expressions](ABENCALCULATION_EXPRESSION_GLOSRY.html) for `source`
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html) or a [writable expression](ABENWRITABLE_EXPRESSION_GLOSRY.html) for `destination`.

-   Instead of `MOVE`, only the more general [assignment operators](ABENASSIGNMENT_OPERATOR_GLOSRY.html)\\ [`=`](ABENEQUALS_OPERATOR.html) and [`?=`](ABAPMOVE_CAST.html) should be used, which enable a more general concept.
-   The option to specify functional methods and some built-in functions as assignment sources was added to the source position of the statement `MOVE`, which was originally designed only for assigning data objects, making this source position an [extended functional operand position](ABENEXTENDED_FUNCTIONAL_POSITIONS.html). This does not, however, cover all the possible functions of assignment operators. New developments, such as specifying [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html), [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html), or [inline declarations](ABENINLINE_DECLARATION_GLOSRY.html) are now only made possible for assignment operators.

TYPES: \\n BEGIN OF ENUM number, \\n n0, n1, n2, \\n END OF ENUM number. \\n\\ \\nDATA num TYPE number. \\n\\ \\n"num = 1. \\n"MOVE 1 TO num. \\nMOVE EXACT 1 TO num. \\n\\ \\nnum = EXACT number( 1 ). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenobsolete\_assignments.html