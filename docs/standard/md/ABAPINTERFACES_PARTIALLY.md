---
title: "ABAPINTERFACES_PARTIALLY"
description: |
  ABAPINTERFACES_PARTIALLY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINTERFACES_PARTIALLY.htm"
abapFile: "ABAPINTERFACES_PARTIALLY.html"
keywords: ["do", "if", "method", "class", "data", "ABAPINTERFACES", "PARTIALLY"]
---

[Short Reference](ABAPINTERFACES_SHORTREF.html)

``[`INTERFACES`](ABAPINTERFACES_CLASS.html) intf``\\ 
  `PARTIALLY IMPLEMENTED`\\ 
  `...`

The addition `PARTIALLY IMPLEMENTED` for statement [`INTERFACES`](ABAPINTERFACES_CLASS.html) for implementing interfaces in classes can only be used in [test classes](ABENTEST_CLASS_GLOSRY.html). This addition prevents the syntax check error/warning from occurring if not all concrete non-optional interface methods are implemented in the test class. The addition must be specified before the additions that list the attributes or methods.

If an interface method that is not implemented is called during a test, an exception from the class `CX_SY_DYN_CALL_ILLEGAL_METHOD` is raised.

The addition is particularly useful when classes that are used as test doubles implement interfaces and not all the methods of these implements are called by the code to be tested. Without this addition, it would be necessary to implement all unnecessary methods without values and assign them the `needed` pragma. This is because implementing methods without values produces a warning from the extended program check.

The class `CL_HTTP_EXT_SERVICE_DEMO` is an example of production code. This class demonstrates the function of a simple `HTTP` service. If the service is used normally, the method `IF_HTTP_EXTENSION~HANDLE_REQUEST` from [ICF](ABENICF_GLOSRY.html) is called. ICF-independent tests can be run for the class: In its `CL_HTTP_EXT_SERVICE_DEMO======CCAU` local classes are declared as test doubles for the classes of ICF that implement the following interfaces:

Only the interface methods required for the execution of tests are implemented. The interfaces have numerous other methods. These methods must not be implemented when empty due to the addition `PARTIALLY IMPLEMENTED`.

The actual test class looks as follows:

In the test method, ICF is simulated by directly creating objects of the test doubles. The `REQUEST` test double simulates the form field. The `RESPONSE` test double contains the result that is checked after the method `HANDLER` is called for testing.

CLASS mock\_server DEFINITION FOR TESTING FINAL. \\n PUBLIC SECTION. \\n INTERFACES if\_http\_server PARTIALLY IMPLEMENTED. \\nENDCLASS. \\n\\ \\nCLASS mock\_server IMPLEMENTATION. \\nENDCLASS. \\n\\ \\nCLASS mock\_request DEFINITION FOR TESTING FINAL. \\n PUBLIC SECTION. \\n INTERFACES if\_http\_request PARTIALLY IMPLEMENTED. \\nENDCLASS. \\n\\ \\nCLASS mock\_request IMPLEMENTATION. \\n METHOD if\_http\_request~get\_form\_field. \\n value = SWITCH spfli-carrid( name WHEN 'carrid' THEN 'LH' \\n ELSE space ) ##no\_text. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS mock\_response DEFINITION FOR TESTING FINAL. \\n PUBLIC SECTION. \\n INTERFACES if\_http\_response PARTIALLY IMPLEMENTED. \\n DATA output TYPE string. \\nENDCLASS. \\n\\ \\nCLASS mock\_response IMPLEMENTATION. \\n METHOD if\_http\_response~set\_cdata. \\n me->output = data. \\n ENDMETHOD. \\nENDCLASS. CLASS test\_http\_service DEFINITION FOR TESTING \\n DURATION SHORT \\n RISK LEVEL HARMLESS \\n FINAL. \\n PRIVATE SECTION. \\n DATA mock\_request TYPE REF TO mock\_request. \\n DATA mock\_response TYPE REF TO mock\_response. \\n DATA mock\_server TYPE REF TO mock\_server. \\n DATA handler TYPE REF TO cl\_http\_ext\_service\_demo. \\n METHODS test\_service FOR TESTING. \\nENDCLASS. \\n\\ \\nCLASS test\_http\_service IMPLEMENTATION. \\n METHOD test\_service. \\n CREATE OBJECT mock\_request. \\n CREATE OBJECT mock\_response. \\n CREATE OBJECT mock\_server. \\n CREATE OBJECT handler. \\n mock\_server->if\_http\_server~request = mock\_request. \\n mock\_server->if\_http\_server~response = mock\_response. \\n handler->if\_http\_extension~handle\_request( mock\_server ). \\n IF mock\_response->output NS \`\`. \\n cl\_abap\_unit\_assert=>fail( msg = \`Wrong output data\` ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html abenabap\_unit.html