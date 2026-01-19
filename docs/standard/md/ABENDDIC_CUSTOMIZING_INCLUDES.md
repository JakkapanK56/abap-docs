---
title: "ABENDDIC_CUSTOMIZING_INCLUDES"
description: |
  ABENDDIC_CUSTOMIZING_INCLUDES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_CUSTOMIZING_INCLUDES.htm"
abapFile: "ABENDDIC_CUSTOMIZING_INCLUDES.html"
keywords: ["insert", "do", "if", "data", "ABENDDIC", "CUSTOMIZING", "INCLUDES"]
---

A customizing include is a DDIC structure whose name has the prefix `CI_` for customers and `SI_` for partners and is in the customer namespace. SAP-delivered [DDIC structures](ABENDDIC_STRUCTURES.html) and [DDIC database tables](ABENDDIC_DATABASE_TABLES.html) may contain customizing includes when delivered. These customizing includes in SAP-delivered objects are usually empty. They are not linked with existing structures, they are only intended to reserve names. In customer or partner systems, these includes can be extended according to the [enhancement category](ABENDDIC_STRUCTURES_ENH_CAT.html). This is done by creating the included but empty customizing includes and adding components using customizing transactions. If a customizing include is extended in a transparent DDIC database table, no [adjustment](ABENDDIC_DATABASE_TABLES_ADJ.html) takes place. As a result, the order of fields in ABAP Dictionary and on the database might differ.

A customizing include can be included in multiple DDIC database tables or DDIC structures. Its extension is then applied to all DDIC database tables or DDIC structures in which it is included. It is not mandatory to extend an empty customizing include of a DDIC database table or DDIC structure.

Extending an SAP-delivered DDIC structure or DDIC database table using a customizing include does not modify the original object. If a customizing include is used to add fields to a standard DDIC database table or DDIC structure, these fields are inserted automatically into DDIC structures or DDIC database tables delivered by SAP in an upgrade.

abenabap.html abenabap\_dictionary.html abenddic\_enhancements.html