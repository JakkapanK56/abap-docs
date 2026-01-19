---
title: "ABENCDS_ENUM_ABEXA"
description: |
  ABENCDS_ENUM_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ENUM_ABEXA.htm"
abapFile: "ABENCDS_ENUM_ABEXA.html"
keywords: ["select", "method", "class", "data", "types", "ABENCDS", "ENUM", "ABEXA"]
---

This example demonstrates the use of [CDS enumerated types](ABENCDS_ENUM_TYPE_GLOSRY.html).

The following CDS enumerated type `DEMO_CDS_ENUM_WEEKDAY` has the base type `abap.int1`, the names of the enumerated constants are abbreviations for the days of the week and the enumerated values are 0 to 6.

@EndUserText.label: 'Days of the week' \\ndefine type DEMO\_CDS\_ENUM\_WEEKDAY : abap.int1 enum \\n\\{  \\n  @EndUserText.label: 'Monday' \\n  MON = initial; \\n  @EndUserText.label: 'Tuesday' \\n  TUE =       1; \\n  @EndUserText.label: 'Wednesday' \\n  WED =       2; \\n  @EndUserText.label: 'Thursday' \\n  THU =       3; \\n  @EndUserText.label: 'Friday' \\n  FRI =       4; \\n  @EndUserText.label: 'Saturday' \\n  SAT =       5; \\n  @EndUserText.label: 'Sunday' \\n  SUN =       6; \\n\\} \\n\\ \\n\\ \\n

The CDS table function `DEMO_CDS_TF_ENUM_WEEKDAY` selects from the database table `SFLIGHT`.

**CDS table function**

**AMDP function implementation**

The AMDP function implementation uses the SAP HANA SQL function `WEEKDAY` to calculate the integer representation of the day of the week for a given flight date.

**CDS view entity**

The CDS view entity `DEMO_CDS_ENUM_1` selects from the table function `DEMO_CDS_TF_ENUM_WEEKDAY`. It casts the field `weekday` to the enumerated type `DEMO_CDS_ENUM_WEEKDAY`.

The class selects from the CDS view entity `DEMO_CDS_ENUM_1` that casts the integer representation of weekdays to a CDS enumerated type. As a consequence, the column `weekday` contains the names of the enumerated constants as values.

@ClientHandling.type: #CLIENT\_DEPENDENT\\n@ClientHandling.algorithm: #SESSION\_VARIABLE\\n@EndUserText.label: 'CDS table function, enum demo'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine table function DEMO\_CDS\_TF\_ENUM\_WEEKDAY\\nreturns\\n\\{\\n key mandt : s\_mandt;\\n key carrid : s\_carr\_id;\\n key connid : s\_conn\_id;\\n key fldate : s\_date;\\n weekday : int2;\\n\\n\\}\\nimplemented by method\\n CL\_DEMO\_CDS\_TF\_ENUM=>WEEKDAY; METHOD weekday \\n BY DATABASE FUNCTION FOR HDB \\n LANGUAGE SQLSCRIPT \\n OPTIONS READ-ONLY \\n USING DEMO\_CDS\_SFLIGHT\_VE. \\n\\ \\n RETURN \\n\\ \\nselect \\nmandt, \\ncarrid, \\nconnid, \\nfldate, \\nweekday( fldate ) as weekday \\nfrom DEMO\_CDS\_SFLIGHT\_VE; \\nENDMETHOD. @EndUserText.label: 'Select from table function'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_ENUM\_1\\n as select from DEMO\_CDS\_TF\_ENUM\_WEEKDAY\\n\\{\\n key carrid,\\n key connid,\\n key fldate,\\n cast( weekday as DEMO\_CDS\_ENUM\_WEEKDAY ) as weekday\\n\\}\\n \* Public class definition \\nCLASS cl\_demo\_cds\_enum\_1 DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_enum\_1 IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT FROM demo\_cds\_enum\_1 \\n FIELDS \* \\n INTO TABLE @DATA(result). "#EC CI\_NOWHERE \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_cds\_enum\_1 DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_enum\_1 IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT FROM demo\_cds\_enum\_1 \\n FIELDS \* \\n INTO TABLE @DATA(result). "#EC CI\_NOWHERE \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abencds.html abencds\_tdl.html abencds\_types.html abencds\_define\_type.html abencds\_enumeration\_types.html abencds\_define\_enum\_type.html