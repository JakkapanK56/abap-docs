---
title: "ABENDDIC_GEO_DATA"
description: |
  ABENDDIC_GEO_DATA - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_GEO_DATA.htm"
abapFile: "ABENDDIC_GEO_DATA.html"
keywords: ["do", "if", "try", "data", "types", "ABENDDIC", "GEO", "DATA"]
---

The [geodata type](ABENGEO_DATA_TYPE_GLOSRY.html)\\ [`GEOM_EWKB`](ABENDDIC_BUILTIN_TYPES.html) is a built-in data type in ABAP Dictionary that describes the geometric position in a given coordinate reference system.

It represents fields in the database that contain geometric data in the EWKB (Extended Well-Known Binary) format. This type is currently only supported on [SAP HANA databases](ABENHANA_DATABASE_GLOSRY.html) and references the database type `ST_GEOMETRY`.

The internal representation of the geodata type `GEOM_EWKB` is a [BLOB](ABENBLOB_GLOSRY.html) (Binary Large Object) and the same rules and restrictions apply as to the type [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html). The type `GEOM_EWKB` is mapped to the ABAP type [`xstring`](ABENBUILTIN_TYPES_BYTE.html).

At ABAP level, there is no semantic representation for geometric data. ABAP only allows geometric data to be passed between the application and the SAP HANA database. The SAP HANA database functions for geometric data types can be accessed using [AMDP](ABENAMDP.html).

If the data type `GEOM_EWKB` is used for a structure component or a table field of a DDIC database table, the type must be assigned a [spatial reference system](ABENDDIC_DATABASE_TABLES_SPTLRF.html). This system cannot be changed once activated. The system has the ID 0 by default.

-   Columns of the data type `GEOM_EWKB` are not supported as [BLOBs](ABENBLOB_GLOSRY.html) in [streaming and locators in ABAP SQL](ABENSTREAMS_LOCATORS.html). To use columns of the data type `GEOM_EWKB` in streaming and locators, they have to be converted to [JSON](ABENJSON_GLOSRY.html) format first. This can be done with the conversion function [`AS_GEO_JSON`](ABENSQL_GEO_CONV_FUNC.html).
-   [`NOT NULL`](ABENDDIC_DATABASE_TABLES_INIT.html) cannot be set for a column of the type `GEOM_EWKB`.

abenabap.html abenabap\_dictionary.html abenddic\_builtin\_types\_intro.html abenddic\_builtin\_types\_prop.html abenddic\_builtin\_types\_special.html