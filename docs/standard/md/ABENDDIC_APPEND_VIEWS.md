---
title: "ABENDDIC_APPEND_VIEWS"
description: |
  ABENDDIC_APPEND_VIEWS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_APPEND_VIEWS.htm"
abapFile: "ABENDDIC_APPEND_VIEWS.html"
keywords: ["select", "if", "data", "ABENDDIC", "APPEND", "VIEWS"]
---

[DDIC database views](ABENDDIC_DATABASE_VIEWS.html) delivered by SAP can be extended by partners and customers using views known as DDIC append views, without modifying the original object. The name of a DDIC append view is subject to the same rules as the name of a [DDIC view](ABENDDIC_VIEWS.html) and should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

A DDIC append view can add further fields from one of the basis tables of a DDIC database view to the database view in question. Append views cannot be used to add further basis tables to the view or to modify the join conditions or selection conditions of a DDIC database view. A DDIC append view is assigned to exactly one DDIC database view. More than one DDIC append view can be created for a DDIC database view.

When a DDIC append view is activated, an [append structure](ABENAPPEND_STRUCTURE_GLOSRY.html) with this name is created in ABAP Dictionary. Its components are the additional view fields of the append view.

If a DDIC database view is activated, all DDIC append views for this view are found and their fields are appended to the DDIC database view. The append structure of the append view is added to the structure of the DDIC database view. If an append view is created or modified, the associated DDIC database view is changed automatically when the append view is activated.

The DDIC append view `DEMO_APPEND_VIEW` is added to the DDIC database view `DEMO_ORIGINAL`. The program `DEMO_APPEND_VIEW` uses [`SELECT`](ABAPSELECT.html) to access the extended view. It displays the components of the original view and of the append view and the result set.

-   DDIC append views are possible only for DDIC database views and not for any other kind of [DDIC views](ABENDDIC_VIEWS.html).
-   In [ABAP CDS](ABENABAP_CDS_GLOSRY.html), [CDS entity extensions](ABENCDS_ENTITY_EXTEND_GLOSRY.html) are available to extend [CDS entities](ABENCDS_ENTITY_GLOSRY.html).

abenabap.html abenabap\_dictionary.html abenddic\_enhancements.html