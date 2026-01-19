---
title: "ABAPEMLCOMMIT_ENTITIES_SHORT"
description: |
  ABAPEMLCOMMIT_ENTITIES_SHORT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPEMLCOMMIT_ENTITIES_SHORT.htm"
abapFile: "ABAPEMLCOMMIT_ENTITIES_SHORT.html"
keywords: ["delete", "if", "method", "data", "internal-table", "ABAPEMLCOMMIT", "ENTITIES", "SHORT"]
---

```COMMIT ENTITIES [IN SIMULATION MODE]\ [RESPONSES [`` `response_param` ``](ABAPEML_RESPONSE.html)].```

[1. `... IN SIMULATION MODE`](#ABAP_ADDITION_1@3@)

[2. `... RESPONSES response_param.`](#ABAP_ADDITION_2@3@)

Triggers the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) and completes the [RAP transaction](ABENRAP_LUW_GLOSRY.html). All transactional changes in the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html), that is, [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) created, modified, or deleted within the RAP transaction, are persisted to the database. For general hints on using the statement, see the topic [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html).

Used to process a save in simulation mode. See more information in topic [`COMMIT ENTITIES`, `IN SIMULATION MODE`](ABAPCOMMIT_ENTITIES_SIMULATION.html).

You can optionally retrieve information returned by the response parameters of [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html). The operands following `FAILED` and `REPORTED` must be internal tables typed with `ABP_BEHV_RESPONSE_TAB`. For more information on `response_param`, see [here](ABAPEML_RESPONSE.html).

The example [`COMMIT ENTITIES`, Short and Long Form](ABENCOMMIT_ENTITIES_SH_LO_ABEXA.html) demonstrates the use of the short (and long) form of the `COMMIT ENTITIES` statement.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapcommit\_entities.html