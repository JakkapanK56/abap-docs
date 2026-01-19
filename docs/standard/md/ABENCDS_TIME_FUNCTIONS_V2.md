---
title: "ABENCDS_TIME_FUNCTIONS_V2"
description: |
  ABENCDS_TIME_FUNCTIONS_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_TIME_FUNCTIONS_V2.htm"
abapFile: "ABENCDS_TIME_FUNCTIONS_V2.html"
keywords: ["select", "if", "class", "data", "types", "ABENCDS", "TIME", "FUNCTIONS"]
---

`... TIMS_IS_VALID(time) ...`

In a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), the function `TIMS_IS_VALID` determines whether the [positional parameter](ABENPOSITIONAL_PARAMETER_GLOSRY.html)\\ `time` contains a valid time in the format `HHMMSS`. The actual parameter must have the built-in data type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html). `time` can be specified as [literal](ABENCDS_LITERAL_V2.html), field of a [data source](ABENCDS_DATA_SOURCE_V2.html), [parameter](ABENCDS_PARAMETER_V2.html), [path expression](ABENCDS_PATH_EXPRESSION_V2.html), [reuse expression](ABENCDS_REUSABLE_EXPRESSION_V2.html) using `$projection`, an [SQL-based scalar function](ABENCDS_SQL_SCALAR_FUNCTION.html), or [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V2.html). The result has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). A valid date produces the value 1 and all other input values (including the null value) produce the value 0.

It is not currently possible to access the current system time directly in a CDS view entity. Instead, a CDS view entity can be given an appropriate [input parameter](ABENCDS_PARAMETER_LIST_V2.html). The special annotation [`@Environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) makes it possible to pass the value of the [ABAP system field](ABENSYSTEM_FIELD_GLOSRY.html)\\ `sy-uzeit` to this parameter.

The following CDS view entity demonstrates how to use the time function `TIMS_IS_VALID`. The class `CL_DEMO_CDS_TIME_FUNC_VE` uses `SELECT` to access the view. You can assign any value to the column `TIMS1` of the DDIC database table `DEMO_EXPRESSIONS`.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_TIME\_FUNC\_VE\\n as select from demo\_expressions\\n\\{\\n key id,\\n tims1 as time1,\\n tims\_is\_valid(120102) as valid,\\n tims\_is\_valid(tims\_from\_timn(timn1, 'FAIL')) as valid1,\\n tims\_is\_valid(tims1) as valid2\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html abencds\_builtin\_functions\_v2.html abencds\_special\_functions\_v2.html abencds\_date\_time\_functions\_v2.html