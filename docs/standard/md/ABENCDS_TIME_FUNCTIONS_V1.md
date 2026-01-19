---
title: "ABENCDS_TIME_FUNCTIONS_V1"
description: |
  ABENCDS_TIME_FUNCTIONS_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_TIME_FUNCTIONS_V1.htm"
abapFile: "ABENCDS_TIME_FUNCTIONS_V1.html"
keywords: ["select", "if", "class", "data", "types", "ABENCDS", "TIME", "FUNCTIONS"]
---

`... TIMS_IS_VALID(time) ...`

[1. `... TIMS_IS_VALID(time)`](#ABAP_VARIANT_1@1@)

In a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), these functions execute operations with arguments of the built-in data type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html). The functions have [positional parameters](ABENPOSITIONAL_PARAMETER_GLOSRY.html) to which arguments need to be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](ABENCDS_DATA_SOURCE_V1.html), [literals](ABENCDS_LITERAL_V1.html), [parameters](ABENCDS_PARAMETER_V1.html), [path expressions](ABENCDS_PATH_EXPRESSION_V1.html), built-in functions, or expressions can all be specified as arguments. If an argument contains the [null value](ABENNULL_VALUE_GLOSRY.html), every function except `TIMS_IS_VALID` returns a null value.

It is not currently possible to access the current system time directly in a CDS view. Instead, a CDS view can be given an appropriate [input parameter](ABENCDS_PARAMETER_LIST_V1.html). The special annotation [`@Environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) makes it possible to pass the value of the [ABAP system field](ABENSYSTEM_FIELD_GLOSRY.html)\\ `sy-uzeit` to this parameter.

The function `TIMS_IS_VALID` determines whether `time` (if specified) contains a valid time in the format `HHMMSS`. The argument must have the built-in data type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html). The result has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). A valid date produces the value 1 and all other input values (including the null value) produce the value 0.

The following CDS view applies time functions in the `SELECT` list to columns of the DDIC database table `DEMO_EXPRESSIONS`. The class `CL_DEMO_CDS_TIME_FUNCTIONS` uses `SELECT` to access the view. The column `TIMS1` of the DDIC database table can be given any values.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_TIMFNC'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view demo\_cds\_time\_functions\\n as select from demo\_expressions\\n\\{\\n key id,\\n tims1 as time1,\\n tims\_is\_valid(tims1) as valid1\\n\\}\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_expressions\_v1.html abencds\_builtin\_functions\_v1.html abencds\_special\_functions\_v1.html abencds\_date\_time\_functions\_v1.html