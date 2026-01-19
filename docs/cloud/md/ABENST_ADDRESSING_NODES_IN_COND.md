---
title: "ABENST_ADDRESSING_NODES_IN_COND"
description: |
  ABENST_ADDRESSING_NODES_IN_COND - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_ADDRESSING_NODES_IN_COND.htm"
abapFile: "ABENST_ADDRESSING_NODES_IN_COND.html"
keywords: ["if", "data", "ABENST", "ADDRESSING", "NODES", "COND"]
---

For addressing data nodes in [logical expressions](ABENST_TT_COND.html), a special rule applies. Data nodes as `dnode` operands of [preconditions](ABENST_USING.html), [assertions](ABENST_DATA.html), or [conditions](ABENST_CHECK.html) can be specified as follows:

-   If the name `node`, specified in accordance with the preceding addressing rules, contains a letter or an underscore in its first place and only letters, digits, hyphens, or underscores in the remaining positions, it can be specified directly.
-   The special names `$ref` and `$alias` can also be specified directly.
-   All other names must be specified in the form `ref('node')`. This particularly applies to the specification of a data root using `.root`.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_addressing.html abenst\_addressing\_nodes.html