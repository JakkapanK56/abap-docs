---
title: "ABENABAP_XSLT_ABAP_CALLS"
description: |
  ABENABAP_XSLT_ABAP_CALLS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_XSLT_ABAP_CALLS.htm"
abapFile: "ABENABAP_XSLT_ABAP_CALLS.html"
keywords: ["select", "do", "while", "if", "method", "class", "data", "types", "ABENABAP", "XSLT", "ABAP", "CALLS"]
---

ABAP methods can be called by XSLT using the extension elements `sap:call-external` and `sap:external-function`.

Using the statement `sap:call-external`, ABAP calls with any number of return values can be performed from within an XSLT program. These calls can take place both at the instance level of ABAP classes (instance methods) and at the class level (class methods). When calling interface methods, these must be indicated with the name of the interface followed by the interface component selector (`intf~`).

Instance methods are called using the following syntax.

<sap:call-external name="prefix:localname" method="instanceMethod"> \\n  <sap:callvalue      param="inParam1" select="expression"/> \\n  <sap:callvalue      param="inParam2" select="expression"/>      ... \\n  <sap:callvariable   param="exParam1" name="varName1" type="xslType"/> \\n  <sap:callvariable   param="exParam2" name="varName2" type="xslType"/> \\n      ... \\n</sap:call-external>

The conversion of the types `number` and `node-set` into, for example, the corresponding ABAP values is done according to the following schema:

The following example demonstrates an access to the database of the SAP system with which additional data is displayed for a selected flight connection. The call takes place using the class method `GET_DETAIL` for the class `CL_FLIGHT_INFO`. The information received is bound to the corresponding XSLT variables (`duration`, `distance`, `unit`, ...) using `sap:callvariable`.

Using the instruction `sap:external-function`, a function for ABAP calls from within XPath can be declared. In contrast to `sap:call-external`, only one single return value can be specified for the method call. For this purpose, the method to be called must be declared as an external function at the top level of the XSLT program. Functions declared this way can be used for method calls in the XPath expressions and have their own namespace (not XSLT or SAP XSLT). When calling interface methods, these must be indicated with the name of the interface followed by the interface component selector (`intf~`).

Instance methods are called using the following syntax.

<sap:external-function name="prefix:fName" method="instanceMethod" kind="instance"> \\n   <sap:argument      param="PARAM\_1"/> \\n   <sap:argument      param="PARAM\_2"/> \\n      ... \\n   <sap:result        param="RESULT"      type="xslType"/> \\n</sap:external-function>

Class methods are called using the following syntax.

<sap:external-function name="prefix:fName" class="className" method="classMethod" kind="class"> \\n   <sap:argument      param="PARAM\_1"/> \\n   <sap:argument      param="PARAM\_2"/> \\n      ... \\n   <sap:result        param="RESULT"      type="xslType"/> \\n</sap:external-function>

Constructors are called using the following syntax.

<sap:external-function name="prefix:new" class="className" kind="constructor"> \\n   <sap:argument      param="PARAM\_1"/> \\n   <sap:argument      param="PARAM\_2"/> \\n      ... \\n</sap:external-function>

Declared functions can be used in XPath expressions for ABAP calls. For instance methods, the first function argument must be identified using an ABAP object.

Example: `<xsl:value-of select="prefix:f1($x,99,'abc')"/>`

In the example given, the function with the name `prefix:f1` defines an ABAP call using an instance method that passes the two values `99` and `'abc'` as input parameters. The first function argument `$x` identifies the required ABAP object.

Using a suitable declared constructor function, this call can also be written alternatively as follows: `<xsl:value-of select="prefix:f1(prefix:new('xyz'),99,'abc')"/>`

-   The statement `sap:call-external` can be at any position in the XSLT source code where `xsl:call-template` is also allowed.
-   An object name that identifies an ABAP object and the name of the method to be called need to be specified to call an instance method.
-   Both sub-instructions `sap:callvalue` and `sap:callvariable` are required to pass parameter values.
-   Using `sap:callvalue`, parameter values are passed to the called method as import parameters. The `param` attribute specifies one parameter name each from the method definition in ABAP; the value assignment takes place with the `select` attribute. Here the XSLT types `string`, `number`, `boolean`, and `node-set` can be passed to the ABAP parameters.

-   In general, ABAP objects can also be specified as parameters.
-   Note that ABAP parameters of type `CHANGING` can be passed using both `sap:callvalue` and `sap:callvariable`.
-   When a class method is called, the `name` attribute is replaced with the `class` attribute. The value for `class` must be specified accordingly as the name of the ABAP class and the value for the method as the name of the required class method: `sap:call-external class="className" method="classMethod"`.

-   Except for the constructor declaration, the output of the attribute `method` is the name of the ABAP method to be called. The `kind` attribute defines, in addition, whether there is an instance or class method or a constructor. For class methods and constructors, the output of the name of the ABAP class is made using the `class` attribute.
-   The list of function arguments is declared using the sub-instruction `sap:argument` (while respecting the order). The names of the corresponding ABAP parameters are specified using the `param` attribute.
-   Calls of instance and class methods can define a return value using the sub-instruction `sap:result`. The name of the return parameter is specified by the `param` attribute. Optionally, a particular XSLT type (`string`, `number`, `boolean`, `node-set`, or `external`) can be assigned to the result using the `type` attribute.

1.  A value of the type `number` can be compiled in ABAP both into an integer as well as into a floating point type.
2.  A node set is always converted into an iXML node collection. Note that there can be no implicit conversion of node sets into strings. For example, to pass the value of an attribute `attr` to a string parameter in ABAP, the XPath expression `string(@attr)` must be used.
3.  Data of type `C(1)` is converted to an XSLT string by default. However, if `boolean` is explicitly specified in the `type` attribute, the conversion is to XSLT `boolean` accordingly.

\\ \\n \\n \\n \\n \\n \\n \\n \\n \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt.html abenabap\_xslt\_self\_written.html abenabap\_xslt\_statements.html abenabap\_xslt\_sap\_instr.html