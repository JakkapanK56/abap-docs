---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBOUND_ABEXA.htm"
abapFile: "ABENBOUND_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENBOUND", "ABEXA"]
---

This example demonstrates the predicate expression [`IS NOT BOUND`](ABENLOGEXP_BOUND.html).

The static attribute `dref` of a class is assigned a reference to a local data object in a method. This [stack reference](ABENSTACK_REFERENCE_GLOSRY.html) is invalid once the method is exited. Therefore, both predicate expressions `IS NOT INITIAL` and `IS NOT BOUND` are true for `dref`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_is\_not\_bound DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n DATA dref TYPE REF TO i. \\n METHODS meth. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_is\_not\_bound IMPLEMENTATION. \\n METHOD main. \\n me->meth( ). \\n IF me->dref IS NOT INITIAL AND \\n me->dref IS NOT BOUND. \\n out->write( \\n 'stack reference is not initial but not bound' ). \\n ENDIF. \\n ENDMETHOD. \\n METHOD meth. \\n DATA number TYPE i. \\n dref = REF #( number ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_is\_not\_bound DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n DATA dref TYPE REF TO i. \\n METHODS meth. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_is\_not\_bound IMPLEMENTATION. \\n METHOD main. \\n me->meth( ). \\n IF me->dref IS NOT INITIAL AND \\n me->dref IS NOT BOUND. \\n out->write( \\n 'stack reference is not initial but not bound' ). \\n ENDIF. \\n ENDMETHOD. \\n METHOD meth. \\n DATA number TYPE i. \\n dref = REF #( number ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenpredicate.html abenpredicate\_expressions.html abenlogexp\_bound.html