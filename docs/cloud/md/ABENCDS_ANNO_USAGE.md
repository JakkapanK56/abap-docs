---
title: "ABENCDS_ANNO_USAGE"
description: |
  ABENCDS_ANNO_USAGE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ANNO_USAGE.htm"
abapFile: "ABENCDS_ANNO_USAGE.html"
keywords: ["do", "if", "data", "ABENCDS", "ANNO", "USAGE"]
---

[CDS entities](ABENCDS_ENTITY_GLOSRY.html) and [CDS roles](ABENCDS_ROLE_GLOSRY.html) plus [CDS annotation definitions](ABENCDS_ANNO_DEFINITION_GLOSRY.html) themselves can (or must) be annotated with metadata using [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html). This is done by specifying annotations directly in the associated [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html) or in [CDS metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html). The annotations of [CDS metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html) expand (or override) the annotations specified in the source code of a CDS entity.

An annotation is specified in fixed [annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html). This is then checked by the syntax check of the annotated source code. Only those annotations should be specified that are defined as a [CDS object](ABENCDS_ANNO_DEFINITION_GLOSRY.html) in a [CDS annotation definition](ABENCDS_OBJECT_GLOSRY.html). An annotation definition specifies the precise way an annotation must be specified. [ADT](ABENADT_GLOSRY.html) supports the specification of valid annotations (namely annotations with an annotation definition) by using colors in the source code and code completion. The syntax check for the definition of a CDS entity in [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) for CDS entities does not yet evaluate the annotation definitions. [`DDLA` source code](ABENDDLA_SOURCE_CODE_GLOSRY.html) and [`DDLX` source code](ABENDDLX_SOURCE_CODE_GLOSRY.html) also check annotations with respect to their annotation definitions.

-   [CDS annotation syntax](ABENCDS_ANNOTATIONS_SYNTAX.html)
-   [CDS metadata extensions](ABENCDS_META_DATA_EXTENSIONS.html)
-   [Scopes for annotations](ABENCDS_ANNOTATIONS_SCOPES.html)

-   [CDS annotation definitions](ABENCDS_ANNO_DEFINITION_GLOSRY.html) can currently only be made by SAP, which means that only [SAP annotations](ABENSAP_ANNOTATION_GLOSRY.html) should currently be specified in [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html).
-   The program `ABAP_DOCU_CDS_ANNOS_OVERVIEW` shows all SAP annotations and their properties.

abenabap.html abencds.html abencds\_annotations.html