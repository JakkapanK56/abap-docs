---
title: "ABENBDL_GROUPING"
description: |
  ABENBDL_GROUPING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_GROUPING.htm"
abapFile: "ABENBDL_GROUPING.html"
keywords: ["update", "delete", "do", "if", "method", "class", "data", "ABENBDL", "GROUPING"]
---

``...  group Group1 [`implementation in class Class1 unique`](ABENBDL_IN_CLASS_UNIQUE.html)\  \{    // implementation-relevant content  \}  \  group Group2 [`implementation in class Class2 unique`](ABENBDL_IN_CLASS_UNIQUE.html)\  \{    //implementation-relevant content  \}  \  [group Group3 ...]\  ...``

Grouping divides the implementation-relevant parts of a [business object's](ABENRAP_BO_GLOSRY.html) business logic into multiple groups for behavior implementation. Each group is assigned to a separate [implementation class](ABENBDL_IN_CLASS_UNIQUE.html). This allows the implementation of a business object to be divided technically into multiple parts. Otherwise, the implementation could be done only by one person at a time, since the [CCIMP include](ABENCCIMP_GLOSRY.html) prevents simultaneous work.

If used, the following implementation-relevant parts of a [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) must be included in a group (in both a managed and an unmanaged RAP BO):

Not allowed within a group is:

Optionally inside or outside of a group:

Further rules:

Implementation groups can be used to distribute [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) to different [ABAP behavior pools](ABENBEHAVIOR_POOL_GLOSRY.html). Another way to distribute a [RAP behavior implementation](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html) to multiple classes is by using [ABP auxiliary classes](ABENABP_AUX_CLASS_GLOSRY.html). The difference is that an auxiliary class cannot implement any [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) and [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html), but it has enhanced access rights to the RAP BO it refers to and it can implement functionality that can be called from the ABAP behavior pool of the respective RAP BO. For further details, see the topic [RAP - `auxiliary class`](ABENBDL_AUXILIARY_CLASS.html).

The following example shows a managed BDEF that consists of a parent and of a child entity. The implementation is split into multiple groups. Each group has its own ABAP behavior pool. Group `one_a` and `one_b` share the same ABAP behavior pool.

**Note** This example is intentionally kept short and simple and serves demonstration purposes only. It does not fully meet the requirements of the [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html) and it does not implement the [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).

The following example shows an unmanaged BDEF that consists of a parent and of a child entity. The implementation is split into multiple groups. Each group has its own ABAP behavior pool.

**Note** This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) are not implemented here.

-   [actions](ABENBDL_ACTION.html)
-   [determinations](ABENBDL_DETERMINATIONS.html)
-   [validations](ABENBDL_VALIDATIONS.html)
-   feature control (for [fields](ABENBDL_FIELD_CHAR.html) and for [RAP BO operations](ABENBDL_ACTIONS_FC.html))
-   In an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html), the following operations must be included in a group:

-   The standard operations `create`, `read`, `update`, and `delete`.
-   [Operations for associations](ABENBDL_ASSOCIATION.html)
-   `Lock` - the [RAP locking mechanism](ABENBDL_LOCKING.html) for the [lock master entity](ABENRAP_LOCK_MA_ENT_GLOSRY.html) must be assigned to a group.

-   [Type mapping](ABENBDL_TYPE_MAPPING.html) (no implementation required)

-   In a [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html), `create`, `update`, and `delete` and operations for associations can be specified either inside or outside of a group.
-   [Field additions](ABENBDL_FIELD_CHAR.html) that do not require an implementation.

