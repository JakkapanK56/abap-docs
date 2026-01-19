---
title: "ABENCDS_SAP_ANNO_PROPS"
description: |
  ABENCDS_SAP_ANNO_PROPS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SAP_ANNO_PROPS.htm"
abapFile: "ABENCDS_SAP_ANNO_PROPS.html"
keywords: ["if", "data", "ABENCDS", "SAP", "ANNO", "PROPS"]
---

The properties of [SAP annotations](ABENSAP_ANNOTATION_GLOSRY.html) are shown in tables in the above topics. The following points explain the meaning of the table headers:

-   **Kind**
-   [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html) or [framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html). The annotation is handled either by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) or by another framework.
-   **Syntax**
-   Syntax of the annotation, where subannotations are shown via [chainings](ABENCDS_ANNOTATIONS_SYNTAX_NAME.html). If square brackets `[ ]` are specified after a name, this means that the annotation in front of the square brackets is an [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html).
-   **Scope**
-   Scopes where the annotation can be specified. The scopes are shown by the enumeration symbols that are specified in the corresponding annotation definition for the `@Scope` annotation. The topic [Scopes for Annotations](ABENCDS_ANNOTATIONS_SCOPES.html) maps these to source code positions.
-   **Type**
-   Type of the [annotation value](ABENANNOTATION_VALUE_GLOSRY.html).
-   **Enums**
-   Enumeration symbols.
-   **Default**
-   Default value applied during the evaluation when the annotation is specified without a value. This value can differ from the value that is applied when the annotation is not specified at all.
-   \\ **Text**
-   Indicates whether the annotation value is translatable text.
-   **MDE**
-   Indicates whether the annotation can be specified in a [metadata extension](ABENCDS_METADATA_EXTENSION_GLOSRY.html).
-   **API**
-   Indicates whether the annotation is [released as an API](ABENRELEASED_API_GLOSRY.html).

abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html