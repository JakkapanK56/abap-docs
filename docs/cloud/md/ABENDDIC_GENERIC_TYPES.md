---
title: "ABENDDIC_GENERIC_TYPES"
description: |
  ABENDDIC_GENERIC_TYPES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_GENERIC_TYPES.htm"
abapFile: "ABENDDIC_GENERIC_TYPES.html"
keywords: ["if", "data", "types", "ABENDDIC", "GENERIC", "TYPES"]
---

The following table shows the built-in [CDS generic types](ABENCDS_GENERIC_TYPE_GLOSRY.html). A generic data type is like a placeholder that allows different built-in data types.

The following generic data types are available:

Generic CDS data types are currently allowed only for typing the parameters of [CDS scalar functions](ABENCDS_SCALAR_FUNCTION_GLOSRY.html).

The generic type `any` is allowed only in [analytical scalar functions](ABENCDS_ANA_SCALAR_GLOSRY.html). It is not allowed in [SQL-based scalar functions](ABENCDS_SQL_SCALAR_GLOSRY.html).

The following CDS scalar function uses the built-in generic type `numeric` to type the input parameter `p1`. Parameters passed to `p1` must have a valid data type. Otherwise, a syntax check error occurs.

DEFINE SCALAR FUNCTION demo\_generic\_ddic\_type \\n WITH PARAMETERS \\n p1: numeric \\n RETURNS TYPE OF p1 **Type** **Includes the following built-in data types**\\ `any` \\ `INT1`, `INT2`, `INT4`, `INT8`, `DEC`, `CURR`, `QUAN`, `DECFLOAT16`, `DECFLOAT34`, `FLTP`, `CHAR`, `NUMC`, `STRING`, `SSTRING`, `RAW`, `RAWSTRING`, `DATS`, `TIMS`, `CUKY`, `UNIT`, `CLNT`. `numeric` `INT1`, `INT2`, `INT4`, `INT8`, `DEC`, `DECFLOAT16`, `DECFLOAT34`, `QUAN`. abenabap.html abencds.html abencds\_data\_types.html