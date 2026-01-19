---
title: "ABAPGET_PERMISSIONS_SHORT"
description: |
  ABAPGET_PERMISSIONS_SHORT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_PERMISSIONS_SHORT.htm"
abapFile: "ABAPGET_PERMISSIONS_SHORT.html"
keywords: ["do", "if", "data", "internal-table", "ABAPGET", "PERMISSIONS", "SHORT"]
---

```GET PERMISSIONS [[[`` `FORWARDING` ``](ABAPEML_PRIVILEGED.html)]\ [`` `PRIVILEGED` ``](ABAPEML_PRIVILEGED.html)]\ [[`only_clause`](ABAPGET_PERMISSIONS_ONLY_CLAUSE.html)]\       ENTITY entity [FROM keys] REQUEST request RESULT result [[`` `response_param` ``](ABAPEML_RESPONSE.html)].```

[1. `... [FORWARDING] PRIVILEGED ...`](#ABAP_ADDITION_1@3@)

[2. `... only_clause ...`](#ABAP_ADDITION_2@3@)

[3. `... FROM keys ...`](#ABAP_ADDITION_3@3@)

[4. `... response_param.`](#ABAP_ADDITION_4@3@)

The short form of the `GET PERMISSIONS` statement is used to retrieve information on permissions for instances of a single entity.

**Syntax Details**

The addition [`PRIVILEGED`](ABAPEML_PRIVILEGED.html) is used for a privileged access to a RAP BO, i. e. the RAP BO runtime does not perform certain authorization checks. As a prerequisite, `privileged` must be specified in the BDEF.

The addition [`only_clause`](ABAPGET_PERMISSIONS_ONLY_CLAUSE.html) allows the control characteristics to be specified that are to be included in the result.

The addition `FROM keys` specifies the keys of the instances for which permissions are to be requested. `keys` is an internal table and must be typed with the BDEF derived type [`TYPE TABLE FOR PERMISSIONS KEY`](ABAPTYPE_TABLE_FOR.html).

The addition must not be specified if any of the [`ONLY GLOBAL ...`](ABAPGET_PERMISSIONS_ONLY_CLAUSE.html) variants are used. For all other `ONLY` clauses, `FROM keys` is required.

The addition [`response_param`](ABAPEML_RESPONSE.html) represents the response parameters that can be specified.

The following source code section taken from `CL_DEMO_RAP_EML_GET_PERMISSION` demonstrates the short form of the `GET PERMISSIONS` statement in the context of checking access restrictions for certain data fields.

-   The example [ABAP EML - `GET PERMISSIONS`, Variants](ABENGET_PERM_FORMS_ABEXA.html) demonstrates the short form of the `GET PERMISSIONS` statement with a simple managed RAP BO. It also includes the long and dynamic form.

DATA: request TYPE STRUCTURE FOR \\n PERMISSIONS REQUEST demo\_managed\_root\_3. \\nrequest-%field-data\_field1\_root = if\_abap\_behv=>mk-on. \\nrequest-%field-data\_field2\_root = if\_abap\_behv=>mk-on. \\n\\ \\nGET PERMISSIONS ONLY INSTANCE FEATURES ENTITY demo\_managed\_root\_3 \\n FROM VALUE #( ( %key-key\_field = 1 ) \\n ( %key-key\_field = 2 ) ) \\n REQUEST request \\n RESULT FINAL(result) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). **Syntax Part** **Details**\\ `entity` Specifies the name of the entity following the keyword `ENTITY`. It must be the full entity name, not the defined alias. `REQUEST request` `request` is a structure following the keyword `REQUEST` containing request components to specify which operations, fields or actions are to be considered for the information retrieval. The request components can be either marked as enabled or disabled. The structure must be typed with [`TYPE STRUCTURE FOR PERMISSIONS REQUEST`](ABAPTYPE_STRUCTURE_FOR.html). \\
\\
To enable or disable the request components, the constants provided in the interface `IF_ABAP_BEHV` can be used: One example is `if_abap_behv=>mk-on` for enabling (indicated by `01`) and `if_abap_behv=>mk-off` for disabling (indicated by `00`). `RESULT result` `result` is a structure of type [`TYPE STRUCTURE FOR PERMISSIONS RESULT`](ABAPTYPE_STRUCTURE_FOR.html) following the keyword `RESULT`. It contains two components that contain the result of the permission information request: \\
\\
`instances`: Internal table containing instance keys and components for those elements in the [entity behavior body](ABENBDL_BODY.html) of the BDEF for which permissions are defined (excluding static elements). \\
\\
`global`: Structure containing components for all elements in the entity behavior body of the BDEF for which permissions are defined. \\
\\
**Note:** See the [Guidelines](ABAPGET_PERMISSIONS_RULES.html) for information on how the components of the permissions result are handled. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapget\_permissions.html