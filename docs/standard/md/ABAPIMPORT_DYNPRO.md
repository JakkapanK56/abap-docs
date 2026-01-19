---
title: "ABAPIMPORT_DYNPRO"
description: |
  ABAPIMPORT_DYNPRO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPIMPORT_DYNPRO.htm"
abapFile: "ABAPIMPORT_DYNPRO.html"
keywords: ["do", "if", "data", "internal-table", "ABAPIMPORT", "DYNPRO"]
---

**This statement is for internal use only. \\nIt must not be used in application programs.**

`IMPORT DYNPRO h f e m ID id.`

The [dynpro](ABENDYNPRO_GLOSRY.html) specified in the structure `id` is imported. To enable this, the structure `id` must contain two components for the name of the program and the ID of the dynpro in the following order:

The dynpro information is loaded into the structure `h` (dynpro header, structure `D020S`) and into the internal tables `f` (field list, structure `D021S`), `e` (flow logic, structure `D022S`), and `m` (matchcode information, structure `D023S`). Standard tables without secondary keys can be specified for `f`, `e`, and `m`.

As an alternative to a structure, a character-like field (including string) can be specified for `id`, where the field contains the chained content of the structure components, including trailing blanks.

Reading of the properties of dynpro *0100* of the program `DEMO_DYNPRO`.

-   A component of type `PROGNAME`
-   A component of type `SYDYNNR`.

DATA h TYPE d020s. \\nDATA f TYPE TABLE OF d021s. \\nDATA e TYPE TABLE OF d022s. \\nDATA m TYPE TABLE OF d023s. \\n\\ \\nDATA: BEGIN OF id, \\n p TYPE progname VALUE 'DEMO\_DYNPRO', \\n d TYPE sydynnr VALUE '0100', \\n END OF id. \\n\\ \\nIMPORT DYNPRO h f e m ID id. `**sy-subrc**` **Meaning** 0 The dynpro was imported. 4 The dynpro does not exist. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abenabap\_generic\_dynpro.html abengeneric\_dynpro\_internal.html