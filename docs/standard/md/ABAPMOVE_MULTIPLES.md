---
title: "ABAPMOVE_MULTIPLES"
description: |
  ABAPMOVE_MULTIPLES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMOVE_MULTIPLES.htm"
abapFile: "ABAPMOVE_MULTIPLES.html"
keywords: ["if", "data", "types", "ABAPMOVE", "MULTIPLES"]
---

`destination1 = destination2 = ... = destination = rhs.`

The [assignment operator `=`](ABENEQUALS_OPERATOR.html) can be used to perform multiple assignments at once within a single statement. This statement is the same as:

`destination = rhs`\\
`... = destination`\\
`destination2 = ...`\\
`destination1 = destination2.`

The same settings can be specified for `rhs` as for the simple [assignment](ABENEQUALS_OPERATOR.html). Only existing variables can be specified for `destination`, `destination1`, `destination2`, but no [inline declarations](ABENINLINE_DECLARATIONS.html).

Any conversions are performed for each assignment, which means that a value assigned to a data object on the left side may be converted multiple times if the operands have different data types. To assign the value of `lhs` to different data objects with one conversion each, multiple statements are needed.

After the assignments, all involved data objects are given the name`Hugo`.

DATA: name TYPE string, \\n name1 TYPE string, \\n name2 TYPE string, \\n name3 TYPE string. \\n\\ \\nname = \`Hugo\`. \\n\\ \\nname3 = name2 = name1 = name. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenabap\_data\_move.html