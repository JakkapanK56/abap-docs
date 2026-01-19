---
title: "Give the components of structures that have the same meaning within a data model the same names"
description: |
  This rule mainly applies to data models defined in ABAP Dictionary (including ABAP CDS). If one of the `CORRESPONDING` constructs above is used in an ABAP program to access structures or structured internal tables (and the structured types of these structures or tables are defined like database tabl
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRUC_COMP_NAMES_GUIDL.htm"
abapFile: "ABENSTRUC_COMP_NAMES_GUIDL.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "internal-table", "ABENSTRUC", "COMP", "NAMES", "GUIDL"]
---

When ABAP programs are executed, the names of data objects usually only have the task of identifying the data objects uniquely. The ABAP statements operate directly with the objects in question without attaching any special meaning to their names. The names of structure components are an exception here. They are evaluated in the following cases:

In these language constructs, the names of the components of the structures in question are compared and the operation is executed using the identically named components (if not overridden by a mapping rule).

**Give structure components with the same meaning the same names**

Give the components of structures that have the same meaning within a data model the same names

This rule mainly applies to data models defined in ABAP Dictionary (including ABAP CDS). If one of the `CORRESPONDING` constructs above is used in an ABAP program to access structures or structured internal tables (and the structured types of these structures or tables are defined like database tables or CDS entities using types from the data model in ABAP Dictionary), it is essential that components from different structures but with the same semantics have the same name.

The database tables `DOKIL`\\ `DOKHL`, and `DOKTL` are in the same package and the same application. The column whose type is determined by the data element `DOKVERS` has the same name (`DOKVERSION`) in `DOKHL` and `DOKTL`, but the name in `DOKIL` is `VERSION`.

Columns of the familiar structures used in the flight data model in training and documentation that have the same semantics usually also have the same names.

-   When structure components are assigned using

-   the statement [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html)
-   the component operator [`CORRESPONDING`](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html)
-   the system class [`CL_ABAP_CORRESPONDING`](ABENCL_ABAP_CORRESPONDING.html)

-   In ABAP SQL, in the addition [`CORRESPONDING`](ABAPINTO_CLAUSE.html) of the statement [`SELECT`](ABAPSELECT.html)
-   In [obsolete calculation statements](ABENCOMPUTING_OBSOLETE.html) like [`ADD-CORRESPONDING`](ABAPADD-CORRESPONDING.html)

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenstructure\_style\_gdl.html abennaming\_gdl.html