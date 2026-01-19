---
title: "ABENBDL_DETERMINE_ACTION_EXT"
description: |
  ABENBDL_DETERMINE_ACTION_EXT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_DETERMINE_ACTION_EXT.htm"
abapFile: "ABENBDL_DETERMINE_ACTION_EXT.html"
keywords: ["update", "delete", "do", "if", "class", "ABENBDL", "DETERMINE", "ACTION", "EXT"]
---

``extend determine action DetermineActionName            \{             [`determination`](ABENBDL_DETERMINATIONS.html)\ [(always)] MyDetermination1;             [`determination`](ABENBDL_DETERMINATIONS.html)\ [(always)] MyDetermination2;             [`validation`](ABENBDL_VALIDATIONS.html)\ [(always)] MyValidation1;             [`validation`](ABENBDL_VALIDATIONS.html)\ [(always)] MyValidation2;             [`determination`](ABENBDL_DETERMINATIONS.html)\ [(always)] Child~ChildDetermination;             [`validation`](ABENBDL_VALIDATIONS.html)\ [(always)] Child~ChildValidation;             ...            \}``

Extends an existing [determine action](ABENRAP_BO_DET_ACTION_GLOSRY.html)\\ `DetermineActionName` with extension [determinations](ABENRAP_DETERMINATION_GLOSRY.html) and extension [validations](ABENRAP_VALIDATION_GLOSRY.html). At least one extension determination or extension validation must be specified within curly brackets.

If the optional addition `always` is used, then all determinations and validations that are part of the determine action are executed regardless of their trigger conditions. After a determination with the flag `always` has been executed, it can be triggered again by other determinations belonging to the same determine action.

Determinations and validations of [child entities](ABENCHILD_ENTITY_GLOSRY.html) can be included using the syntax `child~childDetermination` or `child~childValidation`, as long as these validations and determinations do not include the trigger operation `delete`.

Execution order: Determinations are executed first, validations afterwards. The execution order among determinations or validations themselves is defined by the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) and is independent of the specified order within the determine action.

[RAP authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html) from the extended BDEF is reused, if specified.

**Limitation:** Extensions for determine actions are currently not supported in unmanaged RAP BOs.

[Internal](ABENBDL_INTERNAL.html) determine actions cannot be extended.

The following source code shows BDEF extension `DEMO_RAP_DET_ACT_EXT`. It extends BDEF `DEMO_RAP_EXTENSIBILITY_DET_ACT` by adding one further determination `setStatustoNew` to the determine action `trigger_all`.

The original BDEF explicitly allows extensions to the determine action `trigger_all`:

The extension adds one further determination `setStatustoNew` to the determine action `trigger_all`:

The ABAP class `CL_DEMO_CDS_EXT_DET_ACT` uses [EML](ABENEML_GLOSRY.html) to access to [RAP business object](ABENRAP_BO_GLOSRY.html). It executes the determine action `trigger_all`.

The RAP framework executes the implementations in the original and extension ABAP behavior pools in the following order:

The example above is explained in detail in the executable example [RAP - Extend Determine Action](ABENBDL_DET_ACTION_EXT_ABEXA.html).

-   The respective determine action must allow extensions as described in topic [RAP - Extensibility Enabling for Base BOs](ABENBDL_EXTENSIBILITY_ENABLING_M_U.html).
-   The extended BDEF must be [draft-enabled](ABENRAP_DRAFT_HANDLING_GLOSRY.html). Determine actions can currently only be extended in draft-enabled RAP BOs.

-   [RAP BDL - determine action](ABENBDL_DETERMINE_ACTION.html).

-   `get_instance_authorizations`: check whether the operation on the root node is authorized.
-   `setID`, a determination from the root node of the original BDEF.
-   `setStatustoNew`, a determination from the root node extension.
-   `get_instance_authorizations`: check whether the operation on the child node is authorized.
-   `TotalPrice`, a determination from the child node of the original BDEF.

managed implementation in class bp\_demo\_rap\_extensibility\_det\_ unique;\\nstrict(2);\\nextensible\\n\\{ with determinations on modify;\\n with determinations on save;\\n with validations on save; \\}\\nwith draft;\\n\\ndefine behavior for DEMO\_RAP\_EXTENSIBILITY\_DET\_ACT alias Root\\npersistent table demo\_sales\_order\\ndraft table demo\_sales\_draft\\nlock master\\ntotal etag LastChangedAt\\nauthorization master ( instance, global )\\nextensible\\n\\{\\n create;\\n update;\\n delete;\\n association \_child \\{ create; with draft; \\}\\n field(readonly:update) SoKey;\\n field ( readonly ) LastChangedAt;\\n\\n draft action Activate optimized;\\n draft action Discard;\\n draft action Edit;\\n draft action Resume;\\n\\n draft determine action Prepare extensible\\n \\{ determination (always) setID; \\}\\n\\n determination setID on save \\{ create; \\}\\n\\ndetermine action trigger\_all extensible\\n \\{\\n determination ( always ) setID;\\n determination ( always ) Child ~ TotalPrice;\\n \\}\\n\\n mapping for DEMO\_SALES\_ORDER corresponding extensible\\n \\{\\n SoKey = so\_key;\\n SalesOrderId = id;\\n BuyerId = buyer\_id;\\n Status = lifecycle\_status;\\n ShipToId = ship\_to\_id;\\n QuantitySum = quantity\_sum;\\n UomSum = uom\_sum;\\n AmountSum = amount\_sum;\\n CurrencySum = currency\_sum;\\n CompanyCode = company\_code;\\n CreatedBy = created\_by;\\n CreatedOn = created\_on;\\n CreatedAt = created\_at;\\n LastChangedBy = last\_changed\_by;\\n LastChangedOn = last\_changed\_on;\\n LastChangedAt = last\_changed\_at;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXT\_DET\_ACT\_CHILD alias Child\\npersistent table demo\_sales\_so\_i\\ndraft table sales\_i\_draft\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\n\\{\\n update;\\n delete;\\n\\n field ( readonly : update ) ParentKey, SoItemKey;\\n\\n determination TotalPrice on save \\{ create; \\}\\n\\n association \_parent \\{ with draft; \\}\\n\\n mapping for DEMO\_SALES\_SO\_I corresponding\\n \\{\\n SoItemKey = so\_item\_key;\\n ParentKey = parent\_key;\\n GrossAmount = gross\_amount;\\n \\}\\n\\} extension using interface DEMO\_RAP\_EXT\_DET\_ACT\_INT\\nimplementation in class bp\_demo\_rap\_det\_act\_ext unique;\\n\\nextend behavior for Root\\n\\{\\n determination setStatustoNew on save \\{ create; \\}\\n\\n extend determine action trigger\_all\\n \\{\\n determination (always) setStatustoNew;\\n \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_managed\_unm.html abenbdl\_extension\_syntax.html abenbdl\_extend\_beh.html abenbdl\_entity\_beh\_extension.html abenbdl\_ext\_elem\_ext.html