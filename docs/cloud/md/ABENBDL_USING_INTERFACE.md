---
title: "General Specification on Header Level"
description: |
  Specification for Extension Nodes on Entity Level -   In general, the RAP BO interface is specified in the BDEF extension header(ABENRAP_BDEF_EXT_HEADER_GLOSRY.html), directly after the keyword `extension`, using the syntax addition `using interface`. All entities that are part of the RAP BO inter
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_USING_INTERFACE.htm"
abapFile: "ABENBDL_USING_INTERFACE.html"
keywords: ["select", "update", "delete", "do", "if", "case", "class", "data", "types", "ABENBDL", "USING", "INTERFACE"]
---

`... using interface InterfaceBdef;`

`... using CDSInterface;`

[1. `... using interface InterfaceBdef;`](#ABAP_VARIANT_1@1@)

[2. `... using CDSInterface;`](#ABAP_VARIANT_2@1@)

[RAP business objects](ABENRAP_BO_GLOSRY.html) can be extended via [RAP BO interfaces](ABENRAP_BO_INTERFACE_GLOSRY.html) using the optional addition `using interface`. A RAP BO interface is a layer on top of the base BO that is an interface for stable consumption and is usually [released as API](ABENRELEASED_API_GLOSRY.html). In a [BDEF extension](ABENRAP_EXTENSION_GLOSRY.html) with the addition `using interface`, only entities that are part of the RAP BO interface can be extended.

Extensions can be created directly for managed or unmanaged RAP BOs. However, SAP recommends that you always extend a RAP BO via an interface and to always use the addition `using interface`. In case of [C0](ABENC0_CONTRACT_GLOSRY.html)\\ [developer extensibility](ABENDEV_EXTENSIBILITY_GLOSRY.html), an interface is mandatory. In some other scenarios, `using interface` is mandatory and this is enforced by a syntax check error.

The following example shows two BDEF extensions:

The base BDEF is the managed BDEF `DEMO_RAP_EXTENSIBLE_ROOT`.

BDEF extension `DEMO_RAP_EXT_WO_INT` without an interface:

BDEF extension `DEMO_RAP_EXT_USING_INTERF` using an interface.

As a prerequisite for `using interface`, the [RAP interface behavior definition](ABENCDS_INTERFACE_BDEF_GLOSRY.html)\\ `InterfaceBdef` must explicitly allow extensions. It must be declared as `extensible` in the [behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html) as described in topic [RAP - Behavior Definition Header, Interface BDEF](ABENBDL_BO_INTERFACE_HEADER.html).

Using the optional addition `using interface`, a [RAP business object](ABENRAP_BO_GLOSRY.html) is extended via a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html). A RAP BO interface is a layer on top of the base BO that is an interface for stable consumption and is usually [released as API](ABENRELEASED_API_GLOSRY.html). In a [BDEF extension](ABENRAP_EXTENSION_GLOSRY.html) with the addition `using interface`, only entities that are part of the RAP BO interface can be extended.

An extension `using interface` produces simultaneous extensions of the base RAP BO and of the interface. For example, an extension action is part of the [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) of the base RAP BO and of the interface RAP BO.

The extension BDEF must reference [RAP BO entities](ABENRAP_BO_ENTITY_GLOSRY.html), [RAP BO fields](ABENRAP_BO_FIELD_GLOSRY.html), and other elements by their interface names, not by their base names (which may be different). The only exceptions are elements which are not reflected in the interface, such as determinations and validations.

In its implementation in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html), the extension may use any released interface existing for the base RAP BO to perform [ABAP EML](ABENABAP_EML_GLOSRY.html) operations. It is an EML consumer like any other and there might be multiple released interfaces for a RAP BO. But it is most common that it uses the very same interface which it extends.

An extension `using interface` is created for a BDEF of type `managed` or `unmanaged`. It is not created directly for the interface. In [ABAP development tools for Eclipse](ABENADT_GLOSRY.html), you select the base BDEF as basis for an extension.

Base BDEF: RAP BO with four nodes.

Interface BDEF: renames the RAP BO entities.

Extension using interface: Extends the root node, which it refers to by its interface name.

The executable example [RAP - RAP BO Extension Using Interface](ABENBDL_USING_INTERFACE_ABEXA.html) explains the example above in detail.

In a node extensibility scenario, an interface for the extension node can be specified using the keyword `using` in the [RAP extension entity behavior](ABENRAP_EXT_ENTITY_BEHAVIOR_GLOSRY.html) on entity level. `CDSInterface` is the name of a [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html) that projects the extension node.

