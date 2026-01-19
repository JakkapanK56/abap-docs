---
title: "ABENBUILTIN_TYPES_DATE_TIME"
description: |
  ABENBUILTIN_TYPES_DATE_TIME - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBUILTIN_TYPES_DATE_TIME.htm"
abapFile: "ABENBUILTIN_TYPES_DATE_TIME.html"
keywords: ["class", "data", "types", "ABENBUILTIN", "TYPES", "DATE", "TIME"]
---

The data objects of the date types, time types, and time stamp types are used to store calendar dates, times, and UTC time stamps.

Declaration of date fields and time fields of the built-in ABAP types `d` and `t` and examples for their use. The declarations are made with the statement [`DATA`](ABAPDATA.html) and using the declaration operator [`DATA`](ABENDATA_INLINE.html).

Creation of an UTC time stamp of the type `utclong` with the built-in function [`utclong_current`](ABENUTCLONG_CURRENT.html) and its conversion to date and time fields.

-   Date types and time types `d` and `t`

-   The date types and time types are used to handle calendar date and time values. For more information on how to use them and their special handling, see [Date Fields and Time Fields](ABENCHARACTER_DATE_TIME.html).
-   From a technical perspective, the data types `d` and `t` are flat character-like types. The content of their data objects is stored according to the current [system code page](ABENSYSTEM_CODEPAGE_GLOSRY.html).
-   As character-like data types, data objects of the data types `d` and `t` can be used like text fields of the type `c`. This applies in particular to structures with components of the types `d` and `t`.
-   The generic type [`clike`](ABENBUILT_IN_TYPES_GENERIC.html) also includes the types `d` and `t`.
-   Data objects of the types `d` and `t` behave like character-like objects in character-like operand positions and numeric in numeric operand positions.
-   The data types `d` and `t` are the built-in ABAP types that correspond to the special types [`DATS`](ABENDDIC_DATE_TIME_TYPES.html), [`DATN`](ABENDDIC_DATE_TIME_TYPES.html), and [`TIMS`](ABENDDIC_DATE_TIME_TYPES.html), [`TIMN`](ABENDDIC_DATE_TIME_TYPES.html) of the ABAP Dictionary.
-   The valid values of the data types `d` and `t` are a subset of their value range. ABAP statements that work with data objects of these types are only guaranteed to function correctly for operands with valid values.

-   Time stamp type `utclong`

-   The time stamp type `utclong` represented internally by integer numbers replaces the [time stamps](ABENTIME_STAMPS_PACKED.html) represented by packed numbers as the type for real [time stamp fields](ABENUTCLONG.html).
-   The data type `utclong` is the built-in ABAP type that corresponds to the special type [`UTCLONG`](ABENDDIC_DATE_TIME_TYPES.html) in ABAP Dictionary.
-   The system class [`CL_ABAP_UTCLONG`](ABENTIMESTAMP_SYSTEM_CLASS.html) for UTC time stamps in time stamp fields contains the minimum and maximum values of the type `utclong` as attributes.
-   Invalid values in time stamps, that is integer numbers outside of the string of valid values of [UTC time stamps](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html), can be created using [casting](ABENCAST_CASTING_GLOSRY.html).
-   There is no UTC time stamp for the days missing due to the switch from the Julian to the Gregorian calendar. The time stamp *1582-10-04T23:59:59.9999999* is followed by the time stamp *1582-10-15T00:00:00.0000000*.
-   The [initial value](ABENUTCLONG.html#abenutclong-2--of--utclong--is-a-special-value--empty---that-is-internally-by-integer-number-0---data--tomorrow-type-d----n-next--hour-type-t----n-----nfinal-today----cl--demo--date--time--get--user--date-------nfinal-now----cl--demo--date--time--get--user--time-------n-----ntomorrow---today---1----nnext--hour-----now---3600-----3600----3600--final-out----cl--demo--output--new-------n-----nfinal-ts----utclong--current-------n-----nfinal-time--zone----cl--demo--date--time--get--user--time--zone-------nconvert-utclong-ts---n-into-date-final-dat--time-final-tim----n-time-zone-time--zone----n-----nout--write----n------ts--------n-------n------dat--------n-------n------tim-----------n-----nout--display-------type-----length-----standard-length-----meaning-----data-object-----type-----value-range-----initial-value----d--8-characters--------date-type--abendate-type-glosry-html------date-field--abendate-field-glosry-html---t--6-characters--------time-type--abentime-type-glosry-html------time-field--abentime-field-glosry-html---utclong--8-byte--------time-stamp-type--abentimestamp-type-glosry-html---time-stamp-field--abentimestamp-field-glosry-html---d--any-eight-unicode-characters-that-can-be-encoded-in--ucs-2--abenucs2-glosry-html---valid-values-are-only-digits-that-are-valid-as-dates-in-accordance-with-the-calendar-rules-in-the-format--yyyymmdd----yyyy---year---0001-to-9999---mm---month---01-to-12---dd---day---01-to-31-----00000000---t--any-six-unicode-characters-that-can-be-encoded-in--ucs-2--abenucs2-glosry-html---valid-values-are-only-digits-that-are-valid-as-times-in-accordance-with-the-24-hour-clock-range-in-the-format--hhmmss----hh---hours---00-to-23---mm---minutes---00-to-59---ss---seconds---00-to-59---000000---utclong--internal-8-byte-integer-representation-of-an--utc-time-stamp--abenutc-timestamp-glosry-html--according-to-the--posix-standard--abenposix-timestamp-glosry-html--exact-to-100-nanoseconds--in-iso-8601-notation-between--0001-01-01t00-00-00-0000000--and--9999-12-31t23-59-59-9999999---there-are-3-155-380-704-000-000-000-real-values-and-one-special--initial-value--abenutclong-html-@ITOC@@ABENUTCLONG_2). [empty](ABENUTCLONG.html#@@ITOC@@ABENUTCLONG_2) abenabap.html abenabap\_reference.html abenbuilt\_in.html abenbuilt\_in\_types.html abenbuilt\_in\_types\_complete.html