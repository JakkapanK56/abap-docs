---
title: "ABENDDIC_OBSOLETE_TYPES"
description: |
  ABENDDIC_OBSOLETE_TYPES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_OBSOLETE_TYPES.htm"
abapFile: "ABENDDIC_OBSOLETE_TYPES.html"
keywords: ["do", "data", "types", "ABENDDIC", "OBSOLETE", "TYPES"]
---

The following built-in data types in ABAP Dictionary are obsolete and should no longer be used:

These built-in data types must not be used in [RAP BO entities](ABENRAP_BO_ENTITY_GLOSRY.html).

-   The replacement types [`DF16_SCL`](ABENDDIC_BUILTIN_TYPES.html) and [`DF34_SCL`](ABENDDIC_BUILTIN_TYPES.html) for [decimal floating point numbers](ABENDDIC_DECIMAL_FLOATING_POINT.html) with scaling are obsolete and their use is strongly discouraged.
-   The data type [`PREC`](ABENDDIC_BUILTIN_TYPES.html) is obsolete and should no longer be used. In ABAP Dictionary and in ABAP programs, it is handled like `INT2`, despite the predefined length (2). The length 2 is relevant only for dynpro fields of the type `PREC`, which can have two-character positive values at most. The property *sign* cannot be set for a domain of the type `PREC`
-   The data type [`VARC`](ABENDDIC_BUILTIN_TYPES.html) is obsolete and cannot be used for new definitions. It was previously used for character strings with variable lengths. Existing data types with this built-in type can still be used. When table fields with this type are used in ABAP SQL, the same [restrictions](ABENDDIC_CHARACTER_BYTE_TYPES.html) apply as to fields with the types `STRING` and `RAWSTRING` plus `LCHR` and `LRAW`.

abenabap.html abenabap\_dictionary.html abenddic\_builtin\_types\_intro.html abenddic\_builtin\_types\_prop.html