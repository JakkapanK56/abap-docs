---
title: "ABENNEWS-916-CDS_BDL"
description: |
  ABENNEWS-916-CDS_BDL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-916-CDS_BDL.htm"
abapFile: "ABENNEWS-916-CDS_BDL.html"
keywords: ["update", "do", "if", "data", "ABENNEWS", "916", "CDS", "BDL"]
---

[1\. RAP Change Documents](#ABAP_MODIFICATION_1@4@)

[2\. RAP Copy Action](#ABAP_MODIFICATION_2@4@)

[3\. Dedicated Authorizations for Create-by-Association Operations](#ABAP_MODIFICATION_3@4@)

[RAP change documents](ABENRAP_CHANGE_DOCUMENTS_GLOSRY.html) are now available. They can be used to log changes of persisted RAP BO data in a [change document object](ABENCHANGE_DOCUMENT_OBJ_GLOSRY.html).

A new [RAP hierarchy action](ABENRAP_HIERARCHY_ACTION_GLOSRY.html) is available that can be used in editable treeview scenarios: the [RAP copy action](ABENRAP_COPY_ACTION_GLOSRY.html). It is defined using the syntax addition [`copy action`](ABENBDL_COPY_ACTION.html).

[RAP authorization dependent entities](ABENRAP_AUTH_DEP_ENT_GLOSRY.html) use the authorization control that is defined on the related authorization master entity. For [RAP create-by-association operations](ABENRAP_CBA_OPERATION_GLOSRY.html) on an authorization-dependent entity, the system applies the authorization check for updates of the authorization master entity by default. For create by association on [CDS to-child associations](ABENTO_CHILD_ASSOCIATION_GLOSRY.html), you can now deviate from this default and specify separate authorizations for create-by-association operations.

abenabap.html abennews.html abennews-91.html abennews-916.html abennews-916-restful.html