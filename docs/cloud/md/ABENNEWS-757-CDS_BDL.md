---
title: "ABENNEWS-757-CDS_BDL"
description: |
  ABENNEWS-757-CDS_BDL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-757-CDS_BDL.htm"
abapFile: "ABENNEWS-757-CDS_BDL.html"
keywords: ["select", "if", "method", "class", "data", "types", "ABENNEWS", "757", "CDS", "BDL"]
---

[1\. RAP Late Numbering for Managed and for Draft-Enabled RAP BOs](#ABAP_MODIFICATION_1@4@)

[2\. Instance-Bound Factory Actions for Managed RAP BOs](#ABAP_MODIFICATION_2@4@)

[3\. BDEF Privileged Mode for RAP Projection BOs](#ABAP_MODIFICATION_3@4@)

[4\. CDS Interface Behavior Definitions](#ABAP_MODIFICATION_4@4@)

[5\. Managed RAP BO, New Field Characteristic](#ABAP_MODIFICATION_5@4@)

[6\. Unmanaged RAP BO, New Field Characteristic](#ABAP_MODIFICATION_6@4@)

[7. Managed RAP BO, `with full data`](#ABAP_MODIFICATION_7@4@)

[8\. Variants to Define a RAP Own Authorization Context](#ABAP_MODIFICATION_8@4@)

[9\. BDEF Extensions for RAP BOs](#ABAP_MODIFICATION_9@4@)

[10\. BDEF Extensions for RAP Projection BOs](#ABAP_MODIFICATION_10@4@)

[11\. New Version of BDEF Strict Mode](#ABAP_MODIFICATION_11@4@)

[12\. Draft Query Views for Draft-Enabled RAP BOs](#ABAP_MODIFICATION_12@4@)

[13\. Abstract BDEF, New Field Characteristic](#ABAP_MODIFICATION_13@4@)

[14. `result selective` for Deep Result Types](#ABAP_MODIFICATION_14@4@) 

[15\. RAP Business Events](#ABAP_MODIFICATION_15@4@)

[16\. RAP Save Actions with Phase Specification](#ABAP_MODIFICATION_16@4@)

[17\. Repeatable RAP Actions and Functions](#ABAP_MODIFICATION_17@4@)

[RAP late numbering](ABENBDL_LATE_NUMBERING.html) is now also available for managed RAP BOs, managed draft-enabled RAP BOs, and for unmanaged draft-enabled RAP BOs.

[Instance-bound factory actions](ABENBDL_ACTION_FACTORY.html) are now also available for managed RAP BOs.

A new syntax variant of [`with privileged mode`](ABENBDL_PRIVILEGED_MODE.html) is now available for RAP projection BOs.

A new [implementation type](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html) is available: the [RAP interface behavior definition](ABENBDL_RAP_BO_INTERFACE.html). Such interface BDEFs are based on [CDS transactional interfaces](ABENCDS_TRANS_INTERFACE_GLOSRY.html) and define the behavior of a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html). The overall purpose of a RAP BO interface is to project a business object for stable consumption.

In [managed RAP business objects](ABENMANAGED_RAP_BO_GLOSRY.html), a new field characteristic is available: [`field(suppress)`](ABENBDL_FIELD_CHAR.html). It removes the field in question from the [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) and from all RAP APIs.

In [unmanaged RAP business objects](ABENUNMANAGED_RAP_BO_GLOSRY.html), a new field characteristic is available: [`field(suppress)`](ABENBDL_FIELD_CHAR.html). It removes the field in question from the [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) and from all RAP APIs.

In [managed RAP business objects](ABENMANAGED_RAP_BO_GLOSRY.html), the optional addition [`with full data`](ABENBDL_SAVING.html) can be used in combination with one of the [RAP saving options](ABENBDL_SAVING.html) to ensure that full instance data is handed over to the `save_modified` method of the RAP saver class in the ABAP behavior pool.

New variants are available for defining a [RAP own authorization context](ABENCDS_OWN_AC_GLOSRY.html):

[BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html) for RAP BOs can be defined using the statement [`extension`](ABENBDL_EXTENSIBILITY_MANAGED_UNM.html).

[BDEF projection extensions](ABENRAP_PROJEC_BDEF_EXT_GLOSRY.html) for [RAP projection business objects](ABENRAP_PROJECTION_BO_GLOSRY.html) can be defined using the statement [`extension for projection`](ABENBDL_EXTENSIBILITY_PROJECTION.html).

A new version of [BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html) is available: Strict mode version 2, specified using [`strict(2)`](ABENBDL_STRICT_2.html). It applies even more syntax checks than the first version.

The new syntax addition [`query`](ABENBDL_DRAFT_QUERY_VIEW.html) is available to define a [draft query view](ABENDRAFT_QUERY_VIEW_GLOSRY.html) for a [draft-enabled RAP BO](ABENDRAFT_RAP_BO_GLOSRY.html). This addition is optional. Only in the context of [RAP extensibility](ABENRAP_EXTENSIBILITY_GLOSRY.html) is it a mandatory prerequisite for the [C0 release](ABENC0_CONTRACT_GLOSRY.html) of the [CDS behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) in question.

In [RAP abstract behavior definitions](ABENCDS_ABSTRACT_BDEF_GLOSRY.html), a new [RAP field characteristic](ABENRAP_FIELD_CHAR_GLOSRY.html) is available: [`mandatory:execute`](ABENBDL_FIELD_ABSTRACT.html). It declares the field in question as mandatory. Whenever the hierarchical type is used as input parameter for a RAP action or a RAP function, a value must be supplied.

The addition [`result selective`](ABENBDL_ACTION_OUTPUT_PARA.html) is now also possible for deep result types. It can be specified for an [output parameter](ABENBDL_ACTION_OUTPUT_PARA.html) of a [RAP action](ABENRAP_ACTION_GLOSRY.html) or [RAP function](ABENRAP_FUNCTION_GLOSRY.html) to return only parts of the result structure.

Using [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html), the ABAP RESTful Application Programming Model now offers native support for event-driven architecture. RAP business events are defined with the language element [`event`](ABENBDL_EVENT.html). A flat or deep output parameter can optionally be specified.

[RAP save actions](ABENBDL_ACTION_ONSAVE.html) can now specify one or both of the [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html)\\ `finalize` or `adjustnumbers` in brackets to indicate the RAP saver method during which the action can be executed.

[RAP actions](ABENRAP_ACTION_GLOSRY.html) and [RAP functions](ABENRAP_FUNCTION_GLOSRY.html) can be defined as [`repeatable`](ABENBDL_ACTION_REPEATABLE.html). This syntax addition explicitly allows multiple executions of the same action or function on the same [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) within the same [ABAP EML](ABENABAP_EML_GLOSRY.html) or [OData](ABENODATA_GLOSRY.html) request. The [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) of a repeatable action or function has an extra [`%cid`](ABAPDERIVED_TYPES_CID.html) component, in contrast to the BDEF derived type of non-repeatable actions or function.

-   [`define own authorization context by privileged mode;`](ABENBDL_DEF_OWN_AUTH_CONTEXT.html)
-   [`define own authorization context by privileged mode and \{ ... \}`](ABENBDL_DEF_OWN_AUTH_CONTEXT.html)

abenabap.html abennews.html abennews-75.html abennews-757.html abennews-757-restful.html