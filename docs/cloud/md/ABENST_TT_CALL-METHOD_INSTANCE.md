---
title: "ABENST_TT_CALL-METHOD_INSTANCE"
description: |
  ABENST_TT_CALL-METHOD_INSTANCE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_TT_CALL-METHOD_INSTANCE.htm"
abapFile: "ABENST_TT_CALL-METHOD_INSTANCE.html"
keywords: ["if", "case", "method", "class", "data", "ABENST", "CALL", "METHOD", "INSTANCE"]
---

`<tt:call-method var="oref" [s-|d-]name="meth"                             [writer = "writer_para"]\                             [reader = "reader_para"] >\    [<tt:with-parameter [s-|d-]name="para1"                        [ref="node1"|val="val1"|var="var1"] />\     <tt:with-parameter [s-|d-]name="para2"                        [ref="node2"|val="val2"|var="var2"] />\     ...]\  </tt:call-method>`

Using this variant of the statement `tt:call-method`, it is possible to call an instance method of a global ABAP Objects class in an ST program as follows: `var` can be used to specify a [`variable`](ABENST_TT_VARIABLE.html) or a [`parameter`](ABENST_TT_PARAMETER.html) of the ST program. The addition `ref-type` must have been used to create the variable or parameter as a class reference variable or interface reference variable. When called, the variable or parameter must point to the object of a class. Either the object can have been created in the ST program using [`tt:create-object`](ABENST_TT_CREATE.html), or it is referred to a corresponding ABAP reference variable.

`meth` can be used to specify a visible method that exists in the static type of the reference variable, that is in the class or interface. The specification of the method is not case-sensitive.

Method execution, parameter passing, and optional attributes are subject to the same conditions as [static method calls](ABENST_TT_CALL-METHOD_STATIC.html).

The transformation `DEMO_ST_WITH_METHOD_CALL_INST` calls an instance method `CONVERT` in an object referenced by the parameter `OPAR`. This is passed to the input parameter `input` of the method and its return value `RESULT` is assigned to an identically named variable. The variable `result` is then serialized using [`tt:write`](ABENST_TT_WRITE.html). Note that no data root can be assigned to the return value of the method in serializations.

The transformation is called in class `CL_DEMO_CALL_METH_FROM_ST`. A reference to an object of class `CL_DEMO_CALL_FROM_ST_INST` is passed using the addition `PARAMETERS`. The instance method `CONVERT` of that class is defined as follows:

The result of the transformation is as follows:

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n METHOD convert. \\n result = input. \\n REPLACE ALL OCCURRENCES OF \` \` IN result WITH \`-\`. \\nENDMETHOD. 1-2-3 abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_abap\_objects.html