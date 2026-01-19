---
title: "ABENDDIC_DEFINE_DYNAMIC_CACHE"
description: |
  ABENDDIC_DEFINE_DYNAMIC_CACHE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DEFINE_DYNAMIC_CACHE.htm"
abapFile: "ABENDDIC_DEFINE_DYNAMIC_CACHE.html"
keywords: ["do", "ABENDDIC", "DEFINE", "DYNAMIC", "CACHE"]
---

An ABAP Dictionary [dynamic cache](ABENDYNAMIC_CACHE_GLOSRY.html) is defined as a source-code-based cache in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html)\\ [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html). A dynamic cache is defined in a separate piece of [`DTDC` source code](ABENDDTDC_SOURCE_CODE_GLOSRY.html) and is saved and transported with this code. A piece of `DTDC` source code for dynamic caches can define exactly one dynamic cache:

No [name table](ABENNAME_TABLE_GLOSRY.html) and no [DDIC runtime object](ABENDDIC_RUNTIME_OBJECT_GLOSRY.html) are generated for a dynamic cache. Therefore, a dynamic cache cannot be accessed or read with ABAP.

-   [`DEFINE DYNAMIC CACHE`](ABENDDICDDL_DEFINE_DYNAMIC_CACHE.html)

-   The `DTDC` source code of dynamic caches has its own editor in [ADT](ABENADT_GLOSRY.html), which is documented there. `DTDC` source code can also be displayed in [Repository Browser](ABENREPOSITORY_BROWSER_GLOSRY.html) in [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html).
-   DDIC dynamic caches are connected to a [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html) and can be toggled on or off.

abenabap.html abenabap\_dictionary.html abenddic\_tuning\_objects.html abenddic\_dynamic\_caches.html