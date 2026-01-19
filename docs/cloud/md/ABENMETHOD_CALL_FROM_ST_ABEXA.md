---
title: "Method Call from Simple Transformation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMETHOD_CALL_FROM_ST_ABEXA.htm"
abapFile: "ABENMETHOD_CALL_FROM_ST_ABEXA.html"
keywords: ["select", "delete", "loop", "do", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "ABENMETHOD", "CALL", "FROM", "ABEXA"]
---

This example demonstrates the call of a static method from a Simple Transformation.

The method `MAIN` of the global class `CL_DEMO_CALL_FROM_ST` calls an ST program `DEMO_ST_WITH_METHOD_CALL` and passes the static attributes `SCARR_TAB` and `SPFLI_TAB` of this class to the identically named data roots of the transformation. The table `SCARR_TAB` is filled and `SPFLI_TAB` is passed empty. The ST program is as follows:

<?sap.transform simple?>\\ \\n<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">\\ \\n  <tt:root name="SCARR\_TAB"/>\\ \\n  <tt:root name="SPFLI\_TAB"/>\\ \\n  <tt:variable name="carrid"/>\\ \\n  <tt:template>\\ \\n    <FlightList>\\ \\n      <tt:loop ref=".SCARR\_TAB">\\ \\n        <Flights>\\ \\n          <tt:attribute name="Carrier" value-ref="CARRNAME"/>\\ \\n          <tt:assign ref="carrid" to-var="carrid"/>\\ \\n          <tt:call-method class="CL\_DEMO\_CALL\_FROM\_ST" \\n                          s-name="GET\_FLIGHTS">\\ \\n            <tt:with-parameter name="CARRID" var="carrid"/>\\ \\n          </tt:call-method>\\ \\n          <tt:loop ref=".SPFLI\_TAB">\\ \\n            <Connection>\\ \\n              <tt:attribute name="ID" value-ref="CONNID"/>\\ \\n              <From>\\ \\n                <tt:value ref="CITYFROM"/>\\ \\n              </From>\\ \\n              <To>\\ \\n                <tt:value ref="CITYTO"/>\\ \\n              </To>\\ \\n            </Connection>\\ \\n          </tt:loop>\\ \\n        </Flights>\\ \\n      </tt:loop>\\ \\n    </FlightList>\\ \\n  </tt:template>\\ \\n</tt:transform>

In a serialization in a [`tt:loop` loop](ABENST_TT_LOOP.html), the data root `SCARR_TAB` is used to call the static method `GET_FLIGHTS` of the global class `CL_DEMO_CALL_FROM_ST`. This passes the component `carrid` of the internal table `scarr_tab` to the input parameter of the method. In the method, `spfli_tab` is filled in a different way in each loop pass in accordance with the passed parameters.

\* Public class definition \\n"!

Method Call from Simple Transformation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_call\_from\_st DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n FINAL \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n TYPES: \\n t\_spfli\_tab TYPE SORTED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid. \\n CLASS-DATA flight\_tab TYPE t\_spfli\_tab . \\n METHODS constructor . \\n CLASS-METHODS get\_flights \\n IMPORTING \\n !carrid TYPE spfli-carrid . \\n\\ \\n PRIVATE SECTION. \\n CLASS-DATA spfli\_tab TYPE t\_spfli\_tab . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_call\_from\_st IMPLEMENTATION. \\n METHOD main. \\n DATA scarr\_tab TYPE SORTED TABLE OF scarr \\n WITH UNIQUE KEY carrid. \\n\\ \\n SELECT \* \\n FROM scarr \\n INTO TABLE @scarr\_tab. \\n IF sy-subrc <> 0. \\n RETURN. \\n ENDIF. \\n TRY. \\n CALL TRANSFORMATION demo\_st\_with\_method\_call \\n SOURCE scarr\_tab = scarr\_tab \\n spfli\_tab = spfli\_tab \\n RESULT XML DATA(xml). \\n out->write\_xml( xml ). \\n CATCH cx\_st\_call\_method\_error INTO DATA(exc). \\n out->write\_text( exc->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n ENDMETHOD. \\n METHOD get\_flights. \\n flight\_tab = spfli\_tab. \\n DELETE flight\_tab WHERE carrid <> carrid. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n SELECT \* \\n FROM spfli \\n INTO TABLE @spfli\_tab. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Method Call from Simple Transformation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_call\_from\_st DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n FINAL \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n TYPES: \\n t\_spfli\_tab TYPE SORTED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid. \\n CLASS-DATA flight\_tab TYPE t\_spfli\_tab . \\n METHODS constructor . \\n CLASS-METHODS get\_flights \\n IMPORTING \\n !carrid TYPE spfli-carrid . \\n\\ \\n PRIVATE SECTION. \\n CLASS-DATA spfli\_tab TYPE t\_spfli\_tab . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_call\_from\_st IMPLEMENTATION. \\n METHOD main. \\n DATA scarr\_tab TYPE SORTED TABLE OF scarr \\n WITH UNIQUE KEY carrid. \\n\\ \\n SELECT \* \\n FROM scarr \\n INTO TABLE @scarr\_tab. \\n IF sy-subrc <> 0. \\n RETURN. \\n ENDIF. \\n TRY. \\n CALL TRANSFORMATION demo\_st\_with\_method\_call \\n SOURCE scarr\_tab = scarr\_tab \\n spfli\_tab = spfli\_tab \\n RESULT XML DATA(xml). \\n out->write\_xml( xml ). \\n CATCH cx\_st\_call\_method\_error INTO DATA(exc). \\n out->write\_text( exc->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n ENDMETHOD. \\n METHOD get\_flights. \\n flight\_tab = spfli\_tab. \\n DELETE flight\_tab WHERE carrid <> carrid. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n SELECT \* \\n FROM spfli \\n INTO TABLE @spfli\_tab. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_abexas.html