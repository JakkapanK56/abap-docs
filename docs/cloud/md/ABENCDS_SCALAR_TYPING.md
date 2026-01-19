---
title: "ABENCDS_SCALAR_TYPING"
description: |
  ABENCDS_SCALAR_TYPING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SCALAR_TYPING.htm"
abapFile: "ABENCDS_SCALAR_TYPING.html"
keywords: ["select", "if", "method", "class", "data", "types", "ABENCDS", "SCALAR", "TYPING"]
---

``\    [`dtype`](ABENCDS_TYPING.html)                       [[`WITH REFERENCE TYPE`](ABENCDS_WITH_REFERENCE_TYPE.html)]\  |\ [`simple_type`](ABENCDS_DEFINE_SIMPLE_TYPE.html)                 [[`WITH REFERENCE TYPE`](ABENCDS_WITH_REFERENCE_TYPE.html)]\  |\ [`data_element`](ABENDDIC_DATA_ELEMENTS.html)                [[`WITH REFERENCE TYPE`](ABENCDS_WITH_REFERENCE_TYPE.html)]\  |\ [`generic_type`](ABENDDIC_GENERIC_TYPES.html)                [[`WITH REFERENCE TYPE`](ABENCDS_WITH_REFERENCE_TYPE.html)]\  | TYPE OF ParameterReference  [[`WITH REFERENCE TYPE`](ABENCDS_WITH_REFERENCE_TYPE.html)]``

[`... WITH REFERENCE TYPE`](#ABAP_ONE_ADD@1@)

The input parameters of [SQL-based scalar functions](ABENCDS_SQL_SCALAR_GLOSRY.html) can be typed as follows:

The return parameter of an SQL-based scalar function can be typed as follows:

The following example demonstrates the definition, implementation, and use of an SQL-based scalar function with input parameters.

**CDS scalar function definition**

The following CDS scalar function `DEMO_CDS_SCALAR_RATIO` defines two input parameters:

The return parameter is typed with a built-in data type.

**CDS scalar function implementation reference**

The scalar function implementation reference `DEMO_CDS_SCALAR_RATIO_SQL` binds the scalar function to the SQL Engine and defines the method `EXECUTE` of the class `CL_DEMO_CDS_SCALAR_RATIO` as AMDP function implementation.

**AMDP function implementation**

The following listing shows the AMDP function implementation. The input parameter `portion` is divided by the input parameter `total` and multiplied by 100 to get the percentage of `portion` in relation to `total`.

**Use in a CDS view entity**

The following CDS view entity uses the scalar function `DEMO_CDS_SCALAR_RATIO` as an element in the `SELECT` list to calculate the occupancy of a flight.

**Access Using ABAP SQL**

The following code snippet demonstrates how the CDS view entity can be accessed. The value of the column `OccupationRatio` is calculated by the AMDP function implementation.

Specifies a reference type. Reference types allow the handling of [CDS amount fields](ABENCDS_AMOUNT_FIELD_GLOSRY.html) and [CDS quantity fields](ABENCDS_QUANTITY_GLOSRY.html). The addition is described in topic [CDS DDL - `WITH REFERENCE TYPE`](ABENCDS_WITH_REFERENCE_TYPE.html).

-   Using a [built-in ABAP Dictionary data type](ABENCDS_TYPING.html).
-   Using a [CDS simple type](ABENCDS_SIMPLE_TYPE_GLOSRY.html) defined using [`DEFINE TYPE`](ABENCDS_DEFINE_SIMPLE_TYPE.html).
-   Using a [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html).
-   Using the [generic data type](ABENDDIC_GENERIC_TYPES.html)\\ `numeric`.
-   **Note** The generic type `any` is only available for analytical scalar functions.
-   Referencing another input parameter using the syntax statement `TYPE OF ParameterReference`. `ParameterReference` can be any input parameter from the parameter list of the current scalar function that is typed with a built-in data type, a simple type, a data element, or a generic type.
-   **Note** You cannot reference the return parameter.
-   **Note** You cannot reference an input parameter that itself references an input parameter.

-   Using a [built-in ABAP Dictionary data type](ABENCDS_TYPING.html).
-   Using a [CDS simple type](ABENCDS_SIMPLE_TYPE_GLOSRY.html) defined using [`DEFINE TYPE`](ABENCDS_DEFINE_SIMPLE_TYPE.html).
-   Using a [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html).
-   Referencing another input parameter using the syntax statement `TYPE OF ParameterReference`. `ParameterReference` can be any of the input parameters from the parameter list of the current scalar function that is typed with a built-in data type, a simple type, a data element, or a generic type.
-   **Note** You cannot reference an input parameter that itself references an input parameter.

-   `portion`: Typed with the generic type `numeric`. Accepts all available reference types.
-   `total`: Typed with reference to the input parameter `portion`.

define scalar function DEMO\_CDS\_SCALAR\_RATIO \\n with parameters \\n portion: numeric \\n with reference type \[ #CUKY, #UNIT, #CALC, #NONE \], \\n total : type of portion \\n with reference type of portion \\n returns abap.decfloat34 \\n with reference type #NONE; METHOD execute BY DATABASE FUNCTION \\n FOR HDB \\n LANGUAGE SQLSCRIPT \\n OPTIONS READ-ONLY. \\n result = portion / total \* 100; \\nENDMETHOD. @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, scalar func'\\n\\ndefine view entity DEMO\_CDS\_SCALAR\_USE\_RATIO\\n as select from sflight\\n\\{\\n key carrid as Carrid,\\n key connid as Connid,\\n key fldate as Fldate,\\n seatsocc as BookedSeats,\\n seatsmax as TotalSeats,\\n DEMO\_CDS\_SCALAR\_RATIO( \\n portion => seatsocc, \\n total => seatsmax ) as OccupationRatio\\n\\}\\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM demo\_cds\_scalar\_use\_ratio \\n INTO TABLE @DATA(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_fdl.html abencds\_scalar\_functions.html abencds\_sql\_scalar\_function.html abencds\_define\_scalar\_function.html