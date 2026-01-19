---
title: "ABENAMDP_POLYMORPHISM_ABEXA"
description: |
  ABENAMDP_POLYMORPHISM_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAMDP_POLYMORPHISM_ABEXA.htm"
abapFile: "ABENAMDP_POLYMORPHISM_ABEXA.html"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "ABENAMDP", "POLYMORPHISM", "ABEXA"]
---

This example demonstrates how AMDP methods are implemented from interfaces and superclasses. The AMDP methods do not use any of the AMDP options [`CDS SESSION CLIENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) and thus are not [client-safe](ABENCLIENT_SAFE_GLOSRY.html).

An interface `IF_DEMO_AMDP_INTERFACE` and an abstract superclass `CL_DEMO_AMDP_SUPERCLASS` implement the tag interface `IF_AMDP_MARKER_HDB` and contain the method `GET_SCARR`, which meets the prerequisites of an [AMDP method](ABENAMDP_METHOD_GLOSRY.html).

The interface method is implemented once as an AMDP method and once as a regular method in the classes `CL_DEMO_AMDP_IMPLEMENT_HDB` and `CL_DEMO_AMDP_IMPLEMENT_OPEN`. In the same way, the method of the abstract superclass is redefined in the concrete subclasses `CL_DEMO_AMDP_SUBCLASS_HDB` and `CL_DEMO_AMDP_SUBCLASS_OPEN`.

This class demonstrates how objects are created using either the AMDP method or the regular method and called polymorphically, depending on the current database.

\* Public class definition \\nCLASS cl\_demo\_amdp\_polymorphism DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_amdp\_polymorphism IMPLEMENTATION. \\n METHOD main. \\n DATA: iref TYPE REF TO if\_demo\_amdp\_interface, \\n cref TYPE REF TO cl\_demo\_amdp\_superclass. \\n\\ \\n IF cl\_abap\_dbfeatures=>use\_features( \\n EXPORTING \\n requested\_features = \\n VALUE #( ( cl\_abap\_dbfeatures=>call\_amdp\_method ) ) ). \\n cref = NEW cl\_demo\_amdp\_subclass\_hdb( ). \\n iref = NEW cl\_demo\_amdp\_implement\_hdb( ). \\n ELSE. \\n cref = NEW cl\_demo\_amdp\_subclass\_open( ). \\n iref = NEW cl\_demo\_amdp\_implement\_open( ). \\n ENDIF. \\n\\ \\n TRY. \\n iref->get\_scarr( EXPORTING clnt = sy-mandt \\n IMPORTING carriers = FINAL(result1) ). \\n cref->get\_scarr( EXPORTING clnt = sy-mandt \\n IMPORTING carriers = FINAL(result2) ). \\n CATCH cx\_amdp\_error INTO FINAL(amdp\_error). \\n out->write( amdp\_error->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n ASSERT result1 = result2. \\n\\ \\n out->write( name = 'Result' \\n data = result1 ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_amdp\_polymorphism DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_amdp\_polymorphism IMPLEMENTATION. \\n METHOD main. \\n DATA: iref TYPE REF TO if\_demo\_amdp\_interface, \\n cref TYPE REF TO cl\_demo\_amdp\_superclass. \\n\\ \\n IF cl\_abap\_dbfeatures=>use\_features( \\n EXPORTING \\n requested\_features = \\n VALUE #( ( cl\_abap\_dbfeatures=>call\_amdp\_method ) ) ). \\n cref = NEW cl\_demo\_amdp\_subclass\_hdb( ). \\n iref = NEW cl\_demo\_amdp\_implement\_hdb( ). \\n ELSE. \\n cref = NEW cl\_demo\_amdp\_subclass\_open( ). \\n iref = NEW cl\_demo\_amdp\_implement\_open( ). \\n ENDIF. \\n\\ \\n TRY. \\n iref->get\_scarr( EXPORTING clnt = sy-mandt \\n IMPORTING carriers = FINAL(result1) ). \\n cref->get\_scarr( EXPORTING clnt = sy-mandt \\n IMPORTING carriers = FINAL(result2) ). \\n CATCH cx\_amdp\_error INTO FINAL(amdp\_error). \\n out->write( amdp\_error->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n ASSERT result1 = result2. \\n\\ \\n out->write( name = 'Result' \\n data = result1 ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_examples.html abenamdp\_abexas.html