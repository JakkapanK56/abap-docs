---
title: "ABENCONTEXT_MESSAGE_ABEXA"
description: |
  ABENCONTEXT_MESSAGE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONTEXT_MESSAGE_ABEXA.htm"
abapFile: "ABENCONTEXT_MESSAGE_ABEXA.html"
keywords: ["do", "if", "data", "internal-table", "ABENCONTEXT", "MESSAGE", "ABEXA"]
---

This example demonstrates how messages can be handled in contexts.

First, the message is handled in the program using the addition `MESSAGES INTO` of the statement `DEMAND`. The message is then available for further processing in the internal table `itab`. In the second `DEMAND` statement, the message is handled by the system and the program terminates with an error message.

REPORT demo\_context\_message.\\n\\nDATA: c\_from TYPE spfli-cityfrom,\\n c\_to TYPE spfli-cityto.\\n\\nCONTEXTS docu\_test1.\\n\\nDATA: context\_inst TYPE context\_docu\_test1.\\n\\nDATA: itab TYPE TABLE OF symsg,\\n line LIKE LINE OF itab.\\n\\nSUPPLY carrid = 'XX'\\n connid = '400'\\n TO CONTEXT context\_inst.\\n\\n\\nDEMAND cityfrom = c\_from\\n cityto = c\_to\\n FROM CONTEXT context\_inst MESSAGES INTO itab.\\n\\nIF sy-subrc NE 0.\\n line = itab\[ 1 \].\\n MESSAGE ID line-msgid TYPE 'I' NUMBER line-msgno\\n WITH line-msgv1 line-msgv2 DISPLAY LIKE line-msgty.\\nENDIF.\\n\\nDEMAND cityfrom = c\_from\\n cityto = c\_to\\n FROM CONTEXT context\_inst.\\n abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abencontext.html