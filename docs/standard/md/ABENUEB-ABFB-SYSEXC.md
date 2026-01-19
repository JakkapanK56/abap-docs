---
title: "Integer overflow after calculation of absolute value"
description: |
  Exception class: `CX_SY_ARITHMETIC_OVERFLOW` Integer overflow after division Exception class: `CX_SY_ARITHMETIC_OVERFLOW` Integer overflow after subtraction Exception class: `CX_SY_ARITHMETIC_OVERFLOW` Integer overflow after addition Exception class: `CX_SY_ARITHMETIC_OVERFLO
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUEB-ABFB-SYSEXC.htm"
abapFile: "ABENUEB-ABFB-SYSEXC.html"
keywords: ["loop", "do", "if", "catch", "method", "class", "data", "types", "ABENUEB", "ABFB", "SYSEXC"]
---

The following is an alphabetical list of the obsolete catchable runtime errors. For all catchable runtime error, the associated [predefined exception classes](ABENABAP_EXCEPTION_CLASSES.html) used to handle the corresponding runtime error are specified. If an exception class is assigned to multiple catchable runtime errors, it may contain as many message texts as required, which can be found in the [Class Builder](ABENCLASS_BUILDER_GLOSRY.html) on the `Texts` tab. If more than one exception class is assigned to a catchable runtime error, this runtime error can be raised by different causes, which must be handled by correspondingly different exception classes.

Almost all the runtime errors listed here are grouped together in [exception groups](ABENEXCEPTION_GROUP_GLOSRY.html). These exception groups are also assigned those ABAP keywords for which the runtime errors can be caught.

Overflow in conversions/arithmetic operations (types `i` and `int8`)

**Exception class:**\\ `CX_SY_ARITHMETIC_OVERFLOW`

The components of the source field type and the target type that are strings, tables, or references do not have exactly the same offset and type.

**Exception class:**\\ `CX_SY_ASSIGN_CAST_ILLEGAL_CAST`

The type specified at runtime is unknown.

**Exception class:**\\ `CX_SY_ASSIGN_CAST_UNKNOWN_TYPE`

The field is not within the `RANGE` specified.

**Exception class:**\\ `CX_SY_ASSIGN_OUT_OF_RANGE`

Overflow after conversion/arithmetic operation (type `p`, with specified length)

**Exception class:**\\ `CX_SY_CONVERSION_OVERFLOW`

Overflow after conversion/arithmetic operation (type `p`)

**Exception class:**\\ `CX_SY_ARITHMETIC_OVERFLOW`

Division by 0 (type `p`)

**Exception class:**\\ `CX_SY_ZERODIVIDE`

Invalid call of the numeric function `acos`

**Exception class:**\\ `CX_SY_ARG_OUT_OF_DOMAIN`

Invalid call of the numeric function `asin`

**Exception class:**\\ `CX_SY_ARG_OUT_OF_DOMAIN`

Invalid call of the numeric function `atan`

**Exception class:**\\ `CX_SY_ARG_OUT_OF_DOMAIN`

Overflow after arithmetic operation (all operands of type `p`)

**Exception class:**\\ `CX_SY_ARITHMETIC_OVERFLOW`

Overflow after the numeric function `cosh`

**Exception class:**\\ `CX_SY_ARITHMETIC_OVERFLOW`

Invalid call of the numeric function `cos`

**Exception class:**\\ `CX_SY_ARG_OUT_OF_DOMAIN`

Invalid call of the numeric function `cosh`

**Exception class:**\\ `CX_SY_ARG_OUT_OF_DOMAIN`

Result of the function `cos` is not precise

**Exception class:**\\ `CX_SY_PRECISION_LOSS`

Invalid call of the numeric function `exp`

**Exception class:**\\ `CX_SY_ARG_OUT_OF_DOMAIN`

Overflow after the numeric function `exp`

**Exception class:**\\ `CX_SY_ARITHMETIC_OVERFLOW`

Overflow after division (type `f`)

**Exception class:**\\ `CX_SY_ARITHMETIC_OVERFLOW`

Overflow after subtraction (type `f`)

**Exception class:**\\ `CX_SY_ARITHMETIC_OVERFLOW`

Overflow after addition (type `f`)

**Exception class:**\\ `CX_SY_ARITHMETIC_OVERFLOW`

Overflow after multiplication (type `f`)

**Exception class:**\\ `CX_SY_ARITHMETIC_OVERFLOW`

Division by zero (type `f`)

**Exception class:**\\ `CX_SY_ZERODIVIDE`

Integer overflow after calculation of absolute value

**Exception class:**\\ `CX_SY_ARITHMETIC_OVERFLOW`

Integer overflow after division

**Exception class:**\\ `CX_SY_ARITHMETIC_OVERFLOW`

Integer overflow after subtraction

**Exception class:**\\ `CX_SY_ARITHMETIC_OVERFLOW`

Integer overflow after addition

**Exception class:**\\ `CX_SY_ARITHMETIC_OVERFLOW`

Integer overflow after multiplication

**Exception class:**\\ `CX_SY_ARITHMETIC_OVERFLOW`

Division by 0 (type I)

**Exception class:**\\ `CX_SY_ZERODIVIDE`

Invalid calculation

**Exception class:**\\ `CX_SY_ARG_OUT_OF_DOMAIN`

Result of a calculation is not precise

**Exception class:**\\ `CX_SY_PRECISION_LOSS`

Overflow in a calculation

**Exception class:**\\ `CX_SY_ARITHMETIC_OVERFLOW`

Invalid call of the numeric function `log10`

Exception classes: `CX_SY_ARITHMETIC_OVERFLOW`, `CX_SY_ARG_OUT_OF_DOMAIN`

Invalid call of the numeric function `log`

Exception classes: `CX_SY_ARITHMETIC_OVERFLOW`, `CX_SY_ARG_OUT_OF_DOMAIN`

Invalid argument after power operation

**Exception class:**\\ `CX_SY_ARG_OUT_OF_DOMAIN`

Overflow after power operation

**Exception class:**\\ `CX_SY_ARITHMETIC_OVERFLOW`

Overflow after the numeric function `sinh`

**Exception class:**\\ `CX_SY_ARITHMETIC_OVERFLOW`

Invalid call of the numeric function `sin`

**Exception class:**\\ `CX_SY_ARG_OUT_OF_DOMAIN`

Invalid call of the numeric function `sinh`

**Exception class:**\\ `CX_SY_ARG_OUT_OF_DOMAIN`

Result of the function `sin` is not precise

**Exception class:**\\ `CX_SY_PRECISION_LOSS`

Invalid call of the numeric function `sqrt`

**Exception class:**\\ `CX_SY_ARG_OUT_OF_DOMAIN`

Invalid call of the numeric function `tan`

**Exception class:**\\ `CX_SY_ARG_OUT_OF_DOMAIN`

Invalid call of the numeric function `tanh`

**Exception class:**\\ `CX_SY_ARG_OUT_OF_DOMAIN`

Result of the function `tan` is not precise

**Exception class:**\\ `CX_SY_PRECISION_LOSS`

Import error; a component of a structured type in the data set has incorrect [decimal places](ABENFRACT_DIGIT_GLOSRY.html)

**Exception class:**\\ `CX_SY_IMPORT_MISMATCH_ERROR`

Import error; a component of a structured type in the data set has an incorrect length

**Exception class:**\\ `CX_SY_IMPORT_MISMATCH_ERROR`

Import error; a component of a structured type in the data set has an incorrect type

**Exception class:**\\ `CX_SY_IMPORT_MISMATCH_ERROR`

Import error; a field type in the data set has incorrect [decimal places](ABENFRACT_DIGIT_GLOSRY.html)

**Exception class:**\\ `CX_SY_IMPORT_MISMATCH_ERROR`

Import error; a field in the data set has an incorrect length

**Exception class:**\\ `CX_SY_IMPORT_MISMATCH_ERROR`

Import error; a field in the data set has an incorrect type

**Exception class:**\\ `CX_SY_IMPORT_MISMATCH_ERROR`

Import error; type conflict between simple and structured data types

**Exception class:**\\ `CX_SY_IMPORT_MISMATCH_ERROR`

Import error; type conflict between structured objects

**Exception class:**\\ `CX_SY_IMPORT_MISMATCH_ERROR`

Character set conversion not possible for one or more characters

**Exception class:**\\ `CX_SY_CONVERSION_CODEPAGE`

Conversion of texts from [code page](ABENCODEPAGE_GLOSRY.html) to code page not supported

**Exception class:**\\ `CX_SY_CODEPAGE_CONVERTER_INIT`

Value to be converted cannot be interpreted as a number

**Exception class:**\\ `CX_SY_CONVERSION_NO_NUMBER`

Overflow after conversion (all types, not type `p`)

**Exception class:**\\ `CX_SY_CONVERSION_OVERFLOW`

Invalid value for the addition `DECIMALS`

**Exception class:**\\ `CX_SY_CREATE_DATA_ERROR`

Invalid value for the addition `INITIAL SIZE`

**Exception class:**\\ `CX_SY_CREATE_DATA_ERROR`

Invalid value for the addition `LENGTH`

**Exception class:**\\ `CX_SY_CREATE_DATA_ERROR`

The addition `LENGTH` was used for a type other than `c`, `n`, `x`, or `p`.

**Exception class:**\\ `CX_SY_CREATE_DATA_ERROR`

The type specified dynamically in the addition `TYPE` is not completely typed

**Exception class:**\\ `CX_SY_CREATE_DATA_ERROR`

The type specified in the addition `TYPE` is unknown

**Exception class:**\\ `CX_SY_CREATE_DATA_ERROR`

An attempt was made to instantiate an abstract class.

**Exception class:**\\ `CX_SY_CREATE_OBJECT_ERROR`

The class specified by the dynamic `CREATE OBJECT` was not found.

**Exception class:**\\ `CX_SY_CREATE_OBJECT_ERROR`

An attempt was made to create an object of a class defined as '`CREATE PRIVATE`'.

**Exception class:**\\ `CX_SY_CREATE_OBJECT_ERROR`

An attempt was made to create an object of a class defined as '`CREATE PROTECTED`'.

**Exception class:**\\ `CX_SY_CREATE_OBJECT_ERROR`

Invalid substring access: Length negative

**Exception class:**\\ `CX_SY_RANGE_OUT_OF_BOUNDS`

Invalid substring access: Length 0

**Exception class:**\\ `CX_SY_RANGE_OUT_OF_BOUNDS`

Invalid substring access: Length too long

**Exception class:**\\ `CX_SY_RANGE_OUT_OF_BOUNDS`

Invalid substring access: Offset negative

**Exception class:**\\ `CX_SY_RANGE_OUT_OF_BOUNDS`

Invalid substring access: Offset plus length too long

**Exception class:**\\ `CX_SY_RANGE_OUT_OF_BOUNDS`

Invalid substring access: Invalid type

**Exception class:**\\ `CX_SY_OFFSET_NOT_ALLOWED`

Invalid substring access: Offset too large

**Exception class:**\\ `CX_SY_RANGE_OUT_OF_BOUNDS`

File could not be closed; there may be no more space in the file system

**Exception class:**\\ `CX_SY_FILE_CLOSE`

File cannot be opened

**Exception class:**\\ `CX_SY_FILE_OPEN`

`OPEN DATASET` with the addition `FILTER` not supported on the current operating system.

**Exception class:**\\ `CX_SY_PIPES_NOT_SUPPORTED`

No access possible to current read/write position in the file

**Exception class:**\\ `CX_SY_FILE_POSITION`

File not open.

**Exception class:**\\ `CX_SY_FILE_OPEN_MODE`

Specified offset exceeds system limit

**Exception class:**\\ `CX_SY_FILE_POSITION`

Pipe for file closed.

**Exception class:**\\ `CX_SY_PIPE_REOPEN`

Error when reading a file

**Exception class:**\\ `CX_SY_FILE_IO`

File open for reading only

**Exception class:**\\ `CX_SY_FILE_OPEN_MODE`

Error when positioning in file

**Exception class:**\\ `CX_SY_FILE_POSITION`

Maximum number of open files exceeded

**Exception class:**\\ `CX_SY_TOO_MANY_FILES`

Error when writing in a file

**Exception class:**\\ `CX_SY_FILE_IO`

An attempt was made to call the class constructor.

**Exception class:**\\ `CX_SY_DYN_CALL_ILLEGAL_METHOD`

An attempt was made to call a method from an abstract class.

**Exception class:**\\ `CX_SY_DYN_CALL_ILLEGAL_CLASS`

An attempt was made to call a method from a nonexistent class.

**Exception class:**\\ `CX_SY_DYN_CALL_ILLEGAL_CLASS`

An attempt was made to call the instance constructor.

**Exception class:**\\ `CX_SY_DYN_CALL_ILLEGAL_METHOD`

An attempt was made to catch an unknown exception.

**Exception class:**\\ `CX_SY_DYN_CALL_EXCP_NOT_FOUND`

An attempt was made to call an unknown method.

**Exception class:**\\ `CX_SY_DYN_CALL_ILLEGAL_METHOD`

An attempt was made to call an unimplemented method.

**Exception class:**\\ `CX_SY_DYN_CALL_ILLEGAL_METHOD`

An attempt was made to call an instance method from a class.

**Exception class:**\\ `CX_SY_DYN_CALL_ILLEGAL_METHOD`

An attempt was made to pass a parameter with an incorrect parameter category.

**Exception class:**\\ `CX_SY_DYN_CALL_ILLEGAL_TYPE`

An attempt was made to pass a constant actual parameter to a formal `EXPORTING`, `CHANGING`, or `RETURNING` parameter.

**Exception class:**\\ `CX_SY_DYN_CALL_ILLEGAL_TYPE`

A mandatory parameter was not filled.

**Exception class:**\\ `CX_SY_DYN_CALL_PARAM_MISSING`

An attempt was made to pass an unknown parameter.

**Exception class:**\\ `CX_SY_DYN_CALL_PARAM_NOT_FOUND`

An attempt was made to pass a parameter with an incorrect table type.

**Exception class:**\\ `CX_SY_DYN_CALL_ILLEGAL_TYPE`

An attempt was made to pass a parameter with an incorrect type.

**Exception class:**\\ `CX_SY_DYN_CALL_ILLEGAL_TYPE`

An initial data reference was passed for a mandatory parameter.

**Exception class:**\\ `CX_SY_DYN_CALL_PARAM_MISSING`

An attempt was made to call a private method externally.

**Exception class:**\\ `CX_SY_DYN_CALL_ILLEGAL_METHOD`

An attempt was made to call a [protected](ABENPROTECTED_GLOSRY.html) method externally.

**Exception class:**\\ `CX_SY_DYN_CALL_ILLEGAL_METHOD`

An attempt was made to call a method on an initial reference.

**Exception class:**\\ `CX_SY_REF_IS_INITIAL`

The `EXPORT`\\ [data cluster](ABENDATA_CLUSTER_GLOSRY.html) is too big for the application buffer.

**Exception class:**\\ `CX_SY_EXPORT_BUFFER_NO_MEMORY`

The `IMPORT`/`EXPORT` statement could not open the file.

**Exception class:**\\ `CX_SY_FILE_OPEN`

The export statement could not write to the file.

**Exception class:**\\ `CX_SY_FILE_IO`

No further temporary [subroutine pools](ABENSUBROUTINE_POOL_GLOSRY.html) can be generated.

**Exception class:**\\ `CX_SY_GENERATE_SUBPOOL_FULL`

Import error; same sequence of components but with type conflicts or mismatches in structured data types

**Exception class:**\\ `CX_SY_IMPORT_MISMATCH_ERROR`

Import error; dataset has a different length.

**Exception class:**\\ `CX_SY_IMPORT_MISMATCH_ERROR`

Type conflict in assignment between reference variables (only operator `?=` or obsolete statement `MOVE...?TO...` )

**Exception class:**\\ `CX_SY_MOVE_CAST_ERROR`

No authorization for accessing file

**Exception class:**\\ `CX_SY_FILE_AUTHORITY`

No authorization for accessing file (`OPEN DATASET...FILTER...`)

**Exception class:**\\ `CX_SY_FILE_AUTHORITY`

Invalid program name in the `PERFORM` statement

**Exception class:**\\ `CX_SY_PROGRAM_NOT_FOUND`

Incorrect offset/length specified in the `REPLACE` statement

**Exception class:**\\ `CX_SY_RANGE_OUT_OF_BOUNDS`

`SECTION` with length 0 in the `REPLACE` statement

**Exception class:**\\ `CX_SY_REPLACE_INFINITE_LOOP`

Communication error in the remote method call

**Exception class:**\\ `CX_SY_RMC_COMM_FAILURE`

State error in the remote method call

**Exception class:**\\ `CX_SY_RMC_INVALID_STATUS`

System error in the remote method call

**Exception class:**\\ `CX_SY_RMC_SYSTEM_FAILURE`

Invalid access with negative length to a string

**Exception class:**\\ `CX_SY_RANGE_OUT_OF_BOUNDS`

Invalid access to a string (length too long)

**Exception class:**\\ `CX_SY_RANGE_OUT_OF_BOUNDS`

Invalid access with negative offset to a string

**Exception class:**\\ `CX_SY_RANGE_OUT_OF_BOUNDS`

Invalid access to a string (offset too large)

**Exception class:**\\ `CX_SY_RANGE_OUT_OF_BOUNDS`

Invalid offset to a string (offset plus length too large)

**Exception class:**\\ `CX_SY_RANGE_OUT_OF_BOUNDS`

Code page used is not released.

**Exception class:**\\ `CX_SY_LOCALIZATION_ERROR`

Error in the configuration of the [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html) (`SET LOCALE...`)

**Exception class:**\\ `CX_SY_LOCALIZATION_ERROR`

Invalid key when accessing the text environment table.

**Exception class:**\\ `CX_SY_LOCALIZATION_ERROR`

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_program\_flow.html abensystem-exceptions.html