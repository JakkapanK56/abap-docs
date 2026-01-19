---
title: "ABENNEWS-777-TYPES"
description: |
  ABENNEWS-777-TYPES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-777-TYPES.htm"
abapFile: "ABENNEWS-777-TYPES.html"
keywords: ["class", "data", "types", "ABENNEWS", "777", "TYPES"]
---

The new built-in [time stamp type](ABENTIMESTAMP_TYPE_GLOSRY.html)\\ [`utclong`](ABENBUILTIN_TYPES_DATE_TIME.html) makes it possible to declare [time stamp fields](ABENTIMESTAMP_FIELD_GLOSRY.html) for [UTC time stamps](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html). The new data type is taken into account in all relevant positions. Important points are:

Time stamp fields must meet an [alignment requirement](ABENALIGNMENT.html). Their memory address must be divisible by eight.

-   The associated data type in ABAP Dictionary was introduced with the name [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).
-   The [value range](ABENBUILTIN_TYPES_DATE_TIME.html) of the new data type are [time stamps](ABENTIME_STAMP_GLOSRY.html) between *0001-01-01T00:00:00.0000000* and *9999-12-31T23:59:59.9999999* plus a special initial value.
-   In assignments and comparisons, the data type `utclong` can only be [converted](ABENCONVERSION_TYPE_UTCLONG.html) to the types `c` and `string`, and vice versa. In assignments, any attempt to perform another conversion raises an exception of the new class `CX_SY_CONVERSION_NOT_SUPPORTED`.
-   Time stamp fields are formatted specially in [string templates](ABENSTRING_TEMPLATE_GLOSRY.html).
-   There is a [mapping rule](ABENABAP_XSLT_ASXML_ELEMENTARY.html) for [asXML](ABENASXML_GLOSRY.html).

abenabap.html abennews.html abennews-77.html abennews-777.html