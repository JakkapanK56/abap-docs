---
title: "ABENBDL_DRAFT_ACTION_EXT"
description: |
  ABENBDL_DRAFT_ACTION_EXT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_DRAFT_ACTION_EXT.htm"
abapFile: "ABENBDL_DRAFT_ACTION_EXT.html"
keywords: ["update", "delete", "do", "if", "class", "ABENBDL", "DRAFT", "ACTION", "EXT"]
---

``extend draft determine action Prepare               \{               [[`determination`](ABENBDL_DETERMINATIONS.html)\ [(always)] DetName;]\               [[`validation`](ABENBDL_VALIDATIONS.html)\ [(always)] ValName;]\               [[`determination`](ABENBDL_DETERMINATIONS.html)\ [(always)] Child~ChildDetermination;]\               [[`validation`](ABENBDL_VALIDATIONS.html)\ [(always)] Child~ChildValidation;]\               ...                \}``

Extends an existing [draft determine action Prepare](ABENRAP_BO_DRAFT_ACTION_GLOSRY.html) with extension [determinations](ABENRAP_DETERMINATION_GLOSRY.html) and extension [validations](ABENRAP_VALIDATION_GLOSRY.html). At least one extension determination or extension validation must be specified within curly brackets. The optional addition [(always)](ABENBDL_DETERMINE_ACTION.html) can be used. Determinations and validations of child entities can be included.

**Limitation:** Extensions for the draft determine action `Prepare` are currently not supported in unmanaged RAP BOs.

An [internal](ABENBDL_INTERNAL.html) draft determine action Prepare cannot be extended.

The following source code shows BDEF extension `DEMO_RAP_PREPARE_EXT`. It extends the base BDEF `DEMO_RAP_EXTENSIBILITY_DET_ACT` by adding one further determination `myDet` to the draft determine action `Prepare`.

The base BDEF is draft-enabled and explicitly allows extensions to the draft determine action Prepare:

The BDEF extension adds one further determination to the draft determine action Prepare:

-   The respective draft determine action must be enabled for extensions in the extended BDEF as described in topic [RAP - Extensibility Enabling for Base BOs](ABENBDL_EXTENSIBILITY_ENABLING_M_U.html).

-   [RAP - `draft action`](ABENBDL_DRAFT_ACTION.html).

managed implementation in class bp\_demo\_rap\_extensibility\_det\_ unique;\\nstrict(2);\\nextensible\\n\\{ with determinations on modify;\\n with determinations on save;\\n with validations on save; \\}\\nwith draft;\\n\\ndefine behavior for DEMO\_RAP\_EXTENSIBILITY\_DET\_ACT alias Root\\npersistent table demo\_sales\_order\\ndraft table demo\_sales\_draft\\nlock master\\ntotal etag LastChangedAt\\nauthorization master ( instance, global )\\nextensible\\n\\{\\n create;\\n update;\\n delete;\\n association \_child \\{ create; with draft; \\}\\n field(readonly:update) SoKey;\\n field ( readonly ) LastChangedAt;\\n\\n draft action Activate optimized;\\n draft action Discard;\\n draft action Edit;\\n draft action Resume;\\n\\n draft determine action Prepare extensible\\n \\{ determination (always) setID; \\}\\n\\n determination setID on save \\{ create; \\}\\n\\ndetermine action trigger\_all extensible\\n \\{\\n determination ( always ) setID;\\n determination ( always ) Child ~ TotalPrice;\\n \\}\\n\\n mapping for DEMO\_SALES\_ORDER corresponding extensible\\n \\{\\n SoKey = so\_key;\\n SalesOrderId = id;\\n BuyerId = buyer\_id;\\n Status = lifecycle\_status;\\n ShipToId = ship\_to\_id;\\n QuantitySum = quantity\_sum;\\n UomSum = uom\_sum;\\n AmountSum = amount\_sum;\\n CurrencySum = currency\_sum;\\n CompanyCode = company\_code;\\n CreatedBy = created\_by;\\n CreatedOn = created\_on;\\n CreatedAt = created\_at;\\n LastChangedBy = last\_changed\_by;\\n LastChangedOn = last\_changed\_on;\\n LastChangedAt = last\_changed\_at;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXT\_DET\_ACT\_CHILD alias Child\\npersistent table demo\_sales\_so\_i\\ndraft table sales\_i\_draft\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\n\\{\\n update;\\n delete;\\n\\n field ( readonly : update ) ParentKey, SoItemKey;\\n\\n determination TotalPrice on save \\{ create; \\}\\n\\n association \_parent \\{ with draft; \\}\\n\\n mapping for DEMO\_SALES\_SO\_I corresponding\\n \\{\\n SoItemKey = so\_item\_key;\\n ParentKey = parent\_key;\\n GrossAmount = gross\_amount;\\n \\}\\n\\} extension using interface DEMO\_RAP\_EXT\_DET\_ACT\_INT\\nimplementation in class bp\_demo\_rap\_prepare\_ext unique;\\n\\nextend behavior for Root\\n\\{\\n determination myDet on save \\{ create; \\}\\n\\n extend draft determine action Prepare\\n \\{\\n determination ( always ) myDet;\\n \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_managed\_unm.html abenbdl\_extension\_syntax.html abenbdl\_extend\_beh.html abenbdl\_entity\_beh\_extension.html abenbdl\_ext\_elem\_ext.html