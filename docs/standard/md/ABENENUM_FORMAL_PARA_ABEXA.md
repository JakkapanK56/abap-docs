---
title: "ABENENUM_FORMAL_PARA_ABEXA"
description: |
  ABENENUM_FORMAL_PARA_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENENUM_FORMAL_PARA_ABEXA.htm"
abapFile: "ABENENUM_FORMAL_PARA_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "field-symbol", "ABENENUM", "FORMAL", "PARA", "ABEXA"]
---

This example demonstrates the passing [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html) to a method.

The method `meth` has a parameter `psimple` of generic type `simple` and a parameter `penum` of CDS enumerated type `DEMO_CDS_ENUM_WEEKDAY`. Enumerated objects of this enumerated type can be passed to both. `psimple` cannot be used in a comparison where the other operand is an enumerated object. But it is possible to use `psimple` at a write position and to assign it to a field symbol that is typed with the enumerated type and use that in the comparison. Note that the assignment to the field symbol works since the operand position after `ASSIGN` is not handled as a read position.

\* Public class definition \\nCLASS cl\_demo\_enum\_para\_pass DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\n\\ \\n PRIVATE SECTION. \\n METHODS meth \\n IMPORTING \\n VALUE(psimple) TYPE simple \\n VALUE(penum) TYPE demo\_cds\_enum\_weekday . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_enum\_para\_pass IMPLEMENTATION. \\n METHOD main. \\n meth( psimple = demo\_cds\_enum\_weekday-sat \\n penum = demo\_cds\_enum\_weekday-fri ). \\n ENDMETHOD. \\n METHOD meth. \\n\* IF psimple = demo\_cds\_enum\_weekday-mon. "Syntax error \\n\* out->write( \`Sunday Bloody Sunday\` ). \\n\* ENDIF. \\n psimple = demo\_cds\_enum\_weekday-mon. \\n FIELD-SYMBOLS TYPE demo\_cds\_enum\_weekday. \\n ASSIGN psimple TO . \\n IF \= demo\_cds\_enum\_weekday-mon. \\n out->write( \`I Don't Like Mondays\` ). \\n ENDIF. \\n IF penum = demo\_cds\_enum\_weekday-fri. \\n out->write( \`Thank God It's Friday\` ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_enum\_para\_pass DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\n\\ \\n PRIVATE SECTION. \\n METHODS meth \\n IMPORTING \\n VALUE(psimple) TYPE simple \\n VALUE(penum) TYPE demo\_cds\_enum\_weekday . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_enum\_para\_pass IMPLEMENTATION. \\n METHOD main. \\n meth( psimple = demo\_cds\_enum\_weekday-sat \\n penum = demo\_cds\_enum\_weekday-fri ). \\n ENDMETHOD. \\n METHOD meth. \\n\* IF psimple = demo\_cds\_enum\_weekday-mon. "Syntax error \\n\* out->write( \`Sunday Bloody Sunday\` ). \\n\* ENDIF. \\n psimple = demo\_cds\_enum\_weekday-mon. \\n FIELD-SYMBOLS TYPE demo\_cds\_enum\_weekday. \\n ASSIGN psimple TO . \\n IF \= demo\_cds\_enum\_weekday-mon. \\n out->write( \`I Don't Like Mondays\` ). \\n ENDIF. \\n IF penum = demo\_cds\_enum\_weekday-fri. \\n out->write( \`Thank God It's Friday\` ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenenumerated\_types\_usage.html