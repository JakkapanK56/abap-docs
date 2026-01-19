---
title: "ABENBOUND_ABEXA"
description: |
  ABENBOUND_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBOUND_ABEXA.htm"
abapFile: "ABENBOUND_ABEXA.html"
keywords: ["if", "method", "class", "data", "ABENBOUND", "ABEXA"]
---

This example demonstrates the predicate expression [`IS NOT BOUND`](ABENLOGEXP_BOUND.html).

The static attribute `dref` of a class is assigned a reference to a local data object in a method. This [stack reference](ABENSTACK_REFERENCE_GLOSRY.html) is invalid once the method is exited. Therefore, both predicate expressions `IS NOT INITIAL` and `IS NOT BOUND` are true for `dref`.

\* Public class definition \\nCLASS cl\_demo\_is\_not\_bound DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n DATA dref TYPE REF TO i. \\n METHODS meth. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_is\_not\_bound IMPLEMENTATION. \\n METHOD main. \\n me->meth( ). \\n IF me->dref IS NOT INITIAL AND \\n me->dref IS NOT BOUND. \\n out->write( \\n 'stack reference is not initial but not bound' ). \\n ENDIF. \\n ENDMETHOD. \\n METHOD meth. \\n DATA number TYPE i. \\n dref = REF #( number ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_is\_not\_bound DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n DATA dref TYPE REF TO i. \\n METHODS meth. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_is\_not\_bound IMPLEMENTATION. \\n METHOD main. \\n me->meth( ). \\n IF me->dref IS NOT INITIAL AND \\n me->dref IS NOT BOUND. \\n out->write( \\n 'stack reference is not initial but not bound' ). \\n ENDIF. \\n ENDMETHOD. \\n METHOD meth. \\n DATA number TYPE i. \\n dref = REF #( number ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenpredicate.html abenpredicate\_expressions.html abenlogexp\_bound.html