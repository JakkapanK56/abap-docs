---
title: "ABAPGET_PERMISSIONS"
description: |
  ABAPGET_PERMISSIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPGET_PERMISSIONS.htm"
abapFile: "ABAPGET_PERMISSIONS.html"
keywords: ["select", "update", "delete", "loop", "do", "if", "case", "method", "data", "ABAPGET", "PERMISSIONS"]
---

1\. ``GET PERMISSIONS [[[`FORWARDING`](ABAPEML_PRIVILEGED.html)]\ [`PRIVILEGED`](ABAPEML_PRIVILEGED.html)]\ [[only_clause](ABAPGET_PERMISSIONS_ONLY_CLAUSE.html)]\ ENTITY entity [FROM keys] REQUEST request [RESULT result_tab](ABAPEML_RESULT.html)\ [[`response_param`](ABAPEML_RESPONSE.html)].``

2\. ``GET PERMISSIONS [[[`FORWARDING`](ABAPEML_PRIVILEGED.html)]\ [`PRIVILEGED`](ABAPEML_PRIVILEGED.html)]\ [[only_clause](ABAPGET_PERMISSIONS_ONLY_CLAUSE.html)] OF bdef ENTITY entity1 [FROM keys] REQUEST request [RESULT result_tab](ABAPEML_RESULT.html)\ [ENTITY entity2 [FROM keys] REQUEST request [RESULT result_tab](ABAPEML_RESULT.html)]\ [...]\ [[`response_param`](ABAPEML_RESPONSE.html)].``\\

3\. ``GET PERMISSIONS [[[`FORWARDING`](ABAPEML_PRIVILEGED.html)]\ [`PRIVILEGED`](ABAPEML_PRIVILEGED.html)]\ [[only_clause](ABAPGET_PERMISSIONS_ONLY_CLAUSE.html)] OPERATIONS perm_tab [[`response_param`](ABAPEML_RESPONSE.html)].``

Gets information about the permissions of RAP BOs. Permissions are defined at the operation and field level, for example, operations can be disabled and fields can be set to read-only. Permissions are checked when EML requests are processed by the RAP runtime but they can also be requested in advance by the [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) using a `GET PERMISSIONS` statement. The permissions cover multiple aspects:

For all characteristics, the permission retrieval must be user-implemented in RAP BO provider implementations except for static feature controls. In latter case, the access restriction is directly defined in the BDEF. One example is when a field is marked as `readonly`. Depending on the context, `GET PERMISSIONS` statements in [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html) and [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) trigger the calling of the [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR [INSTANCE] AUTHORIZATION`](ABAPHANDLER_METH_AUTH.html), [`FOR [INSTANCE] FEATURES`](ABAPHANDLER_METH_FEATURES.html), [`FOR GLOBAL AUTHORIZATION`](ABAPHANDLER_METH_GLOBAL_AUTH.html), or [`FOR GLOBAL FEATURES`](ABAPHANDLER_METH_GLOBAL_FEATURES.html).

The handling and consolidation of the permission result as well as general best practices are outlined in the topic [`GET PERMISSIONS`, Guidelines](ABAPGET_PERMISSIONS_RULES.html). One example is when the permission result contains merged information. Among others, static feature controls are merged with global feature controls.

Permissions can be retrieved for the following:

**Note** Permissions cannot be retrieved for [internal](ABENBDL_INTERNAL.html) elements like internal associations and internal actions. For [virtual elements](ABENCDS_VIRTUAL_ELEMENT_GLOSRY.html) in projections, there are only static features available.

The following variants of the `GET PERMISSIONS` statement can be used:

When implementing RAP operations, ensure that you comply with [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). Follow the implementation guidelines in the development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

You can find a selected set of guidelines in [here](ABAPRAP_IMPL_RULES.html).

[`GET PERMISSIONS`, Short Form](ABAPGET_PERMISSIONS_SHORT.html)

[`GET PERMISSIONS`, Long Form](ABAPGET_PERMISSIONS_LONG.html)

[`GET PERMISSIONS`, Dynamic Form](ABAPGET_PERMISSIONS_DYN.html)

-   [Global authorization and instance authorization](ABENBDL_AUTHORIZATION.html)

-   Global authorization: Checks whether the current user is allowed to execute an operation in general, i. e. independent of the data to be processed, for example, a user must not change data.
-   Instance authorization: Authorization checks that can be defined based on a concrete value of an instance's field.

-   [Global feature control and instance feature control](ABENBDL_ACTIONS_FC.html)

-   [Global feature control](ABENRAP_GLO_FEATURE_CONTROL_GLOSRY.html): Feature controls that depend on external factors like specific user settings or the business scope.
-   [Instance feature control](ABENRAP_INS_FEATURE_CONTROL_GLOSRY.html): Checks depending on the state of an entity instance.

-   [Static feature control](ABENBDL_FIELD_CHAR.html): Specifies individual fields of an entity that have certain access restrictions, for example, fields that are marked as `readonly` in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

-   Create, update and delete operations
-   Associations with [create-by-association operations](ABENRAP_CBA_OPERATION_GLOSRY.html)
-   Fields
-   Actions

-   [`GET PERMISSIONS`, Short Form](ABAPGET_PERMISSIONS_SHORT.html)
-   Used to retrieve information on permissions for instances of a single entity.
-   [`GET PERMISSIONS`, Long Form](ABAPGET_PERMISSIONS_LONG.html)
-   Used for collecting multiple queries on multiple entities of a RAP BO.
-   [`GET PERMISSIONS OPERATIONS`, Dynamic Form](ABAPGET_PERMISSIONS_DYN.html)
-   Collects permission queries of multiple RAP BO entities in one `GET PERMISSIONS` statement.

-   ABAP EML statements should not be used in loops. Using them can have a performance impact because it can result in multiple single database accesses. There should be only one ABAP EML statement to read the necessary data, and then the data should be modified with an ABAP EML modify request.
-   CDS projection views of the type [transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html) or [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html) can define a `WHERE` clause to filter the result set. By default, this `WHERE` clause in the projection layer is ignored when a BDEF is accessed with the `GET PERMISSIONS` statement. This means that it is possible to read and modify entity instances that are not part of the projection BDEF's or interface BDEF's result set. This behavior may pose a security risk.
-   To mitigate this risk, a dedicated BDEF syntax is available to enforce evaluation of the `WHERE` clause defined in the projection layer: [`with managed instance filter`](ABENBDL_MNGD_INSTANCE_CHECK_PROJ.html). For further details, see [RAP - `with managed instance filter`](ABENBDL_MNGD_INSTANCE_CHECK_PROJ.html).

-   The example [ABAP EML - `GET PERMISSIONS`, Variants](ABENGET_PERM_FORMS_ABEXA.html) demonstrates the different variants with a simple managed RAP BO.
-   The example [ABAP EML - `GET PERMISSIONS`, `only_clause`](ABENGET_PERM_ONLY_ABEXA.html) demonstrates the different variants of the `only_clause` with a simple managed RAP BO.
-   The example [ABAP EML - RAP Calculator (Unmanaged)](ABENEML_CALCULATOR_ABEXA.html) uses a `GET PERMISSIONS` statement with a simple unmanaged RAP BO. In this case, permissions are requested if a calculation based on entries provided is possible or not. For example, it is disallowed if a division by 0 should be executed.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html