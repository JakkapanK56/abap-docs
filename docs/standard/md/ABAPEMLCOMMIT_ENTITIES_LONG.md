---
title: "ABAPEMLCOMMIT_ENTITIES_LONG"
description: |
  ABAPEMLCOMMIT_ENTITIES_LONG - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEMLCOMMIT_ENTITIES_LONG.htm"
abapFile: "ABAPEMLCOMMIT_ENTITIES_LONG.html"
keywords: ["delete", "if", "method", "data", "ABAPEMLCOMMIT", "ENTITIES", "LONG"]
---

```COMMIT ENTITIES [IN SIMULATION MODE] RESPONSE OF bdef1 [`` `response_param` ``](ABAPEML_RESPONSE.html)\                                      [RESPONSE OF bdef2 [`` `response_param` ``](ABAPEML_RESPONSE.html)]\                                      [...].```

[`... IN SIMULATION MODE`](#ABAP_ONE_ADD@1@)

Triggers the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) and completes the [RAP transaction](ABENRAP_LUW_GLOSRY.html). All transactional changes in the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html), that is, [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) created, modified, or deleted within the RAP transaction, are persisted to the database.

The long syntax form of the `COMMIT ENTITIES` statement includes the retrieval of information returned by the `FAILED` and `REPORTED` response parameters of [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html) for multiple [RAP BO entities](ABENRAP_BO_ENTITY_GLOSRY.html). [`FAILED`](ABAPEML_RESPONSE.html) and [`REPORTED`](ABAPEML_RESPONSE.html) responses can be retrieved for one or more RAP BOs that have been modified beforehand. `bdef1`, `bdef2`, etc., must be the names of root entities.

The responses of each involved BO must be requested separately. The operands following the additions `FAILED` and `REPORTED` must be of type [`TYPE RESPONSE FOR FAILED LATE`](ABAPTYPE_RESPONSE_FOR.html) or [`TYPE RESPONSE FOR REPORTED LATE`](ABAPTYPE_RESPONSE_FOR.html) respectively. For more information on `response_param`, see [here](ABAPEML_RESPONSE.html).

For general hints on using the statement see the topic [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html).

The following source code section taken from `CL_DEMO_RAP_EML_COMMIT_1` demonstrates the long form of the `COMMIT ENTITIES` statement.

Used to process a save in simulation mode. See more information in topic [`COMMIT ENTITIES`, `IN SIMULATION MODE`](ABAPCOMMIT_ENTITIES_SIMULATION.html).

The example [`COMMIT ENTITIES`, Short and Long Form](ABENCOMMIT_ENTITIES_SH_LO_ABEXA.html) demonstrates the use of the long (and short) form of the `COMMIT ENTITIES` statement.

COMMIT ENTITIES \\n RESPONSE OF demo\_managed\_root\_2 \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported) \\n RESPONSE OF demo\_managed\_assoc\_custom \\n FAILED FINAL(failed2) \\n REPORTED FINAL(reported2). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapcommit\_entities.html