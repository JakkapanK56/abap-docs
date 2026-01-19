---
title: "ABAPCALL_TRANSACTION_AUTH_OBS"
description: |
  ABAPCALL_TRANSACTION_AUTH_OBS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_TRANSACTION_AUTH_OBS.htm"
abapFile: "ABAPCALL_TRANSACTION_AUTH_OBS.html"
keywords: ["do", "if", "case", "try", "data", "ABAPCALL", "TRANSACTION", "AUTH", "OBS"]
---

[Short Reference](ABAPCALL_TRANSACTION_SHORTREF.html)

`CALL TRANSACTION ta [[AND SKIP FIRST SCREEN](ABAPCALL_TRANSACTION_STANDARD.html)]\                    |\ [[USING bdc_tab ...](ABAPCALL_TRANSACTION_USING.html)].`

Obsolete variant of statement [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html). In this variant, neither of the additions [`WITH AUTHORITY-CHECK`](ABAPCALL_TRANSACTION_AUTHORITY.html) or [`WITHOUT AUTHORITY-CHECK`](ABAPCALL_TRANSACTION_AUTHORITY.html) are specified. In this case, the content of the DDIC database table `TCDCOUPLES` specifies whether automatic authorization checks take place or not.

If the current transaction code and the called transaction code exist as a pair in the columns `TCODE` and `CALLED` of the database table `TCDCOUPLES` and if the database field `OKFLAG` of this row has the value *X*, the same authorization checks are performed as when the addition [`WITH AUTHORITY-CHECK`](ABAPCALL_TRANSACTION_AUTHORITY.html) is specified. If this is not the case, no check takes place.

The entries in the DDIC database table `TCDCOUPLES` can be maintained using transaction `SE97`. The entry in the column `MAINTFLAG` controls the program behavior if the authorization is missing (see the documentation of the data element `TCDCOUPMSG`).

The obsolete control of the authorization check described here can be overridden by the hidden profile parameter `auth/check/calltransaction`. This profile parameter is not provided by default, but may have been created manually. The following table shows in which combinations of the value in `OKFLAG` in `TCDCOUPLES` (first column) and the value of existing profile parameter (first row) an authorization check takes place.

The last row also describes the behavior for when `TCDCOUPLES` does not contain a corresponding entry. Value 2 for the profile parameter is the standard behavior.

The *security tests* in the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) ignore both the content of the DDIC database table `TCDCOUPLES` and the hidden profile parameter `auth/check/calltransaction`. These tests always produce an error if neither of the additions `WITH|WITHOUT AUTHORITY-CHECK` is specified and if no preceding authorization check is performed by calling the function module `AUTHORITY_CHECK_TCODE` or the statement [`AUTHORITY-CHECK`](ABAPAUTHORITY-CHECK.html).

-   The function module `AUTHORITY_CHECK_TCODE` also depends on the content of the DDIC database table `TCDCOUPLES`. It checks the associated authorization objects only if the database field `OKFLAG` in `TCDCOUPLES` has the value *X* or blank. If the field has the value *N*, the function module does not perform a check. If the authorization is to be checked regardless of the table entries, the statement `AUTHORITY-CHECK` must be used.
-   The dependence of the automatic authorization checks on entries in a database table and a hidden profile parameter is extremely error-prone. For this reason, this form of the statement `CALL TRANSACTION` is obsolete. If possible, one of the additions [`WITH AUTHORITY-CHECK`](ABAPCALL_TRANSACTION_AUTHORITY.html) or [`WITHOUT AUTHORITY-CHECK`](ABAPCALL_TRANSACTION_AUTHORITY.html) should be used.
-   In releases where the additions [`WITH AUTHORITY-CHECK`](ABAPCALL_TRANSACTION_AUTHORITY.html) or [`WITHOUT AUTHORITY-CHECK`](ABAPCALL_TRANSACTION_AUTHORITY.html) did not yet exist, the recommendation was that the authorization check be performed before the transaction was called using the function module `AUTHORITY_CHECK_TCODE` or the statement [`AUTHORITY-CHECK`](ABAPAUTHORITY-CHECK.html). Here, the function module `AUTHORITY_CHECK_TCODE` also has a dependency on the DDIC database table `TCDCOUPLES`, but the statement `AUTHORITY-CHECK` does not. The *security tests* in the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) still accept preceding checks of this nature but in new programs the additions should be used.

\\ **0** **1** **2** **3**\\ **X**\\ `-`\\ \\ `x` `x`\\ \\ `x`\\ **N**\\ `-`\\ \\ `x`\\ \\ `-`\\ \\ `-`\\ **blank**\\ `-`\\ \\ `x`\\ \\ `-`\\ \\ `x` abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenprogram\_call\_obsolete.html