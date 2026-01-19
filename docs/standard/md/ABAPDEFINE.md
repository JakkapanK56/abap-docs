---
title: "ABAPDEFINE"
description: |
  ABAPDEFINE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDEFINE.htm"
abapFile: "ABAPDEFINE.html"
keywords: ["insert", "if", "case", "class", "data", "types", "ABAPDEFINE"]
---

[Short Reference](ABAPDEFINE_SHORTREF.html)

`DEFINE macro.`\\ 
  `... &1 ... &9 ...`\\ 
`END-OF-DEFINITION.`

The statement `DEFINE` defines a [macro](ABENMACRO_GLOSRY.html)\\ `macro`. The following [naming conventions](ABENNAMING_CONVENTIONS.html) apply to `macro` and [ABAP words](ABENABAP_WORD_GLOSRY.html) cannot be used. Macros can be defined in all [program types](ABENPROGRAM_TYPE_GLOSRY.html), particularly in [type pools](ABENTYPE_POOL_GLOSRY.html).

Any content can be found between the statements `DEFINE` and `END-OF-DEFINITION`. A macro is not evaluated until it is included in another program, and then it must have correct syntax. Currently, a macro can only be [included](ABENMACRO_INCLUDE.html) in other ABAP programs using its name `macro`.

The validity of a macro is determined by its position in the [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html). It can be included in the same compilation unit at any position after `END-OF-DEFINITION`. If another macro is defined under the same name in a program, it overwrites the previous macro from its new position.

Within a macro, up to nine placeholders `&1 ... &9` can be used instead of ABAP words and operands. These placeholders must be replaced by fixed words when the macro is inserted.

[Only use macros in exceptional cases.](ABENMACROS_GUIDL.html)

See [Including Macros](ABENMACRO_INCLUDE.html).

[Macros](ABENMACRO_ABEXA.html)

-   Breakpoints cannot be set in macros and the statements of a macro cannot be executed in individual steps in the ABAP Debugger.
-   In global classes, macros are defined in a dedicated include program.
-   Apart from in the source code of a program and in [type pools](ABENTYPE_POOL_GLOSRY.html), macros can also be stored as cross-program macros in the table `TRMAC`. However no new macros should be defined in the database table `TRMAC`. An example of a macro stored in the table `TRMAC` is `break`, which sets a breakpoint depending on the current user name in the system field `sy-uname`.

abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html abenabap\_language\_includes.html abenabap\_macros.html