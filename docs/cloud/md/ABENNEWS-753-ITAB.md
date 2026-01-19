---
title: "ABENNEWS-753-ITAB"
description: |
  ABENNEWS-753-ITAB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-753-ITAB.htm"
abapFile: "ABENNEWS-753-ITAB.html"
keywords: ["delete", "loop", "if", "data", "internal-table", "ABENNEWS", "753", "ITAB"]
---

[1. Predicates in `WHERE` Conditions](#ABAP_MODIFICATION_1@4@) 

[2. Stricter Syntax Check in `COLLECT`](#ABAP_MODIFICATION_2@4@)

In `WHERE` conditions of the statements [`LOOP AT itab`](ABAPLOOP_AT_ITAB_VARIANTS.html), [`DELETE itab`](ABAPDELETE_ITAB.html), and [`MODIFY itab`](ABAPMODIFY_ITAB.html), and in table iterations with [`FOR`](ABENFOR_ITAB.html), [`IS [NOT] INSTANCE OF`](ABENLOGEXP_INSTANCE_OF.html) can now be specified alongside the predicate expressions [`IS [NOT] INITIAL`](ABENLOGEXP_INITIAL.html) and [`IS [NOT] BOUND`](ABENLOGEXP_BOUND.html).

Before the statement [`COLLECT`](ABAPCOLLECT.html) can be executed for an internal table, all components that are not part of the primary table key must have a numeric data type. Until now, if certain structured components broke this rule, a syntax check warning and a program runtime error occurred. Now a syntax error occurs here too.

abenabap.html abennews.html abennews-75.html abennews-753.html