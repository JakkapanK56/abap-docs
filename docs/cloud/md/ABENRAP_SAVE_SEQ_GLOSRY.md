---
title: "ABENRAP_SAVE_SEQ_GLOSRY"
description: |
  ABENRAP_SAVE_SEQ_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENRAP_SAVE_SEQ_GLOSRY.htm"
abapFile: "ABENRAP_SAVE_SEQ_GLOSRY.html"
keywords: ["if", "data", "ABENRAP", "SAVE", "SEQ", "GLOSRY"]
---

The RAP save sequence is part of the [RAP BO](ABENRAP_BO_GLOSRY.html) runtime and is triggered after at least one successful modification was performed during the [interaction phase](ABENRAP_INT_PHASE_GLOSRY.html). It saves data from the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) on the database.

The RAP save sequence is divided into three phases that are entered in this order:

-   [RAP early save phase](ABENEARLY_RAP_SAVE_PHASE_GLOSRY.html)
-   [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html)
-   [RAP cleanup phase](ABENRAP_CLEANUP_PHASE_GLOSRY.html)

ABENRAP\_GLOSSARY.html