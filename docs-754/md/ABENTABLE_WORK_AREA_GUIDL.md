---
title: "Table Work Areas - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_work_area_guidl.htm"
abapFile: "abentable_work_area_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [Data Types and Data Objects](ABENDATA_TYPE_OBJ_GUIDL.md) → 

Table Work Areas

Background

Table work areas are structured data objects of a flat structure type, a database table type, or a view type from ABAP Dictionary declared using the statements TABLES or NODES. If declared using NODES, other ABAP Dictionary types are also possible.

From the perspective of the data type, the statements

[TABLES table\_wa](ABAPTABLES.md).

[NODES table\_wa](ABAPNODES.md).

are the same as

DATA table\_wa TYPE table\_wa.

This means that data objects with the same name and type as the corresponding data types from ABAP Dictionary are declared. This is supplemented by further meanings of TABLES and NODES. For the full range of meanings, refer to their documentation. The essential properties are as follows:

-   TABLES and NODES declare [interface work areas](ABENINTERN_EXTERN_PROC_CALL_GUIDL.md "Guideline"), which are shared by multiple programs of a program group.

-   TABLES declares interfaces to classic dynpros and selection screens.

-   NODES declares an interface to logical databases.

In addition, it is also possible to use table work areas declared using TABLES as implicit work areas in obsolete abbreviated forms of ABAP SQL, or even older statements for database accesses.

Rule

No table work areas except for classic dynpros

Only use the statement TABLES in the global declaration part of function groups to communicate with classic dynpros. Apart from in wrappers of logical databases, the statement NODES is no longer required.

Details

The statement TABLES is not allowed within classes anyway and, in the syntax, the statement NODES can only be created in the global declaration part of an executable program associated with a logical database. The latter option is [no longer allowed](ABENPROGRAM_ATTRIBUTE_GUIDL.md "Guideline").

Since obsolete database accesses requiring the statement TABLES and shared data areas between programs are not allowed, there is no need to use the statement TABLES, except for declaring interfaces to classic dynpros (see the following exception).

Exception

If dynpro fields in [classic dynpros](ABENUSER_INTERFACES_GUIDL.md "Guideline") are defined with reference to flat structures in ABAP Dictionary, the identically named global data objects of the ABAP program must be declared with the statement TABLES. Otherwise, the data objects of the ABAP program are not linked to the dynpro fields, and their content cannot be accessed. In addition, TABLES is also required for declaring specific work areas when handling function codes of selection screens.

Note

The restriction on the statement TABLES to this last remaining technical requirement, that is, the communication with classic dynpros and selection screens, can also be derived from other rules of these guidelines. However, since the use of the statement TABLES instead of the statement DATA is still very popular among experienced ABAP developers, the rule above explicitly stresses that it is not allowed.
