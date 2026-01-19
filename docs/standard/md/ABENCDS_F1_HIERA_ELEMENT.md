---
title: "ABENCDS_F1_HIERA_ELEMENT"
description: |
  ABENCDS_F1_HIERA_ELEMENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_HIERA_ELEMENT.htm"
abapFile: "ABENCDS_F1_HIERA_ELEMENT.html"
keywords: ["select", "do", "if", "case", "data", "internal-table", "ABENCDS", "HIERA", "ELEMENT"]
---

``... [[`@element_annot1`](ABENCDS_F1_HIERA_ELEM_ANNOTATION.html)]\      [[`@element_annot2`](ABENCDS_F1_HIERA_ELEM_ANNOTATION.html)]\      ...         [KEY]\ \{ _assoc                   [AS alias]\ \}\             |\ \{ element                  [AS alias]\ \}\             |\ \{ $node.hierarchy_attribute AS alias  \}\      [[`@<element_annot1`](ABENCDS_F1_HIERA_ELEM_ANNOTATION.html)]\      [[`@<element_annot2`](ABENCDS_F1_HIERA_ELEM_ANNOTATION.html)]  ...``

[1. `... _assoc`](#ABAP_ALTERNATIVE_1@2@)

[2. `... element`](#ABAP_ALTERNATIVE_2@2@)

[3. `... $node.hierarchy_attribute`](#ABAP_ALTERNATIVE_3@2@)

[1. `... @element_annot ... @<element_annot`](#ABAP_ADDITION_1@3@)

[2. `... KEY`](#ABAP_ADDITION_2@3@)

[3. `... AS alias`](#ABAP_ADDITION_3@3@)

Specifies an element in the [element list](ABENCDS_F1_HIERA_ELEMENT_LIST.html) of a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html). The names of the elements in a CDS hierarchy must be unique and must be in the same namespace as the [parameters](ABENCDS_F1_HIERA_PARAMETER_LIST.html) of the CDS hierarchy.

`_assoc` can be used to make the CDS hierarchy expose a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) that itself is exposed by the CDS view `cds_view` specified after [`SOURCE`](ABENCDS_F1_DEFINE_HIERARCHY.html) in its `SELECT` list. The name of a CDS association can be specified for `_assoc` but path expressions are not possible.

The CDS hierarchy exposes the CDS association for use in CDS views or in ABAP SQL:

The current CDS hierarchy is the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) of the exposed CDS association and any join expressions created for a path expression from the CDS association use the current CDS hierarchy as their left side. All fields of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) of the CDS association that occur in the `ON` condition must also be specified as elements of the current element list.

A CDS association exposed in this way is, like any element, part of the element list. It is not, however, part of the result set or a component of a type defined in ABAP with respect to the CDS hierarchy. If no alternative element name `alias` is defined, the element name is defined by the name of the CDS association.

When a CDS association is exposed, care should be taken that the exposing hierarchy itself is the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) of the exposed CDS association and not the data source of the view. More specifically, when CDS associations are exposed that were already exposed by the source of the hierarchy, the hierarchy replaces the original view as the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) of the CDS association. The left side of an instance of a join expression created for the exposed CDS association is the result set of the hierarchy.

`element` can be used to specify an element of the CDS view `cds_view` specified after [`SOURCE`](ABENCDS_F1_DEFINE_HIERARCHY.html). This element is part of the result set of the CDS hierarchy and a component of a type defined in ABAP with respect to the CDS hierarchy.

When the hierarchy is accessed in [ABAP SQL](ABENABAP_SQL_GLOSRY.html), the element is a regular component of the [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) in the results list, if `*` or `...~*` are used in the `SELECT` list.

`$node.hierarchy_attribute` can be used to specify a [hierarchy attribute](ABENHIERARCHY_ATTRIBUTE_GLOSRY.html)\\ `hierarchy_attribute` after the prefix `$node`. The names of all [hierarchy attributes](ABENCDS_HIERARCHY_ATTRIBUTES.html) can be specified for `hierarchy_attribute`. In this case, `AS ALIAS` must be used to define an alternative element name, which cannot be the name of a hierarchy attribute.

This element is part of the result set of the CDS hierarchy and a component of a type defined in ABAP with respect to the CDS hierarchy. When the CDS hierarchy is accessed, the element contains the respective value of the hierarchy attribute for each row.

Specifies annotations for the element. The annotations can be specified before the element using [`@element_annot`](ABENCDS_F1_HIERA_ELEM_ANNOTATION.html) or after the element using [`@<element_annot`](ABENCDS_F1_HIERA_ELEM_ANNOTATION.html).

Element annotations can be used to annotate the elements and CDS associations of a CDS hierarchy with semantic properties.

`KEY` is used to define the current element as a key element of the current [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html). Those elements of the [element list](ABENCDS_F1_HIERA_ELEMENT_LIST.html) can be defined as key elements that are placed without gaps at the start of the list. The key elements of the CDS entity are evaluated as follows if they are used as a data source of a [`SELECT`](ABAPSELECT.html) statement in ABAP SQL:

Otherwise, the key elements of the CDS entity are used to document the semantics of the data model. The addition `KEY` is then ignored when the CDS hierarchy is activated and when other accesses are performed in program executions.

**Caution** The key elements of a CDS entity do not define unique lines in its result with regard to the key. An application or framework accessing a CDS entity must expect duplicate entries for the key fields in the result set. If the lines of a result set should be unique in respect to a set of key elements, it is the task of the application or framework that provides the CDS entity to define them appropriately and to document the view accordingly.

Defines an alternative element name for the current element. The alternative element name replaces the actual name of the element. When the current CDS hierarchy is accessed, the alternative element names must be used instead of the actual name.

-   A CDS view can evaluate the CDS association in its path expressions ([CDS DDIC-based view (obsolete)](ABENCDS_PATH_EXPRESSION_V1.html), [CDS view entity](ABENCDS_PATH_EXPRESSION_V2.html)).
-   The CDS association can be used in ABAP SQL [path expressions](ABENABAP_SQL_PATH.html).

-   When the hierarchy is defined in [ABAP SQL](ABENABAP_SQL_GLOSRY.html), the element is a regular component of the [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) in the results list, if `*` or `...~*` are used in the `SELECT` list.
-   When the hierarchy is accessed in [ABAP SQL](ABENABAP_SQL_GLOSRY.html), the associated additional [hierarchy column](ABENHIERARCHY_COLUMN_GLOSRY.html) can be used to access the hierarchy attribute.
-   It is practical to include a hierarchy attribute in the element list of a CDS hierarchy explicitly either if it is required when other CDS entities access the CDS hierarchy, or if it is a component of a structured type in ABAP that references the CDS hierarchy.

-   By the addition [`ORDER BY PRIMARY KEY`](ABAPORDERBY_CLAUSE.html).
-   In implicit [access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html).
-   If a CDS role defined for a CDS entity is evaluated when the entity is accessed, its key elements must identify a unique row in the result set. If this is not the case, the internal instance of access control can produce duplicate entries or even incorrect results when aggregate functions are used. If a unique key cannot be determined for a CDS entity, no key element should be defined. A different instance of access control is then produced internally, which is less efficient.

-   In the ABAP SQL syntax check, the key elements are used in places where the key is respected.
-   The key elements are not relevant for the uniqueness of rows within the result set of the CDS hierarchy, which means that exceptions can be raised when making assignments to internal tables with appropriately unique table keys.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_hierarchies.html abencds\_f1\_define\_hierarchy.html abencds\_f1\_hiera\_element\_list.html