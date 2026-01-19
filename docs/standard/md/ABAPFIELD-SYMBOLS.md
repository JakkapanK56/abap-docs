---
title: "ABAPFIELD-SYMBOLS"
description: |
  ABAPFIELD-SYMBOLS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFIELD-SYMBOLS.htm"
abapFile: "ABAPFIELD-SYMBOLS.html"
keywords: ["do", "if", "case", "method", "class", "data", "internal-table", "field-symbol", "ABAPFIELD", "SYMBOLS"]
---

[Short Reference](ABAPFIELD-SYMBOLS_SHORTREF.html)

``FIELD-SYMBOLS <fs> \{\ [`typing`](ABENTYPING_SYNTAX.html)\ |\ [`obsolete_typing`](ABAPFIELD-SYMBOLS_OBSOLETE_TYPING.html)\ \}.``

[`... typing`](#ABAP_ONE_ADD@1@)

The statement `FIELD-SYMBOLS` declares a [field symbol](ABENFIELD_SYMBOL_GLOSRY.html)\\ `<fs>`. The [naming conventions](ABENNAMING_CONVENTIONS.html) apply to the name `fs`. The angle brackets distinguish field symbols from data objects and are mandatory. Field symbols can be declared in any [procedure](ABENPROCEDURE_GLOSRY.html) and in the global declaration part of an ABAP program, but not in the declaration part of a class or an interface. A field symbol can be used in all operand positions where it is visible and that fit the [typing](ABENTYPING.html) defined using `typing`.

A field symbol is initial directly after its declaration (exception: [obsolete typings without an explicit type](ABAPFIELD-SYMBOLS_OBSOLETE_TYPING.html)), which means that it does not refer to a memory area. A memory area must be assigned to it (normally using the statement [`ASSIGN`](ABAPASSIGN.html)) before it can be used as an operand. Otherwise an exception is raised.

Declaring a field symbol `<number>` and using it at operand positions.

Declaring a field symbol with the invalid name `<>`. The example shows, that the field symbol cannot be used at all operand positions. Besides `CLEAR` shown here, especially modern expressions are affected.

The addition `typing` is used to type the field symbol. The syntax of `typing` is described under [Typing](ABENTYPING_SYNTAX.html). The typing specifies which memory areas [can](ABENTYPING_CHECK_GENERAL.html) be assigned to the field symbol and in which operand positions it can be used.

In addition to the defined typing with [`typing`](ABENTYPING_SYNTAX.html), an obsolete typing [`obsolete_typing`](ABAPFIELD-SYMBOLS_OBSOLETE_TYPING.html) is also possible outside of methods.

Typing of a field symbol `<itab>` as an internal table and a field symbol `<wa>` with a completely generic type.

-   An [inline declaration](ABENINLINE_DECLARATION_GLOSRY.html) of field symbols can be made using the declaration operator [`FIELD-SYMBOL`](ABENFIELD-SYMBOL_INLINE.html).
-   The angle brackets are a part of the name, which means that a field symbol could potentially be called `<>`. Such a field symbol cannot be used at all operand positions and leads to syntax errors from case to case. Therefore, the name `<>` should be avoided.

FIELD-SYMBOLS TYPE i. \\n\\ \\nASSIGN 1 TO . \\n\\ \\n... \\n\\ \\nIF \> 10. \\n CLEAR . \\nENDIF. FIELD-SYMBOLS <> TYPE i. \\n\\ \\nASSIGN 1 TO <>. \\n\\ \\n... \\n\\ \\nIF <> > 10. \\n <> = 0. \\n "CLEAR <>. "Syntax error \\nENDIF. FIELD-SYMBOLS: TYPE ANY TABLE, \\n TYPE any. \\n\\ \\n... \\n\\ \\nASSIGN \[ KEY primary\_key ('...') = '...' \] TO . abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenabap\_field\_symbols.html