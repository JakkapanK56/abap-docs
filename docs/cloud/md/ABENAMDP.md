---
title: "ABAP Managed Database Procedures are a framework for managing and calling"
description: |
  in AS ABAP(ABENAS_ABAP_GLOSRY.html). Accordingly, the ABAP Managed Database Procedures manage A procedure or function of this type is implemented in a database-specific language (SQLScript(ABENSQL_SCRIPT_GLOSRY.html) ) in an as an AMDP method(ABENAMDP_METHOD_GLOSRY.html) in an AMDP class(ABE
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENAMDP.htm"
abapFile: "ABENAMDP.html"
keywords: ["do", "if", "method", "class", "data", "ABENAMDP"]
---

ABAP Managed Database Procedures are a framework for managing and calling

in [AS ABAP](ABENAS_ABAP_GLOSRY.html). Accordingly, the ABAP Managed Database Procedures manage

A procedure or function of this type is implemented in a database-specific language ([SQLScript](ABENSQL_SCRIPT_GLOSRY.html) ) in an

as an [AMDP method](ABENAMDP_METHOD_GLOSRY.html) in an [AMDP class](ABENAMDP_CLASS_GLOSRY.html).

The following sections describe the components of AMDP:

Currently, AMDP only supports database procedures and functions from the SAP HANA database. In principle, however, AMDP is designed so that stored procedures and functions from other database systems can also be supported.

Besides the [C1 contract](ABENC1_CONTRACT_GLOSRY.html), there is a special [release contract](ABENRELEASE_CONTRACT_GLOSRY.html) available to classify repository objects as stable public interface for use in AMDP, the [C4 contract](ABENC4_CONTRACT_GLOSRY.html);

AMDP methods release with a C4 contract must also be released with a C1 contract.

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
-   [AMDP - Macros](ABENAMDP_MACROS.html)
-   [AMDP - Exception Classes](ABENAMDP_EXCEPTIONS.html)
-   [AMDP - Glossary](ABENAMDP_GLOSSARY.html)
-   [AMDP - Examples](ABENAMDP_EXAMPLES.html)

-   AMDP methods that are released as APIs using a [C1 contract](ABENC1_CONTRACT_GLOSRY.html) can be used in ABAP programs.
-   AMDP methods that are released as APIs using a [C4 contract](ABENC4_CONTRACT_GLOSRY.html) can be used in other AMDP methods.

-   ABAP developers or consumers do not need separate users for the database system to manage and call database procedures and database functions using AMDP. Instead, the AS ABAP logged on to the database system using its work processes requires the correct authorizations to manage database procedures and functions using AMDP. Missing authorizations can be detected using transaction `SICK`.
-   [Table buffering](ABENTABLE_BUFFERING_GLOSRY.html) is bypassed when using AMDP.

abenabap.html abenabap\_reference.html abendb\_access.html