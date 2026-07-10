---
title: "Selecting the Numeric Type - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_numeric_type_guidl.htm"
abapFile: "abenselect_numeric_type_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [Assignments, Calculations, and Other Types of Data Access](ABENASSIGNMENT_ACCESS_GUIDL.md) → 

Selecting the Numeric Type

Background

Multiple numeric types with various properties and value ranges are available in ABAP, which can be used for storing numbers and for calculations:

-   Signed 4-byte integer numbers (type i) and 8-byte integer numbers (type int8) (1-byte and 2-byte-integers with the internal types b and s are also available.) However, these data objects cannot be created based on a built-in ABAP type. Instead, the built-in ABAP Dictionary types INT1 and INT2 are required.

-   Packed numbers in BCD format (binary coded decimals, type p)

-   Binary floating point numbers (type f)

-   Decimal floating point numbers (types decfloat16, decfloat34)

The decimal floating point numbers meet the requirements for highly exact processing of decimal numbers in a large value ranges, where the data types p and f only cover a single aspect each.

Rule

Choose suitable numeric types for numbers and calculations

Choose a numeric type to suit the values to be represented to achieve the highest possible speed and accuracy. Here is a general rule of thumb:

-   i and int8 for integers

-   p for fixed point numbers

-   decfloat16 or decfloat34 for floating point numbers

-   f in exceptional cases only

Details

The calculation speed and accuracy are generally contradictory requirements and depend on the data type of the objects to be processed. Therefore, when choosing the numeric type, both these two requirements must be weighed up. These considerations must also include the value range to be represented:

-   If the values to be mapped are integers, type i or int8 must usually be used. This guarantees the highest possible calculation speed. Examples of these integers include counters, indexes, offsets and time intervals. If the values to be mapped exceed the value range of type int8 or i, you can use type p without decimal places instead. The calculation speed is slower, but decimal places are still represented accurately (except for rounding errors). If this value range is still not sufficient, a floating point type (decfloat16 and decfloat34) can be used instead.

-   If non-integer values that have a fixed number of decimal places are to be represented, the type p can be used. However, calculations with type p are executed in the ABAP kernel and not by the hardware. Examples of non-integer values include lengths, weights, or monetary amounts. If this value range is still not sufficient, a decimal floating point type (decfloat16 and decfloat34) can be used instead. The binary floating point type f is less suitable because it cannot represent all decimal fractions. This is a further impediment for calculation accuracy (in addition to the unavoidable rounding errors).

-   For non-integer values with a variable number of decimal places or a large value range, the decimal floating point types decfloat16 or decfloat34 should be used. Decfloat34 has a greater number of places and a greater value range. However, this also leads to increased memory consumption.

Thanks to the hardware support available on all platforms, binary floating point type f allows fast calculations. However, it is inferior to the new decimal floating point types due to the following reasons:

-   Type f can only accurately represent fractions with the power of two in the denominator (1/2, 1/4, 1/8, etc.) and totals. Other values are rounded according to this representation. This rounding process does not correspond to the decimal rounding process (and usually does not meet the expectations of the developer or user). For example, the value 0.815 is approximated internally as 8.1499999999999995E-01. This means when the value is rounded to two decimal places, 0.81 is returned instead of the expected value 0.82.

-   Very large numbers can no longer be represented exactly (working in line with IEEE 754) if the difference between the largest and smallest exponent is greater than 52 (in the total of powers of two). For example, 1E+23 is represented as 9.9999999999999992E+22.s

-   A number of type f cannot be rounded to a specific number of decimal places, if the result needs to be assigned to another number of type f.

-   Divisions by powers of 10, which often occur when converting metric units, for example, are not exact. 8.0500000000000005E-01 is returned for 805/1000, for example.

-   Simple calculations often produce unexpected results. 123456.15 - 123455 returns 1,1499999999941792, for example.

-   The conversion of binary floating point numbers to other number formats is not clearly defined in line with IEEE 754. Consequently, when data is stored in the database, the rounding behavior depends on the platform and how numbers of type f are represented in the database.

-   The decimal floating point types decfloat16 and decfloat34 do not have these problems. Both have a greater value range than type f, and decfloat34 has 34 places instead of 16 places. However, the following restrictions apply:

-   Currently, calculations with decimal floating point types are generally even slower than calculations with the type f (the speed is comparable to calculations with the type p). Until now, only IBM's Power6 architecture provided hardware support for floating point calculations of this type in accordance with IEEE-754-2008. On other platforms, calculations with decimal floating point numbers have to be performed on the software side in the ABAP kernel, in a similar way to calculations with the type p.

-   Decimal floating point types are not yet supported by associated data types on all database platforms. As an interim solution, ABAP Dictionary provides a set of built-in data types DF16\_..., DF34\_..., based on existing types (DEC and RAW). In most cases, the benefits of the decimal floating point types compensate for the current slow calculation speed. However, it might still be necessary to use type f if there are stringent requirements for performance and less stringent requirements for calculation accuracy. Remember that the speed advantage currently possible for calculations with f, may be outweighed by the fact that conversions from f to other numeric types are relatively slow.

Note

For programs that are currently created with decimal floating point types, the performance is increased as soon as the processor architecture supports decimal floating point calculations and the ABAP runtime environment starts using this hardware support. Calculations with decimal floating point numbers then become faster than calculations with packed numbers.

Bad Example

The following source code shows a declaration of a binary floating point number. The start value 0.815 is assigned. The true start value, however, is 8.1499999999999995E-01.

DATA number TYPE f VALUE '0.815'.

Good Example

The following source code shows a declaration of a decimal floating point number. The start value 0.815 is assigned. The true start value is actually 8.15E-01.

DATA number TYPE decfloat34 VALUE '0.815'
