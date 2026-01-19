---
title: "ABENNEWS-620-STRUCTURES"
description: |
  ABENNEWS-620-STRUCTURES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-620-STRUCTURES.htm"
abapFile: "ABENNEWS-620-STRUCTURES.html"
keywords: ["if", "class", "ABENNEWS", "620", "STRUCTURES"]
---

Since ABAP release 3.0, customers have been able to make changes to SAP's ABAP Dictionary structures and tables using [customizing includes](ABENCUSTOMIZING_INCLUDE_GLOSRY.html) or appends. Changes like this, however, can cause problems in programs with active [Unicode checks](ABENUNICODE_CHECK_GLOSRY.html). For example, if a character-like-only structure is enhanced, it can lose its character-like nature and hence its fragment view is changed.

In ABAP release 6.20, it has therefore been made possible to classify dictionary structures and tables, so that problems caused by structure enhancements can be easily recognized and dealt with. In the ABAP programming checks, this classification is used to flag up all places in the source code that can cause problems in the context of structure enhancements. These problems are due to syntax errors or modified program behavior caused by structure enhancements. The dictionary categories and their effect in ABAP programs are described in [Enhancement Category](ABENDDIC_STRUCTURES_ENH_CAT.html).

abenabap.html abennews.html abennews-6.html abennews-620.html