---
title: "ABENCDS_CONV_FUNC_UNIT_CURR_V2"
description: |
  ABENCDS_CONV_FUNC_UNIT_CURR_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_CONV_FUNC_UNIT_CURR_V2.htm"
abapFile: "ABENCDS_CONV_FUNC_UNIT_CURR_V2.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "ABENCDS", "CONV", "FUNC", "UNIT", "CURR"]
---

`... UNIT_CONVERSION(    quantity           => arg1,                          source_unit        => arg2,                          target_unit        => arg3[,                          client             => arg4][,                          error_handling     => arg5])    | CURRENCY_CONVERSION(amount             => arg1,                          source_currency    => arg2,                          target_currency    => arg3,                          exchange_rate_date => arg4[,                          exchange_rate_type => arg5][,                          client             => arg6][,                          round              => arg7][,                          decimal_shift      => arg8][,                          decimal_shift_back => arg9][,                          error_handling     => arg10])    | GET_NUMERIC_VALUE( arg )    | CURR_TO_DECFLOAT_AMOUNT( arg ) ...`

[1. `... UNIT_CONVERSION( ... )`](#ABAP_VARIANT_1@1@)

[2. `... CURRENCY_CONVERSION( ... )`](#ABAP_VARIANT_2@1@)

[3. `... GET_NUMERIC_VALUE( arg )`](#ABAP_VARIANT_3@1@)

[4. `... CURR_TO_DECFLOAT_AMOUNT( arg )`](#ABAP_VARIANT_4@1@)

Functions for converting between units and between currencies in a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html).

The functions `UNIT_CONVERSION` and `CURRENCY_CONVERSION` have [keyword parameters](ABENKEYWORD_PARAMETER_GLOSRY.html)\\ `quantity`, `source_unit`, ... (some of which are optional), to which actual parameters `arg1`, `arg2`, ... can or must be assigned when called using `=>`.

The functions `GET_NUMERIC_VALUE` and `CURR_TO_DECFLOAT_AMOUNT` each have one mandatory [positional parameter](ABENPOSITIONAL_PARAMETER_GLOSRY.html)\\ `arg`.

The function `DECIMAL_SHIFT` is currently not supported in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html).

The function `UNIT_CONVERSION` performs a unit conversion for the value passed to the keyword parameter `quantity`.

The unit conversion is performed on the basis of the client-dependent rules saved in transaction `CUNI` and in the DDIC database tables `T006...` of the package `SZME`.

The table below shows all available keyword parameters and their meaning.

The data type of the result depends on the data type of the formal parameter `quantity`:

The precision of the result of the unit conversion depends on the database platform. The highest precision is achieved on databases that support [decimal floating point numbers](ABENDECFLOAT_GLOSRY.html). Due to rounding, the result can be different from a unit conversion performed using ABAP methods, such as a standard function module.

The following CDS view entity calls a unit conversion in the `SELECT` list for the column `DEC3` of the DDIC database table `DEMO_EXPRESSIONS`. The source unit is specified using a typed literal. The target unit must be passed as a parameter. In the event of an error, for example if a conversion between the entered units is impossible, the result is set to null.

The class `CL_DEMO_CDS_UNIT_CONVERSION_VE` accesses the view in a `SELECT` statement. The target unit is passed to the respective formal parameter. As a comparison, the same conversion is also performed using the function module `UNIT_CONVERSION_SIMPLE`. As prerequisite for the example, the units and their conversion rules must be available in the corresponding DDIC database tables.

The function `CURRENCY_CONVERSION` performs a currency conversion for the value passed to the keyword parameter `amount`. The result has the data type [`CURR`](ABENDDIC_BUILTIN_TYPES.html) or [`DECFLOAT34`](ABENDDIC_BUILTIN_TYPES.html) with the same technical properties as the actual parameter passed to `amount`. The currency conversion is performed on the basis of the client-dependent rules saved in the DDIC database tables `TCUR...` of package `SFIB`. These rules can be edited using transaction `OB08`.

The table below shows all available keyword parameters and their meaning.

The input parameters `round`, `decimal_shift`, and `decimal_shift_back` accept the literals `'true'`, `'false'`, `'X'`, or `' '`. `#cdsboolean.true` and `#cdsboolean.false` with the domain prefix `CDSBOOLEAN` are also possible. Internally, these literals are handled like the values *X* or blank.

**Caution** The literal values *'true'* and *'false'* (with and without domain prefix) are case-sensitive. Uppercase letters, such as *#cdsboolean.TRUE* and *#cdsboolean.FALSE*, are not valid input. No error message occurs, but these values are not considered valid input and unexpected behavior may occur.

**Handling the Decimal Places**

The following CDS view entity performs a currency conversion in the `SELECT` list for the column `AMOUNT` of the DDIC database table `DEMO_PRICES`. The target currency must be passed as a parameter. In the event of an error, for example, when a currency is not available, the result is set to zero.

The class `CL_DEMO_CDS_CURRENCY_CONV_VE` accesses the view in a `SELECT` statement, passing the target currency. As a comparison, the same conversion is also performed using the function module `CONVERT_TO_LOCAL_CURRENCY`. As prerequisite for the example, the currencies and conversion rules must be available in the corresponding DDIC database tables.

In class `CL_DEMO_CDS_FUNC_CURR_CONV_VE`, the above CDS view entity is used in a subquery of an ABAP SQL `MODIFY` statement.

`GET_NUMERIC_VALUE` returns the numeric value of a [currency](ABENCURRENCY_FIELD_GLOSRY.html) or [quantity](ABENQUANTITY_GLOSRY.html) field without its [currency](ABENCURRENCY_KEY_GLOSRY.html) or [unit](ABENUNIT_GLOSRY.html) key. `arg` must be a [field of a data source](ABENCDS_FIELD_V2.html). No other [elementary operand](ABENCDS_OPERANDS_V2.html), [expression](ABENCDS_EXPRESSIONS_V2.html), or [function](ABENCDS_BUILTIN_FUNCTIONS_V2.html) is possible. The argument `arg` can have any data type that supports reference annotations, namely: `INT1`, `INT2`, `INT4`, `DEC`, `FLTP`, `DECFLOAT16`, `DECFLOAT34`, `CURR`, or `QUAN`. The result of the function `GET_NUMERIC_VALUE` has data type `DECFLOAT34` and it has no reference information assigned. That means that no currency or unit key is assigned.

If `arg` has data type `CURR`, an implicit decimal shift takes place.

The following CDS view entity applies the function `GET_NUMERIC_VALUE` to calculate the number of bookings. It divides the total value of current bookings (field `paymentsum`) by the price of a flight (field `price`). This would not be possible without the function `GET_NUMERIC_VALUE`, since elements of data type `CURR` are not allowed in [arithmetic expressions](ABENCDS_ARITHMETIC_EXPRESSION_V2.html).

Details on the elements:

The class `CL_DEMO_CDS_GET_NUMERIC_VALUE` accesses the view and performs the following steps:

The function `CURR_TO_DECFLOAT_AMOUNT` converts a [currency field](ABENCURRENCY_FIELD_GLOSRY.html) of data type `CURR` into a [currency field](ABENCURRENCY_FIELD_GLOSRY.html) of data type `DECFLOAT34`. `arg` must have data type `CURR` and a [currency key](ABENCURRENCY_KEY_GLOSRY.html) must be assigned using the annotation [`Semantics.amount.currencyCode`](ABENCDS_F1_ELEMENT_ANNOTATION.html). The result has the data type [`DECFLOAT34`](ABENDDIC_BUILTIN_TYPES.html) and exactly the same currency key that is assigned to `arg` must be assigned.

This functions performs an implicit decimal shift.

The following CDS view entity demonstrates the `CURR_TO_DECFLOAT_AMOUNT` function. Field `curr10_4` is converted from data type `CURR` to data type `DECFLOAT34`. The source and the target field require a currency key assignment.

The class `CL_DEMO_CDS_CURR_TO_DEC` accesses the view and performs the following steps:

-   If `quantity` has data type `QUAN`, `DEC`, `INT1`, `INT2`, `INT4`, or `FLTP`, the result has data type `QUAN` with the length 31 and 14 decimal places.
-   If `quantity` has data type `DECFLOAT16`, the result has data type `DECFLOAT16`.
-   If `quantity` has data type `DECFLOAT34`, the result has data type `DECFLOAT34`.

-   The inbound value is rounded to two decimal places before it is converted.
-   Before the conversion, the value passed is multiplied by 10 to the power of the number of decimal places of the source currency.
-   If the value 'X' or `'true'` is passed to the parameter `decimal_shift`, the value passed is multiplied by 10 to the power of two minus the number of decimal places of the source currency before it is converted.
-   If the value 'X' or `'true'` is passed to the parameter `decimal_shift_back`, the result is divided by 10 to the power of two minus the number of decimal places of the target currency after the conversion.
-   After the conversion, the result is divided by 10 to the power of the number of decimal places of the target currency.

-   The conversion is performed on the database, which means that part of the calculation takes place using different rounding rules from ABAP. The results might differ from the results returned when using standard function modules for currency conversion, since these modules are generally less precise and round the intermediate results accordingly.
-   The parameter `decimal_shift` is intended to set the source value to the number of decimal places of the source currency before the conversion. This assumes that its technical type, [`CURR`](ABENDDIC_CURRENCY_FIELD.html), has two decimal places as usual. The parameter `decimal_shift_back` is intended to perform the reverse operation.
-   If the technical type [`CURR`](ABENDDIC_CURRENCY_FIELD.html) of the source value does not have two decimal places, the behavior of the `CURRENCY_CONVERSION` function can be unexpected.

-   `paymentsum` has data type `CURR`, a reference annotation that assigns a currency key, and it contains the total value of current bookings.
-   `price` has data type `CURR`, a reference annotation that assigns a currency key, and it contains the price of a flight.
-   `number_of_bookings` has data type `DECFLOAT34` and it has no currency key assigned.

-   It displays the element annotations of `price`. One of them is the `Semantics.amount.currencyCode` annotation that assigns a currency key.
-   It displays the element annotations of `number_of_bookings`. This field does not have any annotations.
-   It displays the structure of the CDS view entity. The element `number_of_bookings` has type *e*, which corresponds to the built-in DDIC type `DECFLOAT34`.

-   It displays all element annotations of the view `DEMO_CDS_CURR_TO_DEC`. Both source and target field have a currency key assigned.
-   It evaluates the components of the CDS view entity. The element `curr_conv` has type `e`, which corresponds to the built-in DDIC type `DECFLOAT34`.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_UNIT\_CONVERSION\_VE\\n with parameters\\n to\_unit :abap.unit( 3 )\\n as select from demo\_expressions\\n\\{\\n key id,\\n dec3 as original\_value,\\n abap.unit'MI' as original\_unit,\\n @Semantics.quantity.unitOfMeasure: 'converted\_unit'\\n unit\_conversion( quantity => dec3,\\n source\_unit => abap.unit'MI',\\n target\_unit => $parameters.to\_unit,\\n client => $session.client,\\n error\_handling => 'SET\_TO\_NULL' ) as converted\_value,\\n $parameters.to\_unit as converted\_unit\\n\\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_CURR\_CONV\_VE\\n with parameters\\n to\_currency :abap.cuky( 5 ),\\n exc\_date :abap.dats\\n as select from demo\_prices\\n\\{\\n key id,\\n @Semantics.amount.currencyCode: 'currency'\\n currency\_conversion( amount => amount,\\n source\_currency => currency,\\n round => 'X',\\n target\_currency => $parameters.to\_currency,\\n exchange\_rate\_date => $parameters.exc\_date,\\n error\_handling => 'SET\_TO\_NULL' ) as amount,\\n $parameters.to\_currency as currency\\n\\}\\n DATA currency TYPE c LENGTH 5 VALUE 'USD'. \\n\\ \\n... \\n\\ \\nMODIFY demo\_prices FROM \\n ( SELECT id, amount, currency \\n FROM demo\_cds\_curr\_conv\_ve( \\n to\_currency = @currency, \\n exc\_date = @( cl\_demo\_date\_time=>get\_user\_date( ) ) ) \\n ORDER BY id ) ##null\_values. @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, GET\_NUMERIC\_VALUE'\\n@Metadata.ignorePropagatedAnnotations: true\\n\\ndefine view entity DEMO\_CDS\_GET\_NUMERIC\_VALUE\\n as select from sflight\\n\\{\\n key carrid,\\n key connid,\\n key fldate,\\n @Semantics.amount.currencyCode: 'currency'\\n price,\\n currency,\\n @Semantics.amount.currencyCode: 'currency'\\n paymentsum,\\n get\_numeric\_value( paymentsum )\\n / get\_numeric\_value( price ) as number\_of\_bookings\\n\\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, CURR\_TO\_DEC'\\n\\ndefine view entity DEMO\_CDS\_CURR\_TO\_DEC\\n as select from demo\_ddic\_types\\n\\{\\n key id,\\n cuky as currency,\\n @Semantics.amount.currencyCode: 'currency'\\n curr10\_4 as amount,\\n @Semantics.amount.currencyCode: 'currency'\\n curr\_to\_decfloat\_amount(curr10\_4) as curr\_conv\\n\\}\\n **Formal Parameter** **Optional** **Meaning** \\ **Data Type** **Actual Parameter `arg`**\\ `quantity` `-` Inbound value [`QUAN`](ABENDDIC_BUILTIN_TYPES.html), [`DEC`](ABENDDIC_BUILTIN_TYPES.html), [`INT1`](ABENDDIC_BUILTIN_TYPES.html), [`INT2`](ABENDDIC_BUILTIN_TYPES.html), [`INT4`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT16`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT34`](ABENDDIC_BUILTIN_TYPES.html), [`FLTP`](ABENDDIC_BUILTIN_TYPES.html) \\ [Literal](ABENCDS_LITERAL_V2.html), field of a [data source](ABENCDS_DATA_SOURCE_V2.html), [parameter](ABENCDS_PARAMETER_V2.html), [expression](ABENCDS_EXPRESSIONS_V2.html), [SQL-based scalar function](ABENCDS_SQL_SCALAR_FUNCTION.html), [path expression](ABENCDS_PATH_EXPRESSION_V2.html)\\ `source_unit` `-` Source currency from column `MSEHI` of DDIC database table `T006` [`UNIT`](ABENDDIC_BUILTIN_TYPES.html) Field of a [data source](ABENCDS_DATA_SOURCE_V2.html), [parameter](ABENCDS_PARAMETER_V2.html), [case distinction](ABENCDS_CASE_EXPRESSION_V2.html), [cast expression](ABENCDS_CAST_EXPRESSION_V2.html), [path expression](ABENCDS_PATH_EXPRESSION_V2.html), [SQL-based scalar function](ABENCDS_SQL_SCALAR_FUNCTION.html)\\ `target_unit` `-` Target unit from column `MSEHI` of DDIC database table `T006` [`UNIT`](ABENDDIC_BUILTIN_TYPES.html) Field of a [data source](ABENCDS_DATA_SOURCE_V2.html), [parameter](ABENCDS_PARAMETER_V2.html), [case distinction](ABENCDS_CASE_EXPRESSION_V2.html), [cast expression](ABENCDS_CAST_EXPRESSION_V2.html), [path expression](ABENCDS_PATH_EXPRESSION_V2.html), [SQL-based scalar function](ABENCDS_SQL_SCALAR_FUNCTION.html)\\ `client` *X*, `-` Client whose rules are used to perform the unit conversion. Since client handling takes place implicitly for CDS view entities, it is not possible to explicitly specify any client column as actual parameter. For client-dependent sources, there are two options: \\
\- either, the parameter can be left out and the client column is implicitly added, or \\
\- the actual parameter can be specified as expression, literal, or session variable (but not as field of a data source). [`CLNT`](ABENDDIC_BUILTIN_TYPES.html)\\ \\ [Expression](ABENCDS_EXPRESSIONS_V2.html), [SQL-based scalar function](ABENCDS_SQL_SCALAR_FUNCTION.html), [literal](ABENCDS_LITERAL_V2.html), [session variable](ABENCDS_SESSION_VARIABLE_V2.html) \\
\\
In [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html), only the session variable [`$session.client`](ABENCDS_SESSION_VARIABLE_V2.html) can be passed to `client`. `error_handling` *X* Error handling. \\
`'FAIL_ON_ERROR'`: an error raises an exception (default) \\
`'SET_TO_NULL'`: the result is set to the [null value](ABENNULL_VALUE_GLOSRY.html) \\
`'KEEP_UNCONVERTED'`: the source value is not changed. [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with length 20 [Literal](ABENCDS_LITERAL_V2.html) **Formal Parameter** **Optional** **Meaning** \\ **Data Type** **Actual Parameter `arg`**\\ `amount` `-` Inbound value [`CURR`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT34`](ABENDDIC_BUILTIN_TYPES.html) Field of a [data source](ABENCDS_DATA_SOURCE_V2.html), [parameter](ABENCDS_PARAMETER_V2.html), [SQL-based scalar function](ABENCDS_SQL_SCALAR_FUNCTION.html), [expression](ABENCDS_EXPRESSIONS_V2.html), [path expression](ABENCDS_PATH_EXPRESSION_V2.html)\\ `source_currency`\\ `-` Source currency from column `WAERS` of DDIC database table `TCURC` [`CUKY`](ABENDDIC_BUILTIN_TYPES.html) Field of a [data source](ABENCDS_DATA_SOURCE_V2.html), [SQL-based scalar function](ABENCDS_SQL_SCALAR_FUNCTION.html), [cast expression](ABENCDS_CAST_EXPRESSION_V2.html), [path expression](ABENCDS_PATH_EXPRESSION_V2.html), [parameter](ABENCDS_PARAMETER_V2.html)\\ `target_currency` `-` Target currency from column `WAERS` of DDIC database table `TCURC` [`CUKY`](ABENDDIC_BUILTIN_TYPES.html) Field of a [data source](ABENCDS_DATA_SOURCE_V2.html), [SQL-based scalar function](ABENCDS_SQL_SCALAR_FUNCTION.html), [cast expression](ABENCDS_CAST_EXPRESSION_V2.html), [path expression](ABENCDS_PATH_EXPRESSION_V2.html), [parameter](ABENCDS_PARAMETER_V2.html)\\ `exchange_rate_date` `-` Exchange rate date for column `GDATU` of DDIC database table `TCURR` [`DATS`](ABENDDIC_BUILTIN_TYPES.html) Field of a [data source](ABENCDS_DATA_SOURCE_V2.html), [literal](ABENCDS_LITERAL_V2.html), [parameter](ABENCDS_PARAMETER_V2.html), [SQL-based scalar function](ABENCDS_SQL_SCALAR_FUNCTION.html), [path expression](ABENCDS_PATH_EXPRESSION_V2.html). `exchange_rate_type` *X* Exchange rate type from column `KURST` of DDIC database table `TCURR`, default value: `'M'` [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with length 4 [Literal](ABENCDS_LITERAL_V2.html), [parameter](ABENCDS_PARAMETER_V2.html)\\ `client` *X*, `-` Client whose rules are used to perform the currency conversion. Since client handling takes place implicitly for CDS view entities, it is not possible to explicitly specify any client column as actual parameter. For client-dependent sources, there are two options: \\
\- either, the parameter can be left out and the client column is implicitly added, or \\
\- the actual parameter can be specified as expression, literal, or session variable (but not as field of a data source). \\ [`CLNT`](ABENDDIC_BUILTIN_TYPES.html) [Expression](ABENCDS_EXPRESSIONS_V2.html), [SQL-based scalar function](ABENCDS_SQL_SCALAR_FUNCTION.html), [literal](ABENCDS_LITERAL_V2.html), [session variable](ABENCDS_SESSION_VARIABLE_V2.html) \\
\\
In [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html), only the session variable [`$session.client`](ABENCDS_SESSION_VARIABLE_V2.html) can be passed to `client`. `round` *X* If *X* (default value), the intermediate result of the conversion is rounded to the end result using commercial rounding; else it is truncated [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) [Literal](ABENCDS_LITERAL_V2.html)\\ `decimal_shift` *X* This formal parameter can only be used with data type `CURR` for `amount`.\\
\\
If *X* (default value), the decimal places of the source value are moved as specified by the decimal places of the source currency (see below). [`CHAR`](ABENDDIC_BUILTIN_TYPES.html)\\ [Literal](ABENCDS_LITERAL_V2.html)\\ `decimal_shift_back` *X* This formal parameter can only be used with data type `CURR` for `amount`.\\
\\
If `'X'` (default value), the decimal places of the result are moved as specified by the decimal places of the target currency (see below). [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) [Literal](ABENCDS_LITERAL_V2.html)\\ `error_handling` *X* Error handling. If `'FAIL_ON_ERROR'` (default value), an error raises an exception; if `'SET_TO_NULL'`, the result is set to the [null value](ABENNULL_VALUE_GLOSRY.html); if `'KEEP_UNCONVERTED'`, the source value is not changed. [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with length 20 [Literal](ABENCDS_LITERAL_V2.html) abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html abencds\_builtin\_functions\_v2.html abencds\_special\_functions\_v2.html abencds\_conversion\_functions\_v2.html