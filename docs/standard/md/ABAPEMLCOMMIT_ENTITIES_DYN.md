---
title: "ABAPEMLCOMMIT_ENTITIES_DYN"
description: |
  ABAPEMLCOMMIT_ENTITIES_DYN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEMLCOMMIT_ENTITIES_DYN.htm"
abapFile: "ABAPEMLCOMMIT_ENTITIES_DYN.html"
keywords: ["delete", "if", "method", "data", "internal-table", "ABAPEMLCOMMIT", "ENTITIES", "DYN"]
---

```COMMIT ENTITIES [IN SIMULATION MODE] RESPONSES OF dyn_tab [`` `response_param` ``](ABAPEML_RESPONSE.html).```

[`... IN SIMULATION MODE`](#ABAP_ONE_ADD@1@)

Triggers the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) and completes the [RAP transaction](ABENRAP_LUW_GLOSRY.html). All transactional changes in the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html), that is, [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) created, modified, or deleted within the RAP transaction, are persisted to the database.

The `RESPONSES OF` addition to the `COMMIT ENTITIES` statement allows you to retrieve [`FAILED`](ABAPEML_RESPONSE.html) and [`REPORTED`](ABAPEML_RESPONSE.html) responses from the [RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html) of [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html) by dynamically specifying one or more [RAP BO root entities](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html) in `dyn_tab`.

Notes on the syntax:

For general hints on using the statement see the topic [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html).

The following source code section taken from `CL_DEMO_RAP_EML_COMMIT_2` demonstrates the dynamic form of the `COMMIT ENTITIES` statement.

Used to process a save in simulation mode. See more information in topic [`COMMIT ENTITIES`, `IN SIMULATION MODE`](ABAPCOMMIT_ENTITIES_SIMULATION.html).

The example [`COMMIT ENTITIES`, Dynamic Form](ABENEML_COMMIT_DYN_ABEXA.html) demonstrates the use of the dynamic form of the `COMMIT ENTITIES` statement.

-   `dyn_tab` must be of type `ABP_ENTITY_NAME_TAB`. The components are the names of the root entities. They must be typed with `ABP_ROOT_ENTITY_NAME`.
-   The parameters following `FAILED` and `REPORTED` must be internal tables typed with `ABP_BEHV_RESPONSE_TAB`. For more information on `response_param`, see [here](ABAPEML_RESPONSE.html).

-   `COMMIT ENTITIES` statements are not allowed in [RAP BO providers](ABENRAP_BO_PROVIDER_GLOSRY.html).
-   When using `COMMIT ENTITIES` statements, a check of `sy-subrc` should be included to avoid syntax warnings. If responses are retrieved, it is recommended that the response parameter `failed` is checked so as to react accordingly. See the topic [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html) for more information.

DATA: root\_name1 TYPE abp\_root\_entity\_name \\n VALUE 'DEMO\_MANAGED\_ASSOC\_CUSTOM', \\n root\_name2 TYPE abp\_root\_entity\_name \\n VALUE 'DEMO\_MANAGED\_ROOT\_2'. \\n\\ \\nFINAL(dyn\_tab) = VALUE abp\_entity\_name\_tab( ( root\_name1 ) \\n ( root\_name2 ) ). \\n\\ \\nCOMMIT ENTITIES \\n RESPONSES OF dyn\_tab \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapcommit\_entities.html