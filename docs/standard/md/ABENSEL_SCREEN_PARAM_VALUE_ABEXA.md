---
title: "ABENSEL_SCREEN_PARAM_VALUE_ABEXA"
description: |
  ABENSEL_SCREEN_PARAM_VALUE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSEL_SCREEN_PARAM_VALUE_ABEXA.htm"
abapFile: "ABENSEL_SCREEN_PARAM_VALUE_ABEXA.html"
keywords: ["select", "if", "case", "method", "class", "data", "ABENSEL", "SCREEN", "PARAM", "VALUE", "ABEXA"]
---

The example shows how to use the `value_options` additions of the statement `PARAMETERS`.

This example program consists of five parts, each illustrating one of [`value_options`](ABAPPARAMETERS_VALUE.html) additions of the statement `PARAMETERS`. Each example corresponds to a block on selection screen 100.

-   Part 1: The input fields of the selection parameters on the selection screen are prefilled with default values. The user can accept or change this value. The default value of the field `name` is the user name. The default value for `date` appears in the format defined in the user master record.
-   Part 2: Once input has been entered in the fields `field1` and `field2`, it is displayed in uppercase (`field1`) and without any changes (`field2`) on a list.
-   Part 3: The search help `DEMO_F4_DE` is defined in the dictionary. The search help reads the columns `CARRID` and `CARRNAME` of the database table `SCARR`. Only `CARRNAME` is listed but `CARRID` is marked as an export parameter. Selecting a line places the ID of the airline `CARRID` in the input field.
-   Part 4: The selection parameter `p_prog` is linked with the SPA/GPA parameter `rid`, which is used in the current AS ABAP version to store the name of the program processed last. The SPA/GPA parameter `rid`, for example, is also linked with the input fields for the program name on the dynpros of the transactions `SE38` and `SA38`. For demonstration purposes, this selection parameter is explicitly set to the value *TEST\_PROGRAM* in this example.
-   Part 5: The selection parameter `p_carr` is declared with reference to the field `CARRID` of the database table `SPFLI`. For this field, the check table `SCARR` is specified in the ABAP Dictionary. The user can only enter those values for the ID of the airline which are also contained in `SCARR`. The possible entries help of the input field for `p_carr` displays the allowed values.

REPORT demo\_sel\_screen\_parameters\_1.\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 100.\\n\\nSELECTION-SCREEN BEGIN OF BLOCK part1 WITH FRAME TITLE text-001.\\nPARAMETERS: value TYPE i DEFAULT 100,\\n name TYPE sy-uname DEFAULT sy-uname,\\n date TYPE sy-datum DEFAULT '19980627'.\\nSELECTION-SCREEN END OF BLOCK part1.\\n\\nSELECTION-SCREEN BEGIN OF BLOCK part2 WITH FRAME TITLE text-002.\\nPARAMETERS: field1 TYPE c LENGTH 10 DEFAULT 'input1',\\n field2 TYPE c LENGTH 10 DEFAULT 'input2' LOWER CASE.\\nSELECTION-SCREEN END OF BLOCK part2.\\n\\nSELECTION-SCREEN BEGIN OF BLOCK part3 WITH FRAME TITLE text-004.\\nPARAMETERS p\_carrid TYPE s\_carr\_id MATCHCODE OBJECT demo\_f4\_de.\\nSELECTION-SCREEN END OF BLOCK part3.\\n\\nSELECTION-SCREEN BEGIN OF BLOCK part4 WITH FRAME TITLE text-003.\\nPARAMETERS p\_prog TYPE sy-repid MEMORY ID rid.\\nSELECTION-SCREEN END OF BLOCK part4.\\n\\nSELECTION-SCREEN BEGIN OF BLOCK part5 WITH FRAME TITLE text-005.\\nPARAMETERS p\_carr TYPE spfli-carrid VALUE CHECK.\\nSELECTION-SCREEN END OF BLOCK part5.\\n\\nSELECTION-SCREEN END OF SCREEN 100.\\n\\nAT SELECTION-SCREEN OUTPUT.\\n SET PARAMETER ID 'RID' FIELD 'TEST\_PROGRAM'.\\n\\nCLASS start DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS main.\\nENDCLASS.\\n\\nCLASS start IMPLEMENTATION.\\n METHOD main.\\n CALL SELECTION-SCREEN 100 STARTING AT 10 10.\\n IF sy-subrc <> 0.\\n RETURN.\\n ENDIF.\\n WRITE: / 'FIELD1 is transported UPPERCASE : ', field1,\\n / 'FIELD2 is transported without changes: ', field2.\\n ENDMETHOD.\\nENDCLASS.\\n\\nSTART-OF-SELECTION.\\n start=>main( ).\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapparameters.html abapparameters\_value.html