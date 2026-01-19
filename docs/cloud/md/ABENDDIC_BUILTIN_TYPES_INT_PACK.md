---
title: "ABENDDIC_BUILTIN_TYPES_INT_PACK"
description: |
  ABENDDIC_BUILTIN_TYPES_INT_PACK - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_BUILTIN_TYPES_INT_PACK.htm"
abapFile: "ABENDDIC_BUILTIN_TYPES_INT_PACK.html"
keywords: ["do", "if", "case", "data", "types", "ABENDDIC", "BUILTIN", "TYPES", "INT", "PACK"]
---

The following dictionary data types are available to describe numeric types, except for decimal floating point numbers:

-   [`INT1`](ABENDDIC_BUILTIN_TYPES.html), [`INT2`](ABENDDIC_BUILTIN_TYPES.html), [`INT4`](ABENDDIC_BUILTIN_TYPES.html), [`INT8`](ABENDDIC_BUILTIN_TYPES.html) for [integer numbers](ABENINTEGER_NUMBER_GLOSRY.html)
-   These types describe general 1-byte, 2-byte, 4-byte, and 8-byte integers. The dictionary types `INT1` and `INT2` are assigned to the ABAP types [`b`](ABENBUILTIN_TYPES_NUMERIC.html) and [`s`](ABENBUILTIN_TYPES_NUMERIC.html). These ABAP types cannot be specified either statically or dynamically in ABAP statements. They can only be used in ABAP programs by reference to the built-in dictionary types `INT1` and `INT2`.
-   [`DEC`](ABENDDIC_BUILTIN_TYPES.html) for [packed numbers](ABENPACKED_NUMBER_GLOSRY.html)
-   This type describes general packed numbers in [BCD format](ABENBCD_GLOSRY.html). When used, a length and the number of decimal places must be added to the type. The number of decimal places must be less than or equal to the length and cannot exceed 14.
-   [`FLTP`](ABENDDIC_BUILTIN_TYPES.html) for [binary floating point numbers](ABENBINFLOAT_GLOSRY.html)
-   This type describes general binary floating point numbers. Table fields of this type cannot be used as [key fields](ABENDDIC_DATABASE_TABLES_KEY.html) of DDIC database tables.

-   When defining data types based on the built-in type `DEC`, an odd number of places should be used. These values are stored in [BCD](ABENBCD_GLOSRY.html) format, for which in ABAP (data type `p`), only an odd number of digits is possible, since a half byte is used for the sign. If a data type `DEC` has an even number of characters, the length of the associated ABAP type `p` is rounded up and hence contains the next highest odd number of places. This can cause overflows and exceptions when writing to DDIC database tables. The same applies to the built-in types `CURR`, `DF34_DEC`, `DF16_DEC`, and `QUAN`, which are handled technically like the type `DEC`,
-   If the built-in dictionary types `INT1`, `INT2`, `INT4`, and `INT8` are [used](ABENDDIC_BUILTIN_TYPE_USAGE.html) for typing, the number of places must usually be specified explicitly as 2, 5, 10, and 19. If the type `FLTP` is used, 16 places and the same number of decimal places must be specified. However, the specified number of places does not have any effect on the data types. By default, they describe platform-dependent integers or binary floating point numbers and occupy 1, 2, 4, or 8 bytes.

-   In the case of integer types, the specified places express the possible decimal places without sign.
-   In the case of binary floating point numbers, 16 expresses the approximate precision of the IEEE-754 (double precision) standard.

-   The specified places are saved in the metadata of a user-defined type and are evaluated, if necessary, by special frameworks.

abenabap.html abenabap\_dictionary.html abenddic\_builtin\_types\_intro.html abenddic\_builtin\_types\_prop.html abenddic\_builtin\_types\_general.html