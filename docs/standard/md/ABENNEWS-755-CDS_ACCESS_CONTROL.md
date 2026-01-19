---
title: "ABENNEWS-755-CDS_ACCESS_CONTROL"
description: |
  ABENNEWS-755-CDS_ACCESS_CONTROL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-755-CDS_ACCESS_CONTROL.htm"
abapFile: "ABENNEWS-755-CDS_ACCESS_CONTROL.html"
keywords: ["do", "if", "case", "data", "types", "ABENNEWS", "755", "CDS", "ACCESS", "CONTROL"]
---

[1. Check with `element IS [NOT] INITIAL` in a Literal Condition](#ABAP_MODIFICATION_1@4@) 

[2. Addition `bypass when`](#ABAP_MODIFICATION_2@4@)

[3\. Check on the User Name in User Conditions](#ABAP_MODIFICATION_3@4@)

[4\. Data Types](#ABAP_MODIFICATION_4@4@)

[5\. Aspect Bypass Conditions](#ABAP_MODIFICATION_5@4@)

[6\. Quantifier Operators](#ABAP_MODIFICATION_6@4@)

In a literal condition, `IS [NOT] INITIAL` can now be used to check whether the value of the left side matches (does not match) the initial value of the ABAP data type that matches the element.

The addition [`BYPASS WHEN`](ABENCDS_F1_COND_PFCG.html) can now be used to specify a bypass condition for an element. If the condition is met, the element in question is not used for authorization filtering.

When the user name is checked in [user conditions](ABENCDS_F1_COND_USER.html), the following can now be checked instead of the user name:

The operand that can be specified on the left side of a condition of an access rule of a CDS role can now have the built-in ABAP Dictionary [data type](ABENCDS_F1_DCL_COND_DATA_TYPES.html)\\ `RAW`.

`IS [NOT] INITIAL` and `IS INITIAL OR NULL` are now possible as [aspect bypass conditions](ABENCDS_F1_DEFINE_GENERIC_ASPECT.html).

With the new addition `ALL`, access conditions can express that access shall only be granted when from a set-valued association all values satisfy the condition.

WHERE ALL toItem.State = 'A'

To accompany this use case, the `BYPASS WHEN` operator has been extended to literal conditions also.

A dedicated operator `EXISTS` can be used when different access conditions using the same set-valued association shall not be coupled in their fields by means of a common join expression.

[More Information](ABENCDS_DCL_ROLE_CONDITIONS.html)

-   The value of the alias.
-   The number of the business partner assigned to the user.

abenabap.html abennews.html abennews-75.html abennews-755.html