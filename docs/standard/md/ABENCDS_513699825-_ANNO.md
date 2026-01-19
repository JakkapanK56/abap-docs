---
title: "Annotation OData"
description: |
  @Scope:#ELEMENT etag : Boolean default true; @Scope:#ENTITY entitySet  name : String(30); ; entityType  name : String(128); ; action: array of  name : String(128); localName : String(30); ; property  name : String(128); ; @Scope:#SERVICE schema  name : Stri
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_513699825-_ANNO.htm"
abapFile: "ABENCDS_513699825-_ANNO.html"
keywords: ["do", "if", "case", "data", "ABENCDS", "513699825", "ANNO"]
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

The parent-child hierarchy can be defined in two ways. The first is a hierarchy based directly on the master data/dimension entity, for example, employees and managers. In this case, the hierarchy is time dependent if the master data entity is as well. The second is a specific hierarchy view. Here, the recursion can be defined on abstract keys and several hierarchies may exist. With abstract keys, the nodes could be different business entities and it is possible that leaves belong to multiple parent nodes. These features are not available when the hierarchy is defined directly in the master data. In this scenario, the relation between the node and parent node can depend on the time independent of the time dependency of the dimension.

The second is a specific hierarchy view. Here, the recursion can be defined on abstract keys and several hierarchies may exist. With abstract keys, the nodes could be different business entities and it is possible that leaves belong to multiple parent nodes. These features are not available when the hierarchy is defined directly in the master data. In this scenario the relation between the node and parent node can depend on the time independent of the time dependency of the dimension.

An example for a parent-child hierarchy is the “Employee” master data. A “Manager” is an “Employee” and almost every “Employee” is assigned to a “Manager”.

\- Hierarchy.parentChild.recurse.child: If the underlying view definition does not contain an association defining the parent-child relationship but only “normal” elements, this annotation has to be used to define the children.

Scope: #VIEW Type: Array of ElementRef. The element names define the key elements of the "child".

Evaluation Runtime (Engine): Analytic manager

\- Hierarchy.parentChild.recurse.parent: If the underlying view definition does not contain an association defining the parent-child relationship but only “normal” elements, this annotation has to be used to define the parents.

Scope: #VIEW

Type: Array of ElementRef. The element names define the key elements of the "parent".

Evaluation Runtime (Engine): Analytic manager

\- Hierarchy.parentChild.recurseBy: Defines the parent-child relationship in a hierarchy based on an existing association from hierarchy node to its parent node in the same view.

Scope: #VIEW

Type: ElementRef. The name of the parent-child association needs to be specified here.

Evaluation Runtime (Engine): Analytic manager

No KTD found

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `OData.hierarchy.recursiveHierarchy[ ].nodeElement`\\ **Scope** `#ENTITY`\\ **Type** `ElementRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_odata\_f.html