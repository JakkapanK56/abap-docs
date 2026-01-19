---
title: "ABAPAUTHORITY-CHECK_DISABLE"
description: |
  ABAPAUTHORITY-CHECK_DISABLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPAUTHORITY-CHECK_DISABLE.htm"
abapFile: "ABAPAUTHORITY-CHECK_DISABLE.html"
keywords: ["do", "if", "case", "method", "class", "ABAPAUTHORITY", "CHECK", "DISABLE"]
---

`AUTHORITY-CHECK DISABLE BEGIN CONTEXT bdef~context_name    ...  AUTHORITY-CHECK DISABLE END.`

`AUTHORITY-CHECK DISABLE BEGIN CONTEXT ...` and `AUTHORITY-CHECK DISABLE END.` form a statement block to activate and deactivate an [authorization context](ABENCDS_AUTH_CONTEXT_GLOSRY.html). These statements can only be used in [ABAP behavior pools](ABENBEHAVIOR_POOL_GLOSRY.html).

`AUTHORITY-CHECK DISABLE BEGIN CONTEXT ...` activates the authorization context `context_name` that is defined in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html)\\ `bdef`. An authorization context is active until the corresponding `AUTHORITY-CHECK DISABLE END.` statement is reached or until the statement block is left, for example, by a [`RETURN`](ABAPRETURN.html) or a [`RAISE`](ABAPRAISE_EXCEPTION.html) statement.

The authorization context is active for all methods or functions that are called between `AUTHORITY-CHECK DISABLE BEGIN ...` and `AUTHORITY-CHECK DISABLE END.`. Statements with `AUTHORITY-CHECK DISABLE BEGIN ...` and `AUTHORITY-CHECK DISABLE END.` can be nested. In this case, the superset of all [authorization objects](ABENAUTHORIZATION_OBJECT_GLOSRY.html) listed in all the active authorization contexts is disabled.

`AUTHORITY-CHECK DISABLE END.` deactivates the authorization context of the corresponding `AUTHORITY-CHECK DISABLE BEGIN CONTEXT ...` statement.

The statement can only be used if the BDEF that defines the authorization context is on the stack. Since release 7.88, the statement can only be used in implementation classes of the BDEF that defines the authorization context.

The activation of an authorization context is either done explicitly by this statement or implicitly by registering a context for a handler method in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) with the notation [`... for disabled ...`](ABENBDL_AUTHORIZATION_CONTEXT.html). In the latter case, an `AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END.` statement block is implicitly generated for the corresponding methods in the [behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). The explicit use of the statement block is not required.

[RAP BDL - define authorization context](ABENBDL_AUTHORIZATION_CONTEXT.html)

The example [ABAP EML - `AUTHORITY-CHECK DISABLE`](ABENEML_AUTH_CHECK_DISABLE_ABEXA.html) demonstrates `AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END.` statements with an unmanaged RAP BO.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abeneml\_in\_abp.html