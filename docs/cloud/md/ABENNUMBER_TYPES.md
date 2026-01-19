---
title: "ABENNUMBER_TYPES"
description: |
  ABENNUMBER_TYPES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNUMBER_TYPES.htm"
abapFile: "ABENNUMBER_TYPES.html"
keywords: ["do", "if", "case", "data", "types", "ABENNUMBER", "TYPES"]
---

ABAP supports the numeric data types [`i`](ABENBUILTIN_TYPES_NUMERIC.html), [`int8`](ABENBUILTIN_TYPES_NUMERIC.html), [`p`](ABENBUILTIN_TYPES_NUMERIC.html), [`decfloat16`](ABENBUILTIN_TYPES_NUMERIC.html), [`decfloat34`](ABENBUILTIN_TYPES_NUMERIC.html), and [`f`](ABENBUILTIN_TYPES_NUMERIC.html), as well as the internal types [`b`](ABENBUILTIN_TYPES_NUMERIC.html) and [`s`](ABENBUILTIN_TYPES_NUMERIC.html). The latter cannot be specified directly in programs but are created with reference to the built-in types `INT1` or `INT2` from the ABAP Dictionary. They are generally used in the same way as the type `i` and are often converted to `i` internally.

The numeric data types are used to store numeric values and are intended for calculations. Calculations with fields of the types `i`, `int8`, and type `f` can more or less be mapped directly to the machine commands of the operating system of the current AS instance [host computer](ABENHOST_COMPUTER_GLOSRY.html). In contrast, calculations with packed numbers of type `p` are implemented in the kernel of the ABAP runtime framework and are therefore somewhat slower. Operations using the decimal floating point numbers `decfloat16` and `decfloat34` are executed using a library integrated into the ABAP kernel until they are supported by the hardware of the host computer.

The common generic type of the numeric data types is `numeric`.

The data types for integer numbers [`i`](ABENBUILTIN_TYPES_NUMERIC.html) and [`int8`](ABENBUILTIN_TYPES_NUMERIC.html) have a [value range](ABENVALUE_RANGE_GLOSRY.html) from -2147483648 to +2147483647 for `i` and -9,223,372,036,854,775,808 to +9,223,372,036,854,775,807 for `int8` and only cover integers. Integer numbers with the type `i` can be specified directly in the program as [numeric literals](ABENNUMERIC_LITERAL_GLOSRY.html).

All interim results in [arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html) of the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html)\\ `i` or `int8` are stored in helper fields of the type `i` or `int8`. Otherwise, type `i` or `int8` arithmetic behaves like the type `p` without [decimal places](ABENDECIMAL_PLACE_GLOSRY.html). In particular, the division rounds numbers rather than truncating them and an overflow raises an exception. The data type `i` and `int8` is typically used for counters, quantities, indexes, and offsets, and time periods.

The data types [`b`](ABENBUILTIN_TYPES_NUMERIC.html), [`s`](ABENBUILTIN_TYPES_NUMERIC.html), [`i`](ABENBUILTIN_TYPES_NUMERIC.html), and [`int8`](ABENBUILTIN_TYPES_NUMERIC.html) provide a complete set of data types for 1-, 2-, 4-, and 8-byte integer numbers. The types `b` and `s` for short integer numbers, however, cannot be specified directly in ABAP programs but have to be specified using the built-in types [`INT1`](ABENDDIC_BUILTIN_TYPES.html) and [`INT2`](ABENDDIC_BUILTIN_TYPES.html) from the ABAP Dictionary. These types also do not have their own calculation type.

Typical use of the data type `i`.

The data type [`p`](ABENBUILTIN_TYPES_NUMERIC.html) for [packed numbers](ABENPACKED_NUMBER_GLOSRY.html) has a [value range](ABENVALUE_RANGE_GLOSRY.html) that depends on the length and the number of [decimal places](ABENDECIMAL_PLACE_GLOSRY.html). Data objects of type `p` can be 1 to 16 bytes long, with two [places](ABENPLACE_GLOSRY.html) packed in each byte, and one place and the plus/minus sign packed in the last byte. A packed number consists of the length multiplied by 2 minus 1 digits and can have a maximum of 14 decimal places. Packed numbers implement [fixed point numbers](ABENFIXED_POINT_NUMBER_GLOSRY.html). The decimal places of a packed number are a property of its data type and are predefined for it.

