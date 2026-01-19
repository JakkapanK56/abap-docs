---
title: "ABENREF_TRANSF_GLOBAL_DATA_GUIDL"
description: |
  ABENREF_TRANSF_GLOBAL_DATA_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENREF_TRANSF_GLOBAL_DATA_GUIDL.htm"
abapFile: "ABENREF_TRANSF_GLOBAL_DATA_GUIDL.html"
keywords: ["do", "if", "method", "class", "data", "ABENREF", "TRANSF", "GLOBAL", "DATA", "GUIDL"]
---

In a local context you can normally directly access the [data objects](ABENDATA_TYPE_OBJ_GDL.html) of superordinate more global contexts. For example, it is possible in a method to perform writes on the attributes of its class and on any global data of the current program.

Therefore, if a more global data object is passed to a procedure by reference, access is granted there both through its name and the formal parameter.

**Do not pass global data to local contexts using pass by reference**

Do not use global data as actual parameters for formal parameters of procedures if you can change them in the procedure in another way, and the parameter is passed by reference.

If a global data object that has also been passed by reference is changed in a procedure ([method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html)), this also changes the formal parameter and vice versa. This behavior is not usually anticipated when writing the procedure.

Global data is only supposed to be passed to formal parameters for which [pass by value](ABENTYPE_TRANSF_FORMAL_PARA_GUIDL.html) is declared, or to procedures that are guaranteed not to have any unwanted consequences for this data.

After the `do_something` method has been called in the `main` method in the following source code, the `attr` attribute contains the unexpected value `2.0`, because the first assignment to the `c_value` changing parameter, which has been passed by reference, also changes `attr`.

If the pass by reference method in the method declaration of `do_something` in the above example is converted into a pass by value method, as shown in the following source code, the `attr` attribute contains the expected value `2.23` after the method has been called.

CLASS class DEFINITION. \\n PUBLIC SECTION. \\n METHODS \\n main. \\n PRIVATE SECTION. \\n DATA \\n attr TYPE p DECIMALS 2. \\n METHODS \\n do\_something CHANGING c\_value TYPE numeric. \\nENDCLASS. \\nCLASS class IMPLEMENTATION. \\n METHOD main. \\n attr = '1.23'. \\n do\_something( CHANGING c\_value = attr ). \\n ENDMETHOD. \\n METHOD do\_something. \\n ... \\n c\_value = floor( attr ). \\n ... \\n c\_value = c\_value + attr. \\n ... \\n ENDMETHOD. \\nENDCLASS. ... \\n METHODS \\n do\_something CHANGING VALUE(c\_value) TYPE numeric. \\n... abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abenassignment\_access\_gdl.html