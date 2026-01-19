---
title: "ABENTEXT_SYMBOLS"
description: |
  ABENTEXT_SYMBOLS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTEXT_SYMBOLS.htm"
abapFile: "ABENTEXT_SYMBOLS.html"
keywords: ["do", "if", "case", "data", "types", "ABENTEXT", "SYMBOLS"]
---

A text symbol is a [named data object](ABENNAMED_DATA_OBJECT_GLOSRY.html) of an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) that is not declared in the program itself but is maintained as a part of the [text elements](ABENTEXT_ELEMENT_GLOSRY.html) of the program. A text symbol has the [data type](ABENDATA_TYPE_GLOSRY.html)\\ [`c`](ABENBUILTIN_TYPES_CHARACTER.html) and the length defined in the text elements by `mlen`.

A text symbol behaves like a [constant](ABENCONSTANT_GLOSRY.html) and can be specified in [read positions](ABENREAD_POSITION_GLOSRY.html) using its names as follows:

`... text-idf ...`

Here, `idf` is the three-character ID of the text symbol, which can be composed of all alphanumeric characters including *\_*. The text symbol is then taken from the currently loaded [text pool](ABENTEXT_POOL_GLOSRY.html).

If the text symbol does not exist in the currently loaded [text pool](ABENTEXT_POOL_GLOSRY.html), `text-idf` is handled like an initial single-character [text field](ABENTEXT_FIELD_GLOSRY.html).

A text symbol can be linked to [text field literals](ABENTEXT_FIELD_LITERAL_GLOSRY.html) using the following syntax:

`... 'Literal'(idf) ...`

If the text symbol exists in the currently loaded text pool, it replaces the literal. If the text symbol does not exist, the literal is used.

Access to the text symbol `exa` of the current program. If available, its text is displayed. If not, the text field literal is used in the first case and a blank is used in the second case.

-   Like all text elements, text symbols are linked to the translation environment. They can be used in all locations where translated texts are to be displayed by the program.
-   The maximum length of a text symbol should be chosen so that there is enough space available for the translation. For example, the German translation of the six-character English word *window* requires seven characters (*Fenster*).
-   The identifier `text-idf` is reserved for text symbols. A structure called `text` cannot have any components with three-character names. It is best never to call a structure `text`. This can cause syntax errors, particularly in structures that reference global data types.

cl\_demo\_output=>new( \\n )->write( 'Text in text symbol'(exa) \\n )->write( TEXT-exa \\n )->display( ). abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html