---
title: "ABENCALL_TRANSACTION_ABEXA"
description: |
  ABENCALL_TRANSACTION_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCALL_TRANSACTION_ABEXA.htm"
abapFile: "ABENCALL_TRANSACTION_ABEXA.html"
keywords: ["select", "if", "try", "catch", "method", "class", "ABENCALL", "TRANSACTION", "ABEXA"]
---

The example demonstrates a transaction call using SPA/GPA parameters.

The transaction `DEMO_TRANSACTION` displays the details for a flight uniquely identified by the airline and the flight number. It is called from `main` using the statement `CALL TRANSACTION` and filled with [SPA/GPA parameters](ABENSPA_GPA_PARAMETER_GLOSRY.html) as initial values using the statement `SET PARAMETER`.

REPORT demo\_call\_transaction\_spa\_gpa.\\n\\nPARAMETERS: carrid TYPE spfli-carrid,\\n connid TYPE spfli-connid.\\n\\nCLASS demo DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS main.\\nENDCLASS.\\n\\nCLASS demo IMPLEMENTATION.\\n METHOD main.\\n\\n SET PARAMETER ID: 'CAR' FIELD carrid,\\n 'CON' FIELD connid.\\n TRY.\\n CALL TRANSACTION 'DEMO\_TRANSACTION' WITH AUTHORITY-CHECK.\\n CATCH cx\_sy\_authorization\_error.\\n RETURN.\\n ENDTRY.\\n\\n ENDMETHOD.\\nENDCLASS.\\n\\nSTART-OF-SELECTION.\\n demo=>main( ).\\n abenabap.html abenabap\_reference.html abenabap\_execution.html abenabap\_program\_call.html abenabap\_call\_transaction.html abapcall\_transaction.html abentransactions\_abexas.html