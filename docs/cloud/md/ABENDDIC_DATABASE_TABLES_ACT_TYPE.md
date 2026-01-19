---
title: "ABENDDIC_DATABASE_TABLES_ACT_TYPE"
description: |
  ABENDDIC_DATABASE_TABLES_ACT_TYPE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_DATABASE_TABLES_ACT_TYPE.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_ACT_TYPE.html"
keywords: ["if", "data", "ABENDDIC", "DATABASE", "TABLES", "ACT", "TYPE"]
---

The activation type defines whether a DDIC database table can be activated in an ABAP Dictionary tool or whether it must be controlled using the ABAP runtime framework environment. This setting is not relevant for DDIC database tables in application programming. In these tables, the default value *00* should be preserved. The following settings are possible:

-   **Activation type 00**
-   The default setting in which a DDIC database table can be activated in an ABAP Dictionary tool. DDIC database tables in application programming should always have this activation type.
-   The following values for the activation type only apply to those DDIC database tables required by the ABAP runtime framework itself and hence only to internal SAP developments:

-   **Activation type 01**
-   The [DDIC runtime object](ABENDDIC_RUNTIME_OBJECT_GLOSRY.html) of the database table must be created using an [ABAP kernel](ABENKERNEL_GLOSRY.html) program before the table is activated in an ABAP Dictionary tool. This makes it impossible to modify and activate important system tables directly.
-   **Activation type 02**
-   The DDIC database table is used in the [ABAP kernel](ABENKERNEL_GLOSRY.html), but the [DDIC runtime object](ABENDDIC_RUNTIME_OBJECT_GLOSRY.html) can be activated (and hence created) in an ABAP Dictionary tool. It may be necessary to adjust the consumer programs of the kernel. This is indicated by a note in the activation log.
-   **Activation type 10**
-   The DDIC database table is required before other objects are modified as part of a transport.

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_tech.html abenddic\_database\_tables\_techspec.html