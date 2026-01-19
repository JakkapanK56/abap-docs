---
title: "ABENBDL_DEFINE_BEH_EXTEND"
description: |
  ABENBDL_DEFINE_BEH_EXTEND - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_DEFINE_BEH_EXTEND.htm"
abapFile: "ABENBDL_DEFINE_BEH_EXTEND.html"
keywords: ["update", "delete", "do", "if", "class", "data", "ABENBDL", "DEFINE", "BEH", "EXTEND"]
---

```... [`` `define behavior for ExtNode [using]` ``](ABENBDL_DEFINE_BEH.html) ...```

As a prerequisite, the extended [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) must explicitly allow BDEF extensions as described in the topic [RAP - Extensibility Enabling for Base BOs](ABENBDL_EXTENSIBILITY_ENABLING_M_U.html).

Defines the behavior for an [extension node](ABENRAP_EXT_ENTITY_BEHAVIOR_GLOSRY.html) in a BDEF extension using the statement `define behavior for`. As a prerequisite, the node must be added to the RAP data model via [RAP data model extensions](ABENRAP_DATA_MODEL_EXT_GLOSRY.html). The BDEF extension can add behavior for this extension node.

The behavior for the extension node is defined in the same way as for RAP BOs, see [`EntityBehaviorDefinition`](ABENBDL_DEFINE_BEH.html), with the following differences:

If an ABAP behavior pool is specified, the rules for extension ABPs apply. See the topic [RAP - `implementation in class unique`, Extension](ABENBDL_IN_CLASS_UNIQUE_EXT.html).

**Limitation:** Node extensibility is currently not supported in unmanaged RAP BOs. Defining new associations in node extensions is currently only partially supported. The following scenarios are supported:

The BDEF extension `DEMO_RAP_EXTENSION_1` extends the RAP behavior definition `DEMO_RAP_EXTENSIBLE_ROOT`. It behavior-enables an extension node using the syntax `define behavior for`. It defines behavior and multiple ancestor associations. Lock, authorization, and ETag master are not specified explicitly, but derived implicitly.

The executable example [Node extension](ABENBDL_ASSOC_EXT_ABEXA.html) explains the example above in detail.

-   A [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html) can be specified with the syntax addition [`using`](ABENBDL_USING_INTERFACE.html) (instead of [`using interface`](ABENBDL_USING_INTERFACE.html), which is used for RAP BO extensions).
-   No explicit pointing to a [RAP authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html).
-   Use `authorization dependent` instead of [`authorization dependent by _Assoc`](ABENBDL_AUTHORIZATION.html).
-   No explicit pointing to a [RAP lock master entity](ABENRAP_LOCK_MA_ENT_GLOSRY.html).
-   Use `lock dependent` instead of [`lock dependent by _Assoc`](ABENBDL_LOCKING.html).
-   No explicit pointing to a [RAP ETag master entity](ABENRAP_ETAG_MA_ENT_GLOSRY.html).
-   Use `etag dependent` instead of [`etag dependent by _Assoc`](ABENBDL_ETAG.html).
-   **Note** As a best practice, SAP recommends that an ETag master field is defined for each individual entity. As a consequence, the syntax `etag dependent` should not be used at all.
-   No explicit pointing to a [RAP change documents master entity](ABENRAP_CHANGE_DOC_MASTER_GLOSRY.html).
-   Use `changedocuments dependent` instead of [`changedocuments dependent by _Assoc`](ABENBDL_CHANGE_DOCUMENTS.html).
-   Declare [ancestor associations](ABENBDL_ANCESTOR_EXT.html), so that the path to the authorization master, lock master, and ETag master entities can be derived.

-   Defining a source-resolved association to an early-numbered target for an extension of a non-draft managed core behavior definition.
-   Defining a source-resolved association to an early-numbered target for an extension of a draft-enabled managed core behavior definition.
-   Defining a source-resolved association to a late-numbered target for an extension of a managed non-draft core behavior definition.

-   A short syntax form is available: `( lock, authorization, etag ) dependent`. Each of the three components `lock`, `authorization`, and `etag` is optional but at least one of them must be specified within the parentheses.
-   Currently, only root entities can be defined as authorization master and lock master entity. An extension node can therefore not be specified as authorization master or as lock master entity.
-   Currently, [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html) can only be defined in [RAP BO root entities](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html). Since extension nodes are usually below the root node, they cannot define any new RAP business events.

extension using interface demo\_rap\_ext\_using\_interface;\\nforeign entity demo\_rap\_factory\_ACTION;\\nextend behavior for GrandChildInterface\\n\\{\\n association \_Children4Ext \\{ create; with draft; \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXTENSIBLE\_EXT alias ExtNode\\n using DEMO\_RAP\_EXT\_USING\_INT\_EXT\\npersistent table demo\_ggchl\_ex\_ba\\ndraft table demo\_ggrch\_ext\\netag master Timestamp\\n( lock, authorization ) dependent\\n\\n\\{\\n update;\\n delete;\\n field ( readonly )\\n KeyField, KeyFieldchild, Keyfieldgrchld;\\n\\n field ( readonly : update ) Keyfieldggchld;\\n field ( readonly ) Timestamp;\\n\\n association \_parent \\{ with draft; \\}\\n association \_Sibling4 \\{ with draft; \\}\\n ancestor association \_GrandParent2 \\{ with draft; \\}\\n ancestor association \_GreatGrandParent1 \\{ with draft; \\}\\n\\n mapping for demo\_ggchl\_ex\_ba\\n \\{\\n Keyfield = key\_field;\\n Keyfieldchild = key\_field\_child;\\n Keyfieldgrchld = key\_field\_grchld;\\n Keyfieldggchld = key\_field\_ggchld;\\n Datafield = data\_field;\\n Charfield = char\_field;\\n Timestamp = timestamp;\\n \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_managed\_unm.html abenbdl\_extension\_syntax.html