---
title: "ABENNEW_CONSTRUCTOR_PARAMS_SINGLE"
description: |
  ABENNEW_CONSTRUCTOR_PARAMS_SINGLE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEW_CONSTRUCTOR_PARAMS_SINGLE.htm"
abapFile: "ABENNEW_CONSTRUCTOR_PARAMS_SINGLE.html"
keywords: ["select", "loop", "do", "if", "data", "internal-table", "ABENNEW", "CONSTRUCTOR", "PARAMS", "SINGLE"]
---

``... NEW dtype|#( [[`let_exp`](ABAPLET.html)] dobj ) ...``

If `dtype` is a non-generic elementary data type, a structured type, a table type, or a reference type or `#` is used for a type like this, a single data object `dobj` can be specified as a single operand `dobj` that is convertible to or from data type `dtype`. `dobj` is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html). The value of `dobj` is assigned to the created anonymous data object. The assignment is made in accordance with the applicable [assignment rules](ABENCONVERSION_RULES.html). Optionally, a `LET` expression [`let_exp`](ABAPLET.html) can be specified in front of the data object to define local helper fields.

Construction of an anonymous data object of the type `string`, whose value is determined using a string expression.

For each line read, a structured anonymous data object is created in a `SELECT` loop, to which the content of the line is assigned. The object is created in the general expression position of the statement `APPEND` and the created data reference is appended directly to an internal table with the appropriate line type. The result is a table that references all new anonymous data objects.

-   In particular, an expression specified for `dobj` can be a constructor expression itself or contain a constructor expression.
-   When a constructor expression is assigned to a reference variable using `NEW`, the original reference is available in the entire expression in the target variable. The target variable is not overwritten until the expression is completed.

DATA input TYPE c LENGTH 10 VALUE 'World'. \\ncl\_demo\_input=>request( CHANGING field = input ). \\n\\ \\nDATA dref TYPE REF TO string. \\ndref = NEW string( \`Hello \` && input && \`!\` ). \\n\\ \\ncl\_demo\_output=>display( dref->\* ). DATA dref\_tab TYPE TABLE OF REF TO t100 WITH EMPTY KEY. \\n\\ \\nDATA wa TYPE t100. \\n\\ \\nSELECT \* \\n FROM t100 \\n WHERE sprsl = @sy-langu \\n INTO @wa. \\n APPEND NEW #( wa ) TO dref\_tab. \\nENDSELECT. abenabap.html abenabap\_reference.html abencreate\_objects.html abenconstructor\_expression\_new.html