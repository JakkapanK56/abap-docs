---
title: "Assignments Between Different Types - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassignemnt_diff_types_guidl.htm"
abapFile: "abenassignemnt_diff_types_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [Assignments, Calculations, and Other Types of Data Access](ABENASSIGNMENT_ACCESS_GUIDL.md) → 

Assignments Between Different Types

Background

ABAP allows a direct assignment between data objects with different data types. There must be a suitable conversion rule and the content of the source field must be a meaningful value for the data type of the target field. If a suitable conversion rule is not found or the content of the source field is not suitable, an exception is raised.

Such conversions take place not only in direct assignments, but also in many operand positions and in particular in arithmetic calculations, if the specified operand does not have the data type expected at the position.

Rule

Avoid conversions

Where possible, assignments should be performed between compatible data objects with the same data type.

Details

Type conversions incur additional runtime and may not always have the result intended by the developer. Therefore, conversions should only be performed between data objects with different data types if there is no other choice. In particular, conversions should be avoided where the [conversion rules](ABENUSE_CONVERSION_RULES_GUIDL.md "Guideline") produce unexpected results.

Bad Example

The following source code shows an arithmetic calculation involving two unnecessary conversions. First the text field literal '1' has to be converted to the calculation type i, then the result of the calculation has to be converted from type i to data type n. Such conversions produce significant increases in runtime.

DATA index TYPE n LENGTH 4.
...
DO ... TIMES.
  index = sy-index - '1'.
  ...
ENDDO.

Good Example

The following source code shows how code can be improved compared to the previous example, so that no conversions are necessary.

DATA index TYPE i.
...
DO ... TIMES.
  index = sy-index - 1.
  ...
ENDDO.