-   When grouping is used, an implementation class on entity level is not allowed.
-   Example: this is not allowed
-   `define behavior for MyEntity alias MyAlias implementation in class ClassName unique`
-   An implementation class in the [RAP behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html) that applies to the complete BO with all subnodes is allowed.
-   Example: this is allowed:
-   `managed implementation in class ClassName unique`
-   Different groups can be implemented in the same implementation class.
-   The group names `Group1`, `Group2`, ... must not conflict with actions, determinations, or validations of the same name.
-   For [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html), the group names are irrelevant and therefore, group names can be changed retrospectively.
-   Associations can only be assigned as a whole to a group and therefore, [read-by-association](ABENRAP_RBA_OPERATION_GLOSRY.html) and [create-by-association](ABENRAP_CBA_OPERATION_GLOSRY.html) must be implemented in the same class.

-   [Managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BOs](ABENUNMANAGED_RAP_BO_GLOSRY.html)

-   Development guide for the ABAP RESTful Application Programming Model, section [Using Groups in Large Development Projects](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/590871b5608546d0ba251d8b7af58c0c?version=sap_cross_product_abap).

managed implementation in class bp\_demo\_rap\_managed\_group unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_MANAGED\_GROUP alias RootEntity\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master ( instance )\\n\\{\\n field (readonly:update) keyfieldroot;\\n group one\_a implementation in class cl\_demo\_group1a unique\\n \\{\\n create;\\n update;\\n delete;\\n association \_child \\{ create; \\}\\n \\}\\n\\n group two implementation in class cl\_demo\_group2 unique\\n \\{\\n\\n field ( features : instance ) DataFieldRoot;\\n\\n action Myaction;\\n \\}\\n\\n group one\_b implementation in class cl\_demo\_group1a unique\\n \\{\\n validation MyValidation on save \\{ create; \\}\\n \\}\\n\\n mapping for demo\_dbtab\_root\\n \\{\\n KeyFieldRoot = key\_field;\\n DataFieldRoot = data\_field;\\n CharFieldRoot = char\_field;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_MANAGED\_GROUP\_CHILD alias ChildEntity\\npersistent table demo\_dbtab\_child\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\n\\{\\n update;\\n delete;\\n association \_parent;\\n\\n group three implementation in class cl\_demo\_group3 unique\\n \\{\\n action MyAction1;\\n \\}\\n\\n field ( readonly:update ) KeyField, KeyFieldChild;\\n\\n group four implementation in class cl\_demo\_group4 unique\\n \\{\\n determination MyDetermination on modify \\{ create; \\}\\n \\}\\n\\n mapping for demo\_dbtab\_child\\n \\{\\n KeyFieldChild = key\_field\_child;\\n KeyField = key\_field;\\n DataField = data\_field;\\n \\}\\n\\} unmanaged implementation in class bp\_demo\_rap\_unmanaged\_group unique;\\nstrict(2);\\nwith draft;\\n\\ndefine behavior for DEMO\_RAP\_UNMANAGED\_GROUP\\ndraft table demo\_dbtab\_group\\nlock master\\ntotal etag CharFieldRoot\\nauthorization master ( instance, global )\\n\\n\\{\\n field ( readonly ) KeyFieldRoot, CharFieldRoot;\\n group one\_au implementation in class cl\_demo\_group1au unique\\n \\{\\n read;\\n create;\\n update;\\n delete;\\n association \_child \\{ create; with draft; \\}\\n \\}\\n\\n group two implementation in class cl\_demo\_group2u unique\\n \\{\\n\\n lock;\\n\\n field ( features : instance ) DataFieldRoot;\\n\\n action Myaction;\\n \\}\\n\\n group one\_bu implementation in class cl\_demo\_group1au unique\\n \\{\\n validation MyValidation on save \\{ create; \\}\\n \\}\\n\\n group three\_u implementation in class cl\_demo\_group2u unique\\n \\{\\n\\n draft action Edit;\\n draft action Activate optimized;\\n draft action Discard;\\n draft action Resume;\\n draft determine action Prepare \\{validation MyValidation;\\}\\n \\}\\n\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_UNMANAGED\_GROUP\_CHILD\\ndraft table demo\_draft\_group\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\n\\n\\{\\n update;\\n delete;\\n field ( readonly ) KeyField, KeyFieldChild;\\n association \_parent \\{with draft;\\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html