---
title: "ABENCDS_26162021_ANNO"
description: |
  ABENCDS_26162021_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_26162021_ANNO.htm"
abapFile: "ABENCDS_26162021_ANNO.html"
keywords: ["do", "if", "case", "method", "class", "ABENCDS", "26162021", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

A tooltip defined with `EndUserText.quickInfo` is not translated for [parameters](ABENCDS_F1_PARAMETER_ANNOTATIONS.html). The text specified after `EndUserText.quickInfo` for a parameter is not saved in the table for translatable texts. This is only the case for parameters and is an exception. If specified in any other position, tooltips are translated.

Translatable texts of CDS objects.

ABAP annotations introduced using `EndUserText` are used to define translatable semantic texts for a CDS object. The value of such an annotation is saved in special tables that have a language key and are translatable. The value specified in the source code should consist of text in the original language of the CDS source code, and it is translated into the required languages. The methods of the class `CL_DD_DDL_ANNOTATION_SERVICE` read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the text environment language is used as the default. If no text is found for the language, the secondary language of the AS ABAP is used.

Translatable tooltip of a CDS object or element.

String with maximum 100 characters.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `EndUserText.quickInfo`\\ **Scope** `#ANNOTATE`, `#ELEMENT`, `#ENTITY_ASPECT`, `#ENUM_VALUE`, `#PARAMETER`, `#SIMPLE_TYPE`\\ **Type** `String(100)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `X`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_endusertext\_a.html