---
title: "ABENBDL_EXTENSION_SYNTAX"
description: |
  ABENBDL_EXTENSION_SYNTAX - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_EXTENSION_SYNTAX.htm"
abapFile: "ABENBDL_EXTENSION_SYNTAX.html"
keywords: ["update", "delete", "do", "if", "data", "ABENBDL", "EXTENSION", "SYNTAX"]
---

``extension [[`using interface InterfaceBdef`](ABENBDL_USING_INTERFACE.html)][;]\    [[`ExtensionHeader`](ABENBDL_EXTENSION_HEADER.html)]\    [[`foreign entity`](ABENBDL_FOREIGN.html)]\    [[`EntityBehaviorExtension`](ABENBDL_EXTEND_BEH.html)]\    [[`ExtensionEntityBehavior`](ABENBDL_DEFINE_BEH_EXTEND.html)]\    [[`extend own authorization context`](ABENBDL_EXTEND_OWN_AUTH_CONTEXT.html)]\    [[`define authorization context`](ABENBDL_DEF_AUTH_CONTEXT.html)]\  ...``

Extends an existing [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) of type [managed](ABENMANAGED_RAP_BO_GLOSRY.html) or [unmanaged](ABENUNMANAGED_RAP_BO_GLOSRY.html) using a [BDEF extension](ABENRAP_EXTENSION_GLOSRY.html) in the [RAP BDL](ABENCDS_BDL_GLOSRY.html). An existing RAP behavior definition can have one or more BDEF extensions. The number of extensions is not limited.

Naming: BDEF extensions themselves and each single extension element should use a separate [namespace](ABENNAMESPACE_GLOSRY.html) to avoid naming conflicts with the original BDEF and its elements. BDEF extensions created in non-SAP and non-partner development systems should use the [customer namespace](ABENCUSTOMER_NAMESPACE_GLOSRY.html) prefix `Z` or `ZZ`.

A BDEF extension can have the following components:

The following source code shows BDEF extension `DEMO_RAP_EXTENSION_1`. It extends BDEF `DEMO_RAP_EXTENSIBLE_ROOT`. The extension contains the following components:

-   [`using interface`](ABENBDL_USING_INTERFACE.html): It is strongly recommended that a RAP BO is extended via an interface layer. For details, see the topic [RAP - `using interface`, Extension](ABENBDL_USING_INTERFACE.html).
-   [`ExtensionHeader`](ABENBDL_EXTENSION_HEADER.html): Mandatory component of a BDEF extension. Similar to the [RAP behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html) but offers fewer options.
-   The semicolon after the keyword `extension` is either mandatory or not allowed, depending on the components of the `ExtensionHeader`. See examples.
-   [`foreign entity`](ABENBDL_FOREIGN.html): Defines a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) which is not part of the [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) of the current RAP BO as part of the response structures. A foreign entity can be defined before, after, or between the other components. Only entities that belong to the same software component can be added as [RAP foreign entity](ABENRAP_FOREIGN_ENTITY_GLOSRY.html) to a BDEF extension.
-   `[EntityBehaviorExtension](ABENBDL_EXTEND_BEH.html)`: Behavior extension of an existing RAP BO entity.
-   [`ExtensionEntityBehavior`](ABENBDL_DEFINE_BEH_EXTEND.html): Defines the behavior for an extension node. **Caution:**: Node extensibility is currently not supported for unmanaged RAP BOs.
-   [`extend own authorization context`](ABENBDL_EXTEND_OWN_AUTH_CONTEXT.html): If the extended BO defines a [full authorization context](ABENCDS_OWN_AC_GLOSRY.html), this context can be extended. If the extended BO does not define an own authorization context, it must not be added via an extension.
-   [`define authorization context`](ABENBDL_DEF_AUTH_CONTEXT.html): A new [authorization context for disable](ABENCDS_AUTH_CONTEXT_GLOSRY.html) can be defined in a BDEF extension. The syntax is similar to the syntax for RAP BOs with the following difference: The addition `for disable` is not supported. For details, see topic [RAP - `define authorization context`](ABENBDL_DEF_AUTH_CONTEXT.html).

-   BDEF extension header
-   Entity behavior extension
-   Extension entity behavior

extension using interface demo\_rap\_ext\_using\_interface;\\nforeign entity demo\_rap\_factory\_ACTION;\\nextend behavior for GrandChildInterface\\n\\{\\n association \_Children4Ext \\{ create; with draft; \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXTENSIBLE\_EXT alias ExtNode\\n using DEMO\_RAP\_EXT\_USING\_INT\_EXT\\npersistent table demo\_ggchl\_ex\_ba\\ndraft table demo\_ggrch\_ext\\netag master Timestamp\\n( lock, authorization ) dependent\\n\\n\\{\\n update;\\n delete;\\n field ( readonly )\\n KeyField, KeyFieldchild, Keyfieldgrchld;\\n\\n field ( readonly : update ) Keyfieldggchld;\\n field ( readonly ) Timestamp;\\n\\n association \_parent \\{ with draft; \\}\\n association \_Sibling4 \\{ with draft; \\}\\n ancestor association \_GrandParent2 \\{ with draft; \\}\\n ancestor association \_GreatGrandParent1 \\{ with draft; \\}\\n\\n mapping for demo\_ggchl\_ex\_ba\\n \\{\\n Keyfield = key\_field;\\n Keyfieldchild = key\_field\_child;\\n Keyfieldgrchld = key\_field\_grchld;\\n Keyfieldggchld = key\_field\_ggchld;\\n Datafield = data\_field;\\n Charfield = char\_field;\\n Timestamp = timestamp;\\n \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_managed\_unm.html