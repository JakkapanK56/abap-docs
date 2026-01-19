---
title: "ABAPEXPORT_DYNPRO"
description: |
  ABAPEXPORT_DYNPRO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXPORT_DYNPRO.htm"
abapFile: "ABAPEXPORT_DYNPRO.html"
keywords: ["if", "internal-table", "ABAPEXPORT", "DYNPRO"]
---

**This statement is for internal use only. \\nIt must not be used in application programs.**

`EXPORT DYNPRO h f e m ID id.`

Exports the `[dynpro](ABENDYNPRO_GLOSRY.html)` with the name in the `id`. The dynpro information is taken from the structure `h` (dynpro header, dictionary structure `D020S`) and the internal tables `f` (field list, structure `D021S`), `e` (flow logic, structure `D022S`), and `m` (matchcode information, structure `D023S`). Standard tables without secondary keys can be specified for `f`, `e`, and `m`.

abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abenabap\_generic\_dynpro.html abengeneric\_dynpro\_internal.html