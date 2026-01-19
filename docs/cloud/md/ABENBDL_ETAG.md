---
title: "ETag for Active Data"
description: |
  ETag for Draft Data -   `etag master` and `etag dependent` can optionally be used for the persistent data(ABENRAP_PERSISTENT_DATA_GLOSRY.html) of a business object. They are defined at entity-level in the entity behavior characteristics(ABENCDS_ENTITY_PROPERTIES_GLOSRY.html) for each RAP BO ent
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_ETAG.htm"
abapFile: "ABENBDL_ETAG.html"
keywords: ["update", "do", "if", "case", "data", "types", "ABENBDL", "ETAG"]
---

`etag master MasterField | etag dependent by _Assoc`\\

`total etag TotalEtagField`

[1. `... etag master MasterField`](#ABAP_VARIANT_1@1@)

[2. `... etag dependent by _Assoc`](#ABAP_VARIANT_2@1@)

[3. `... total etag TotalEtagField`](#ABAP_VARIANT_3@1@)

Defines a field as entity tag ([ETag](ABENRAP_ETAG_GLOSRY.html)) field for [optimistic concurrency control](ABENOPTIMISTIC_CONC_CONTROL_GLOSRY.html). A field flagged as ETag field is used to describe, uniquely, the state of a requested resource (for example a specific [entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html)). Any changes made to the requested resource update the ETag field. On each change request, the value of the ETag field is compared to the value the [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) sends with the request and only if these values match is the change request accepted. This way, inconsistencies and unintentional changes of data are prevented when multiple users work on the same data.

In a [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html), optimistic concurrency control with ETag fields can be handled by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html), so that no implementation in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is required. This is only possible if the following prerequisites are met:

In an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html), the handling of the ETag fields must be implemented in the ABAP behavior pool.

Development guide for the ABAP RESTful Application Programming Model, section about [Optimistic Concurrency Control](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41d72e9f31964082a7e7189f832010c3?version=sap_cross_product_abap).

Defines an entity as [RAP ETag master entity](ABENRAP_ETAG_MA_ENT_GLOSRY.html) and assigns a field `MasterField` for change logging. The following rules apply:

Defines an entity as [RAP ETag dependent entity](ABENRAP_ETAG_DEP_ENT_GLOSRY.html). This means that this entity does not have its own ETag field and uses the ETag field of the ETag master entity. The following rules apply to ETag dependent entities:

The following syntax short form is available to summarize lock dependent, ETag dependent, and authorization dependent:

(\[lock\]\[, authorization\]\[, etag\]) dependent by \_Assoc

For details, see the topic [RAP - `SyntaxShortForm`](ABENBDL_SHORT_SYNTAX.html).

Defines a field `TotalEtagField` as [total ETag field](ABENRAP_TOTAL_ETAG_GLOSRY.html) for [draft-enabled scenarios](ABENBDL_WITH_DRAFT.html) to enable optimistic concurrency checks during the transition from draft to persistent data. If a user edits data in draft mode and returns after the exclusive lock of their editing session has expired, the total ETag checks whether the persistent data has been changed during the period of absence. Each time the persistent state is changed, the total ETag field is updated. To resume a draft version, the infrastructure first compares the total ETag of the persistent and the draft version and only if both values are identical the draft can be resumed.

The following rules apply:

For further details, see topic [Total ETag](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/f5e8548c241b43ab82bceec030b5dc9a?version=sap_cross_product_abap) in the development guide for the ABAP RESTful Application Programming Model.

ETag for Active Data

ETag for Draft Data

-   `etag master` and `etag dependent` can optionally be used for the [persistent data](ABENRAP_PERSISTENT_DATA_GLOSRY.html) of a business object. They are defined at entity-level in the [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html) for each [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) separately. If an entity is an [ETag master entity](ABENRAP_ETAG_MA_ENT_GLOSRY.html), it has its own ETag field. An [ETag dependent entity](ABENRAP_ETAG_DEP_ENT_GLOSRY.html) uses the ETag field of another entity for optimistic concurrency control.
-   \\ `total etag` is available for [draft-enabled business objects](ABENBDL_WITH_DRAFT.html) only and for these, it is mandatory. It manages the transitions from active data to draft data and vice versa.

-   The ETag field must be updated reliably with every change on the [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html).
-   The read access to the ETag master field from every entity that uses this particular ETag field must be guaranteed.

-   Managed RAP BO
-   Unmanaged RAP BO
-   `total ETag` is available in draft-enabled RAP BOs only and for these, it is mandatory.
-   In a [projection](ABENCDS_PROJ_BDEF_GLOSRY.html) or [interface](ABENCDS_INTERFACE_BDEF_GLOSRY.html) BDEF, the optimistic concurrency control functionality can be reused with the keyword `use etag`. For details, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

-   In draft-enabled RAP BOs, [total ETag](ABENRAP_TOTAL_ETAG_GLOSRY.html) and `ETag master/dependent` complement each other and it is recommended that both are used together. Depending on the use case, separate fields or identical fields can be used as total ETag field and ETag master field.
-   The RAP framework offers reuse data elements that can be used as ETag and total ETag fields. For more information, see [RAP Reuse Data Elements](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/84bd58e2b9354be4a7a1c91cb687815c?version=sap_cross_product_abap).
-   In scenarios where the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html) handles the ETag fields, it is recommended that you specify the respective fields as read-only using the field characteristic [`readonly`](ABENBDL_FIELD_CHAR.html).
-   In an [unmanaged RAP business object](ABENUNMANAGED_RAP_BO_GLOSRY.html), it is recommended that the ETag fields are handled during the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html).

