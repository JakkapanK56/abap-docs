---
title: "ABAPENHANCEMENT-SECTION_SHORTREF"
description: |
  ABAPENHANCEMENT-SECTION_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPENHANCEMENT-SECTION_SHORTREF.htm"
abapFile: "ABAPENHANCEMENT-SECTION_SHORTREF.html"
keywords: ["ABAPENHANCEMENT", "SECTION", "SHORTREF"]
---

[Reference](ABAPENHANCEMENT-SECTION.html)

`ENHANCEMENT-SECTION enh_id SPOTS spot1 spot2 ...`\\ 
                    `[STATIC]`\\ 
                    `[INCLUDE BOUND].`\\ 
  `...`\\ 
`END-ENHANCEMENT-SECTION.`

Defines a section of the source code as an [enhancement point](ABENENHANCEMENT_POINT_GLOSRY.html) with the ID `enh_id` for a [source code enhancement](ABENSOURCE_CODE_ENHANCEMENT_GLOSRY.html) using a [source code plug-in](ABENSOURCE_CODE_PLUGIN_GLOSRY.html) and assigns it to [simple enhancement spots](ABENSIMPLE_ENHANCEMENT_SPOT_GLOSRY.html)\\ `spot1`, `spot2`, ...

-   `STATIC`\\
    Defines a static source code enhancement.
-   `INCLUDE BOUND`\\
    Binds the source code enhancement to the current include program.

abenabap.html abenabap\_reference.html abenabap\_shortref.html