---
title: "ABENABAP_MESSAGE_PROCEDURE"
description: |
  ABENABAP_MESSAGE_PROCEDURE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_MESSAGE_PROCEDURE.htm"
abapFile: "ABENABAP_MESSAGE_PROCEDURE.html"
keywords: ["if", "types", "ABENABAP", "MESSAGE", "PROCEDURE"]
---

In [procedures](ABENPROCEDURE_GLOSRY.html), message handling complies with the context from which the procedure was called by default. Exceptions to this rule are arise when:

If a [procedure](ABENPROCEDURE_GLOSRY.html) is exited when a message is sent, the content of the formal parameters for which [pass by value](ABENPASS_BY_VALUE_GLOSRY.html) is defined is not assigned to the respective actual parameters.

-   the addition [`RAISING`](ABAPMESSAGE_RAISING.html) is used in the statement [`MESSAGE`](ABAPMESSAGE.html)
-   a message is handled when a function module is called using the predefined exception [`error_message`](ABAPCALL_FUNCTION_PARAMETER.html)
-   a function module is called using the [RFC interface](ABENABAP_MESSAGE_RFC.html)

abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abenabap\_messages\_types.html