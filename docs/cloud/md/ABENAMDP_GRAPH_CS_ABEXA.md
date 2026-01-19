---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENAMDP_GRAPH_CS_ABEXA.htm"
abapFile: "ABENAMDP_GRAPH_CS_ABEXA.html"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "ABENAMDP", "GRAPH", "ABEXA"]
---

This example demonstrates [graph](ABENGRAPH_GLOSRY.html) processing using a [graph workspace](ABENGRAPH_WORKSPACE_GLOSRY.html) and a [graph procedure](ABENGRAPH_PROCEDURE_GLOSRY.html). The AMDP methods both use the addition `CDS SESSION CLIENT DEPENDENT` and are [client-safe](ABENCLIENT_SAFE_GLOSRY.html).

This example accesses a [graph procedure](ABENGRAPH_PROCEDURE_GLOSRY.html) that is declared and implemented in the [AMDP class](ABENAMDP_CLASS_GLOSRY.html)\\ `CL_DEMO_AMDP_GRAPH_CS`.

The method `GET_SHORTEST_PATH` is a [graph procedure](ABENGRAPH_PROCEDURE_GLOSRY.html) that refers to the [graph workspace](ABENGRAPH_WORKSPACE_GLOSRY.html)\\ `CL_DEMO_AMDP_GRAPH_CS=>GRAPH_WORKSPACE` operating on a [graph](ABENGRAPH_GLOSRY.html) model which is a flight data model. The graph workspace includes the declaration of the [vertex table](ABENVERTEX_TABLE_GLOSRY.html) and the [edge table](ABENEDGE_TABLE_GLOSRY.html).

The graph procedure is a read-only procedure that is written in [GraphScript](ABENGRAPHSCRIPT_GLOSRY.html). Its purpose is to return the shortest flight connection between two cities (representing two [vertices](ABENVERTEX_GLOSRY.html)). The parameter `ex_weight` returns the overall flight time, and the parameter `ex_route` returns the a table showing some details of the round trip.

