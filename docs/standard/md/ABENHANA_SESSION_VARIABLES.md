---
title: "ABENHANA_SESSION_VARIABLES"
description: |
  ABENHANA_SESSION_VARIABLES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENHANA_SESSION_VARIABLES.htm"
abapFile: "ABENHANA_SESSION_VARIABLES.html"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "data", "ABENHANA", "SESSION", "VARIABLES"]
---

Session variables are global variables in the SAP HANA database. They can be read there with the built-in function [`SESSION_CONTEXT`](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f). Session variables contain global information about the current context and are hence similar to [ABAP system fields](ABENSYSTEM_FIELD_GLOSRY.html). In particular, their value should only be changed in exceptional application logic cases, for example, in [SQLScript](ABENSQL_SCRIPT_GLOSRY.html).

When a SAP HANA database is used as the [standard AS ABAP database](ABENSTANDARD_DB_GLOSRY.html), the following session variables are filled with ABAP-specific values in ABAP reads:

Reading of the session variable `APPLICATIONUSER` using [ADBC](ABENADBC_GLOSRY.html).

The example [SAP HANA, ABAP-Specific Session Variables](ABENHANA_SESSION_VARIABLES_ABEXA.html) shows different ways of accessing the session variables specified here.

-   `CLIENT` contains the current [client](ABENCLIENT_GLOSRY.html) in accordance with the nominal value of the ABAP system field [`sy-mandt`](ABENSYSTEM_FIELDS.html).
-   `CDS_CLIENT` like `CLIENT` but with the following differences:

-   `CDS_CLIENT` is set to the specified value when a CDS entity whose client handling algorithm is governed by that session variable or any CDS table function is accessed with an ABAP SQL statement with the addition [`USING CLIENT`](ABAPSELECT_CLIENT.html).
-   During an [AMDP method](ABENAMDP_METHOD_GLOSRY.html) call from ABAP, where one of the options [`AMDP OPTIONS CDS SESSION CLIENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) is specified in the declaration, `CDS_CLIENT` is set to the value specified there.

-   `APPLICATIONUSER` contains the current [user name](ABENUSER_NAME_GLOSRY.html) in accordance with the nominal value of the ABAP system field [`sy-uname`](ABENSYSTEM_FIELDS.html).
-   `LOCALE_SAP` contains the [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html) of the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html) in accordance with the nominal value of the ABAP system field [`sy-langu`](ABENSYSTEM_FIELDS.html).
-   `SAP_SYSTEM_DATE` contains the current [system date](ABENSYSTEM_DATE_GLOSRY.html) of the AS ABAP in accordance with the nominal value of ABAP system field [`sy-datum`](ABENSYSTEM_FIELDS.html).

-   The ABAP-specific session variables can be read, for example, in [AMDP methods](ABENAMDP_HDB_SQLSCRIPT.html) and make the corresponding input parameters superfluous. Such a method should only be called up from ABAP programs. Otherwise, it cannot be guaranteed that the variables will be provided with the correct values. However, writes to session variables with the SQLScript statement `SET` are not allowed in AMDP methods.
-   In the CDS DDL of the [ABAP CDS](ABENABAP_CDS_GLOSRY.html), the syntax `$session.vname` can be used in the definition of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) to access the ABAP-specific session variables. The name `vname` is then different from the name shown here. The CDS session variable `client` accesses `CDS_CLIENT`, not `CLIENT`. When a CDS view is accessed using [ABAP SQL](ABENABAP_SQL_GLOSRY.html), the session variables are available on all supported database platforms and not just on the SAP HANA database.
-   In ABAP reads, regardless of whether they are in ABAP SQL, Native SQL, or AMDP, the session variable `LOCALE_SAP` contains the current value of the [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html), which can be set by the statement [`SET LOCALE LANGUAGE`](ABAPSET_LOCALE.html).

DATA uname TYPE sy-uname. \\n\\ \\nTRY. \\n FINAL(result) = NEW cl\_sql\_statement( )->execute\_query( \\n \`select SESSION\_CONTEXT('APPLICATIONUSER') from DUMMY\` ). \\n\\ \\n result->set\_param( REF #( uname ) ). \\n result->next( ). \\n result->close( ). \\n cl\_demo\_output=>display( uname ). \\n CATCH cx\_sql\_exception. \\n ... \\nENDTRY. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_hana.html