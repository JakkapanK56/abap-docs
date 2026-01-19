---
title: "ABENTR_PHASE_GLOSRY"
description: |
  ABENTR_PHASE_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTR_PHASE_GLOSRY.htm"
abapFile: "ABENTR_PHASE_GLOSRY.html"
keywords: ["if", "case", "method", "class", "ABENTR", "PHASE", "GLOSRY"]
---

Specifies the concrete phase of a transaction. It is either the modify or the save transactional phase. They are set either implicitly, as in the case of, for example, [RAP handler](ABENABP_HANDLER_METHOD_GLOSRY.html) and [saver](ABENABP_SAVER_METHOD_GLOSRY.html) methods, or explicitly using the static methods of class [`CL_ABAP_TX`](ABAPRAP_CL_ABAP_TX.html).

In a [RAP transaction](ABENRAP_LUW_GLOSRY.html), the transactional phases are as follows:

-   Modify: Includes the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html) and the [early save phase](ABENEARLY_RAP_SAVE_PHASE_GLOSRY.html) of the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html).
-   Save: Includes the [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html).

ABENABALA\_GLOSSARY.html ABENRAP\_GLOSSARY.html