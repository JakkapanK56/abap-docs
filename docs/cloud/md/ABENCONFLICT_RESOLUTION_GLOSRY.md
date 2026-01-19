---
title: "ABENCONFLICT_RESOLUTION_GLOSRY"
description: |
  ABENCONFLICT_RESOLUTION_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCONFLICT_RESOLUTION_GLOSRY.htm"
abapFile: "ABENCONFLICT_RESOLUTION_GLOSRY.html"
keywords: ["if", "ABENCONFLICT", "RESOLUTION", "GLOSRY"]
---

Term in [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html). A conflict occurs if multiple [enhancement implementation elements](ABENENHANCEMENT_IMPL_ELEM_GLOSRY.html) exist for a single [enhancement option](ABENENHANCEMENT_POINT_GLOSRY.html) for which only one enhancement can be carried out, and when more than one of these enhancement implementation elements are switched on at the same time. Currently, a conflict can occur with the statements `ENHANCEMENT-SECTION` and [`GET BADI`](ABAPGET_BADI.html). To resolve the conflict, the [conflict resolving enhancement implementation](ABENCONFLICT_RESOL_IMPL_GLOSRY.html) with the highest priority is searched among the [enhancement implementations](ABENENHANCEMENT_IMPL_GLOSRY.html) and its enhancement implementation element is then used.

ABENTECHNO\_GLOSSARY.html