---
title: "ABENNEWS-757-CDS_ACCESS_CONTROL"
description: |
  ABENNEWS-757-CDS_ACCESS_CONTROL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-757-CDS_ACCESS_CONTROL.htm"
abapFile: "ABENNEWS-757-CDS_ACCESS_CONTROL.html"
keywords: ["if", "data", "ABENNEWS", "757", "CDS", "ACCESS", "CONTROL"]
---

[1\. CDS Access Control Context](#ABAP_MODIFICATION_1@4@)

[2. `CONTEXT_NODE_VALUES`, New Parameter `datatype`](#ABAP_MODIFICATION_2@4@)

[3. `IF ... THEN ... ELSE ...` Control Structure Available in Access Conditions](#ABAP_MODIFICATION_3@4@) 

[4. `DEFINE ROLE` Statement Has New Addition `SWITCHABLE`](#ABAP_MODIFICATION_4@4@)

Control structures [`IF ... THEN ... ELSE ...`](ABENCDS_F1_DCL_IFTHENELSE.html) can now be used as part of an [access condition](ABENACCESS_CONDITION_GLOSRY.html) after the `DEFINE ROLE` statement.

The new addition [`SWITCHABLE`](ABENCDS_F1_DEFINE_ROLE.html) is now available for the [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html) statement. Using this addition, the content of the role reacts to status changes in the Switch Framework with respect to the package of the access control.

abenabap.html abennews.html abennews-75.html abennews-757.html