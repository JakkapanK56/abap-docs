---
title: "ABAPMODIFY_AUG_ENTITY_ENTITIES"
description: |
  ABAPMODIFY_AUG_ENTITY_ENTITIES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMODIFY_AUG_ENTITY_ENTITIES.htm"
abapFile: "ABAPMODIFY_AUG_ENTITY_ENTITIES.html"
keywords: ["insert", "update", "do", "if", "case", "try", "method", "ABAPMODIFY", "AUG", "ENTITY", "ENTITIES"]
---

``MODIFY AUGMENTING \{ ENTITY bdef                        [`operations`](ABAPMODIFY_ENTITY_ENTITIES_OP.html)\ [RELATING TO orig BY rela]\ \}\                  |\ \{ ENTITIES OF bdef                        ENTITY bdef1 [`operations`](ABAPMODIFY_ENTITY_ENTITIES_OP.html)\ [RELATING TO orig BY rela]\                       [ENTITY bdef2 [`operations`](ABAPMODIFY_ENTITY_ENTITIES_OP.html)\ [RELATING TO orig BY rela]]\                       [...]\ \}.``

[1. `MODIFY AUGMENTING ENTITY ...`](#ABAP_ALTERNATIVE_1@2@)

[2. `MODIFY AUGMENTING ENTITIES OF ...`](#ABAP_ALTERNATIVE_2@2@)

[`... RELATING TO orig BY rela`](#ABAP_ONE_ADD@1@)

A special variant of [`MODIFY ENTITY, ENTITIES`](ABAPMODIFY_ENTITY_ENTITIES.html) that is only possible in the context of [projections](ABENCDS_DEFINE_VIEW_AS_PROJECTION.html). The variant can only be used by a [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) and is used to manipulate the request for the [base BO](ABENRAP_PROJECTED_BO_GLOSRY.html) in the handler implementation. Only entities of the base BO can be modified by this statement. All [standard operations](ABENCRUD_GLOSRY.html) are allowed including actions.

Short form. Used to manipulate the request for the [base BO](ABENRAP_PROJECTED_BO_GLOSRY.html) in the handler implementation. `bdef` must be the full name, i. e. not the alias name, of the projected root BO. Multiple operations can be specified for [operations](ABAPMODIFY_ENTITY_ENTITIES_OP.html) within a single `MODIFY` statement. However, in this case, it must be ensured that the importing parameters for the corresponding methods are available.

Long form. Used to manipulate the request for the base BO in the handler implementation including one or more RAP BO entities. `bdef` must be the full name, i. e. not the alias name, of the projected root BO.

`bdef` must be the full name, i. e. not the alias name, of the projected root BO followed by a list of operations grouped by individual entities. `bdef1`, `bdef2`, and so on, must be entities contained in the [composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) of the [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html) `bdef`. The root entity itself can also be inserted in the position of `bdef1`, for example. Each part of the list of operations specified after `MODIFY AUGMENTING ENTITIES OF bdef` has the same syntax as the short form. At least one entry (`ENTITY bdef/bdef1/...` with an operation) must be specified. The same entity can be specified after `ENTITY` repeatedly, however, the same operation in that combination is allowed only once. `operations` must be specified as outlined in the topic [`operations`](ABAPMODIFY_ENTITY_ENTITIES_OP.html).

Used to relate augment instances to original instances. When the augmented request is passed to the base handler, it may return `FAILED` instances. If this happens for new instances that are not contained in the original request but added by the augment exit, it may be problematic for the consumer to relate these responses to the actual request. The runtime uses this information to transform `FAILED` keys of new instances back to the keys of the related original instances which the consumer can be expected to handle.

Each operation can be followed by this clause.

In the example code below, `orig1` (the same is true for `orig2`) is an original instance table (i. e. the input for the augment exit), and `rela1` is a variable of type `ABP_BEHV_RELATING_TAB` that is a standard table of integers. The number of lines in `augm1` and `rela1` must be equal. All entries in `rela1` must be integers between *0* and `lines( orig1 )`. A violation of these conditions leads to a runtime error. If the entry in `rela1` is an integer greater than *0*, for example, *2*, it means that the second entry in `augm1` is related to the second entry in `orig1`. If the entry is *0*, it means that an entry in `augm1` is not related to an entry in `orig1`, for example, because it is an original instance. It is possible that many augment instances are related in this way to the same original instance.

If augmentations are needed with the same operation, for example `CREATE`, but with instances relating to different original tables, it can be achieved by splitting the augmentation in several `MODIFY AUGMENTING` statements. If an instance from `augm1` fails, for example when trying to lock it or when processing the base handler, the related `orig1` instance is included in the `FAILED` response of the overall request. If the failure occurs when locking, the related `orig1` instance is not passed to the base handler.

The following statement shows the pattern of an ABAP EML `MODIFY` statement with the `AUGMENTING` and `RELATING` additions.

The example [ABAP EML - `MODIFY ENTITY AUGMENTING`](ABENEML_MODIFY_AUGMENTING_ABEXA.html) demonstrates the addition `AUGMENTING` with a RAP projection business object.

-   For the statements, no [`response parameters`](ABAPEML_RESPONSE.html) can be specified, i.e. the additions `FAILED`, `MAPPED` or `REPORTED` cannot be used.
-   An ABAP EML `MODIFY` statement using the addition `AUGMENTING` must not overwrite fields of the original request, i. e. there must not be a flag in `%control` which is set for the same instance and field both in the original and in the augmenting operation. An ABAP EML `MODIFY` statement using the addition `AUGMENTING` containing operations on instances which are not contained in the original request should relate these instances to instances of the original request by use of the `RELATING` clause so that responses can be associated.

-   [RAP BDL - `augment`, projection BDEF](ABENBDL_AUGMENT_PROJECTION.html)
-   Development guide for the ABAP RESTful Application Programming Model, section [Operation Augmentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/346c2b7516ce4176bbb4daebaa80c2ca?version=sap_cross_product_abap).

MODIFY AUGMENTING ENTITY ... \\n CREATE FROM augm1 RELATING TO orig1 BY rela1 \\n UPDATE FROM augm2 RELATING TO orig2 BY rela2 ... abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abeneml\_in\_abp.html