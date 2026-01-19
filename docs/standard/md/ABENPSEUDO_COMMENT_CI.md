---
title: "ABENPSEUDO_COMMENT_CI"
description: |
  ABENPSEUDO_COMMENT_CI - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPSEUDO_COMMENT_CI.htm"
abapFile: "ABENPSEUDO_COMMENT_CI.html"
keywords: ["select", "do", "if", "data", "ABENPSEUDO", "COMMENT"]
---

`... "#EC CI_...`

The character string `"#EC` behind a statement or a part of a statement followed by an abbreviation with the prefix `CI_` defines a [pseudo comment](ABENPSEUDO_COMMENT_GLOSRY.html) for the [Code Inspector](ABENCODE_INSPECTOR_GLOSRY.html).

These pseudo comments can be used to hide certain warnings from the Code Inspector for the relevant statement. The possible abbreviations are documented with the Code Inspector or in the output of its messages.

The following [join expression](ABENJOIN_EXPRESSION_GLOSRY.html) bypasses [table buffering](ABENTABLE_BUFFERING_GLOSRY.html), which raises a warning from the Code Inspector. However, if the `SELECT` statement is part of an application that buffers selected data itself, the warning can be hidden as shown here. An additional regular comment illustrates to the user why the pseudo comment is being used.

-   Until now, only the pseudo comments for the Code Inspector have not been replaced by other language elements.
-   To hide multiple warnings from a statement with pseudo comments, the statement must be split into multiple lines.

SELECT d~object, h~dokldate, h~dokltime "#EC CI\_BUFFJOIN \\n FROM dokil AS d "Buffering is done \\n INNER JOIN dokhl AS h "by application \\n ON h~id = d~id AND "with Shared Objects \\n h~object = d~object AND \\n h~typ = d~typ AND \\n h~langu = d~langu AND \\n h~dokversion = d~version \\n WHERE d~id ='SD' AND \\n d~typ = 'E' AND \\n d~langu = @langu AND \\n d~object LIKE 'AB%' \\n INTO CORRESPONDING FIELDS OF TABLE docu\_tab. abenabap.html abenabap\_reference.html abenabap\_syntax.html abenprogram\_directives.html abenpseudo\_comment.html