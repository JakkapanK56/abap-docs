---
title: "ABENCONFLICT_SWITCH_GLOSRY"
description: |
  ABENCONFLICT_SWITCH_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCONFLICT_SWITCH_GLOSRY.htm"
abapFile: "ABENCONFLICT_SWITCH_GLOSRY.html"
keywords: ["if", "case", "ABENCONFLICT", "SWITCH", "GLOSRY"]
---

A special [switch](ABENSWITCH_GLOSRY.html) for [conflict resolution](ABENCONFLICT_RESOLUTION_GLOSRY.html). Multiple regular switches are assigned to a conflict switch. The switch status of a conflict switch is determined by the switch status of the assigned switches: *on* if all assigned switches are *on*, *off* if at least one assigned switch is *off*, and *standby* in all remaining cases. For every combination of [enhancement implementation](ABENENHANCEMENT_IMPL_GLOSRY.html) to which the regular switches of the conflict switch are assigned, a [conflict resolving enhancement implementation](ABENCONFLICT_RESOL_IMPL_GLOSRY.html) must be created to which the conflict switch is assigned.

ABENTECHNO\_GLOSSARY.html