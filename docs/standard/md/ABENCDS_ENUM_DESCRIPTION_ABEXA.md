---
title: "ABENCDS_ENUM_DESCRIPTION_ABEXA"
description: |
  ABENCDS_ENUM_DESCRIPTION_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ENUM_DESCRIPTION_ABEXA.htm"
abapFile: "ABENCDS_ENUM_DESCRIPTION_ABEXA.html"
keywords: ["method", "class", "types", "ABENCDS", "ENUM", "DESCRIPTION", "ABEXA"]
---

This example demonstrates type description for CDS enumerated types.

The type description class `CL_ABAP_ENUMDESCR` returns properties of the CDS enumerated type `DEMO_CDS_ENUM_WEEKDAY`.

\* Public class definition \\nCLASS cl\_demo\_cds\_enum\_type DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_enum\_type IMPLEMENTATION. \\n METHOD main. \\n TYPES my\_type TYPE demo\_cds\_enum\_weekday. \\n\\ \\n FINAL(descr) = cl\_abap\_enumdescr=>describe\_by\_name( \\n 'DEMO\_CDS\_ENUM\_WEEKDAY' ). \\n\\ \\n out->next\_section( 'CL\_ABAP\_ENUMDESCR' \\n )->write( descr ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_cds\_enum\_type DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_enum\_type IMPLEMENTATION. \\n METHOD main. \\n TYPES my\_type TYPE demo\_cds\_enum\_weekday. \\n\\ \\n FINAL(descr) = cl\_abap\_enumdescr=>describe\_by\_name( \\n 'DEMO\_CDS\_ENUM\_WEEKDAY' ). \\n\\ \\n out->next\_section( 'CL\_ABAP\_ENUMDESCR' \\n )->write( descr ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abencds.html abencds\_tdl.html abencds\_types.html abencds\_define\_type.html abencds\_enumeration\_types.html abencds\_define\_enum\_type.html