---
title: "ABENAVOIDING_INVALID_VALUES_GUIDL"
description: |
  ABENAVOIDING_INVALID_VALUES_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAVOIDING_INVALID_VALUES_GUIDL.htm"
abapFile: "ABENAVOIDING_INVALID_VALUES_GUIDL.html"
keywords: ["do", "if", "case", "try", "catch", "data", "types", "ABENAVOIDING", "INVALID", "VALUES", "GUIDL"]
---

For performance reasons, the ABAP runtime framework does not check whether the target field contains a valid value after each and every assignment. Particularly for target fields of the character-like data type `n` and the date/time types `d` and `t`, the conversion rules allow any characters as the result of an assignment. However, only the following values are valid:

For a detailed description of the validity of date fields and time fields, see also the [relevant section](ABENCHAR_DATE_TIME_FIELDS_VALIDITY.html) of the documentation.

A [lossless assignment](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html) can be used to force checks on valid values.

**Only assign valid values**

In assignments and calculations, data objects are filled with data types `n`, `d`, and `t` with valid values only.

Statements that work with variables with types `n`, `d`, or `t` can only be guaranteed to behave correctly if values are valid. If date and time fields are required, it is important to be aware of their special characteristics. Since the initial value for variables of type `d` is itself not a valid value, a suitable start value must always be specified by using the addition `VALUE`. Note that in arithmetic calculations with date fields, if an assignment to a target field with data type `d` has 0 as a result value, this is an invalid initial value and may require special handling.

If the responsibility for filling data objects of the critical data types lies elsewhere, [it is best to](ABENUSE_CONVERSION_RULES_GUIDL.html) always check the validity of their content before use. [Lossless assignments](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html) with the operator [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) can be used to do this. Note that the initial value of a date field of type `d` is interpreted as valid for a lossless assignment, but the value *00010101* is considered to be a valid date only in [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

The following source code shows a case where the conversion rules in ABAP can lead to problems if not used properly in combination with date fields. The literals can be transferred to the date fields, without raising an exception, to give the values 07092009 and 16092009. Unfortunately, these are interpreted as 09.20.0709 and 09.20.1609, which are invalid dates. During the calculation, they are both converted to the value 0 and the result is 0. Looking at the dates, you would expect the result to be 9.

The following source code shows a date calculation that does give the expected result of 9, thanks to valid values in the date fields. The validity of the literal values is guaranteed by the use of the operator `EXACT`.

The following source code shows how you can check whether the date fields are valid in the calculation, if they are not filled in the same program. Since the `EXACT` operator does not perform a check for compatible types, the data fields are first converted to temporary text strings, and these are checked.

-   For type `n`: digits only
-   For type `d`: a calendar date in the format *YYYYMMDD*
-   For type `t`: a time in the format *HHMMSS*

DATA: date1 TYPE d, \\n date2 TYPE d, \\n result TYPE i. \\ndate1 = '07092009'. \\ndate2 = '16092009'. \\nresult = date2 - date1. TRY. \\n DATA(result) = EXACT d( '20090916' ) - EXACT d( '20090907' ). \\n CATCH cx\_sy\_conversion\_no\_date. \\n ... \\nENDTRY. TRY. \\n result = EXACT d( CONV string( date2 ) ) - \\n EXACT d( CONV string( date1 ) ). \\n CATCH cx\_sy\_conversion\_no\_date. \\n ... \\nENDTRY. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abenassignment\_access\_gdl.html