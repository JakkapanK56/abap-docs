---
title: "ABENDDIC_FIXED_VALUE_APPENDS"
description: |
  ABENDDIC_FIXED_VALUE_APPENDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_FIXED_VALUE_APPENDS.htm"
abapFile: "ABENDDIC_FIXED_VALUE_APPENDS.html"
keywords: ["do", "if", "ABENDDIC", "FIXED", "VALUE", "APPENDS"]
---

[Domains](ABENDDIC_DOMAINS.html) delivered by SAP can be extended by partners and customers using appends known as fixed value appends, without modifying the original object. The name of a fixed value append is subject to the same rules as the name of a domain and should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

A fixed value append adds further [fixed values](ABENFIXED_VALUE_GLOSRY.html) or intervals to the value range of a domain. A domain can have more than one fixed value append.

When a domain is activated, all fixed value appends for this domain are found and their fixed values and intervals added to the domain. When a fixed value append is created or modified, the associated domain is adjusted to this change automatically when the fixed value append is activated.

The fixed value append `DEMO_FIXED_VALUE_APPEND` is added to the domain `DEMO_ORIGINAL`. The program `DEMO_FIXED_VALUE_APPEND` reads the fixed values and intervals of the extended domain and displays them. In the table, the column `APPVAL` indicates which fixed values and intervals come from the fixed value append.

abenabap.html abenabap\_dictionary.html abenddic\_enhancements.html