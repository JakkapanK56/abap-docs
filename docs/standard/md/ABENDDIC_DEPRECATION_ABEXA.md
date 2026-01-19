---
title: "ABENDDIC_DEPRECATION_ABEXA"
description: |
  ABENDDIC_DEPRECATION_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DEPRECATION_ABEXA.htm"
abapFile: "ABENDDIC_DEPRECATION_ABEXA.html"
keywords: ["select", "insert", "delete", "if", "data", "types", "ABENDDIC", "DEPRECATION", "ABEXA"]
---

This example demonstrates [how deprecated data is flagged in check tables](ABENDDIC_DEPRECATION.html).

This example uses the check table `DEMO_DEPR_CHECK` for the flagging of deprecated entries. The ABAP program flags the first three table entries as deprecated. The next three table entries are flagged as invalid.

When the ABAP program is executed, the consumer can enable or disable the deprecated data check via the [checkbox](ABENCHECKBOX_GLOSRY.html)\\ *Check deprecated data*. This affects the input check and input help.

If checks on deprecated data are enabled, the following takes place:

If the checkbox *Check deprecated data* is not selected, no warnings or error messages are produced and the input help displays all entries from the check table `DEMO_DEPR_CHECK`.

-   A warning occurs if one of the deprecated values is entered. If one of the invalid values is entered, an error message occurs and the entered value is not accepted.
-   The input help displays valid values and deprecated values only and no invalid values.

REPORT demo\_dynpro\_deprecation.\\n\\nTABLES demo\_depr\_struc.\\n\\nDATA depr\_flag TYPE abap\_bool VALUE 'X'.\\n\\nSTART-OF-SELECTION.\\n CALL SCREEN 100.\\n\\nLOAD-OF-PROGRAM.\\n depr\_flag = cl\_configuration\_deprecation=>deprecation\_is\_active( ).\\n\\n DATA ls\_target TYPE demo\_depr\_check1.\\n\\n SELECT planetype\\n FROM saplane\\n ORDER BY planetype\\n INTO TABLE @FINAL(planetypes). "#EC CI\_NOWHERE\\n\\n DELETE FROM demo\_depr\_check1. "#EC CI\_NOWHERE\\n INSERT demo\_depr\_check1 FROM TABLE @( VALUE #(\\n FOR wa IN planetypes INDEX INTO idx\\n ( planetype = wa-planetype\\n configdeprecationcode =\\n COND #( WHEN idx <= 3 THEN 'W'\\n WHEN idx BETWEEN 4 AND 6 THEN 'E'\\n ELSE ' ' ) ) ) ).\\n\\nMODULE pbo\_100 OUTPUT.\\n SET PF-STATUS 'STATUS\_100'.\\n\\n cl\_configuration\_deprecation=>set\_deprecation\_active(\\n i\_respect\_obsolete\_values = depr\_flag ).\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_sema.html abenddic\_database\_tables\_semasspec.html abenddic\_database\_tables\_forkeyrel.html abenddic\_deprecation.html