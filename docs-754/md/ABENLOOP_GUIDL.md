---
title: "Loop Processing - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_guidl.htm"
abapFile: "abenloop_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [Internal Tables](ABENITAB_GUIDL.md) → 

Loop Processing

Background

Alongside the statements for editing individual rows in internal tables, other statements can be used to address and modify the entire body of the table. Examples:

-   All categories of assignments applying to whole internal tables

-   Deleting the whole of an internal table using CLEAR or FREE

-   Operations in target ranges such as SELECT INTO TABLE

These types of accesses to the table body cause problems by producing a loop across the internal table

Rule

Do not modify the entire table body in a loop

You cannot use a loop across an internal table to perform accesses to the table that modify the entire table body at once.

Details

A modifying access to the entire table body usually produces a runtime error and at the very least unpredictable program behavior. If this is known statically, a syntax error occurs within classes. This error also occurs in LOOPs with a secondary key known statically when the table operations in question are used. Otherwise, the syntax check simply returns a warning for compatibility reasons.

Note

This rule is mainly intended to make you more aware of the problem. If you only work with [ABAP Objects](ABENABAP_OBJ_PROGR_MODEL_GUIDL.md "Guideline") or if no [syntax check warnings](ABENSYNTAX_CHECK_GUIDL.md "Guideline") are ignored, the rule above should be met automatically.
