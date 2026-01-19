---
title: "ABENCDS_TDL"
description: |
  ABENCDS_TDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_TDL.htm"
abapFile: "ABENCDS_TDL.html"
keywords: ["do", "if", "data", "types", "ABENCDS", "TDL"]
---

[CDS type definitions](ABENCDS_TYPE_DEFINITION_GLOSRY.html) are defined in the CDS type definition language ([CDS TDL](ABENCDS_TDL_GLOSRY.html)) of [ABAP CDS](ABENABAP_CDS_GLOSRY.html) using the statement [`DEFINE TYPE`](ABENCDS_DEFINE_TYPE.html). The following [CDS user-defined types](ABENCDS_USER_DEFINED_TYPE_GLOSRY.html) are available:

When [TDL source code](ABENTDL_SOURCE_CODE_GLOSRY.html) with a CDS type definition is activated, the CDS type is created in form of a metadata representation in system tables. The CDS types themselves are not transported. Instead they are created after the transport of a TDL source code when this code is activated in the target system. Each CDS type is defined in a separate piece of TDL source code in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html). In the development tools, CDS types are only visible as CDS definitions in their TDL source code. The [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) and other frameworks access the internal metadata of CDS types. For example, the ABAP runtime framework recognizes a CDS type as a [global type](ABENGLOBAL_TYPE_GLOSRY.html). Therefore, the name of a CDS type must be unique.

CDS types can be enriched with metadata using [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html).

CDS types can be released as stable APIs under the following release contracts:

For details, see the topic [Contract Checks for Released APIs](ABENRESTRICTED_APIS_ATC_CHECKS.html).

The following sections describe the possible CDS types and the associated TDL statements:

-   [CDS simple types](ABENCDS_SIMPLE_TYPE_GLOSRY.html) for defining [elementary data types](ABENELEMENTARY_DATA_TYPE_GLOSRY.html).
-   [CDS enumerated types](ABENCDS_ENUM_TYPE_GLOSRY.html) for defining [enumerated types](ABENENUM_TYPE_GLOSRY.html).

-   [C1 contract, system internal use](ABENC1_CONTRACT_GLOSRY.html)
-   [C2 contract, use as remote API](ABENC2_CONTRACT_GLOSRY.html)

-   [CDS simple types](ABENCDS_SIMPLE_TYPES.html)
-   [CDS enumerated types](ABENCDS_ENUMERATION_TYPES.html)

-   CDS types are in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP.
-   Once a piece of TDL source code has been activated, its name is stable and cannot be changed.
-   The TDL source code of a type definition for a CDS type is edited in a different editor than the [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) of a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html), the [DDLA source code](ABENDDLA_SOURCE_CODE_GLOSRY.html) of a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html), the [DDLX source code](ABENDDLX_SOURCE_CODE_GLOSRY.html) of a [CDS metadata extension](ABENCDS_METADATA_EXTENSION_GLOSRY.html), and the [DCL source code](ABENDCL_SOURCE_CODE_GLOSRY.html) of a [CDS role](ABENCDS_ROLE_GLOSRY.html) for [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html). The [ADT](ABENADT_GLOSRY.html) documentation describes how to create the different types of source code.
-   [CDS metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html) are not supported for CDS types. If required, metadata extensions can be added to a CDS type when the simple type is used in another CDS object, such as a CDS view entity.

abenabap.html abencds.html