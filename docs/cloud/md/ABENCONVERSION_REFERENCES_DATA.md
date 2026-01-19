---
title: "ABENCONVERSION_REFERENCES_DATA"
description: |
  ABENCONVERSION_REFERENCES_DATA - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCONVERSION_REFERENCES_DATA.htm"
abapFile: "ABENCONVERSION_REFERENCES_DATA.html"
keywords: ["do", "if", "case", "try", "catch", "class", "data", "types", "ABENCONVERSION", "REFERENCES", "DATA"]
---

Data reference variables are either completely typed or typed with the generic type `data`.

An [upcast](ABENUP_CAST_GLOSRY.html) in data references is possible in the following cases:

With respect to checks on static types, structured types behave like classes. Two differently structured types do not match, even if they consist of identical components.

A [downcast](ABENDOWN_CAST_GLOSRY.html) in data references is only possible if the static type of the source variable is generic and that of the target variable is completely typed. The syntax check makes it impossible for static types of the source variable and the target variable to be completely typed, but not identical at the same time.

The assignment from `dref1` to `dref2` is an upcast. The assignment from `dref2` to `dref1` is a downcast, which in the example below raises an exception. If the statement [`CREATE DATA`](ABAPCREATE_DATA.html) had the addition `TYPE i`, the downcast would also have been successful.

-   The static types of the source variable and the target variable match according to the following rules:

-   Both are elementary data types with identical [technical type properties](ABENTECHNICAL_TYPE_PRPT_GLOSRY.html), namely the built-in ABAP type, length, and number of decimal places. It is not important how the static types were defined.
-   Both have an identical structured type. In the case of structured types, identical technical type properties are not sufficient, but the same structured type must have been used to define the static types.
-   Both are table types with matching technical type properties, that is, line types, table category, and table key. In the case of non-structured line types, identical technical properties of the line type are sufficient. In the case of structured line types, both definitions must have been made with reference to the same structured type.

-   The static type of the source variable is completely typed, and the static type of the target variable is generic.

DATA: dref1 TYPE REF TO i, \\n dref2 TYPE REF TO data. \\n\\ \\nCREATE DATA dref1. \\ndref2 = dref1. \\nCREATE DATA dref2 TYPE string. \\n\\ \\nTRY. \\n dref1 ?= dref2. \\n CATCH cx\_sy\_move\_cast\_error. \\n ... \\nENDTRY. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_references.html abenconversion\_references.html