---
title: "ABAPPARAMETERS_TYPE"
description: |
  ABAPPARAMETERS_TYPE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPARAMETERS_TYPE.htm"
abapFile: "ABAPPARAMETERS_TYPE.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "ABAPPARAMETERS", "TYPE"]
---

[Short Reference](ABAPPARAMETERS_SHORTREF.html)

`... \{ TYPE type [DECIMALS dec]\ \}`\\ 
  `|\ \{ LIKE dobj \}`\\ 
  `|\ \{ LIKE (name) \} ...`

[1. `... TYPE type [DECIMALS dec]`](#ABAP_ALTERNATIVE_1@2@)

[2. `... LIKE dobj`](#ABAP_ALTERNATIVE_2@2@)

[3. `... LIKE (name)`](#ABAP_ALTERNATIVE_3@2@)

These additions define the data type of the selection parameter. If none of the additions is specified, the selection parameter has the type `c`. The data type can be defined using a static reference to an existing data type `type`, using a static reference to a data object `dobj`, or using a dynamic reference to a data type from the ABAP Dictionary in `name`.

If the addition [`NO-DISPLAY`](ABAPPARAMETERS_SCREEN.html) is not specified, the data type of a selection parameter must be elementary and [flat](ABENFLAT_GLOSRY.html), except for `string`, and the numeric type `f` is not allowed. If the addition `NO-DISPLAY` is specified, any data types, except [reference types](ABENSTATIC_TYPE_GLOSRY.html) and [enumerated types](ABENENUM_TYPE_GLOSRY.html), are possible.

If there is a reference to data types from the ABAP Dictionary, the selection parameter adopts all screen-relevant properties defined here. [Conversion exits](ABENCONVERSION_EXIT_GLOSRY.html) defined in the domain may be executed during the data transport from and to the input field. The text defined in the ABAP Dictionary can be inherited as a selection text. It should be noted, however, that the input field on the selection screen is linked with a global data object of the program and does not have a real reference to the ABAP Dictionary, as is the case for dynpro fields created in the Screen Painter with reference to the dictionary. This has a particular effect on automatic support for input help (F4) and value checking. In comparison to general dynpros, input help functionality is limited here in such a way that dependencies between fields and previously entered data are not respected. A value check is not performed automatically but can be executed using the addition [`VALUE CHECK`](ABAPPARAMETERS_VALUE.html).

This addition gives the selection parameter the data type `type`. `type` can be specified as:

If the built-in ABAP type `p` is specified, `DECIMALS` can be used to define the number of [digits after the decimal point](ABENDECIMAL_PLACE_GLOSRY.html)\\ `dec`. If `DECIMALS` is not specified, the number of decimal places is 0. If `DECIMALS` is specified, the same applies as to the statement [`TYPES`](ABAPTYPES_SIMPLE.html).

If `type` is a type from the ABAP Dictionary that has the type `CHAR`, length 1, and the [fixed values](ABENFIXED_VALUE_GLOSRY.html)\\ *X* and blank in the domain, the input field on the selection screen is displayed automatically as if the addition [`AS CHECKBOX`](ABAPPARAMETERS_SCREEN.html) were specified.

[Enumerated types](ABENENUM_TYPE_GLOSRY.html) cannot be specified, regardless of the [base type](ABENBASE_TYPE_GLOSRY.html).

Declaration of a selection parameter with reference to the component `carrid` of the database table `spfli`. On the selection screen, a three-character input field with a callable field help and input help is created.

Using this addition, the selection parameter applies all the properties of a data object `dobj` already declared, in particular a possible reference to the ABAP Dictionary. The same applies to `dobj` as to [`TYPES ... LIKE`](ABAPTYPES_REFERRING.html), except that the specified data object can be elementary and [flat](ABENFLAT_GLOSRY.html), except for `string`, it cannot have the type `f` (unless [`NO-DISPLAY`](ABAPPARAMETERS_SCREEN.html) is used) and cannot be an [enumerated type](ABENENUMERATED_TYPE_GLOSRY.html).

This addition creates the data object `para` with the data type `c` and the length 132. The input field is displayed on the selection screen, but with a length, field help, and input help appropriate for the data type specified in `name`.

`name` expects a flat character-like data object containing the name of a component in a flat structure from the ABAP Dictionary in uppercase letters when the selection screen is called. The following can be specified for `name`:

A text field literal can be specified for `name`, but its content is not evaluated. If the [text pool](ABENTEXT_POOL_GLOSRY.html) currently loaded does not contain a selection text for the selection parameter, the output field displays the corresponding field label from the ABAP Dictionary. When the data is transported from the input field to the data object `para`, the content is converted in such a way as if it were assigned by the respective ABAP data type (no formatting characters, decimal separation character is period symbol, data format is *yyyymmdd*, and so on).

If the content of `name` is not a component structure from the ABAP Dictionary or a literal is specified for `name`, the input field is displayed according to the actual type of the selection parameter. If no selection text is created for the selection parameter in the currently loaded text pool, the output field contains the text *Dynamic Parameter*.

The field `name` of the program in which the selection screen is defined is used. If the selection screen is defined in a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html), the field `name` of the [database program](ABENDATABASE_PROGRAM_GLOSRY.html) is used, even if the selection screen from the assigned [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) is displayed.

Dynamic formatting of the input field of the selection parameter `p_dyn`. On the selection screen, a three-character input field with the input help for the column `carrid` in the database table `spfli` is displayed. If the selection parameter does not have a selection text, the text *Airline Carrier* is displayed in the output field.

-   The built-in ABAP types, except for `b`, `s`, `f`, and `xstring`.
-   A non-generic data type from the ABAP Dictionary, a [CDS simple type](ABENCDS_SIMPLE_TYPE_GLOSRY.html), a non-generic public data type of a global class, or a data type from the same program, already defined using [`TYPES`](ABAPTYPES.html), and which is elementary and not of the type `f` or `xstring` (unless [`NO-DISPLAY`](ABAPPARAMETERS_SCREEN.html) is used) and which is not an [enumerated type](ABENENUM_TYPE_GLOSRY.html).

-   `LIKE` can be used to reference the public attributes of global classes.
-   For reasons of compatibility, `LIKE` can also be used for an [obsolete type reference](ABENLIKE_OBSOLETE.html).

-   Constant
-   If the data object `name` is specified as a constant, it can be evaluated statically, and the specified component is identified as the used object.
-   Variable
-   If the data object `name` is specified as a variable, it is specified only dynamically, and the content is not evaluated statically.

PARAMETERS p\_carrid TYPE spfli-carrid. DATA comp TYPE c LENGTH 61. \\n\\ \\nPARAMETERS p\_dyn LIKE (comp). \\n\\ \\nINITIALIZATION. \\n comp = 'SPFLI-CARRID'. abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapparameters.html