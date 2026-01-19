---
title: "ABENFIELD_SYMBOLS_STRUC_ABEXA"
description: |
  ABENFIELD_SYMBOLS_STRUC_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENFIELD_SYMBOLS_STRUC_ABEXA.htm"
abapFile: "ABENFIELD_SYMBOLS_STRUC_ABEXA.html"
keywords: ["method", "class", "data", "field-symbol", "ABENFIELD", "SYMBOLS", "STRUC", "ABEXA"]
---

This example demonstrates how field symbols are cast.

The structures `line1` and `line2` are cast to the number string *0123456789*. The structure is then accessed using the corresponding field symbol and the components are output individually. It should be noted that the date component contains an invalid date after the assignment, which is only used here for demonstration purposes.

The structures are cast using the `ASSIGN CASTING` statement. The obsolete addition `STRUCTURE` of the statement `FIELD-SYMBOLS`, replaced by `ASSIGN CASTING`, is shown here as a comment.

\* Public class definition \\nCLASS cl\_demo\_fld\_smbls\_structure DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_fld\_smbls\_structure IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: wa(10) TYPE c VALUE '0123456789'. \\n\\ \\n DATA: BEGIN OF line1, \\n col1(3) TYPE c, \\n col2(2) TYPE c, \\n col3(5) TYPE c, \\n END OF line1. \\n\\ \\n DATA: BEGIN OF line2, \\n col1(2) TYPE c, \\n col2 TYPE d, \\n END OF line2. \\n\\ \\n\* correct -------------------------------------------------------------- \\n\\ \\n FIELD-SYMBOLS: LIKE line1, \\n LIKE line2. \\n\\ \\n ASSIGN wa TO: CASTING, \\n CASTING. \\n\\ \\n\* obsolete, not supported in methods ----------------------------------- \\n\\ \\n "FIELD-SYMBOLS: STRUCTURE line1 DEFAULT wa, \\n " STRUCTURE line2 DEFAULT wa. \\n\\ \\n\* ---------------------------------------------------------------------- \\n\\ \\n out->write( \\n |\\{ \-col1 \\} \\{ \-col2 \\} \\{ \-col3 \\}\\\\n| && \\n |\\{ \-col1 \\} \\{ \-col2 \\}| ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_fld\_smbls\_structure DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_fld\_smbls\_structure IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: wa(10) TYPE c VALUE '0123456789'. \\n\\ \\n DATA: BEGIN OF line1, \\n col1(3) TYPE c, \\n col2(2) TYPE c, \\n col3(5) TYPE c, \\n END OF line1. \\n\\ \\n DATA: BEGIN OF line2, \\n col1(2) TYPE c, \\n col2 TYPE d, \\n END OF line2. \\n\\ \\n\* correct -------------------------------------------------------------- \\n\\ \\n FIELD-SYMBOLS: LIKE line1, \\n LIKE line2. \\n\\ \\n ASSIGN wa TO: CASTING, \\n CASTING. \\n\\ \\n\* obsolete, not supported in methods ----------------------------------- \\n\\ \\n "FIELD-SYMBOLS: STRUCTURE line1 DEFAULT wa, \\n " STRUCTURE line2 DEFAULT wa. \\n\\ \\n\* ---------------------------------------------------------------------- \\n\\ \\n out->write( \\n |\\{ \-col1 \\} \\{ \-col2 \\} \\{ \-col3 \\}\\\\n| && \\n |\\{ \-col1 \\} \\{ \-col2 \\}| ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_declarations.html abenfield\_symbols\_obsolete.html