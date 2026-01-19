---
title: "ABENDDIC_DOMAINS_SEMA"
description: |
  ABENDDIC_DOMAINS_SEMA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DOMAINS_SEMA.htm"
abapFile: "ABENDDIC_DOMAINS_SEMA.html"
keywords: ["do", "if", "case", "class", "data", "types", "ABENDDIC", "DOMAINS", "SEMA"]
---

Domains can have the following semantic properties:

The domain `S_CLASS` with the type `CHAR` describes the possible classes in a flight booking. The value range of the domain is defined by the fixed values *C* (Business Class), *F* (First Class), and *Y* (Economy Class). This means that only the values *C*, *F*, and *Y* can be entered for all dynpro fields that refer to this domain.

-   **Short text**
-   A descriptive short text must be specified when a domain is created.
-   **Documentation**
-   Documentation can optionally be assigned. This documentation can be read as required.
-   **Output properties**
-   The output properties affect how fields defined with reference to a data element that references the domain are displayed on [dynpros or Web Dynpros](ABENDYNPRO_GLOSRY.html) or when formatted with the statements [`WRITE`](ABAPWRITE-.html) or [`WRITE TO`](ABAPWRITE_TO.html).

-   **Output length**
-   The optional output length overrides the [implicit output length](ABENWRITE_OUTPUT_LENGTH.html) as assigned to the built-in elementary data types. The possible output length is determined by the data type and is checked by the ABAP Dictionary [tools](ABENDDIC_TOOLS.html). If a format is assigned to the built-in data type used, the output length should be long enough for all formatting characters.
-   **Output style**
-   A domain with the type of a decimal floating point number must be assigned an [output style](ABENDDIC_DECIMAL_FLOATING_POINT.html).
-   **Conversion exit**
-   If a domain is assigned to a [conversion exit](ABENCONVERSION_EXIT_GLOSRY.html), the associated [conversion routine](ABENCONVERSION_ROUTINE_GLOSRY.html) (function module) `..._INPUT` for each input in a [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html) and `..._OUTPUT` for each output using a dynpro field that is defined with reference to a data element that itself references the domain is called. The function module `..._OUTPUT` is executed when a data object is formatted using [`WRITE`](ABAPWRITE-.html) or [`WRITE TO`](ABAPWRITE_TO.html) when the data object in question is declared with reference to a data element that itself references the domain.
-   **Sign**
-   If a [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html) has a numeric DDIC data type, the *Sign* property must be set so that negative numbers can be displayed on the screen. This property can only be specified using a domain.
-   **Lowercase letters**
-   If a [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html) has a character-like DDIC data type, the *Lowercase Letters* property can be set so that these letters are not transformed to uppercase. This property can only be specified using a domain.
-   **Time format**
-   For the data type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html), a 24-hour or 12-hour format can be set for displaying dynpro fields in accordance with the ABAP [time formats](ABENTIME_FORMATS.html).

-   **Value range**
-   Value ranges for fields on user interfaces can be defined for domains of the [built-in types](ABENDDIC_BUILTIN_TYPES.html)\\ `CHAR`, `NUMC`, `DEC`, `INT1`, `INT2`, `INT4`, and `INT8`. For domains of the types `CHAR` and `NUMC`, this range specifies the valid input values in dynpro fields defined with reference to a data element of such a domain. The value range is evaluated for all types for the [input help](ABENINPUT_HELP_GLOSRY.html) of [dynpro fields](ABENDYNPRO_FIELD_GLOSRY.html) if no input help with a higher priority exists. The value range is ignored for the content of data objects in ABAP programs or of DDIC database table fields that reference a data element with a domain of this type. A value range can be defined using the following:

-   Fixed values
-   Intervals

-   Fixed values and intervals can be combined in any way. The following can be specified as fixed values and interval limits:

-   Alphanumeric characters including blanks and special characters for the type `CHAR`. The length is restricted to 10.
-   Positive integers (including 0) for the types `NUMC`, `INT1`, `INT2`, `INT4`, `INT8`, and `DEC` within the [value range](ABENDDIC_BUILTIN_TYPES.html) defined by the technical properties.

-   A short text can be specified for each fixed value or interval, which is then displayed when used in an input help. The fixed values of a domain can be specified as special kinds of [literals](ABENCDS_LITERAL_V1.html) in a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). The fixed values provided by SAP can be extended by customers or partners using [fixed value appends](ABENDDIC_FIXED_VALUE_APPENDS.html).
-   **Value table**
-   A value table can be a DDIC database table that is used as a default for the [check table](ABENDDIC_DATABASE_TABLES_CHECKTAB.html) in cases where a table field of a DDIC database table that references a data element with this domain is included in a [foreign key](ABENDDIC_DATABASE_TABLES_FORKEY.html). Specifying a value table alone does not trigger a check.

abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html abenddic\_data\_elements.html abenddic\_domains.html