---
title: "ABENAMDP_POLYMORPHISM_CS_ABEXA"
description: |
  ABENAMDP_POLYMORPHISM_CS_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAMDP_POLYMORPHISM_CS_ABEXA.htm"
abapFile: "ABENAMDP_POLYMORPHISM_CS_ABEXA.html"
keywords: ["if", "try", "catch", "method", "class", "data", "ABENAMDP", "POLYMORPHISM", "ABEXA"]
---

This example demonstrates how AMDP methods are implemented from interfaces and superclasses. The AMDP methods use the AMDP option [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) and thus are [client-safe](ABENCLIENT_SAFE_GLOSRY.html).

An interface `IF_DEMO_AMDP_INTERFACE_CS` and an abstract superclass `CL_DEMO_AMDP_SUPERCLASS_CS` implement the tag interface `IF_AMDP_MARKER_HDB` and contain the method `GET_SCARR`, which meets the prerequisites of an [AMDP method](ABENAMDP_METHOD_GLOSRY.html).

The interface method is implemented as an AMDP method in the class `CL_DEMO_AMDP_IMPLEMENT_HDB_CS`. In the same way, the method of the abstract superclass is redefined in the concrete subclass `CL_DEMO_AMDP_SUBCLASS_HDB_CS`.

\* Public class definition \\nCLASS cl\_demo\_amdp\_polymorphism\_cs DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_amdp\_polymorphism\_cs IMPLEMENTATION. \\n METHOD main. \\n DATA: iref TYPE REF TO if\_demo\_amdp\_interface\_cs, \\n cref TYPE REF TO cl\_demo\_amdp\_superclass\_cs. \\n\\ \\n cref = NEW cl\_demo\_amdp\_subclass\_hdb\_cs( ). \\n iref = NEW cl\_demo\_amdp\_implement\_hdb\_cs( ). \\n\\ \\n TRY. \\n iref->get\_scarr( IMPORTING carriers = FINAL(result1) ). \\n cref->get\_scarr( IMPORTING carriers = FINAL(result2) ). \\n CATCH cx\_amdp\_execution\_error cx\_amdp\_version\_error \\n cx\_amdp\_creation\_error INTO FINAL(amdp\_error). \\n out->write( amdp\_error->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n ASSERT result1 = result2. \\n\\ \\n out->write( name = 'Result' \\n data = result1 ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_amdp\_polymorphism\_cs DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_amdp\_polymorphism\_cs IMPLEMENTATION. \\n METHOD main. \\n DATA: iref TYPE REF TO if\_demo\_amdp\_interface\_cs, \\n cref TYPE REF TO cl\_demo\_amdp\_superclass\_cs. \\n\\ \\n cref = NEW cl\_demo\_amdp\_subclass\_hdb\_cs( ). \\n iref = NEW cl\_demo\_amdp\_implement\_hdb\_cs( ). \\n\\ \\n TRY. \\n iref->get\_scarr( IMPORTING carriers = FINAL(result1) ). \\n cref->get\_scarr( IMPORTING carriers = FINAL(result2) ). \\n CATCH cx\_amdp\_execution\_error cx\_amdp\_version\_error \\n cx\_amdp\_creation\_error INTO FINAL(amdp\_error). \\n out->write( amdp\_error->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n ASSERT result1 = result2. \\n\\ \\n out->write( name = 'Result' \\n data = result1 ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_examples.html abenamdp\_cs\_abexas.html