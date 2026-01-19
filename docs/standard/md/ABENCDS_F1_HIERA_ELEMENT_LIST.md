---
title: "ABENCDS_F1_HIERA_ELEMENT_LIST"
description: |
  ABENCDS_F1_HIERA_ELEMENT_LIST - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_HIERA_ELEMENT_LIST.htm"
abapFile: "ABENCDS_F1_HIERA_ELEMENT_LIST.html"
keywords: ["if", "class", "data", "types", "ABENCDS", "HIERA", "ELEMENT", "LIST"]
---

``... \{ [`element1`](ABENCDS_F1_HIERA_ELEMENT.html), [`element2`](ABENCDS_F1_HIERA_ELEMENT.html), ..., \} ...``

Defines the elements of a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html). The elements are specified in a comma-separated list enclosed in curly brackets `\{ \}`.

The elements determine either the components of the result set of the CDS hierarchy and of the structured data type represented by the CDS hierarchy with respect to ABAP or they expose a CDS association.

The ABAP data types of the components of the structured data type are derived from the dictionary types of the elements in accordance with the associated [mapping rules](ABENDDIC_BUILTIN_TYPES.html).

Element list of a CDS hierarchy in which all possible [hierarchy attributes](ABENCDS_HIERARCHY_ATTRIBUTES.html) are listed after the prefix [`$node.`](ABENCDS_F1_HIERA_ELEMENT.html). The class `CL_DEMO_HRRCHY_TREE_HIER_ATTR` accesses the CDS hierarchy and uses ABAP SQL to read all elements of the element list plus the additional [hierarchy columns](ABENHIERARCHY_COLUMN_GLOSRY.html). When executed, `CL_DEMO_HRRCHY_TREE_HIER_ATTR` demonstrates that the values of the hierarchy attributes and of the associated hierarchy columns are the same.

define hierarchy DEMO\_CDS\_SIMPLE\_TREE\_HIER\_ATTR\\n as parent child hierarchy(\\n source\\n DEMO\_CDS\_SIMPLE\_TREE\_SOURCE\\n child to parent association \_tree\\n start where\\n id = 1\\n siblings order by\\n id ascending\\n )\\n \\{\\n id,\\n parent,\\n $node.hierarchy\_rank as h\_rank,\\n $node.hierarchy\_tree\_size as h\_tree\_size,\\n $node.hierarchy\_parent\_rank as h\_parent\_rank,\\n $node.hierarchy\_level as h\_level,\\n $node.hierarchy\_is\_cycle as h\_is\_cycle,\\n $node.hierarchy\_is\_orphan as h\_is\_orphan,\\n $node.node\_id as h\_node\_id,\\n $node.parent\_id as h\_parent\_id\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_hierarchies.html abencds\_f1\_define\_hierarchy.html