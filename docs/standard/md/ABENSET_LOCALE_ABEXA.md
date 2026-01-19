---
title: "ABENSET_LOCALE_ABEXA"
description: |
  ABENSET_LOCALE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSET_LOCALE_ABEXA.htm"
abapFile: "ABENSET_LOCALE_ABEXA.html"
keywords: ["if", "method", "class", "data", "ABENSET", "LOCALE", "ABEXA"]
---

This example demonstrates how to set the text environment explicitly.

This example shows the effect of the locale of the text environment on sorts. In Hungarian text environments, *Cs* and *Cu* are sorted differently than in English environments.

\* Public class definition \\nCLASS cl\_demo\_set\_locale DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_set\_locale IMPLEMENTATION. \\n METHOD main. \\n DATA text\_tab TYPE HASHED TABLE OF string \\n WITH UNIQUE KEY table\_line. \\n\\ \\n text\_tab = VALUE #( \\n ( \`Cudar Vilmos\` ) \\n ( \`Csernus Gábor\` ) ) ##STRING\_OK. \\n\\ \\n SET LOCALE LANGUAGE 'E'. \\n SORT text\_tab AS TEXT. \\n out->write( text\_tab ). \\n\\ \\n SET LOCALE LANGUAGE 'H'. \\n SORT text\_tab AS TEXT. \\n out->write( text\_tab ). \\n\\ \\n SET LOCALE LANGUAGE ' '. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_set\_locale DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_set\_locale IMPLEMENTATION. \\n METHOD main. \\n DATA text\_tab TYPE HASHED TABLE OF string \\n WITH UNIQUE KEY table\_line. \\n\\ \\n text\_tab = VALUE #( \\n ( \`Cudar Vilmos\` ) \\n ( \`Csernus Gábor\` ) ) ##STRING\_OK. \\n\\ \\n SET LOCALE LANGUAGE 'E'. \\n SORT text\_tab AS TEXT. \\n out->write( text\_tab ). \\n\\ \\n SET LOCALE LANGUAGE 'H'. \\n SORT text\_tab AS TEXT. \\n out->write( text\_tab ). \\n\\ \\n SET LOCALE LANGUAGE ' '. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenlanguage.html abenlanguage\_settings.html abentext\_environment.html