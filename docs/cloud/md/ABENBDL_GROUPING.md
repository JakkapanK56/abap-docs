---
title: "ABENBDL_GROUPING"
description: |
  ABENBDL_GROUPING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_GROUPING.htm"
abapFile: "ABENBDL_GROUPING.html"
keywords: ["update", "delete", "do", "if", "class", "ABENBDL", "GROUPING"]
---

``...  group Group1 [`implementation in class Class1 unique`](ABENBDL_IN_CLASS_UNIQUE.html)\  \{    // implementation-relevant content  \}  \  group Group2 [`implementation in class Class2 unique`](ABENBDL_IN_CLASS_UNIQUE.html)\  \{    //implementation-relevant content  \}  \  [group Group3 ...]\  ...``

Grouping divides the implementation-relevant parts of a [business object's](ABENRAP_BO_GLOSRY.html) business logic into multiple groups for behavior implementation. Each group is assigned to a separate [implementation class](ABENBDL_IN_CLASS_UNIQUE.html). This allows the implementation of a business object to be divided technically into multiple parts. Otherwise, the implementation could be done only by one person at a time, since the [CCIMP include](ABENCCIMP_GLOSRY.html) prevents simultaneous work.

If used, the following implementation-relevant parts of a [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) must be included in a group (in both a managed and an unmanaged RAP BO):

Not allowed within a group is:

Optionally inside or outside of a group:

Further rules:

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

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html