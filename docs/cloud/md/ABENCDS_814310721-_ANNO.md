---
title: "Annotation OData"
description: |
  @Scope:#ELEMENT etag : Boolean default true; @Scope:#ENTITY entitySet  name : String(30); ; entityType  name : String(128); ; action: array of  name : String(128); localName : String(30); ; property  name : String(128); ; @Scope:#SERVICE schema  name : Stri
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_814310721-_ANNO.htm"
abapFile: "ABENCDS_814310721-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "814310721", "ANNO"]
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

Runtime

Denotes the external name of the entity set for an arbitrary OData service.

Value: String (30)

You can also define the name of the entity set in the service definition by using an alias: expose /DMO/C\_Travel\_U as Travel. The name of the alias in the service definition will be used even if you use the annotation in the CDS view.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `OData.entitySet.name`\\ **Scope** `#ENTITY`\\ **Type** `String(30)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM`