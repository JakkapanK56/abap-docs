---
title: "ABENDDIC_DATABASE_TABLES_SPTLRF"
description: |
  ABENDDIC_DATABASE_TABLES_SPTLRF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DATABASE_TABLES_SPTLRF.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_SPTLRF.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENDDIC", "DATABASE", "TABLES", "SPTLRF"]
---

The definition of a [spatial reference system](ABENSPATIAL_REF_SYSTEM_GLOSRY.html) is mandatory for table fields with the [geodata type](ABENGEO_DATA_TYPE_GLOSRY.html)\\ [`GEOM_EWKB`](ABENDDIC_BUILTIN_TYPES.html#@@ITOC@@ABENDDIC_BUILTIN_TYPES_9). For other data types, this property is not available. The [spatial reference identifiers](ABENSPATIAL_REF_IDENTIFIER_GLOSRY.html) of spatial reference systems that are available in the current [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) are provided by the HANA view `ST_SPATIAL_REFERENCE_SYSTEMS`. Once a table (or structure) is activated, the definition of the spatial reference system of a geodata type must not be modified.

-   Spatial reference systems are not managed by ABAP. There is no guarantee that a spatial reference system which is available in one system is also available in a follow-on system. An application that works with spatial reference systems is responsible for providing spatial references in all affected systems by using native HANA functions.
-   The program `ABAP_DOCU_SHOW_SPATIAL_REF_SYS` shows the spatial reference systems that are available in the current system.
-   The instance method `GET_SPATIAL_REFERENCE_SYSTEMS` of the class `CL_DD_DATATYPE` reads the possible identifiers for spatial reference systems from the SAP HANA view using [Native SQL](ABENNATIVE_SQL_GLOSRY.html).

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_sema.html abenddic\_database\_tables\_semasspec.html