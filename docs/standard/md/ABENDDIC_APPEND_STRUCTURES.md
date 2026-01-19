---
title: "ABENDDIC_APPEND_STRUCTURES"
description: |
  ABENDDIC_APPEND_STRUCTURES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_APPEND_STRUCTURES.htm"
abapFile: "ABENDDIC_APPEND_STRUCTURES.html"
keywords: ["insert", "do", "if", "data", "ABENDDIC", "APPEND", "STRUCTURES"]
---

An append structure is a structure in ABAP Dictionary appended to another [DDIC structure](ABENDDIC_STRUCTURES.html) or to a [DDIC database table](ABENDDIC_DATABASE_TABLES.html) which adds its components to this structure or table. In customer systems, append structures can be added to DDIC structures and DDIC database tables delivered by SAP. An append structure is assigned to exactly one table or structure. There can, however, be more than one append structure for a table or structure. The components of append structures must meet the [prerequisites](ABENDDIC_DATABASE_TABLES_TECHSTRUC.html) for table fields.

The following extensions can be made to a DDIC database table or DDIC structure using an append structure:

The append structure is a standalone object and changes to components of the append structure as well as transporting the append structure are made only using the append structure. When a DDIC database table or a DDIC structure is activated, all associated append structures are found and their components are appended to the DDIC database table or structure. Any foreign keys or search help bindings added by the append structure are also appended. When an append structure is activated, the assigned DDIC database table or DDIC structure is adjusted to the changes made. Any existing tables are not [adjusted](ABENDDIC_DATABASE_TABLES_ADJ.html), which can put the fields in the dictionary in a different order from the order on the database. When a DDIC structure or DDIC database table with an append structure is copied, the appended fields, foreign keys, and search helps become real elements of the target of the copy.

The following must be noted when using append structures to extend DDIC database tables:

Extensions of SAP structures or SAP tables using append structures in customer systems do not modify the original object. Append structures created for SAP objects in customer systems are in the customer namespace (or in the namespace of a partner of a special development project) and hence are protected from being overwritten by upgrades. It is advisable to also create the components of append structures with names from the customer namespace to avoid naming conflicts. After an upgrade, the append structures are again appended to tables modified by SAP.

Append structures can be defined as form-based structures in transaction `SE11` or as source-code-based structures using [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) in the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html). The following section describes the syntax of the source code-based definition:

The same structure can be appended to multiple DDIC database tables or structures by including it in the individual append structures as an include structure.

The append structure `DEMO_APPEND_STRUCTURE` extends the structure `DEMO_STRUCTURE`.

-   New components can be inserted (if allowed by the [enhancement category](ABENDDIC_STRUCTURES_ENH_CAT.html))
-   [Foreign keys](ABENFOREIGN_KEY_GLOSRY.html) can be added to existing fields of a DDIC database table.
-   [Search helps](ABENSEARCH_HELP_GLOSRY.html) can be bound to existing components.

-   Append structures can only be appended to [transparent tables](ABENTRANSPARENT_TABLE_GLOSRY.html).
-   No append structures can be appended to DDIC database tables with fields of the type `LCHR` or `LRAW`, since these fields must always be the last field of the table.
-   Any fields appended to a DDIC database table using an append structure can be added to its [secondary indexes](ABENDDIC_DATABASE_TABLES_INDEX.html). No secondary index can be defined for the append structure itself.
-   A binding of a check table or search help that already exists for a field of the DDIC database table cannot be modified by an append structure.

-   [Dictionary DDL for Structure Extensions](ABENDDIC_EXTEND_TYPE.html)

abenabap.html abenabap\_dictionary.html abenddic\_enhancements.html