The example shows that the first method call is fine. The second method call does not show any data because the target city is not contained in the graph model. The third method call shows the message that is raised. In this case, neither of the two cities is contained in the graph model

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_amdp\_graph\_proc\_cs DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_amdp\_graph\_proc\_cs IMPLEMENTATION. \\n METHOD main. \\n out->begin\_section( \`Demo: Graph Processing\` \\n )->write\_doc( '**FRANKFURT -> ROME**' ). \\n TRY. \\n cl\_demo\_amdp\_graph\_cs=>get\_shortest\_path( \\n EXPORTING im\_city\_from = 'FRANKFURT' \\n im\_city\_to = 'ROME' \\n IMPORTING ex\_weight = DATA(lv\_weight) \\n ex\_route = DATA(lt\_route) ). \\n\\ \\n out->write( lv\_weight \\n )->write( lt\_route ). \\n\\ \\n CATCH BEFORE UNWIND cx\_amdp\_execution\_failed INTO DATA(lr\_exc). \\n out->write\_doc( |Exception raised!| \\n )->write\_doc( lr\_exc->sql\_message ). \\n ENDTRY. \\n\\ \\n out->line( \\n )->write\_doc( '**ROME -> MADRID**' ). \\n TRY. \\n cl\_demo\_amdp\_graph\_cs=>get\_shortest\_path( \\n EXPORTING im\_city\_from = 'ROME' \\n im\_city\_to = 'MADRID' \\n IMPORTING ex\_weight = lv\_weight \\n ex\_route = lt\_route ). \\n\\ \\n out->write( lv\_weight \\n )->write( lt\_route ). \\n\\ \\n CATCH BEFORE UNWIND cx\_amdp\_execution\_failed INTO lr\_exc. \\n out->write\_doc( |Exception raised!| \\n )->write\_doc( lr\_exc->sql\_message ). \\n ENDTRY. \\n\\ \\n out->line( )->write\_doc( '**MADRID -> ISTANBUL**' ). \\n TRY. \\n cl\_demo\_amdp\_graph\_cs=>get\_shortest\_path( \\n EXPORTING im\_city\_from = 'MADRID' \\n im\_city\_to = 'ISTANBUL' \\n IMPORTING ex\_weight = lv\_weight \\n ex\_route = lt\_route ). \\n\\ \\n out->write( lv\_weight \\n )->write( lt\_route ). \\n CATCH BEFORE UNWIND cx\_amdp\_execution\_failed INTO lr\_exc. \\n out->write\_doc( |Exception raised!| \\n )->write\_doc( lr\_exc->sql\_message ). \\n ENDTRY. \\n\\ \\n ENDMETHOD. \\nENDCLASS. METHOD graph\_workspace BY DATABASE GRAPH WORKSPACE FOR HDB \\n LANGUAGE SQL \\n USING demo\_cds\_spfli4graph \\n demo\_cds\_sgeocity4graph. \\n\\ \\n edge table demo\_cds\_spfli4graph \\n source column cityfrom \\n target column cityto \\n key column connid \\n vertex table demo\_cds\_sgeocity4graph \\n key column city \\nENDMETHOD. METHOD get\_shortest\_path BY DATABASE PROCEDURE FOR HDB \\n LANGUAGE GRAPH \\n OPTIONS READ-ONLY \\n USING cl\_demo\_amdp\_graph\_cs=>graph\_workspace. \\n\\ \\n Graph g = Graph ("CL\_DEMO\_AMDP\_GRAPH\_CS=>GRAPH\_WORKSPACE"); \\n\\ \\n Vertex v\_from = Vertex (:g, :im\_city\_from); \\n Vertex v\_to = Vertex (:g, :im\_city\_to); \\n\\ \\n\\ \\n WeightedPath<BigInt> p\_path = Shortest\_Path (:g, :v\_from, :v\_to \\n ,(Edge flight) =>\\ \\n BigInt \\n \\{ \\n return BigInt( :flight.fltime ); \\n \\} --optional weight \\n ); \\n\\ \\n --Multiset<Vertex> neighborhood = Neighbors (:g, :v\_from, 1, -1); \\n\\ \\n ex\_weight = Weight (:p\_path); \\n ex\_route = select :part.connid, :part.cityfrom, :part.cityto, :part.fltime \\n foreach part in Edges( :p\_path ); \\n\\ \\nENDMETHOD. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_amdp\_graph\_proc\_cs DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_amdp\_graph\_proc\_cs IMPLEMENTATION. \\n METHOD main. \\n out->begin\_section( \`Demo: Graph Processing\` \\n )->write\_doc( '**FRANKFURT -> ROME**' ). \\n TRY. \\n cl\_demo\_amdp\_graph\_cs=>get\_shortest\_path( \\n EXPORTING im\_city\_from = 'FRANKFURT' \\n im\_city\_to = 'ROME' \\n IMPORTING ex\_weight = DATA(lv\_weight) \\n ex\_route = DATA(lt\_route) ). \\n\\ \\n out->write( lv\_weight \\n )->write( lt\_route ). \\n\\ \\n CATCH BEFORE UNWIND cx\_amdp\_execution\_failed INTO DATA(lr\_exc). \\n out->write\_doc( |Exception raised!| \\n )->write\_doc( lr\_exc->sql\_message ). \\n ENDTRY. \\n\\ \\n out->line( \\n )->write\_doc( '**ROME -> MADRID**' ). \\n TRY. \\n cl\_demo\_amdp\_graph\_cs=>get\_shortest\_path( \\n EXPORTING im\_city\_from = 'ROME' \\n im\_city\_to = 'MADRID' \\n IMPORTING ex\_weight = lv\_weight \\n ex\_route = lt\_route ). \\n\\ \\n out->write( lv\_weight \\n )->write( lt\_route ). \\n\\ \\n CATCH BEFORE UNWIND cx\_amdp\_execution\_failed INTO lr\_exc. \\n out->write\_doc( |Exception raised!| \\n )->write\_doc( lr\_exc->sql\_message ). \\n ENDTRY. \\n\\ \\n out->line( )->write\_doc( '**MADRID -> ISTANBUL**' ). \\n TRY. \\n cl\_demo\_amdp\_graph\_cs=>get\_shortest\_path( \\n EXPORTING im\_city\_from = 'MADRID' \\n im\_city\_to = 'ISTANBUL' \\n IMPORTING ex\_weight = lv\_weight \\n ex\_route = lt\_route ). \\n\\ \\n out->write( lv\_weight \\n )->write( lt\_route ). \\n CATCH BEFORE UNWIND cx\_amdp\_execution\_failed INTO lr\_exc. \\n out->write\_doc( |Exception raised!| \\n )->write\_doc( lr\_exc->sql\_message ). \\n ENDTRY. \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_examples.html abenamdp\_cs\_abexas.html