---
title: "Annotation OData"
description: |
  @Scope:#ELEMENT etag : Boolean default true; @Scope:#ENTITY entitySet  name : String(30); ; entityType  name : String(128); ; action: array of  name : String(128); localName : String(30); ; property  name : String(128); ; @Scope:#SERVICE schema  name : Stri
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_767551015_ANNO.htm"
abapFile: "ABENCDS_767551015_ANNO.html"
keywords: ["select", "do", "if", "case", "data", "ABENCDS", "767551015", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`OData Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41629b24a5744795ba0e7884391f6b39?version=sap_cross_product_abap).

Capture OData-related aspects to expose data gained from a CDS entity in an OData service.

Annotation OData

\\{

@Scope:\[#ELEMENT\]

etag : Boolean default true;

@Scope:\[#ENTITY\]

entitySet

\\{

name : String(30);

\\};

entityType

\\{

name : String(128);

\\};

action: array of \\{

name : String(128);

localName : String(30);

\\};

property

\\{

name : String(128);

\\};

@Scope:\[#SERVICE\]

schema

\\{

name : String(128);

\\};

No KTD found

A CDS view is transformed to an auto-aggregating OData V2 entity type with annotation sap:semantics=”aggregate”, if it has one or more properties with a @DefaultAggregation/@Aggregation.default annotation <> #NONE or is annotated with @OData.v2.autoAggregation: true.

An @OData.v2.autoAggregation: false annotation overrules any @DefaultAggregation/@Aggregation.default annotation in the view and guarantees a non-aggregating OData entity type for the view.

\- @OData.v2.autoAggregation not set: Entityset aggregates, if at least one CDS element is a measure (annotated with @Aggregation.default oder @DefaultAggregation on element level and value not equal #NONE). Then measures annotated on lower views are inherited.

\- @OData.v2.autoAggregation: false: Entityset does not aggregate, independent of annotated measures.

\- @OData.v2.autoAggregation: true: Entityset aggregates, if there are CDS elements which are annotated as measures (inherited or not), or in case of no annotated measures a SELECT DISTINCT is performed.

A combination of @OData.v2.autoAggregation:false and @Analytics.query:true is not allowed.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `OData.v2.autoAggregation`\\ **Scope** `#VIEW`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_odata\_f.html