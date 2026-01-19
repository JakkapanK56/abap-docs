---
title: "ABENCDS_ANNO_DEFINITION"
description: |
  ABENCDS_ANNO_DEFINITION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ANNO_DEFINITION.htm"
abapFile: "ABENCDS_ANNO_DEFINITION.html"
keywords: ["do", "if", "ABENCDS", "ANNO", "DEFINITION"]
---

The [CDS annotations](ABENCDS_SOURCE_CODE_GLOSRY.html) that can be specified in [CDS source code](ABENCDS_ANNOTATION_GLOSRY.html) are governed by [CDS annotation definitions](ABENCDS_ANNO_DEFINITION_GLOSRY.html). A CDS annotation definition defines a [CDS annotation](ABENCDS_ANNOTATION_GLOSRY.html) as a [CDS object](ABENCDS_OBJECT_GLOSRY.html). It describes how this annotation is intended to be used in [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html). The description covers the following:

An annotation is defined in a separate piece of [DDLA source code](ABENDDLA_SOURCE_CODE_GLOSRY.html) and is transported with this code. DDLA source code for annotation definitions can define exactly one identically named [CDS annotation](ABENCDS_F1_DDLA_SYNTAX.html) using the CDS DDL statement [`DEFINE ANNOTATION`](ABENCDS_F1_DEFINE_ANNOTATION.html) (this annotation can, however, be the main annotation of subannotations). `DDLA` source code of this type can only be edited in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html). `DDLA` source code can also be displayed in [Repository Browser](ABENREPOSITORY_BROWSER_GLOSRY.html) in [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html).

-   The name of a [main annotation](ABENMAIN_ANNOTATION_GLOSRY.html)
-   The possible [annotation values](ABENANNOTATION_VALUE_GLOSRY.html)
-   Whether it can be structured using [subannotations](ABENSUB_ANNOTATION_GLOSRY.html)
-   Whether [annotation arrays](ABENANNOTATION_ARRAY_GLOSRY.html) can be specified

-   The annotations defined as CDS objects are used by the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) for source code coloring and Code Completion when [annotations are specified](ABENCDS_ANNO_USAGE.html).
-   The syntax check for the definition of a CDS entity in [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) for [CDS entities](ABENCDS_ENTITY_GLOSRY.html) does not yet evaluate the annotation definitions. It only checks the correctness of the [annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html).
-   Customers and partners cannot currently define their own annotations. Only [SAP annotations](ABENSAP_ANNOTATION_GLOSRY.html) should currently be used.
-   [SAP Annotations](ABENCDS_ANNOTATIONS_SAP.html) lists all DDLA source code delivered by SAP.

abenabap.html abencds.html abencds\_annotations.html