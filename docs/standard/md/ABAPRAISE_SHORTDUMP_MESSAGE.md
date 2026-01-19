---
title: "ABAPRAISE_SHORTDUMP_MESSAGE"
description: |
  ABAPRAISE_SHORTDUMP_MESSAGE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPRAISE_SHORTDUMP_MESSAGE.htm"
abapFile: "ABAPRAISE_SHORTDUMP_MESSAGE.html"
keywords: ["do", "if", "class", "ABAPRAISE", "SHORTDUMP", "MESSAGE"]
---

[Short Reference](ABAPRAISE_SHORTDUMP_SHORTREF.html)

``... \{\ [`MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html) tn(id)              |\ \{ ID mid TYPE mtype NUMBER num \}\                [WITH dobj1 ... dobj4]\ \}\    |\ \{\ [`USING MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html)\ \} ...``

The addition `MESSAGE` of the statement [`RAISE SHORTDUMP`](ABAPRAISE_SHORTDUMP.html) and of the addition [`THROW SHORTDUMP`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional expression](ABENCONDITIONAL_EXPRESSIONS.html) passes the specification of a [message](ABENMESSAGE_GLOSRY.html) to the exception object. Syntax and semantics are the same as in the addition [`MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html) of the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html).

The addition `MESSAGE` cannot be specified after the variant [`RAISE SHORTDUMP oref`](ABAPRAISE_SHORTDUMP.html).

Raising of a runtime error with an exception object of the exception class `CX_DEMO_DYN_T100`, which implements the interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html). The addition `MESSAGE` is used to pass the properties of a message that determines the exception text.

Raising of a runtime error with an exception object of the exception class `CX_DEMO_T100`, which implements the interface [`IF_T100_MESSAGE`](ABENIF_T100_MESSAGE.html). The additions `MESSAGE` and `EXPORTING` are used to pass the properties of a message that determines the exception text.

Raising of a runtime error with an exception object of the exception class `CX_DEMO_DYN_T100`, which implements the interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html). The addition `USING MESSAGE` is used to pass the properties of a previously sent message that determines the exception text.

RAISE SHORTDUMP TYPE cx\_demo\_dyn\_t100 \\n MESSAGE ID 'SABAPDEMOS' \\n TYPE 'I' \\n NUMBER '888' \\n WITH 'I' 'need' 'a' 'break!'. RAISE SHORTDUMP TYPE cx\_demo\_t100 \\n MESSAGE ID 'SABAPDEMOS' \\n NUMBER '888' \\n EXPORTING text1 = 'I' \\n text2 = 'need' \\n text3 = 'a' \\n text4 = 'break!'. MESSAGE ID 'SABAPDEMOS' \\n TYPE 'S' \\n NUMBER '888' \\n WITH 'I' 'need' 'a' 'break!'. \\n\\ \\nRAISE SHORTDUMP TYPE cx\_demo\_dyn\_t100 \\n USING MESSAGE. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abennoncat\_exceptions.html abapraise\_shortdump.html