Packed numbers with decimal places cannot be specified directly in the program. Instead, [character literals](ABENCHARACTER_LITERAL_GLOSRY.html) must be used whose content can be interpreted as a packed number, that is, a number in [mathematical](ABENMATHEMATICAL_NOTATION_GLOSRY.html) or [commercial notation](ABENCOMMERCIAL_NOTATION_GLOSRY.html). [Scientific notation](ABENSCIENTIFIC_NOTATION_GLOSRY.html) is not allowed unless it can be interpreted as a mathematical notation.

Helper fields for interim results in [arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html) of [calculation type](ABENCALCULATION_TYPE_GLOSRY.html)\\ `p` are always 16 bytes long and can thus include up to 31 places. Before an overflow occurs, an arithmetic expression is calculated again with helper fields that are twice as large or 63 places. In [comparisons](ABENLOGEXP_NUMERIC.html) between packed numbers, the operand with fewer decimal places is also converted to such a helper field, but an overflow occurs if the sum of the integer digits and decimal places exceeds 31.

If packed numbers are used, the [program property](ABENPROGRAM_PROPERTY_GLOSRY.html) must always be set to *fixed point arithmetic* since only this setting ensures that the decimal point is calculated correctly. Otherwise, all numbers are interpreted as integers and all interim results are rounded up to the next integer.

Calculations using calculation type `p` are performed using [fixed point arithmetic](ABENFIXED_POINT_ARITHMETIC_GLOSRY.html). In other words, a calculation is performed *commercially*, as is the case when using a pocket calculator or paper and pencil. Type `p` is typically used for values such as lengths, weights, and sums of money.

The number of decimal places in a packed number should not be greater than the number of digits; otherwise the decimal separator might be outside the sequence of digits. A packed number that has more decimal places than places can raise exceptions when converted to external formats such as data types of the database in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) or in serializations to [asXML](ABENASXML_GLOSRY.html).

Typical use of the data type `p`.

In floating point numbers, the number of [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) is part of the value and not a part of the data type.

The data types for [decimal floating point numbers](ABENDECFLOAT_GLOSRY.html) are [`decfloat16`](ABENBUILTIN_TYPES_NUMERIC.html) and [`decfloat34`](ABENBUILTIN_TYPES_NUMERIC.html). The value range is `-(1-1E-16)*1E385` to `-1E-383`, `0`, `+1E-383` to `(1-1E-16)*1E385` for `decfloat16` and `-(1-1E-34)*1E6145` to `-1E-6143`, `0`, `+1E-6143` to `(1-1E-34)*1E6145` for `decfloat34`. The maximum precision is 16 places or 34 places. In addition to its value, a decimal floating point number has a [scaling](ABENSCALE_GLOSRY.html) and a [precision](ABENPRECISION_GLOSRY.html). These properties are not relevant for calculations and comparisons of values, but are used in [conversion rules](ABENCONVERSION_ELEMENTARY.html) and for formatting output.

Decimal floating point numbers with decimal places or exponents cannot be specified directly in the program. Instead, [character literals](ABENCHARACTER_LITERAL_GLOSRY.html) must be used whose content can be interpreted as a packed number, that is, a number in [mathematical](ABENMATHEMATICAL_NOTATION_GLOSRY.html), [scientific](ABENSCIENTIFIC_NOTATION_GLOSRY.html), or [commercial notation](ABENCOMMERCIAL_NOTATION_GLOSRY.html).

[Arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html) with decimal floating point numbers always have the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html)\\ `decfloat34`. Each calculation is performed using [decimal floating point arithmetic](ABENDECFLOAT_ARITH_GLOSRY.html). Decimal floating point numbers are the best choice if precision and a large range of values are of importance. They do not have the disadvantages of binary floating point numbers described below, which cannot represent each decimal number within their value range exactly and they have a much larger value range and a higher level of precision than packed numbers.

The lossless operator [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) can be used to force a lossless calculation for decimal floating point numbers under certain circumstances. No rounding is allowed and raises an exception in lossless calculations.

Internally, decimal floating point numbers are represented by a 16-digit or 34-digit decimal mantissa and a decimal exponent, which is between -383 and +384 or -6143 and + 6144, respectively. Apart from potential roundings in assignments and calculations, the effects discussed below for binary floating point numbers do not occur, since every 16-digit or 34-digit decimal number can be represented exactly.

