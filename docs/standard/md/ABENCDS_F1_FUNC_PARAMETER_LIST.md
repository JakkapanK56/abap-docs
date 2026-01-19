---
title: "ABENCDS_F1_FUNC_PARAMETER_LIST"
description: |
  ABENCDS_F1_FUNC_PARAMETER_LIST - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_FUNC_PARAMETER_LIST.htm"
abapFile: "ABENCDS_F1_FUNC_PARAMETER_LIST.html"
keywords: ["if", "case", "method", "data", "types", "ABENCDS", "FUNC", "PARAMETER", "LIST"]
---

``... WITH PARAMETERS [`parameter1`](ABENCDS_F1_PARAM.html), [`parameter2`](ABENCDS_F1_PARAM.html), ...``

Defines [CDS parameters](ABENCDS_PARAMETER_GLOSRY.html)\\ [`parameter1`](ABENCDS_F1_PARAM.html), [`parameter2`](ABENCDS_F1_PARAM.html), ... as input parameters of a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) in a comma-separated list.

A parameter must be typed with an elementary data type. All data types listed in topic [`Typing`](ABENCDS_TYPING.html) are allowed, except for `abap.accp`, `abap.geom_ewkb`, and `abap.rawstring`.

The input parameters of the [AMDP function implementation](ABENAMDP_FUNCTION_METHODS.html)\\ `amdp_function` specified after [`IMPLEMENTED BY METHOD`](ABENCDS_F1_DEFINE_TABLE_FUNCTION.html) are generated from the input parameters specified here. The ABAP data types of the input parameters of the AMDP function implementation are derived from the [built-in data types](ABENDDIC_BUILTIN_TYPES.html) in ABAP Dictionary specified by the [`typing`](ABENCDS_TYPING.html), in accordance with the associated mapping rules for type references to ABAP Dictionary.

In the case of [client-dependent](ABENCDS_FUNC_CLIENT_HANDLING.html) CDS table functions, each input parameter with the built-in dictionary type `CLNT` must be annotated with the annotation [`@Environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) and the predefined value [`#CLIENT`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_table\_functions.html abencds\_f1\_define\_table\_function.html