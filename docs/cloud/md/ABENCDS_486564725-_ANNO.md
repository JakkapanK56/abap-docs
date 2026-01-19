---
title: "ABENCDS_486564725-_ANNO"
description: |
  ABENCDS_486564725-_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_486564725-_ANNO.htm"
abapFile: "ABENCDS_486564725-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "486564725", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`ObjectModel Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap).

ObjectModel annotations provide definitions of text-related aspects of the CDS-based data model.

This annotation and the related modeling pattern resemble the pattern for language-dependent texts: The annotation @ObjectModel.text.association at the dimension key leads to a unique entity with supported capability LANGUAGE\_DEPENDENT\_TEXT, which is then used at runtime to lookup the text.

The Analytic Engine supports unit conversion with dimension-specific rates. Overall the entities containing unit conversion rates can be found via the corresponding supported capability (see \[2023-08-01\] @ObjectModel.\[modelingPattern|supportedCapabilities\]: #UNIT\_CONVERSION\_RATE).

However, in an Analytical Dimension (i.e. an entity with the capability ANALYTICAL\_DIMENSION), maximum one entity can be used for the dimension-specific unit conversion.

For a simple and explicit declaration of this relation, the dimension entity shall contain an association to the applicable unit conversion rate entity, and the representative key element of the dimension shall be annotated with the appropriate association.

The annotation then serves two purposes: (1) indicate that dimension-specific unit conversion rates shall be supported at runtime, (2) find the (unique) entity to look up the unit conversion rates (which is the target of the unitConversionRate.association).

The annotated association leads to a target entity which contains unit conversion rates. In an Analytical Dimension the annotation indicates that these rates shall be used to offer dimension-specific unit conversion in analytical queries at runtime.

The target entity of the annotated association must support the capability UNIT\_CONVERSION\_RATE. All keys of the (source) entity must be mapped to keys of the target entity in the on-condition of the association.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `ObjectModel.unitConversionRate.association`\\ **Scope** `#ELEMENT`\\ **Type** `AssociationRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`