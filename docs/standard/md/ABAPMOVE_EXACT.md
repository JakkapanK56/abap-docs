---
title: "ABAPMOVE_EXACT"
description: |
  ABAPMOVE_EXACT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMOVE_EXACT.htm"
abapFile: "ABAPMOVE_EXACT.html"
keywords: ["if", "catch", "class", "data", "types", "internal-table", "ABAPMOVE", "EXACT"]
---

A lossless assignment checks the assigned content, before its [conversion](ABENCONVERSION_GLOSRY.html) to an incompatible target object, to determine whether the assignment is possible without losses, that is:

If the source contains a valid value and no values are lost, the conversion is performed in accordance with the associated [conversion rules](ABENCONVERSION_RULES.html). Otherwise no assignment is made. If it is already known statically that one of the prerequisites is violated, a syntax error occurs. If this violation is not identified until the program is executed, a catchable exception is raised whose exception class is generally a subclass of `CX_SY_CONVERSION_ERROR`.

The following sections outline which rules are used by the operator [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) when checking the content of its argument with respect to the data types involved:

If an exception is raised as a result of an invalid or inappropriate value, the `VALUE` attribute of the exception object is assigned this value in character form and this value is generally also included in the exception text.

No checks are made for:

A syntax check warning is produced if it is known statically that no checks are performed for the combination of argument and target type, making `EXACT` superfluous.

Since lossless checks are only performed for conversions to incompatible data types, it is best to only use the operator `EXACT` to fill data objects that should only be given valid objects. Other types of assignments that require a start value to be specified in the declaration using [`VALUE`](ABAPDATA_OPTIONS.html) can create invalid values that are then not recognized when a lossless assignment is made to a compatible target field.

[Lossless Assignment](ABENMOVE_EXACT_ABEXA.html).

-   whether it is a valid value for the data type of the source
-   whether a conversion to the target field would lead to a loss of values
-   whether the value is valid for the target field after conversion

-   [Checking Elementary Data Objects](ABENMOVE_EXACT_ELEMENTARY.html)
-   [Checking Structures](ABENMOVE_EXACT_STRUCTURE.html)
-   [Checking Internal Tables](ABENMOVE_EXACT_ITAB.html)

-   compatible data types
-   The content of the argument is passed to the return value without being converted, even if it already contains an invalid value.
-   reference variables
-   Checks on the content of a reference variable using `EXACT` are not useful because nothing is converted and the content is either assignable or not assignable, as specified by the [assignment rules for reference variables](ABENCONVERSION_REFERENCES.html).

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenlossless\_move.html