---
title: "ABENCASTING_OBSOLETE_TYPE_ABEXA"
description: |
  ABENCASTING_OBSOLETE_TYPE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCASTING_OBSOLETE_TYPE_ABEXA.htm"
abapFile: "ABENCASTING_OBSOLETE_TYPE_ABEXA.html"
keywords: ["method", "class", "data", "types", "field-symbol", "ABENCASTING", "OBSOLETE", "TYPE", "ABEXA"]
---

This example demonstrates how a casting is performed on built-in data types.

This example demonstrates how casting works on built-in data types. First the character string `txt` is assigned to the field symbol `<fs>` without casting. Afterwards, `txt` is assigned to `<fs>` using casting on types `i` and `x`. The second output value depends on the byte order of the current platform. The paired numbers in the last output line represent the hexadecimal code for the character in `txt` and depend on the character representation on the current AS instance.

The section of the method that has been commented out also shows the syntax for the respective [obsolete casting](ABAPASSIGN_CASTING_OBSOLETE.html).

\* Public class definition \\nCLASS cl\_demo\_fld\_smbls\_assign\_type DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_fld\_smbls\_assign\_type IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA txt(8) TYPE c VALUE '20050606'. \\n\\ \\n DATA mytype(1) VALUE 'X'. \\n\\ \\n FIELD-SYMBOLS TYPE any. \\n\\ \\n out->begin\_section( 'Cast with built-in types' ). \\n\\ \\n ASSIGN txt TO . \\n out->write( | with inherited type c: \\{ \\}| ). \\n\\ \\n\* correct ------------------------------------------------------------- \\n\\ \\n ASSIGN txt TO CASTING TYPE i. \\n out->write( | casted with i: \\{ \\}| ). \\n\\ \\n ASSIGN txt TO CASTING TYPE (mytype). \\n out->write( | casted with x: \\{ \\}| ). \\n\\ \\n\* obsolete, not allowed in methods ------------------------------------ \\n\\ \\n "ASSIGN txt TO TYPE 'D'. \\n\\ \\n "ASSIGN txt TO TYPE mytype. \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_fld\_smbls\_assign\_type DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_fld\_smbls\_assign\_type IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA txt(8) TYPE c VALUE '20050606'. \\n\\ \\n DATA mytype(1) VALUE 'X'. \\n\\ \\n FIELD-SYMBOLS TYPE any. \\n\\ \\n out->begin\_section( 'Cast with built-in types' ). \\n\\ \\n ASSIGN txt TO . \\n out->write( | with inherited type c: \\{ \\}| ). \\n\\ \\n\* correct ------------------------------------------------------------- \\n\\ \\n ASSIGN txt TO CASTING TYPE i. \\n out->write( | casted with i: \\{ \\}| ). \\n\\ \\n ASSIGN txt TO CASTING TYPE (mytype). \\n out->write( | casted with x: \\{ \\}| ). \\n\\ \\n\* obsolete, not allowed in methods ------------------------------------ \\n\\ \\n "ASSIGN txt TO TYPE 'D'. \\n\\ \\n "ASSIGN txt TO TYPE mytype. \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_field\_symbols.html abapassign.html abapassign\_casting.html abencasting\_obsolete\_abexas.html