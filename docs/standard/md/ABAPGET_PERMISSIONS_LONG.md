---
title: "ABAPGET_PERMISSIONS_LONG"
description: |
  ABAPGET_PERMISSIONS_LONG - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_PERMISSIONS_LONG.htm"
abapFile: "ABAPGET_PERMISSIONS_LONG.html"
keywords: ["insert", "do", "if", "data", "internal-table", "ABAPGET", "PERMISSIONS", "LONG"]
---

```GET PERMISSIONS [[[`` `FORWARDING` ``](ABAPEML_PRIVILEGED.html)]\ [`` `PRIVILEGED` ``](ABAPEML_PRIVILEGED.html)]\ [[`only_clause`](ABAPGET_PERMISSIONS_ONLY_CLAUSE.html)] OF bdef       ENTITY entity1 [FROM keys] REQUEST request RESULT result      [ENTITY entity2 [FROM keys] REQUEST request RESULT result]\      [...]\      [[`` `response_param` ``](ABAPEML_RESPONSE.html)].```

[1. `... [FORWARDING] PRIVILEGED`](#ABAP_ADDITION_1@3@)

[2. `... only_clause`](#ABAP_ADDITION_2@3@)

[3. `... FROM keys`](#ABAP_ADDITION_3@3@)

[4. `... response_param.`](#ABAP_ADDITION_4@3@)

The long form of the `GET PERMISSIONS` statement is used for collecting multiple queries on multiple entities of a RAP BO. However, it can also be used for querying from a single entity.

**Syntax Details**

The addition [`PRIVILEGED`](ABAPEML_PRIVILEGED.html) is used for a privileged access to a RAP BO, i. e. the RAP BO runtime does not perform certain authorization checks. As a prerequisite, `privileged` must be specified in the BDEF.

The addition [`only_clause`](ABAPGET_PERMISSIONS_ONLY_CLAUSE.html) allows the control characteristics to be specified that are to be included in the result.

The addition `FROM keys` specifies the keys of the instances for which permissions are to be requested. `keys` is an internal table and must be typed with the BDEF derived type [`TYPE TABLE FOR PERMISSIONS KEY`](ABAPTYPE_TABLE_FOR.html).

The addition must not be specified if any of the [`ONLY GLOBAL ...`](ABAPGET_PERMISSIONS_ONLY_CLAUSE.html) variants are used. For all other `ONLY` clauses, `FROM keys` is required.

The addition [`response_param`](ABAPEML_RESPONSE.html) represents the response parameters that can be specified.

The following source code section taken from `CL_DEMO_RAP_EML_GET_PERMISSION` demonstrates the long form of the `GET PERMISSIONS` statement in the context of checking access restrictions for certain data fields.

-   The example [ABAP EML - `GET PERMISSIONS`, Variants](ABENGET_PERM_FORMS_ABEXA.html) demonstrates the long form of the `GET PERMISSIONS` statement with a simple managed RAP BO. It also includes the short and dynamic form.

GET PERMISSIONS ONLY INSTANCE FEATURES OF demo\_managed\_root\_3 \\n ENTITY demo\_managed\_root\_3 \\n FROM VALUE #( ( %key-key\_field = 3 ) \\n ( %key-key\_field = 4 ) ) \\n REQUEST VALUE #( \\n %field-data\_field1\_root = if\_abap\_behv=>mk-on \\n %field-data\_field2\_root = if\_abap\_behv=>mk-on ) \\n RESULT FINAL(result2) \\n ENTITY child \\n FROM VALUE #( ( %key-key\_field = 3 ) \\n ( %key-key\_field = 4 ) ) \\n REQUEST VALUE #( \\n %field-data\_field1\_child = if\_abap\_behv=>mk-on \\n %field-data\_field2\_child = if\_abap\_behv=>mk-on ) \\n RESULT FINAL(result3) \\n FAILED FINAL(failed2) \\n REPORTED FINAL(reported2). **Syntax Part** **Details**\\ `bdef` Specifies the name of the [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html) following the keyword `OF`. `ENTITY entity1`, `ENTITY entity2`, ... \\ `entity1`, `entity2`, ..., specify the names of the entities that are part of the [composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) of `bdef`. They follow the keyword `ENTITY`. \\
\\
A list of queries follows `OF bdef`. Each query (`ENTITY entity1 ... RESULT result_tab`) of the list has the same syntax as the [short form](ABAPGET_PERMISSIONS_SHORT.html). At least one query must be specified. The root entity itself can also be inserted in the position of `entity1`, for example. `entity1`, and so on, should be the entity alias names if provided in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). Using the full entity name causes a warning. If the root entity is used in the list of operations, its alias name, if defined in the BDEF, should be used as well. `REQUEST request` `request` is a structure following the keyword `REQUEST` containing request components to specify which operations, fields or actions are to be considered for the information retrieval. The request components can be either marked as enabled or disabled. The structure must be typed with [`TYPE STRUCTURE FOR PERMISSIONS REQUEST`](ABAPTYPE_STRUCTURE_FOR.html). \\
\\
To enable or disable the request components, the constants provided in the interface `IF_ABAP_BEHV` can be used: One example is `if_abap_behv=>mk-on` for enabling (indicated by `01`) and `if_abap_behv=>mk-off` for disabling (indicated by `00`). `RESULT result` `result` is a structure of type [`TYPE STRUCTURE FOR PERMISSIONS RESULT`](ABAPTYPE_STRUCTURE_FOR.html) following the keyword `RESULT`. It contains two components that contain the result of the permission information request: \\
\\
`instances`: Internal table containing instance keys and components for those elements in the [entity behavior body](ABENBDL_BODY.html) of the BDEF for which permissions are defined (excluding static elements). \\
\\
`global`: Structure containing components for all elements in the entity behavior body of the BDEF for which permissions are defined. \\
\\
**Note:** See the [Guidelines](ABAPGET_PERMISSIONS_RULES.html) for information on how the components of the permissions result are handled. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapget\_permissions.html