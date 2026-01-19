---
title: "ABENCONVERSION_EXITS"
description: |
  ABENCONVERSION_EXITS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONVERSION_EXITS.htm"
abapFile: "ABENCONVERSION_EXITS.html"
keywords: ["do", "if", "case", "data", "types", "ABENCONVERSION", "EXITS"]
---

A [conversion exit](ABENCONVERSION_EXIT_GLOSRY.html) overrides standard conversions that take place when values are passed from an ABAP data object to a dynpro field or from a dynpro field to an ABAP data object and in the formatting of data using the statements [`WRITE`](ABAPWRITE-.html) and [`WRITE TO`](ABAPWRITE_TO.html).

A conversion exit has a five-character name `CNVRT` and can be used as follows:

A conversion exit is implemented in two function modules as [conversion routines](ABENCONVERSION_ROUTINE_GLOSRY.html), one for input and one for output, with the following naming conventions:

The conversion routines of a conversion exit are executed as follows:

The function modules can of course be called and tested in the usual way.

In addition to the naming conventions, the function modules implementing conversion exits must meet the following requirements:

Any exceptions raised in conversion routines always terminate the program. Conversion routines can only be debugged using the two-process debugger.

The function modules `CONVERSION_EXIT_SDURA_INPUT` and `CONVERSION_EXIT_SDURA_OUTPUT` are the conversion routines of the conversion exit `SDURA`. During output, this conversion exit transforms seconds to minutes and minutes to hours, and during input it transforms minutes to seconds and hours to minutes.

-   As a semantic property of a [DDIC domain](ABENDOMAIN_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html).
-   As a property of a dynpro field defined in the [Screen Painter](ABENSCREEN_PAINTER_GLOSRY.html).
-   With the addition [`USING EDIT MASK`](ABAPWRITE_TO_OPTIONS.html) of the `WRITE` statement.

-   A function module called `CONVERSION_EXIT_CNVRT_INPUT` performs the conversion from the display format to the ABAP representation, where `CNVRT` is the five-character name of the conversion exit.
-   A function module called `CONVERSION_EXIT_CNVRT_OUTPUT` performs the conversion from the ABAP representation to the display format, where `CNVRT` is the five-character name of the conversion exit.

-   If a [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html) is defined using a a reference to a domain with a conversion exit or if a conversion exit is assigned to the field directly in its properties, the `INPUT` conversion routine is executed automatically when the input in the associated screen field is passed to ABAP and the `OUTPUT` conversion routine is executed automatically when ABAP output is passed to the screen field. In each case, the converted content is used.
-   If an [ABAP data object](ABENDATA_OBJECT_GLOSRY.html) is declared with reference to a domain with a conversion exit, the `OUTPUT` conversion routine is executed by default when formatting the content using [`WRITE`](ABAPWRITE-.html) or [`WRITE TO`](ABAPWRITE_TO.html) and the converted content is output or assigned. The default behavior can be overridden using the addition [`USING [NO] EDIT MASK`](ABAPWRITE_TO_OPTIONS.html).

-   Both function modules should be implemented in the same [function pool](ABENFUNCTION_POOL_GLOSRY.html) and this group cannot contain further function modules.
-   Both function modules must have the following mandatory parameters:

-   The input parameter `INPUT` for the value to be converted
-   The output parameter `OUTPUT` for the converted value

-   In the `INPUT` conversion, the parameter `INPUT` should be generic, and in the `OUTPUT` conversion, the parameter `OUTPUT` should generic because the type of the assigned dynpro field or ABAP field can change depending on how it is used.
-   An optional input parameter with the predefined name `REFVAL` can be created. When a dynpro field of the type [`CURR`](ABENDDIC_BUILTIN_TYPES.html) or [`QUAN`](ABENDDIC_BUILTIN_TYPES.html) is converted, this parameter is automatically given the value of a an associated reference field of the type [`CUKY`](ABENDDIC_BUILTIN_TYPES.html) or [`UNIT`](ABENDDIC_BUILTIN_TYPES.html). If [`WRITE USING EDIT MASK`](ABAPWRITE_TO_OPTIONS.html) is used, the input parameter `REFVAL` is not filled.
-   Other optional input parameters can also be used but are not filled automatically.
-   Statements that interrupt the program flow or terminate an [SAP LUW](ABENSAP_LUW_GLOSRY.html) cannot be executed in the function modules. In `OUTPUT` conversions, only [termination messages](ABENTERMINATION_MESSAGE_GLOSRY.html) are valid. In `INPUT` conversions, [termination messages](ABENTERMINATION_MESSAGE_GLOSRY.html), [error messages](ABENERROR_MESSAGE_GLOSRY.html), and (less useful) [status message](ABENSTATUS_MESSAGE_GLOSRY.html) can all be sent. Error messages result in an error dialog.
-   The effects of the conversion are described in the documentation.

-   It is important that `OUTPUT` conversions have good performance, since an `OUTPUT` function module can be called very often in list output.
-   Conversion routines are subject to the [rule](ABENINTERN_EXTERN_PROC_CALL_GUIDL.html) that no external subroutines should be called, since in this case their assignment to a [program group](ABENPROGRAM_GROUP_GLOSRY.html) cannot be identified.

abenabap.html abenabap\_reference.html abenabap\_screens.html