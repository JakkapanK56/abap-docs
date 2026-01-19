---
title: "ABENMACRO_INCLUDE"
description: |
  ABENMACRO_INCLUDE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMACRO_INCLUDE.htm"
abapFile: "ABENMACRO_INCLUDE.html"
keywords: ["insert", "if", "case", "class", "data", "ABENMACRO", "INCLUDE"]
---

`macro [p1 p2 ... ].`

If a macro is listed as the first word in an ABAP statement instead of a valid [ABAP keyword](ABENABAP_KEYWORD_GLOSRY.html), then its content is included in the source code at this position.

To create a syntactically correct program, the included macro may only contain complete ABAP statements except for [`DEFINE`](ABAPDEFINE.html) and [`END-OF-DEFINITION`](ABAPEND-OF-DEFINITION.html), and program-initiating statements. These statements create a source code section that is included in the current source code. The statements of the macro are not bound to the limits of processing blocks.

Appropriate ABAP words or operands `p1`, `p2`, ... must be passed to all placeholders of the macro. The specified operands `p1`, `p2`, replace the placeholders literally, one after another. In addition to the content of the literals, the characters are converted to uppercase letters.

The ABAP Compiler searches for a macro specified in an ABAP program as follows:

A macro can insert other macros but not itself.

[Only use macros in exceptional cases.](ABENMACROS_GUIDL.html)

In global classes, macros are defined and searched for in a dedicated include program.

In this example, the two macros `operation` and `output` are defined. `output` is nested in `operation`. `operation` is called three times with different parameters. Note how the placeholders `&1`, `&2`, ... are literally replaced in the macros.

[Macros](ABENMACRO_ABEXA.html)

1.  In the preceding source code of the same [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html).
2.  In the [type pools](ABENTYPE_POOL_GLOSRY.html) that can be used by the program. Local macros of the program hide macros of the same name in type pools.
3.  In database table `TRMAC`, macros in type pools usually follow different naming conventions to those in `TRMAC` and therefore nothing should be hidden.

DATA: result TYPE i, \\n n1 TYPE i VALUE 5, \\n n2 TYPE i VALUE 6. \\n\\ \\nDEFINE operation. \\n result = &1 &2 &3. \\n output &1 &2 &3 result. \\nEND-OF-DEFINITION. \\n\\ \\nDEFINE output. \\n write: / 'The result of &1 &2 &3 is', &4. \\nEND-OF-DEFINITION. \\n\\ \\noperation 4 + 3. \\noperation 2 \*\* 7. \\noperation n2 - n1. abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html abenabap\_language\_includes.html abenabap\_macros.html