The data type for [binary floating point numbers](ABENBINFLOAT_GLOSRY.html), [`f`](ABENBUILTIN_TYPES_NUMERIC.html), has a [value range](ABENVALUE_RANGE_GLOSRY.html) of 2.2250738585072014E-308 to 1.7976931348623157E+308, positive, negative, and the number 0, with a precision of at least 15 places. 17 places are represented in ABAP. Integers can be represented exactly up to an absolute value of 2\*\*53, which is equivalent to 9,007,199,254,740,992. Any larger numbers are rounded.

Binary floating point numbers cannot be specified directly in the program. Instead, [character literals](ABENCHARACTER_LITERAL_GLOSRY.html) must be used whose content can be interpreted as floating point numbers, that is, a number in [scientific notation](ABENSCIENTIFIC_NOTATION_GLOSRY.html). [Mathematical](ABENMATHEMATICAL_NOTATION_GLOSRY.html) or [commercial notation](ABENCOMMERCIAL_NOTATION_GLOSRY.html) is not allowed unless it can be interpreted as scientific notation.

[Arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html) with [calculation type](ABENCALCULATION_TYPE_GLOSRY.html)\\ `f` are performed using [binary floating point arithmetic](ABENBINFLOAT_ARITH_GLOSRY.html). The following features of binary floating point arithmetic should be considered.

Internally, binary floating point numbers are represented by a dual fraction and a dual exponent. This can lead to unexpected results despite the high degree of intrinsic precision. These occur mainly when converting from and to type `f`.

The ABAP runtime framework always rounds commercially and not numerically like the underlying machine arithmetic. According to the rounding algorithm of the latter, the end digit 5 must always be rounded to the nearest even number (not the next largest number), that is, from 2.5 to 2 and from 3.5 to 4.

It should also be noted that multiplication using powers of 10 (positive or negative) is not an exact operation.

In addition to rounding errors, the restricted number of decimal places for the mantissa can lead to the loss of trailing digits.

This means that the final places in binary floating point arithmetic are not reliable. In particular, it is not usually worth testing two binary floating point numbers `a` and `b` for equality. Instead, it is best to check whether the relative difference `abs((a - b)/a)` is less than a predefined limit, for example 10\*\*(-7).

Ultimately, the representation and therefore the value of a binary floating point number stored in the database can be platform-dependent.

The result of the calculation in `result1` is `0.81499999999999995` whereas in `result2` it is the expected value *0.815*.

-   To a great extent, [decimal floating point numbers](ABENDECFLOAT_GLOSRY.html) of the types `decfloat16` and `decfloat34` replace the [binary floating point numbers](ABENBINFLOAT_GLOSRY.html) with type `f`.
-   The built-in type `n` (numeric text field) is not a numeric number type, even though its values are only strings of digits. Instead, it is a character-like type, which should not be used in calculations. Typical examples of numeric text fields are account numbers and article numbers, postal codes, and so on.

-   For example, the number 1.5 can be represented exactly in this notation since 1.5 = 1\*2\*\*0 + 1\*2\*\*(-1), but the number 0.15 can only be represented approximately by the number 0.14999999999999999. If 0.15 is rounded up to 1 valid digit, the result is 0.1 rather than the 0.2 as expected. On the other hand, the number 1.5E-12 is represented by the number 1.5000000000000001E-12, which would be rounded up to 2E-12.
-   A further real-life example: 7.27% of 73050 needs to be calculated and rounded to 2 decimal places. The interim result is 5.3107349999999997E+03, since the correct result, 5310.735, cannot be represented exactly in two parts with 53 bits. (If the hardware cannot represent a real number exactly, it uses the next representable binary floating point number). After rounding, the result 5310.73 is produced, rather than 5310.74 as expected.

-   Example: Although it can be represented exactly in two parts, a binary floating point number `f` of value 100.5, after the operation
-   `f = f / 100 * 100.`
-   has the value 100.49999999999999.

-   Example: `1 - 1.0000000000000001` produces zero.

DATA counter TYPE i. \\n... \\ncounter += 1. \\n... DATA price TYPE p LENGTH 16 DECIMALS 2. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: result1 TYPE f, \\n result2 TYPE decfloat34. \\n\\ \\nresult1 = 815 / 1000. \\nresult2 = 815 / 1000. \\n\\ \\nout->write( |Binary floating point: \\{ result1 \\}\\\\n| && \\n |Decimal floating point: \\{ result2 \\}\\\\n| ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html