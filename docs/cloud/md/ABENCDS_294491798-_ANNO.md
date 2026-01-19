---
title: "Annotation Search"
description: |
  searchable : Boolean default true; ; @Scope:#ELEMENT Annotation Search  defaultSearchElement : Boolean default true; ranking : String(6) enum  HIGH = 'high'; MEDIUM = 'medium'; LOW = 'low';  default #MEDIUM; fuzzinessThreshold : Decimal(3,2); termMappingDictionary : String(128);
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_294491798-_ANNO.htm"
abapFile: "ABENCDS_294491798-_ANNO.html"
keywords: ["do", "if", "types", "ABENCDS", "294491798", "ANNO"]
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

Specifies the least level of fuzziness (with regard to some comparison criteria passed at runtime) the element has to have to be considered in a fuzzy search at all.

Usually, such a search must not operate on all elements – for performance reasons, and because not all elements (e.g. internal keys) do qualify for this kind of access.

A fuzzy search enables a certain degree of error tolerance and returns records even if the search term contains additional or missing characters or other types of spelling errors.

Decimal (3,2): The least level of fuzziness the element has to have to be considered in a fuzzy search at all, e.g. 0.7.

The value can be between 0 and 1.

We recommend using the default value 0.7 to start with. Later on, you can fine-tune the search settings based on your experiences with the search. You can also fine-tune the search using feedback collected from your users. A value between 0.7 and 0.99 would be most useful. Use 1 for exact matches.

-   To perform a fuzzy search you have to set the search mode to fuzzy in the customizing settings of your ABAP system. Find the customizing node under SAP NetWeaver Implementation Guide Search and Operational Analytics Enterprise Search Search Configuration Set Parameters for Federated Search.

-   If in the customizing a value for Fuzzy Similarity is present, the value of the parameter Search.fuzzinessThreshold will become void.

-   To perform a fuzzy search you have to set the search mode to fuzzy in the customizing settings of your ABAP system. Find the customizing node under SAP NetWeaver Implementation Guide Search and Operational Analytics Enterprise Search Search Configuration Set Parameters for Federated Search.

-   If in the customizing a value for Fuzzy Similarity is present, the value of the parameter Search.fuzzinessThreshold will become void.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Search.fuzzinessThreshold`\\ **Scope** `#ELEMENT`\\ **Type** `Decimal(3,2)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`