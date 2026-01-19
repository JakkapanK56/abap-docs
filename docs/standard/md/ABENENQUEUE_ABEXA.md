---
title: "ABENENQUEUE_ABEXA"
description: |
  ABENENQUEUE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENENQUEUE_ABEXA.htm"
abapFile: "ABENENQUEUE_ABEXA.html"
keywords: ["select", "do", "if", "case", "try", "catch", "data", "types", "ABENENQUEUE", "ABEXA"]
---

This example demonstrates how SAP locks are set and released (enqueue and dequeued).

The function codes `ENQUEUE` and `DEQUEUE` of the GUI status can be used to lock and unlock the specified fields of the table `SFLIGHT`. This is done using the lock object `EDEMOFLHT` is used using the corresponding function modules `ENQUEUE_EDEMOFLHT` and `DEQUEUE_EDEMOFLHT`.

The return code `sy-subrc` and the system fields for [messages](ABENMESSAGE_GLOSRY.html) are preserved in dedicated structures. These contain important information returned by the function modules and can be used for analyzing lock problems.

Furthermore, the function code `SELECT` enables the specified fields to be accessed and the function code `SM12` calls the transaction `SM12` to display the lock entries in the central lock table.

Once the data records have been locked by a user, no other user can lock the same records again. All users can, however, access the locked data records using ABAP SQL statements, assuming the program did not already check the locks using `ENQUEUE_EDEMOFLHT`.

REPORT demo\_transaction\_enqueue MESSAGE-ID sabapdemos.\\n\\nTABLES demo\_conn.\\n\\nTYPES:\\n BEGIN OF enq\_deq\_message,\\n subrc TYPE sy-subrc.\\n INCLUDE TYPE symsg.\\nTYPES END OF enq\_deq\_message.\\n\\nDATA enq\_message TYPE enq\_deq\_message.\\nDATA deq\_message TYPE enq\_deq\_message.\\n\\nDATA sflight\_tab TYPE TABLE OF sflight.\\n\\nDATA text TYPE c LENGTH 8.\\n\\nDATA ok\_code TYPE sy-ucomm.\\n\\nCALL SCREEN 100.\\n\\nMODULE init OUTPUT.\\n SET PF-STATUS 'BASIC'.\\n demo\_conn-carrid = 'LH'. demo\_conn-connid = '400'.\\nENDMODULE.\\n\\nMODULE exit INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE enqueue INPUT.\\n CASE ok\_code.\\n WHEN 'ENQUEUE'.\\n CALL FUNCTION 'ENQUEUE\_EDEMOFLHT'\\n EXPORTING\\n mode\_sflight = 'X'\\n carrid = demo\_conn-carrid\\n connid = demo\_conn-connid\\n fldate = demo\_conn-fldate\\n EXCEPTIONS\\n foreign\_lock = 1\\n system\_failure = 2\\n OTHERS = 3. "#EC CI\_SUBRC\\n\\n enq\_message = CORRESPONDING #( sy ).\\n\\n cl\_abap\_browser=>show\_html(\\n html\_string = cl\_demo\_output=>get( enq\_message ) ).\\n\\n CASE enq\_message-subrc.\\n WHEN 0.\\n MESSAGE i101 WITH 'Enqueue successful'(001).\\n WHEN 1.\\n text = enq\_message-msgv1.\\n MESSAGE e103 WITH 'Record already'(002) 'locked by'(003)\\n text.\\n TRY.\\n CALL TRANSACTION 'SM12' WITH AUTHORITY-CHECK.\\n CATCH cx\_sy\_authorization\_error ##NO\_HANDLER.\\n ENDTRY.\\n WHEN 2 OR 3.\\n MESSAGE e103 WITH 'Error in enqueue!'(004)\\n 'SY-SUBRC:' enq\_message-subrc.\\n ENDCASE.\\n\\n WHEN 'DEQUEUE'.\\n CALL FUNCTION 'DEQUEUE\_EDEMOFLHT'\\n EXPORTING\\n mode\_sflight = 'X'\\n carrid = demo\_conn-carrid\\n connid = demo\_conn-connid\\n fldate = demo\_conn-fldate\\n EXCEPTIONS\\n OTHERS = 1 ##FM\_SUBRC\_OK.\\n\\n deq\_message = CORRESPONDING #( sy ).\\n\\n cl\_abap\_browser=>show\_html(\\n html\_string = cl\_demo\_output=>get( deq\_message ) ).\\n\\n CASE deq\_message-subrc.\\n WHEN 0.\\n MESSAGE i101 WITH 'Dequeue successful'(005).\\n WHEN 1.\\n MESSAGE e101 WITH 'Error in dequeue!'(006).\\n ENDCASE.\\n WHEN 'SM12'.\\n TRY.\\n CALL TRANSACTION 'SM12' WITH AUTHORITY-CHECK.\\n CATCH cx\_sy\_authorization\_error ##NO\_HANDLER.\\n ENDTRY.\\n ENDCASE.\\n\\nENDMODULE.\\n\\nMODULE select INPUT.\\n CASE ok\_code.\\n WHEN 'SELECT'.\\n SELECT 'X\*'\\n FROM sflight\\n WHERE carrid = @demo\_conn-carrid\\n AND connid = @demo\_conn-connid\\n AND fldate = @demo\_conn-fldate\\n INTO TABLE @sflight\_tab.\\n MESSAGE i102 WITH 'SY-SUBRC:' sy-subrc.\\n ENDCASE.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html abensap\_lock.html