---
title: "ABENABAP_FOR_RAP_BOS"
description: |
  ABENABAP_FOR_RAP_BOS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_FOR_RAP_BOS.htm"
abapFile: "ABENABAP_FOR_RAP_BOS.html"
keywords: ["do", "case", "class", "data", "types", "ABENABAP", "FOR", "RAP", "BOS"]
---

This section describes the ABAP language elements for providing and consuming [RAP business objects (RAP BOs)](ABENRAP_BO_GLOSRY.html). A RAP BO is mainly defined by a [RAP behavior definition (BDEF)](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). The Behavior Definition defines:

The data content of a RAP BO is stored in a [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html). The RAP BO operations work with the transactional buffer and must follow the [REST](ABENREST_GLOSRY.html) paradigm.

[RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html) trigger the RAP BO operations. A RAP BO consumer is either the [RAP runtime framework](ABENRAP_RUNT_FRAMEWORK_GLOSRY.html) that handles requests from outside the [AS ABAP](ABENAS_ABAP_GLOSRY.html) or an ABAP program using [ABAP EML](ABENABAP_EML_GLOSRY.html).

ABAP language contains elements for providing RAP BOs and for consuming RAP BOs:

The following topics document the ABAP language elements for consuming and providing RAP BOs:

-   The [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html), which can consist of [CRUD](ABENCRUD_GLOSRY.html) operations and other actions.
-   The provisioning type of the RAP BO that can be [managed](ABENMANAGED_RAP_BO_GLOSRY.html) or [unmanaged](ABENUNMANAGED_RAP_BO_GLOSRY.html).

-   For managed RAP BOs, the transactional buffer is provided and handled as a [managed transactional buffer](ABENMANAGED_TRANS_BUFF_GLOSRY.html) by the RAP BO provider. In non-standard operations of a managed RAP BO, the managed transactional buffer can be accessed by [EML](ABENEML_GLOSRY.html) statements.
-   For unmanaged RAP BOs, the transactional buffer as well as the operations of a RAP BO must be provided by [ABAP behavior implementations](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html) as an [unmanaged transactional buffer](ABENUNMANAGED_TRANS_BUFF_GLOSRY.html). There are no syntactical constraints on how an unmanaged transactional buffer is provided or handled, but it should fulfill the expectations of the [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html).

-   The language elements for providing RAP BOs are necessary for [ABAP behavior implementations](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html):

-   [ABAP Behavior Pools (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html) are special class pools for implementing the non-standard RAP BO operations. Classes of an ABP access the transactional buffer of the RAP BO, which is either managed or unmanaged.
-   In case of a managed transactional buffer, ABAP EML must be used in the behavior implementation for accessing it. There are special EML variants that can be used in behavior implementations only.

-   The language elements for accessing RAP BOs from any ABAP program are provided by the [ABAP Entity Manipulation Language (EML)](ABENAEML_GLOSRY.html). ABAP EML statements call the operations of a RAP BO that work with the transactional buffer. The operations can be implemented by the managed RAP BO provider or in ABAP behavior implementations (unmanaged).

-   [ABAP for Providing RAP Business Objects](ABENABAP_PROVIDE_RAP_BOS.html)
-   [ABAP for Consuming RAP Business Objects](ABENABAP_CONSUME_RAP_BOS.html)
-   [BDEF Derived Types](ABENRPM_DERIVED_TYPES.html)
-   [ABAP for RAP Business Events](ABENRAP_EVENTS.html)
-   [Other RAP-Related ABAP Language Elements and Topics](ABENABAP_RAP_OTHER.html)

abenabap.html abenabap\_rap.html