---
title: "ABENQUERY_OPTIMIZER_GLOSRY"
description: |
  ABENQUERY_OPTIMIZER_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENQUERY_OPTIMIZER_GLOSRY.htm"
abapFile: "ABENQUERY_OPTIMIZER_GLOSRY.html"
keywords: ["do", "ABENQUERY", "OPTIMIZER", "GLOSRY"]
---

The query optimizer generates the most efficient query execution plan for a given query and passes it to the executor. In [HANA SQL](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f), there are basically two optimization tasks:

[**\-> More about**](https://help.sap.com/docs/SAP_HANA_PLATFORM/9de0171a6027400bb3b9bee385222eff/d2948cc2209a407ea2b686c29e72ca50)

-   Rule-based optimization (declarative): Rewriting of the entire tree by, for example, removing joins. More efficient queries are produced at best.
-   Cost-based optimization (procedural): Discovering the space of access plans of the queries produced during the rule-based optimization and comparing the access plans by cost and size. The cheapest query is used for further processing.

ABENTECHNO\_GLOSSARY.html