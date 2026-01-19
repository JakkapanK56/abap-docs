---
title: "ABAPMOVE_CAST"
description: |
  ABAPMOVE_CAST - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMOVE_CAST.htm"
abapFile: "ABAPMOVE_CAST.html"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "types", "ABAPMOVE", "CAST"]
---

`destination_ref =|?= source_ref.`

Assignment between two reference variables. The reference in `source_ref` is assigned `destination_ref`. After a successful assignment, `destination_ref` points to the same object as `source_ref` ([reference semantics](ABENREFERENCE_SEMANTICS_GLOSRY.html)). The assignment of reference variables is a special form of [assignments of data objects](ABAPMOVE.html), whereby two assignment operators are available for assignments between reference variables and are used in accordance with the [assignment rules for reference variables](ABENCONVERSION_REFERENCES.html):

The same applies to the right side and left side as when [assigning data objects](ABAPMOVE.html), with the following restrictions:

The first two assignments in the following source code section are upcasts:

The next two assignments are downcasts:

`CX_SY_MOVE_CAST_ERROR`

-   In assignments between reference variables, the general [assignment operator `=`](ABENEQUALS_OPERATOR.html) can only be used for [upcasts](ABENUP_CAST_GLOSRY.html) in which the static type of `source_ref` is more specific than or the same as the static type of `destination_ref`.
-   The special [casting operator](ABENCASTING_OPERATOR_GLOSRY.html)\\ `?=` can only be used for assignments between reference variables. If the static type of `source_ref` is more general than the static type of `destination_ref`, `?=` must be used to produce a [downcast](ABENDOWN_CAST_GLOSRY.html). If this is known statically, it is checked by the syntax check, otherwise it is checked at runtime. The actual downcast, that is, the check to see whether assignments are possible in accordance with the [assignment rules](ABENCONVERSION_REFERENCES.html) for reference variables, only takes place at runtime. Then, if the static type of `destination_ref` is not more general or is the same as the dynamic type of `source_ref`, a catchable exception is raised and the target variable keeps its original value.

-   The data types of the source and target are [reference types](ABENREFERENCE_TYPE_GLOSRY.html), which means that [functional method calls](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html), and [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) and [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html) can be specified on the right side whose return value has a reference type. [Built-in functions](ABENBUILTIN_FUNCTION_GLOSRY.html) and [calculation expressions](ABENCALCULATION_EXPRESSION_GLOSRY.html) do not return any reference variables and are not possible here.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html) is possible only on the left side of `=`, and not on the left side of `?=`. The static types of the reference variable `source_ref` is used, which must be known statically.

-   The casting operator `?=` can always be specified, even for upcasts. This is, however, not usually necessary.
-   If it is possible to know statically that an assignment is not possible, neither `=` nor `?=` can be used. This is the case, for example, when the static types of source variables and target variables are classes from different paths of the inheritance tree.
-   The [null reference](ABENNULL_REFERENCE_GLOSRY.html) of an initial reference variable can be assigned to every target variable in a downcast that can be specified here. The same applies to a non-initial invalid reference that no longer points to an object.
-   For non-initial reference variables, the predicate expression [`IS INSTANCE OF`](ABENLOGEXP_INSTANCE_OF.html) or the case distinction [`CASE TYPE OF`](ABAPCASE_TYPE.html) can be used to check whether a downcast is possible on specific classes or interfaces.
-   In addition to `?=`, the [casting operator](ABENCASTING_OPERATOR_GLOSRY.html)\\ [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html) also enables downcasts in operand positions, which helps to reduce helper variables.
-   Downcasts are also possible using the `INTO` addition of the statement [`WHEN TYPE`](ABAPWHEN_TYPE.html) of a case distinction using [`CASE TYPE OF`](ABAPCASE_TYPE.html).
-   The casting operator `?=` cannot be used in [multiple assignments](ABAPMOVE_MULTIPLES.html).

-   The instance operator `NEW` creates a result with the static and dynamic type `c2`, which can be assigned to the more general reference variable `oref1`.
-   Any reference variable can be assigned to the reference variable `oref` with the most general static type `object`.

-   It is only possible to check at runtime whether the general reference variable `oref` points to an object that can also point to `oref2`. This is the case in the example.
-   The downcast of `oref2` to `oref3`, however, fails at runtime and raises the caught exception.

-   *Cause:* Type conflict in downcast
    *Runtime error:*\\ `MOVE_CAST_ERROR`
-   *Cause:* Source variable or target variable is not a reference variable
    *Runtime error:*\\ `MOVE_CAST_REF_ONLY`
-   *Cause:* Dynamic type conflict in assignment of references
    *Runtime error:*\\ `MOVE_CAST_ERROR_DYN`

CLASS c1 DEFINITION INHERITING FROM object. \\nENDCLASS. \\n\\ \\nCLASS c2 DEFINITION INHERITING FROM c1. \\nENDCLASS. \\n\\ \\nCLASS c3 DEFINITION INHERITING FROM c2. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA oref TYPE REF TO object. \\n DATA oref1 TYPE REF TO c1. \\n DATA oref2 TYPE REF TO c2. \\n DATA oref3 TYPE REF TO c3. \\n\\ \\n oref1 = NEW c2( ). \\n\\ \\n oref = oref1. \\n\\ \\n IF oref IS INSTANCE OF c2. \\n oref2 ?= oref. \\n ENDIF. \\n\\ \\n TRY. \\n oref3 ?= oref2. \\n CATCH cx\_sy\_move\_cast\_error. \\n ... \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_references.html