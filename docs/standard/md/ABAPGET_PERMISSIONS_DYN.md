---
title: "ABAPGET_PERMISSIONS_DYN"
description: |
  ABAPGET_PERMISSIONS_DYN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_PERMISSIONS_DYN.htm"
abapFile: "ABAPGET_PERMISSIONS_DYN.html"
keywords: ["do", "if", "try", "data", "internal-table", "ABAPGET", "PERMISSIONS", "DYN"]
---

```GET PERMISSIONS [[[`` `FORWARDING` ``](ABAPEML_PRIVILEGED.html)][`` `PRIVILEGED` ``](ABAPEML_PRIVILEGED.html)]\ [[`only_clause`](ABAPGET_PERMISSIONS_ONLY_CLAUSE.html)] OPERATIONS perm_tab [[`` `response_param` ``](ABAPEML_RESPONSE.html)].```

[1. `... [FORWARDING] PRIVILEGED ...`](#ABAP_ADDITION_1@3@)

[2. `... only_clause ...`](#ABAP_ADDITION_2@3@)

[3. `... response_param.`](#ABAP_ADDITION_3@3@)

The dynamic version of the `GET PERMISSIONS` statement collects permission queries for multiple RAP BO entities in one `GET PERMISSIONS` statement.

`perm_tab` must be an internal table of type `ABP_BEHV_PERMISSIONS_TAB`. This table has specific components:

The addition [`PRIVILEGED`](ABAPEML_PRIVILEGED.html) is used for a privileged access to a RAP BO, i. e. the RAP BO runtime does not perform certain authorization checks. As a prerequisite, `privileged` must be specified in the BDEF.

The addition [`only_clause`](ABAPGET_PERMISSIONS_ONLY_CLAUSE.html) allows the control characteristics to be specified that are to be included in the result.

The addition `response_param` represents the response parameters that can be specified. When used in the context of the dynamic form of the ABAP EML statement, the parameters must be internal tables typed with `ABP_BEHV_RESPONSE_TAB`.

The following source code section taken from `CL_DEMO_RAP_EML_GET_PERMISSION` demonstrates the dynamic form of the `GET PERMISSIONS` statement in the context of checking access restrictions for certain data fields.

-   The example [ABAP EML - `GET PERMISSIONS`, Variants](ABENGET_PERM_FORMS_ABEXA.html) demonstrates the dynamic form of the `GET PERMISSIONS` statement with a simple managed RAP BO. It also includes the short and long form.

"Root entity components for perm\_tab. \\nDATA: lt\_perm\_key\_root TYPE TABLE FOR \\n PERMISSIONS KEY demo\_managed\_root\_3, \\n ls\_perm\_req\_root TYPE STRUCTURE FOR \\n PERMISSIONS REQUEST demo\_managed\_root\_3, \\n ls\_perm\_res\_root TYPE STRUCTURE FOR \\n PERMISSIONS RESULT demo\_managed\_root\_3. \\n\\ \\nlt\_perm\_key\_root = VALUE #( ( %key-key\_field = 5 ) \\n ( %key-key\_field = 6 ) ). \\n\\ \\nls\_perm\_req\_root = VALUE #( \\n %field-data\_field1\_root = if\_abap\_behv=>mk-on \\n %field-data\_field2\_root = if\_abap\_behv=>mk-on \\n ). \\nls\_perm\_res\_root = VALUE #( ). \\n\\ \\n"Child entity components for perm\_tab. \\nDATA: lt\_perm\_key\_child TYPE TABLE \\n FOR PERMISSIONS KEY demo\_managed\_child\_3, \\n ls\_perm\_req\_child TYPE STRUCTURE \\n FOR PERMISSIONS REQUEST demo\_managed\_child\_3, \\n ls\_perm\_res\_child TYPE STRUCTURE \\n FOR PERMISSIONS RESULT demo\_managed\_child\_3. \\n\\ \\nlt\_perm\_key\_child = VALUE #( ( %key-key\_field = 5 ) \\n ( %key-key\_field = 6 ) ). \\nls\_perm\_req\_child = VALUE #( \\n %field-data\_field1\_child = if\_abap\_behv=>mk-on \\n %field-data\_field2\_child = if\_abap\_behv=>mk-on \\n ). \\nls\_perm\_res\_child = VALUE #( ). \\n\\ \\nDATA: \\nperm\_tab TYPE abp\_behv\_permissions\_tab. \\nperm\_tab = VALUE #( ( entity\_name = 'DEMO\_MANAGED\_ROOT\_3' \\n instances = REF data( lt\_perm\_key\_root ) \\n request = REF data( ls\_perm\_req\_root ) \\n results = REF data( ls\_perm\_res\_root ) ) \\n ( entity\_name = 'DEMO\_MANAGED\_CHILD\_3' \\n instances = REF data( lt\_perm\_key\_child ) \\n request = REF data( ls\_perm\_req\_child ) \\n results = REF data( ls\_perm\_res\_child ) ) \\n ). \\n\\ \\nGET PERMISSIONS ONLY INSTANCE FEATURES OPERATIONS perm\_tab \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). **Component** **Details**\\ `entity_name` Specifies the name of the BO entity for which the permissions are requested. The entry for `entity_name` must be of type `ABP_ENTITY_NAME`. If the name is specified directly using a character literal, it must be provided using capital letters. It is a mandatory component. `instances` The specification is optional. It is only relevant for getting the permission information on an instance level. The name must be provided using capital letters. The entry for `instances` must be a reference variable [static type](ABENSTATIC_TYPE_GLOSRY.html)\\ `DATA`. `request` Specifies the `REQUEST` parameter. It is a mandatory component that must be a reference variable with the [static type](ABENSTATIC_TYPE_GLOSRY.html)\\ `DATA`. `results` Specifies the `RESULT` parameter. It is a mandatory component that must be a reference variable with the [static type](ABENSTATIC_TYPE_GLOSRY.html)\\ `DATA`. \\
\\
**Note:** See the [Guidelines](ABAPGET_PERMISSIONS_RULES.html) for information on how the components of the permissions result are handled. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapget\_permissions.html