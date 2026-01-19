---
title: "ABENNEWS-755-CDS_BDL"
description: |
  ABENNEWS-755-CDS_BDL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-755-CDS_BDL.htm"
abapFile: "ABENNEWS-755-CDS_BDL.html"
keywords: ["select", "update", "do", "if", "data", "ABENNEWS", "755", "CDS", "BDL"]
---

[1\. Type Mapping](#ABAP_MODIFICATION_1@4@)

[2\. Additional Save in Managed BOs](#ABAP_MODIFICATION_2@4@)

[3\. Unmanaged Save in Managed BOs](#ABAP_MODIFICATION_3@4@)

[4\. Implementation Grouping](#ABAP_MODIFICATION_4@4@)

[5\. Managed Internal Numbering for Managed RAP BOs](#ABAP_MODIFICATION_5@4@)

[6\. New Options for Output Parameters](#ABAP_MODIFICATION_6@4@)

[7\. Unmanaged Lock in Managed RAP BOs](#ABAP_MODIFICATION_7@4@)

[8\. Draft Support for RAP BOs](#ABAP_MODIFICATION_8@4@)

[9\. Determine Actions](#ABAP_MODIFICATION_9@4@)

[10\. Precheck for Modify Operations](#ABAP_MODIFICATION_10@4@)

[11\. New Field Characteristics](#ABAP_MODIFICATION_11@4@)

The new statement [`mapping for`](ABENBDL_TYPE_MAPPING.html) can be used to map field names from legacy code to field names from the current data model. Available for unmanaged and managed business objects.

The new statement [`with additional save`](ABENBDL_SAVING.html) can be used to enhance the default save sequence in a managed implementation scenario.

The new statement [`with unmanaged save`](ABENBDL_SAVING.html) can be used to implement an own saving strategy in a managed implementation scenario.

The new statement [`group`](ABENBDL_GROUPING.html) can be used to divide the implementation-relevant parts of a BO's business logic into several groups for behavior implementation.

The new statement [`numbering:managed`](ABENBDL_FIELD_NUMBERING.html) can be used to automatically generate values for primary key fields with a UUID. Available for managed implementation scenarios.

For actions and functions, the [output parameter](ABENBDL_ACTION_OUTPUT_PARA.html) can now be an entity or a structure.

The addition [`selective`](ABENBDL_ACTION_OUTPUT_PARA.html) can be used for an output parameter to return only parts of the result structure.

The new statement [`lock master unmanaged`](ABENBDL_LOCKING.html) can be used if the application developer wants to implement an own locking mechanism in a managed implementation scenario. An own locking mechanism can be used instead of the RAP locking mechanism provided by the RAP framework.

The new statement [`with draft`](ABENBDL_WITH_DRAFT.html) can be used to enable the draft concept for a RAP BO.

Determine actions are a new type of action defined using [`determine action`](ABENBDL_DETERMINE_ACTION.html). With a determine action, determinations and validations can be executed on request.

The new RAP BO operation addition [`precheck`](ABENBDL_PRECHECK.html) can be used to prevent illegal changes from reaching the application buffer by prechecking modify operations.

RAP BDL now supports the following new [field characteristics](ABENBDL_FIELD_CHAR.html):

-   [`mandatory:create`](ABENBDL_FIELD_CHAR.html)
-   [`readonly:update`](ABENBDL_FIELD_CHAR.html)

abenabap.html abennews.html abennews-75.html abennews-755.html abennews-755-restful.html