---
title: "ABENLOGEXP_BOUND"
description: |
  ABENLOGEXP_BOUND - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOGEXP_BOUND.htm"
abapFile: "ABENLOGEXP_BOUND.html"
keywords: ["delete", "do", "if", "case", "data", "internal-table", "ABENLOGEXP", "BOUND"]
---

`... ref IS [NOT] BOUND ...`

This predicate expression checks whether a reference variable contains a valid reference. A [reference variable](ABENREFERENCE_VARIABLE_GLOSRY.html) must be specified for `ref`. This is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html).

With the addition `NOT`, the expression is true if the reference variable does not contain a valid reference. In this case, the reference variable is either initial and contains the [null reference](ABENNULL_REFERENCE_GLOSRY.html), or it is not initial and contains an invalid reference that does not point to an object.

A non-initial reference variable that contains a [heap reference](ABENHEAP_REFERENCE_GLOSRY.html) is generally always valid since it keeps an object alive. Only [heap references](ABENHEAP_REFERENCE_GLOSRY.html) that point to lines of internal tables can become invalid when lines are deleted. A data reference variable that contains a [stack reference](ABENSTACK_REFERENCE_GLOSRY.html), on the other hand, can also become invalid if the referenced data object is removed from the stack.

The logical expression in the `IF` statement is false. The data reference `dref` contains a reference to an already deleted table line.

[Predicate Expression `IS NOT BOUND`](ABENBOUND_ABEXA.html)

-   A data reference is valid if it can be dereferenced.
-   An object reference is valid if it points to an object.

DATA: dref TYPE REF TO data, \\n itab TYPE TABLE OF ... \\n\\ \\nFIELD-SYMBOLS TYPE ANY. \\n\\ \\ndref = REF #( itab\[ ... \] ). \\n\\ \\n... \\n\\ \\nCLEAR itab. \\n\\ \\n... \\n\\ \\nIF dref IS BOUND. \\n ASSIGN dref->\* TO . \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenpredicate.html abenpredicate\_expressions.html