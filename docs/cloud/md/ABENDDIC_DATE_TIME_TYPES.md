---
title: "ABENDDIC_DATE_TIME_TYPES"
description: |
  ABENDDIC_DATE_TIME_TYPES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_DATE_TIME_TYPES.htm"
abapFile: "ABENDDIC_DATE_TIME_TYPES.html"
keywords: ["do", "if", "case", "data", "types", "ABENDDIC", "DATE", "TIME", "TYPES"]
---

The following data types in ABAP Dictionary describe date fields, time fields, and time stamp fields:

The following built-in data types in ABAP Dictionary represent real date types, time types, and time stamp types in a database:

Database fields with these types generally contain only valid values for dates, times, and UTC time stamps according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html) in the internal representation of the database. These types are currently only supported by [SAP HANA databases](ABENHANA_DATABASE_GLOSRY.html).

Instances of the following data types in ABAP Dictionary are created on the database using character-like fields:

-   [`DATN`](ABENDDIC_BUILTIN_TYPES.html) for date fields in the database.
-   [`TIMN`](ABENDDIC_BUILTIN_TYPES.html) for time fields in the database.
-   [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) for time stamp fields in the database.

-   The dictionary types `DATN` and `TIMN` are mapped to the character-like ABAP date type and time type [`d`](ABENBUILTIN_TYPES_DATE_TIME.html) or [`t`](ABENBUILTIN_TYPES_DATE_TIME.html). The built-in ABAP type [`utclong`](ABENBUILTIN_TYPES_DATE_TIME.html), on the other hand, provides a real time stamp type for `UTCLONG`.
-   The initial value of `UTCLONG` is denoted as "Empty" that is mapped to an [empty time stamp](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/3f81ccc7e35d44cbbc595c7d552c202a) on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) and to the initial value of [`utclong`](ABENBUILTIN_TYPES_DATE_TIME.html) in ABAP.
-   The types `DATN` and `TIMN` are recommended for saving individual dates and times. Access to dates and times in the corresponding functions and expressions is optimized for these types. In the case of the dictionary types `DATS` and `TIMS`, such access may not be possible at all or they may need to be converted to real date and time types.

-   [`DATS`](ABENDDIC_BUILTIN_TYPES.html) for [date fields](ABENDATE_FIELD_GLOSRY.html)
-   From a technical perspective, the built-in data type `DATS` describes objects of the type `CHAR` with a length of 8 characters. It is intended to be used for a [calendar date](ABENCALENDAR_DATE_GLOSRY.html) with the format `YYYYMMDD`. However, there is no validity check when writing to or reading from database fields of this type.
-   [`TIMS`](ABENDDIC_BUILTIN_TYPES.html) for [time fields](ABENTIME_FIELD_GLOSRY.html)
-   From a technical perspective, the built-in data type `TIMS` describes objects of the type `CHAR` with a length of 6 characters. It is intended to be used for a [time](ABENDAY_TIME_GLOSRY.html) with the format `HHMMSS`. However, there is no validity check when writing to or reading from database fields of this type.
-   [`ACCP`](ABENDDIC_BUILTIN_TYPES.html) for posting periods
-   From a technical perspective, the built-in data type `ACCP` describes objects of the type `CHAR` with a length of 6 characters. It is intended to be used for a posting period with the format `YYYYMM`. This is not checked however when writing to or reading from database fields of this type.

-   If possible, the types `DATN` and `TIMN` should be used.

abenabap.html abenabap\_dictionary.html abenddic\_builtin\_types\_intro.html abenddic\_builtin\_types\_prop.html abenddic\_builtin\_types\_special.html