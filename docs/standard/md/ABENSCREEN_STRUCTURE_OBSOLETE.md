---
title: "ABENSCREEN_STRUCTURE_OBSOLETE"
description: |
  ABENSCREEN_STRUCTURE_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSCREEN_STRUCTURE_OBSOLETE.htm"
abapFile: "ABENSCREEN_STRUCTURE_OBSOLETE.html"
keywords: ["loop", "if", "data", "ABENSCREEN", "STRUCTURE", "OBSOLETE"]
---

In [dynpro](ABENDYNPRO_GLOSRY.html) processing in dialog modules, the built-in data object `screen` of the data type `SCREEN` from ABAP Dictionary is available. It can be addressed explicitly there and implicitly in obsolete short forms.

can be used. A data object `screen` declared explicitly in the current context hides the built-in structure.

-   [`LOOP AT SCREEN`](ABENLOOP_AT_SCREEN_OBSOLETE.html)
-   [`MODIFY SCREEN`](ABENMODIFY_SCREEN_OBSOLETE.html)

-   Instead of the built-in structure `screen`, explicitly declared work areas of the type `SCREEN` should be used in the long forms of the statements above.
-   `LOOP AT SCREEN INTO screen` or `MODIFY SCREEN FROM screen` should not be used to access the obsolete built-in structure, even in the long forms.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenbuilt\_in\_obsolete.html