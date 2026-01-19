---
title: "This group contains runtime errors that can occur during the import of data"
description: |
  if the type or the length of the data stored is not identical with that of the target type. The following keywords are assigned to this exception group: `IMPORT`(ABAPIMPORT_DATA_CLUSTER.html) (Common class: `CX_SY_LOCALIZATION_ERROR`) This group contains runtime errors that can occur when the prog
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSYSEXC-ERRKL.htm"
abapFile: "ABENSYSEXC-ERRKL.html"
keywords: ["delete", "loop", "do", "if", "case", "catch", "method", "class", "data", "types", "ABENSYSEXC", "ERRKL"]
---

Most of the obsolete catchable runtime errors are assigned to exception groups. Using the name of an exception group, all catchable runtime errors of the group can be caught simultaneously using [`CATCH SYSTEM-EXCEPTIONS`](ABAPCATCH_SYS.html).

For all catchable runtime errors, the [predefined exception classes](ABENABAP_EXCEPTION_CLASSES.html) are specified that can be used to handle the runtime errors. Normally, **most** exception classes of an exception group belong to a common superclass. This superclass is specified in parentheses below the exception group. If more than one exception class is assigned to a catchable runtime error, this runtime error can be raised by different causes, which must be handled by correspondingly different exception classes.

The assigned ABAP keywords are specified for each exception group. Only those keywords assigned to a specific exception group can be used to catch the runtime errors in this exception group using the obsolete statement `CATCH SYSTEM-EXCEPTIONS`.

(Associated superclass: `CX_SY_ARITHMETIC_ERROR`)

This group contains exceptions that can be raised by arithmetic expressions. These include, for example, division by zero, overflow or underflow in fields, and errors in arithmetic and trigonometric functions. \\nErrors that occur during the conversion between data types in mixed [arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html) are not caught.

The following keywords are assigned to this exception group:

[`ADD`](ABAPADD.html)

[`ADD-CORRESPONDING`](ABAPADD-CORRESPONDING.html)

[`COMPUTE`](ABAPCOMPUTE_ARITH.html)

[`DIVIDE`](ABAPSUBTRACT_MULTIPLY_DIVIDE.html)

[`DIVIDE-CORRESPONDING`](ABAPADD-CORRESPONDING.html)

[`MULTIPLY`](ABAPSUBTRACT_MULTIPLY_DIVIDE.html)

[`MULTIPLY-CORRESPONDING`](ABAPADD-CORRESPONDING.html)

[`SUBTRACT`](ABAPSUBTRACT_MULTIPLY_DIVIDE.html)

[`SUBTRACT-CORRESPONDING`](ABAPADD-CORRESPONDING.html)

(Associated superclass: `CX_SY_CONVERSION_ERROR`)

This group contains runtime errors that can occur during the conversion between data types. An explicit conversion can be made using an [assignment](ABAPMOVE.html), for example. \\nImplicit conversions are only caught in [arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html).

The following keywords are assigned to this exception group:

[`ADD`](ABAPADD.html)

[`ADD-CORRESPONDING`](ABAPADD-CORRESPONDING.html)

[`COMPUTE`](ABAPCOMPUTE_ARITH.html)

[`DIVIDE`](ABAPADD.html)

[`DIVIDE-CORRESPONDING`](ABAPADD-CORRESPONDING.html)

[`MOVE`](ABAPMOVE.html)

