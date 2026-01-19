---
title: "ABENOS_TRANSACTION_TERMS"
description: |
  ABENOS_TRANSACTION_TERMS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOS_TRANSACTION_TERMS.htm"
abapFile: "ABENOS_TRANSACTION_TERMS.html"
keywords: ["update", "do", "case", "class", "data", "ABENOS", "TRANSACTION", "TERMS"]
---

The classic SAP transaction concept is based on SAP LUWs in which changes to the database are bundled into a single database LUW. The bundling techniques used here include programming database changes in procedures and registering them in a database LUW for later execution instead of performing them immediately. Possible procedures include subroutines (registered using `PERFORM ON COMMIT`) and update function modules (registered using `CALL FUNCTION IN UPDATE TASK`). In both cases, the registered procedures are executed using the statement `COMMIT WORK`.

The Transaction Service of the Object Services is also based on SAP LUWs and does not introduce a new transaction concept. However, it encapsulates the bundling before the developer, so that the developer does not have to explicitly create and register procedures that change the database. Internally, the transaction service still works with the classic update function modules.

This concept allows interaction between classic and object-oriented transactions, controlled using a [transaction mode](ABENOS_TRANSACTION_MODE.html) that can be set for a given program.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_object\_services.html abenabap\_object\_services\_transact.html