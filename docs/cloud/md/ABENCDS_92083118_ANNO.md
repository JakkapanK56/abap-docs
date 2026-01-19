---
title: "ABENCDS_92083118_ANNO"
description: |
  ABENCDS_92083118_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_92083118_ANNO.htm"
abapFile: "ABENCDS_92083118_ANNO.html"
keywords: ["do", "if", "method", "class", "ABENCDS", "92083118", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Translatable texts of CDS objects.

ABAP annotations introduced using `EndUserText` are used to define translatable semantic texts for a CDS object. The value of such an annotation is saved in special tables that have a language key and are translatable. The value specified in the source code should consist of text in the original language of the CDS source code, and it is translated into the required languages. The methods of the class `CL_DD_DDL_ANNOTATION_SERVICE` read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the text environment language is used as the default. If no text is found for the language, the secondary language of the AS ABAP is used.

Translatable heading of a CDS object.

Character string with maximum 55 characters.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `EndUserText.heading`\\ **Scope** `#SIMPLE_TYPE`\\ **Type** `String(55)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `X`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`