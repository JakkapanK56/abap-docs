---
title: "ABAP Managed Database Procedures are a framework for managing and calling"
description: |
  in AS ABAP(ABENAS_ABAP_GLOSRY.html). Accordingly, the ABAP Managed Database Procedures manage A procedure or function of this type is implemented in a database-specific language (SQLScript(ABENSQL_SCRIPT_GLOSRY.html), L(ABENLLANG_GLOSRY.html), ... ) in an as an AMDP method(ABENAMDP_METHOD_GL
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAMDP.htm"
abapFile: "ABENAMDP.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABENAMDP"]
---

ABAP Managed Database Procedures are a framework for managing and calling

in [AS ABAP](ABENAS_ABAP_GLOSRY.html). Accordingly, the ABAP Managed Database Procedures manage

A procedure or function of this type is implemented in a database-specific language ([SQLScript](ABENSQL_SCRIPT_GLOSRY.html), [L](ABENLLANG_GLOSRY.html), ... ) in an

as an [AMDP method](ABENAMDP_METHOD_GLOSRY.html) in an [AMDP class](ABENAMDP_CLASS_GLOSRY.html).

The following sections describe the components of AMDP:

Currently, AMDP only supports database procedures and functions from the SAP HANA database. In principle, however, AMDP is designed so that stored procedures and functions from other database systems can also be supported.

The constant `CALL_AMDP_METHOD` of the class [`CL_ABAP_DBFEATURES`](ABENCL_ABAP_DBFEATURES.html) can be used to query whether the current database supports AMDP procedures.

Besides the [C1 contract](ABENC1_CONTRACT_GLOSRY.html), there is a special [release contract](ABENRELEASE_CONTRACT_GLOSRY.html) available to classify repository objects as stable public interface for use in AMDP, the [C4 contract](ABENC4_CONTRACT_GLOSRY.html);

AMDP methods release with a C4 contract must also be released with a C1 contract.

The programming guideline [Use ABAP SQL](ABENDATABASE_ACCESS_GUIDL.html) is particularly relevant for AMDP too. The use of AMDP is not recommended if the same task can be achieved using ABAP SQL (or [ABAP CDS](ABENCDS.html)). The executable example [AMDP, Comparison with ABAP SQL](ABENAMDP_VS_ABAP_SQL_CS_ABEXA.html) demonstrates how a database access not programmed well in ABAP SQL can often be optimized using an improved use of ABAP SQL, making it unnecessary to use AMDP in these cases. AMDP should be used only if it enables access to database-specific functions that do not exist in ABAP SQL (see the executable example for [Currency Conversion](ABENSQL_SCRIPT_CURR_CONV_ABEXA.html)) or if large process flows or analyses that incur repeated transports of large amounts of data between the database and the AS instance can be outsourced.

-   [stored procedures](ABENSTORED_PROCEDURE_GLOSRY.html) or [database procedures](ABENDATABASE_PROCEDURE_GLOSRY.html) and
-   [database functions](ABENDATABASE_FUNCTION_GLOSRY.html)

-   [AMDP procedures](ABENAMDP_PROCEDURE_GLOSRY.html) and
-   [AMDP functions](ABENAMDP_FUNCTION_GLOSRY.html)

-   [AMDP procedure implementation](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html) or
-   [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html)

-   [AMDP - Classes](ABENAMDP_CLASSES.html)
-   [AMDP - Methods](ABENAMDP_METHODS.html)
-   [AMDP - Inheritance](ABENAMDP_INHERITANCE.html)
-   [AMDP - Use](ABENAMDP_CALLS.html)
-   [AMDP - Client Handling](ABENAMDP_CLIENT_HANDLING.html)
-   [AMDP - BAdIs](ABENAMDP_BADIS.html)
-   [AMDP - Database Connections](ABENAMDP_DB_CONNECTIONS.html)
-   [AMDP - Macros](ABENAMDP_MACROS.html)
-   [AMDP - Exception Classes](ABENAMDP_EXCEPTIONS.html)
-   [AMDP - Glossary](ABENAMDP_GLOSSARY.html)
-   [AMDP - Examples](ABENAMDP_EXAMPLES.html)

-   AMDP methods that are released as APIs using a [C1 contract](ABENC1_CONTRACT_GLOSRY.html) can be used in ABAP programs.
-   AMDP methods that are released as APIs using a [C4 contract](ABENC4_CONTRACT_GLOSRY.html) can be used in other AMDP methods.

-   ABAP developers or consumers do not need separate users for the database system to manage and call database procedures and database functions using AMDP. Instead, the AS ABAP logged on to the database system using its work processes requires the correct authorizations to manage database procedures and functions using AMDP. Missing authorizations can be detected using transaction `SICK`.
-   [Table buffering](ABENTABLE_BUFFERING_GLOSRY.html) is bypassed when using AMDP.
-   To process database procedures and functions in [AMDP methods](ABENADT_GLOSRY.html), the [ABAP development tools for Eclipse (ADT)](ABENAMDP_METHOD_GLOSRY.html) are better suited than the [Class Builder](ABENCLASS_BUILDER_GLOSRY.html) in the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html). AMDP classes can only be edited with the ABAP development tools for Eclipse. AMDP classes can also be displayed in the Class Builder.
-   If the current database of an AS ABAP is an SAP HANA database and ABAP programs access [SQLScript procedures](ABENSQL_SCRIPT_PROCEDURE_GLOSRY.html) that outsource code from ABAP programs to the database, ABAP Managed Database Procedures are the replacement technology for [database procedure proxies](ABENSQL_SCRIPT.html). Database procedure proxies are still recommended when using a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) to access SQLScript procedures that exist in a different SAP HANA database.
-   To manage and call database procedures and database functions with [Native SQL](ABENNATIVE_SQL_GLOSRY.html), the AMDP framework uses the [Native SQL interface](ABENNATIVE_SQL_INTERFACE_GLOSRY.html) to access the database.

abenabap.html abenabap\_reference.html abendb\_access.html