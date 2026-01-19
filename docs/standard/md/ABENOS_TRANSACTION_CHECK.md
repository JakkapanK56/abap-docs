---
title: "ABENOS_TRANSACTION_CHECK"
description: |
  ABENOS_TRANSACTION_CHECK - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOS_TRANSACTION_CHECK.htm"
abapFile: "ABENOS_TRANSACTION_CHECK.html"
keywords: ["update", "if", "case", "method", "class", "ABENOS", "TRANSACTION", "CHECK"]
---

A checking agent makes it possible to check the consistency of a persistent object that is to be stored prior to the update. It is a class that implements the interface `IF_OS_CHECK`. The interface has a method `IS_CONSISTENT` with a return value `RESULT` of type `OS_BOOLEAN`.

In the simplest case, the interface is implemented in the persistent class itself since all the attributes are known there and can be checked. If an inconsistency is detected, the system tries to repair it or sets the output value to `OSCON_FALSE`.

The method `IF_OS_TRANSACTION~REGISTER_CHECK_AGENT` can be used to register the required checking agent for a transaction. This causes the transaction service to call the method `IS_CONSISTENT` automatically before the update. An exception is raised if a checking agent has the return value `OSCON_FALSE`.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_object\_services.html abenabap\_object\_services\_transact.html