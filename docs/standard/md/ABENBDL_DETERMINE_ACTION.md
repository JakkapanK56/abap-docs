---
title: "ABENBDL_DETERMINE_ACTION"
description: |
  ABENBDL_DETERMINE_ACTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_DETERMINE_ACTION.htm"
abapFile: "ABENBDL_DETERMINE_ACTION.html"
keywords: ["insert", "update", "delete", "do", "if", "method", "class", "data", "ABENBDL", "DETERMINE", "ACTION"]
---

``[[`internal`](ABENBDL_INTERNAL.html)] determine action            [([`authorization:none`](ABENBDL_ACTIONS_AUTH.html)]\             |[[`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html)]\             |[[`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html)]\             |[[`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html))]\             DetermineActionName [[`extensible`](ABENBDL_EXTENSIBILITY_ENABLING_M_U.html)]\            \{             [`determination`](ABENBDL_DETERMINATIONS.html)\ [(always)] MyDetermination1;             [`determination`](ABENBDL_DETERMINATIONS.html)\ [(always)] MyDetermination2;             [`validation`](ABENBDL_VALIDATIONS.html)\ [(always)] MyValidation1;             [`validation`](ABENBDL_VALIDATIONS.html)\ [(always)] MyValidation2;             [`determination`](ABENBDL_DETERMINATIONS.html)\ [(always)] Child~ChildDetermination;             [`validation`](ABENBDL_VALIDATIONS.html)\ [(always)] Child~ChildValidation;             ...            \}``

[Determine actions](ABENRAP_BO_DET_ACTION_GLOSRY.html) allow the [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) to execute [determinations](ABENBDL_DETERMINATIONS.html) and [validations](ABENBDL_VALIDATIONS.html) on request. Whenever a determine action is executed, the determinations and validations assigned to it are evaluated and then only those determinations and validations are executed whose trigger conditions are fulfilled.

A determine action can include on-save determinations and validations. On-modify determinations are not allowed. The determinations and validations are specified within curly brackets `\{ \}` and they are separated by semicolons (`;`). It is possible to specify a determine action without any determinations and validations. Determinations and validations of [child entities](ABENCHILD_ENTITY_GLOSRY.html) can be included using the syntax `child~childDetermination` or `child~childValidation`, as long as these validations and determinations do not include the trigger operation `delete`.

If the optional addition `always` is used, then all determinations and validations that are part of the determine action are executed regardless of their trigger conditions. After a determination with the flag `always` has been executed, it can be triggered again by other determinations belonging to the same determine action.

Execution order: Determinations are executed first, validations afterwards. The execution order among determinations or validations themselves is defined by the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) and is independent of the specified order within the determine action.

The following [RAP BDL operation additions](ABENBDL_OPERATIONS_ADDITIONS.html) are possible:

The [draft determine action](ABENBDL_DRAFT_ACTION.html)\\ `Prepare` is the draft pendant to determine actions. It is documented in topic [RAP BDL - draft actions](ABENBDL_DRAFT_ACTION.html).

Development guide for the ABAP RESTful Application Programming Model, topic [Action Definition](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/14ddc6b2442b4b97842af9158a1c9c44?version=sap_cross_product_abap).

The following example shows a managed BDEF based on the on the CDS root view entity `DEMO_SALES_CDS_SO_3`. The root view entity represents a sales order and the child entity represents a sales order item. The determine action `trigger_all` includes the following two determinations, one from in the root entity and one from the child entity:

The determinations are implemented in the behavior pool `BP_DEMO_SALES_CDS_SO_3`.

The class `CL_DEMO_CDS_DETERMINE_ACTION` accesses the business object using [EML](ABENEML_GLOSRY.html) and carries out the following steps:

Result: values for the fields `ID` and `TotalPrice` are determined.

-   [`internal`](ABENBDL_INTERNAL.html) to make the respective determine action accessible only from within the business object implementation.
-   [`authorization:none`](ABENBDL_ACTIONS_AUTH.html) excludes the operation in question from [authorization checks](ABENBDL_AUTHORIZATION.html).
-   [`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html) delegates the [authorization control](ABENBDL_AUTHORIZATION.html) to the authorization check that is implemented for the update operation.
-   [`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html) replaces the [authorization control](ABENBDL_AUTHORIZATION.html) that is specified in the [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html) and applies global authorization checks instead.
-   [`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html) replaces the [authorization control](ABENBDL_AUTHORIZATION.html) that is specified in the [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html) and applies instance authorization checks instead.
-   A determine action can be declared as extensible using the addition [`extensible`](ABENBDL_EXTENSIBLE.html). This makes it possible to add validations or determinations to the determine action in question via a [BDEF extension](ABENRAP_EXTENSION_GLOSRY.html).
-   **Note** A determine action can be declared as `extensible` only if the following prerequisites are met: The RAP BO must allow for extensions and the RAP BO must be [draft-enabled](ABENDRAFT_RAP_BO_GLOSRY.html). For further details on extensibility enabling, see the topic [RAP - Extensibility Enabling for Base BOs](ABENBDL_EXTENSIBILITY_ENABLING_M_U.html).

-   [Managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html): In a [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html), determine actions do not require an implementation in the [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html), but the determinations and validations included in a determine action must be implemented.
-   [Unmanaged](ABENUNMANAGED_RAP_BO_GLOSRY.html) and [draft-enabled](ABENDRAFT_RAP_BO_GLOSRY.html) RAP BOs: In an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html), determine actions require an implementation in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR MODIFY ... ACTION`](ABAPHANDLER_METH_MODIFY.html) in the ABAP behavior pool.
-   **Caution** Not available for unmanaged, non-draft RAP BOs.
-   In a [projection BO](ABENRAP_PROJECTION_BO_GLOSRY.html), determine actions from the base BDEF can be reused using the syntax [`use action`](ABENBDL_USE_PROJECTION.html). For details on reuse, see the topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).
-   In a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), determine actions from the base BDEF can be reused using the syntax [`use action`](ABENBDL_USE_PROJECTION.html). For details on reuse, see the topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

-   `setID` assigns values to the semantic key field `SalesOrderId` during the [save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) whenever a new entity instance is created.
-   `TotalPrice` sums up the price of all items of a sales order. It is triggered whenever a new sales order is created.

-   It first inserts data into the BO's [persistent database tables](ABENRAP_PERSISTENT_TABLE_GLOSRY.html) using [ABAP SQL](ABENABAP_SQL_GLOSRY.html). That means that BO entity instances are available in the database, but the determinations haven't yet been triggered.
-   The determine action `trigger_all` is executed with the statement `MODIFY ENTITIES` for two entity instances. For these two entity instances, the fields `ID` and `TotalPrice` are determined.
-   Code snippet:

-   The determined values are committed to the database with the statement `COMMIT ENTITIES`.

managed implementation in class bp\_demo\_sales\_cds\_so\_3 unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_SALES\_CDS\_SO\_3 alias SalesOrder\\npersistent table demo\_sales\_order\\nlock master\\nauthorization master (global)\\n\\{\\n create;\\n update;\\n association \_SalesOrderItem \\{ create; \\}\\n field(readonly:update) SoKey;\\n\\n determination setID on save \\{ create; \\}\\n\\n determine action trigger\_all\\n \\{\\n determination ( always ) setID;\\n determination ( always ) SalesOrderItem ~ TotalPrice;\\n \\}\\n\\n mapping for DEMO\_SALES\_ORDER\\n \\{\\n SoKey = so\_key;\\n SalesOrderId = id;\\n BuyerId = buyer\_id;\\n Status = lifecycle\_status;\\n ShipToId = ship\_to\_id;\\n QuantitySum = quantity\_sum;\\n UomSum = uom\_sum;\\n AmountSum = amount\_sum;\\n CurrencySum = currency\_sum;\\n CompanyCode = company\_code;\\n CreatedBy = created\_by;\\n CreatedAt = created\_at;\\n CreatedOn = created\_on;\\n LastChangedBy = last\_changed\_by;\\n LastChangedOn = last\_changed\_on;\\n LastChangedAt = last\_changed\_at;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_SALES\_CDS\_SO\_I\_3 alias SalesOrderItem\\npersistent table demo\_sales\_so\_i\\nlock dependent by \_SalesOrder\\nauthorization dependent by \_SalesOrder\\n\\{\\n update;\\n delete;\\n\\n field ( readonly : update ) ParentKey;\\n\\n determination TotalPrice on save \\{ create; \\}\\n\\n association \_SalesOrder \\{ \\}\\n field(readonly:update) SoItemKey;\\n\\n mapping for DEMO\_SALES\_SO\_I corresponding\\n \\{\\n SoItemKey = so\_item\_key;\\n ParentKey = parent\_key;\\n GrossAmount = gross\_amount;\\n \\}\\n\\} MODIFY ENTITIES OF demo\_sales\_cds\_so\_3 \\n ENTITY SalesOrder \\n EXECUTE trigger\_all \\n FROM VALUE #( ( sokey = '0894EF1643A01EDB90EE45FBFB0C7DAA' ) \\n ( sokey = '0894EF1643A01EDB90EE45FBFB0C9DAA' ) ) \\n MAPPED FINAL(mapped) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). \\n\\ \\n COMMIT ENTITIES. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html