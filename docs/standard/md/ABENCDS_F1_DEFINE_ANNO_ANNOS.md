---
title: "ABENCDS_F1_DEFINE_ANNO_ANNOS"
description: |
  ABENCDS_F1_DEFINE_ANNO_ANNOS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_DEFINE_ANNO_ANNOS.htm"
abapFile: "ABENCDS_F1_DEFINE_ANNO_ANNOS.html"
keywords: ["if", "data", "ABENCDS", "DEFINE", "ANNO", "ANNOS"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) as an annotation definition annotation in front of the statement [`DEFINE ANNOTATION`](ABENCDS_F1_DEFINE_ANNOTATION.html) or in front of a [subannotation](ABENSUB_ANNOTATION_GLOSRY.html) in an [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html). The character `@` must be placed in front of the name `annotation` of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). In the annotation definition, the annotation `@Scope` must be specified using the value `#ANNOTATION`.

The annotations of an annotation definition can be specified in front of the name of the [main annotation](ABENMAIN_ANNOTATION_GLOSRY.html) and in front of the names of [subannotations](ABENSUB_ANNOTATION_GLOSRY.html). If an annotation is not specified directly in front of a subannotation, it is inherited by the next higher annotation in the hierarchy.

For `annotation`, both [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be specified that are available for this scope. For framework-specific annotations, refer to [Framework-Specific Annotation Syntax](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html).

The following is a list of the ABAP annotations for the current scope:

When specified, the annotation `@CompatibilityContract` can be governed by framework-specific conditions, such as the features of analytic frameworks that consume CDS views. SAP reserves the right to modify `@CompatibilityContract` if these framework-specific conditions change.

Example of the use of the annotation `@CompatibilityContract` in an [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). The annotation that follows can be used in CDS entities with the release contract `c1`. Here, it can added and removed even after the release of a CDS entity and the annotation values can be modified. It cannot be used in CDS entities with the release contract `c0` and `c2`.

-   AbapAnnotation Annotations

-   `[AbapAnnotation.definitionHidden](ABENCDS_1616694372-_ANNO.html)`

-   API Annotations

-   `[API.state](ABENCDS_213745370-_ANNO.html)`

-   CompatibilityContract Annotations

-   `[CompatibilityContract.c0.usageAllowed](ABENCDS_1698583913-_ANNO.html)`
-   `[CompatibilityContract.c1.usageAllowed](ABENCDS_130960353_ANNO.html)`
-   `[CompatibilityContract.c2.usageAllowed](ABENCDS_2075094586_ANNO.html)`
-   `[CompatibilityContract.c0.allowedChanges.annotation](ABENCDS_1748011752_ANNO.html)`
-   `[CompatibilityContract.c1.allowedChanges.annotation](ABENCDS_113021353_ANNO.html)`
-   `[CompatibilityContract.c2.allowedChanges.annotation](ABENCDS_1255621526-_ANNO.html)`
-   `[CompatibilityContract.c0.allowedChanges.value](ABENCDS_1655423479-_ANNO.html)`
-   `[CompatibilityContract.c1.allowedChanges.value](ABENCDS_1971561783-_ANNO.html)`
-   `[CompatibilityContract.c2.allowedChanges.value](ABENCDS_1291520119-_ANNO.html)`

-   LanguageDependency Annotations

-   `[LanguageDependency.maxLength](ABENCDS_1997686578_ANNO.html)`

-   MetadataExtension Annotations

-   `[MetadataExtension.usageAllowed](ABENCDS_1537649007_ANNO.html)`

-   Scope Annotations

-   `[Scope](ABENCDS_1049724201-_ANNO.html)`

@CompatibilityContract: \\{ \\n c0: \\{ usageAllowed: false \\}, \\n c1: \\{ usageAllowed: true, \\n allowedChanges.annotation: \[ #ANY \], \\n allowedChanges.value: \[ #ANY \] \\}, \\n c2: \\{ usageAllowed: false \\} \\} abenabap.html abencds.html abencds\_annotations.html abencds\_anno\_definition.html abencds\_f1\_ddla\_syntax.html abencds\_f1\_define\_annotation.html