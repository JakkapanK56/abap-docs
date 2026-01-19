---
title: "ABENCONFLICT_RESOL_IMPL_GLOSRY"
description: |
  ABENCONFLICT_RESOL_IMPL_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONFLICT_RESOL_IMPL_GLOSRY.htm"
abapFile: "ABENCONFLICT_RESOL_IMPL_GLOSRY.html"
keywords: ["ABENCONFLICT", "RESOL", "IMPL", "GLOSRY"]
---

An [enhancement implementation](ABENENHANCEMENT_IMPL_GLOSRY.html) to which a [conflict switch](ABENCONFLICT_SWITCH_GLOSRY.html) is assigned instead of a regular [switch](ABENSWITCH_GLOSRY.html). A conflict resolving enhancement implementation is used for [conflict resolution](ABENCONFLICT_RESOLUTION_GLOSRY.html). It must mirror the common semantics of all regular enhancement implementations that can potentially be switched on at the same time and which then show conflicts. These enhancement implementations can be determined by assigning switches to the conflict switch. During conflict resolution, a conflict resolving enhancement implementation has priority over regular enhancements. In the event of multiple conflict resolving enhancement implementations exist, the one that resolves the most conflicts takes priority.

ABENTECHNO\_GLOSSARY.html