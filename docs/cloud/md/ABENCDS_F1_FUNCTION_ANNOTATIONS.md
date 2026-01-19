---
title: "ABENCDS_F1_FUNCTION_ANNOTATIONS"
description: |
  ABENCDS_F1_FUNCTION_ANNOTATIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_FUNCTION_ANNOTATIONS.htm"
abapFile: "ABENCDS_F1_FUNCTION_ANNOTATIONS.html"
keywords: ["if", "class", "data", "ABENCDS", "FUNCTION", "ANNOTATIONS"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) in the definition of a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) in front of the statement [`DEFINE TABLE FUNCTION`](ABENCDS_F1_DEFINE_TABLE_FUNCTION.html) as a function notation. The character `@` must be placed in front of the name `annotation` of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). In the annotation definition, the annotation `@Scope` should be used with the value `#TABLE_FUNCTION`.

For `annotation`, both [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be specified that are available for this scope. For framework-specific annotations, refer to [Framework-Specific Annotation Syntax](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html).

The following is a list of the ABAP annotations for the current scope:

-   AbapCatalog Annotations

-   `[AbapCatalog.dataMaintenance](ABENCDS_67699033-_ANNO.html)`

-   AccessControl Annotations

-   `[AccessControl.authorizationCheck](ABENCDS_1180334353_ANNO.html)`

-   ClientHandling Annotations

-   `[ClientHandling.type](ABENCDS_613831553_ANNO.html)`
-   `[ClientHandling.algorithm](ABENCDS_1114072352_ANNO.html)`
-   `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)`

-   ObjectModel Annotations

-   `[ObjectModel.usageType.dataClass](ABENCDS_1091668137-_ANNO.html)`
-   `[ObjectModel.usageType.serviceQuality](ABENCDS_1255374604-_ANNO.html)`
-   `[ObjectModel.usageType.sizeCategory](ABENCDS_1163152301_ANNO.html)`

-   Alongside the function annotations shown here, the globally valid [entity annotations](ABENCDS_F1_ENTITY_ANNOTATIONS.html) can also be specified for a table function.
-   The annotations `AccessControl` and `ObjectModel` have further [framework-specific subannotations](ABENCDS_ANNOTATIONS_FRMWRK.html).
-   Special rules for [Client Handling in CDS Table Functions](ABENCDS_FUNC_CLIENT_HANDLING.html):

-   For the annotation `ClientHandling.type` only the enumeration values `#CLIENT_DEPENDENT` and `#CLIENT_INDEPENDENT` can be specified in table function definitions. Especially, `#INHERITED` cannot be used.
-   For the annotation `ClientHandling.algorithm` only the enumeration values `#NONE` and `#SESSION_VARIABLE` can be specified in table function definitions and the latter can be used only together with `ClientHandling.type: #CLIENT_INDEPENDENT`.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_table\_functions.html abencds\_f1\_define\_table\_function.html