---
title: "ABENCDS_PARAMETER_PASSING"
description: |
  ABENCDS_PARAMETER_PASSING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_PARAMETER_PASSING.htm"
abapFile: "ABENCDS_PARAMETER_PASSING.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENCDS", "PARAMETER", "PASSING"]
---

`... ( pname1 => act1, pname2 => act2, ... ) ...`

Passes the actual parameters `act1`, `act2`, ... to the input parameters `pname1`, `pname2`, ... of an [SQL-based scalar function](ABENCDS_SQL_SCALAR_GLOSRY.html).

The following can be specified as actual parameters:

The data types of the actual parameters must exactly match the [typing](ABENCDS_TYPING.html) of the input parameters. The reference type specification [`WITH REFERENCE TYPE`](ABENCDS_WITH_REFERENCE_TYPE.html), if any, must be followed. Otherwise, a syntax check error occurs.

If an input parameter requires one of the reference types `#CUKY`, `#UNIT`, or `#CALC`, fewer operands are possible for the actual parameters because not all operands can provide the required reference information. The possible operands are:

The following CDS view entity passes a field of a data source, a typed literal and an input parameter as actual parameters to the input parameters of the CDS scalar function `DEMO_CDS_SCALAR_REF_CASE`.

-   [Literals](ABENCDS_LITERAL_V2.html) (typed or untyped)
-   [Parameters](ABENCDS_PARAMETER_V2.html)
-   [Session variables](ABENCDS_SESSION_VARIABLE_V2.html)
-   [Fields](ABENCDS_FIELD_V2.html) of a data source
-   [Built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V2.html) if they return a suitable data type
-   [Arithmetic expressions](ABENCDS_ARITHMETIC_EXPRESSION_V2.html)
-   [Aggregate functions](ABENCDS_AGGREGATE_FUNCTIONS_V2.html)
-   [Cast expressions](ABENCDS_CAST_EXPRESSION_V2.html)
-   [Case distinctions](ABENCDS_CASE_EXPRESSION_V2.html)
-   Another SQL-based scalar function
-   A reuse expression using [`$projection.fieldName`](ABENCDS_REUSABLE_EXPRESSION_V2.html)
-   **Note** Reuse expressions defined with `$projection` lose their reference information. `$projection` fields do not inherit annotations, so the references to [currency keys](ABENCURRENCY_KEY_GLOSRY.html) or [unit keys](ABENUNIT_GLOSRY.html) are lost.
-   A [path expression](ABENCDS_PATH_EXPRESSION_V2.html)

-   Fields of a data source that are annotated with the required reference information.
-   Scalar functions that return a value of a suitable data type and that are annotated with the required reference information.
-   Path expressions that are annotated with the required reference information.
-   `$projection` fields that derive their reference information from the data source.
-   **Note** Reuse expressions defined with `$projection` use their reference information, if it is specified locally. However, if a reference type can be derived from the underlying data source, the reference information is preserved and a `$projection` field can be specified as an input parameter.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, scalar func'\\n\\ndefine view entity DEMO\_CDS\_SCALAR\_USE\_REF\_CASE\\n with parameters\\n p1 : abap.dec(4,2)\\n as select from DEMO\_CDS\_SCALAR\_HELPER\\n\\{\\n key Id,\\n Unit2,\\n @Semantics.quantity.unitOfMeasure: 'Unit2'\\n DEMO\_CDS\_SCALAR\_REF\_CASE(\\n p1 => Int4,\\n p2 => abap.int4'22',\\n p3 => $parameters.p1) as ScalarResult\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_fdl.html abencds\_scalar\_functions.html