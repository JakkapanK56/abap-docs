---
title: "ABENNEWS-71-PRAGMAS"
description: |
  ABENNEWS-71-PRAGMAS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-71-PRAGMAS.htm"
abapFile: "ABENNEWS-71-PRAGMAS.html"
keywords: ["do", "if", "ABENNEWS", "PRAGMAS"]
---

[1\. Introduction of Pragmas](#ABAP_MODIFICATION_1@4@)

[2\. Switching from Pseudo Comments](#ABAP_MODIFICATION_2@4@)

From ABAP release 7.0, EhP2, [pragmas](ABENPRAGMA.html) can be used to hide warnings from the ABAP Compiler syntax check and other check tools.

The [pseudo comments](ABENPSEUDO_COMMENT_GLOSRY.html)\\ `"#EC ...`, which until now could be used to hide warnings from [enhanced program checks](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html), were to be replaced by the `##...` pragmas. The statement [`SET EXTENDED CHECK`](ABAPSET_EXTENDED_CHECK.html) must no longer be used in programs in which a warning from the extended program check is hidden by a pragma. If used, the statement produces a warning that cannot be hidden.

abenabap.html abennews.html abennews-70\_ehps.html abennews-71.html