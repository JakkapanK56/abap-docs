---
title: "ABENDDIC_STRUCTURES_SEMA"
description: |
  ABENDDIC_STRUCTURES_SEMA - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_STRUCTURES_SEMA.htm"
abapFile: "ABENDDIC_STRUCTURES_SEMA.html"
keywords: ["do", "if", "data", "types", "ABENDDIC", "STRUCTURES", "SEMA"]
---

Structures in the ABAP Dictionary can have the following semantic properties:

Structure components whose type is defined using [data elements](ABENDDIC_DATA_ELEMENTS.html) have the additional semantic properties of the data elements.

-   **Short text of the structure**
-   Each structure is assigned a short descriptive text that must be specified when it is created.
-   **Documentation**
-   A structure can be assigned documentation that can be read as required.
-   **Short text of components**
-   Each component is assigned a short descriptive text that is inherited in any references to an existing type. A custom text can be specified if the type is defined directly.
-   **Output style of components**
-   A component with the directly specified type of a decimal floating point number can be assigned an [output style](ABENDDIC_DECIMAL_FLOATING_POINT.html).
-   **Reference field** for components of the [built-in data types](ABENDDIC_BUILTIN_TYPES.html)\\ `CURR` and `QUAN`
-   For each [currency field](ABENDDIC_CURRENCY_FIELD.html) with the type `CURR` and for each [quantity field](ABENDDIC_QUANTITY_FIELD.html) with the type `QUAN`, a component of the same or a different structure (or DDIC database table or view) must be defined as a reference field with the built-in data type `CUKY` or `UNIT`. This field is the [currency key](ABENCURRENCY_KEY_GLOSRY.html) or [unit key](ABENUNIT_GLOSRY.html) that specifies the currency or the unit. A table in which a reference field is defined is called a reference table.
-   **Check table**
-   Like table fields of DDIC database tables, structure components can be assigned [check tables](ABENDDIC_DATABASE_TABLES_CHECKTAB.html). This is useful for structures included in DDIC database tables which are part of the database table's [foreign key](ABENDDIC_DATABASE_TABLES_FORKEY.html).
-   **Spatial reference system**
-   Structure components with the [geodata type](ABENGEO_DATA_TYPE_GLOSRY.html)\\ `GEOM_EWKB` must be assigned [spatial reference systems](ABENDDIC_DATABASE_TABLES_SPTLRF.html), just like table fields of DDIC database tables. This is relevant for structures that are included in DDIC database tables.
-   **Search help**
-   Structure components whose data type is specified by a data element with an elementary data type can be assigned a [search help](ABENSEARCH_HELP_GLOSRY.html). This is only useful, however, for components used for input fields on UIs.
-   **Key field**
-   Like table fields of DDIC database tables, structure components can be defined as [key fields](ABENDDIC_DATABASE_TABLES_KEY.html). When a structure with key fields is [included in DDIC database tables](ABENDDIC_DATABASE_TABLES_TECHSTRUC.html), however, they are not used as key fields of the DDIC database table. Either all or no fields of an included structure can become key fields when included.
-   **Flag for initial values**
-   Like table fields of DDIC database tables, structure components can be assigned a [flag for initial values](ABENDDIC_DATABASE_TABLES_INIT.html). When a structure with such components is [included in DDIC database tables](ABENDDIC_DATABASE_TABLES_TECHSTRUC.html), the table fields can inherit these properties.

abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html abenddic\_structures.html