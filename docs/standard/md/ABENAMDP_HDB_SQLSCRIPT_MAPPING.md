---
title: "ABENAMDP_HDB_SQLSCRIPT_MAPPING"
description: |
  ABENAMDP_HDB_SQLSCRIPT_MAPPING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAMDP_HDB_SQLSCRIPT_MAPPING.htm"
abapFile: "ABENAMDP_HDB_SQLSCRIPT_MAPPING.html"
keywords: ["do", "try", "method", "data", "types", "ABENAMDP", "HDB", "SQLSCRIPT", "MAPPING"]
---

Elementary ABAP types are mapped to the appropriate types in SQLScript as shown in the following tables. The type mapping includes:

The tables distinguish parameters that reference a type defined in ABAP from those that reference a [built-in type in the ABAP Dictionary](ABENDDIC_BUILTIN_TYPES.html). No parameters or type references can be defined for SQLScript types that are not listed here.

**Numeric Types**

**Character-Like Types**

**Byte-Like Types**

**Date Types, Time Types, and Time Stamp Types**

The [built-in types in ABAP Dictionary](ABENDDIC_BUILTIN_TYPES.html) are mapped like the associated ABAP types, with the following exceptions.

In the recommended mappings, the ABAP type should be defined with reference to the built-in ABAP Dictionary type to define the more suitable HANA type.

-   Interface parameters of an AMDP method
-   References to ABAP types using the [AMDP macro](ABENAMDP_MACRO_GLOSRY.html)\\ [`$ABAP.type`](ABENAMDP_ABAP_TYPES.html)

**ABAP Type** **HANA Type** **Note**\\ `b` `SMALLINT` `SMALLINT` is a two byte integer with sign `s` `SMALLINT` `SMALLINT` is a two byte integer with sign `i` `INTEGER` - `int8` `BIGINT` - `p`, length `leng` with `dec` decimal places \\ `DECIMAL`, length `2len-1` with `dec` decimal places - `decfloat16` `VARBINARY`, length 8 Cannot be interpreted as a number in the database and no calculations can be performed `decfloat34` `VARBINARY`, length 16 Cannot be interpreted as a number in the database and no calculations can be performed `f` `DOUBLE` - **ABAP Type** **HANA Type** **Note**\\ `c`, length `len` `NVARCHAR`, length `len` - `string` `NCLOB` Not allowed for input/output parameters `n`, length `len` `NVARCHAR`, length `len` A suitable casting to a numeric database type must be performed before calculations can be made in the database. Numeric results must be transformed back to the ABAP format. **ABAP Type** **HANA Type** **Note**\\ `x`, length `len` `VARBINARY`, length `len` - `xstring` BLOB Not allowed for input/output parameters **ABAP Type** **HANA Type** **Note**\\ `d` `NVARCHAR`, length `8` A casting to the `DATE` type of the database must be performed before date calculations can be made. SQLScript offers the built-in function `to_dats`. `t` `NVARCHAR`, length `6` A casting to the `TIME` type of the database must be performed before time calculations can be made. SQLScript offers the built-in function `to_tims`. `utclong` `TIMESTAMP` - **Dictionary Type** **HANA Type** **Note**\\ `DECFLOAT16` `SMALLDECIMAL` Recommended mapping `DECFLOAT34` `DECIMAL` Recommended mapping `DF16_DEC`, length `leng` with `dec` decimal places \\ `DECIMAL`, length `2len-1` with `dec` decimal places Value range on the database is smaller than in ABAP `DF34_DEC`, length `leng` with `dec` decimal places \\ `DECIMAL`, length `2len-1` with `dec` decimal places Value range on the database is smaller than in ABAP `DF16_SCL` - Obsolete, not supported `DF34_SCL` - Obsolete, not supported `DATN` `DATE` Recommended mapping `TIMN` `TIME` Recommended mapping `GEOM_EWKB` `ST_GEOMETRY` Recommended mapping `SSTRING`, length `len` `NVARCHAR`, length `len` - abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_methods.html abapmethod\_by\_db\_proc.html abenamdp\_hdb\_sqlscript.html