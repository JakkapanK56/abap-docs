---
title: "ABENDDIC_DEFINE_DYNAMIC_CACHE"
description: |
  ABENDDIC_DEFINE_DYNAMIC_CACHE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_DEFINE_DYNAMIC_CACHE.htm"
abapFile: "ABENDDIC_DEFINE_DYNAMIC_CACHE.html"
keywords: ["ABENDDIC", "DEFINE", "DYNAMIC", "CACHE"]
---

An ABAP Dictionary [dynamic cache](ABENDYNAMIC_CACHE_GLOSRY.html) is defined as a source-code-based cache in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html)\\ [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html). A dynamic cache is defined in a separate piece of `DTDC` source code and is saved and transported with this code. A piece of `DTDC` source code for dynamic caches can define exactly one dynamic cache:

No name table and no [DDIC runtime object](ABENDDIC_RUNTIME_OBJECT_GLOSRY.html) are generated for a dynamic cache. Therefore, a dynamic cache cannot be accessed or read with ABAP.

-   [`DEFINE DYNAMIC CACHE`](ABENDDICDDL_DEFINE_DYNAMIC_CACHE.html)

abenabap.html abenabap\_dictionary.html abenddic\_tuning\_objects.html abenddic\_dynamic\_caches.html