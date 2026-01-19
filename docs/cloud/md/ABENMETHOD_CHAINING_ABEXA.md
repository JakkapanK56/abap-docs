---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMETHOD_CHAINING_ABEXA.htm"
abapFile: "ABENMETHOD_CHAINING_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENMETHOD", "CHAINING", "ABEXA"]
---

This example demonstrates method chaining in an operand position.

In the actual parameter passed to the method `DISPLAY_TEXT`, [chained attribute access](ABENCHAINED_ATTRIBUTE_ACC_GLOSRY.html) is applied to the attribute `text` of the class `demo`. The attribute is changed using three chained method calls.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_method\_chaining DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS meth IMPORTING str TYPE string \\n RETURNING VALUE(ref) \\n TYPE REF TO cl\_demo\_method\_chaining. \\n DATA text TYPE string. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_method\_chaining IMPLEMENTATION. \\n METHOD main. \\n out->write( \\n NEW cl\_demo\_method\_chaining( )->meth( \\n \`Hello \` )->meth( \`world\` )->meth( \`!\` )->text ). \\n ENDMETHOD. \\n METHOD meth. \\n text &&= str. \\n ref = me. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_method\_chaining DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS meth IMPORTING str TYPE string \\n RETURNING VALUE(ref) \\n TYPE REF TO cl\_demo\_method\_chaining. \\n DATA text TYPE string. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_method\_chaining IMPLEMENTATION. \\n METHOD main. \\n out->write( \\n NEW cl\_demo\_method\_chaining( )->meth( \\n \`Hello \` )->meth( \`world\` )->meth( \`!\` )->text ). \\n ENDMETHOD. \\n METHOD meth. \\n text &&= str. \\n ref = me. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abenmethod\_calls.html abenmethod\_calls\_static.html abapcall\_method\_static\_chain.html