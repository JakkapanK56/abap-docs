---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENENUM_DECLARATION_ABEXA.htm"
abapFile: "ABENENUM_DECLARATION_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENENUM", "DECLARATION", "ABEXA"]
---

This example demonstrates the declaration of [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html).

This example shows enumerated objects defined with reference to an [ABAP enumerated type](ABENENUMERATED_TYPE_GLOSRY.html) and to an [CDS enumerated type](ABENCDS_ENUM_TYPE_GLOSRY.html):

@EndUserText.label: 'Days of the week' \\ndefine type DEMO\_CDS\_ENUM\_WEEKDAY : abap.int1 enum \\n\\{  \\n  @EndUserText.label: 'Monday' \\n  MON = initial; \\n  @EndUserText.label: 'Tuesday' \\n  TUE =       1; \\n  @EndUserText.label: 'Wednesday' \\n  WED =       2; \\n  @EndUserText.label: 'Thursday' \\n  THU =       3; \\n  @EndUserText.label: 'Friday' \\n  FRI =       4; \\n  @EndUserText.label: 'Saturday' \\n  SAT =       5; \\n  @EndUserText.label: 'Sunday' \\n  SUN =       6; \\n\\} \\n\\ \\n\\ \\n

Note that only enumerated constants or variables with the same enumerated type are assigned to enumerated variables.

-   ABAP enumerated type

-   The ABAP enumerated type `abap_wd` is defined with an [enumerated structure](ABENENUMERATED_STRUCTURE_GLOSRY.html) that has the same name.
-   The enumerated structure `abap_wd` is created by the declaration and can be referred to by `LIKE` to create a second structure with the same components. The second structure is not a constant structure.
-   The components of the constant structure `abap_wd` contain the [enumerated values](ABENENUMERATED_VALUE_GLOSRY.html) of the enumerated type.
-   The components of the variable structure declared by `LIKE` contain their initial value 0 or `MON` respectively.
-   A variable `wd_abap` is declared with reference to the ABAP enumerated type and assigned the enumerated constant `abap_wd-tue`.
-   An [immutable variable](ABENIMMUTABLE_VARIABLE_GLOSRY.html)\\ `wd_abap_wed` is declared inline and assigned the enumerated constant `abap_wd-wed`.
-   The enumerated constant structure `abap_wd` is assigned to the variable structure `abap_wd_struc` declared by `LIKE`. Each component is assigned a different enumerated constant.

-   CDS enumerated type
-   The CDS enumerated type `DEMO_CDS_ENUM_WEEKDAY` is defined as follows:

