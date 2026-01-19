---
title: "ABAPMETHODS_PARAMETERS"
description: |
  ABAPMETHODS_PARAMETERS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMETHODS_PARAMETERS.htm"
abapFile: "ABAPMETHODS_PARAMETERS.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABAPMETHODS", "PARAMETERS"]
---

``... \{ VALUE(p1) | REFERENCE(p1) | p1 \}\          [`typing`](ABENTYPING_SYNTAX.html)``\\ `[OPTIONAL|\{DEFAULT def1\}]`\\ 
    ``\{ VALUE(p2) | REFERENCE(p2) | p2 \}\          [`typing`](ABENTYPING_SYNTAX.html)``\\ `[OPTIONAL|\{DEFAULT def2\}]`\\ 
    `...`

[`... OPTIONAL|\{DEFAULT def\}`](#ABAP_ONE_ADD@1@)

Definition of formal parameters `p1 p2 ...` for methods.

`VALUE` or `REFERENCE` determine whether a parameter `p1 p2 ...` is passed by [value](ABENPASS_BY_VALUE_GLOSRY.html) or by [reference](ABENPASS_BY_REFERENCE_GLOSRY.html). If only one name `p1 p2 ...` is specified, the parameter is passed by reference by default. An input parameter passed by reference cannot be changed in the method.

The addition `typing` must be used to type every formal parameter. The syntax of `typing` is described in [Typing Syntax](ABENTYPING_SYNTAX.html). The typing of a formal parameter causes the data type to be [checked](ABENTYPING_CHECK.html) against the typing when an actual parameter is passed. The typing also defines in which operand positions the formal parameter can be used in the method.

If a formal parameter is typed as a reference variable and cannot be changed in the [procedure](ABENPROCEDURE_GLOSRY.html), the type check is performed as for an [upcast](ABENUP_CAST_GLOSRY.html). If it can be changed in the procedure, the actual parameter must be compatible with the formal parameter.

`OPTIONAL` or `DEFAULT` can be used to define input parameters and input/output parameters as optional parameters, where `DEFAULT` can be used to specify a replacement parameter `def1`, `def2`, ... No actual parameter needs to be specified for an optional parameter when the method is called.

The addition `OPTIONAL` is used to initialize a formal parameter in a type-compliant way, but the addition `DEFAULT` passes the value and type of the replacement parameter `def1 def2 ...` to the formal parameter. Any data object that is visible here that complies with the rules for [checking typing](ABENTYPING_CHECK.html) can be specified as replacement parameters `def1 def2 ...`, with the exception of the components of [boxed components](ABENBOXED_COMPONENT_GLOSRY.html).

If no actual parameter is specified for a generically typed formal parameter using the addition `OPTIONAL` when it is called, the type of the formal parameter is completed according to the [rules for generic types](ABENTYPING_GENERIC.html).

If a literal is specified after `DEFAULT`, the same special rules apply as to [literals as actual parameters](ABENTYPING_LITERALS.html). Afterwards, the compatibility may not then be checked completely. Instead, in method calls where no actual parameter is specified for the formal parameter, a literal is converted to the data type of the formal parameter and an exception can be raised if the value of the literal does not fit in the value range of this data type.

Declaration of a method with two different specifications of input parameters. The specification of `REFERENCE(p2)` has the same meaning as `p2`.

CLASS cls DEFINITION. \\n PUBLIC SECTION. \\n METHODS \\n meth \\n IMPORTING \\n p1 TYPE i \\n REFERENCE(p2) TYPE i DEFAULT 111 \\n VALUE(p3) TYPE i OPTIONAL. \\n ... \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD meth. \\n ... \\n ENDMETHOD. \\n ... \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abenmethods.html abapmethods.html