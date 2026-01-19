---
title: "ABENINTERFACE_AREAS_OBSOLETE"
description: |
  ABENINTERFACE_AREAS_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENINTERFACE_AREAS_OBSOLETE.htm"
abapFile: "ABENINTERFACE_AREAS_OBSOLETE.html"
keywords: ["if", "data", "ABENINTERFACE", "AREAS", "OBSOLETE"]
---

Interface work areas are created only once for each [program group](ABENPROGRAM_GROUP_GLOSRY.html) and are shared by the [main program](ABENMAIN_PROGRAM_GLOSRY.html) and its additional loaded programs. The assignment of programs to program groups can be dependent on user actions, field content, and switches, which means that interface work areas are extremely error-prone, with respect to their functions and to their maintainability. The only interface work areas that can still be used for special purposes are [table work areas](ABENTABLE_WORK_AREA_GLOSRY.html) declared using [`TABLES`](ABAPTABLES.html). The following declarations are completely obsolete:

The statement [`NODES`](ABAPNODES.html), which was once required for interface work areas between logical databases and executable programs, is also no longer required if logical databases are no longer used.

-   [`DATA`, `COMMON PART`](ABAPDATA_COMMON.html)
-   [`TABLES *`](ABAPTABLES_ASTERISK.html)

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_declarations.html