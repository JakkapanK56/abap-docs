---
title: "ABENTRAILING_BLANKS_LITERALS_GUIDL"
description: |
  ABENTRAILING_BLANKS_LITERALS_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTRAILING_BLANKS_LITERALS_GUIDL.htm"
abapFile: "ABENTRAILING_BLANKS_LITERALS_GUIDL.html"
keywords: ["do", "if", "case", "data", "ABENTRAILING", "BLANKS", "LITERALS", "GUIDL"]
---

Trailing blanks in text field literals use memory, but are [generally](ABENSTRING_PROCESSING_TRAIL_BLANKS.html) ignored in operand positions, like all data objects of the type `c`. In text string literals they are always relevant, as is the case for all data objects of type `string`.

**Do not use trailing blanks in text field literals**

They should also not be specified in literals in any operand positions where trailing blanks are not relevant.

This rule is designed mainly to make programs more readable. It makes no sense to specify literal characters in places where they are ignored, and raises expectations in users of the program that cannot be met. In particular, this also applies to the text field literal `' '`.

Conversely, specifying the supposedly empty text field literal `''` in places where trailing blanks are respected may be a trap.

The following simple example demonstrates the full scope of the rule. Any readers with little experience in ABAP would expect the result of the assignment to be a string with length six. In actual fact, the result contains only the three relevant places.

Whether the example needs to be improved depends on whether the trailing blanks are required. If the blanks are needed, use a text string literal:

If they are not needed, leave them out:

The following example demonstrates that the supposedly empty literal `''` actually represents a blank that is not cut off after `SEPARATED BY`. The result is *AB AP*.

Depending on whether the blank is needed as a separator, either `' '` or ` `` ` must be specified after `SEPARATED BY` to express this clearly.

DATA text TYPE string. \\n\\ \\ntext = '123 '. text = \`123 \`. text = '123'. DATA text TYPE string. \\n\\ \\nCONCATENATE 'AB' 'AP' INTO text SEPARATED BY ''. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abenassignment\_access\_gdl.html