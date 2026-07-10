---
title: "Names of Structure Components - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstruc_comp_names_guidl.htm"
abapFile: "abenstruc_comp_names_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Structure and Style](ABENSTRUCTURE_STYLE_GUIDL.md) →  [Naming](ABENNAMING_GUIDL.md) → 

Names of Structure Components

Background

When ABAP programs are executed, the names of data objects usually only have the task of identifying the data objects uniquely. The ABAP statements operate directly with the objects in question without attaching any special meaning to their names. The names of structure components are an exception here. They are evaluated in the following cases:

-   When structure components are assigned using

-   the statement [MOVE-CORRESPONDING](ABAPMOVE-CORRESPONDING.md)

-   the component operator [CORRESPONDING](ABENCONSTRUCTOR_EXPR_CORRESPONDING.md)

-   the system class [CL\_ABAP\_CORRESPONDING](ABENCL_ABAP_CORRESPONDING.md)

-   In ABAP SQL, in the addition [CORRESPONDING](ABAPINTO_CLAUSE.md) of the statement [SELECT](ABAPSELECT.md)

-   In [obsolete calculation statements](ABENCOMPUTING_OBSOLETE.md) like [ADD-CORRESPONDING](ABAPADD-CORRESPONDING.md)

In these language constructs, the names of the components of the structures in question are compared and the operation is executed using the identically named components (if not overridden by a mapping rule).

Rule

Give structure components with the same meaning the same names

Give the components of structures that have the same meaning within a data model the same names

Details

This rule mainly applies to data models defined in ABAP Dictionary (including ABAP CDS). If one of the CORRESPONDING constructs above is used in an ABAP program to access structures or structured internal tables (and the structured types of these structures or tables are defined like database tables or CDS entities using types from the data model in ABAP Dictionary), it is essential that components from different structures but with the same semantics have the same name.

Bad Example

The database tables DOKIL DOKHL, and DOKTL are in the same package and the same application. The column whose type is determined by the data element DOKVERS has the same name (DOKVERSION) in DOKHL and DOKTL, but the name in DOKIL is VERSION.

Good Example

Columns of the familiar structures used in the flight data model in training and documentation that have the same semantics usually also have the same names.
