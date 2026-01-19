---
title: "ABAPCALL_DATABASE_PROCEDURE"
description: |
  ABAPCALL_DATABASE_PROCEDURE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_DATABASE_PROCEDURE.htm"
abapFile: "ABAPCALL_DATABASE_PROCEDURE.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "internal-table", "ABAPCALL", "DATABASE", "PROCEDURE"]
---

[Short Reference](ABAPCALL_DB_PROCEDURE_SHORTREF.html)

`CALL DATABASE PROCEDURE      \{  proxy       [CONNECTION con|(con_syntax)]\ [parameter_list](ABAPCALL_DB_PROC_PARAMETERS.html)\ \}\    |\ \{ (proxy_name) [CONNECTION con|(con_syntax)]\ \{[parameter_list](ABAPCALL_DB_PROC_PARAMETERS.html)\  \ |[parameter_table\}](ABAPCALL_DB_PROC_PARAMETER_TABLES.html)\ \}.`

[`... CONNECTION con|(con_syntax)`](#ABAP_ONE_ADD@1@)

This statement calls a [database procedure](ABENDATABASE_PROCEDURE_GLOSRY.html) written in [SQLScript](ABENSQL_SCRIPT_GLOSRY.html) ([SQLScript procedure](ABENSQL_SCRIPT_PROCEDURE_GLOSRY.html)) on an [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html).

The SQLScript procedure is specified using a [database procedure proxy](ABENDATABASE_PROCEDURE_PROXY.html) defined for it. The proxy can be specified as follows:

The actual parameters for the input and output parameters of the procedure are either specified statically using [`parameter_list`](ABAPCALL_DB_PROC_PARAMETERS.html) or dynamically using [`parameter_table`](ABAPCALL_DB_PROC_PARAMETERS.html).

The SQLScript procedure is not executed on the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) but on the specified [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) instead. The database connection can be specified statically with `con` or dynamically as the content of `con_syntax`, where the field `con_syntax` must be of the type `c` or `string`. The database connection must be specified with a name from the column `CON_NAME` in the table `DBCON` or that begins with the prefix `R/3*` and hence represents a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) to the standard database.

**SQLScript Procedure**

Take the following SQLScript procedure:

The input parameters are:

The components of `in_sel` are:

The output parameters are:

The components of `out_items` are:

**Database Procedure Proxy**

The following mapping is defined in the associated database procedure proxy `..._PROXY`:

The name and type changes in the date fields should be noted.

**Database Procedure Interface**

The database procedure interface `IF_..._PROXY` is generated with the following type declarations:

**Database Procedure Call**

The following ABAP program section calls the SQLScript procedure using the name of the database procedure proxy, whereby actual parameters typed using the database procedure interface are used.

The example [Database Procedure Call](ABENCALL_DB_PROCEDURE_ABEXA.html) uses a database procedure proxy created in the program to call a SQLScript procedure created using [ADBC](ABENADBC_GLOSRY.html).

Aside from `CX_SY_DB_PROCEDURE_SQL_ERROR`, all the following exception classes are subclasses of the abstract superclass `CX_SY_DB_PROCEDURE_CALL`.

`CX_SY_DB_PROCEDURE_SQL_ERROR`

`CX_SY_DB_PROCEDURE_CONNECTION`

`CX_SY_DB_PROCEDURE_NOT_FOUND`

`CX_SY_DB_PROCEDURE_NOT_SUPP`

`CX_SY_DB_PROCEDURE_OVERFLOW`

`CX_SY_DB_PROCEDURE_PARAMETER`

-   If the addition `CONNECTION` is not specified, the statement can only be executed in a system on the SAP HANA database.
-   If the addition `CONNECTION` is specified, the statement can be executed in every system with a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) to an SAP HANA database.

-   `proxy`
-   Specified directly and statically as `proxy`.
-   `(proxy_name)`
-   Specified as the uppercase content of a parenthesized character-like data object `proxy_name`. The following can be specified for `proxy_name`:

-   Literal or constants
-   If the data object `proxy_name` is specified as a character literal or as a constant, it can be evaluated statically, and the specified proxy is recognized as the used object.
-   Variable
-   If the data object `proxy_name` is specified as a variable, it is specified only dynamically and the content is not evaluated statically.

-   When the statement is executed, `proxy_name` is not evaluated until runtime in both cases.

