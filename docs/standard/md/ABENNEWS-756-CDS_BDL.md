---
title: "ABENNEWS-756-CDS_BDL"
description: |
  ABENNEWS-756-CDS_BDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-756-CDS_BDL.htm"
abapFile: "ABENNEWS-756-CDS_BDL.html"
keywords: ["update", "if", "method", "types", "ABENNEWS", "756", "CDS", "BDL"]
---

[1\. BDEF Strict Mode](#ABAP_MODIFICATION_1@4@)

[2\. Nested Determinations on Modify](#ABAP_MODIFICATION_2@4@)

[3. RAP BO Operation Addition `authorization:update`](#ABAP_MODIFICATION_3@4@)

[4\. Always Flag in Determine Actions](#ABAP_MODIFICATION_4@4@)

[5\. Global Feature Control](#ABAP_MODIFICATION_5@4@)

[6\. Global Authorization Control](#ABAP_MODIFICATION_6@4@)

[7\. Non-Locking Actions](#ABAP_MODIFICATION_7@4@)

[8\. Unmanaged Early Numbering in Managed BOs](#ABAP_MODIFICATION_8@4@)

[9\. Implementing Cleanup in Managed BOs](#ABAP_MODIFICATION_9@4@)

[10\. Define Authorization Context](#ABAP_MODIFICATION_10@4@)

[11\. With Privileged Mode Disabling](#ABAP_MODIFICATION_11@4@)

[12\. Projection BDEF, New Actions and Functions](#ABAP_MODIFICATION_12@4@)

[13\. Projection BDEF, Authorization Concept](#ABAP_MODIFICATION_13@4@)

[14\. Projection BDEF, Augmented Fields](#ABAP_MODIFICATION_14@4@)

[15\. Projection BDEF, New Field Characteristic](#ABAP_MODIFICATION_15@4@)

[16\. Projection BDEF, Operation Augment](#ABAP_MODIFICATION_16@4@)

[17\. CDS Abstract Behavior Definitions](#ABAP_MODIFICATION_17@4@)

[18. Abstract BDEF, `with control`](#ABAP_MODIFICATION_18@4@)

[BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html) is now available. It can be enabled using the syntax addition [`strict`](ABENBDL_STRICT_1.html) and it applies additional syntax checks to [RAP behavior definitions](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

It is now possible to trigger a [determination on modify](ABENBDL_DETERMINATIONS.html) by another determination on modify.

The new [RAP BO operation addition](ABENBDL_OPERATIONS_ADDITIONS.html)\\ [`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html) is available for managed and unmanaged BOs. It delegates the authorization control for an operation to the authorization control that is specified for the update operation.

The new addition [`always`](ABENBDL_DETERMINE_ACTION.html) can be used for determinations and validations assigned to a [`determine action`](ABENBDL_DETERMINE_ACTION.html). When the determine action is called, determinations and validations with this flag are executed regardless of their trigger conditions.

The new RAP BO operation addition [`features:global`](ABENBDL_ACTIONS_FC.html) can be used to define global feature control for RAP BO operations.

Global authorization control is available. It can be defined using [`authorization master (global)`](ABENBDL_AUTHORIZATION.html).

The new RAP BO operation addition [`lock:none`](ABENBDL_LOCK_NONE.html) can be used to suppress the locking mechanism for an action.

The entity behavior characteristic [`early numbering`](ABENBDL_EARLY_NUMB.html) can be used to define unmanaged early numbering for all primary key fields of a managed RAP BO.

The new addition [`and cleanup`](ABENBDL_SAVING.html) is available for additional and unmanaged save in managed RAP BOs. It allows the application developer to implement the cleanup method.

It is now possible to define [authorization contexts](ABENBDL_AUTHORIZATION_CONTEXT.html) in a RAP behavior definition using the keyword `define authorization context`. There are different ways to activate an authorization context. When activated, all authorization objects listed in the respective context are always successful, that means, the respective authorization checks are skipped.

The new syntax `with privileged mode disabling` supersedes the deprecated version `with privileged mode`. The new syntax version disables an [authorization contexts](ABENBDL_AUTHORIZATION_CONTEXT.html) when accessing the RAP BO in question with a privileged EML call.

It is now possible to define and implement [new actions and functions](ABENBDL_NONSTANDARD_PROJECTION.html) in a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html).

It is now possible to define an [authorization concept](ABENBDL_AUTHORIZATION_PROJECTION.html) in a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html) that controls access to the newly defined actions and functions in a projection BDEF.

[Field characteristics](ABENBDL_FIELD_PROJECTION.html) can be specified for [augmented fields](ABENBDL_AUGMENT_PROJECTION.html) in a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html).

In [projection BDEFs](ABENCDS_PROJ_BDEF_GLOSRY.html), a new field characteristic is available: [`field(suppress)`](ABENBDL_FIELD_PROJECTION.html). It removes the field in question from the BDEF derived types and from all RAP APIs.

For [projections BDEFs](ABENCDS_PROJ_BDEF_GLOSRY.html), the [operation augment](ABENBDL_AUGMENT_PROJECTION.html) is available. Augmentation allows incoming requests with a custom implementation to be enhanced, for example with default values.

A new implementation type is available: the [CDS abstract behavior definition](ABENBDL_ABSTRACT.html). Such abstract BDEFs mainly serve as typing mechanism for deep action or function parameters.

The optional addition [`with control`](ABENBDL_DEFINE_BEH_ABSTRACT.html) is available for abstract BDEFs. It adds a [`%control`](ABAPDERIVED_TYPES_COMP.html) structure to the corresponding derived type structure.

abenabap.html abennews.html abennews-75.html abennews-756.html abennews-756-restful.html