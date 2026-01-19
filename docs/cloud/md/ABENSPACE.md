---
title: "ABENSPACE"
description: |
  ABENSPACE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSPACE.htm"
abapFile: "ABENSPACE.html"
keywords: ["if", "data", "ABENSPACE"]
---

The program-global constant `space` has the data type `c`, length 1, and contains a blank character.

The result of the following [concatenation](ABAPCONCATENATE.html) is a string with exactly one blank. The blanks in the first two `spaces` specified are ignored. Blanks are only respected after `SEPARATED BY`. Except for `space`, this example also applies to a [text field literal](ABENTEXT_FIELD_LITERAL_GLOSRY.html)\\ `' '` with exactly one blank character.

-   For the constant `space`, trailing blanks are ignored in most operand positions, as for all character-like fields with fixed lengths. The constant `space` should therefore not be used in such positions.
-   The name `space` is reserved and cannot be used in any context for other data objects, structure components, attributes, or formal parameters.

DATA text TYPE string. \\n\\ \\nCONCATENATE space space INTO text SEPARATED BY space. abenabap.html abenabap\_reference.html abenbuilt\_in.html abenbuilt\_in\_objects.html