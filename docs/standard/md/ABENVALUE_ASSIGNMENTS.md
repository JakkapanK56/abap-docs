---
title: "ABENVALUE_ASSIGNMENTS"
description: |
  ABENVALUE_ASSIGNMENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENVALUE_ASSIGNMENTS.htm"
abapFile: "ABENVALUE_ASSIGNMENTS.html"
keywords: ["if", "method", "data", "ABENVALUE", "ASSIGNMENTS"]
---

An assignment passes the content of a source to a target data object. The source can be one of the following:

The following sections describe the rules, operators, and keywords where the assignment of source values to target data objects is of significance.

Assignments also occur, however, in the [operand positions](ABENOPERAND_POSITION_GLOSRY.html) of many other statements in which the [assignment rules](ABENCONVERSION_RULES.html) also apply.

Typical assignment with the assignment operator (`=`) during which a conversion takes place. In the assignment to a data object `num` of type `i`, the current user date is converted to the number of days since 01.01.0001.

-   [Data objects](ABENDATA_OBJECT_GLOSRY.html)
-   Return values or results of [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html), [built-in functions](ABENBUILTIN_FUNCTION_GLOSRY.html) and [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html), or [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html)
-   Results of [calculation expressions](ABENCALCULATION_EXPRESSION_GLOSRY.html)

-   [Assignment and conversion rules](ABENCONVERSION_RULES.html)
-   [`=` - assignment operator](ABENEQUALS_OPERATOR.html)
-   [`CONV` - conversion operator](ABENCONSTRUCTOR_EXPRESSION_CONV.html)
-   [Assigning structure components](ABENCORRESPONDING.html)
-   [Assigning references](ABENREFERENCE_ASSIGNMENTS.html)
-   [Lossless assignments](ABENLOSSLESS_MOVE.html)
-   [Special assignments](ABENABAP_DATA_MOVE.html)
-   [Initializations](ABENINITIALIZATIONS.html)

DATA num TYPE i. \\n\\ \\nnum = cl\_demo\_date\_time=>get\_user\_date( ). \\n\\ \\ncl\_demo\_output=>display( \\n |\\{ cl\_demo\_date\_time=>get\_user\_date( ) \\}->\\{ num \\}| \\n ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html