---
title: "ABENCDS_ANNOTATION_ARRAY_ABEXA"
description: |
  ABENCDS_ANNOTATION_ARRAY_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ANNOTATION_ARRAY_ABEXA.htm"
abapFile: "ABENCDS_ANNOTATION_ARRAY_ABEXA.html"
keywords: ["select", "if", "case", "method", "class", "data", "ABENCDS", "ANNOTATION", "ARRAY", "ABEXA"]
---

This example shows how an [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html) is evaluated in a piece of DDL source code.

The class reads the element annotations of the following CDS view entity:

An [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html)\\ `Consumption.filter.hierarchyBinding` with two elements is assigned to the view field `ID` and each of the elements is structured using three [subannotations](ABENSUB_ANNOTATION_GLOSRY.html)\\ `type`, `value`, and `variableSequence`.

The annotation array is a subannotation of a [framework-specific annotation](ABENCDS_ANNOTATIONS_FRMWRK.html) delivered by SAP and defined as follows in its [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html):

annotation Consumption \\n \\{ \\n\\ \\n   ... \\n\\ \\n   filter \\n   \\{ \\n\\ \\n      ... \\n\\ \\n      hierarchyBinding : array of \\n      \\{ \\n          type: String(12) enum \\{ ELEMENT; \\n                                  PARAMETER; \\n                                  CONSTANT; \\n                                  USER\_INPUT; \\n                                  SYSTEM\_FIELD; \\}; \\n         value : String(512); \\n         variableSequence : Integer; \\n      \\}; \\n   \\}; \\n \\};

In the case of elements of the annotation array, square brackets are specified in the [tabular list](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html) of the framework-specific annotations. These brackets are used as placeholders for the `$` signs used in the internal metadata repository, which enclose the serial index of an array element.

\* Public class definition \\nCLASS cl\_demo\_cds\_annotation\_array DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_annotation\_array IMPLEMENTATION. \\n METHOD main. \\n cl\_dd\_ddl\_analyze=>get\_annotations( \\n EXPORTING ddlnames = VALUE #( ( 'DEMO\_CDS\_ANNOTATION\_ARRAY' ) ) \\n leaves\_only = abap\_true \\n IMPORTING \\n fieldannos = FINAL(annos) ). \\n out->write( annos ). \\n ENDMETHOD. \\nENDCLASS. define view entity demo\_cds\_annotation\_array\\n as select from\\n demo\_expressions\\n \\{\\n @Consumption.filter.hierarchyBinding:\\n \[ \\{ type: #ELEMENT, value: '...', variableSequence: 1 \\},\\n \\{ type: #CONSTANT, value: '...', variableSequence: 2 \\} \]\\n id\\n \\}\\n \* Public class definition \\nCLASS cl\_demo\_cds\_annotation\_array DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_annotation\_array IMPLEMENTATION. \\n METHOD main. \\n cl\_dd\_ddl\_analyze=>get\_annotations( \\n EXPORTING ddlnames = VALUE #( ( 'DEMO\_CDS\_ANNOTATION\_ARRAY' ) ) \\n leaves\_only = abap\_true \\n IMPORTING \\n fieldannos = FINAL(annos) ). \\n out->write( annos ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abencds.html abencds\_annotations.html abencds\_anno\_usage.html abencds\_annotations\_syntax.html