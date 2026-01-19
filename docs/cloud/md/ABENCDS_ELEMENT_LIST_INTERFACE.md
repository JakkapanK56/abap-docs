---
title: "ABENCDS_ELEMENT_LIST_INTERFACE"
description: |
  ABENCDS_ELEMENT_LIST_INTERFACE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ELEMENT_LIST_INTERFACE.htm"
abapFile: "ABENCDS_ELEMENT_LIST_INTERFACE.html"
keywords: ["do", "if", "data", "ABENCDS", "ELEMENT", "LIST", "INTERFACE"]
---

``... [[`@element_annot1`](ABENCDS_ELEMENT_ANNOTATIONS_V2.html)]\      [[`@element_annot2`](ABENCDS_ELEMENT_ANNOTATIONS_V2.html)]\      ...        [KEY]   \{proj_element        [AS alias]\}\              |\ \{[`proj_assoc`](ABENCDS_PROJ_VIEW_EXPOSE_ASSOC.html)          [AS alias]\}\              |\ \{[`cast_expr`](ABENCDS_CAST_EXPRESSION_V2.html)            AS alias\}``

[1. `... KEY`](#ABAP_ADDITION_1@3@)

[2. `... AS alias`](#ABAP_ADDITION_2@3@)

Defines the elements of a [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html). The elements are specified in a comma-separated list in curly brackets \\{ \\}.

The feature set of a transactional interface is restricted to projecting elements from the underlying projected entity. No new associations, virtual elements, or fields can be defined.

The following elements are supported in the projection list of a transactional interface:

In a transactional interface, the following elements are not supported in the projection list: expressions, virtual elements, [CDS localized fields](ABENCDS_LOCALIZED_FIELD_GLOSRY.html), and parameters.

The following CDS transactional interface is based on the CDS view entity `DEMO_CDS_PURCH_DOC_M`. The to-child association is redirected to the CDS transactional interface of the child entity.

Both parent and child entity should be released for system-internal use under the C1 contract.

The following CDS transactional interface represents the child entity:

The keyword `KEY` is used to define the current element as a key element of the transactional interface. A transactional interface must define exactly the same key elements in the same order as key elements as the underlying projected entity.

**Caution** The key elements of a CDS entity do not define unique lines in its result with regard to the key. An application or framework accessing a CDS entity must expect duplicate entries for the key fields in the result set. If the lines of a result set should be unique in respect to a set of key elements, it is the task of the application or framework that provides the CDS entity to define them appropriately and to document the view accordingly.

Defines an alternative element name for the projected element. The alternative element name replaces the actual name of the element from the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html). The view field is created under the alternative element name in the CDS transactional interface. Accordingly, the alternative element name must comply with the general syntax rules for [names](ABENCDS_GENERAL_SYNTAX_RULES.html).

-   Element annotations can be specified. The rules for [propagation of element annotations in CDS projection views](ABENCDS_ELEMENT_ANNOTATIONS_PV.html) apply.
-   `proj_element` exposes an element from the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html). `AS` can be used to define an alternative element name `alias`.
-   **Note** In transactional interfaces, an element from the projected entity can be exposed multiple times with different alias names.
-   [`proj_assoc`](ABENCDS_PROJ_VIEW_EXPOSE_ASSOC.html) exposes a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html), a [to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html), or a [CDS to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) from the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html). Exposed associations can be redirected to a new target when the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is also projected. Read topic [CDS DDL - `CDS Projection View, proj_assoc`](ABENCDS_PROJ_VIEW_EXPOSE_ASSOC.html) for further details.
-   **Note** Adding additional filter conditions to exposed associations is not supported in CDS transactional interfaces.
-   All elements included in the `ON` clause of an exposed [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) must also be included in the projection list of the CDS projection view.
-   Cast expressions [`cast_expr`](ABENCDS_CAST_EXPRESSION_V2.html) are available in a reduced way:

-   The target data type can be specified as [CDS user-defined type](ABENCDS_USER_DEFINED_TYPE_GLOSRY.html) or as [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html). Specifying a built-in ABAP Dictionary data type is not possible.
-   The addition `PRESERVING TYPE` is mandatory and must be used.
-   That means that type conversions are not supported in CDS projection views and cast expressions can only be used to derive semantic information.

@EndUserText.label: 'CDS transactional interface'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine root view entity DEMO\_CDS\_TRANS\_INTERFACE\_ROOT\\n provider contract transactional\_interface\\n as projection on DEMO\_CDS\_PURCH\_DOC\_M\\n\\{\\n key PurchaseDocument,\\n Description,\\n Status,\\n Priority,\\n /\* Associations \*/\\n \_PurchaseDocumentItem: \\n redirected to DEMO\_CDS\_TRANS\_INTERFACE\_CHILD\\n\\}\\n @EndUserText.label: 'CDS transactional interface'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_TRANS\_INTERFACE\_CHILD\\n provider contract transactional\_interface\\n as projection on DEMO\_CDS\_PURCH\_DOC\_I\_M\\n\\{\\n key PurchaseDocumentItem,\\n key PurchaseDocument,\\n Description,\\n Vendor,\\n /\* Associations \*/\\n \_PurchaseDocument : redirected to DEMO\_CDS\_TRANS\_INTERFACE\_ROOT\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_pv\_transactional\_interface.html abencds\_define\_view\_as\_interface.html