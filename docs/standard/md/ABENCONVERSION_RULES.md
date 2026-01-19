---
title: "ABENCONVERSION_RULES"
description: |
  ABENCONVERSION_RULES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONVERSION_RULES.htm"
abapFile: "ABENCONVERSION_RULES.html"
keywords: ["do", "if", "case", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "ABENCONVERSION", "RULES"]
---

When the value of a source object (`source`) is assigned to a destination object (`destination`), three cases can be distinguished with respect to the data type:

The following sections describe the conversion rules. Conversion rules exist for:

The special [assignment rules for reference variables](ABENCONVERSION_REFERENCES.html) are listed in a separate section.

The conversion rules shown here generally apply to all [assignments](ABENEQUALS_OPERATOR.html) and all statements in which the content of data objects is changed. Exceptions to these rules are described in the individual statements.

The [conversion operator](ABENCONVERSION_OPERATOR_GLOSRY.html)\\ [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) can be used in many operand positions to convert a source value to an explicitly specified target data type in accordance with the rules described here. [System classes](ABENCL_ABAP_CONV.html) are available for special conversions of character sets and numeric formats.

[Avoid unexpected conversion results](ABENUSE_CONVERSION_RULES_GUIDL.html)

Method `APPLIES_TO_DATA` of RTTI class `CL_ABAP_DATADESCR` is used to check the compatibility of generically typed field symbols pointing to different data objects. Assigning the content of <fs1> to <fs3> would raise an uncatchable exception.

-   [Elementary data objects](ABENCONVERSION_ELEMENTARY.html)
-   [Structures](ABENCONVERSION_STRUC.html)
-   [Internal tables](ABENCONVERSION_ITAB.html)
-   [Meshes](ABENCONVERSION_MESH.html)
-   [Enumerated types](ABENCONVERSION_ENUMERATED.html)

-   In the [operand positions](ABENOPERAND_POSITION_GLOSRY.html) of many statements, assignments take place internally according to the assignment rules. Whether the exceptions that occur during an assignment can be handled or not depends on the operands and the operand position. The following are some examples:

-   If [functional method calls](ABAPCALL_METHOD_FUNCTIONAL.html) are used in operand positions, exceptions that can be handled when data objects are used directly cannot be handled, and produce runtime errors directly instead.
-   In [comparisons](ABENLOGEXP.html), some different [rules](ABENLOGEXP_RULES_OPERANDS.html) apply than in assignments. Exceptions that are catchable in assignments are either handled implicitly or lead to runtime errors and cannot be handled explicitly in comparisons.
-   Using [expressions](ABENEXPRESSION_GLOSRY.html) in operand positions can make uncatchable exceptions catchable in some cases.

-   The [lossless operator](ABENLOSSLESS_OPERATOR_GLOSRY.html)\\ [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) can be used to perform checks before the conversion is executed that ensure that only valid values are assigned and that no values are lost in assignments.
-   Checks generally are not made on assignments between compatible data objects. If a data object already contains an invalid value, for example an invalid date or time in a date or time field, it is transferred like a valid value if the assignment is being made to a compatible data object.
-   In order to check if two data types are compatible at runtime, the method `APPLIES_TO_DATA` of RTTI class `CL_ABAP_DATADESCR` can be used. This can be helpful to prevent uncatchable exceptions when assigning generically typed data objects that are neither compatible nor convertible.

1.  `source` and `destination` are [compatible](ABENCOMPATIBLE_GLOSRY.html), which means that all [technical type properties](ABENTECHNICAL_TYPE_PRPT_GLOSRY.html) match. The content is transferred from `source` to `destination` without being converted. For flat data objects and coherent character-like or byte-like structural areas, a copy of the source object is created down to the exact byte. In the case of [deep](ABENDEEP_GLOSRY.html) data objects, a reference is created whose actual byte-like content is not visible externally in the destination object. When entire structures are assigned, the behavior in terms of [alignment gaps](ABENALIGNMENT_GAP_GLOSRY.html) is undefined. The binary content of an alignment gap in the destination structure can either be copied from the source structure or keep the original value.
2.  `source` and `destination` are not compatible but can be [converted](ABENCONVERTIBLE_GLOSRY.html). The content of `source` is converted in accordance with the conversion rules and then transferred to `destination`. Two data types are convertible if a conversion rule exists for them. An exception is raised if the content of `source` cannot be handled in accordance with the conversion rules. After an exception, the content of `destination` depends on the category of the data type. An assignment where a conversion takes place is always slower than an assignment without conversion.
3.  If the data objects are neither compatible nor convertible, no assignment can take place. If the syntax check recognizes this state, a syntax error is raised, otherwise an uncatchable exception is raised when the program is executed.

DATA num1 TYPE i. \\nDATA num2 TYPE i. \\nDATA itab TYPE TABLE OF i WITH EMPTY KEY. \\n\\ \\nDATA(o) = cl\_demo\_output=>new( ). \\n\\ \\nFIELD-SYMBOLS: \\n TYPE any, \\n TYPE any, \\n TYPE any. \\n\\ \\nASSIGN num1 TO . \\nASSIGN num2 TO . \\nASSIGN itab TO . \\n\\ \\no->next\_section( 'i vs. i' ). \\nIF CAST cl\_abap\_datadescr( cl\_abap\_typedescr=>describe\_by\_data( ) \\n )->applies\_to\_data( ). \\n o->write( 'Compatible' ). \\n\\ \\n \= . \\n\\ \\nELSE. \\n o->write( 'Not compatible' ). \\nENDIF. \\n\\ \\no->next\_section( 'i vs. itab' ). \\nIF CAST cl\_abap\_datadescr( cl\_abap\_typedescr=>describe\_by\_data( ) \\n )->applies\_to\_data( ). \\n o->write( 'Compatible' ). \\n\\ \\n \= . \\n\\ \\nELSE. \\n o->write( 'Not compatible' ). \\nENDIF. \\n\\ \\no->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html