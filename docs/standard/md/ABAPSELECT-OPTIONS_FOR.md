---
title: "ABAPSELECT-OPTIONS_FOR"
description: |
  ABAPSELECT-OPTIONS_FOR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT-OPTIONS_FOR.htm"
abapFile: "ABAPSELECT-OPTIONS_FOR.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "ABAPSELECT", "OPTIONS", "FOR"]
---

[Short Reference](ABAPSELECT-OPTIONS_SHORTREF.html)

`... FOR \{dobj|(name)\} ...`

[1. `... FOR dobj`](#ABAP_ALTERNATIVE_1@2@)

[2. `... FOR (name)`](#ABAP_ALTERNATIVE_2@2@)

This addition determines the data type of the columns `low` and `high` in the [selection table](ABENSELECTION_TABLE_GLOSRY.html). The data type can be defined using a static reference to an existing data object `dobj` or by a dynamic reference to a data type from the ABAP Dictionary in `name`.

If the addition [`NO-DISPLAY`](ABAPSELECT-OPTIONS_SCREEN.html) is not specified, the data type of the columns `low` and `high` in the selection table must be elementary and [flat](ABENFLAT_GLOSRY.html) and the numeric type `f` is not allowed. If the addition `NO-DISPLAY` is specified, any flat data types, except [enumerated types](ABENENUM_TYPE_GLOSRY.html), are possible.

When referencing data types from the ABAP Dictionary, the [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html) inherits all the screen-relevant properties defined there. During data transport to and from the input fields, any [conversion exits](ABENCONVERSION_EXIT_GLOSRY.html) defined in the domain are executed. The text defined in the ABAP Dictionary can be inherited as a selection text. It should be noted, however, that the input fields on the selection screen are linked with a global data object of the program and are not given a real reference to the dictionary, in contrast to dynpro fields, which are created in the Screen Painter with reference to the dictionary. This has a particular effect on automatic support for input help (F4) and value checking. In comparison to general dynpros, input help functionality is limited here in such a way that dependencies between fields and previously entered data are not respected. No automatic value checking is performed.

If this addition is specified, the columns `low` and `high` of the selection table inherit all the properties of a data object `dobj` that has already been declared, in particular any reference to the ABAP Dictionary. `dobj` expects a data object that is elementary and flat and not of the type `f` (unless [`NO-DISPLAY`](ABAPSELECT-OPTIONS_SCREEN.html) is used) and is not an [enumerated type](ABENENUM_TYPE_GLOSRY.html).

The data objects that can be referred to using `FOR` include the public attributes of global classes as well as those of their own program.

Typical declaration and application of a selection criterion.

This addition creates the columns `low` and `high` in the selection table with data type `c` and length 45. But the input fields are displayed on the selection screen with a length, field help, and input help appropriate for the data type specified in `name`.

`name` expects a [flat](ABENFLAT_GLOSRY.html) character-like data object that contains the name of a component in a flat structure from the ABAP Dictionary in uppercase letters when the selection screen is called. The following can be specified for `name`:

A text field literal can be specified for `name`, but its content is not evaluated. If the [text pool](ABENTEXT_POOL_GLOSRY.html) currently loaded does not contain a selection text for the selection criterion, the output field displays the corresponding field label from the ABAP Dictionary. When data is transported from the input field to the selection table, the content is converted as if it were assigned by the corresponding ABAP data type (no formatting characters, period as a decimal separator, date format *yyyymmdd*, and so on).

If the content of `name` is not a structure component in the ABAP Dictionary, the input fields are displayed according to the actual type of the columns `low` and `high`. This also applies if a literal is specified for `name`. If a selection text for the criterion is not created in the text pool currently loaded, the output field contains the text *Generic Selection Option*.

A dynamic reference to a data type is not possible in a selection include for a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html).

Dynamic design of the selection criterion `selcrit` on selection screen `500` based on the entries in the [standard selection screen](ABENSTANDARD_SELSCREEN_GLOSRY.html) for an executable program.

-   Constant
-   If the data object `name` is specified as a constant, it can be evaluated statically, and the specified component is identified as the used object.
-   Variable
-   If the data object `name` is specified as a variable, it is specified only dynamically, and the content is not evaluated statically.

DATA spfli\_wa TYPE spfli. \\n\\ \\nSELECT-OPTIONS s\_carrid FOR spfli\_wa-carrid. \\n\\ \\nSELECT \* \\n FROM spfli \\n WHERE carrid IN @s\_carrid \\n INTO @spfli\_wa. \\n ... \\nENDSELECT. PARAMETERS: dbtab TYPE c LENGTH 30, \\n column TYPE c LENGTH 30. \\n\\ \\nDATA name(80) TYPE c. \\n\\ \\nSELECTION-SCREEN BEGIN OF SCREEN 500 AS WINDOW. \\nSELECT-OPTIONS selcrit FOR (name). \\nSELECTION-SCREEN END OF SCREEN 500. \\n\\ \\nname = dbtab && '-' && column. \\n\\ \\nCALL SELECTION-SCREEN 500 STARTING AT 10 10. abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselect-options.html