---
title: "ABENCDS_COALESCE_EXPRESSION_V1"
description: |
  ABENCDS_COALESCE_EXPRESSION_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_COALESCE_EXPRESSION_V1.htm"
abapFile: "ABENCDS_COALESCE_EXPRESSION_V1.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENCDS", "COALESCE", "EXPRESSION"]
---

`... COALESCE( arg1, arg2 ) ...`

[Coalesce function](ABENCOALESCE_GLOSRY.html) in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). Can be used to check whether `arg1` contains a [null value](ABENNULL_VALUE_GLOSRY.html). In ABAP CDS, the coalesce function has two mandatory [positional parameters](ABENPOSITIONAL_PARAMETER_GLOSRY.html) for arguments `arg1` and `arg2`. It checks whether `arg1` contains a null value. If yes, then it returns the value of `arg2`. If no, then it returns the value of `arg1`. If both `arg1` and `arg2` are null, then the null value is returned.

The following can be specified as the arguments `arg`:

The valid argument types of `arg1` and `arg2` are all [dictionary types](ABENDDIC_BUILTIN_TYPES.html) except `ACCP`, `DF16_SCL` (obsolete), `DF34_SCL` (obsolete), `DF16_DEC`, `DF34_DEC`, `DF16_RAW`, `DF34_RAW`, `LCHR`, `LRAW`, `PREC`, `RAWSTRING`, `STRING`, and `GEOM_EWKB`.

The data types of both arguments must either be the same or the data type of one argument must represent the value of the other data type. The result has the dictionary type of the argument with the largest value range.

A coalesce function is a short form of the following [complex case distinction](ABENCDS_CASE_EXPRESSION_V2.html):

CASE WHEN arg1 IS NOT NULL THEN arg1 \\n     ELSE arg2 \\nEND

The following DDIC-based CDS view demonstrates the syntax of the coalesce function.

-   [Literals](ABENCDS_LITERAL_V1.html) of a suitable type. The literal can be prefixed with the name of a domain.
-   Suitable [fields](ABENCDS_FIELD_V1.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html) of the current CDS view.
-   [Path expressions](ABENCDS_PATH_EXPRESSION_V1.html) that identify a suitable field of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html).
-   [Input parameters](ABENCDS_PARAMETER_V1.html) from the parameter list [`parameter_list`](ABENCDS_PARAMETER_LIST_V1.html).
-   The following built-in functions and expressions (if they return a matching type):

-   Other built-in [SQL functions](ABENCDS_SQL_FUNCTIONS_V1.html)
-   [Arithmetic expressions](ABENCDS_ARITHMETIC_EXPRESSION_V1.html)
-   Type modifications using [`CAST`](ABENCDS_CAST_EXPRESSION_V1.html)

@AbapCatalog.sqlViewName: 'DEMO\_COAL\_V1'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view DEMO\_CDS\_COALESCE\_V1 \\nas select from demo\_ddic\_types \\n\\{\\n key id,\\n coalesce(int1, int2) as coalesced\\n\\}\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_expressions\_v1.html abencds\_builtin\_functions\_v1.html abencds\_sql\_functions\_v1.html