[`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html)

[`MULTIPLY`](ABAPADD.html)

[`MULTIPLY-CORRESPONDING`](ABAPADD-CORRESPONDING.html)

[`PACK`](ABAPPACK.html)

[`SUBTRACT`](ABAPADD.html)

[`SUBTRACT-CORRESPONDING`](ABAPADD-CORRESPONDING.html)

[`UNPACK`](ABAPUNPACK.html)

Statements of category `n2 = n1` are assigned to the obsolete keyword `MOVE`.

(Associated superclass: `CX_SY_CREATE_ERROR`)

This group contains runtime errors that can occur when data objects are created.

The following keywords are assigned to this exception group:

[`CREATE DATA`](ABAPCREATE_DATA.html)

(Associated superclass: `CX_SY_CREATE_ERROR`)

This group contains runtime errors that can occur when objects are created.

The following keywords are assigned to this exception group:

[`CREATE OBJECT`](ABAPCREATE_OBJECT.html)

(Associated superclass: `CX_SY_DATA_ACCESS_ERROR`)

This group contains runtime errors that can occur in substring accesses (with offset/length) to data objects.

Since substring accesses can occur in almost all statements, no keywords can be assigned.

(Associated superclass: `CX_SY_DYN_CALL_ERROR`)

This group contains runtime errors that can occur in dynamic method calls. These are normally errors that raise a syntax error when the call is static.

The following keywords are assigned to this exception group:

[`CALL METHOD`](ABAPCALL_METHOD_DYNAMIC.html)

(Associated superclass: `CX_SY_FILE_ACCESS_ERROR`)

This group contains runtime errors that can occur when files are accessed. Typical examples are when the system cannot find the file, when no more space is available to write to or create the file, or if the authorization to access the file is missing.

The following keywords are assigned to this exception group:

**`CLOSE`**, variant: [`CLOSE DATASET ...`](ABAPCLOSE_DATASET.html)

**`DELETE`**, variant: [`DELETE DATASET ...`](ABAPDELETE_DATASET.html)

**`EXPORT`**, variant: [`EXPORT ... TO DATASET ...`](ABAPEXPORT_DATA_CLUSTER.html)

**`OPEN`**, variant: [`OPEN DATASET...`](ABAPOPEN_DATASET.html)

**`READ`**, variant: [`READ DATASET...`](ABAPREAD_DATASET.html)

[`TRANSFER`](ABAPTRANSFER.html)

(Common class: `CX_SY_IMPORT_MISMATCH_ERROR`)

This group contains runtime errors that can occur during the import of data

if the type or the length of the data stored is not identical with that of the target type.

The following keywords are assigned to this exception group:

[`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html)

(Common class: `CX_SY_LOCALIZATION_ERROR`)

This group contains runtime errors that can occur when the program switches to another [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html). Typical examples are when the required locale language is not allowed or when the system wants to switch to a character set which has not been released.

The following keywords are assigned to this exception group:

**`SET`**, variant: [`SET LOCALE ...`](ABAPSET_LOCALE.html)

(Associated superclass: `CX_SY_REMOTE_CALL_ERROR`)

This group contains runtime errors that can occur during calls to remote systems (currently only `CALL METHOD`). Typical examples are network errors or the unexpected termination of the connection.

The following keywords are assigned to this exception group:

[`CALL METHOD`](ABAPCALL_METHOD_DYNAMIC.html)

-   The obsolete keyword [`COMPUTE`](ABAPCOMPUTE_ARITH.html) is optional. However, statements in category
-   `n1 = arithexp`\\
    still belong to the keyword `COMPUTE`.
-   Statements of the category
-   `COMPUTE n1 = n2.`\\
    are simply assignments without arithmetic functions and are assigned to the keyword `MOVE`, which is also optional in the context of catchable runtime errors. To avoid confusion, it is better to write the following in these cases:
    `n1 = n2.`

-   from the ABAP Memory,
-   from the database,
-   from the `SHARED BUFFER`, or
-   from a file

