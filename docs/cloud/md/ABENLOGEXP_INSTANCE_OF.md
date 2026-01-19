---
title: "ABENLOGEXP_INSTANCE_OF"
description: |
  ABENLOGEXP_INSTANCE_OF - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOGEXP_INSTANCE_OF.htm"
abapFile: "ABENLOGEXP_INSTANCE_OF.html"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "types", "field-symbol", "ABENLOGEXP", "INSTANCE"]
---

`... oref IS [NOT] INSTANCE OF class|intf`

The predicate expression `IS INSTANCE OF` checks whether

is more specific or equal to a comparison type. The comparison type must be an [object type](ABENOBJECT_TYPE_GLOSRY.html), that is, a class specified using `class` or an interface specified using `intf` that can be used here. `oref` expects an object reference variable with the static type of a class or of an interface. `oref` is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html).

The expression is true in the following cases or false if `NOT` is specified:

If a field symbol or a formal parameter is specified for `oref`, its type can be fully generic, which means it can be typed with [`any`](ABENBUILT_IN_TYPES_GENERIC.html) and it must be an object reference variable at runtime. If a generically typed field symbol or a generically typed formal parameter is specified for `oref`, the static type of the object reference variable is used that is represented by the field symbol or formal parameter at runtime.

A syntax error occurs if it is known statically that the result of the expression is false.

All of the following predicate expressions are true, since the dynamic type of the object reference variable `oref` is more specific than or equal to the specified object type.

The following example shows how the predicate expression `IS INSTANCE OF` can be used to check the feasibility of a [downcast](ABENDOWN_CAST_GLOSRY.html). This makes the exception handler, which is also shown, superfluous.

[Predicate Expression `IS INSTANCE OF`](ABENINSTANCE_OF_ABEXA.html)

-   for a non-initial [object reference variable](ABENOBJECT_REFER_VARIABLE_GLOSRY.html)\\ `oref` the [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html)
-   for an initial [object reference variable](ABENOBJECT_REFER_VARIABLE_GLOSRY.html)\\ `oref` the [static type](ABENSTATIC_TYPE_GLOSRY.html)

-   The object reference variable `oref` is not initial and points to an object whose class either:

-   Is the class specified using `class` or one of its subclasses
-   Implements the interfaces specified using `intf`

-   The object reference variable `oref` is initial and the static type of `oref` either:

-   Is the same class or subclass of `class`
-   Contains the interface `intf` as a component

-   The predicate expression `IS INSTANCE OF` checks whether a cast from `oref` to an object reference variable with the static type `class` or `intf` is possible.

-   If `IS INSTANCE OF` is true for a non-initial object reference variable `oref`, a [downcast](ABENDOWN_CAST_GLOSRY.html) is possible. This means that the predicate expression `IS INSTANCE OF` can be used as condition for a [downcast](ABENDOWN_CAST_GLOSRY.html) instead of the corresponding exception handler.
-   If a predicate expression `IS INSTANCE OF` is true for an initial object reference variable `oref`, an [upcast](ABENUP_CAST_GLOSRY.html) is possible. Checks of this type are generally suitable for generically typed field symbols or formal parameters. In this way, it is possible to detect at runtime whether the field symbol or the formal parameter represents an object reference variable of a certain static type.

-   If the static type of `oref` is an interface and a class `class` is specified as the comparison type, the result of the expression is always false if the reference variable is initial.
-   When a subclass is instantiated, the predicate expression `IS INSTANCE OF` is false when the associated object reference to the subclass is checked until the [instance constructors](ABENINSTANCE_CONSTRUCTOR_GLOSRY.html) of all superclasses have been executed. When an instance constructor of a superclass is executed, `IS INSTANCE OF` is true for the current superclass.
-   The special case distinction [`CASE TYPE OF`](ABAPCASE_TYPE.html) makes it possible to abbreviate consecutive predicate expressions `IS INSTANCE OF`.

INTERFACE intf. \\nENDINTERFACE. \\n\\ \\nCLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES intf. \\nENDCLASS. \\n\\ \\nCLASS c2 DEFINITION INHERITING FROM c1. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA oref TYPE REF TO object. \\n\\ \\n oref = NEW c1( ). \\n ASSERT oref IS INSTANCE OF c1. \\n ASSERT oref IS INSTANCE OF intf. \\n\\ \\n oref = NEW c2( ). \\n ASSERT oref IS INSTANCE OF c2. \\n ASSERT oref IS INSTANCE OF c1. \\n ASSERT oref IS INSTANCE OF intf. \\n\\ \\n ENDMETHOD. \\nENDCLASS. CLASS c1 DEFINITION. \\nENDCLASS. \\n\\ \\nCLASS c2 DEFINITION INHERITING FROM c1. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: ref1 TYPE REF TO c1, \\n ref2 TYPE REF TO c2. \\n\\ \\n ref1 = NEW c2( ). \\n\\ \\n IF ref1 IS INSTANCE OF c2. \\n ref2 ?= ref1. \\n ENDIF. \\n\\ \\n TRY. \\n ref2 ?= ref1. \\n CATCH cx\_sy\_move\_cast\_error. \\n ENDTRY. \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenpredicate.html abenpredicate\_expressions.html