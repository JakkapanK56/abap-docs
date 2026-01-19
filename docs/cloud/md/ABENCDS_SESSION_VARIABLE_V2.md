---
title: "ABENCDS_SESSION_VARIABLE_V2"
description: |
  ABENCDS_SESSION_VARIABLE_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SESSION_VARIABLE_V2.htm"
abapFile: "ABENCDS_SESSION_VARIABLE_V2.html"
keywords: ["select", "if", "case", "data", "types", "ABENCDS", "SESSION", "VARIABLE"]
---

`... $session.vname ...`

Specifies a [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ `vname` in an operand position in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). The variable must be prefixed by `$session.`. The prefix and the variable are case-sensitive. `$session.vname`, `$Session.Vname`, and `$SESSION.VNAME` can all be used. No other spellings are allowed.

There are two types of session variables available:

From a technical perspective, session variables indicate global variables of the current database and can be compared to [ABAP system fields](ABENSYSTEM_FIELDS.html). Although application session variables can be changed from ABAP programs, outside of system programs they should only be used for reads.

-   [Built-in session variables](ABENCDS_SESSION_VAR_BUILTIN_V2.html): Built-in session variables are set to their value when a CDS view entity is used in ABAP SQL. They cannot be set or changed from ABAP programs. The following built-in session variables are currently available: `user`, `client`, `system_language`, `system_date`, `user_timezone`, `user_date`.
-   [Application session variables](ABENCDS_SESSION_VAR_APPLICATION_V2.html): Application session variables are required for specific applications and they are set by dedicated system programs. The following application session variables are currently available: `bs_instance_id`, `bs_zone_id`.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_operands\_v2.html