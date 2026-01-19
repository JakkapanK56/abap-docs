---
title: "Parentheses in bit expressions"
description: |
  The displayed result is: FINAL(out) = cl_demo_output=>new( ). n nTYPES output TYPE TABLE OF xstring WITH EMPTY KEY. nDATA hex1 TYPE xstring VALUE '0011'. nDATA hex2 TYPE xstring VALUE '0101'. nDATA hex3 TYPE xstring VALUE '1100'. nout->write( VALUE output( n ( hex1 BIT-AND hex2 BIT
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBIT_BRACKETS.htm"
abapFile: "ABENBIT_BRACKETS.html"
keywords: ["data", "types", "ABENBIT", "BRACKETS"]
---

`... ( bit_exp ) ...`

A complete bit expression `bit_exp` can be placed in parentheses. A bit expression in parentheses can be used as the operand of another bit expression and is not calculated until used in this way.

Parentheses in bit expressions

The displayed result is:

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES output TYPE TABLE OF xstring WITH EMPTY KEY. \\nDATA hex1 TYPE xstring VALUE '0011'. \\nDATA hex2 TYPE xstring VALUE '0101'. \\nDATA hex3 TYPE xstring VALUE '1100'. \\nout->write( VALUE output( \\n ( hex1 BIT-AND hex2 BIT-OR hex3 ) \\n ( ( hex1 BIT-AND hex2 ) BIT-OR hex3 ) \\n ( hex1 BIT-AND ( hex2 BIT-OR hex3 ) ) ) ). \\n\\ \\nout->display( ). 1101 \\n1101 \\n0001 abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenbyte\_processing\_expr\_func.html abapcompute\_bit.html