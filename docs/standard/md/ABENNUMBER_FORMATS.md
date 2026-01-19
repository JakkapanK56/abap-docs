---
title: "ABENNUMBER_FORMATS"
description: |
  ABENNUMBER_FORMATS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNUMBER_FORMATS.htm"
abapFile: "ABENNUMBER_FORMATS.html"
keywords: ["select", "do", "if", "try", "data", "ABENNUMBER", "FORMATS"]
---

The country-specific format of numbers is determined by the fixed values of the [DDIC domain](ABENDOMAIN_GLOSRY.html)\\ `XUDCPFM`. The mapping between countries and formats happens in a system table (column `XDEZP` of the system table `T005X`) The following table shows the decimal and thousands separators represented by the fixed values of the domain.

The setting for the decimal separator also affects the formatting of UTC time stamps in [time stamp fields](ABENTIMESTAMP_FIELD_GLOSRY.html).

Output of a number and time stamp with different separators. By specifying a country that s available in the system table (`T005X`), the respective country-specific format is selected.

For the representation of a number in all possible number formats, see the associated [example with string templates](ABENSTRING_TEMPLATE_NUMBER_ABEXA.html).

DATA pack TYPE p DECIMALS 2 VALUE '1234.56'. \\nFINAL(utcl) = utclong\_current( ). \\n\\ \\ncl\_demo\_output=>display( \\n |\\{ pack COUNTRY = 'DE ' \\}\\\\n\\{ \\n pack COUNTRY = 'US ' \\}\\\\n\\{ \\n utcl COUNTRY = 'DE ' \\}\\\\n\\{ \\n utcl COUNTRY = 'US ' \\}| ). **Fixed Value of `XUDCPFM`** **Decimal Separator**\\ **Thousands Separator**\\ blank "," "." `X` "." "," `Y` "," blank abenabap.html abenabap\_reference.html abenlanguage.html abencountry.html abencountry\_formats.html