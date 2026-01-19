---
title: "ABENBDL_ACTION_REPEATABLE"
description: |
  ABENBDL_ACTION_REPEATABLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_ACTION_REPEATABLE.htm"
abapFile: "ABENBDL_ACTION_REPEATABLE.html"
keywords: ["update", "delete", "do", "if", "class", "data", "types", "ABENBDL", "ACTION", "REPEATABLE"]
---

`... repeatable ...`

Defines a non-factory [RAP action](ABENRAP_ACTION_GLOSRY.html) or a [RAP function](ABENRAP_FUNCTION_GLOSRY.html) as [repeatable RAP BO operation](ABENRAP_REPEATABLE_ACTION_GLOSRY.html). A repeatable RAP BO operation can be executed multiple times on the same [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) within the same [ABAP EML](ABENABAP_EML_GLOSRY.html) or [OData](ABENODATA_GLOSRY.html) request. The [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) of a repeatable RAP BO operation contains a [`%cid`](ABAPDERIVED_TYPES_CID.html) component and the [RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html) are filled for each execution individually.

When executing a RAP repeatable action or function, the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) component [`%cid`](ABAPDERIVED_TYPES_CID.html) must be provided. This can be done using the optional addition [`AUTO FILL CID`](ABAPMODIFY_ENTITY_ENTITIES_FIELDS.html).

The following example shows a managed BDEF with multiple actions and functions.

**Note** This example is intentionally kept short and simple and focuses on specific RAP aspects. It does not fully meet the requirements of the [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html).

The BDEF derived type of the non-factory instance-bound action `Action` does not have a `%cid` component. It looks as follows:

The BDEF derived type of the repeatable action `RepeatAction` has a `%cid` component. It looks as follows:

The non-factory instance-bound action `Action` must not be executed multiple times on the same RAP BO entity instance. The following execution results in a runtime error.

The repeatable action `RepeatAction` can be executed multiple times on the same RAP BO entity instance as follows:

**Note**\\ *RepeatAction* is not implemented in this example.

-   Only non-factory, instance-bound RAP actions can be declared as `repeatable`. Other kinds of RAP actions must not be declared as repeatable for the following reasons:

-   [RAP factory actions](ABENRAP_FACTORY_ACTION_GLOSRY.html) are always repeatable and an explicit declaration is not necessary. The BDEF derived type of a RAP factory action contains the `%cid` component and multiple executions are possible.
-   [Static](ABENBDL_STATIC.html) RAP actions are always repeatable and an explicit declaration is not necessary. Static RAP actions are identified by means of a `%cid` component and multiple executions are possible.
-   [Draft actions](ABENRAP_BO_DRAFT_ACTION_GLOSRY.html) must not be executed multiple times on the same [RAP draft instance](ABENRAP_DRAFT_INSTANCE_GLOSRY.html) within one request. This is not useful and not supported.

-   The same rules apply and the same [RAP BDL operation additions](ABENBDL_OPERATIONS_ADDITIONS.html) are available as for non-factory actions, see topic [RAP - `action`, Non-Factory](ABENBDL_ACTION_NONFACTORY.html). There is only one exception: the syntax addition `static` is not available for repeatable actions.

-   Only instance-bound functions can be declared as `repeatable`. Static RAP functions are always repeatable and they are identified by means of a `%cid` component. Therefore, an explicit declaration of the repeatable characteristic is not required and not supported.
-   The same rules apply and the same [RAP BDL operation additions](ABENBDL_OPERATIONS_ADDITIONS.html) are available as for functions, see topic [RAP - `function`](ABENBDL_FUNCTION.html). There is only one exception: the syntax addition `static` is not available for repeatable functions.

-   [Managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   [Projection BO](ABENRAP_PROJECTION_BO_GLOSRY.html): Reuse of repeatable RAP BO operations as well as definition of new repeatable RAP BO operations. For details on reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html). For details on action definition, see topic [RAP - `action`, Projection BDEF](ABENBDL_NONSTANDARD_PROJECTION.html).
-   [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html): Reuse of repeatable RAP BO operations For details on reuse, see the topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

-   Development guide for the ABAP RESTful Application Programming Model, section about [Actions](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/83bad707a5a241a2ae93953d81d17a6b?version=sap_cross_product_abap).
-   Development guide for the ABAP RESTful Application Programming Model, section about [Functions](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/d401150cfdb1454d9f55d80aead9579a?version=sap_cross_product_abap).

managed implementation in class bp\_demo\_rap\_repeatable\_action unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_RAP\_REPEATABLE\_ACTION alias Root\\npersistent table demo\_cs\_rap\_tab1\\nlock master\\nauthorization master ( global )\\n\\n\\{\\n field ( readonly : update ) key\_field;\\n create;\\n update;\\n delete;\\n\\n // dup-key check\\n action Action;\\n\\n // no dup-key check\\n repeatable action RepeatAction;\\n\\n // no dup-key check (implicitly "repeatable")\\n factory action FactoryAction \[1\];\\n\\n // no dup-key check (implicitly "repeatable")\\n static action StaticAction;\\n\\n function (authorization:none) Function result \[1\] $self;\\n\\n repeatable function (authorization:none) RepeatFunction\\n result \[1\] $self;\\n\\} DELETE FROM demo\_cs\_rap\_tab1. \\nMODIFY ENTITIES OF demo\_rap\_repeatable\_action \\n ENTITY Root \\n CREATE FIELDS ( key\_field field3 ) \\n WITH VALUE #( ( %cid = 'cid1' key\_field = 3 field3 = 77 ) ) \\n EXECUTE Action \\nFROM VALUE #( ( %cid\_ref = 'cid1' ) ( %cid\_ref = 'cid1' ) ). \\nCOMMIT ENTITIES. DELETE FROM demo\_cs\_rap\_tab1. \\nMODIFY ENTITIES OF demo\_rap\_repeatable\_action \\n ENTITY Root \\n CREATE FIELDS ( key\_field field3 ) \\n WITH VALUE #( ( %cid = 'cid1' key\_field = 3 field3 = 77 ) ) \\n EXECUTE RepeatAction \\nFROM VALUE #( ( %cid = 'cid3' %cid\_ref = 'cid1' ) \\n ( %cid = 'cid4' %cid\_ref = 'cid1' ) ). \\nCOMMIT ENTITIES. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_nonstandard.html abenbdl\_action.html abenbdl\_action\_nonfactory.html