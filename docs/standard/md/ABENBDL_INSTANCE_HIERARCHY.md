---
title: "ABENBDL_INSTANCE_HIERARCHY"
description: |
  ABENBDL_INSTANCE_HIERARCHY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_INSTANCE_HIERARCHY.htm"
abapFile: "ABENBDL_INSTANCE_HIERARCHY.html"
keywords: ["update", "delete", "do", "if", "case", "class", "data", "ABENBDL", "INSTANCE", "HIERARCHY"]
---

``instance hierarchy CDSHierarchyName  \{    [[`copy action`](ABENBDL_COPY_ACTION.html)]\    [[`reorder action`](ABENBDL_REORDER_ACTION.html)]\  \}``

The syntax `instance hierarchy \{ ... \}` specifies parts of the behavior of a editable [treeview](ABENRAP_TREEVIEW_GLOSRY.html) for a managed or unmanaged RAP BO. A treeview visualizes data modeled by a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html) on a SAP Fiori UI. [RAP hierarchy actions](ABENRAP_HIERARCHY_ACTION_GLOSRY.html) can be specified in curly brackets to define how hierarchy nodes are copied and reordered.

As a prerequisite, the RAP BO must include a CDS hierarchy. A step-by-step procedure on how to define the CDS data model for an editable treeview scenario is described in the RAP guide under [Editable Treeviews with Draft Capabilities](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/718e0f84564043afad76cf56e03e1528?version=sap_cross_product_abap).

`CDSHierarchyName` is the name of the [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html) defined for the RAP BO in question.

The following hierarchy actions are available:

The copy action and the reorder action are optional elements. The can be specified in curly brackets to offer the respective functionality. It is also possible to specify the syntax `instance hierarchy \{ \}` without any addition. In this case, it does not have any effect.

If you want your editable treeview scenario to allow moving a node to another parent node, the [link action](ABENRAP_LINK_ACTION_GLOSRY.html) and the [unlink action](ABENRAP_UNLINK_ACTION_GLOSRY.html) must be defined for the hierarchy self-association.

For guidance on how to create a complete end-to-end scenario, see the development guide for the ABAP RESTful Application Programming Model, section [Editable Treeviews with Draft Capabilities](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/718e0f84564043afad76cf56e03e1528?version=sap_cross_product_abap).

The following example shows a managed behavior definition which enables the editable treeview scenario. It defines a copy action and a managed reorder action within curly brackets introduced by the syntax `instance hierarchy`.

**Note** This example does not fully meet the requirements of the [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). It is intentionally kept short and simple and serves demonstration purposes only.

-   [RAP copy action](ABENRAP_COPY_ACTION_GLOSRY.html): A RAP hierarchy action that determines how a hierarchy node can be duplicated in an editable treeview scenario. For more information, see [RAP - `copy action`](ABENBDL_COPY_ACTION.html).
-   [RAP reorder action](ABENRAP_REORDER_ACTION_GLOSRY.html): A RAP hierarchy action that moves a hierarchy node to a dedicated position among its siblings in editable treeview scenario. Can be managed or unmanaged. For more information, see [RAP - `reorder action`](ABENBDL_REORDER_ACTION.html).

-   [Managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   In a [projection BO](ABENRAP_PROJECTION_BO_GLOSRY.html) and in a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), the syntax `instance hierarchy` cannot be specified or reused. The hierarchy actions, on the other hand, must be reused in a projection or interface BDEF.

managed implementation in class bp\_demo\_rap\_inst\_hier\_p unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_RAP\_INST\_HIER\_P\\npersistent table demo\_tab\_hier\_p\\nlock master\\nauthorization master ( instance )\\n\\n\\{\\n create ( authorization : global );\\n update;\\n delete;\\n field ( readonly ) hier\_p;\\n association \_Child \\{ create; \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_INST\_HIER\_C\\npersistent table demo\_tab\_hier\_c\\nlock dependent by \_Parent\\nauthorization dependent by \_Parent\\n\\n\\{\\n update;\\n delete;\\n field ( readonly ) hier\_c, hier\_p,\\n sibling\_order\_number, assoc\_number;\\n association \_Parent;\\n\\n instance hierarchy demo\_rap\_inst\_hier\_hn\\n \\{\\n managed reorder action changeNextSibling;\\n field ( hierarchy-index ) sibling\_order\_number;\\n copy action copyAction;\\n ascending association \_AscendingAssociation;\\n descending association \_DecendingAssociation \\{ with cascading delete; \\}\\n \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html