-   The enumerated structure `demo_cds_enum_weekday` is created with the first read access. It cannot be used after `LIKE` before it is used for the first time.
-   The components of the enumerated structure `demo_cds_enum_weekday` are ordered alphabetically and not according to the definition.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_declare\_enums DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_declare\_enums IMPLEMENTATION. \\n METHOD main. \\n\\ \\n out->next\_section( 'ABAP Enumerated Type' ). \\n\\ \\n "ABAP enumerated type with enumerated structure \\n TYPES: \\n BEGIN OF ENUM abap\_wd STRUCTURE abap\_wd BASE TYPE int1, \\n mon, \\n tue, \\n wed, \\n thu, \\n fri, \\n sat, \\n sun, \\n END OF ENUM abap\_wd STRUCTURE abap\_wd. \\n\\ \\n "Addressing the enumerated structure and its components \\n DATA abap\_wd\_struc LIKE abap\_wd. \\n out->write( abap\_wd \\n )->write( abap\_wd-fri \\n )->write( abap\_wd\_struc \\n )->write( abap\_wd\_struc-fri ). \\n\\ \\n "Declaring an enumerated variable of the ABAP enumerated type \\n DATA wd\_abap TYPE abap\_wd. \\n "Assigning an enumerated constant \\n wd\_abap = abap\_wd-tue. \\n "Assigning an enumerated constant to an inline declaration \\n FINAL(wd\_abap\_wed) = abap\_wd-wed. \\n "Assigning enumerated constants to the variable structure \\n abap\_wd\_struc = abap\_wd. \\n out->write( wd\_abap \\n )->write( wd\_abap\_wed \\n )->write( abap\_wd\_struc ). \\n\\ \\n out->next\_section( 'CDS Enumerated Type' ). \\n\\ \\n "Addressing the enumerated structure and its components \\n "DATA cds\_wd\_struc LIKE demo\_cds\_enum\_weekday. "Syntax error \\n out->write( demo\_cds\_enum\_weekday \\n )->write( demo\_cds\_enum\_weekday-fri ). \\n DATA cds\_wd\_struc LIKE demo\_cds\_enum\_weekday. "No syntax error \\n out->write( cds\_wd\_struc \\n )->write( cds\_wd\_struc-fri ). \\n\\ \\n "Declaring an enumerated variable of the CDS enumerated type \\n DATA wd\_cds TYPE demo\_cds\_enum\_weekday. \\n "Assigning an enumerated constant \\n wd\_cds = demo\_cds\_enum\_weekday-tue. \\n "Assigning an enumerated constant to an inline declaration \\n FINAL(wd\_cds\_wed) = demo\_cds\_enum\_weekday-wed. \\n "Assigning enumerated constants to the variable structure \\n cds\_wd\_struc = CORRESPONDING #( demo\_cds\_enum\_weekday ). \\n out->write( wd\_cds \\n )->write( wd\_cds\_wed \\n )->write( cds\_wd\_struc ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_declare\_enums DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_declare\_enums IMPLEMENTATION. \\n METHOD main. \\n\\ \\n out->next\_section( 'ABAP Enumerated Type' ). \\n\\ \\n "ABAP enumerated type with enumerated structure \\n TYPES: \\n BEGIN OF ENUM abap\_wd STRUCTURE abap\_wd BASE TYPE int1, \\n mon, \\n tue, \\n wed, \\n thu, \\n fri, \\n sat, \\n sun, \\n END OF ENUM abap\_wd STRUCTURE abap\_wd. \\n\\ \\n "Addressing the enumerated structure and its components \\n DATA abap\_wd\_struc LIKE abap\_wd. \\n out->write( abap\_wd \\n )->write( abap\_wd-fri \\n )->write( abap\_wd\_struc \\n )->write( abap\_wd\_struc-fri ). \\n\\ \\n "Declaring an enumerated variable of the ABAP enumerated type \\n DATA wd\_abap TYPE abap\_wd. \\n "Assigning an enumerated constant \\n wd\_abap = abap\_wd-tue. \\n "Assigning an enumerated constant to an inline declaration \\n FINAL(wd\_abap\_wed) = abap\_wd-wed. \\n "Assigning enumerated constants to the variable structure \\n abap\_wd\_struc = abap\_wd. \\n out->write( wd\_abap \\n )->write( wd\_abap\_wed \\n )->write( abap\_wd\_struc ). \\n\\ \\n out->next\_section( 'CDS Enumerated Type' ). \\n\\ \\n "Addressing the enumerated structure and its components \\n "DATA cds\_wd\_struc LIKE demo\_cds\_enum\_weekday. "Syntax error \\n out->write( demo\_cds\_enum\_weekday \\n )->write( demo\_cds\_enum\_weekday-fri ). \\n DATA cds\_wd\_struc LIKE demo\_cds\_enum\_weekday. "No syntax error \\n out->write( cds\_wd\_struc \\n )->write( cds\_wd\_struc-fri ). \\n\\ \\n "Declaring an enumerated variable of the CDS enumerated type \\n DATA wd\_cds TYPE demo\_cds\_enum\_weekday. \\n "Assigning an enumerated constant \\n wd\_cds = demo\_cds\_enum\_weekday-tue. \\n "Assigning an enumerated constant to an inline declaration \\n FINAL(wd\_cds\_wed) = demo\_cds\_enum\_weekday-wed. \\n "Assigning enumerated constants to the variable structure \\n cds\_wd\_struc = CORRESPONDING #( demo\_cds\_enum\_weekday ). \\n out->write( wd\_cds \\n )->write( wd\_cds\_wed \\n )->write( cds\_wd\_struc ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenenumerated\_types\_usage.html