---
title: "ABENFIXED_POINT_ARITH_EXTERNAL"
description: |
  ABENFIXED_POINT_ARITH_EXTERNAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENFIXED_POINT_ARITH_EXTERNAL.htm"
abapFile: "ABENFIXED_POINT_ARITH_EXTERNAL.html"
keywords: ["while", "if", "case", "method", "class", "data", "ABENFIXED", "POINT", "ARITH", "EXTERNAL"]
---

A procedure called externally is executed in accordance with the property [Fixed Point Arithmetic](ABENFIXED_POINT_ARITHMETIC_GLOSRY.html) of its compilation unit. Here, each [actual parameter](ABENFORMAL_PARAMETER_GLOSRY.html) bound to a [formal parameter](ABENACTUAL_PARAMETER_GLOSRY.html) of the procedure is also handled in accordance with the property of the called program, irrespective of the corresponding property of the calling program, the parameter type and pass by type.

The justification for the behavior described here is that parameter passing should be independent of pass by reference and pass by value. To avoid the corresponding problems, it is strongly recommended that fixed point arithmetic is not switched off in any program. In this context, this applies particularly to class pools and function pools.

The following example is a global class:

A calling program section could be as follows:

Depending on the properties, the result is as follows, where the properties of the calling program are in the top line and the properties of the called program are in the left column:

The formal parameter is assigned to the bound actual parameter, including the associated conversion while respecting the decimal separators, only if fixed point arithmetic is switched on in the called procedure. If fixed point arithmetic is switched off in the called procedure, the decimal separator of the actual parameter is ignored.

The call could also, however, appear as follows:

In this case, the result looks like this:

In this case, the call takes place in an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html). The return value of the call is first assigned to an interim result of the type of the formal parameter and this is then converted into the calculation type of the arithmetic expression in the calling program. In this case, therefore, the property of the calling program determines whether or not the decimal separator is respected.

The behavior in the second case usually corresponds to the expectations of a caller. This can, of course, also be achieved by introducing a helper variable of the type of the formal parameter that is first used as an actual parameter in the calling program and then assigned to the target field.

CLASS cl\_test DEFINITION PUBLIC. \\n PUBLIC SECTION. \\n CLASS-METHODS meth RETURNING value(p) TYPE string. \\nENDCLASS. \\n\\ \\nCLASS cl\_test IMPLEMENTATION. \\n METHOD meth. \\n p = '1000'. \\n ENDMETHOD. \\nENDCLASS. DATA pack TYPE p DECIMALS 2. \\n\\ \\npack = cl\_test=>meth( ). DATA pack TYPE p DECIMALS 2. \\n\\ \\npack = + cl\_test=>meth( ). **Fixed Point Arithmetic** **on** **off** **Fixed Point Arithmetic** **on** **off** **on** 1000.00 1000.00 **off** 10.00 10.00 **on** 1000.00 10.00 **off** 1000.00 10.00 abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abencall\_procedures\_extern.html