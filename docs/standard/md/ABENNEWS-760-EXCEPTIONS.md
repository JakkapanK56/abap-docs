---
title: "ABENNEWS-760-EXCEPTIONS"
description: |
  ABENNEWS-760-EXCEPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-760-EXCEPTIONS.htm"
abapFile: "ABENNEWS-760-EXCEPTIONS.html"
keywords: ["if", "class", "ABENNEWS", "760", "EXCEPTIONS"]
---

[1\. New System Interface for Messages](#ABAP_MODIFICATION_1@4@)

[2. `MESSAGE` Addition for `RAISE EXCEPTION` and `THROW`](#ABAP_MODIFICATION_2@4@)

The new system interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html) adds predefined attributes for the message type and the placeholders of the message to the interface [`IF_T100_MESSAGE`](ABENIF_T100_MESSAGE.html). `IF_T100_DYN_MSG` makes it possible to [associate](ABENMESSAGE_EXCEPTIONS.html) any message with exception classes.

The new addition [`MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html) of the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) and of the addition [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional expression](ABENCONDITIONAL_EXPRESSIONS.html) associates any [message](ABENMESSAGE_GLOSRY.html) with an exception object. The exception class in question must include the new system interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html). It is also possible to use the addition with exception classes that include only the system interface [`IF_T100_MESSAGE`](ABENIF_T100_MESSAGE.html), but with restrictions.

abenabap.html abennews.html abennews-76.html abennews-760.html