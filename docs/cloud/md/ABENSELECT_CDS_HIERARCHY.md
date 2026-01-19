---
title: "ABENSELECT_CDS_HIERARCHY"
description: |
  ABENSELECT_CDS_HIERARCHY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSELECT_CDS_HIERARCHY.htm"
abapFile: "ABENSELECT_CDS_HIERARCHY.html"
keywords: ["select", "if", "class", "data", "ABENSELECT", "CDS", "HIERARCHY"]
---

``... cds_hierarchy[[`sql_para`](ABENABAP_SQL_PARAMETERS.html)] ...``

Specifies a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html)\\ `cds_hierarchy` as an [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html)\\ [`hierarchy`](ABENSELECT_HIERARCHY.html) in an ABAP SQL query. The CDS hierarchy is specified using its name `cds_hierarchy` defined after [`DEFINE HIERARCHY`](ABENCDS_F1_DEFINE_HIERARCHY.html). If the CDS hierarchy has input parameters, actual parameters must be assigned to these in a parenthesized list [`sql_para`](ABENABAP_SQL_PARAMETERS.html).

The rows of the tabular result set of a CDS hierarchy specified as a data source are the [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html) of the SQL hierarchy and their columns are composed of the elements of the CDS hierarchy and the additional [hierarchy columns](ABENDDDDL_HIERARCHY.html) that can be used to access the [hierarchy attributes](ABENHIERARCHY_ATTRIBUTE_GLOSRY.html) of the data source of the CDS hierarchy.

When a CDS hierarchy is accessed, the hierarchy columns are read regardless of whether hierarchy attributes are listed in the [element list](ABENCDS_F1_HIERA_ELEMENT_LIST.html). If a hierarchy attribute is defined as an explicit element of the CDS hierarchy, it is possible to access both the element and the additional hierarchy column in ABAP SQL.

Specifies a CDS hierarchy `DEMO_CDS_SIMPLE_TREE` as a data source of a `SELECT` statement in the class `CL_DEMO_HIERARCHY_TREE` with parameter passing and explicit access to the hierarchy columns.

FINAL(start\_id) = 1. \\n\\ \\nSELECT FROM demo\_cds\_simple\_tree( p\_id = @start\_id ) \\n FIELDS id, \\n parent, \\n name, \\n hierarchy\_rank, \\n hierarchy\_tree\_size, \\n hierarchy\_parent\_rank, \\n hierarchy\_level, \\n hierarchy\_is\_cycle, \\n hierarchy\_is\_orphan, \\n node\_id, \\n parent\_id \\n INTO TABLE @FINAL(cds\_result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html abapselect\_data\_source.html abenselect\_hierarchy\_data.html abenselect\_hierarchy.html