-   An ETag master field is optional.
-   One or more RAP BO entities can be defined as ETag master entities and have an ETag master field assigned. RAP BO entities on each level of the CDS composition tree can be ETag master entities.
-   `MasterField` can have any data type that can be converted into the data type [`string`](ABENBUILTIN_TYPES_CHARACTER.html) (see the topic [Assignment and Conversion Rules](ABENCONVERSION_RULES.html) for details).
-   In a [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html), a value for the total ETag field can be provided automatically if the following conditions are met:

-   The ETag master field `MasterField` must be annotated in CDS with the annotation [`@Semantics.systemDateTime.localInstanceLastChangedAt: true`](ABENCDS_425922347-_ANNO.html)
-   The data type must be [`utclong`](ABENBUILTIN_TYPES_CHARACTER.html), `TIMESTAMP`, or `TIMESTAMPL`.

-   In [unmanaged RAP BOs](ABENUNMANAGED_RAP_BO_GLOSRY.html), the application developer must ensure that a value is provided for the ETag master field.

-   The same field can be used as ETag master field `MasterField` and as total ETag field `TotalEtagField`.
-   In an [unmanaged RAP business object](ABENUNMANAGED_RAP_BO_GLOSRY.html), it is recommended that the ETag fields are handled during the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html).

-   The association `_Assoc` to the ETag master entity must be explicitly read-enabled in the entity behavior body using the syntax:
-   `association _Assoc \{ \}`\\
    This association must also be defined in the underlying CDS data model.
-   The ETag master entity must be higher in the [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) than its dependent entities.

-   A total ETag field is mandatory for [draft-enabled RAP BOs](ABENDRAFT_RAP_BO_GLOSRY.html).
-   The total ETag field must be defined directly after the lock master entity [`lock master`](ABENBDL_LOCKING.html).
-   The total ETag field is defined in the [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html) of the [lock master entity](ABENRAP_LOCK_MA_ENT_GLOSRY.html) and it controls all RAP BO entities of the current RAP BO.
-   `TotalEtagField` can have any data type that can be converted into the data type [`string`](ABENBUILTIN_TYPES_CHARACTER.html) (see the topic [Assignment and Conversion Rules](ABENCONVERSION_RULES.html) for details). Additionally, it can have a length of maximally 40 characters.
-   In a managed RAP BO, a value for the total ETag field can be provided automatically if the following conditions are met:

-   The field `TotalEtagField` must be annotated in CDS with the annotation [`@Semantics.systemDateTime.lastChangedAt: true`](ABENCDS_1631854850-_ANNO.html)
-   The data type must be [`utclong`](ABENBUILTIN_TYPES_CHARACTER.html), `TIMESTAMP`, or `TIMESTAMPL`.

-   In unmanaged RAP BOs, the application developer must ensure that a value is provided for the total ETag field `TotalEtagField`.

-   The same field can be used as ETag master field `MasterField` and as total ETag field `TotalEtagField`.
-   In an [unmanaged RAP business object](ABENUNMANAGED_RAP_BO_GLOSRY.html), it is recommended that the total ETag field is handled during the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html).

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_character.html