---
title: "ABENCDS_ASSOCIATION_V1"
description: |
  ABENCDS_ASSOCIATION_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ASSOCIATION_V1.htm"
abapFile: "ABENCDS_ASSOCIATION_V1.html"
keywords: ["select", "if", "case", "data", "types", "ABENCDS", "ASSOCIATION"]
---

[CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) offer an advanced modelling capability for CDS data models. A CDS association defines a relationship between two [CDS entities](ABENCDS_ENTITY_GLOSRY.html). A CDS association can be used to include fields from the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) in the current view, and/or it can be published for usage in other CDS entities or in ABAP SQL.

As soon as an association is used in a [path expression](ABENPATH_EXPRESSION_GLOSRY.html), for example, to specify a field from the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) in the element list of a view, it is internally transformed into a [join](ABENJOIN_GLOSRY.html). So technically, a CDS association is instantiated as join. The benefit of a CDS association compared to a join is that it can be reused in different positions and that it renders the task of coding complex [join expressions](ABENJOIN_EXPRESSION_GLOSRY.html) superfluous. Further details about the use cases of CDS associations and by which join type they are represented are explained in the topic below about CDS associations and joins.

[Compositions](ABENCDS_COMPOSITION_GLOSRY.html) are special kinds of CDS associations. A CDS composition consists of a [CDS to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) and a [CDS to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) and it defines an existential dependency of the composition child to its composition parent. For example, a sales order item (composition child) always belongs to a sales order header (composition parent).

For an overview of all possible association targets of all CDS entities that can define associations, see [Data Source Matrix](ABENCDS_DATA_SOURCE_MATRIX.html).

For further details, read the following sections:

-   [Details on CDS Associations: Use cases and Join types](ABENCDS_ASSOC_JOIN_V1.html)
-   [Association](ABENCDS_SIMPLE_ASSOCIATION_V1.html)
-   [Composition](ABENCDS_COMPOSITION_V1.html)
-   [To-parent Association](ABENCDS_TO_PARENT_ASSOC_V1.html)

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html