**Caution** Node extensibility is currently not supported for unmanaged RAP BOs.

The following BDEF extension `DEMO_RAP_EXTENSION_1` adds an extension node to an existing RAP business object. It uses the RAP BO interface `DEMO_RAP_EXT_USING_INTERFACE` and the [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html)\\ `DEMO_RAP_EXT_USING_INT_EXT`.

General Specification on Header Level

Specification for Extension Nodes on Entity Level

-   In general, the RAP BO interface is specified in the [BDEF extension header](ABENRAP_BDEF_EXT_HEADER_GLOSRY.html), directly after the keyword `extension`, using the syntax addition `using interface`. All entities that are part of the RAP BO interface can be extended then. Further details are provided under Variant 1.
-   In a node extensibility scenario, the extension node is not part of the RAP BO interface. An interface for the extension node can be specified using the keyword `using` in the [RAP extension entity behavior](ABENRAP_EXT_ENTITY_BEHAVIOR_GLOSRY.html) on entity level. Further details are provided under Variant 2.

-   Topic [RAP - Interface Behavior Definition](ABENBDL_RAP_BO_INTERFACE.html).
-   Development guide for the ABAP RESTful Application Programming Model, topic [Business Object Interface](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/7caa146ddc4b4f24a58efd33f0f789b4?version=sap_cross_product_abap).
-   Topic [Contract Checks for Released APIs](ABENRESTRICTED_APIS_ATC_CHECKS.html)

-   The first one directly extends the base BDEF, without interface.
-   The second one extends the base BDEF via a BDEF interface.

