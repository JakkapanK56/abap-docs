---
title: "ABAPSET_EXTENDED_CHECK"
description: |
  ABAPSET_EXTENDED_CHECK - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_EXTENDED_CHECK.htm"
abapFile: "ABAPSET_EXTENDED_CHECK.html"
keywords: ["select", "do", "if", "case", "data", "ABAPSET", "EXTENDED", "CHECK"]
---

[Short Reference](ABAPSET_EXTENDED_CHECK_SHORTREF.html)

`SET EXTENDED CHECK \{ON|OFF\}.`

This statement uses the addition `OFF` to deactivate the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) for the following statements and uses the addition `ON` to reactivate it. A deactivated extended program check should be reactivated in the same program. The extended program check reports a `SET EXTENDED CHECK OFF` statement without the following `SET EXTENDED CHECK ON` statement and superfluous `SET EXTENDED CHECK ON` statements. The extended program check is the default setting.

The `SET EXTENDED CHECK` statements suppress all messages from the extended program check in the included program section.

The following program section shows the recommended procedure to hide the actual messages using the associated pragma.

-   This statement is obsolete and should no longer be used. Instead, the messages from the extended program check for individual statements should be hidden using specific [pragmas](ABENPRAGMA_GLOSRY.html).
-   The statement `SET EXTENDED CHECK` should not be used in programs that use pragmas to deactivate warnings. This causes an extended program check warning that cannot be deactivated. The same applies to the [pseudo comment](ABENPSEUDO_COMMENT_SLIN.html)\\ `#EC *`.
-   In this case, the deactivation of the extended program check can be overridden by selecting *Also Display Hidden Messages* when the check is called.

SET EXTENDED CHECK OFF. \\nDATA: a TYPE string, \\n b TYPE string. \\na = b. \\nSET EXTENDED CHECK ON. DATA: a TYPE string ##needed, \\n b TYPE string. \\na = b. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenprogram\_editing\_obsolete.html