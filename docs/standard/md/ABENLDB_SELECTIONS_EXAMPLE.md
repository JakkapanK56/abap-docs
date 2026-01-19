---
title: "ABENLDB_SELECTIONS_EXAMPLE"
description: |
  ABENLDB_SELECTIONS_EXAMPLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLDB_SELECTIONS_EXAMPLE.htm"
abapFile: "ABENLDB_SELECTIONS_EXAMPLE.html"
keywords: ["select", "delete", "if", "data", "ABENLDB", "SELECTIONS", "EXAMPLE"]
---

A logical database `TEST_LDB` has the structure shown in [Example of a Logical Database](ABENLDB_EXAMPLE.html). The generated proposal for the selection include is then as follows:

\*-----------------------------------------------------------\* \\n\* Include DBTEST\_LDBSEL \\n\* It will be automatically included into the database program \\n\*-----------------------------------------------------------\* \\n\* If the source is automatically generated, \\n\* perform the following steps: \\n\* 1. Replace ? by suitable names (at most 8 characters). \\n\* 2. Activate SELECT-OPTIONS and PARAMETERS (delete stars). \\n\* 3. Save source code. \\n\* 4. Edit database program. \\n\* \\n\* Hint : Syntax check is not possible within this include! \\n\* It will be checked during syntax check of database program. \\n\*-----------------------------------------------------------\* \\n\* SELECT-OPTIONS :  ?  FOR LFA1-LIFNR. \\n\* Parameter for search pattern selection: \\n\* PARAMETERS p\_sp AS SEARCH PATTERN FOR TABLE LFA1. \\n\* SELECT-OPTIONS : \\n\*                   ?  FOR LFB1-LIFNR, \\n\*                   ?  FOR LFB1-BUKRS. \\n\* SELECT-OPTIONS : \\n\*                   ?  FOR LFC1-LIFNR, \\n\*                   ?  FOR LFC1-BUKRS, \\n\*                   ?  FOR LFC1-GJAHR. \\n\* SELECT-OPTIONS : \\n\*                   ?  FOR BKPF-BUKRS, \\n\*                   ?  FOR BKPF-BELNR, \\n\*                   ?  FOR BKPF-GJAHR. \\n\* Enable DYNAMIC SELECTIONS for selected nodes : \\n\* Enable FIELD SELECTION for selected nodes :

If the nodes `LFA1` and `LFB1` are defined for dynamic selections and the node `LFC1` defined for field selections, the following additional program lines are generated:

SELECTION-SCREEN DYNAMIC SELECTIONS FOR TABLE LFA1. \\nSELECTION-SCREEN DYNAMIC SELECTIONS FOR TABLE LFB1. \\nSELECTION-SCREEN FIELD SELECTION FOR TABLE LFC1.

This automatically created selection include can be completed, for example, as follows:

\* Selection criteria: \\n  SELECT-OPTIONS slifnr  FOR lfa1-lifnr. \\n  SELECT-OPTIONS sbukrs  FOR lfb1-bukrs. \\n  SELECT-OPTIONS sgjahr  FOR flc1-gjahr. \\n  SELECT-OPTIONS sbelnr  FOR bkpf-belnr. \\n\* User-defined parameters: \\n  PARAMETERS pstida LIKE sy-datum FOR NODE bkpf. \\n\* Dynamic selections for LFA1 and LFB1: \\n  SELECTION-SCREEN DYNAMIC SELECTIONS FOR NODE: lfa1, lfb1. \\n\* Field selection for LFB1 and LFC1: \\n  SELECTION-SCREEN FIELD SELECTION FOR NODE: lfb1, lfc1.

A selection is made from the available selection criteria and is given a name. The additional parameter `pstida` is declared and connected to the node `BKPF`. Dynamic selections are defined for the tables`LFA1` and `LFB1`. The tables `LFB1` and `LFC1` are defined for field selections.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_examples.html