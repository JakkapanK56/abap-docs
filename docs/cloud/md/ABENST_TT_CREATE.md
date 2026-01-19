---
title: "ABENST_TT_CREATE"
description: |
  ABENST_TT_CREATE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_TT_CREATE.htm"
abapFile: "ABENST_TT_CREATE.html"
keywords: ["if", "method", "class", "data", "ABENST", "CREATE"]
---

`<tt:create-object var="oref" [class="class"]>\    [<tt:with-parameter name="para1"                        [ref="node1"|val="val1"|var="var1"] />\     <tt:with-parameter name="para2"                        [ref="node2"|val="val2"|var="var2"] />\     ...]\  </tt:create-object>`

The statement `tt:create-object` can be used to create an instance of a global ABAP Objects class in an ST program. `var` can be used to specify a [`variable`](ABENST_TT_VARIABLE.html) or a [`parameter`](ABENST_TT_PARAMETER.html) of the ST program. The variable or parameter must have been created as a class reference variable or an interface reference variable with the addition `ref-type`.

The object is created in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of the ABAP program that called the ST program. If the attribute `class` is not specified, `var` must be a class reference variable and an instance of the corresponding class is created. If the attribute `class` is specified, an instance of the specified class is created. A global class from the ABAP class library can be specified for `class`, either more special or the same as the static type of the reference variable `var`:

The interface parameters `para1`, `para2`, ... of the instance constructor of the class of the object can or must be bound to actual parameters using the ST statement `tt:with-parameter`. The same rules apply here as to regular [method calls](ABENST_TT_CALL-METHOD_STATIC.html). Constructor exceptions are also handled in the same way as exceptions for regular method calls.

After the object has been created, the reference variable `var` points to the object and can be used to call instance methods.

The transformation `DEMO_ST_WITH_CREATE_OBJECT` uses the variable `ovar` to create an object of class `CL_DEMO_CREATE_FROM_ST` and passes the data root `PARA` to the parameter `REPL` of its instance constructor. The method `CONVERT` is then called, whose input/output parameter is assigned the variable `result`. Note that a data root cannot be assigned to an input/output parameter, neither in serializations nor in deserializations.

The transformation is called in class `CL_DEMO_CREATE_OBJECT_FROM_ST`. The constructor of class `CL_DEMO_CREATE_FROM_ST` is defined as follows:

The method `CONVERT` is defined as follows:

The result of the transformation is as follows:

-   If `var` is a class reference variable, `class` must be the class or subclass of the class of `var`.
-   If `var` is an interface reference variable, `class` must implement the interface of `var`.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n METHOD constructor. \\nme->repl = repl. \\nENDMETHOD. METHOD convert. \\n REPLACE ALL OCCURRENCES OF \` \` IN text WITH repl. \\nENDMETHOD. 1\*2\*3 abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_abap\_objects.html