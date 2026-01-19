---
title: "ABENINLINE_DECLARATIONS"
description: |
  ABENINLINE_DECLARATIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENINLINE_DECLARATIONS.htm"
abapFile: "ABENINLINE_DECLARATIONS.html"
keywords: ["data", "field-symbol", "ABENINLINE", "DECLARATIONS"]
---

An inline declaration is performed using a [declaration operator](ABENDECLARATION_OPERATOR_GLOSRY.html) in a [declaration expression](ABENDECLARATION_EXPRESSION_GLOSRY.html) in a [declaration position](ABENDECLARATION_POSITION_GLOSRY.html). The result of the declaration is used in the current operand position, is visible statically as of the current position and is valid in the current context.

Inline declarations are intended to make programs leaner and more readable. The following rules must also be observed:

[Only use inline declarations locally](ABENDECLARATION_INLINE_GUIDL.html)

-   [`DATA`, Inline Declaration for Variables](ABENDATA_INLINE.html)
-   [`FINAL`, Inline Declaration for Immutable Variables](ABENFINAL_INLINE.html)
-   [`FIELD-SYMBOL`, Inline Declaration for Field Symbols](ABENFIELD-SYMBOL_INLINE.html)

-   The rule that [no global variables and field symbols](ABENDECLARATION_VARIABLES_GUIDL.html) should be declared means that inline declarations should only be made in processing blocks that support [local data](ABENLOCAL_DATA_GLOSRY.html).
-   Inline declarations are an exception to the rule that [local declarations](ABENLOCAL_DECLAR_GUIDL.html) should only be made at the start of a procedure. For this reason, they should only be used in manageable procedures to improve their readability.

abenabap.html abenabap\_reference.html abendeclarations.html