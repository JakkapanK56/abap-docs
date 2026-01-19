---
title: "ABENCDS_OVERVIEW_BUILTIN_TYPES"
description: |
  ABENCDS_OVERVIEW_BUILTIN_TYPES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_OVERVIEW_BUILTIN_TYPES.htm"
abapFile: "ABENCDS_OVERVIEW_BUILTIN_TYPES.html"
keywords: ["do", "if", "data", "types", "ABENCDS", "OVERVIEW", "BUILTIN", "TYPES"]
---

The [built-in data types](ABENCDS_BUILT_IN_TYPE_GLOSRY.html) of ABAP CDS are based on the [built-in dictionary types](ABENDDIC_BUILTIN_TYPES.html) and the same rules apply as for the corresponding built-in dictionary types. The built-in data types in ABAP CDS are written with the domain prefix `abap`, a period (*.*), and the name of the data type.

The following table lists all available built-in CDS data types and the corresponding dictionary type they can be mapped to. The third column indicates whether a data type can be used for [typing](ABENCDS_TYPING.html) of a [CDS element](ABENCDS_ELEMENT_GLOSRY.html). The fourth column indicates whether a data type can be used for [typing](ABENCDS_TYPING.html) of a [CDS parameter](ABENCDS_PARAMETER_GLOSRY.html). The fifth column indicates whether a data type can be used in a [cast expression](ABENCDS_CAST_EXPRESSION_V2.html).

`len` and `dec` must be used to specify values for the length and decimal places of the respective generic types. The values specified here in parentheses must be within the value ranges allowed by ABAP Dictionary. For data types with fixed lengths and decimal places, it is possible, but not mandatory to specify the predefined value for length and decimal places. The exception in this regard is `abap.accp`: this type has the predefined length of 6, which must always be specified in parentheses.

In [CDS simple types](ABENCDS_SIMPLE_TYPE_GLOSRY.html), all of the data types listed above can be used for [typing](ABENCDS_DEFINE_SIMPLE_TYPE.html) except for `abap.accp` and `abap.fltp`. The data type `abap.accp` is deprecated. Instead of `abap.fltp`, a [decimal floating point number type](ABENDECFLOAT_TYPE_GLOSRY.html) can be used.

In [CDS table entities](ABENCDS_TABLE_ENTITY_GLOSRY.html), all of the data types listed above can be used for typing except for `abap.accp`, `abap.clnt`, `abap.dats`, `abap.tims`, and `abap.geom_ewkb`.

**Notation** **Built-In Data Type in ABAP Dictionary** \\ **Element Typing** **Parameter Typing** **Cast Target**\\ `abap.char( len )` [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with length `len` x x x `abap.clnt[(3)]` [`CLNT`](ABENDDIC_BUILTIN_TYPES.html) x x x `abap.cuky[(5)]` [`CUKY`](ABENDDIC_BUILTIN_TYPES.html)\\ x x x `abap.curr(len,dec)` [`CURR`](ABENDDIC_BUILTIN_TYPES.html) with length `len` and with `dec` decimal places x x x `abap.d16n[(16)]` [`DECFLOAT16`](ABENDDIC_BUILTIN_TYPES.html)\\ x x x `abap.d34n[(34)]` [`DECFLOAT34`](ABENDDIC_BUILTIN_TYPES.html)\\ x x x `abap.datn[(8)]` [`DATN`](ABENDDIC_BUILTIN_TYPES.html) x x x `abap.dats[(8)]` [`DATS`](ABENDDIC_BUILTIN_TYPES.html) x x x `abap.dec(len,dec)` [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length `len` and with `dec` decimal places x x x `abap.fltp[(16,16)]` [`FLTP`](ABENDDIC_BUILTIN_TYPES.html)\\ x x x `abap.geom_ewkb` [`GEOM_EWKB`](ABENDDIC_BUILTIN_TYPES.html)\\ x - - `abap.int1[(3)]` [`INT1`](ABENDDIC_BUILTIN_TYPES.html) x x x `abap.int2[(5)]` [`INT2`](ABENDDIC_BUILTIN_TYPES.html) x x x `abap.int4[(10)]` [`INT4`](ABENDDIC_BUILTIN_TYPES.html) x x x `abap.int8[(19)]` [`INT8`](ABENDDIC_BUILTIN_TYPES.html) x x x `abap.lang[(1)]` [`LANG`](ABENDDIC_BUILTIN_TYPES.html)\\ x x x `abap.numc( len )` [`NUMC`](ABENDDIC_BUILTIN_TYPES.html) with length `len` x x x `abap.quan(len,dec)` [`QUAN`](ABENDDIC_BUILTIN_TYPES.html) with length `len` and with `dec` decimal places x x x `abap.raw(len)` [`RAW`](ABENDDIC_BUILTIN_TYPES.html) with length `len` x x - `abap.rawstring` [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html)\\ x - - `abap.sstring(len)` [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html) with length `len` x x x `abap.string` [`STRING`](ABENDDIC_BUILTIN_TYPES.html)\\ x - - `abap.timn[(6)]` [`TIMN`](ABENDDIC_BUILTIN_TYPES.html)\\ x x x `abap.tims[(6)]` [`TIMS`](ABENDDIC_BUILTIN_TYPES.html)\\ x x x `abap.unit[(2|3)]` [`UNIT`](ABENDDIC_BUILTIN_TYPES.html) with length `2` or `3` (standard length) x x x `abap.utcl[(27)]` [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) x x x abenabap.html abencds.html abencds\_data\_types.html