-   The names of the database procedure proxy and database procedure interface are freely definable. Usually, the database procedure interface has the name of the database procedure proxy with the prefix `IF_`, and any additional [namespace prefix](ABENNAME_SPACE_PREFIX_GLOSRY.html).
-   The constant `CALL_DATABASE_PROCEDURE` of the class [`CL_ABAP_DBFEATURES`](ABENCL_ABAP_DBFEATURES.html) can be used to query whether the current database supports database procedure proxies.
-   [ABAP Managed Database Procedures](ABENAMDP.html) (AMDP) are a recommended alternative to the statement `CALL DATABASE PROCEDURE` if the [standard AS ABAP database](ABENSTANDARD_DB_GLOSRY.html) is an SAP HANA database. Any database procedures of the standard database can be called from AMDP, which makes the use of database procedure proxies superfluous as long as a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) is not used to access another SAP HANA database.
-   No database procedure proxies can be used for SQLScript procedures in [SAP HANA XSA](ABENXSA_GLOSRY.html). Alternative methods such as [AMDP](ABENAMDP.html) or [ADBC](ABENADBC_GLOSRY.html) must be used instead.
-   No database procedure proxies can be used on a [SAP HANA Cloud database](ABENSAP_HANA_CLOUD_DB_GLOSRY.html). The method `CL_SHDB_HC=>IS_HANA_CLOUD` can be used to check if the current database is a SAP HANA Cloud database.

-   The specified database procedure proxy for the database procedure of the secondary connection must exist in the current system.
-   Entries in the DDIC database table `DBCON` can only be created and modified using the [DBA Cockpit](ABENDBA_COCKPIT_GLOSRY.html) tool.
-   The use of `CALL DATABASE PROCEDURE` with the addition `CONNECTION` is recommended in all scenarios in which existing database procedures are used in an SAP HANA database that is not the current standard AS ABAP database (side-by-side scenario).

-   *Cause:* Error on the database when executing an SQLScript function.
    *Runtime error:*\\ `DBPROC_SQL_ERROR`

-   *Cause:* The specified secondary connection was not found in the DDIC database table `DBCON`.
    *Runtime error:*\\ `DBPROC_CONNECTION`

-   *Cause:* The specified database procedure proxy does not exist.
    *Runtime error:*\\ `DBPROC_PROXY_NOT_FOUND`

-   *Cause:* The database does not support SQLScript.
    *Runtime error:*\\ `CALL_DATABASE_NOT_SUPPORTED`

-   *Cause:* The value range of a parameter was exceeded.
    *Runtime error:*\\ `DBPROC_OVERFLOW`

-   *Cause:* One of the following exceptions was raised (abstract superclass).
-   `CX_SY_DB_PROCEDURE_DYN_IN_OUT`
-   *Cause:* Input and output parameters were switched in the dynamic call.
    *Runtime error:*\\ `DBPROC_DYNAMIC_IN_OUT1`, `DBPROC_DYNAMIC_IN_OUT2`
-   `CX_SY_DB_PROCEDURE_DYN_MISSING`
-   *Cause:* Actual parameter missing for a formal parameter in a dynamic call.
    *Runtime error:*\\ `DBPROC_DYNAMIC_MISSING`
-   `CX_SY_DB_PROCEDURE_DYN_NOT_FND`
-   *Cause:* Formal parameter specified incorrectly in a dynamic call.
    *Runtime error:*\\ `DBPROC_DYNAMIC_NOT_FOUND`
-   `CX_SY_DB_PROCEDURE_TYPE_ERROR`
-   *Cause:* Invalid type of an actual parameter in static or dynamic call.
    *Runtime error:*\\ `DBPROC_ILLEGAL_TYPE`, `DBPROC_DYNAMIC_NO_SCALAR`, `DBPROC_DYNAMIC_NO_TABLE`

-   *Cause:* The column `KIND` of the parameter table `ptab` contains an invalid value.
    *Runtime error:*\\ `DBPROC_DYNAMIC_UNKNOWN_KIND`
-   *Cause:* The column `KIND` of the parameter table `ptab` contains the value *C* for input/output parameters. This is not yet supported.
    *Runtime error:*\\ `DBPROC_DYNAMIC_NO_INOUT`
-   *Cause:* The actual parameter assigned to an output parameter cannot be modified.
    *Runtime error:*\\ `DBPROC_OUT_NOT_WRITABLE`

