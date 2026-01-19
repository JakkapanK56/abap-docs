---
title: "ABENCDS_ANNOTATIONS_SAP"
description: |
  ABENCDS_ANNOTATIONS_SAP - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ANNOTATIONS_SAP.htm"
abapFile: "ABENCDS_ANNOTATIONS_SAP.html"
keywords: ["do", "if", "ABENCDS", "ANNOTATIONS", "SAP"]
---

SAP annotations are [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html) created and delivered by SAP as [CDS objects](ABENCDS_OBJECT_GLOSRY.html) in the form of [CDS annotation definitions](ABENCDS_ANNO_DEFINITION_GLOSRY.html).

The annotation definitions determine the following for these objects:

Any SAP annotations specified in [annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html) in [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html) are evaluated by SAP.

ABAP annotations are evaluated when the object defined in the CDS source code is activated or when the object is used in the ABAP runtime framework. Framework-specific annotations, on the other hand, are evaluated by frameworks of other software components. An ABAP annotation can also be evaluated by frameworks of other software components. Any application annotations that are not evaluated by a framework are ignored.

-   The name of the annotation
-   The [annotation values](ABENANNOTATION_VALUE_GLOSRY.html) that can be specified
-   [Subannotations](ABENSUB_ANNOTATION_GLOSRY.html) that can be specified
-   [Annotation arrays](ABENANNOTATION_ARRAY_GLOSRY.html) that can be specified

-   [ABAP CDS - ABAP Annotations](ABENCDS_ANNOTATIONS_ABAP.html)
-   [ABAP CDS - Framework-Specific Annotations](ABENCDS_ANNOTATIONS_FRMWRK.html)
-   [ABAP CDS - SAP Annotation Documentation](ABENCDS_ANNOTATIONS_KTD_DOCU.html)
-   [ABAP CDS - Annotation Properties](ABENCDS_SAP_ANNO_PROPS.html)

-   Apart from the SAP annotations delivered by SAP, no annotations should currently be specified in [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html).
-   The program `ABAP_DOCU_CDS_ANNOS_OVERVIEW` shows all SAP annotations and their properties.

abenabap.html abencds.html abencds\_annotations.html