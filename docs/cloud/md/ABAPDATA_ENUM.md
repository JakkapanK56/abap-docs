---
title: "ABAPDATA_ENUM"
description: |
  ABAPDATA_ENUM - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDATA_ENUM.htm"
abapFile: "ABAPDATA_ENUM.html"
keywords: ["do", "data", "types", "ABAPDATA", "ENUM"]
---

`DATA enum_var \{\ \{TYPE enum_type |EnumType\}`\\ 
              `|\ \{LIKE enum_dobj\}\ \}`\\ 
              ``[`[VALUE val|\{IS INITIAL\}]`](ABAPDATA_OPTIONS.html)``\\ 
              ``[`[READ-ONLY]`](ABAPDATA_OPTIONS.html).``

Declaration of an [enumerated variable](ABENENUMERATED_VARIABLE_GLOSRY.html). An enumerated variable is declared by:

The data type of an enumerated variable is its enumerated type. The enumerated type prescribes the [enumerated values](ABENENUMERATED_VALUE_GLOSRY.html) that an enumerated variable can contain. The [assignment rules for enumerated types](ABENCONVERSION_ENUMERATED.html) and the allowed operand positions for enumerated variables ensure that only allowed enumerated values can be assigned to an enumerated variable.

The technical type of the enumerated value in an enumerated variable is the [base type](ABENBASE_TYPE_GLOSRY.html) of the enumerated type. It is always a flat elementary type with a maximum length of 16 bytes.

In this example, three enumerated variables are declared:

Each enumerated variable is assigned a valid value. The output shows the name of the assigned enumerated constant and the actual value for each enumerated variable. A special rule for the conversion operator [`CONV`](ABENCONV_CONSTRUCTOR_ENUM.html) is used for the latter.

-   `TYPE` reference to an [enumerated type](ABENENUM_TYPE_GLOSRY.html)\\ [`enum_type`](ABAPTYPES_ENUM.html) defined in ABAP, or to an enumerated type [`EnumType`](ABENCDS_DEFINE_ENUM_TYPE.html) defined in ABAP CDS.
-   `LIKE` reference to a data object with [enumerated type](ABENENUM_TYPE_GLOSRY.html). The following options are possible:

-   [Enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html) of an enumerated type
-   Existing enumerated variables

-   `color1` by a `TYPE` reference to the enumerated type `colors`
-   `color2` by a `LIKE` reference to `color1`
-   `color3` by an [inline declaration](ABENDATA_INLINE.html) with reference to the enumerated type `colors`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF ENUM colors, \\n red, blue, green, \\n END OF ENUM colors. \\n\\ \\nDATA color1 TYPE colors VALUE red. \\n\\ \\nDATA color2 LIKE color1. \\ncolor2 = blue. \\n\\ \\nDATA(color3) = VALUE colors( ). \\ncolor3 = green. \\n\\ \\nout->write( \\n |\\{ color1 \\}: \\{ CONV i( color1 ) \\}\\\\n| && \\n |\\{ color2 \\}: \\{ CONV i( color2 ) \\}\\\\n| && \\n |\\{ color3 \\}: \\{ CONV i( color3 ) \\}| ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html abapdata.html