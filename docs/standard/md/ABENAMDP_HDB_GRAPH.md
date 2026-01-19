---
title: "ABENAMDP_HDB_GRAPH"
description: |
  ABENAMDP_HDB_GRAPH - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAMDP_HDB_GRAPH.htm"
abapFile: "ABENAMDP_HDB_GRAPH.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENAMDP", "HDB", "GRAPH"]
---

[AMDP](ABENAMDP_GLOSRY.html) supports two [SAP HANA](ABENSAP_HANA_GLOSRY.html) artifacts for processing [graphs](ABENGRAPH_GLOSRY.html):

Graph workspaces can be consumed by [graph procedures](ABENGRAPH_PROCEDURE_GLOSRY.html) using [GraphScript](ABENGRAPHSCRIPT_GLOSRY.html) which is the implementation language of an [AMDP method](ABENAMDP_METHODS.html) that specifies the addition [`FOR HDB LANGUAGE GRAPH`](ABAPMETHOD_BY_DB_PROC.html) in the `METHOD` statement. In contrast to [AMDP procedures](ABENAMDP_PROCEDURE_GLOSRY.html) and [AMDP functions](ABENAMDP_FUNCTION_GLOSRY.html), methods in this context operate on non-procedural database objects ([DDL objects](ABENDDL_OBJECT_GLOSRY.html)).

[SAP HANA Graph Reference](https://help.sap.com/docs/SAP_HANA_PLATFORM/f381aa9c4b99457fb3c6b53a2fd29c02/f7093581a9284c59a85122a7955749f4)

Graph workspaces are created in [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) that declare a [vertex table](ABENVERTEX_TABLE_GLOSRY.html) and an [edge table](ABENEDGE_TABLE_GLOSRY.html) as sources for a [graph](ABENGRAPH_GLOSRY.html) model.

The declaration consists of the key column of a vertex table ([vertex key](ABENVERTEX_KEY_GLOSRY.html)) and the key column of an edge table ([edge key](ABENEDGE_KEY_GLOSRY.html)), as well as a source and a target column of an edge table. Currently, graph workspaces are restricted to one key column, and one source and target column.

**Note** Graph workspaces cannot be mocked during a syntax check. There is no separate signature available. Instead, the complete [database object](ABENDB_OBJECT_GLOSRY.html) must be created. It might be defined in a different [AMDP class](ABENAMDP_CLASS_GLOSRY.html) and use other [AMDP](ABENAMDP_GLOSRY.html) objects. Hence, a special handling is needed, and implementation details from other classes must be used (transitive syntax check).

**Definition and implementation of a graph workspace**

The following code snippets are taken from the example [AMDP - Graph Processing](ABENAMDP_GRAPH_CS_ABEXA.html).

Definition:

The method definition must include the addition [`FOR DDL OBJECT`](ABAPCLASS-METHODS_FOR_DDL_OBJECT.html).

`CLASS-METHODS graph_workspace FOR DDL OBJECT OPTIONS CDS SESSION CLIENT DEPENDENT.`

Implementation:

The `METHOD` statement includes the addition `BY DATABASE GRAPH WORKSPACE`. Currently, only [CDS views](ABENCDS_VIEW_GLOSRY.html) are allowed after the addition `USING`. The declaration of the vertex table and edge table is included automatically. The declaration consists of the key column of a vertex table ([vertex key](ABENVERTEX_KEY_GLOSRY.html)) and the key column of an edge table ([edge key](ABENEDGE_KEY_GLOSRY.html)), as well as a source and a target column of an edge table. Currently, graph workspaces are restricted to one key column, and one source and destination column.

[Graph procedures](ABENGRAPH_PROCEDURE_GLOSRY.html) are methods that refer to [graph workspaces](ABENGRAPH_WORKSPACE_GLOSRY.html) and operate on [graph](ABENGRAPH_GLOSRY.html) models. Graph procedures may have scalar input parameters and scalar or tabular output parameters. Inconsistencies in the underlying vertex and edge tables may result in runtime errors (`CX_AMDP_EXECUTION_FAILED`), for example, if the edge source or target do not exist in the vertex table.

**Definition and implementation of a graph procedure**

The following code snippets are taken from the example [AMDP - Graph Processing](ABENAMDP_GRAPH_CS_ABEXA.html).

Definition:

The example shows scalar-only importing parameters. The exporting parameters are both scalar and tabular.

`CLASS-METHODS get_shortest_path AMDP OPTIONS CDS SESSION CLIENT DEPENDENT IMPORTING VALUE(im_city_from) TYPE demo_cds_spfli4graph-cityfrom VALUE(im_city_to) TYPE demo_cds_spfli4graph-cityto EXPORTING VALUE(ex_weight) TYPE int8 VALUE(ex_route) TYPE tt_conn RAISING cx_amdp_execution_failed.`

Implementation:

The `METHOD` statement includes the addition `FOR HDB LANGUAGE GRAPH` to denote that the implementation contains [GraphScript](ABENGRAPHSCRIPT_GLOSRY.html) code. The `READ-ONLY` addition is mandatory. The `USING` addition must be followed by a graph workspace.

The example [AMDP - Graph Processing](ABENAMDP_GRAPH_CS_ABEXA.html) demonstrates graph processing using a graph workspace and a graph procedure.

-   [Graph workspaces](ABENGRAPH_WORKSPACE_GLOSRY.html)
-   [Graph procedures](ABENGRAPH_PROCEDURE_GLOSRY.html)

METHOD graph\_workspace BY DATABASE GRAPH WORKSPACE FOR HDB \\n LANGUAGE SQL \\n USING demo\_cds\_spfli4graph \\n demo\_cds\_sgeocity4graph. \\n\\ \\n edge table demo\_cds\_spfli4graph \\n source column cityfrom \\n target column cityto \\n key column connid \\n vertex table demo\_cds\_sgeocity4graph \\n key column city \\nENDMETHOD. METHOD get\_shortest\_path BY DATABASE PROCEDURE FOR HDB \\n LANGUAGE GRAPH \\n OPTIONS READ-ONLY \\n USING cl\_demo\_amdp\_graph\_cs=>graph\_workspace. \\n\\ \\n Graph g = Graph ("CL\_DEMO\_AMDP\_GRAPH\_CS=>GRAPH\_WORKSPACE"); \\n\\ \\n Vertex v\_from = Vertex (:g, :im\_city\_from); \\n Vertex v\_to = Vertex (:g, :im\_city\_to); \\n\\ \\n\\ \\n WeightedPath<BigInt> p\_path = Shortest\_Path (:g, :v\_from, :v\_to \\n ,(Edge flight) =>\\ \\n BigInt \\n \\{ \\n return BigInt( :flight.fltime ); \\n \\} --optional weight \\n ); \\n\\ \\n --Multiset<Vertex> neighborhood = Neighbors (:g, :v\_from, 1, -1); \\n\\ \\n ex\_weight = Weight (:p\_path); \\n ex\_route = select :part.connid, :part.cityfrom, :part.cityto, :part.fltime \\n foreach part in Edges( :p\_path ); \\n\\ \\nENDMETHOD. abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_methods.html abapmethod\_by\_db\_proc.html