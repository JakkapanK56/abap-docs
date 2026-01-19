---
title: "ABENAMDP_GLOSSARY"
description: |
  ABENAMDP_GLOSSARY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENAMDP_GLOSSARY.htm"
abapFile: "ABENAMDP_GLOSSARY.html"
keywords: ["if", "method", "class", "data", "ABENAMDP", "GLOSSARY"]
---

In the following, terms of the [ABAP Glossary](ABENABAP_GLOSSARY.html) are listed, that are relevant for [AMDP](ABENAMDP.html).

**ABAP Managed Database Procedures**

AMDP for short. Class-based framework for managing and calling [stored procedures](ABENSTORED_PROCEDURE_GLOSRY.html) or [database procedures](ABENDATABASE_PROCEDURE_GLOSRY.html) as [AMDP procedures](ABENAMDP_PROCEDURE_GLOSRY.html) in [AS ABAP](ABENAS_ABAP_GLOSRY.html).

**AMDP**

*\->*\\ [ABAP Managed Database Procedures](ABENABAP_MANAGED_DB_PROC_GLOSRY.html)

**AMDP BAdI**

Special [BAdI](ABENBADI_GLOSRY.html) for [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html). If the associated [AMDP procedure](ABENAMDP_PROCEDURE_GLOSRY.html) is called from a different [AMDP method](ABENAMDP_METHOD_GLOSRY.html), this takes place based on the switch-based rules of the ABAP Enhancement Framework.

**AMDP class**

[Global class](ABENGLOBAL_CLASS_GLOSRY.html) with one or more [tag interfaces](ABENTAG_INTERFACE_GLOSRY.html)\\ `IF_AMDP_MARKER_ ...` for [ABAP Managed Database Procedures](ABENABAP_MANAGED_DB_PROC_GLOSRY.html). An AMDP class can contain [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) for different [database systems](ABENDATABASE_SYSTEM_GLOSRY.html).

**AMDP function**

[Database function](ABENDATABASE_FUNCTION_GLOSRY.html) of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) that is implemented in an [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) of an [AMDP class](ABENAMDP_CLASS_GLOSRY.html) and is replicated from there to the [database system](ABENDATABASE_SYSTEM_GLOSRY.html). There are [AMDP table functions](ABENAMDP_TABLE_FUNCTION_GLOSRY.html) or [AMDP scalar functions](ABENAMDP_SCALAR_FUNCTION_GLOSRY.html). See also [AMDP procedure](ABENAMDP_PROCEDURE_GLOSRY.html).

**AMDP function implementation**

[AMDP method](ABENAMDP_METHOD_GLOSRY.html) with [return value](ABENRETURN_VALUE_GLOSRY.html) that is indicated by [`BY DATABASE FUNCTION`](ABAPMETHOD_BY_DB_PROC.html) in the [implementation part](ABENIMPLEMENTATION_PART_GLOSRY.html) of the [class](ABENCLASS_GLOSRY.html). AMDP functions are implemented in an [AMDP function](ABENAMDP_FUNCTION_GLOSRY.html) implementation. An AMDP function implementation for an [AMDP scalar function](ABENAMDP_SCALAR_FUNCTION_GLOSRY.html) can be called in ABAP programs like a regular [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html). An AMDP function implementation for an [AMDP table function](ABENAMDP_TABLE_FUNCTION_GLOSRY.html), on the other hand, is generally used to implement a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html). It can be used as a data source of [ABAP SQL](ABENABAP_SQL_GLOSRY.html) read statements using the [CDS entity](ABENCDS_ENTITY_GLOSRY.html), but cannot be called in ABAP programs. See also [AMDP procedure implementation](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html).

**AMDP macro**

Syntax specified in the implementation of an [AMDP method](ABENAMDP_METHOD_GLOSRY.html) in [SQLScript](ABENSQL_SCRIPT_GLOSRY.html), which is replaced by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) when the [database procedure](ABENDATABASE_PROCEDURE_GLOSRY.html) is generated on the [database](ABENDATABASE_GLOSRY.html) in compliance with the assigned rules.

