---
title: "ABENOS_TRANSACTION_NESTING"
description: |
  ABENOS_TRANSACTION_NESTING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOS_TRANSACTION_NESTING.htm"
abapFile: "ABENOS_TRANSACTION_NESTING.html"
keywords: ["update", "do", "if", "case", "method", "data", "ABENOS", "TRANSACTION", "NESTING"]
---

The top level transaction is the transaction of the uppermost level. All transactions started during the top level transaction are subtransactions and do not lead to a `COMMIT WORK` when they end. The transaction mode determines how the top level transaction is created.

A subtransaction can be created by starting a new transaction before another transaction has ended. Subtransactions must be ended within the transaction in which they are embedded. A `COMMIT WORK` is never triggered when a subtransaction ends. Changes to the persistent objects of a subtransaction are only updated when the top level transaction has ended. This occurs explicitly in a `COMMIT WORK` or implicitly in an `END`, depending on the transaction mode. The transaction mode can also be queried using `IF_OS_TRANSACTION~GET_MODES` for subtransactions, but the transaction mode always indicates the global setting of the Object Services for the current program.

A program can only have one top level transaction at a time. A new transaction can be started as the top level transaction when the old top level transaction has ended.

Within a transaction, further subtransactions can be started after the end of another subtransaction. Changes to persistent objects between subtransactions belong to the transaction at the next higher level.

If transactions are executed consecutively, that is, one top level transaction is ended and then a new one started, the affected persistent objects are invalidated. When an object of this type is accessed in the next transaction, it is loaded again from the database. This time-consuming process can be avoided by chaining top level transactions with `IF_OS_TRANSACTION~END_AND_CHAIN` or `IF_OS_TRANSACTION~UNDO_AND_CHAIN`. In this case, the persistent objects are not invalidated. However, a new transaction object is created, and its reference is returned as the return value.

These methods can be used for top level transactions in object-oriented mode, but not for the top level transaction in compatibility mode. The methods do not need to be executed for subtransactions since the persistent objects are persisted until the change has been made, but are not invalidated.

After the method `END_AND_CHAIN` of `IF_OS_TRANSACTION` is called, the reference variable `t` refers to a new transaction object.

-   Compatibility Mode
-   The top level transaction is usually created implicitly when the Object Services are initialized. All explicit transactions of the program are subtransactions of this implicit top level transaction.
-   Object-Oriented Transaction Mode
-   The top level transaction is created explicitly when the first transaction in the program is started. All the other transactions that are started before the top level transaction ends are subtransactions of the explicit top level transaction.

-   Compatibility mode
-   In compatibility mode, a new top level transaction is implicitly created and started when the old top level transaction has ended with `COMMIT WORK`. The new top level transaction manages the changes made to persistent objects.
-   Object-Oriented Mode
-   When the top level transaction has ended with `END`, a `COMMIT WORK` is triggered. The transaction object is invalidated in the program and cannot be started again. The next transaction that is started with `IF_OS_TRANSACTION~START` becomes the new top level transaction. A program is without a transaction between the end of the last and the start of the next top level transaction. Changes made to persistent objects before the new transaction was started are ignored.

DATA tm TYPE REF TO if\_os\_transaction\_manager. \\nDATA t TYPE REF TO if\_os\_transaction. \\n... \\ntm = cl\_os\_system=>get\_transaction\_manager( ). \\nt = tm->create\_transaction( ). "Create first Transaction \\nt->start( ). "Start first Transaction \\n... \\nt = t->end\_and\_chain( ). "End first Transaction, \\n "create and start second one \\n... \\nt->end( ). "End second Transaction abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_object\_services.html abenabap\_object\_services\_transact.html