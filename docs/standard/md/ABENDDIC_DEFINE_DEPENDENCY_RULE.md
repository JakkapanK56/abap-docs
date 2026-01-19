---
title: "ABENDDIC_DEFINE_DEPENDENCY_RULE"
description: |
  ABENDDIC_DEFINE_DEPENDENCY_RULE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DEFINE_DEPENDENCY_RULE.htm"
abapFile: "ABENDDIC_DEFINE_DEPENDENCY_RULE.html"
keywords: ["do", "ABENDDIC", "DEFINE", "DEPENDENCY", "RULE"]
---

An ABAP Dictionary [dependency rule](ABENDEPENDENCY_RULE_GLOSRY.html) is defined as a source-code-based rule in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html)\\ [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html). A dependency rule is defined in a separate piece of [DRUL source code](ABENDRUL_SOURCE_CODE_GLOSRY.html) and is saved and transported with this code. One piece of DRUL source code for dependency rules can define exactly one dependency rule with the following Dictionary DDL statement:

-   [`DEFINE DEPENDENCY RULE`](ABENDDICDDL_DEFINE_DRUL.html)

-   The [`DRUL` source code](ABENDRUL_SOURCE_CODE_GLOSRY.html) of dependency rules has its own editor in [ADT](ABENADT_GLOSRY.html), which is documented there. `DRUL` source code can also be displayed in [Repository Browser](ABENREPOSITORY_BROWSER_GLOSRY.html) in [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html).
-   Partners and customers cannot currently define their own dependency rules.

abenabap.html abenabap\_dictionary.html abenddic\_tuning\_objects.html abenddic\_dependency\_rules.html