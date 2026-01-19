---
title: "ABENNEWS-816-CDS_BDL"
description: |
  ABENNEWS-816-CDS_BDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-816-CDS_BDL.htm"
abapFile: "ABENNEWS-816-CDS_BDL.html"
keywords: ["if", "class", "ABENNEWS", "816", "CDS", "BDL"]
---

[1\. RAP Default Values Function](#ABAP_MODIFICATION_1@4@)

[2\. ABP Auxiliary Class](#ABAP_MODIFICATION_2@4@)

[3\. RAP Business Events for Child Entities](#ABAP_MODIFICATION_3@4@)

[4\. BDEF Friends](#ABAP_MODIFICATION_4@4@)

[5\. Subentities as Authorization Master](#ABAP_MODIFICATION_5@4@)

[6\. Result Multiplicity in Factory Actions](#ABAP_MODIFICATION_6@4@)

[7. Abstract BDEF, `with hierarchy like entity`](#ABAP_MODIFICATION_7@4@)

[8\. BDEF Alternative Keys for Managed and Unmanaged Behavior Definitions](#ABAP_MODIFICATION_8@4@)

[9\. RAP Key Functions](#ABAP_MODIFICATION_9@4@)

[10\. Event-Driven Side Effects](#ABAP_MODIFICATION_10@4@)

[11\. Non-Standard Operations for Associations](#ABAP_MODIFICATION_11@4@)

[12\. Editable Treeview](#ABAP_MODIFICATION_12@4@)

A [RAP default values function](ABENRAP_BO_DEFAULTING_GLOSRY.html) can be used to default values for fields or input parameters for RAP BO operations on the user interface. The syntax for defining a default values function is [`default function`](ABENBDL_DEFAULT_FUNCTION.html).

The new statement [`auxiliary class`](ABENBDL_AUXILIARY_CLASS.html) can be used to specify one or more [ABP auxiliary classes](ABENABP_AUX_CLASS_GLOSRY.html) that allow the outsourcing of functionality from an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). The primary purpose of an ABP auxiliary class is to allow developers to concurrently implement [RAP behavior](ABENRAP_BEHAVIOR_GLOSRY.html).

[RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html) can now also be defined for [CDS child entities](ABENCHILD_ENTITY_GLOSRY.html). Up to now, a RAP business event could only be defined for the [root node](ABENROOT_NODE_GLOSRY.html) of a [RAP business object](ABENRAP_BO_GLOSRY.html).

The new optional addition [`with friends`](ABENBDL_WITH_FRIENDS.html) can be used to specify one or more [BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html) as [BDEF friends](ABENRAP_BDEF_FRIEND_GLOSRY.html). A BDEF friend has unrestricted access to all components of the original [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). For example, a BDEF friend can call [internal RAP BO operations](ABENRAP_INTERNAL_OPERATION_GLOSRY.html) and read or modify RAP BO entities [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html). BDEF friends can be used for modularization purposes.

You can now define [RAP BO entities](ABENRAP_BO_ENTITY_GLOSRY.html) as [RAP authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html) that are not defined as [root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html).

[RAP factory actions](ABENRAP_FACTORY_ACTION_GLOSRY.html) now allow result multiplicity. This means that the cardinality can have one of the following values:

A factory action can be used to create none, one, or any number of [entity instances](ABENRAP_BO_ENTITY_INST_GLOSRY.html).

The new addition [`with hierarchy like entity`](ABENBDL_BDEF_ABSTRACT_HEADER.html) can now be used in the [RAP behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html) of an [abstract behavior definition](ABENCDS_ABSTRACT_BDEF_GLOSRY.html). It imposes stricter syntax checks to ensure compatibility between the hierarchical BDEF derived type of the abstract BDEF in question and the structured type of the underlying CDS entity.

[BDEF pure keys](ABENRAP_PURE_KEY_GLOSRY.html) and [BDEF secondary keys](ABENRAP_SECONDARY_KEY_GLOSRY.html) are now available. They define the signature of a [RAP key function](ABENRAP_KEY_FUNCTION_GLOSRY.html).

[RAP key functions](ABENRAP_KEY_FUNCTION_GLOSRY.html) are now available. A RAP key function is defined with reference to a [BDEF alternative key](ABENRAP_ALTERNATIVE_KEY_GLOSRY.html) and it returns the entity instances with matching values.

The authorization control type `none` can be specified for `authorization master` to implicitly mark operations in authorization-dependent entities with `authorization:none`.

You can define a business event to trigger a side effect in your RAP business object using the syntax [`for side effects`](ABENBDL_EVENT.html). Whenever a defined event is raised by the application server, the [event-driven side effect](ABENRAP_EVENT_SIDEEF_GLOSRY.html) is triggered and the defined targets are reloaded.

You can now define [nonstandard operations for associations](ABENBDL_ASSOC_NONSTAND_OPS.html). These are [link action, unlink action](ABENBDL_LINK_UNLINK_ACTION.html), and [inverse function](ABENBDL_INVERSE_FUNCT.html).

The editable treeview scenario is now available. You can use the syntax [`instance hierarchy`](ABENBDL_INSTANCE_HIERARCHY.html) to make a treeview editable. The [RAP reorder action](ABENRAP_REORDER_ACTION_GLOSRY.html) can optionally be specified to move a hierarchy node to a dedicated position among its siblings. It is defined using the syntax addition [`[managed] reorder action`](ABENBDL_REORDER_ACTION.html).

-   [`[0..*]`](ABENBDL_ACTION_FACTORY.html)
-   [`[1..*]`](ABENBDL_ACTION_FACTORY.html)

abenabap.html abennews.html abennews-81.html abennews-816.html abennews-816-restful.html