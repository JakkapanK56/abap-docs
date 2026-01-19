---
title: "ABENCL_UTCLONG_READ_ABEXA"
description: |
  ABENCL_UTCLONG_READ_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_UTCLONG_READ_ABEXA.htm"
abapFile: "ABENCL_UTCLONG_READ_ABEXA.html"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "catch", "method", "class", "data", "ABENCL", "UTCLONG", "READ", "ABEXA"]
---

This example demonstrates the method `READ` of the system class `CL_ABAP_UTCLONG`.

On a selection screen, an UTC time stamp is specified in a string whose content can be modified in any way. A [date format](ABENDATE_FORMATS.html) and a [time format](ABENTIME_FORMATS.html) can be selected as well.

When *Execute* is chosen, the method `READ` of the system class `CL_ABAP_UTCLONG` is used to read the string as a time stamp. If the read raises an exception, this is shown using a message.

REPORT demo\_cl\_utclong\_read.\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 100 AS WINDOW.\\n PARAMETERS p\_utc TYPE c LENGTH 30 LOWER CASE.\\n SELECTION-SCREEN ULINE.\\n PARAMETERS datfm TYPE t005x-datfm DEFAULT '1'\\n AS LISTBOX VISIBLE LENGTH 40.\\n PARAMETERS timefm TYPE t005x-timefm DEFAULT '0'\\n AS LISTBOX VISIBLE LENGTH 40.\\nSELECTION-SCREEN END OF SCREEN 100.\\n\\nCLASS demo DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS main.\\n PRIVATE SECTION.\\n CLASS-METHODS:\\n setup,\\n teardown,\\n check\_system.\\nENDCLASS.\\n\\nCLASS demo IMPLEMENTATION.\\n METHOD main.\\n DATA(utc) = utclong\_current( ).\\n\\n DO.\\n p\_utc = |\\{ utc TIMESTAMP = ENVIRONMENT TIMEZONE = sy-zonlo \\}|.\\n CALL SELECTION-SCREEN 100 STARTING AT 10 10.\\n IF sy-subrc <> 0.\\n EXIT.\\n ENDIF.\\n setup( ).\\n TRY.\\n FINAL(utc\_save) = utc.\\n cl\_abap\_utclong=>read( EXPORTING string = p\_utc\\n timezone = sy-zonlo\\n IMPORTING value = utc ).\\n CATCH cx\_abap\_utclong\_invalid INTO FINAL(exc).\\n MESSAGE exc->get\_text( ) TYPE 'I' DISPLAY LIKE 'E'.\\n utc = utc\_save.\\n ENDTRY.\\n ENDDO.\\n\\n teardown( ).\\n\\n ENDMETHOD.\\n METHOD setup.\\n DATA: t005x\_wa TYPE t005x.\\n check\_system( ).\\n teardown( ).\\n t005x\_wa-land = '@$@'.\\n t005x\_wa-datfm = datfm.\\n t005x\_wa-timefm = timefm.\\n INSERT t005x FROM t005x\_wa.\\n COMMIT WORK.\\n SET COUNTRY '@$@'.\\n ENDMETHOD.\\n METHOD teardown.\\n DELETE FROM t005x WHERE land = '@$@'.\\n COMMIT WORK.\\n ENDMETHOD.\\n METHOD check\_system.\\n IF cl\_abap\_demo\_services=>is\_production\_system( ) = abap\_true.\\n MESSAGE 'This demo cannot be executed in a production system'\\n TYPE 'I' DISPLAY LIKE 'E'.\\n LEAVE PROGRAM.\\n ENDIF.\\n ENDMETHOD.\\nENDCLASS.\\n\\nSTART-OF-SELECTION.\\n demo=>main( ).\\n abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abentime\_stamps.html abenutclong.html abentimestamp\_system\_class.html