---
title: "ABENCDS_META_DATA_EXTENSIONS"
description: |
  ABENCDS_META_DATA_EXTENSIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_META_DATA_EXTENSIONS.htm"
abapFile: "ABENCDS_META_DATA_EXTENSIONS.html"
keywords: ["do", "if", "data", "ABENCDS", "META", "DATA", "EXTENSIONS"]
---

A [CDS metadata extension](ABENCDS_METADATA_EXTENSION_GLOSRY.html) (MDE) adds [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html) to a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) that are not specified in the [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) of the [data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html). Currently, CDS metadata extensions can be created for any [CDS entity](ABENCDS_VIEW_ENTITY.html) except [CDS table functions](ABENCDS_TABLE_FUNCTIONS.html).

A CDS metadata extension is a [CDS object](ABENCDS_OBJECT_GLOSRY.html) that is defined and transported in a separate piece of [DDLX source code](ABENDDLX_SOURCE_CODE_GLOSRY.html). These pieces of DDLX source code can only be edited in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html).

Alongside the [CDS DDL statements for data definitions](ABENCDS_F1_DDL_SYNTAX.html), there is a CDS DDL statement for defining metadata extensions in DDLX source code. A prerequisite for extending a CDS entity with metadata extensions is that the annotation `@Metadata.allowExtensions` (with the default value `true`) is specified in the DDL source code of the CDS entity.

A CDS entity can have more than one CDS metadata extension. The following rules determine which metadata extension to use to evaluate the annotations:

For more information, see the following:

-   Each metadata extension is assigned to a layer, such as branch, partner, or customer. The layer determines the priority of the evaluation.

-   [DDL for Metadata Extensions](ABENCDS_F1_DDLX_SYNTAX.html)
-   [Evaluation of Metadata Extensions](ABENCDS_META_DATA_EXTENSION_EVAL.html)

-   The [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) and the activation of a CDS entity are completely independent of any metadata extensions for this entity. For this reason, a metadata extension can only add annotations that are not already evaluated during the activation of the CDS entity.
-   Metadata extensions separate the way metadata is specified from the actual data definition. Specifying the annotations that are not required to activate a CDS entity outside the DDL source code of the CDS entity has the following advantages:

-   It greatly improves the readability of the DDL source code of a data definition if it does not have to list all the metadata.
-   The metadata can be specified and transported independently of the data definition.
-   Separating the activation of metadata from the data definition avoids the need for mass activation of dependent repository objects that can occur when activating a data definition.

-   When using metadata extensions for [framework-specific annotations](ABENCDS_ANNOTATIONS_FRMWRK.html), note the relevant rules. Otherwise error messages can occur during framework-specific checks.
-   Layers allow frameworks, partners, and customers to override the metadata of a CDS entity without making modifications.
-   Metadata extensions can be connected to the [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html), making them switchable.

abenabap.html abencds.html abencds\_annotations.html abencds\_anno\_usage.html