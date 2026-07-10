---
title: "Assignments, Calculations, and Other Types of Data Access - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassignment_access_guidl.htm"
abapFile: "abenassignment_access_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) → 

Assignments, Calculations, and Other Types of Data Access

An assignment passes the content of a data object, a return value, or a result of a calculation expression to a data object. If the data types are compatible, the content is copied unchanged. If the data types are incompatible and there is a suitable conversion rule, the content is converted. An assignment is usually performed with the [assignment operator (\=)](ABENEQUALS_OPERATOR.md).

A calculation is executed in a calculation expression, which can be specified in an operand position, in particular on the right side of the assignment operator \=. If necessary, the result of a calculation expression is converted to the data type of the operand position or of the result of the assignment. In arithmetic expressions, the calculation is executed in a calculation type based on the data types of all operands including the result.

-   [Assignments Between Different Types](ABENASSIGNEMNT_DIFF_TYPES_GUIDL.md "Guideline")

-   [Avoiding Invalid Values](ABENAVOIDING_INVALID_VALUES_GUIDL.md "Guideline")

-   [Using Conversion Rules](ABENUSE_CONVERSION_RULES_GUIDL.md "Guideline")

-   [Trailing Blanks in Character Literals](ABENTRAILING_BLANKS_LITERALS_GUIDL.md "Guideline")

-   [Specifying Numbers](ABENNUMBERS_GUIDL.md "Guideline")

-   [Selecting the Numeric Type](ABENSELECT_NUMERIC_TYPE_GUIDL.md "Guideline")

-   [Rounding Errors](ABENROUNDING_ERROR_GUIDL.md "Guideline")

-   [Dividing by Zero](ABENDIVISION_ZERO_GUIDL.md "Guideline")

-   [Casting](ABENCASTING_GUIDL.md "Guideline")

-   [Runtime Errors When Accessing Data Objects](ABENRUNTIME_ERROR_DATA_OBJ_GUIDL.md "Guideline")

-   [Anonymous Containers](ABENUNKNOWN_CONTAINER_GUIDL.md "Guideline")

-   [Pass by Reference of Global Data](ABENREF_TRANSF_GLOBAL_DATA_GUIDL.md "Guideline")

Continue
[Assignments Between Different Types](ABENASSIGNEMNT_DIFF_TYPES_GUIDL.md)
[Avoiding Invalid Values](ABENAVOIDING_INVALID_VALUES_GUIDL.md)
[Using Conversion Rules](ABENUSE_CONVERSION_RULES_GUIDL.md)
[Trailing Blanks in Character Literals](ABENTRAILING_BLANKS_LITERALS_GUIDL.md)
[Specifying Numbers](ABENNUMBERS_GUIDL.md)
[Selecting the Numeric Type](ABENSELECT_NUMERIC_TYPE_GUIDL.md)
[Rounding Errors](ABENROUNDING_ERROR_GUIDL.md)
[Division by Zero](ABENDIVISION_ZERO_GUIDL.md)
[Casting](ABENCASTING_GUIDL.md)
[Runtime Errors When Accessing Data Objects](ABENRUNTIME_ERROR_DATA_OBJ_GUIDL.md)
[Anonymous Containers](ABENUNKNOWN_CONTAINER_GUIDL.md)
[Pass by Reference of Global Data](ABENREF_TRANSF_GLOBAL_DATA_GUIDL.md)
