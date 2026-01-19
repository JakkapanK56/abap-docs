---
title: "ABENDIVISION_ZERO_GUIDL"
description: |
  ABENDIVISION_ZERO_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDIVISION_ZERO_GUIDL.htm"
abapFile: "ABENDIVISION_ZERO_GUIDL.html"
keywords: ["do", "if", "case", "ABENDIVISION", "ZERO", "GUIDL"]
---

Division by zero is forbidden in all recognized programming languages and raises an exception. This is also the case in ABAP, but with the difference that the exception `cx_sy_zerodivide` is not raised if the dividend is also zero when divided by zero. In this case, the division in ABAP produces the result 0.

**Prevent division by zero**

Do not exploit the fact that ABAP allows division by zero if the dividend itself is zero.

This ABAP behavior is arbitrary and does not produce the result expected by the user. Therefore, it should not be exploited. Instead, set preconditions that avoid division by zero or the corresponding exception is to be triggered explicitly for the case 0/0.

The following source code always raises an exception when the divisor has the value 0.

IF divisor <> 0. \\n result = dividend / divisor. \\nELSE. \\n RAISE EXCEPTION TYPE cx\_sy\_zerodivide. \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abenassignment\_access\_gdl.html