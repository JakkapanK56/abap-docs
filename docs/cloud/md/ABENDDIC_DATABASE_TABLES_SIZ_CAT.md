---
title: "ABENDDIC_DATABASE_TABLES_SIZ_CAT"
description: |
  ABENDDIC_DATABASE_TABLES_SIZ_CAT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_DATABASE_TABLES_SIZ_CAT.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_SIZ_CAT.html"
keywords: ["if", "data", "ABENDDIC", "DATABASE", "TABLES", "SIZ", "CAT"]
---

The size category affects the size of the initial memory area reserved for the table on the database. Values between 0 and 9 can be specified and intervals of expected rows are assigned to these values. The interval limits assigned to each size category depend on the structure of the DDIC database table. The range can extend from approximately 1000 rows in size category 0 to several million rows in size category 9. If the initial space reserved is exceeded, a new memory area is added implicitly in accordance with the chosen size category.

The following table shows the interval limits assigned to each size category for the DDIC database table `SPFLI`.

-   An appropriate size category should be chosen, to prevent too many small memory areas or a memory area that is too big.

**Size Category** **Expected Rows**\\ 0 0 to 3,600 1 3,600 to 14,000 2 14,000 to 58,000 3 58,000 to 230,000 4 230,000 to 930,000 5 930,000 to 1,800,000 6 1,800,000 to 3,700,000 7 3,700,000 to 7,400,000 8 7,400,000 to 14,000,000 9 14,000,000 to 590,000,000 abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_tech.html abenddic\_database\_tables\_techspec.html