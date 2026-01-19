---
title: "ABENSTRING_TEMPLATES_EXPRESSIONS"
description: |
  ABENSTRING_TEMPLATES_EXPRESSIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_TEMPLATES_EXPRESSIONS.htm"
abapFile: "ABENSTRING_TEMPLATES_EXPRESSIONS.html"
keywords: ["insert", "if", "case", "method", "class", "data", "ABENSTRING", "TEMPLATES", "EXPRESSIONS"]
---

``\{ embd_exp [[`format_options`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html)] \}``

Within a string template, an opening and a closing curly bracket `\{ ... \}` define a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html), `embd_exp`, at which the following can be specified in ABAP syntax:

At least one blank must be included on the right of the opening bracket and one the left of the closing bracket. An embedded expression must be complete within the current string template. An embedded expression within the curly brackets is handled in accordance with regular ABAP syntax:

The data type of the expression must be an [elementary data type](ABENELEMENTARY_DATA_TYPE_GLOSRY.html) and the value of the expression must be character-like or be convertible to a character string. When a string template is evaluated, the value of each embedded expression is converted to a character string and inserted at the corresponding position. The string is formatted either using

The embedded expressions in a string template are evaluated from left to right. If [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) are specified, they are executed during the analysis.

The string template in the method `main` uses embedded expressions to represent the text *Hello world!*. The first embedded expression is the attribute `attr` of the class. The return value of the method `func` is used in the second embedded expression. The third embedded expression is again the attribute `attr`, whose value has been changed in the method `func` in the meantime. The second embedded expression includes a line break and a comment is specified.

-   [Data objects](ABENDATA_OBJECT_GLOSRY.html)
-   [Calculation expressions](ABENCALCULATION_EXPRESSION_GLOSRY.html)
-   [Constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html)
-   [Table expressions](ABENTABLE_EXPRESSION_GLOSRY.html)
-   [Built-in functions](ABENBUILTIN_FUNCTION_GLOSRY.html)
-   [Functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) and [method chainings](ABENMETHOD_CHAINING_GLOSRY.html)

-   Tokens must be separated by at least one blank or line break.
-   In other cases, blanks and line breaks between tokens are not significant.
-   No distinction is made between uppercase and lowercase letters.
-   [Comments](ABENCOMMENT_GLOSRY.html) can be specified.

-   [Predefined formats](ABENSTRING_TEMPLATES_PREDEF_FORMAT.html)
-   Formatting options [`format_options`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html)

-   To display the curly brackets `\{` and `\}` in the [literal text](ABENSTRING_TEMPLATES_LITERALS.html) of a string template, they must be prefixed with the escape character `\\`.
-   Curly brackets cannot be nested directly. If `embd_expr` is itself a string expression, or contains a string expression, it can also contain embedded expressions.
-   [Character string functions](ABENCSTRING_FUNCTION_GLOSRY.html) with character-like return values are particularly suited when embedded functions are specified.
-   Unlike [arithmetic expressions](ABAPCOMPUTE_ARITH.html) and [bit expressions](ABAPCOMPUTE_BIT.html), embedded functional methods are not executed before the entire expression is evaluated. If an embedded functional method modifies the value of data objects that are also used as embedded operands, the change only affects data objects on the right of the method.

CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS: main, \\n func RETURNING VALUE(p) TYPE string. \\n PRIVATE SECTION. \\n CLASS-DATA attr TYPE string VALUE \`Hello\`. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD main. \\n DATA txt TYPE string. \\n txt = |\\{ attr \\}\\{ func( ) "a function call \\n WIDTH = 6 ALIGN = RIGHT \\}\\{ attr \\}|. \\n cl\_demo\_output=>display( txt ). \\n ENDMETHOD. \\n METHOD func. \\n p = \`world\`. \\n attr = '!'. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abapcompute\_string.html abenstring\_templates.html