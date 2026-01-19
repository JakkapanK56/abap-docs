---
title: "Annotation Search"
description: |
  searchable : Boolean default true; ; @Scope:#ELEMENT Annotation Search  defaultSearchElement : Boolean default true; ranking : String(6) enum  HIGH = 'high'; MEDIUM = 'medium'; LOW = 'low';  default #MEDIUM; fuzzinessThreshold : Decimal(3,2); termMappingDictionary : String(128);
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1594409060-_ANNO.htm"
abapFile: "ABENCDS_1594409060-_ANNO.html"
keywords: ["do", "if", "ABENCDS", "1594409060", "ANNO"]
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

Runtime: Interpreted by Enterprise Search and SADL

Specifies how relevant the values of an element are for ranking, if the freestyle search terms match the element value.

Usually, such a search must not operate on all elements – for performance reasons, and because not all elements (e.g. internal keys) do qualify for this kind of access.

The element is of high relevancy; this holds usually for ID and their descriptions.

The element is of medium relevancy; this holds usually for other, important element. This is the default.

Although the element is relevant for freestyle search, a hit in this element has no real significance for a result item's ranking.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Search.ranking`\\ **Scope** `#ELEMENT`\\ **Type** `String(6)`\\ **Enums** `#HIGH, #LOW, #MEDIUM`\\ **Default** `#MEDIUM`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_search\_f.html