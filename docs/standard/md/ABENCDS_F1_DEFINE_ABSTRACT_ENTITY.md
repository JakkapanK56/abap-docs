---
title: "ABENCDS_F1_DEFINE_ABSTRACT_ENTITY"
description: |
  ABENCDS_F1_DEFINE_ABSTRACT_ENTITY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_DEFINE_ABSTRACT_ENTITY.htm"
abapFile: "ABENCDS_F1_DEFINE_ABSTRACT_ENTITY.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "ABENCDS", "DEFINE", "ABSTRACT", "ENTITY"]
---

``[[`@entity_annot1`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  [[`@entity_annot2`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  ...  [DEFINE]\ [ROOT] ABSTRACT ENTITY abstract_entity           [[`parameter_list`](ABENCDS_F1_ENTITY_PARAMETER_LIST.html)]\            [`element_list`](ABENCDS_F1_ABSENT_ELEMENT_LIST.html)[;]``

Defines an [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html)\\ `abstract_entity` in [CDS DDL](ABENCDS_DDL_GLOSRY.html). When a CDS abstract entity is activated, its metadata is created but no other object instances are created on the database or in AS ABAP. The name `abstract_entity` must comply with the naming conventions for [dictionary types](ABENDDIC_DATA_TYPES.html) and can have a maximum of 30 characters.

A CDS abstract entity can be used as a global structured type in ABAP programs. The entity is located in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP. The elements of the CDS abstract entity define the components of the global structured type that can be referenced in ABAP programs using `TYPE`. As is the case for any CDS entity, the annotations of a CDS abstract entity can be [evaluated](ABENCDS_SEMANTICS_ANNOTATION_ABEXA.html).

In ABAP CDS, the keyword `ROOT` is used to define the CDS abstract entity `abstract_entity` as a [root entity](ABENROOT_ENTITY_GLOSRY.html) of the hierarchy of a [business object](ABENBUSINESS_OBJECT_GLOSRY.html). The following applies to the root entity:

The following DDL source code shows a CDS abstract entity:

The class `CL_DEMO_CDS_ABSTRACT_ENTITY` demonstrates the following:

-   [`@entity_annot`](ABENCDS_F1_ENTITY_ANNOTATIONS.html) can be used to specify optional [annotations](ABENCDS_ANNOTATION_GLOSRY.html) for the CDS abstract entity.
-   [`parameter_list`](ABENCDS_F1_ENTITY_PARAMETER_LIST.html) is used to declare a list of optional input parameters for the CDS abstract entity.
-   [`element_list`](ABENCDS_F1_ABSENT_ELEMENT_LIST.html) is used to declare elements, CDS associations, CDS to-child associations, and CDS-to-parent associations of the CDS abstract entity.

-   There is exactly one root entity in the structure of a business object.
-   A root entity can have [child entities](ABENCHILD_ENTITY_GLOSRY.html) defined by means of [to-child associations](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) using the keyword [`COMPOSITION`](ABENCDS_ABSENT_COMPOSITION.html), but this is not mandatory. A root entity can also be a [leaf entity](ABENLEAF_ENTITY_GLOSRY.html).
-   A root entity does not have a [parent entity](ABENPARENT_ENTITY_GLOSRY.html). [To-parent](ABENCDS_ABSENT_TO_PARENT_ASSOC.html) associations are not allowed in root entities.

-   A CDS abstract entity cannot be used as a data source in other CDS entities or in ABAP SQL.
-   The [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) of a CDS abstract entity must have the same name as this entity.
-   No ABAP Dictionary [DDIC structure](ABENDDIC_STRUCTURES.html) visible in the [tools](ABENDDIC_TOOLS.html) for structures is created for a CDS abstract entity.

-   The structure of the CDS abstract entity can be evaluated using [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html) methods.
-   The annotations of the CDS abstract entity can be [evaluated](ABENCDS_ANNOTATIONS_ANALYSIS.html) using the class `CL_DD_DDL_ANNOTATION_SERVICE`.
-   The structure of the CDS abstract entity can be used as a data type in the ABAP program.

@EndUserText.label: 'Abstract CDS Entity'\\n@Metadata.allowExtensions: false\\ndefine abstract entity demo\_cds\_abstract\_entity\\n \\{\\n key col1 : abap.char(3);\\n col2 : abap.int4;\\n col3 : abap.string;\\n col4 : DEMO\_BT\_CHAR\_TEXT;\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_abstract\_entities.html