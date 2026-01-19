---
title: "ABENCONVERSION_ENUMERATED"
description: |
  ABENCONVERSION_ENUMERATED - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONVERSION_ENUMERATED.htm"
abapFile: "ABENCONVERSION_ENUMERATED.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "internal-table", "ABENCONVERSION", "ENUMERATED"]
---

An [enumerated type](ABENENUM_TYPE_GLOSRY.html) is a special elementary data type. Variables of this type are [enumerated variables](ABENENUMERATED_VARIABLE_GLOSRY.html), which can only contain the [enumerated values](ABENENUMERATED_VALUE_GLOSRY.html) that are defined for the enumerated type. For this reason, source fields and target fields must be fully compatible in assignments between enumerated types, with one exception. The compatibility must apply to the enumerated type itself. The [base type](ABENBASE_TYPE_GLOSRY.html) of the enumerated type is not relevant.

The only exception to this rule is the assignment of source fields with enumerated types to character-like variables of the types `c` and `string`. In this case, the following conversion rule applies:

The name and length of the [enumerated constant](ABENENUMERATED_CONSTANT_GLOSRY.html) or the component of the [enumerated structure](ABENENUMERATED_STRUCTURE_GLOSRY.html) in which the current value of the source field is stored during the definition of the enumerated type, are assigned to the target field in uppercase letters.

This type of conversion to a character-like type can produce unexpected results. This is particularly common in operand positions in which implicit conversions take place. For this reason, a conversion of this type produces a message from the extended program check if it is known statically. This message can be hidden using the pragma `##types`.

There is no reverse conversion rule for assignments between character-like source fields and enumerated variables. There is however, a special rule for the conversion operator [`CONV`](ABENCONV_CONSTRUCTOR_ENUM.html) that enables the actual value of an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) to be read in accordance with its [basis type](ABENBASE_TYPE_GLOSRY.html).

Assignments between enumerated data objects and data objects that are not enumerated data objects lead to a syntax error or the runtime error `UC_OBJECTS_NOT_CONVERTIBLE`.

The enumerated values of the enumerated structure `p` of an enumerated type `planet` are loaded into an internal table whose line type is the enumerated type. Each line is then converted to the character-like type `string` and this is added to the internal table `planet_names`.

-   The following [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html) are possible as operands in assignments between enumerated types:

-   Source fields can be [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html) or components of [enumerated structures](ABENENUMERATED_STRUCTURE_GLOSRY.html) and [enumerated variables](ABENENUMERATED_VARIABLE_GLOSRY.html).
-   Target fields can be [enumerated variables](ABENENUMERATED_VARIABLE_GLOSRY.html).

-   To be compatible, the source field and target field must have exactly the same enumerated type. An enumerated type created using [RTTC](ABENRUN_TIME_TYPE_CREATION_GLOSRY.html) methods is never identical to a type defined using [`TYPES`](ABAPTYPES_ENUM.html). A type description object created for an existing enumerated type using [RTTC](ABENRUN_TIME_TYPE_CREATION_GLOSRY.html) methods, however, describes this type.
-   [Enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html) with enumerated types can be listed in all [read positions](ABENDATA_OBJECTS_USAGE_READING.html) where an implicit conversion to a character-like data type `c` or `string` takes place. They cannot be listed in operand positions where the operand must have a character-like data type.
-   For an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html), the [ABAP Debugger](ABENABAP_DEBUGGER_GLOSRY.html) displays the name of the value that is converted into a character-like type.
-   When converting to a character-like type, the direct name of the enumerated constant is always used in the context of the declaration with a maximum of 30 characters. It is not prefixed with the name of an [enumerated structure](ABENENUMERATED_STRUCTURE_GLOSRY.html) with the structure component selector (`-`), nor with any class name with the class component selector (`=>`). Therefore, the conversion of enumerated objects of different enumerated types can have the same result if the names of the enumerated constants match.
-   To assign a type-dependent initial value to enumerated variables, the statement [`CLEAR`](ABAPCLEAR.html) or a constructor expression [`VALUE #( )`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) can be used on the right side of an assignment.

TYPES: \\n BEGIN OF ENUM planet STRUCTURE p, \\n mercury, \\n venus, \\n earth, \\n mars, \\n jupiter, \\n saturn, \\n uranus, \\n neptune, \\n END OF ENUM planet STRUCTURE p. \\n\\ \\nDATA planets TYPE SORTED TABLE OF planet \\n WITH UNIQUE KEY table\_line. \\nDO. \\n ASSIGN p-(sy-index) TO FIELD-SYMBOL(

). \\n IF sy-subrc <> 0. \\n EXIT. \\n ENDIF. \\n planets = VALUE #( BASE planets (

) ). \\nENDDO. \\n\\ \\nDATA planet\_names TYPE SORTED TABLE OF string \\n WITH UNIQUE KEY table\_line. \\nplanet\_names = VALUE #( \\n BASE planet\_names FOR enum IN planets ( CONV string( enum ) ) ). \\n\\ \\ncl\_demo\_output=>display( planet\_names ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconversion\_rules.html