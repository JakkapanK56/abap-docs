---
title: "Division by Zero - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendivision_zero_guidl.htm"
abapFile: "abendivision_zero_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [Assignments, Calculations, and Other Types of Data Access](ABENASSIGNMENT_ACCESS_GUIDL.md) → 

Division by Zero

Background

Division by zero is forbidden in all recognized programming languages and raises an exception. This is also the case in ABAP, but with the difference that the exception cx\_sy\_zerodivide is not raised if the dividend is also zero when divided by zero. In this case, the division in ABAP produces the result 0.

Rule

Prevent division by zero

Do not exploit the fact that ABAP permits division by zero if the dividend itself is zero.

Details

This ABAP behavior is arbitrary and does not produce the result expected by the user. Avoid using it if at all possible. Instead, set preconditions that avoid division by zero or specify explicitly that the correct exception is raised for the case 0/0.

Example

The following source code always raises an exception when the divisor has the value 0.

IF divisor <> 0.
   result = dividend / divisor.
ELSE.
   RAISE EXCEPTION TYPE cx\_sy\_zerodivide.
ENDIF.
