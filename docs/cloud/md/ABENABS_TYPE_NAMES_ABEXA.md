---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABS_TYPE_NAMES_ABEXA.htm"
abapFile: "ABENABS_TYPE_NAMES_ABEXA.html"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "types", "ABENABS", "TYPE", "NAMES", "ABEXA"]
---

This example demonstrates the composition of [absolute type names](ABENABSOLUTE_TYPENAME_GLOSRY.html).

The following absolute type names are composed and used for creating [anonymous data objects](ABENANONYMOUS_DATA_OBJECT_GLOSRY.html) with dynamic type specifications:

-   `\\class=cl_demo_absolute_type_names\\type=struc`
-   Specifies the structured type `struc` of class `CL_DEMO_ABSOLUTE_TYPE_NAMES`.
-   `\\class=cl_demo_absolute_type_names\\type=struc-carrid`
-   Specifies the type of the component `carrid` of the structured type `struc` of class `CL_DEMO_ABSOLUTE_TYPE_NAMES`.
-   `\\class=cl_demo_absolute_type_names\\method=main\\type=itab\\line`
-   Specifies the line type of the tabular type `itab` defined in method `MAIN` of class `CL_DEMO_ABSOLUTE_TYPE_NAMES`.
-   `\\class=cl_demo_absolute_type_names\\method=main\\type=itab\\line-carrid`
-   Specifies the type of the component `carrid` of the tabular type `itab` defined in method `MAIN` of class `CL_DEMO_ABSOLUTE_TYPE_NAMES`.
-   `\\type=spfli-carrid`
-   Specifies the type of the component `carrid` of the [DDIC structure](ABENDDIC_STRUCTURE_GLOSRY.html)\\ `SPFLI`.
-   `\\type=spfli_key_tab\\line`
-   Specifies the line type of the [DDIC table type](ABENDDIC_TABLE_TYPE_GLOSRY.html)\\ `SPFLI_KEY_TAB`.
-   `\\type=spfli_key_tab\\line-carrid`
-   Specifies the type of the component `carrid` of the line type of the [DDIC table type](ABENDDIC_TABLE_TYPE_GLOSRY.html)\\ `SPFLI_KEY_TAB`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_absolute\_type\_names DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\n\\ \\n PRIVATE SECTION. \\n TYPES struc TYPE scarr. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_absolute\_type\_names IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES itab TYPE TABLE OF scarr. \\n\\ \\n DATA dref TYPE REF TO data. \\n\\ \\n\\ \\n DATA(struc\_type) = \\n \`\\\\class=cl\_demo\_absolute\_type\_names\` && \\n \`\\\\type=struc\`. \\n TRY. \\n CREATE DATA dref TYPE (struc\_type). \\n dref->\* = VALUE scarr( carrid = 'CC' ). \\n out->write( dref ). \\n CATCH cx\_sy\_create\_data\_error INTO DATA(exc). \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n DATA(comp\_type) = \\n \`\\\\class=cl\_demo\_absolute\_type\_names\` && \\n \`\\\\type=struc-carrid\`. \\n TRY. \\n CREATE DATA dref TYPE (comp\_type). \\n dref->\* = 'XX'. \\n out->write( dref ). \\n CATCH cx\_sy\_create\_data\_error INTO exc. \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n DATA(line\_type) = \\n \`\\\\class=cl\_demo\_absolute\_type\_names\` && \\n \`\\\\method=main\\\\type=itab\\\\line\`. \\n TRY. \\n CREATE DATA dref TYPE (line\_type). \\n dref->\* = VALUE scarr( carrid = 'YY' ). \\n out->write( dref ). \\n CATCH cx\_sy\_create\_data\_error INTO exc. \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n comp\_type = \\n \`\\\\class=cl\_demo\_absolute\_type\_names\` && \\n \`\\\\method=main\\\\type=itab\\\\line-carrid\`. \\n TRY. \\n CREATE DATA dref TYPE (comp\_type). \\n dref->\* = 'ZZ'. \\n out->write( dref ). \\n CATCH cx\_sy\_create\_data\_error INTO exc. \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n comp\_type = \\n \`\\\\type=spfli-carrid\`. \\n TRY. \\n CREATE DATA dref TYPE (comp\_type). \\n dref->\* = 'DDX'. \\n out->write( dref ). \\n CATCH cx\_sy\_create\_data\_error INTO exc. \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n line\_type = \\n \`\\\\type=spfli\_key\_tab\\\\line\`. \\n TRY. \\n CREATE DATA dref TYPE (line\_type). \\n dref->\* = VALUE spfli( carrid = 'DDY' ). \\n out->write( dref ). \\n CATCH cx\_sy\_create\_data\_error INTO exc. \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n comp\_type = \\n \`\\\\type=spfli\_key\_tab\\\\line-carrid\`. \\n TRY. \\n CREATE DATA dref TYPE (comp\_type). \\n dref->\* = 'DDZ'. \\n out->write( dref ). \\n CATCH cx\_sy\_create\_data\_error INTO exc. \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_absolute\_type\_names DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\n\\ \\n PRIVATE SECTION. \\n TYPES struc TYPE scarr. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_absolute\_type\_names IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES itab TYPE TABLE OF scarr. \\n\\ \\n DATA dref TYPE REF TO data. \\n\\ \\n\\ \\n DATA(struc\_type) = \\n \`\\\\class=cl\_demo\_absolute\_type\_names\` && \\n \`\\\\type=struc\`. \\n TRY. \\n CREATE DATA dref TYPE (struc\_type). \\n dref->\* = VALUE scarr( carrid = 'CC' ). \\n out->write( dref ). \\n CATCH cx\_sy\_create\_data\_error INTO DATA(exc). \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n DATA(comp\_type) = \\n \`\\\\class=cl\_demo\_absolute\_type\_names\` && \\n \`\\\\type=struc-carrid\`. \\n TRY. \\n CREATE DATA dref TYPE (comp\_type). \\n dref->\* = 'XX'. \\n out->write( dref ). \\n CATCH cx\_sy\_create\_data\_error INTO exc. \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n DATA(line\_type) = \\n \`\\\\class=cl\_demo\_absolute\_type\_names\` && \\n \`\\\\method=main\\\\type=itab\\\\line\`. \\n TRY. \\n CREATE DATA dref TYPE (line\_type). \\n dref->\* = VALUE scarr( carrid = 'YY' ). \\n out->write( dref ). \\n CATCH cx\_sy\_create\_data\_error INTO exc. \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n comp\_type = \\n \`\\\\class=cl\_demo\_absolute\_type\_names\` && \\n \`\\\\method=main\\\\type=itab\\\\line-carrid\`. \\n TRY. \\n CREATE DATA dref TYPE (comp\_type). \\n dref->\* = 'ZZ'. \\n out->write( dref ). \\n CATCH cx\_sy\_create\_data\_error INTO exc. \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n comp\_type = \\n \`\\\\type=spfli-carrid\`. \\n TRY. \\n CREATE DATA dref TYPE (comp\_type). \\n dref->\* = 'DDX'. \\n out->write( dref ). \\n CATCH cx\_sy\_create\_data\_error INTO exc. \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n line\_type = \\n \`\\\\type=spfli\_key\_tab\\\\line\`. \\n TRY. \\n CREATE DATA dref TYPE (line\_type). \\n dref->\* = VALUE spfli( carrid = 'DDY' ). \\n out->write( dref ). \\n CATCH cx\_sy\_create\_data\_error INTO exc. \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n comp\_type = \\n \`\\\\type=spfli\_key\_tab\\\\line-carrid\`. \\n TRY. \\n CREATE DATA dref TYPE (comp\_type). \\n dref->\* = 'DDZ'. \\n out->write( dref ). \\n CATCH cx\_sy\_create\_data\_error INTO exc. \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abentype\_names.html