---
title: "ABENBDL_TYPE_MAPPING"
description: |
  ABENBDL_TYPE_MAPPING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_TYPE_MAPPING.htm"
abapFile: "ABENBDL_TYPE_MAPPING.html"
keywords: ["update", "delete", "do", "if", "case", "class", "data", "types", "ABENBDL", "TYPE", "MAPPING"]
---

``... mapping for PartnerType           [control ControlType]\                                        \{[corresponding [[`extensible`](ABENBDL_EXTENSIBILITY_ENABLING_M_U.html)][except Comp1,Comp2, ...]]\}\      \{        EntityComp1      = PartnerComp1 [control ControlComp];       [EntityComp2      = PartnerComp2 [control ControlComp];]\       [parameter Param1 = PartnerComp;]\       [... ;]\      \}    | mapping for PartnerType           [control ControlComp]\                                         corresponding [[`extensible`](ABENBDL_EXTENSIBILITY_ENABLING_M_U.html)][except Comp1,Comp2, ...];  ...``

[1. `... control`](#ABAP_ADDITION_1@3@)

[2. `... corresponding [except]`](#ABAP_ADDITION_2@3@)

[3. `... corresponding extensible`](#ABAP_ADDITION_3@3@)

[RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) maps data types of the data model that is defined in CDS for a RAP BO to other data types that do not the match BDEF derived type component pattern. Type mapping is useful for applications whose [business object](ABENBUSINESS_OBJECT_GLOSRY.html) implements existing types or existing functions. The mapping connects a [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) to an existing [DDIC type](ABENDDIC_TYPE_GLOSRY.html) in the behavior definition of a business object.

`PartnerType` is the name of a [DDIC structure](ABENDDIC_STRUCTURE_GLOSRY.html). Within curly brackets, components that correspond to each other but do not have the same name are mapped to each other. One or more type mappings are possible in a behavior definition. If multiple type mappings are defined, each type mapping must define a mapping for a different partner type `PartnerType`. For each partner type, exactly one mapping can be defined.

It is also possible to map the [input parameters](ABENBDL_ACTION_INPUT_PARAM.html) of actions and functions to existing types. Within the curly brackets, the keyword `parameter` must be used. `Param1` is the name of an input parameter of an action or function.

If the names of the fields of the DDIC structure and in the current data model are exactly the same, no mapping is required. Otherwise, it is mandatory (syntax check warning). In particular, in case of a managed RAP BO, the field names of the [RAP persistent table](ABENRAP_PERSISTENT_TABLE_GLOSRY.html) must match the field names of the corresponding [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html). If the names do not match, a type mapping is required. Otherwise, a syntax check warning occurs.

No implementation in an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is required.

The [assignment and conversion rules](ABENCONVERSION_RULES.html) for elementary data objects apply to the mapping of components.

The following example shows a managed BDEF based on the CDS root view entity `DEMO_RAP_MANAGED_ASSOC_ROOT`. A type mapping from the fields of the database table to the fields of the BO entities is defined. This is required since the fields of the CDS view entities have alias names and therefore differ from the field names of the database table.

**Note** This example does not fully meet the requirements of the [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

`control` maps a type of the RAP business object to a [control structure](ABENCONTROL_STRUCTURE_GLOSRY.html). A control structure has the same components as `PartnerType` with the difference that all components have the [built-in ABAP type](ABENBUILTIN_TYPES_CHARACTER.html)\\ `c(1)` or `x(1)`. Its function is to indicate which of the fields are accessed by an operation. The control structure works analogous to the [`%control`](ABAPDERIVED_TYPES_COMP.html) structure in derived types. A mapping can be done simultaneously for a main type `PartnerType` and for a control type `ControlType`.

In a standard use case, the field names of the main and the control types should be identical. If this is not the case, fields can be mapped to each other using the addition `control`.

If a component of the main structure is missing in the control structure, this is tolerated and leads to two independently executable mappings.

The optional addition `corresponding` defines that components with the same name are automatically mapped to each other. The addition `except` can be specified together with `corresponding` to exclude components with identical names from the automatic mapping.

Example: `mapping for PartnerType corresponding;`.

The optional addition `extensible` enables [BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html) for the type mapping in question. That means that [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html) are allowed to add extension fields to that particular type mapping. `extensible` can only be used in combination with `corresponding`, so that components with the same name are automatically mapped to each other.

Example: `mapping for PartnerType corresponding extensible;`.

For details on extensibility enabling, see topic [RAP - Extensibility Enabling for Base BOs](ABENBDL_EXTENSIBILITY_ENABLING_M_U.html).

-   [Managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BOs](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   [Projection BOs](ABENRAP_PROJECTION_BO_GLOSRY.html)
-   [Abstract BDEFs](ABENCDS_ABSTRACT_BDEF_GLOSRY.html)

-   Development guide for the ABAP RESTful Application Programming Model, topic [Using Type and Control Mapping](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0b143178489a4397a0eb5013d4c8b03d?version=sap_cross_product_abap).

managed\\nimplementation in class BP\_DEMO\_RAP\_MANAGED\_ASSOC\_ROOT unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_MANAGED\_ASSOC\_ROOT alias \_Root\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master(global)\\n\\{\\n create;\\n update;\\n delete;\\n association \_child \\{ create; \\}\\n association \_ext \\{ create; \\}\\n field ( readonly:update ) KeyFieldRoot;\\n\\n mapping for demo\_dbtab\_root\\n \\{\\n KeyFieldRoot = key\_field;\\n DataFieldRoot = data\_field;\\n CharFieldRoot = char\_field;\\n DecFieldRoot = dec\_field;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_MANAGED\_ASSOC\_CHILD alias \_Child\\npersistent table demo\_dbtab\_child\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\n\\{\\n update;\\n delete;\\n\\n association \_parent \\{ \\}\\n\\n field ( readonly:update ) KeyField, KeyFieldChild;\\n mapping for demo\_dbtab\_child\\n \\{\\n KeyField = key\_field;\\n KeyFieldChild = key\_field\_child;\\n DataField = data\_field;\\n CharField = char\_field;\\n \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html