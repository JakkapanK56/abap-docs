---
title: "ABAPENHANCEMENT-POINT_SHORTREF"
description: |
  ABAPENHANCEMENT-POINT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPENHANCEMENT-POINT_SHORTREF.htm"
abapFile: "ABAPENHANCEMENT-POINT_SHORTREF.html"
keywords: ["ABAPENHANCEMENT", "POINT", "SHORTREF"]
---

[Reference](ABAPENHANCEMENT-POINT.html)

`ENHANCEMENT-POINT enh_id SPOTS spot1 spot2 ...`\\ 
                  `[STATIC]`\\ 
                  `[INCLUDE BOUND].`

Defines a point in the source code as an [enhancement point](ABENENHANCEMENT_POINT_GLOSRY.html) with the ID `enh_id` for a [source code enhancement](ABENSOURCE_CODE_ENHANCEMENT_GLOSRY.html) using [source code plug-ins](ABENSOURCE_CODE_PLUGIN_GLOSRY.html) and assigns [simple enhancement spots](ABENSIMPLE_ENHANCEMENT_SPOT_GLOSRY.html)\\ `spot1`, `spot2`, ... to it.

Defines a [source code enhancement](ABENSOURCE_CODE_ENHANCEMENT_GLOSRY.html) as an [enhancement spot element definition](ABENENHANCEMENT_SPOT_DEF_GLOSRY.html) with the ID `enh_id`, and assigns [simple enhancement spots](ABENSIMPLE_ENHANCEMENT_SPOT_GLOSRY.html)\\ `spot1`, `spot2`, ... to it.

-   `STATIC`\\
    Defines a static source code enhancement.
-   `INCLUDE BOUND`\\
    Binds the source code enhancement to the current include program.

abenabap.html abenabap\_reference.html abenabap\_shortref.html