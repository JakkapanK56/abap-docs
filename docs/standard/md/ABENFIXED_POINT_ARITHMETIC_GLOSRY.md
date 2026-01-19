---
title: "ABENFIXED_POINT_ARITHMETIC_GLOSRY"
description: |
  ABENFIXED_POINT_ARITHMETIC_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENFIXED_POINT_ARITHMETIC_GLOSRY.htm"
abapFile: "ABENFIXED_POINT_ARITHMETIC_GLOSRY.html"
keywords: ["if", "data", "types", "ABENFIXED", "POINT", "ARITHMETIC", "GLOSRY"]
---

Calculation with [packed numbers](ABENPACKED_NUMBER_GLOSRY.html) ([data type](ABENDATA_TYPE_GLOSRY.html)\\ [`p`](ABENBUILTIN_TYPES_NUMERIC.html)). Is calculated with an internal accuracy of 31 or (if not sufficient) 63 [places](ABENPLACE_GLOSRY.html). [Decimal places](ABENDECIMAL_PLACE_GLOSRY.html) are rounded arithmetically, if necessary. Places before the [decimal point](ABENDECIMAL_POINT_SEPARAT_GLOSRY.html) are never lost if a calculation is completed successfully. As a [program property](ABENPROGRAM_PROPERTY_GLOSRY.html), the *fixed point arithmetic* determines whether for numbers of type [`p`](ABENBUILTIN_TYPES_NUMERIC.html) the decimal point is respected in operations or not. The disabling of this program property is [obsolete](ABENNON_FIXED_POINT_OBSOLETE.html).

[**\-> More about**](ABENARITH_TYPE.html)

ABENABALA\_GLOSSARY.html