---
title: "ABAPCALL_TRANSACTION_STANDARD"
description: |
  ABAPCALL_TRANSACTION_STANDARD - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_TRANSACTION_STANDARD.htm"
abapFile: "ABAPCALL_TRANSACTION_STANDARD.html"
keywords: ["do", "if", "try", "catch", "data", "ABAPCALL", "TRANSACTION", "STANDARD"]
---

[Short Reference](ABAPCALL_TRANSACTION_SHORTREF.html)

``CALL TRANSACTION ta [`WITH|WITHOUT AUTHORITY-CHECK`](ABAPCALL_TRANSACTION_AUTHORITY.html)\ [AND SKIP FIRST SCREEN].``

[`... AND SKIP FIRST SCREEN`](#ABAP_ONE_ADD@1@)

This variant calls the version specified in `ta` as described under the statement [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html). The additions [`WITH|WITHOUT AUTHORITY-CHECK`](ABAPCALL_TRANSACTION_AUTHORITY.html) are used to control the authorization check. `AND SKIP FIRST SCREEN` can be used to suppress the initial screen.

This variant does not set the system field `sy-subrc`.

This addition can be used to suppress the display of a [screen layout](ABENSCREEN_GLOSRY.html) of the initial dynpro of a called dialog transaction. The addition `AND SKIP FIRST SCREEN` suppresses the first screen only under the following prerequisites:

If these prerequisites are met, the screen of the dynpro is displayed that is specified in the Screen Painter as the [next dynpro](ABENNEXT_DYNPRO_GLOSRY.html) of the initial dynpro.

If the static next dynpro of the initial dynpro of the called dialog transaction `FLIGHT_TA` is not the initial dynpro itself, its screen is suppressed because its input fields are filled using the SPA/GPA parameters `CAR` and `CON`.

-   For the initial dynpro, its own dynpro number must not be entered as the static next dynpro in [Screen Painter](ABENSCREEN_PAINTER_GLOSRY.html).
-   All mandatory input fields of the initial dynpro must be filled completely and with the correct values by the [SPA/GPA parameters](ABENSPA_GPA_PARAMETER_GLOSRY.html).

DATA: carrid TYPE spfli-carrid, \\n connid TYPE spfli-connid. \\n\\ \\n... \\n\\ \\nSET PARAMETER ID: 'CAR' FIELD carrid, \\n 'CON' FIELD connid. \\n\\ \\nTRY. \\n CALL TRANSACTION 'FLIGHT\_TA' WITH AUTHORITY-CHECK \\n AND SKIP FIRST SCREEN. \\n CATCH cx\_sy\_authorization\_error. \\n RETURN. \\nENDTRY. abenabap.html abenabap\_reference.html abenabap\_execution.html abenabap\_program\_call.html abenabap\_call\_transaction.html abapcall\_transaction.html