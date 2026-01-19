---
title: "ABENMACRO_ABEXA"
description: |
  ABENMACRO_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMACRO_ABEXA.htm"
abapFile: "ABENMACRO_ABEXA.html"
keywords: ["data", "ABENMACRO", "ABEXA"]
---

This example demonstrates how macros are created and included.

In this example, a macro `write_frame`, which draws a box around the placeholder `&1` on a list, is first defined and then used.

REPORT DEMO\_MACRO.\\n\\nDATA: x TYPE i, y TYPE i, l TYPE i.\\n\\nDEFINE write\_frame.\\n x = sy-colno. y = sy-linno.\\n WRITE: '|' NO-GAP, &1 NO-GAP, '|' NO-GAP.\\n l = sy-colno - x.\\n y -= 1. SKIP TO LINE y. POSITION x.\\n ULINE AT x(l).\\n y += 2. SKIP TO LINE y. POSITION x.\\n ULINE AT x(l).\\n y -= 1. x = sy-colno. SKIP TO LINE y. POSITION x.\\nEND-OF-DEFINITION.\\n\\nSKIP.\\nwrite\_frame 'In a frame!'.\\n abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html abenabap\_language\_includes.html abenabap\_macros.html