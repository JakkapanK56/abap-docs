---
title: "Data Objects for Truth Values - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendataobjects_true_value_guidl.htm"
abapFile: "abendataobjects_true_value_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [Data Types and Data Objects](ABENDATA_TYPE_OBJ_GUIDL.md) → 

Data Objects for Truth Values

Background

Truth values are results of logical expressions. A truth value is either true or false. ABAP does not yet support Boolean data types and thus does not support data objects for truth values. Therefore, the result of a logical expression cannot be assigned directly to a data object.

It has become common practice to express the truth value "true" as value "X" and the truth value "false" as a blank (" "). There are also Boolean functions that have a logical expression as an argument and are returned as the value "X" or a blank, depending on the result.

To make it easier to handle truth values expressed in this way, the type group abap contains a data type abap\_bool of elementary type c with length 1, and the constants abap\_true of value "X" and abap\_false of value " " as substitutes for a real Boolean data type. There is also a constant abap\_undefined of value "-".

Rule

Use the data type abap\_bool for truth values

When working explicitly with truth values, use the type abap\_bool as a substitute for a real Boolean data type. A data object declared in this way should have no values other than the relevant constants abap\_true and abap\_false (also abap\_undefined).

Details

Using the type abap\_bool and the constants abap\_true and abap\_false makes it clear that truth values are being used here.

In accordance with the rule for [avoiding](ABENLITERALS_GUIDL.md "Guideline") literals in operand positions, not only the literals 'X' and ' ' should be used. State queries about the [predicate operators](ABENPREDICATE_OPERATOR_GLOSRY.md "Glossary Entry") IS INITIAL and IS NOT INITIAL or the use of the constant space are also not advisable, because they require knowledge of the technical values of abap\_true and abap\_false, which are not significant in the sense of real Boolean data objects.

The type group abap contains a third constant for the type abap\_bool, namely abap\_undefined. However, implementing a three-value logic is only useful and recommended in exceptional cases. In this case, note that abap\_undefined does not contain the initial value for a variable of type abap\_bool. The initial value is always the value of abap\_false. However, the value of abap\_undefined can, if required, be specified using the addition VALUE when declaring a truth value as the start value.

Bad Example

The following source code shows an unsuitable emulation of the Boolean data objects not present in ABAP.

DATA is\_found TYPE c LENGTH 1.
...
is\_found = 'X'.
...
IF is\_found IS NOT INITIAL.
   ...
ENDIF.

Good Example

The following source code shows the recommended emulation of the Boolean data objects not present in ABAP.

DATA is\_found TYPE abap\_bool.
...
is\_found = abap\_true.
...
IF is\_found = abap\_true.
   ...
ENDIF.
