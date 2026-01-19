---
title: "ABENDDIC_QUANTITY_FIELD"
description: |
  ABENDDIC_QUANTITY_FIELD - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_QUANTITY_FIELD.htm"
abapFile: "ABENDDIC_QUANTITY_FIELD.html"
keywords: ["if", "case", "data", "types", "ABENDDIC", "QUANTITY", "FIELD"]
---

A quantity field is a component of a DDIC structure, DDIC database table, or DDIC view used to store a quantity in a specific unit. A quantity field can have data type `QUAN`, `DECFLOAT16`, or `DECFLOAT34`. In case of data type `QUAN`, a field is automatically interpreted as quantity field and a reference to a unit key is mandatory. In case of the other data types, this reference is not mandatory, but if it is assigned, it turns the field into a quantity field.

The unit key defines the unit and the number of decimal places. It is a component of a DDIC structure, DDIC database table, or DDIC view of type `UNIT` and can contain a [unit ID](ABENUNIT_ID_GLOSRY.html) from the DDIC database table `T006`.

A data element of data type [`QUAN`](ABENDDIC_BUILTIN_TYPES.html) is handled as a field of data type [`DEC`](ABENDDIC_BUILTIN_TYPES_INT_PACK.html) and is stored in DDIC database tables in the [BCD](ABENBCD_GLOSRY.html) format. When creating a data element or a structure component of the data type `QUAN` in an ABAP Dictionary tool, any number of decimal places can be defined. The default value is no decimal places.

A quantity field of data type `DECFLOAT16` or `DECFLOAT34` is handled according to its data type.

For every structure component of data type `QUAN`, a component of the same structure or of a different structure, DDIC database table, or DDIC view must be defined as a [reference field](ABENDDIC_STRUCTURES_SEMA.html) with the data type [`UNIT`](ABENDDIC_BUILTIN_TYPES.html). This field is the [unit key](ABENUNIT_GLOSRY.html) that defines the unit of the quantity. From a technical perspective, the data type `UNIT` is handled like a type `CHAR` with length 2.

The ABAP type that corresponds to the data type `QUAN` is `p`. An ABAP data object declared with reference to a dictionary type of type `QUAN` has the number of decimal places defined there. These decimal places are respected for all operations and calculations, as for all packed numbers. When quantity currency fields with [ABAP SQL](ABENABAP_SQL_GLOSRY.html), no special handling takes place.

The unit defined for a quantity field only plays a part in ABAP programs if it is specified after the addition `UNIT` of the statement `WRITE [TO]`. The addition `UNIT` of the statement `WRITE [TO]` can be used only for quantity fields of data type `QUAN`, not for quantity fields of any other data type.

-   Quantities and units are handled as specified by the data saved in the DDIC database tables `T006...` in the package `SZME`. This data can be maintained using the transaction `CUNI`.
-   Quantity fields in ABAP CDS are described in topic [ABAP CDS - Quantity Fields](ABENCDS_QUANTITY_FIELD.html).

-   As in [general packed numbers](ABENDDIC_BUILTIN_TYPES_INT_PACK.html), the number of places in type `QUAN` should be odd.

abenabap.html abenabap\_dictionary.html abenddic\_builtin\_types\_intro.html abenddic\_builtin\_types\_prop.html abenddic\_builtin\_types\_special.html