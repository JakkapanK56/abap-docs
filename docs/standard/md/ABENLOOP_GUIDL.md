---
title: "These types of accesses to the table body cause problems by producing a loop across the internal table"
description: |
  Do not modify the entire table body in a loop You cannot use a loop across an internal table to perform accesses to the table that modify the entire table body at once. A modifying access to the entire table body usually produces a runtime error and at the very least unpredictable program behavi
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOOP_GUIDL.htm"
abapFile: "ABENLOOP_GUIDL.html"
keywords: ["select", "loop", "do", "if", "class", "types", "internal-table", "ABENLOOP", "GUIDL"]
---

Alongside the statements for processing individual lines in internal tables, other statements can be used to address and modify the entire body of the table. Examples:

These types of accesses to the table body cause problems by producing a loop across the internal table

**Do not modify the entire table body in a loop**

You cannot use a loop across an internal table to perform accesses to the table that modify the entire table body at once.

A modifying access to the entire table body usually produces a runtime error and at the very least unpredictable program behavior. If this is known statically, a syntax error occurs within classes. This error also occurs in `LOOP` statements with a secondary key known statically when the table operations in question are used. Otherwise, the syntax check simply returns a warning for compatibility reasons.

-   All categories of assignments applying to whole internal tables
-   Deleting the whole of an internal table using `CLEAR` or `FREE`
-   Operations in target ranges such as `SELECT INTO TABLE`

-   This rule is mainly intended to make you more aware of the problem. If you only work with [ABAP Objects](ABENABAP_OBJ_PROGR_MODEL_GUIDL.html) or if no [syntax check warnings](ABENSYNTAX_CHECK_GUIDL.html) are ignored, the rule above should be met automatically.
-   For more information, see [Changing Internal Tables in a Loop](ABENITAB_LOOP_CHANGE.html).

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abenitab\_gdl.html