extension;\\n\\nextend behavior for Root\\n\\{\\nevent myEvent;\\n\\} extension using interface DEMO\_RAP\_EXT\_USING\_INTERFACE\\n implementation in class bp\_demo\_rap\_ext\_using\_interf unique;\\n\\nextend behavior for RootInterface \\{\\n\\naction (authorization : instance) SetValue\_ext;\\n\\n\\}\\n\\nextend behavior for ChildInterface \\{\\n\\}\\n\\nextend behavior for GrandChildInterface \\{\\n\\}\\n\\nextend behavior for GreatGrandChildInterface \\{\\n\\} managed implementation in class bp\_demo\_rap\_extensible\_root unique;\\nstrict(2);\\nextensible\\n\\{ with determinations on modify;\\n with determinations on save;\\n with validations on save; \\}\\n\\nwith draft;\\ndefine behavior for DEMO\_RAP\_EXTENSIBLE\_ROOT alias Root\\npersistent table demo\_dbtab\_root\\ndraft table demo\_dbtab\_exdrf\\nlock master\\ntotal etag Timestamp\\nauthorization master ( instance, global )\\nextensible\\n\\netag master LastChangedAt\\n\\{\\n create;\\n update;\\n delete;\\n association \_child \\{ create; with draft; \\}\\n\\n draft action ( authorization : none ) Edit;\\n draft action Activate optimized;\\n draft action Discard;\\n draft action Resume;\\n draft determine action Prepare extensible;\\n\\n field(readonly:update) KeyField;\\n field(readonly) Timestamp;\\n\\n mapping for demo\_dbtab\_root corresponding extensible\\n \\{\\n KeyField = key\_field;\\n DataField = data\_field;\\n CharField = char\_field;\\n CharField2 = char\_field\_2;\\n DecField = dec\_field;\\n Timestamp = crea\_date\_time;\\n LastChangedAt = lchg\_date\_time;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXTENSIBLE\_CHILD alias Child\\npersistent table demo\_dbtab\_child\\ndraft table demo\_dbtab\_exchl\\n(lock, etag, authorization) dependent by \_parent\\nextensible\\n\\{\\n update;\\n delete;\\n field ( readonly ) KeyField;\\n association \_parent \\{ with draft; \\}\\n association \_grchld \\{ create; with draft; \\}\\n\\n field(readonly:update) KeyFieldChild;\\n\\n mapping for demo\_dbtab\_child corresponding extensible\\n \\{\\n KeyField = key\_field;\\n KeyFieldChild = key\_field\_child;\\n DataField = data\_field;\\n CharField = char\_field;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXTENSIBLE\_GRCHLD alias GrandChild\\npersistent table demo\_dbtab\_grchl\\ndraft table demo\_dbtab\_grch\\n(lock,authorization,etag) dependent by \_GrandParent\\nextensible\\n\\{\\n update;\\n delete;\\n field ( readonly ) KeyField, KeyFieldChild;\\n association \_GrandParent \\{ with draft; \\}\\n association \_parent \\{ with draft; \\}\\n association \_child \\{ create; with draft; \\}\\n\\n field(readonly:update) KeyFieldGrchld;\\n\\n mapping for demo\_dbtab\_grchl corresponding extensible\\n \\{\\n KeyField = key\_field;\\n KeyFieldChild = key\_field\_child;\\n KeyFieldGrchld = key\_field\_grchld;\\n DataField = data\_field;\\n CharField = char\_field;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXTENSIBLE\_GGCHLD alias GreatGrandChild\\npersistent table demo\_dbtab\_ggchl\\ndraft table demo\_dbtab\_ggrch\\n(lock, authorization, etag) dependent by \_GreatGrandParent\\nextensible\\n\\{\\n update;\\n delete;\\n field ( readonly ) KeyField, KeyFieldChild, KeyFieldGrChld;\\n association \_GrandParent \\{ with draft; \\}\\n association \_parent \\{ with draft; \\}\\n association \_GreatGrandParent \\{ with draft; \\}\\n\\n field(readonly:update) KeyFieldGgchld;\\n\\n mapping for demo\_dbtab\_ggchl corresponding extensible\\n \\{\\n KeyField = key\_field;\\n KeyFieldChild = key\_field\_child;\\n KeyFieldGrchld = key\_field\_grchld;\\n KeyFieldGgchld = key\_field\_ggchld;\\n DataField = data\_field;\\n CharField = char\_field;\\n \\}\\n\\} interface;\\nuse draft;\\nextensible;\\nuse side effects;\\n\\ndefine behavior for DEMO\_RAP\_EXT\_USING\_INTERFACE alias RootInterface\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n use action Edit;\\n use action Activate;\\n use action Discard;\\n use action Resume;\\n use action Prepare;\\n\\n use association \_child \\{ create; with draft; \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXT\_USING\_INT\_CHILD alias ChildInterface\\n\\{\\n use update;\\n use delete;\\n\\n use association \_parent \\{ with draft; \\}\\n use association \_grchld \\{ create; with draft; \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXT\_USING\_INT\_GRCHLD alias GrandChildInterface\\n\\{\\n use update;\\n use delete;\\n\\n use association \_GrandParent \\{ with draft; \\}\\n use association \_parent \\{ with draft; \\}\\n use association \_child \\{ create; with draft; \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXT\_USING\_INT\_GGCHLD alias GreatGrandChildInterface\\n\\{\\n use update;\\n use delete;\\n\\n use association \_GrandParent \\{ with draft; \\}\\n use association \_parent \\{ with draft; \\}\\n use association \_GreatGrandParent \\{ with draft; \\}\\n\\} extension using interface DEMO\_RAP\_EXT\_USING\_INTERFACE\\n implementation in class bp\_demo\_rap\_ext\_using\_interf unique;\\n\\nextend behavior for RootInterface \\{\\n\\naction (authorization : instance) SetValue\_ext;\\n\\n\\}\\n\\nextend behavior for ChildInterface \\{\\n\\}\\n\\nextend behavior for GrandChildInterface \\{\\n\\}\\n\\nextend behavior for GreatGrandChildInterface \\{\\n\\} extension using interface demo\_rap\_ext\_using\_interface;\\nforeign entity demo\_rap\_factory\_ACTION;\\nextend behavior for GrandChildInterface\\n\\{\\n association \_Children4Ext \\{ create; with draft; \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXTENSIBLE\_EXT alias ExtNode\\n using DEMO\_RAP\_EXT\_USING\_INT\_EXT\\npersistent table demo\_ggchl\_ex\_ba\\ndraft table demo\_ggrch\_ext\\netag master Timestamp\\n( lock, authorization ) dependent\\n\\n\\{\\n update;\\n delete;\\n field ( readonly )\\n KeyField, KeyFieldchild, Keyfieldgrchld;\\n\\n field ( readonly : update ) Keyfieldggchld;\\n field ( readonly ) Timestamp;\\n\\n association \_parent \\{ with draft; \\}\\n association \_Sibling4 \\{ with draft; \\}\\n ancestor association \_GrandParent2 \\{ with draft; \\}\\n ancestor association \_GreatGrandParent1 \\{ with draft; \\}\\n\\n mapping for demo\_ggchl\_ex\_ba\\n \\{\\n Keyfield = key\_field;\\n Keyfieldchild = key\_field\_child;\\n Keyfieldgrchld = key\_field\_grchld;\\n Keyfieldggchld = key\_field\_ggchld;\\n Datafield = data\_field;\\n Charfield = char\_field;\\n Timestamp = timestamp;\\n \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_managed\_unm.html abenbdl\_extension\_syntax.html