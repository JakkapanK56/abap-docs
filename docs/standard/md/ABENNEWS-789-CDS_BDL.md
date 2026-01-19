---
title: "ABENNEWS-789-CDS_BDL"
description: |
  ABENNEWS-789-CDS_BDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-789-CDS_BDL.htm"
abapFile: "ABENNEWS-789-CDS_BDL.html"
keywords: ["select", "if", "method", "data", "types", "ABENNEWS", "789", "CDS", "BDL"]
---

[1\. Define Authorization Context](#ABAP_MODIFICATION_1@4@)

[2\. With Privileged Mode Disabling](#ABAP_MODIFICATION_2@4@)

[3\. Variants to Define a RAP Own Authorization Context](#ABAP_MODIFICATION_3@4@)

[4\. BDEF Extensions for RAP BOs](#ABAP_MODIFICATION_4@4@)

[5\. BDEF Extensions for RAP Projection BOs](#ABAP_MODIFICATION_5@4@)

[6\. New Version of BDEF Strict Mode](#ABAP_MODIFICATION_6@4@)

[7\. Draft Query Views for Draft-Enabled RAP BOs](#ABAP_MODIFICATION_7@4@)

[8. `result selective` for Deep Result Types](#ABAP_MODIFICATION_8@4@) 

[9\. RAP Business Events](#ABAP_MODIFICATION_9@4@)

[10\. RAP Save Actions with Phase Specification](#ABAP_MODIFICATION_10@4@)

[11\. Repeatable RAP Actions and Functions](#ABAP_MODIFICATION_11@4@)

It is now possible to define [authorization contexts](ABENBDL_DEF_AUTH_CONTEXT.html) in a RAP behavior definition using the keyword `define authorization context`. There are different ways to activate an authorization context. When activated, all authorization objects listed in the respective context are always successful, that means, the respective authorization checks are skipped.

The new syntax `with privileged mode disabling` supersedes the deprecated version `with privileged mode`. The new syntax version disables an [authorization contexts](ABENBDL_AUTHORIZATION_CONTEXT.html) when accessing the RAP BO in question with a privileged EML call.

New variants are available for defining a [RAP own authorization context](ABENCDS_OWN_AC_GLOSRY.html):

[BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html) for RAP BOs can be defined using the statement [`extension`](ABENBDL_EXTENSIBILITY_MANAGED_UNM.html).

[BDEF projection extensions](ABENRAP_PROJEC_BDEF_EXT_GLOSRY.html) for [RAP projection business objects](ABENRAP_PROJECTION_BO_GLOSRY.html) can be defined using the statement [`extension for projection`](ABENBDL_EXTENSIBILITY_PROJECTION.html).

A new version of [BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html) is available: Strict mode version 2, specified using [`strict(2)`](ABENBDL_STRICT_2.html). It applies even more syntax checks than the first version.

The new syntax addition [`query`](ABENBDL_DRAFT_QUERY_VIEW.html) is available to define a [draft query view](ABENDRAFT_QUERY_VIEW_GLOSRY.html) for a [draft-enabled RAP BO](ABENDRAFT_RAP_BO_GLOSRY.html). This addition is optional. Only in the context of [RAP extensibility](ABENRAP_EXTENSIBILITY_GLOSRY.html) is it a mandatory prerequisite for the [C0 release](ABENC0_CONTRACT_GLOSRY.html) of the [CDS behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) in question.

The addition [`result selective`](ABENBDL_ACTION_OUTPUT_PARA.html) is now also possible for deep result types. It can be specified for an [output parameter](ABENBDL_ACTION_OUTPUT_PARA.html) of a [RAP action](ABENRAP_ACTION_GLOSRY.html) or [RAP function](ABENRAP_FUNCTION_GLOSRY.html) to return only parts of the result structure.

Using [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html), the ABAP RESTful Application Programming Model now offers native support for event-driven architecture. RAP business events are defined with the language element [`event`](ABENBDL_EVENT.html). A flat or deep output parameter can optionally be specified.

[RAP save actions](ABENBDL_ACTION_ONSAVE.html) can now specify one or both of the [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html)\\ `finalize` or `adjustnumbers` in brackets to indicate the RAP saver method during which the action can be executed.

[RAP actions](ABENRAP_ACTION_GLOSRY.html) and [RAP functions](ABENRAP_FUNCTION_GLOSRY.html) can be defined as [`repeatable`](ABENBDL_ACTION_REPEATABLE.html). This syntax addition explicitly allows multiple executions of the same action or function on the same [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) within the same [ABAP EML](ABENABAP_EML_GLOSRY.html) or [OData](ABENODATA_GLOSRY.html) request. The [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) of a repeatable action or function has an extra [`%cid`](ABAPDERIVED_TYPES_CID.html) component, in contrast to the BDEF derived type of non-repeatable actions or function.

-   [`define own authorization context by privileged mode;`](ABENBDL_DEF_OWN_AUTH_CONTEXT.html)
-   [`define own authorization context by privileged mode and \{ ... \}`](ABENBDL_DEF_OWN_AUTH_CONTEXT.html)

abenabap.html abennews.html abennews-78.html abennews-789.html abennews-789-restful.html