/\*\*\*\*\*\*\*\*\* Begin Procedure Script \*\*\*\*\*\*\*\*\*\*\*\*/ \\nBEGIN \\n out\_items = select items.pos, \\n items.first\_name, \\n items.last\_name, \\n items.posting\_date as date, \\n items.currency, \\n items.amount \\n from zngd\_items as items \\n inner join :in\_sel as sel \\n on ( items.first\_name = sel.first\_name and \\n items.last\_name = sel.last\_name ) \\n where posting\_date = :in\_date; \\nEND; \\n/\*\*\*\*\*\*\*\*\* End Procedure Script \*\*\*\*\*\*\*\*\*\*\*\*/ INTERFACE if\_...\_proxy PUBLIC. \\n TYPES: BEGIN OF in\_sel, \\n first\_name TYPE c LENGTH 20, \\n last\_name TYPE c LENGTH 20, \\n END OF in\_sel. \\n TYPES: in\_date TYPE d. \\n TYPES: BEGIN OF out\_items, \\n pos TYPE i, \\n first\_name TYPE c LENGTH 20, \\n last\_name TYPE c LENGTH 20, \\n posting\_date TYPE d, \\n currency TYPE c LENGTH 4, \\n amount TYPE p LENGTH 6 DECIMALS 2, \\n END OF out\_items. \\nENDINTERFACE. DATA: \\n in\_date TYPE if\_...\_proxy=>in\_date, \\n in\_sel TYPE STANDARD TABLE \\n OF if\_...\_proxy=>in\_sel \\n WITH EMPTY KEY, \\n out\_items TYPE STANDARD TABLE \\n OF if\_...\_proxy=>out\_items \\n WITH EMPTY KEY. \\n\\ \\nin\_date = '20120329'. \\nin\_sel = VALUE #( ( first\_name = 'Dolores' last\_name = 'Oh' ) \\n ( first\_name = 'Benjacomin' last\_name = 'Bozart' ) \\n ( first\_name = 'Johanna' last\_name = 'Gnade' ) ). \\n\\ \\nIF cl\_abap\_dbfeatures=>use\_features( \\n EXPORTING \\n requested\_features = \\n VALUE #( ( cl\_abap\_dbfeatures=>call\_database\_procedure ) ) ) \\n AND NOT cl\_shdb\_hc=>is\_hana\_cloud( ). \\n CALL DATABASE PROCEDURE ...\_proxy \\n EXPORTING in\_date = in\_date \\n in\_sel = in\_sel \\n IMPORTING out\_items = out\_items. \\nENDIF. **Parameter** **Database Type**\\ `in_sel` `Table data type`\\ `in_date` `Scalar` **Component** **Database Type**\\ `FIRST_NAME` `NVARCHAR, length 20`\\ `LAST_NAME` `NVARCHAR, length 20` **Parameter** **Database Type**\\ `out_items` `Table data type` **Component** **Database Type**\\ `POS` `INTEGER`\\ `FIRST_NAME` `NVARCHAR, length 20`\\ `LAST_NAME` `NVARCHAR, length 20`\\ `DATE` `INTEGER`\\ `CURRENCY` `NVARCHAR, length 4`\\ `AMOUNT` `DECIMALS, length 11, scale 2` **Procedure Parameter** **ABAP Name** **ABAP Data Type**\\ `IN_SEL` `IN_SEL` Internal table `IN_SEL`, `FIRST_NAME` `IN_SEL`, `FIRST_NAME`\\ `c`, length 20 `IN_SEL`, `LAST_NAME` `IN_SEL`, `LAST_NAME`\\ `c`, length 20 `IN_DATE` `IN_DATE` `d`\\ `OUT_ITEMS`, `POS` `OUT_ITEMS`, `POS`\\ `i`\\ `OUT_ITEMS`, `FIRST_NAME` `OUT_ITEMS`, `FIRST_NAME`\\ `c`, length 20 `OUT_ITEMS`, `LAST_NAME` `OUT_ITEMS`, `LAST_NAME`\\ `c`, length 20 `OUT_ITEMS`, `DATA` `OUT_ITEMS`, `POSTING_DATE`\\ `d`\\ `OUT_ITEMS`, `CURRENCY` `OUT_ITEMS`, `CURRENCY`\\ `c`, length 4 `OUT_ITEMS`, `AMOUNT` `OUT_ITEMS`, `AMOUNT`\\ `p`, length 6, 2 decimal places abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abenhana\_xsc\_obsolete.html abensap\_hana\_access\_xsc.html abensql\_script.html