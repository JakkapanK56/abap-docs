---
title: "ABENNEWS-914-CDS_BDL"
description: |
  ABENNEWS-914-CDS_BDL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-914-CDS_BDL.htm"
abapFile: "ABENNEWS-914-CDS_BDL.html"
keywords: ["if", "ABENNEWS", "914", "CDS", "BDL"]
---

[1\. Event-Driven Side Effects](#ABAP_MODIFICATION_1@4@)

[2\. Non-Standard Operations for Associations](#ABAP_MODIFICATION_2@4@)

[3\. Editable Treeview](#ABAP_MODIFICATION_3@4@)

You can define a business event to trigger a side effect in your RAP business object using the syntax [`for side effects`](ABENBDL_EVENT.html). Whenever a defined event is raised by the application server, the [event-driven side effect](ABENRAP_EVENT_SIDEEF_GLOSRY.html) is triggered and the defined targets are reloaded.

You can now define [non-standard operations for associations](ABENBDL_ASSOC_NONSTAND_OPS.html). These are [link action, unlink action](ABENBDL_LINK_UNLINK_ACTION.html), and [inverse function](ABENBDL_INVERSE_FUNCT.html).

The editable treeview scenario is now available. You can use the syntax [`instance hierarchy`](ABENBDL_INSTANCE_HIERARCHY.html) to make a treeview editable. The [RAP reorder action](ABENRAP_REORDER_ACTION_GLOSRY.html) can optionally be specified to move a hierarchy node to a dedicated position among its siblings. It is defined using the syntax addition [`[managed] reorder action`](ABENBDL_REORDER_ACTION.html).

abenabap.html abennews.html abennews-91.html abennews-914.html abennews-914-restful.html