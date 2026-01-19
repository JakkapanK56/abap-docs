---
title: "ABENNEWS-791-CDS_BDL"
description: |
  ABENNEWS-791-CDS_BDL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-791-CDS_BDL.htm"
abapFile: "ABENNEWS-791-CDS_BDL.html"
keywords: ["if", "method", "data", "ABENNEWS", "791", "CDS", "BDL"]
---

[1\. RAP Side Effects](#ABAP_MODIFICATION_1@4@)

[2\. Abstract BDEF Extensions](#ABAP_MODIFICATION_2@4@)

[3\. BDEF Extension Layering](#ABAP_MODIFICATION_3@4@)

[4\. Authorization Context for Disable, New Options](#ABAP_MODIFICATION_4@4@)

[RAP side effects](ABENRAP_SIDE_EFFECTS_GLOSRY.html) define interdependencies among RAP BO properties that trigger a reload of the affected properties on the user interface. Side effects are translated into annotations in the OData metadata of a RAP service. The syntax for defining RAP side effects is [`side effects`](ABENBDL_SIDE_EFFECTS.html).

The new statement [`extension for abstract`](ABENBDL_EXTENSION_FOR_ABSTRACT.html) of the RAP BDL makes it possible to extend [abstract behavior definitions](ABENCDS_ABSTRACT_BDEF_GLOSRY.html) with [abstract BDEF extensions](ABENRAP_ABS_BDEF_EXT_GLOSRY.html). Abstract BDEFs are mainly used as parameters for RAP actions, RAP functions, and RAP business events. An abstract BDEF extension allows you to extend these parameters.

It is now possible to extend a [BDEF extension](ABENRAP_EXTENSION_GLOSRY.html) with further BDEF extensions. This is referred to as [extension layering](ABENRAP_EXT_LAYERING_GLOSRY.html). As a prerequisite, the BDEF extension in question must be explicitly enabled for extensibility. The rules are described in the topic [RAP - Extensibility Enabling for BDEF Extensions](ABENBDL_EXTENSIBILITY_ENABLING_EXT.html). Technically, the BDEF extension that extends another extension is a regular extension and the respective rules apply.

There are further options available for the [authorization context for disable](ABENCDS_AUTH_CONTEXT_GLOSRY.html) after the addition [`for disable`](ABENBDL_DEF_AUTH_CONTEXT.html):

-   [`save:early`](ABENBDL_DEF_AUTH_CONTEXT.html): Skips the authorization checks defined in the respective authorization context in the [early save phases](ABENEARLY_RAP_SAVE_PHASE_GLOSRY.html)\\ [`finalize`](ABENSAVER_FINALIZE.html) and [`check_before_save`](ABENSAVER_CHECK_BEFORE_SAVE.html).
-   [`save:late`](ABENBDL_DEF_AUTH_CONTEXT.html): Skips the authorization checks defined in the respective authorization context in the [late save phases](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html)\\ [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html), [`save`](ABENSAVER_METHOD_SAVE.html), and [`save_modified`](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html).

abenabap.html abennews.html abennews-79.html abennews-791.html abennews-791-restful.html