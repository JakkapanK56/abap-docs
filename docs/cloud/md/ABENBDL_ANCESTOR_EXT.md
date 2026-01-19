---
title: "ABENBDL_ANCESTOR_EXT"
description: |
  ABENBDL_ANCESTOR_EXT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_ANCESTOR_EXT.htm"
abapFile: "ABENBDL_ANCESTOR_EXT.html"
keywords: ["update", "delete", "do", "if", "data", "types", "ABENBDL", "ANCESTOR", "EXT"]
---

`...  ancestor association _Assoc[;]\               [abbreviation _newName]\               [without response]\               [\{[with draft;]\}]`

Declares an [association](ABENCDS_ASSOCIATION_GLOSRY.html) as an [ancestor association](ABENCDS_ANCESTOR_ASSOC_GLOSRY.html). An ancestor association is an [intra-BO association](ABENCDS_INTRA_BO_ASSOC_GLOSRY.html) that has as its [association target](ABENASSOCIATION_TARGET_GLOSRY.html) a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) between the current node and the [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html). The association target must be higher in the hierarchical structure of the RAP composition tree, so it must not be a sibling node. Moreover, it must not be the [CDS parent entity](ABENPARENT_ENTITY_GLOSRY.html) of the current node. The purpose of ancestor associations is to make it possible to implicitly derive the path to a RAP BO's [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html), [lock master entity](ABENRAP_LOCK_MA_ENT_GLOSRY.html), [ETag master entity](ABENRAP_ETAG_MA_ENT_GLOSRY.html), and [RAP change documents master entity](ABENRAP_CHANGE_DOC_MASTER_GLOSRY.html) so the respective entities need not be defined explicitly.

The following rules apply to ancestor associations:

The purpose of ancestor associations is to guarantee the stability of extensions even if the extended RAP BO is modified. Via ancestor associations, the path to the [RAP authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html), [RAP lock master entity](ABENRAP_LOCK_MA_ENT_GLOSRY.html), [RAP ETag master entity](ABENRAP_ETAG_MA_ENT_GLOSRY.html), and [RAP change documents master entity](ABENRAP_CHANGE_DOC_MASTER_GLOSRY.html) can be derived and need not be specified explicitly. Therefore, the syntax `ancestor association` makes the direct pointing to a authorization master, lock master, ETag master, and change documents master obsolete:

A short syntax form is available: `( lock, authorization, etag, changedocuments ) dependent`. Each of the components `lock`, `authorization`, `etag`, and `changedocuments` is optional but at least one of them must be specified within the brackets.

When creating new entity instances, the corresponding foreign keys of the association targets of the ancestor associations are derived implicitly, so that these foreign keys do not need to be provided, calculated, or read from the database.

Development guide for the ABAP RESTful Application Programming Model, section about [*Node Extensions*](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/05aef486ac5e4b74b87f3bf39be1718a?version=sap_cross_product_abap).

The BDEF extension `DEMO_RAP_EXTENSION_1` extends the RAP behavior definition `DEMO_RAP_EXTENSIBLE_ROOT`. It behavior-enables an extension node and defines the associations to its sibling, grandparent, and great-grandparent as ancestor associations. Lock, authorization, and ETag master are not specified explicitly, but derived implicitly via ancestor associations.

The executable example [Node Extension](ABENBDL_ASSOC_EXT_ABEXA.html) explains the example above in detail.

-   Each association that points to an entity between the current node and the root node should be marked as `ancestor`, except for the direct parent entity. That means that an entity can have multiple ancestor associations.
-   The following associations must not be declared as `ancestor`:

-   Sibling entities on the same hierarchy level must not be marked as `ancestor`.
-   The direct parent entity must not be marked as `ancestor`, since it can be clearly identified as ancestor by its CDS definition.
-   If there are multiple associations with the same association target, at most one of them can be declared as `ancestor`.

-   All other associations should be marked as `ancestor`.
-   An ancestor association must have a [cardinality](ABENCARDINALITY_GLOSRY.html) of 1.
-   The key fields of all ancestor associations must be marked as `readonly`.