**AMDP method**

[Method](ABENMETHOD_GLOSRY.html) of an [AMDP class](ABENAMDP_CLASS_GLOSRY.html) that is flagged as an [AMDP procedure implementation](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html) using [`BY DATABASE PROCEDURE`](ABAPMETHOD_BY_DB_PROC.html) or as an [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) using [`BY DATABASE FUNCTION`](ABAPMETHOD_BY_DB_PROC.html) in the [implementation part](ABENIMPLEMENTATION_PART_GLOSRY.html) of the class.

**AMDP procedure**

[Database procedure](ABENDATABASE_PROCEDURE_GLOSRY.html) implemented in an [AMDP procedure implementation](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html) of an [AMDP class](ABENAMDP_CLASS_GLOSRY.html) and replicated from there to the [database system](ABENDATABASE_SYSTEM_GLOSRY.html). See [AMDP function](ABENAMDP_FUNCTION_GLOSRY.html).

**AMDP procedure implementation**

[AMDP method](ABENAMDP_METHOD_GLOSRY.html) without [return value](ABENRETURN_VALUE_GLOSRY.html) that is indicated by [`BY DATABASE PROCEDURE`](ABAPMETHOD_BY_DB_PROC.html) in the [implementation part](ABENIMPLEMENTATION_PART_GLOSRY.html) of the class. In an AMDP procedure implementation, [AMDP procedures](ABENAMDP_PROCEDURE_GLOSRY.html) are implemented in a database-specific language as [ABAP Managed Database Procedures](ABENABAP_MANAGED_DB_PROC_GLOSRY.html). AMDP procedure implementations are called in ABAP just like regular methods and passed to the database system using the Native SQL interface and executed here. See also [AMDP function implementation](ABENAMDP_PROCEDURE_GLOSRY.html).

**AMDP scalar function**

[Scalar function](ABENSCALAR_FUNCTION_GLOSRY.html) of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) implemented in an [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) of an [AMDP class](ABENAMDP_CLASS_GLOSRY.html) and replicated from here to the [database system](ABENDATABASE_SYSTEM_GLOSRY.html).

**AMDP table function**

[Table function](ABENTABLE_FUNCTION_GLOSRY.html) of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) implemented in an [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) of an [AMDP class](ABENAMDP_CLASS_GLOSRY.html) and replicated from here to the [database system](ABENDATABASE_SYSTEM_GLOSRY.html).

**C4 contract, use in ABAP-Managed Database Procedures**

[Release contract](ABENRELEASE_CONTRACT_GLOSRY.html) that ensures a stable public interface of [released APIs](ABENRELEASED_API_GLOSRY.html) for use in [ABAP Managed Database Procedures](ABENABAP_MANAGED_DB_PROC_GLOSRY.html) (AMDP).

**client handling**

Processing of the application data of a [client](ABENCLIENT_GLOSRY.html). When accessing [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html)\\ [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) or [views](ABENVIEW_GLOSRY.html), [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements use [implicit client](ABENABAP_SQL_CLIENT_HANDLING.html) handling, which by default accesses the [current client](ABENCURRENT_CLIENT_GLOSRY.html). By using additions to the ABAP SQL statements, the implicit client handling can be switched to other clients. The client handling of [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) can be defined with special [AMDP options](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html).

**graph procedure**

A graph procedure is an [ABAP Managed Database Procedure](ABENABAP_MANAGED_DB_PROC_GLOSRY.html). It refers to [graph workspace](ABENGRAPH_WORKSPACE_GLOSRY.html) and operates on [graph](ABENGRAPH_GLOSRY.html) models. It is a read-only procedure that is written in [GraphScript](ABENGRAPHSCRIPT_GLOSRY.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html