`BCD_ZERODIVIDE` `CX_SY_ZERODIVIDE` `COMPUTE_FLOAT_ZERODIVIDE` `CX_SY_ZERODIVIDE` `COMPUTE_INT_ZERODIVIDE` `CX_SY_ZERODIVIDE` `ADDF_INT_OVERFLOW` `CX_SY_ARITHMETIC_OVERFLOW` `BCD_OVERFLOW` `CX_SY_ARITHMETIC_OVERFLOW` `COMPUTE_BCD_OVERFLOW` `CX_SY_ARITHMETIC_OVERFLOW` `COMPUTE_COSH_OVERFLOW` `CX_SY_ARITHMETIC_OVERFLOW` `COMPUTE_EXP_RANGE` `CX_SY_ARITHMETIC_OVERFLOW` `COMPUTE_FLOAT_DIV_OVERFLOW` `CX_SY_ARITHMETIC_OVERFLOW` `COMPUTE_FLOAT_MINUS_OVERFLOW` `CX_SY_ARITHMETIC_OVERFLOW` `COMPUTE_FLOAT_PLUS_OVERFLOW` `CX_SY_ARITHMETIC_OVERFLOW` `COMPUTE_FLOAT_TIMES_OVERFLOW` `CX_SY_ARITHMETIC_OVERFLOW` `COMPUTE_INT_ABS_OVERFLOW` `CX_SY_ARITHMETIC_OVERFLOW` `COMPUTE_INT_DIV_OVERFLOW` `CX_SY_ARITHMETIC_OVERFLOW` `COMPUTE_INT_MINUS_OVERFLOW` `CX_SY_ARITHMETIC_OVERFLOW` `COMPUTE_INT_PLUS_OVERFLOW` `CX_SY_ARITHMETIC_OVERFLOW` `COMPUTE_INT_TIMES_OVERFLOW` `CX_SY_ARITHMETIC_OVERFLOW` `COMPUTE_LOG10_ERROR` `CX_SY_ARITHMETIC_OVERFLOW`, `CX_SY_ARG_OUT_OF_DOMAIN` `COMPUTE_LOG_ERROR` `CX_SY_ARITHMETIC_OVERFLOW`, `CX_SY_ARG_OUT_OF_DOMAIN` `COMPUTE_MATH_OVERFLOW` `CX_SY_ARITHMETIC_OVERFLOW` `COMPUTE_POW_RANGE` `CX_SY_ARITHMETIC_OVERFLOW` `COMPUTE_SINH_OVERFLOW` `CX_SY_ARITHMETIC_OVERFLOW` `COMPUTE_ACOS_DOMAIN` `CX_SY_ARG_OUT_OF_DOMAIN` `COMPUTE_ASIN_DOMAIN` `CX_SY_ARG_OUT_OF_DOMAIN` `COMPUTE_ATAN_DOMAIN` `CX_SY_ARG_OUT_OF_DOMAIN` `COMPUTE_COSH_DOMAIN` `CX_SY_ARG_OUT_OF_DOMAIN` `COMPUTE_COS_DOMAIN` `CX_SY_ARG_OUT_OF_DOMAIN` `COMPUTE_EXP_DOMAIN` `CX_SY_ARG_OUT_OF_DOMAIN` `COMPUTE_MATH_DOMAIN` `CX_SY_ARG_OUT_OF_DOMAIN` `COMPUTE_POW_DOMAIN` `CX_SY_ARG_OUT_OF_DOMAIN` `COMPUTE_SINH_DOMAIN` `CX_SY_ARG_OUT_OF_DOMAIN` `COMPUTE_SIN_DOMAIN` `CX_SY_ARG_OUT_OF_DOMAIN` `COMPUTE_SQRT_DOMAIN` `CX_SY_ARG_OUT_OF_DOMAIN` `COMPUTE_TANH_DOMAIN` `CX_SY_ARG_OUT_OF_DOMAIN` `COMPUTE_COS_LOSS` `CX_SY_PRECISION_LOSS` `COMPUTE_MATH_LOSS` `CX_SY_PRECISION_LOSS` `COMPUTE_SIN_LOSS` `CX_SY_PRECISION_LOSS` `COMPUTE_TAN_LOSS` `CX_SY_PRECISION_LOSS` `BCD_FIELD_OVERFLOW` `CX_SY_CONVERSION_OVERFLOW` `BCD_FIELD_OVERFLOW` `CX_SY_CONVERSION_OVERFLOW` `CONVT_OVERFLOW` `CX_SY_CONVERSION_OVERFLOW` `CONVT_CODEPAGE` `CX_SY_CONVERSION_CODEPAGE` `CONVT_NO_NUMBER` `CX_SY_CONVERSION_NO_NUMBER` `BCD_OVERFLOW` `CX_SY_ARITHMETIC_OVERFLOW` `CREATE_DATA_UNKNOWN_TYPE` `CX_SY_CREATE_DATA_ERROR` `CREATE_DATA_NOT_ALLOWED_TYPE` `CX_SY_CREATE_DATA_ERROR` `CREATE_DATA_LEN_NOT_ALLOWED` `CX_SY_CREATE_DATA_ERROR` `CREATE_DATA_ILLEGAL_LENGTH` `CX_SY_CREATE_DATA_ERROR` `CREATE_DATA_ILLEGAL_DECIMALS` `CX_SY_CREATE_DATA_ERROR` `CREATE_DATA_ILLEGAL_INIT_SIZE` `CX_SY_CREATE_DATA_ERROR` `CREATE_OBJECT_CLASS_NOT_FOUND` `CX_SY_CREATE_OBJECT_ERROR` `CREATE_OBJECT_CLASS_ABSTRACT` `CX_SY_CREATE_OBJECT_ERROR` `CREATE_OBJECT_CREATE_PRIVATE` `CX_SY_CREATE_OBJECT_ERROR` `CREATE_OBJECT_CREATE_PROTECTED` `CX_SY_CREATE_OBJECT_ERROR` `DATA_OFFSET_NEGATIVE` `CX_SY_RANGE_OUT_OF_BOUNDS` `DATA_LENGTH_NEGATIVE` `CX_SY_RANGE_OUT_OF_BOUNDS` `DATA_LENGTH_0` `CX_SY_RANGE_OUT_OF_BOUNDS` `DATA_LENGTH_TOO_LARGE` `CX_SY_RANGE_OUT_OF_BOUNDS` `DATA_OFFSET_LENGTH_TOO_LARGE` `CX_SY_RANGE_OUT_OF_BOUNDS` `DATA_OFFSET_TOO_LARGE` `CX_SY_RANGE_OUT_OF_BOUNDS` `REFI_WRONG_SECTION` `CX_SY_RANGE_OUT_OF_BOUNDS` `STRING_OFFSET_NEGATIVE` `CX_SY_RANGE_OUT_OF_BOUNDS` `STRING_OFFSET_TOO_LARGE` `CX_SY_RANGE_OUT_OF_BOUNDS` `STRING_LENGTH_NEGATIVE` `CX_SY_RANGE_OUT_OF_BOUNDS` `STRING_LENGTH_TOO_LARGE` `CX_SY_RANGE_OUT_OF_BOUNDS` `STRING_OFFSET_LENGTH_TOO_LARGE` `CX_SY_RANGE_OUT_OF_BOUNDS` `DATA_OFFSET_LENGTH_NOT_ALLOWED` `CX_SY_OFFSET_NOT_ALLOWED` `DYN_CALL_METH_CLASS_ABSTRACT` `CX_SY_DYN_CALL_ILLEGAL_CLASS` `DYN_CALL_METH_CLASS_NOT_FOUND` `CX_SY_DYN_CALL_ILLEGAL_CLASS` `DYN_CALL_METH_CLASSCONSTRUCTOR` `CX_SY_DYN_CALL_ILLEGAL_METHOD` `DYN_CALL_METH_CONSTRUCTOR` `CX_SY_DYN_CALL_ILLEGAL_METHOD` `DYN_CALL_METH_NOT_FOUND` `CX_SY_DYN_CALL_ILLEGAL_METHOD` `DYN_CALL_METH_NO_CLASS_METHOD` `CX_SY_DYN_CALL_ILLEGAL_METHOD` `DYN_CALL_METH_PRIVATE` `CX_SY_DYN_CALL_ILLEGAL_METHOD` `DYN_CALL_METH_PROTECTED` `CX_SY_DYN_CALL_ILLEGAL_METHOD` `DYN_CALL_METH_EXCP_NOT_FOUND` `CX_SY_DYN_CALL_EXCP_NOT_FOUND` `DYN_CALL_METH_PARAM_KIND` `CX_SY_DYN_CALL_ILLEGAL_TYPE` `DYN_CALL_METH_PARAM_LITL_MOVE` `CX_SY_DYN_CALL_ILLEGAL_TYPE` `DYN_CALL_METH_PARAM_TAB_TYPE` `CX_SY_DYN_CALL_ILLEGAL_TYPE` `DYN_CALL_METH_PARAM_TYPE` `CX_SY_DYN_CALL_ILLEGAL_TYPE` `DYN_CALL_METH_PARAM_MISSING` `CX_SY_DYN_CALL_PARAM_MISSING` `DYN_CALL_METH_PARREF_INITIAL` `CX_SY_DYN_CALL_PARAM_MISSING` `DYN_CALL_METH_PARAM_NOT_FOUND` `CX_SY_DYN_CALL_PARAM_NOT_FOUND` `DYN_CALL_METH_REF_IS_INITIAL` `CX_SY_REF_IS_INITIAL` `DATASET_CANT_CLOSE` `CX_SY_FILE_CLOSE` `DATASET_CANT_OPEN` `CX_SY_FILE_OPEN` `EXPORT_DATASET_CANNOT_OPEN` `CX_SY_FILE_OPEN` `DATASET_WRITE_ERROR` `CX_SY_FILE_IO` `DATASET_READ_ERROR` `CX_SY_FILE_IO` `EXPORT_DATASET_WRITE_ERROR` `CX_SY_FILE_IO` `DATASET_SEEK_ERROR` `CX_SY_FILE_POSITION` `DATASET_NO_POSITION` `CX_SY_FILE_POSITION` `DATASET_READ_ONLY` `CX_SY_FILE_OPEN_MODE` `DATASET_NOT_OPEN` `CX_SY_FILE_OPEN_MODE` `OPEN_DATASET_NO_AUTHORITY` `CX_SY_FILE_AUTHORITY` `OPEN_PIPE_NO_AUTHORITY` `CX_SY_FILE_AUTHORITY` `DATASET_TOO_MANY_FILES` `CX_SY_TOO_MANY_FILES` `DATASET_NO_PIPE` `CX_SY_PIPES_NOT_SUPPORTED` `CONNE_IMPORT_WRONG_COMP_DECS` `CX_SY_IMPORT_MISMATCH_ERROR` `CONNE_IMPORT_WRONG_COMP_LENG` `CX_SY_IMPORT_MISMATCH_ERROR` `CONNE_IMPORT_WRONG_COMP_TYPE` `CX_SY_IMPORT_MISMATCH_ERROR` `CONNE_IMPORT_WRONG_FIELD_DECS` `CX_SY_IMPORT_MISMATCH_ERROR` `CONNE_IMPORT_WRONG_FIELD_LENG` `CX_SY_IMPORT_MISMATCH_ERROR` `CONNE_IMPORT_WRONG_FIELD_TYPE` `CX_SY_IMPORT_MISMATCH_ERROR` `CONNE_IMPORT_WRONG_OBJECT_TYPE` `CX_SY_IMPORT_MISMATCH_ERROR` `CONNE_IMPORT_WRONG_STRUCTURE` `CX_SY_IMPORT_MISMATCH_ERROR` `IMPORT_ALIGNMENT_MISMATCH` `CX_SY_IMPORT_MISMATCH_ERROR` `IMPORT_WRONG_END_POS` `CX_SY_IMPORT_MISMATCH_ERROR` `TEXTENV_CODEPAGE_NOT_ALLOWED` `CX_SY_LOCALIZATION_ERROR` `TEXTENV_INVALID` `CX_SY_LOCALIZATION_ERROR` `TEXTENV_KEY_INVALID` `CX_SY_LOCALIZATION_ERROR` `RMC_COMMUNICATION_FAILURE` `CX_SY_RMC_COMM_FAILURE` `RMC_INVALID_STATUS` `CX_SY_RMC_INVALID_STATUS` `RMC_SYSTEM_FAILURE` `CX_SY_RMC_SYSTEM_FAILURE` `ASSIGN_CASTING_ILLEGAL_CAST` `CX_SY_ASSIGN_CAST_ILLEGAL_CAST` `ASSIGN_CASTING_UNKNOWN_TYPE` `CX_SY_ASSIGN_CAST_UNKNOWN_TYPE` `ASSIGN_FIELD_NOT_IN_RANGE` `CX_SY_ASSIGN_OUT_OF_RANGE` `DATASET_OFFSET_TOO_LARGE` `CX_SY_FILE_POSITION` `DYN_CALL_METH_NOT_IMPLEMENTED` `CX_SY_DYN_CALL_ILLEGAL_METHOD` `EXPORT_BUFFER_NO_MEMORY` `CX_SY_EXPORT_BUFFER_NO_MEMORY` `GENERATE_SUBPOOL_DIR_FULL` `CX_SY_GENERATE_SUBPOOL_FULL` `MOVE_CAST_ERROR` `CX_SY_MOVE_CAST_ERROR` `PERFORM_PROGRAM_NAME_TOO_LONG` `CX_SY_PROGRAM_NOT_FOUND` `REPLACE_INFINITE_LOOP` `CX_SY_REPLACE_INFINITE_LOOP` abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_program\_flow.html abensystem-exceptions.html