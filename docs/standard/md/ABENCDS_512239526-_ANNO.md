---
title: "Annotation Search"
description: |
  searchable : Boolean default true; ; @Scope:#ELEMENT Annotation Search  defaultSearchElement : Boolean default true; ranking : String(6) enum  HIGH = 'high'; MEDIUM = 'medium'; LOW = 'low';  default #MEDIUM; fuzzinessThreshold : Decimal(3,2); termMappingDictionary : String(128);
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_512239526-_ANNO.htm"
abapFile: "ABENCDS_512239526-_ANNO.html"
keywords: ["do", "if", "ABENCDS", "512239526", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Search Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4d876cb0230f4cf6b789156ee8b3099b?version=sap_cross_product_abap).

Search annotations mark a view as searchable. You define the fuzziness threshold as well as the specifics of term mappings at element level.

@Scope:\[#ENTITY\]

Annotation Search

\\{

searchable : Boolean default true;

\\};

@Scope:\[#ELEMENT\]

Annotation Search

\\{

defaultSearchElement : Boolean default true;

ranking : String(6) enum \\{ HIGH = 'high'; MEDIUM = 'medium'; LOW = 'low'; \\} default #MEDIUM;

fuzzinessThreshold : Decimal(3,2);

termMappingDictionary : String(128);

termMappingListId : array of String(32);

\\};

Specify field characteritics regarding a fulltext index.

This annotation is obsolete. Use @Search.textIndex instead.

Indicate that a fulltext index is required for searching on a field.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Search.fulltextIndex.required`\\ **Scope** `#ELEMENT`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `X`\\ **API** `NOT_RELEASED` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_search\_f.html