---
title: "ABAPCALL_TRANSACTION_AUTHORITY"
description: |
  ABAPCALL_TRANSACTION_AUTHORITY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_TRANSACTION_AUTHORITY.htm"
abapFile: "ABAPCALL_TRANSACTION_AUTHORITY.html"
keywords: ["if", "catch", "method", "class", "data", "ABAPCALL", "TRANSACTION", "AUTHORITY"]
---

[Short Reference](ABAPCALL_TRANSACTION_SHORTREF.html)

 `... WITH|WITHOUT AUTHORITY-CHECK ...`

[1. `... WITH AUTHORITY-CHECK`](#ABAP_ADDITION_1@3@)

[2. `... WITHOUT AUTHORITY-CHECK`](#ABAP_ADDITION_2@3@)

These additions control the authorization checks when the statement [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html) is executed.

The use of the statement `CALL TRANSACTION` without one of the additions `WITH AUTHORITY-CHECK` or `WITHOUT AUTHORITY-CHECK` is [obsolete](ABAPCALL_TRANSACTION_AUTH_OBS.html).

If this addition is specified, the authorization of the current user to execute the called transaction is checked using the following [authorization objects](ABENAUTHORIZATION_OBJECT_GLOSRY.html) before the transaction call is executed:

If no authorization exists, a catchable exception of the class `CX_SY_AUTHORIZATION_ERROR` is raised.

The use of the addition `WITH AUTHORITY-CHECK` is the recommended method of checking the authorizations of the current user. It replaces the preceding checks using the statement [`AUTHORITY-CHECK`](ABAPAUTHORITY-CHECK_SHORTREF.html), the function module `AUTHORITY_CHECK_TCODE`, and checks that depend on the content of the DDIC database table [`TCDCOUPLES`](ABAPCALL_TRANSACTION_AUTH_OBS.html).

If this addition is specified, the authorization of the current user to execute the called transaction is not checked.

-   The authorization object `S_TCODE`.
-   Any authorization object specified in the definition of the transaction code (transaction `SE93`). Fields of the authorization object for which no value is specified here are not checked.

-   The addition `WITHOUT AUTHORITY-CHECK` indicates explicitly that no authorization check is necessary for the transaction call. It prevents the corresponding error message from the *security test* in the [extended program checks](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html).
-   If the addition `WITHOUT AUTHORITY-CHECK` is specified, the content of the DDIC database table [`TCDCOUPLES`](ABAPCALL_TRANSACTION_AUTH_OBS.html) is ignored.

abenabap.html abenabap\_reference.html abenabap\_execution.html abenabap\_program\_call.html abenabap\_call\_transaction.html abapcall\_transaction.html abapcall\_transaction\_standard.html