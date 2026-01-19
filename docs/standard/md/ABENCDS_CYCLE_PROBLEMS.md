---
title: "ABENCDS_CYCLE_PROBLEMS"
description: |
  ABENCDS_CYCLE_PROBLEMS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_CYCLE_PROBLEMS.htm"
abapFile: "ABENCDS_CYCLE_PROBLEMS.html"
keywords: ["select", "do", "if", "case", "data", "ABENCDS", "CYCLE", "PROBLEMS"]
---

In ABAP CDS, [CDS entities](ABENCDS_ENTITY_GLOSRY.html) can be defined with mutual dependencies. For example, a [CDS view](ABENCDS_VIEW_GLOSRY.html) accesses a different CDS view as a data source or exposes a CDS view in a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html). A CDS entity that consumes another CDS entity is dependent on the consumed entity. A distinction should be made between the following:

A cyclical dependency (or cycle) is produced if a chain of dependencies starting from one CDS entity leads back to the same CDS entity. Two categories of cyclical dependencies can be distinguished:

A set of CDS entities that exists for a semantic cycle cannot be activated in a single step:

When solving a cycle problem manually in a system, it should be remembered that CDS entities in a cyclical dependency have the same problems after a transport into a target system. This requires consecutive transports of subsets of objects. If this is not possible (if cycle problems cannot be solved manually), the cyclical dependencies in question must be removed from the data model. For example, consumed CDS associations can be replaced by explicit join expressions, which then only produce dependencies where they actually exist.

The following CDS view entities consume each other as data sources, which creates a technical cycle. Both of the views cannot be activated as long as the other view does not exist in an active version. One option is to remove the dependency on the other view from one of the views and then activate both views. If the dependency is then applied again, the view has correct syntax and can be activated.

The cyclical dependency of the following views is produced by [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and has a semantic background.

This means that `test_view2` makes `test_view1` dependent on `test_view3`, which itself is dependent on `test_view1`. The views, however, do not contain any path expressions that characterize the dependencies between `test_view1` and `test_view2` and between `test_view2` and `test_view3` as join expressions on the database, which means there is no technical cycle and they can be activated in principle. Mass activations of all the views, however, is not currently possible. Situations of this type do not usually arise only after transports into target systems and not during the development phase. In this case, activations are only possible manually. This is done by removing the dependency of the view `test_view3` on `test_view2` (by deleting the CDS association `_assoc2` in `test_view2`) and applying the dependency again after the three views are activated. This would have to be done in every target system of a transport.

-   Technical dependencies
-   CDS entities have a technical dependency on each other when the database entities created by their activation are also dependent on each other.
-   Semantic dependencies
-   CDS entities have a semantic dependency on each other when the dependency is produced by metadata not reflected in the database entities in question.

-   Cycle of technical dependencies
-   Once the entities in question are activated, the technical dependencies would also incur a cyclical dependency between the generated database entities. It is not possible to characterize a cyclical dependency between entities on the database and a set of entities joined in this way cannot be activated. Examples:

-   CDS views in which a CDS entity is used as a direct data source and the CDS view is directly or indirectly dependent on this source. CDS entities of this type can usually be detected by syntax errors, since the consumed entities cannot exist in active versions.
-   A CDS view consumes a CDS association from another view in a path expression and a cyclical dependency is detected when the path expression is transformed to a join expression in the database. Usually, the error does not occur until the entity is activated.

-   Cycle caused by semantic dependencies
-   If a cycle contains semantic dependencies and removing the semantic dependencies would remove the cyclical dependency, activating the entities in question does not produce a cyclical dependency between the associated database entities. This can be the case when CDS views are joined using CDS associations, but not all CDS associations are characterized by consuming path expressions. Sets of entities that have dependencies like this can be activated.

-   In mass activations, an attempt is made to activate the set in multiple steps (if possible). It first attempts an activation without the semantic relationships and then with them. This function does not yet, however, work in all situations.
-   If it is not possible to resolve a semantic cyclical dependency using step-by-step activations, a cycle problem exists and it can only be solved by intervening manually. Here, CDS source code must be modified manually before individual activation steps to remove the semantic dependencies temporarily.

-   To avoid activation problems, cyclical dependencies should be kept to a minimum, even if the CDS entities in question could in principle be activated. The data model should enable a hierarchical view of the data and in this way remove the need for cyclical dependencies, even if they are not characterized on the database.
-   A solution for full resolution of semantic cyclical dependencies using step-by-step activation in mass activation of CDS entities is currently being developed and will be shipped in a future release.
-   [Dictionary objects](ABENDICTIONARY_OBJECT_GLOSRY.html) can have semantic dependencies on each other but no technical dependencies. DDIC table views, for example, cannot contain other views as data sources. Semantic references, however, are possible, for example using foreign key relationships or value tables. Mass activations of dictionary objects resolve any semantic cyclical dependencies using step-by-step activation.

-   The view `test_view1` defines and exposes a CDS association `_assoc1` with the view `test_view2`.
-   The view `test_view2` defines and exposes a CDS association `_assoc2` with the view `test_view3`.
-   The view `test_view3` consumes `test_view1` as a data source and consumes its CDS association `_assoc1` in a specified path.

define view entity test\_view1 as \\n select from \\n test\_view2 \\n \\{ elem1, elem2 \\} define view entity test\_view2 as \\n select from \\n test\_view1 \\n \\{ elem1, elem2 \\} define view entity test\_view1 as \\n select from \\n table1 \\n association to test\_view2 as \_assoc1 \\n on table1.field = \_assoc1.field \\n \\{ \_assoc1, \\n field \\} \\n\\ \\ndefine view entity test\_view2 as \\n select from \\n table2 \\n association to test\_view3 as \_assoc2 \\n on table2.field = \_assoc2.field \\n \\{ \_assoc2, \\n field \\} \\n\\ \\ndefine view entity test\_view3 as \\n select from \\n test\_view1 \\n \\{ \_assoc1.field \\} abenabap.html abencds.html abencds\_entities.html