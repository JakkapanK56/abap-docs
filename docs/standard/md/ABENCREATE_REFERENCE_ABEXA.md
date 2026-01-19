---
title: "ABENCREATE_REFERENCE_ABEXA"
description: |
  ABENCREATE_REFERENCE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCREATE_REFERENCE_ABEXA.htm"
abapFile: "ABENCREATE_REFERENCE_ABEXA.html"
keywords: ["method", "class", "data", "field-symbol", "ABENCREATE", "REFERENCE", "ABEXA"]
---

This example demonstrates how reference variables are created.

Creates an interface reference variable dynamically. The [absolute type name](ABENABSOLUTE_TYPENAME_GLOSRY.html) is used for the description of the local interface.

The reference variable is assigned to a field symbol `<ref>` using dereferencing. According to the [general typing rules](ABENTYPING_CHECK_GENERAL.html), this field symbol an only be typed completely generically or typed with reference to the interface `intf`.

The dynamically created reference variable is used to create and address an object of a class.

\* CCDEF \\nINTERFACE intf. \\n CONSTANTS attr TYPE string VALUE \`Interface constant\`. \\nENDINTERFACE. \\nCLASS cls DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES intf. \\nENDCLASS. \\n\\ \\n\* Public class definition \\nCLASS cl\_demo\_create\_reference DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_create\_reference IMPLEMENTATION. \\n METHOD main. \\n DATA intf\_name TYPE string. \\n DATA cls\_name TYPE string. \\n DATA dref TYPE REF TO data. \\n\\ \\n FIELD-SYMBOLS TYPE any. \\n\\ \\n intf\_name = '\\\\CLASS=CL\_DEMO\_CREATE\_REFERENCE\\\\INTERFACE=INTF'. \\n CREATE DATA dref TYPE REF TO (intf\_name). \\n ASSIGN dref->\* TO . \\n\\ \\n cls\_name = '\\\\CLASS=CL\_DEMO\_CREATE\_REFERENCE\\\\CLASS=CLS'. \\n CREATE OBJECT TYPE (cls\_name). \\n\\ \\n out->write\_data( \->('attr') ). \\n ENDMETHOD. \\nENDCLASS. \* CCDEF \\nINTERFACE intf. \\n CONSTANTS attr TYPE string VALUE \`Interface constant\`. \\nENDINTERFACE. \\nCLASS cls DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES intf. \\nENDCLASS. \\n\\ \\n\* Public class definition \\nCLASS cl\_demo\_create\_reference DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_create\_reference IMPLEMENTATION. \\n METHOD main. \\n DATA intf\_name TYPE string. \\n DATA cls\_name TYPE string. \\n DATA dref TYPE REF TO data. \\n\\ \\n FIELD-SYMBOLS TYPE any. \\n\\ \\n intf\_name = '\\\\CLASS=CL\_DEMO\_CREATE\_REFERENCE\\\\INTERFACE=INTF'. \\n CREATE DATA dref TYPE REF TO (intf\_name). \\n ASSIGN dref->\* TO . \\n\\ \\n cls\_name = '\\\\CLASS=CL\_DEMO\_CREATE\_REFERENCE\\\\CLASS=CLS'. \\n CREATE OBJECT TYPE (cls\_name). \\n\\ \\n out->write\_data( \->('attr') ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abencreate\_objects.html abapcreate\_data.html abapcreate\_data\_reference.html