-   Syntax to specify a [RAP lock dependent entity](ABENRAP_LOCK_DEP_ENT_GLOSRY.html): `lock dependent` instead of `lock dependent by _Assoc`
-   Syntax to specify a [RAP authorization dependent entity](ABENRAP_AUTH_DEP_ENT_GLOSRY.html): `authorization dependent` instead of `authorization dependent by _Assoc`
-   Syntax to specify a [RAP ETag dependent entity](ABENRAP_ETAG_DEP_ENT_GLOSRY.html): `etag dependent` instead of `etag dependent by _Assoc`
-   Syntax to specify a RAP change documents master entity: `changedocuments dependent` instead of `changedocuments dependent by _Assoc`

-   `abbreviation _newName`: Defines an alternative name for an association. The abbreviation `_newName` can have a maximum of 16 characters. Associations are in the namespace of their root entity and can have up to 30 characters. This is under certain circumstances too long to be processed in [ABAP RAP](ABENABAP_RAP_GLOSRY.html). Whenever a shorter name is required, you are prompted to assign an abbreviation for the association with no more than 16 characters.
-   `without response` The optional addition `without response` is for cross-BO associations that have an association target from another BO. With such a cross-BO association, the association target entity is automatically included in the response types as [foreign entity](ABENBDL_FOREIGN.html). In this way, problems with the target entity can become part of the response types during read-by-association or create-by-association operations. `without response` prevents the default behavior of the [foreign entity](ABENRAP_FOREIGN_ENTITY_GLOSRY.html) being included in the response types.
-   `with draft`: [Draft-enables](ABENRAP_DRAFT_HANDLING_GLOSRY.html) an association. A draft-enabled association retrieves active data if it is followed from an [active instance](ABENRAP_ACTIVE_INSTANCE_GLOSRY.html) and draft data if it is followed from a [draft instance](ABENRAP_DRAFT_INSTANCE_GLOSRY.html) (for details about RAP draft handling, see [RAP - `with draft`](ABENBDL_WITH_DRAFT.html)).
-   If a [BO](ABENBUSINESS_OBJECT_GLOSRY.html) is draft-enabled, then all associations should be draft-enabled, so that the associations always lead to the target instance with the same state (draft or active). As soon as you draft-enable a BO by adding `with draft`, all BO-internal associations are automatically draft-enabled. To make this behavior explicit, the behavior prompts you to specify the compositions within a draft BO with `with draft`.

extension using interface demo\_rap\_ext\_using\_interface;\\nforeign entity demo\_rap\_factory\_ACTION;\\nextend behavior for GrandChildInterface\\n\\{\\n association \_Children4Ext \\{ create; with draft; \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXTENSIBLE\_EXT alias ExtNode\\n using DEMO\_RAP\_EXT\_USING\_INT\_EXT\\npersistent table demo\_ggchl\_ex\_ba\\ndraft table demo\_ggrch\_ext\\netag master Timestamp\\n( lock, authorization ) dependent\\n\\n\\{\\n update;\\n delete;\\n field ( readonly )\\n KeyField, KeyFieldchild, Keyfieldgrchld;\\n\\n field ( readonly : update ) Keyfieldggchld;\\n field ( readonly ) Timestamp;\\n\\n association \_parent \\{ with draft; \\}\\n association \_Sibling4 \\{ with draft; \\}\\n ancestor association \_GrandParent2 \\{ with draft; \\}\\n ancestor association \_GreatGrandParent1 \\{ with draft; \\}\\n\\n mapping for demo\_ggchl\_ex\_ba\\n \\{\\n Keyfield = key\_field;\\n Keyfieldchild = key\_field\_child;\\n Keyfieldgrchld = key\_field\_grchld;\\n Keyfieldggchld = key\_field\_ggchld;\\n Datafield = data\_field;\\n Charfield = char\_field;\\n Timestamp = timestamp;\\n \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_managed\_unm.html abenbdl\_extension\_syntax.html abenbdl\_define\_beh\_extend.html