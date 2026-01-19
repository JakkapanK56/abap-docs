---
title: "ABENDDICDDL_DEFINE_TABLE_SRPRPS"
description: |
  ABENDDICDDL_DEFINE_TABLE_SRPRPS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDICDDL_DEFINE_TABLE_SRPRPS.htm"
abapFile: "ABENDDICDDL_DEFINE_TABLE_SRPRPS.html"
keywords: ["insert", "do", "if", "data", "ABENDDICDDL", "DEFINE", "TABLE", "SRPRPS"]
---

`@AbapCatalog.geo.spatialRefSystem : 'id'`

Specifies a property for table fields with the [geodata type](ABENGEO_DATA_TYPE_GLOSRY.html)\\ `GEOM_EWKB`.

Currently, the annotation `@AbapCatalog.geo.spatialRefSystem` is available. This annotation is used to specify the ID `id` of a [spatial reference system](ABENDDIC_DATABASE_TABLES_SPTLRF.html) as an integer value in quotation marks. If the annotation is not specified, the default value 0 is used implicitly and the annotation inserted accordingly. The spatial reference system can no longer be modified after activation.

Annotation `@AbapCatalog.geo.spatialRefSystem` for a table field `LOCATION` of a DDIC database table.

-   The program `ABAP_DOCU_SHOW_SPATIAL_REF_SYS` shows the spatial reference systems that are available in the current system.
-   Spatial reference systems are not managed by ABAP. A spatial reference system that is available in one system is not necessarily available in a follow-up system.

... \\ndefine table ... \\{ \\n ... \\n @AbapCatalog.geo.spatialRefSystem : '4326' \\n location : abap.geom\_ewkb; \\n ... \\n\\} abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_define\_table.html abenddicddl\_define\_table.html abenddicddl\_define\_table\_comps.html