---
title: "ABENUSE_CONVERSION_RULES_GUIDL"
description: |
  ABENUSE_CONVERSION_RULES_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUSE_CONVERSION_RULES_GUIDL.htm"
abapFile: "ABENUSE_CONVERSION_RULES_GUIDL.html"
keywords: ["do", "if", "case", "try", "catch", "data", "types", "internal-table", "ABENUSE", "CONVERSION", "RULES", "GUIDL"]
---

ABAP contains numerous conversion rules for assignments between data objects of different data types. These rules relate to assignments between:

Assignments between data objects of nearly every different data type are possible. The only prohibited assignments are for data types for data and time specifications. Almost all allowed assignments have a corresponding conversion rule. It is especially important to have rules for assignments between data objects of the same data type, if different technical properties (such as length or number of decimal places) are allowed. [Lossless assignments](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html) allow only conversions that produce valid values and where no values are lost.

**Avoid unexpected conversion results**

Only assign data objects to each other if the content corresponds to the data type of the target field and produces an expected result. Do not exploit every ABAP conversion rule to its full extent. Consider using [lossless assignments](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html).

The ABAP conversion rules are based on the philosophy that assignments should be allowed between as many combinations of values as possible, without raising exceptions. In this situation, ABAP behaves quite differently from other programming languages. In other languages, assignments between different data types are usually handled much more strictly and special conversion exits or explicit casting for specific requested conversions are used.

Although it is convenient to be able to readily assign all possible data objects to each other, there are also disadvantages, such as the [creation of invalid values](ABENAVOIDING_INVALID_VALUES_GUIDL.html). Another example is [implicit casting](ABENCASTING_GUIDL.html), which occurs when assignments are made between elementary data objects and structures, or between incompatible structures.

Even if no invalid values are created, problems still can occur. If valid target values are created from invalid source values, this does not necessarily meet the expectations of the reader and it can make program maintenance considerably difficult. One example of this is the handling of invalid content in the source field in assignments from a character-like type to a byte-like type. Instead of exiting the assignment with an exception, hexadecimal zeros are passed from the first invalid character.

The only solution here are [lossless assignments](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html) with the operator [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html), which produce an exception in these cases. Even though this is a bit late in the day, the behavior of an assignment with the operator `EXACT` could be regarded as the normal, expected behavior. Other unexpected behaviors represent an implementation of special rules, which is actually the standard behavior in ABAP.

Anyone who is familiar with all the details of the ABAP conversion rules would probably expect an exception when the text in the following source code is assigned to the numeric text. However, only the digits of the text are respected. Therefore, the target field is given the value *00000042* instead of the value *00000007*, which might also be expected.

This issue is corrected in the source code below. The [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) operator is used, which raises an exception.

-   [Elementary data objects](ABENCONVERSION_ELEMENTARY.html)
-   [Elementary data objects and structures](ABENCONVERSION_FLAT_ELEMENTARY.html)
-   [Structures](ABENCONVERSION_STRUC.html)
-   [Internal tables](ABENCONVERSION_ITAB.html)
-   [Reference variables](ABENCONVERSION_REFERENCES.html)

DATA text TYPE string, \\nnum\_text TYPE n LENGTH 8. \\n... \\ntext = '4 Apples + 2 Oranges'. \\n... \\nnum\_text = text. ... \\ntext = '4 Apples + 2 Oranges'. \\n... \\nTRY. \\n num\_text = EXACT #( text ). \\n CATCH cx\_sy\_conversion\_error. \\n ... \\nENDTRY. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abenassignment\_access\_gdl.html