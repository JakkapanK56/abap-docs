---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDIVISION_ZERO_GUIDL.html"
abapFile: "ABENDIVISION_ZERO_GUIDL.html"
type: "abap-reference"
---

## Background

Division by zero is forbidden in all recognized programming languages and raises an exception. This is also the case in ABAP, but with the difference that the exception `cx_sy_zerodivide` is not raised if the dividend is also zero when divided by zero. In this case, the division in ABAP produces the result 0.

## Rule

**Prevent division by zero**

Do not exploit the fact that ABAP allows division by zero if the dividend itself is zero.

## Details

This ABAP behavior is arbitrary and does not produce the result expected by the user. Therefore, it should not be exploited. Instead, set preconditions that avoid division by zero or the corresponding exception is to be triggered explicitly for the case 0/0.

## Example

The following source code always raises an exception when the divisor has the value 0.

```
IF divisor <> 0. 
   result = dividend / divisor. 
ELSE. 
   RAISE EXCEPTION TYPE cx_sy_zerodivide. 
ENDIF.
```
