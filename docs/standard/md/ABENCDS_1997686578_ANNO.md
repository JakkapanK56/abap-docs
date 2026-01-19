---
title: "ABENCDS_1997686578_ANNO"
description: |
  ABENCDS_1997686578_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1997686578_ANNO.htm"
abapFile: "ABENCDS_1997686578_ANNO.html"
keywords: ["do", "if", "method", "class", "ABENCDS", "1997686578", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

The value of an annotation with translatable texts is saved in special tables that have a language key and are translatable. The value specified in the source code should consist of text in the original language of the CDS source code, and it is translated into the required languages. The methods of the class `CL_DD_DDL_ANNOTATION_SERVICE` read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html) is used as the default. If no text is found for the language, the [secondary language](ABENSECONDARY_LANGUAGE_GLOSRY.html) in AS ABAP is used.

Specifies in an annotation definition that the annotation value is a translatable text that can be translated to different languages.

Specifies the maximum usable length of the text. The recommended length is determined by the length determined in the type. No values greater than the recommended value can be specified. To ensure that there is enough space for all translations. `maxLength` should have a lower value than the technically defined length.

The annotation `LanguageDependency.maxLength` can only be specified for annotations of String with lengths between 10 and 255. This means that it can usually only be used directly in front of subannotations of this type.

*Sample code:*

@LanguageDependency.maxLength : 40\\nannotation label : String(60); **Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `LanguageDependency.maxLength`\\ **Scope** `#ANNOTATION`\\ **Type** `Integer`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_languagedependency\_a.html