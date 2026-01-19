---
title: "Static Reference Type Specification"
description: |
  Dynamic Reference Type Specification -   If the data type of a parameter is specified as `abap.curr`, then the reference type must be `#CUKY`. -   If the type of a parameter is specified as `abap.quan`, then the reference type must be `#UNIT`. -   Specifying a reference type `ref_type`. The followin
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_WITH_REFERENCE_TYPE.htm"
abapFile: "ABENCDS_WITH_REFERENCE_TYPE.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "ABENCDS", "WITH", "REFERENCE", "TYPE"]
---

`WITH REFERENCE TYPE [#CUKY | #UNIT | #CALC | #NONE] | WITH REFERENCE TYPE OF pname`\\

`WITH REFERENCE TYPE CASE WHEN pname1: reference [AND pname2: reference][AND...]\ THEN reference [WHEN ... [AND ... ] THEN ...]\ [ELSE reference]\ END[;]`

[1. `WITH REFERENCE TYPE ref_type | OF ...`](#ABAP_VARIANT_1@1@)

[2. `WITH REFERENCE TYPE CASE ...`](#ABAP_VARIANT_2@1@)

[SQL-based scalar functions](ABENCDS_SQL_SCALAR_GLOSRY.html) support the handling of [CDS amount fields](ABENCDS_AMOUNT_FIELD_GLOSRY.html) and [CDS quantity fields](ABENCDS_QUANTITY_GLOSRY.html). CDS amount fields and CDS quantity fields are fields with a reference to a [currency key](ABENCURRENCY_KEY_GLOSRY.html), a [unit key](ABENUNIT_GLOSRY.html), or a [calculated unit](ABENCDS_CALCULATED_UNIT_GLOSRY.html). Scalar functions can handle these references. They can define which reference types are allowed for each [input parameter](ABENINPUT_PARAMETER_GLOSRY.html) and for the return parameter. The [actual parameters](ABENACTUAL_PARAMETER_GLOSRY.html) passed to the input parameters must provide the required reference types. If the return parameter requires a reference type, the required annotation must be provided when the scalar function is used. Missing reference types for actual parameters or the return parameter result in a syntax check error.

The following general rules apply:

In all other cases, the syntax checker does not check whether the data type and the reference type match and the developer must ensure logical combinations. The following definition is not logical and no actual parameter can satisfy the conditions. In other words, if a value has data type `CHAR`, it must not have a reference to a currency key and vice versa. The required data type and the required reference type are mutually exclusive. However, no syntax check error occurs.

p1: abap.char(10) \\nWITH REFERENCE TYPE \[ #CUKY \]

The following example demonstrates the definition, implementation, and use of an SQL-based scalar function with parameters with reference types.

**CDS scalar function definition**

The following CDS scalar function `DEMO_CDS_SCALAR_REF_CASE` defines input parameters with reference types. The return parameter dynamically specifies the reference type.

**CDS scalar function implementation reference**

The scalar function implementation reference `DEMO_CDS_SCALAR_REF_CASE_SQL` binds the scalar function to the SQL Engine and defines the method `EXECUTE` of the class `CL_DEMO_CDS_SCALAR_REF_CASE` as AMDP function implementation.

**AMDP function implementation**

The following listing shows the AMDP function implementation. The input parameters are summed up.

**Use in a CDS view entity**

The following CDS view entity uses the scalar function `DEMO_CDS_SCALAR_REF_CASE` as an element in the `SELECT` list. The passed actual parameter for `p1` has a unit key as reference and the result is also linked with a unit key using the annotation `@Semantics.quantity.unitOfMeasure`.

**Note** The syntax checker checks the reference types of the input parameters and of the return parameter. Wrong reference types lead to a syntax check error. **Note** The AMDP function implementation does not check the reference types. It would be technically possible to add 5 kilometers and 3 kilograms. The result might not make sense, but there would be no syntax check error. The developer must ensure logical calculations.

The reference type can be specified statically. The following options are available:

An input parameter can have one or more reference types. The reference types can be freely combined. Here's an example:

WITH REFERENCE TYPE \[#CUKY, #CALC, #NONE, REFERENCE TYPE OF pname1\]

This means that the parameter in question supports all of the specified reference types, and the actual parameter can have a currency key reference, a calculated unit, no reference at all, or any of the reference types specified for the input parameter `pname1`.

**Note** This does not apply to return parameters. Return parameters cannot have more than one reference type.

The data type specified for a parameter and the data type required by the reference type must match. This means:

The reference type of the input parameter or return parameter can be defined dynamically, depending on the reference types of the input parameters. This is done using case statements. The following rules apply:

Static Reference Type Specification

Dynamic Reference Type Specification

-   If the data type of a parameter is specified as `abap.curr`, then the reference type must be `#CUKY`.
-   If the type of a parameter is specified as `abap.quan`, then the reference type must be `#UNIT`.

-   Specifying a reference type `ref_type`. The following values can be specified for `ref_type`:

-   `#CUKY`: The actual parameters passed must be [CDS amount fields](ABENCDS_AMOUNT_FIELD_GLOSRY.html). They must have a valid data type and they must be annotated with [`Semantics.amount.currencyCode`](ABENCDS_F1_ELEMENT_ANNOTATION.html).
-   `#UNIT`: The actual parameters passed must be [CDS quantity fields](ABENCDS_QUANTITY_GLOSRY.html). They must have a valid data type and they must be annotated with [`Semantics.quantity.unitOfMeasure`](ABENCDS_F1_ELEMENT_ANNOTATION.html).
-   `#CALC`: The passed actual parameters must be [CDS calculated quantities](ABENCDS_CALCULATED_QUANTITY_GLOSRY.html). This means that they must be the result of a calculation, they have data type `DECFLOAT34`, and they must have a calculated unit reference using the annotation [`Semantics.quantity.unitOfMeasure`](ABENCDS_F1_ELEMENT_ANNOTATION.html).
-   `#NONE`: The actual parameters passed must not have a reference to a currency key, a unit of measure key, or a calculated unit.

-   `WITH REFERENCE TYPE OF pname`: Defines a reference type with reference to another input parameter. A parameter typed with reference to another input parameter automatically inherits the reference type of the referenced parameter. This is useful when two parameters require the same reference type. The following rules apply:

-   The referenced parameter `pname` must be another input parameter. References to the return parameter are not supported.
-   `pname` must be a parameter that is specified statically with a reference value. Referencing parameters with a dynamic specification or with a parameter reference is not allowed.

-   The reference type `#CUKY` only allows actual parameters of the types `CURR`, `DECFLOAT34`, `DEC`, and `FLTP`.
-   The reference type `#UNIT` only allows actual parameters of the types `QUAN`, `DECFLOAT16`, `DECFLOAT34`, `DEC`, `FLTP`, `INT1`, `INT2`, or `INT4`.
-   The reference type `#CALC` only allows actual parameters of the type `DECFLOAT34`.
-   The reference type `#NONE` accepts all data types except for `CURR` and `QUAN`, because these data types force a reference type.

-   The [generic data type](ABENDDIC_GENERIC_TYPES.html)\\ `numeric` has a different scope of data types than CDS amount fields and CDS quantity fields. When `numeric` is specified together with a reference type, the valid data types for the actual parameter are the intersection of the two requirements.
-   Casting and conversions may be required for the actual parameters. For example, the generic data type `numeric` does not support the data type `abap.curr`. The conversion function [`CURR_TO_DECFLOAT_AMOUNT`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) can be used to convert fields of the data type `abap.curr` to a data type that is allowed for `numeric`, so that they can be used as actual parameter for a parameter typed with `numeric`.

-   Each parameter can have exactly one `CASE` statement.
-   A `CASE` statement can have one or more `WHEN` branches.
-   A `WHEN` branch can have one or more conditions. Multiple conditions can be combined with `AND`.
-   For input parameters, the `ELSE` branch is optional. For the return parameter, the `ELSE` branch is mandatory.

define scalar function DEMO\_CDS\_SCALAR\_REF\_CASE \\n with parameters \\n p1: numeric \\n with reference type \[ #CUKY, #UNIT, #CALC, #NONE \], \\n p2: numeric \\n with reference type \[ #CUKY, #UNIT, #CALC, #NONE \], \\n p3: abap.dec(4,2) \\n with reference type \[ #CUKY, #UNIT, #CALC, #NONE \] \\n returns abap.dec(4,2) \\n with reference type \\n case \\n when p2: reference type of p1 \\n then #NONE \\n else reference type of p1 \\n end; METHOD execute BY DATABASE FUNCTION \\n FOR HDB \\n LANGUAGE SQLSCRIPT \\n OPTIONS READ-ONLY. \\n result = p1 + p2 + p3; \\n ENDMETHOD. @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, scalar func'\\n\\ndefine view entity DEMO\_CDS\_SCALAR\_USE\_REF\_CASE\\n with parameters\\n p1 : abap.dec(4,2)\\n as select from DEMO\_CDS\_SCALAR\_HELPER\\n\\{\\n key Id,\\n Unit2,\\n @Semantics.quantity.unitOfMeasure: 'Unit2'\\n DEMO\_CDS\_SCALAR\_REF\_CASE(\\n p1 => Int4,\\n p2 => abap.int4'22',\\n p3 => $parameters.p1) as ScalarResult\\n\\}\\n abenabap.html abencds.html abencds\_fdl.html abencds\_functions.html abencds\_scalar\_functions.html abencds\_sql\_scalar\_function.html abencds\_define\_scalar\_function.html abencds\_scalar\_typing.html