---
title: "ABENCDS_DEFINE_VIEW_AS_INTERFACE"
description: |
  ABENCDS_DEFINE_VIEW_AS_INTERFACE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_DEFINE_VIEW_AS_INTERFACE.htm"
abapFile: "ABENCDS_DEFINE_VIEW_AS_INTERFACE.html"
keywords: ["do", "if", "case", "data", "types", "ABENCDS", "DEFINE", "VIEW", "INTERFACE"]
---

``[[`@entity_annot1`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  [[`@entity_annot2`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  ...  [[`@proj_view_annot1`](ABENCDS_PROJ_VIEW_ANNOTATIONS.html)]\  [[`@proj_view_annot2`](ABENCDS_PROJ_VIEW_ANNOTATIONS.html)]\  ...  DEFINE [ROOT] VIEW ENTITY projection_view    [`PROVIDER CONTRACT TRANSACTIONAL_INTERFACE`](ABENCDS_PV_PROVIDER_CONTRACT.html)\      AS PROJECTION ON cds_entity [AS alias_name]\     [[`aspect binding`](ABENCDS_BIND_ASPECT.html)]\        \{ [`projection_list`](ABENCDS_ELEMENT_LIST_INTERFACE.html) \}     [[`WHERE`](ABENCDS_INTERFACE_COND_EXPR.html) cds_cond]``

[1. `... ROOT`](#ABAP_ADDITION_1@3@)

[2. `... AS alias_name`](#ABAP_ADDITION_2@3@)

Defines a [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html) with the name `projection_view` in [CDS DDL](ABENCDS_DDL_GLOSRY.html).

The projected entity `cds_entity` can be either a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). The projected entity must be part of a RAP BO: It must either be a root entity or contain a to-parent association. No other CDS entities or data sources are allowed as projected entity. Path expressions are not allowed for specifying the projected entity. One CDS entity can be used as basis for multiple CDS projection views.

The name of the CDS projection view `projection_view` is defined after the `DEFINE VIEW ENTITY` statement. The usual rules for ABAP Dictionary [views](ABENDDIC_VIEWS.html) apply to this name and it is not case-sensitive (it is transformed internally into uppercase letters). It can have a maximum of 30 characters and is in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP. The name of the DDL source and of the CDS entity must be identical.

A [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html) that uses the addition [`PROVIDER CONTRACT TRANSACTIONAL_INTERFACE`](ABENCDS_PV_PROVIDER_CONTRACT.html) must be part of a [RAP business object](ABENRAP_BO_GLOSRY.html). That means that the view must either be a [root entity](ABENROOT_ENTITY_GLOSRY.html) itself, or it must be part of a [composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) and reach a root entity via a [CDS composition](ABENCDS_COMPOSITION_GLOSRY.html).

The following CDS transactional interface is based on the CDS view entity `DEMO_CDS_PURCH_DOC_M`. The to-child association is redirected to the CDS transactional interface of the child entity.

Both parent and child entity should be released for system-internal use under the C1 contract.

The following CDS transactional interface represents the child entity:

The keyword `ROOT` specifies that the transactional interface is the [root entity](ABENROOT_ENTITY_GLOSRY.html) of a [composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html). The transactional interface must always reflect the position of the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html) in the composition tree: if the projected entity is a [root entity](ABENROOT_ENTITY_GLOSRY.html), the transactional interface must be a root as well. If the projected entity is not a root, the projection view cannot be a root. In this case, the projected entity must contain a [to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html).

**Note** A transactional interface must always either be a root entity itself, or it must be part of a composition tree and reach a root entity via an association.

Defines the name `alias_name` as [alias name](ABENALIAS_GLOSRY.html) of the projected entity. The alias name can have a maximum of 30 characters. If no name is defined explicitly using `AS`, then the original name of the data source is used.

-   Header annotations specified before the statement `DEFINE VIEW ENTITY` are not inherited from the projected entity. It is possible, but not mandatory, to specify [entity annotations](ABENCDS_F1_ENTITY_ANNOTATIONS.html)\\ `@entity_annot` or [projection view annotations](ABENCDS_PROJ_VIEW_ANNOTATIONS.html)\\ `@proj_view_annot` as header annotations.
-   The [provider contract](ABENCDS_PV_PROVIDER_CONTRACT.html) must be set to `TRANSACTIONAL_INTERFACE`.
-   The projection list [`projection_list`](ABENCDS_ELEMENT_LIST_INTERFACE.html) defines the elements exposed as part of the interface.
-   Optionally, the number of rows included in the result set can be further restricted by the addition [`WHERE`](ABENCDS_INTERFACE_COND_EXPR.html).

-   A transactional interface can be released for [Contract C0](ABENC0_CONTRACT_GLOSRY.html).
-   A transactional interface should be released for [Contract C1](ABENC1_CONTRACT_GLOSRY.html).
-   A transactional interface should not be released for [Contract C2](ABENC2_CONTRACT_GLOSRY.html).

-   A transactional interface cannot define new associations.
-   No further clauses are possible. `WHERE`, `UNION`, and `GROUP BY` are not supported.

-   [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) defined for a CDS transactional interface must be defined symmetrically to the [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) for the projected entity. The behavior of the access control of the projected entity must be inherited.
-   For an overview of all possible data sources of all available CDS entities, see [Data Source Matrix](ABENCDS_DATA_SOURCE_MATRIX.html).

@EndUserText.label: 'CDS transactional interface'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine root view entity DEMO\_CDS\_TRANS\_INTERFACE\_ROOT\\n provider contract transactional\_interface\\n as projection on DEMO\_CDS\_PURCH\_DOC\_M\\n\\{\\n key PurchaseDocument,\\n Description,\\n Status,\\n Priority,\\n /\* Associations \*/\\n \_PurchaseDocumentItem: \\n redirected to DEMO\_CDS\_TRANS\_INTERFACE\_CHILD\\n\\}\\n @EndUserText.label: 'CDS transactional interface'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_TRANS\_INTERFACE\_CHILD\\n provider contract transactional\_interface\\n as projection on DEMO\_CDS\_PURCH\_DOC\_I\_M\\n\\{\\n key PurchaseDocumentItem,\\n key PurchaseDocument,\\n Description,\\n Vendor,\\n /\* Associations \*/\\n \_PurchaseDocument : redirected to DEMO\_CDS\_TRANS\_INTERFACE\_ROOT\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_pv\_transactional\_interface.html