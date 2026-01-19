---
title: "ABENPSEUDO_COMMENT_SLIN"
description: |
  ABENPSEUDO_COMMENT_SLIN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPSEUDO_COMMENT_SLIN.htm"
abapFile: "ABENPSEUDO_COMMENT_SLIN.html"
keywords: ["do", "if", "data", "ABENPSEUDO", "COMMENT", "SLIN"]
---

`... "#EC ...`

The string `"#EC` after a statement or a part of a statement that follows a particular ID defines the subsequent content of the line as a [pseudo comment](ABENPSEUDO_COMMENT_GLOSRY.html) for the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html).

The possible IDs are document in the extended program check or in the output of their results. The pseudo comments can be used to hide certain warnings from the extended program check for a particular statement.

The pseudo comment `"#EC NEEDED` suppresses the message from the extended program check that tells the user that there is no read access to `a`.

The following source code section shows how the pseudo comment can be replaced by a [pragma](ABENPRAGMA.html).

-   When [pragmas](ABENPRAGMA.html) were introduced, corresponding pragmas (`##...`) were introduced for all `"#EC...` pseudo comments. These pragmas should be used instead of the pseudo comments. This makes the pseudo comments obsolete for the extended program check. The program `ABAP_SLIN_PRAGMAS` shows which pragmas are to be used instead of the obsolete pseudo comments.
-   The pseudo comment `#EC *` must no longer be used in programs that use pragmas to deactivate warnings. This causes an extended program check warning that cannot be deactivated. The same applies to the statement [`SET EXTENDED CHECK`](ABAPSET_EXTENDED_CHECK.html).
-   To hide multiple warnings from a statement with pseudo comments, the statement must be spread across multiple lines.
-   If the ID specified after `"#EC` has the prefix `CI_`, it is a [pseudo comment](ABENPSEUDO_COMMENT_CI.html) for the Code Inspector. These pseudo comments have not yet been replaced by pragmas.

DATA: a TYPE string, "#EC NEEDED \\n b TYPE string. \\na = b. DATA: a TYPE string ##needed, \\n b TYPE string. \\na = b. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abensyntax\_obsolete.html abenpseudo\_comments\_obsolete.html