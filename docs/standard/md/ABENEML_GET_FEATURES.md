---
title: "Short Form"
description: |
  ``GET FEATURES ENTITY bdef FROM keys REQUEST request RESULT result_tab(ABAPEML_RESULT.html) `response_param`(ABAPEML_RESPONSE.html).``  `GET GLOBAL FEATURES ENTITY bdef REQUEST request RESULT result_tab(ABAPEML_RESULT.html).`  Long Form  ``GET FEATURES OF bdef       ENTITY bdef
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEML_GET_FEATURES.htm"
abapFile: "ABENEML_GET_FEATURES.html"
keywords: ["insert", "do", "if", "case", "internal-table", "ABENEML", "GET", "FEATURES"]
---

**Syntax Forms**

Short Form 
\\ 
``GET FEATURES ENTITY bdef FROM keys REQUEST request [RESULT result_tab](ABAPEML_RESULT.html)\ [[`response_param`](ABAPEML_RESPONSE.html)].``\\ 
\\ 
`GET GLOBAL FEATURES ENTITY bdef REQUEST request [RESULT result_tab](ABAPEML_RESULT.html).`\\ 
\\ 
Long Form 
\\ 
``GET FEATURES OF bdef       ENTITY bdef1 FROM keys REQUEST req [RESULT result_tab](ABAPEML_RESULT.html)\      [ENTITY bdef2 FROM keys REQUEST req [RESULT result_tab](ABAPEML_RESULT.html)]\      [...]\      [[`response_param`](ABAPEML_RESPONSE.html)].``\\ 
\\ 
`GET GLOBAL FEATURES OF bdef       ENTITY bdef1 FROM keys REQUEST req [RESULT result_tab](ABAPEML_RESULT.html)\      [ENTITY bdef2 FROM keys REQUEST req [RESULT result_tab](ABAPEML_RESULT.html)]\      [...].`\\ 
\\ 
Dynamic Form 
\\ 
``GET FEATURES OPERATIONS features_tab [[`response_param`](ABAPEML_RESPONSE.html)].``\\ 
\\ 
`GET GLOBAL FEATURES OPERATIONS global_features_tab.`

[1. `GET FEATURES ENTITY...`, `GET GLOBAL FEATURES ENTITY ...`](#ABAP_ALTERNATIVE_1@2@)

[2. `GET FEATURES OF ...`, `GET GLOBAL FEATURES OF ...`](#ABAP_ALTERNATIVE_2@2@)

[3. `GET FEATURES OPERATIONS ...`, `GET GLOBAL FEATURES OPERATIONS ...`](#ABAP_ALTERNATIVE_3@2@)

[`GET PERMISSIONS`](ABAPGET_PERMISSIONS.html) statements should be used instead.

Retrieves information about the following:

For all characteristics, the information retrieval must be user-implemented in [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) implementations except for static feature controls. In latter case, the access restriction is directly defined in the BDEF. One example is when a field is marked as `readonly`.

**Syntax Details**

If the recommended notation [`strict`](ABENBDL_STRICT.html) is used in the BDEF, `GET FEATURES` statements are not possible and the use of `GET PERMISSIONS` statements is enforced.

The short form of the statement allows information to be retrieved about a single entity.

The long form of the statement allows information to be retrieved about multiple entities.

The dynamic form of the statement allows multiple instances to be collected for which information should be retrieved in multiple entities in one statement.

-   [Global feature control](ABENRAP_GLO_FEATURE_CONTROL_GLOSRY.html): Feature controls that depend on external factors like specific user settings or the business scope.
-   [Instance feature control](ABENRAP_INS_FEATURE_CONTROL_GLOSRY.html): Checks depending on the state of an entity instance.
-   [Static feature control](ABENBDL_FIELD_CHAR.html): Specifies individual fields of an entity that have certain access restrictions, for example, fields that are marked as `readonly` in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

**Syntax Part** **Details**\\ `bdef` Specifies the name of the [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html). `keys` Specifies an internal table of type [`TYPE TABLE FOR [INSTANCE] FEATURES KEY`](ABAPTYPE_TABLE_FOR.html). `ENTITY bdef1`, `ENTITY bdef2`, ... \\ `bdef1`, `bdef2`, ..., specify the names of the entities that are part of the [composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) of `bdef`. They follow the keyword `ENTITY`. \\
\\
A list of queries follows `OF bdef`. Each query (`ENTITY bdef1 ... RESULT result_tab`) of the list has the same syntax as the short form. At least one query must be specified. The root entity itself can also be inserted in the position of `bdef1`, for example. `bdef1`, and so on, should be the entity alias names if provided in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). Using the full entity name causes a warning. If the root entity is used in the list of operations, its alias name, if defined in the BDEF, should be used as well. `req` Specifies the request parameters in a structure of type [`TYPE STRUCTURE FOR [INSTANCE] FEATURES REQUEST`](ABAPTYPE_STRUCTURE_FOR.html) or [`TYPE STRUCTURE FOR GLOBAL FEATURES REQUEST`](ABAPTYPE_STRUCTURE_FOR.html) respectively. `result_tab` Specifies an internal table containing the result of the information retrieval. See more information [here](ABAPEML_RESULT.html). `response_param` Specifies the response parameters. See more information [here](ABAPEML_RESPONSE.html). `features_tab` Specifies an internal table for the dynamic form. It is of type `ABP_BEHV_FEATURES_TAB`. `global_features_tab` Specifies an internal table for the dynamic form. It is of type `ABP_BEHV_GLOBAL_PERMISSION_TAB`. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenrap\_obsolete.html abeneml\_obsolete.html