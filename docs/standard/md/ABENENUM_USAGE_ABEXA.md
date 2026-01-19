---
title: "ABENENUM_USAGE_ABEXA"
description: |
  ABENENUM_USAGE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENENUM_USAGE_ABEXA.htm"
abapFile: "ABENENUM_USAGE_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENENUM", "USAGE", "ABEXA"]
---

This example demonstrates the general use of [enumerated types](ABENENUM_TYPE_GLOSRY.html).

The class calls the method `SHOW` of class `CL_DEMO_WRAP_BROWSER`. Two enumerated types are defined as follows in this class:

TYPES: \\n  BEGIN OF ENUM size STRUCTURE sz, \\n    s, m, l, xl, \\n  END OF ENUM size STRUCTURE sz. \\nTYPES: \\n  BEGIN OF ENUM format STRUCTURE fmt, \\n    l, p, \\n  END OF ENUM format STRUCTURE fmt.

By using [enumerated structures](ABENENUMERATED_STRUCTURE_GLOSRY.html), the same name `l` can occur twice. The method `SHOW` wraps the method `SHOW_HTML` of the class `CL_ABAP_BROWSER`:

The input parameters `size` and format `format` of the method have the identically named enumerated types and can only contain their enumerated values. These are mapped to the corresponding constants of class `CL_ABAP_BROWSER`. These constants are to be regarded as a workaround for real enumerated types, which did not exist when `CL_ABAP_BROWSER` was developed.

Enumerated values can be entered for the size and format when the class is executed. The internal transfer to the program takes place by deserializing the character-like values to the local enumerated variables `size` and `format`. The exception for invalid values is caught internally, whereby the enumerated variables are initialized, which corresponds to the values of the enumerated constants `sz-s` and `fmt-l`.

\* Public class definition \\nCLASS cl\_demo\_enumerated\_types DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n DATA html TYPE string. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_enumerated\_types IMPLEMENTATION. \\n METHOD main. \\n DATA: size TYPE cl\_demo\_wrap\_browser=>size \\n VALUE cl\_demo\_wrap\_browser=>sz-l, \\n format TYPE cl\_demo\_wrap\_browser=>format \\n VALUE cl\_demo\_wrap\_browser=>fmt-l. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_field( EXPORTING text = \`Size (S, M, L, XL)\` \\n CHANGING field = size \\n )->request( EXPORTING text = \`Format (L, P)\` \\n CHANGING field = format ). \\n\\ \\n cl\_demo\_wrap\_browser=>show( html = html \\n size = size \\n format = format ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n html = cl\_abap\_docu\_external=>get\_abap\_docu\_for\_adt( \\n EXPORTING \\n language = COND #( WHEN sy-langu = 'D' THEN 'DE' ELSE 'EN' ) \\n version = if\_abap\_docu=>unicode ). \\n ENDMETHOD. \\nENDCLASS. METHOD show. \\n cl\_abap\_browser=>show\_html( \\n html\_string = html \\n size = SWITCH #( size \\n WHEN sz-s THEN cl\_abap\_browser=>small \\n WHEN sz-m THEN cl\_abap\_browser=>medium \\n WHEN sz-l THEN cl\_abap\_browser=>large \\n WHEN sz-xl THEN cl\_abap\_browser=>xlarge ) \\n format = SWITCH #( format \\n WHEN fmt-l THEN cl\_abap\_browser=>landscape \\n WHEN fmt-p THEN cl\_abap\_browser=>portrait ) \\n buttons = abap\_true ). \\nENDMETHOD. \* Public class definition \\nCLASS cl\_demo\_enumerated\_types DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n DATA html TYPE string. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_enumerated\_types IMPLEMENTATION. \\n METHOD main. \\n DATA: size TYPE cl\_demo\_wrap\_browser=>size \\n VALUE cl\_demo\_wrap\_browser=>sz-l, \\n format TYPE cl\_demo\_wrap\_browser=>format \\n VALUE cl\_demo\_wrap\_browser=>fmt-l. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_field( EXPORTING text = \`Size (S, M, L, XL)\` \\n CHANGING field = size \\n )->request( EXPORTING text = \`Format (L, P)\` \\n CHANGING field = format ). \\n\\ \\n cl\_demo\_wrap\_browser=>show( html = html \\n size = size \\n format = format ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n html = cl\_abap\_docu\_external=>get\_abap\_docu\_for\_adt( \\n EXPORTING \\n language = COND #( WHEN sy-langu = 'D' THEN 'DE' ELSE 'EN' ) \\n version = if\_abap\_docu=>unicode ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenenumerated\_types\_usage.html