---
title: "ABENNEWS-756-DDIC"
description: |
  ABENNEWS-756-DDIC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-756-DDIC.htm"
abapFile: "ABENNEWS-756-DDIC.html"
keywords: ["if", "data", "ABENNEWS", "756", "DDIC"]
---

[1\. Extension for Load Unit](#ABAP_MODIFICATION_1@4@)

[2\. C0 Developer Extensibility for DDIC Objects](#ABAP_MODIFICATION_2@4@)

In ABAP Dictionary, the [load unit](ABENDDIC_DATABASE_TABLES_LOAD_UNIT.html) has been extended. There are now the following settings available:

The following new [extensibility annotations](ABENDDICDDL_DEFINE_EXT_ANNOS.html) are available for [dictionary objects](ABENDICTIONARY_OBJECT_GLOSRY.html). They are required for [C0 release](ABENC0_CONTRACT_GLOSRY.html) of a DDIC object, which is a prerequisite for [developer extensibility](ABENDEV_EXTENSIBILITY_GLOSRY.html).

-   `Column Preferred`
-   `Page Preferred`
-   `Column Enforced`
-   `Page Enforced`

-   [`@AbapCatalog.enhancement.fieldSuffix`](ABENDDICDDL_DEFINE_EXT_ANNOS.html)
-   [`@AbapCatalog.enhancement.quotaMaximumFields`](ABENDDICDDL_DEFINE_EXT_ANNOS.html)
-   [`@AbapCatalog.enhancement.quotaMaximumBytes`](ABENDDICDDL_DEFINE_EXT_ANNOS.html)
-   [`@AbapCatalog.enhancement.quotaShareCustomer`](ABENDDICDDL_DEFINE_EXT_ANNOS.html)
-   [`@AbapCatalog.enhancement.quotaSharePartner`](ABENDDICDDL_DEFINE_EXT_ANNOS.html)

abenabap.html abennews.html abennews-75.html abennews-756.html