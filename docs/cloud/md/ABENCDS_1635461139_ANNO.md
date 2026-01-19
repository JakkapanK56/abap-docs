---
title: "ABENCDS_1635461139_ANNO"
description: |
  ABENCDS_1635461139_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1635461139_ANNO.htm"
abapFile: "ABENCDS_1635461139_ANNO.html"
keywords: ["do", "while", "if", "case", "ABENCDS", "1635461139", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

The CDS model is transformed to an InfoProvider or InfoObject model. The analytic protocols like INA or BICS are based on InfoProvider and InfoObject names. The elements of an analytic CDS view (CUBE, FACT, DIMENSION) are mapped to InfoObject names. If there is an *@ObjectModel.foreignKey.assocation* or *@ObjectModel.text.assocation*, and the target of the association is only used once, the InfoObject name is derived by default from the analytical name the target view (for CDS views this is the SQL-view name for View entities this is the entity name or if present the value of Analytics.technicalName). These names are called #GLOBAL. The InfoObject name for the representative key element of a dimension is always derived from the dimension view. In all other cases, the InfoObject name is derived from the view and the element name. These names are called #LOCAL.

With this annotation, the identifier that is used between BI Tools and the analytic manger can be influenced, meaning that adding *@ObjectModel.foreignKey.association* or *@ObjectModel.text.association* will not change the identifier.

Note:

If multiple elements are used in the ON condition of the foreign key association of an element, and the InfoObject name should be global, all other elements of the ON condition need to be global InfoObject names. This default behavior can be overruled with this annotation.

#DEFAULT

The default is #GLOBAL

#LOCAL

#GLOBAL

-   On **Element** level: The element is assigned to a local InfoObject name. If not possible, an error is raised. This is useful if the annotation *@Object.Model.foreignKey.assocation* should be added to an element of an existing view. The InfoObject name will then not change.
-   On **View** level: All elements for which it is possible will be assigned to a local InfoObject name. If it is used, *@ObjectModel.foreignKey.assocation* / *@ObjectModel.text.assocation* can be added, changed, or removed without changing the InfoObject names.

-   On **Element** level: The element is assigned to an InfoObject with a global name. If not possible, an error is raised. It can be used if there are multiple elements referencing to the same dimension (same target of the foreign key association). In this case, one element can be specified. This is then given the global name, while all others are given local names. If not specified, the first element is given the global name. It is especially useful for an existing element if a new element should be added, which should reference to the same dimension.
-   On **View** level: The default is GLOBAL. All elements for which it is possible will be assigned to a global InfoObject name.

-   On **Element** level: The element is assigned to a local InfoObject name. If not possible, an error is raised. This is useful if the annotation *@Object.Model.foreignKey.assocation* should be added to an element of an existing view. The InfoObject name will then not change.
-   On **View** level: All elements for which it is possible will be assigned to a local InfoObject name. If it is used, *@ObjectModel.foreignKey.assocation* / *@ObjectModel.text.assocation* can be added, changed, or removed without changing the InfoObject names.

-   On **Element** level: The element is assigned to an InfoObject with a global name. If not possible, an error is raised. It can be used if there are multiple elements referencing to the same dimension (same target of the foreign key association). In this case, one element can be specified. This is then given the global name, while all others are given local names. If not specified, the first element is given the global name. It is especially useful for an existing element if a new element should be added, which should reference to the same dimension.
-   On **View** level: The default is GLOBAL. All elements for which it is possible will be assigned to a global InfoObject name.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.internalName`\\ **Scope** `#ELEMENT`, `#ENTITY`, `#VIEW`\\ **Type** `String(30)`\\ **Enums** `#DEFAULT, #GLOBAL, #LOCAL`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`