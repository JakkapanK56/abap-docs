---
title: "ABENANONYMOUS_COMPONENTS"
description: |
  ABENANONYMOUS_COMPONENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENANONYMOUS_COMPONENTS.htm"
abapFile: "ABENANONYMOUS_COMPONENTS.html"
keywords: ["if", "class", "data", "types", "ABENANONYMOUS", "COMPONENTS"]
---

`DATA: BEGIN OF struc,`\\ 
        `...`\\ 
        `'...',`\\ 
        `...`\\ 
        `space(len) [TYPE c],`\\ 
        `...`\\ 
      `END OF struc.`

If [text field literals](ABENTEXT_FIELD_LITERAL_GLOSRY.html) or the constant [`space`](ABENSPACE.html) (the latter also with a length specified in parentheses) are specified within the [definition of a structure](ABAPDATA_STRUC.html) using `DATA`, `CONSTANTS`, or `STATICS`, nameless text fields are included at this position as anonymous components. For literals, the initial value and the length of these components are based on their content. If `space` is specified, a text field filled with blanks is created. These anonymous text fields cannot be addressed explicitly in programs. In particular, structures never contain components with the name `space`. Anonymous components can only be accessed using the structure name and the corresponding offset/length specifications.

-   Anonymous components must not be specified in classes or interfaces.
-   These anonymous components can be replaced easily by named components. Named components enhance the functions of anonymous components by allowing them to be accessed explicitly, without limiting their role as, for example, filler fields.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_declarations.html abentypes\_data\_obsolete.html