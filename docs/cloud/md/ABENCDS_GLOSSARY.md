---
title: "ABENCDS_GLOSSARY"
description: |
  ABENCDS_GLOSSARY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_GLOSSARY.htm"
abapFile: "ABENCDS_GLOSSARY.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "ABENCDS", "GLOSSARY"]
---

In the following, terms of the ABAP Glossary are listed that are relevant for ABAP CDS.

**ABAP annotation**

[SAP annotation](ABENSAP_ANNOTATION_GLOSRY.html) that can be specified in [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html) and that is evaluated by the ABAP Core Data Services framework, namely the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) itself. Any other [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html) are [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) and must be evaluated by their own frameworks.

**ABAP CDS**

*\->*\\ [ABAP Core Data Services](ABENABAP_CORE_DATA_SERVICES_GLOSRY.html)

**ABAP Core Data Services**

ABAP CDS for short. An infrastructure for defining and consuming semantically rich data models on [AS ABAP](ABENAS_ABAP_GLOSRY.html). ABAP CDS provides different languages for defining metadata realized as [CDS objects](ABENCDS_OBJECT_GLOSRY.html). ABAP CDS is based on SQL but provides more features and sublanguages than SQL.

**ABAP tuning object**

Synonym for app-server tuning object. A [tuning object](ABENTUNING_OBJECT_GLOSRY.html) that defines the technical settings for a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) on [AS ABAP](ABENAS_ABAP_GLOSRY.html). ABAP tuning objects are defined as [CDS objects](ABENCDS_OBJECT_GLOSRY.html) in [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html). Currently, there are the following ABAP tuning objects:

**aggregate**

The result of an [aggregate function](ABENAGGREGATE_FUNCTION_GLOSRY.html). Can be determined using aggregate functions in an ABAP SQL [`SELECT`](ABAPSELECT.html) statement or in the [`SELECT`](ABENCDS_AGGREGATE_FUNCTIONS_V2.html) list of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html).

**aggregate expression**

In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) or in [CDS DDL](ABENCDS_DDL_GLOSRY.html), an aggregate expression uses an [aggregate function](ABENAGGREGATE_FUNCTION_GLOSRY.html) to determine a value from the values of a column of the result set of a [query](ABENASQL_QUERY_GLOSRY.html).

**aggregate function**

A function that processes multiple values together and returns a single value as a result. The calculation is done in the [database system](ABENDATABASE_SYSTEM_GLOSRY.html). An aggregate function can be used in an [aggregate expression](ABENAGGREGATE_EXPRESSION_GLOSRY.html). In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), it can also be used as a [window function](ABENWINDOW_FUNCTION_GLOSRY.html) in a [window expression](ABENWINDOW_EXPRESSION_GLOSRY.html), and in a [hierarchy aggregate navigator](ABENHIERARCHY_AGG_NAVI_GLOSRY.html).

**alias name**

A name that is assigned as a substitute name to an element, an object, etc. The following alias names can be defined in ABAP:

**analytical formula**

An analytical formula is an element of a [CDS analytical projection view](ABENCDS_ANALYTICAL_PV_GLOSRY.html) that is added as a new element in the projection layer and performs a calculation.

**analytical scalar function**

[CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) that is evaluated by an analytical runtime environment. Analytical scalar functions can be used in [analytical projection views](ABENCDS_ANALYTICAL_PV_GLOSRY.html) in operand positions that expect a scalar value.

Analytical scalar functions are [system functions](ABENCDS_SYSTEM_FUNC_GLOSRY.html). They can only be defined and implemented internally by SAP. They are available for internal and external use in [CDS analytical queries](ABENCDS_ANALYTIC_QUERY_GLOSRY.html).

For a list of analytical scalar functions delivered by SAP, see [ABAP CDS - Analytical Scalar Functions](ABENCDS_ANA_SCALAR_FUNCTION.html).

**analytical selection**

Also called restricted measure. An analytical selection is an element of a [CDS analytical projection view](ABENCDS_ANALYTICAL_PV_GLOSRY.html) that is newly added in the projection layer. A selection is defined by means of a [selection-related case expression](ABENCDS_CASE_EXPRESSION_APV.html).

**annotation array**

[CDS annotation](ABENCDS_ANNOTATION_GLOSRY.html) defined with the addition `array of` in its [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). When an annotation array is specified in [annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html), any number of similar elements are listed in square brackets [`[ ]`](ABENCDS_ANNOTATIONS_SYNTAX.html).

**annotation value**

A value specified for a [CDS annotation](ABENCDS_ANNOTATION_GLOSRY.html) in the [CDS annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html). The possible values can be specified in the [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) using a type specification, enumeration symbols, and a default value.

**arithmetic expression**

Formulation of an arithmetic calculation.

**arithmetic operator**

Combines two numeric [operands](ABENOPERAND_GLOSRY.html) in an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html).

**association source**

Data source that serves as the source of an [association](ABENASSOCIATION_GLOSRY.html).

**association target**

Data source that serves as the target of an [association](ABENASSOCIATION_GLOSRY.html).

**base type**

Technical storage type of [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html), [enumerated variables](ABENENUMERATED_VARIABLE_GLOSRY.html), and [CDS enumerated elements](ABENCDS_ENUM_ELEMENT_GLOSRY.html). In ABAP CDS, the base type of an [enumerated type](ABENENUM_TYPE_GLOSRY.html) is also used for compatibility checks in cast expressions and in comparisons. In ABAP, the base type of an enumerated type can be used in special conversions using [`CONV`](ABENCONV_CONSTRUCTOR_ENUM.html). A base type is [flat](ABENFLAT_GLOSRY.html), [elementary](ABENELEMENTARY_DATA_TYPE_GLOSRY.html), and has a maximum length of 16 bytes.

**binary floating point literal**

A [numeric literal](ABENNUMERIC_LITERAL_GLOSRY.html) that has the [binary floating point data type](ABENBINFLOAT_GLOSRY.html)\\ [`f`](ABENBUILTIN_TYPES_NUMERIC.html) or [`FLTP`](ABENDDIC_BUILTIN_TYPES.html).

See also:

**built-in function**

A predefined function in ABAP, ABAP SQL, and ABAP CDS.

[Actual parameters](ABENACTUAL_PARAMETER_GLOSRY.html) passed to the [formal parameters](ABENFORMAL_PARAMETER_GLOSRY.html) of built-in functions are called also called [arguments](ABENARGUMENT_GLOSRY.html) of the function.

**byte field literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) of the [byte field type](ABENBYTE_FIELD_TYPE_GLOSRY.html)\\ [`x`](ABENBUILTIN_TYPES_BYTE.html) or [`RAW`](ABENDDIC_BUILTIN_TYPES.html) with the length of the specified bytes. Only [typed](ABENTYPED_LITERAL_GLOSRY.html) byte field literals are available.

See also:

**byte string literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) of the [byte string type](ABENBYTE_STRING_TYPE_GLOSRY.html)\\ [`xstring`](ABENBUILTIN_TYPES_BYTE.html) or [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html).

See also:

**case distinction**

[Control structure](ABENCONTROL_STRUCTURE_GLOSRY.html) with the [control statement](ABENCONTROL_STATEMENT_GLOSRY.html)\\ [`CASE`](ABAPCASE.html) or [`CASE TYPE OF`](ABAPCASE_TYPE.html), [condition expression](ABENCONDITIONAL_EXPRESSION_GLOSRY.html) with the [conditional operator](ABENCONDITIONAL_OPERATOR_GLOSRY.html)\\ [`SWITCH`](ABENCONDITIONAL_EXPRESSION_SWITCH.html), [`CASE`](ABENSQL_CASE.html) expression in [ABAP SQL](ABENABAP_SQL_GLOSRY.html), or [`CASE`](ABENCDS_CASE_EXPRESSION_V2.html) expression in [CDS DDL](ABENCDS_DDL_GLOSRY.html). In a case distinction, the value of an [operand](ABENOPERAND_GLOSRY.html) determines which of multiple source code sections is executed. In the ABAP language, there are only [simple case distinctions](ABENSIMPLE_CASE_GLOSRY.html). In ABAP CDS and ABAP SQL, there are [simple case distinctions](ABENSIMPLE_CASE_GLOSRY.html) and [complex case distinctions](ABENCOMPLEX_CASE_GLOSRY.html).

**cast**

In ABAP, see [casting](ABENCAST_CASTING_GLOSRY.html). In [SQL](ABENSQL_GLOSRY.html), a cast is a type conversion.

**CDS**

*\->*\\ [Core Data Services](ABENCORE_DATA_SERVICES_GLOSRY.html)

**CDS abstract entity**

A [CDS transient entity](ABENCDS_NON_SQL_ENTITY_GLOSRY.html) defined using [`DEFINE ABSTRACT ENTITY`](ABENCDS_F1_DEFINE_ABSTRACT_ENTITY.html) in a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html). A CDS abstract entity defines the type properties of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) without defining a database object.

**CDS abstract entity extension**

[CDS entity extension](ABENCDS_ENTITY_EXTEND_GLOSRY.html) of a [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html). A CDS abstract entity extension can be used to add elements to an abstract entity without making any modifications to the original entity. It is defined using the statement [`EXTEND ABSTRACT ENTITY`](ABENCDS_EXTEND_ABSTRACT_ENTITY.html).

**CDS access condition**

Condition in a [CDS role](ABENCDS_ROLE_GLOSRY.html) defined in an [access rule](ABENACCESS_RULE_GLOSRY.html) of the statement [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html) for a [CDS entity](ABENCDS_ENTITY_GLOSRY.html). [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) evaluates the access conditions of a CDS entity by default when [ABAP SQL](ABENABAP_SQL_GLOSRY.html) is used to access objects. Access conditions can include for example [PFCG conditions](ABENPFCG_CONDITION_GLOSRY.html), [literal conditions](ABENLITERAL_CONDITION_GLOSRY.html), [user conditions](ABENUSER_CONDITION_GLOSRY.html), and other conditions.

**CDS access control**

Implicit restriction applied to a selection of [CDS entities](ABENCDS_ENTITY_GLOSRY.html) when accessing objects with [ABAP SQL](ABENABAP_SQL_GLOSRY.html) using [access conditions](ABENACCESS_CONDITION_GLOSRY.html) defined in [CDS roles](ABENCDS_ROLE_GLOSRY.html). CDS access control is switched on by default for each [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), and [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html). It can be switched off for individual views and table functions using a view annotation or [table function annotation](ABENCDS_F1_FUNCTION_ANNOTATIONS.html).

**CDS access policy**

Framework defined in the [DCL](ABENDCL_GLOSRY.html) of the [ABAP Core Data Services](ABENABAP_CORE_DATA_SERVICES_GLOSRY.html) using [`DEFINE ACCESSPOLICY`](ABENCDS_F1_DEFINE_ACCESSPOLICY.html). Currently, only one CDS access policy is used as a frame for the definition of exactly one [PFCG mapping](ABENCDS_PFCG_MAPPING_GLOSRY.html).

**CDS access rule**

An access rule formulates an [access condition](ABENACCESS_CONDITION_GLOSRY.html) for a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) or guarantees open access in a [CDS role](ABENCDS_ROLE_GLOSRY.html).

**CDS amount field**

A component of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) of data type `CURR`, `DECFLOAT34`, `DEC`, or `FLTP` in [ABAP CDS](ABENABAP_CDS_GLOSRY.html). It is used for entering an amount in a particular currency. The content of an amount field is interpreted as an integer in the smallest unit of the currency. An ABAP CDS amount field must be linked with a [currency key](ABENCURRENCY_KEY_GLOSRY.html) of the same CDS entity that specifies the currency and the number of decimal places.

Related terms:

**CDS analytical cube view**

[CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) annotated with [`@Analytics.dataCategory: #CUBE`](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html). Serves as a data source for [CDS analytical projection views](ABENCDS_ANALYTICAL_PV_GLOSRY.html).

**CDS analytical dimension field**

An analytical dimension field is an element of an [analytical cube view](ABENCDS_ANALYTICAL_CUBE_GLOSRY.html) that describes a characteristic of the view's subject and that can be used for [grouping](ABENCDS_GROUP_BY_V2.html) or filtering. For example if a view describes a sales order, the following columns can be dimensions: customer, date, region.

**CDS analytical dimension view**

[CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) annotated with [`@Analytics.dataCategory: #DIMENSION`](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html). Can serve as a data source for CDS analytical projection views.

**CDS analytical measure field**

An analytical measure field is a field of an [analytical cube view](ABENCDS_ANALYTICAL_CUBE_GLOSRY.html) or an [analytical dimension view](ABENCDS_ANAL_DIM_VIEW_GLOSRY.html) that contains measurable data. In other words, an analytical measure field can be any field that contains quantifiable data that can be calculated, for example, the total price of all sales order positions.

**CDS analytical projection view**

Synonym for [CDS analytical query](ABENCDS_ANALYTIC_QUERY_GLOSRY.html). [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html) that is intended for modeling analytical queries within a CDS data model. It is processed by the [ABAP Analytical Engine](ABENABAP_AE_GLOSRY.html) and has to be exposed as an [InA](ABENINA_PROTOCOL_GLOSRY.html) service. A CDS analytical projection view is defined using the [CDS DDL](ABENCDS_DDL_GLOSRY.html) statement [`DEFINE TRANSIENT VIEW ENTITY AS PROJECTION ON`](ABENCDS_DEFINE_VIEW_AS_ANALYTICAL.html) and it must have the [provider contract](ABENCDS_PV_PROVIDER_CONTRACT.html) set to `ANALYTICAL_QUERY`. A CDS analytical projection view is a [CDS transient entity](ABENCDS_NON_SQL_ENTITY_GLOSRY.html).

**CDS analytical query**

[*\->* CDS analytical projection view](ABENCDS_ANALYTICAL_PV_GLOSRY.html)

**CDS annotation**

A CDS annotation adds metadata to a [CDS object](ABENCDS_OBJECT_GLOSRY.html) that goes beyond the syntax features of [SQL](ABENSQL_GLOSRY.html). An annotation is specified using the [annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html) in the [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html) of the CDS object. CDS annotations and their syntax are defined using [CDS annotation definitions](ABENCDS_ANNO_DEFINITION_GLOSRY.html). SAP delivers a predefined set of [SAP annotations](ABENSAP_ANNOTATION_GLOSRY.html).

**CDS annotation definition**

Defines a [CDS annotation](ABENCDS_ANNOTATION_GLOSRY.html) as a [CDS object](ABENCDS_OBJECT_GLOSRY.html) using the statement `DEFINE ANNOTATION` in [`DDLA` source code](ABENDDLA_SOURCE_CODE_GLOSRY.html) in [CDS DDL](ABENCDS_DDL_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html). A CDS annotation definition specifies the [CDS annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html) that is to be used when the annotation is specified in [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html).

**CDS annotation syntax**

Syntax for specifying a [CDS annotation](ABENCDS_ANNOTATION_GLOSRY.html) in [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html). The CDS annotation syntax is fixed and the [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) specifies further rules for the use of the respective annotation.

**CDS aspect**

CDS object available in ABAP CDS. The following types of CDS aspects are available:

**CDS association**

An [association](ABENASSOCIATION_GLOSRY.html) of [ABAP CDS](ABENABAP_CDS_GLOSRY.html). Associations define [join](ABENJOIN_GLOSRY.html) relationships between [association sources](ABENASSOCIATION_SOURCE_GLOSRY.html) and [association targets](ABENASSOCIATION_TARGET_GLOSRY.html). CDS associations can be defined for [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html), [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html), and [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) using the addition `ASSOCIATION` in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html). They can be evaluated in [CDS DDL](ABENCDS_DDL_GLOSRY.html), [CDS DCL](ABENCDS_DCL_GLOSRY.html), and in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) using [SQL path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html). [To-child associations](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) and [to-parent associations](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) are specialized associations that together build a [CDS composition](ABENCDS_COMPOSITION_GLOSRY.html) relationship for the [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) of a [RAP business object](ABENRAP_BO_GLOSRY.html).

**CDS association path**

A sequence of [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html). CDS association paths can be specified in the form of [SQL path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and in [ABAP CDS](ABENABAP_CDS_GLOSRY.html).

**CDS buffer propagation**

Buffer propagation means that the joins defined by a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) are processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) on data stored in the [table buffer](ABENTABLE_BUFFER_GLOSRY.html). Instead of using joins instantiated on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), temporary joins for processing the table buffer are established on the [AS ABAP](ABENAS_ABAP_GLOSRY.html). This can lead to performance gains.

**CDS built-in function**

A predefined function in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) that can be used in operand positions of [CDS entities](ABENCDS_ENTITY_GLOSRY.html). ABAP CDS offers [numeric functions](ABENCDS_SQL_FUNCTIONS_NUMERIC_V2.html), [string functions](ABENCDS_SQL_FUNCTIONS_CHARACTER_V2.html), and [date and time functions](ABENCDS_DATE_TIME_FUNCTIONS_V2.html) that have a return value of the corresponding data type. [Conversion functions](ABENCDS_CONVERSION_FUNCTIONS_V2.html) are available to perform conversions between data types.

**CDS built-in type**

[Built-in](ABENBUILTIN_DATA_TYPE_GLOSRY.html) [elementary](ABENELEMENTARY_DATA_TYPE_GLOSRY.html)\\ [CDS type](ABENCDS_TYPE_GLOSRY.html). CDS built-in types are based on the [built-in Dictionary types](ABENBUILTIN_DDIC_TYPE_GLOSRY.html) and the same rules apply as to the corresponding built-in ABAP Dictionary types. CDS built-in types can be used for the typing of [CDS elements](ABENCDS_ELEMENT_GLOSRY.html), [CDS parameters](ABENCDS_PARAMETER_GLOSRY.html), and [CDS simple types](ABENCDS_SIMPLE_TYPE_GLOSRY.html), and for casting in ABAP CDS.

**CDS calculated quantity**

A component of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html). A calculated quantity is always the result of a calculation using [CDS amount](ABENCDS_AMOUNT_FIELD_GLOSRY.html) and / or [CDS quantity fields](ABENCDS_QUANTITY_GLOSRY.html). The DDIC data type is `DECFLOAT34`. An ABAP CDS calculated quantity must be linked with a [CDS calculated unit](ABENCDS_CALCULATED_UNIT_GLOSRY.html) of the same CDS view entity that specifies a user-defined unit for the calculated quantity.

**CDS calculated unit**

A component of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) of data type `CHAR` that specifies a user-defined unit which is not contained in any list of predefined values. A CDS calculated unit can be linked with a [CDS calculated quantity](ABENCDS_CALCULATED_QUANTITY.html) of the same CDS view entity.

**CDS child entity**

Any [CDS entity](ABENCDS_ENTITY_GLOSRY.html) of a [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) other than the [root entity](ABENROOT_ENTITY_GLOSRY.html). A child entity is defined as the [composition target](ABENCOMPOSITION_TARGET_GLOSRY.html) of a [to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) in its [parent entity](ABENPARENT_ENTITY_GLOSRY.html) and has a [to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) to its parent entity. A child entity has exactly one parent entity.

**CDS composition**

A CDS composition consists of a [to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) and a [to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html). A CDS composition defines an existential dependency between two entities, where the [child entity](ABENCHILD_ENTITY_GLOSRY.html) cannot exist without the [parent entity](ABENPARENT_ENTITY_GLOSRY.html).

**CDS composition path**

A sequence of [CDS compositions](ABENCDS_COMPOSITION_GLOSRY.html) that link the [CDS entities](ABENCDS_ENTITY_GLOSRY.html) of a [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html). CDS composition paths can be specified like [CDS association paths](ABENCDS_ASSOCIATION_PATH_GLOSRY.html) in [SQL path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html).

**CDS composition tree**

A [tree hierarchy](ABENTREE_HIERARCHY_GLOSRY.html) of a [RAP business object](ABENRAP_BO_GLOSRY.html) that consists of [parent entities](ABENPARENT_ENTITY_GLOSRY.html) and [child entities](ABENPARENT_ENTITY_GLOSRY.html) that are themselves defined using [CDS compositions](ABENCDS_COMPOSITION_GLOSRY.html). The top parent entity of a CDS composition tree is the [root entity](ABENROOT_ENTITY_GLOSRY.html) which represents the business object.

**CDS condition**

Logical expression in a CDS operand position.

**CDS custom entity**

A [CDS transient entity](ABENCDS_NON_SQL_ENTITY_GLOSRY.html) defined using [`DEFINE CUSTOM ENTITY`](ABENCDS_F1_DEFINE_CUSTOM_ENTITY.html) in a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html). A CDS custom entity allows developers to implement their own data retrieval using the [ABAP language](ABENABALA_GLOSRY.html). The data retrieval is implemented by a method of an [ABAP class](ABAPCLASS.html) that is called when accessing the custom entity in a framework such as the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html). Custom entities cannot be used in [ABAP SQL](ABENABAP_SQL_GLOSRY.html). In [RAP](ABENRAP_GLOSRY.html), custom entities are used as the data model basis for [unmanaged queries](ABENRAP_UNMANGED_QUERY_GLOSRY.html).

**CDS custom entity extension**

[CDS entity extension](ABENCDS_ENTITY_EXTEND_GLOSRY.html) of a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html). A CDS custom entity extension can be used to add elements to a custom entity without making any modifications to the original entity. It is defined using the statement [`EXTEND CUSTOM ENTITY`](ABENCDS_EXTEND_CUSTOM_ENTITY.html).

**CDS data definition**

A definition or extension of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) using [language elements](ABENCDS_F1_DDL_SYNTAX.html) of the [CDS DDL](ABENCDS_DDL_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) in [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html). A CDS data definition might also contain [DQL](ABENDQL_GLOSRY.html) parts that define the data retrieval. For example, the DQL statement `SELECT` is embedded in [CDS DDL](ABENCDS_DDL_GLOSRY.html) for [CDS views](ABENCDS_VIEW_GLOSRY.html).

**CDS DCL**

Data control language ([DCL](ABENDCL_GLOSRY.html)) of [ABAP CDS](ABENABAP_CDS_GLOSRY.html) used to define [CDS roles](ABENCDS_ROLE_GLOSRY.html) and [CDS access policies](ABENCDS_ACCESS_POLICY_GLOSRY.html) in [DCL source code](ABENDCL_SOURCE_CODE_GLOSRY.html) in [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html).

**CDS DCL aspect**

Object used for the definition of user-specific values and their use in the conditions of a [CDS role](ABENCDS_ROLE_GLOSRY.html). Currently, the predefined aspects `pfcg_auth` and `user` are available, plus the user-defined aspects defined with [`DEFINE ASPECT`](ABENCDS_F1_DEFINE_GENERIC_ASPECT.html).

**CDS DDIC-based entity (obsolete)**

A [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html) for which a [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) is created in the ABAP Dictionary alongside the CDS entity upon activation.

There is only one kind of DDIC-based entity available, namely [CDS DDIC-based views](ABENCDS_V1_VIEW_GLOSRY.html).

**CDS DDIC-based view**

An obsolete type of [CDS view](ABENCDS_VIEW_GLOSRY.html) that is technically based on a [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). A CDS DDIC-based view (obsolete) is defined with the [CDS DDL](ABENCDS_DDL_GLOSRY.html) statement [`DEFINE VIEW ddic_based_view`](ABENCDS_DEFINE_VIEW_V1.html).

**CDS DDIC-based view extension**

A [CDS entity extension](ABENCDS_ENTITY_EXTEND_GLOSRY.html) of a [CDS DDIC-based view](ABENCDS_V1_VIEW_GLOSRY.html). A CDS DDIC-based view extension can be used to add elements and/or clauses to a view without making any modifications to the original view. It is defined using the statement [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html).

**CDS DDL**

The data definition language of [ABAP CDS](ABENABAP_CDS_GLOSRY.html). Besides CDS DDL for [CDS data definitions](ABENCDS_DATA_DEFINITION_GLOSRY.html), there two further dialects, namely [CDS DDLA](ABENCDS_DDLA_GLOSRY.html) and [CDS DDLX](ABENCDS_DDLX_GLOSRY.html).

**CDS DDL aspect**

A [CDS object](ABENCDS_OBJECT_GLOSRY.html) defined in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) that defines reusable components for [CDS entities](ABENCDS_ENTITY_GLOSRY.html). A [CDS aspect](ABENCDS_ASPECTS.html) is defined using the syntax [`DEFINE ASPECT`](ABENCDS_DEFINE_ASPECT.html). An aspect can be included in one or more [CDS data definitions](ABENCDS_DATA_DEFINITION_GLOSRY.html) by a [CDS aspect binding](ABENCDS_DDL_ASPECT_BINDING_GLOSRY.html).

**CDS DDL aspect binding**

An optional component of a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html), specified in front of the [`SELECT`](ABENCDS_SELECT_STATEMENT_V2.html) list. With a CDS aspect binding, a [CDS aspect](ABENCDS_ASPECT_GLOSRY.html) is bound to a CDS data definition using the syntax [`BIND ASPECT`](ABENCDS_BIND_ASPECT.html). This makes the elements of the aspect available for use in an operand position of the data definition, using the syntax [`INCLUDE`](ABENCDS_INCLUDE_ASPECT.html).

**CDS DDL expression**

Expression in a CDS DDL operand position that is passed to the database system for evaluation.

**CDS DDLA**

A [CDS DDL](ABENCDS_DDL_GLOSRY.html) dialect that contains language elements for [CDS annotation definitions](ABENCDS_ANNO_DEFINITION_GLOSRY.html) in [DDLA source code](ABENDDLA_SOURCE_CODE_GLOSRY.html).

**CDS DDLX**

A [CDS DDL](ABENCDS_DDL_GLOSRY.html) dialect that contains language elements for [CDS metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html) in [DDLX source code](ABENDDLX_SOURCE_CODE_GLOSRY.html).

**CDS delegated buffer**

A [CDS view entity buffer](ABENCDS_ENTITY_BUFFER_GLOSRY.html) that delegates the buffer usage from one CDS entity to its base entity, which avoids numerous entries of the same data in the memory of the [AS ABAP](ABENABAP_GLOSSARY.html). This can improve performance.

Defined using the syntax [`TYPE DELEGATED`](ABENCDS_DEFINE_DELEGATED_BUFFER.html) in the definition of a CDS entity buffer.

**CDS element**

An element in a [CDS entity](ABENCDS_ENTITY_GLOSRY.html). A CDS element is defined in an element list of a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html) and is a [structure component](ABENSTRUCTURE_COMPONENT_GLOSRY.html) of the [structured type](ABENSTRUCTURED_TYPE_GLOSRY.html) defined by the CDS entity. CDS elements can be, for example, [CDS source fields](ABENCDS_FIELD_GLOSRY.html), [CDS literals](ABENCDS_LITERAL_GLOSRY.html), or [CDS DDL expressions](ABENCDS_EXPRESSION_GLOSRY.html).

**CDS entity**

[CDS object](ABENCDS_OBJECT_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html). A CDS entity is defined in a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html) using the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of ABAP CDS in [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html). A CDS entity is defined when it is activated. Within CDS, a CDS entity can access other entities. Currently, there are the following CDS entities available:

In [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html), a CDS entity can be used as a [global type](ABENGLOBAL_TYPE_GLOSRY.html) and [ABAP SQL](ABENABAP_SQL_GLOSRY.html) read statements can be used to access CDS entities.

CDS entities that are [writable database objects](ABENWRITABLE_DB_OBJ_GLOSRY.html) can be used in ABAP SQL read access for inserting, modifying, or deleting data on the database.

**CDS entity buffer**

An [ABAP tuning object](ABENABAP_TUNING_OBJECT_GLOSRY.html) that defines [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) settings for [CDS entities](ABENCDS_ENTITY_GLOSRY.html). The following types of CDS entity buffers are available:

Sometimes, *CDS entity buffer* is also used as a synonym for the area of the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) in the [shared memory](ABENSHARED_MEMORY_GLOSRY.html) where data from CDS entities is buffered.

**CDS entity extension**

A transportable extension of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html). A CDS entity extension can be used to add elements and/or clauses to a CDS entity without making any modifications to the original entity.

There are currently four different statements that can be used to extend a CDS entity in [CDS DDL](ABENCDS_DDL_GLOSRY.html):

**CDS enumerated element**

[CDS element](ABENCDS_ELEMENT_GLOSRY.html) that is typed with a [CDS enumerated type](ABENCDS_ENUM_TYPE_GLOSRY.html). A CDS enumerated element can only contain one of the [enumerated values](ABENENUMERATED_VALUE_GLOSRY.html) of the respective enumerated type.

**CDS enumerated type**

[CDS user-defined type](ABENCDS_USER_DEFINED_TYPE_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) that defines an [enumerated type](ABENENUM_TYPE_GLOSRY.html). A CDS enumerated type is defined using the statement [`DEFINE TYPE ENUM`](ABENCDS_DEFINE_ENUM_TYPE.html).

**CDS external entity**

A [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html) defined using [`DEFINE EXTERNAL ENTITY`](ABENCDS_DEFINE_EXTERNAL_ENTITY.html) in a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html). A CDS external entity can be used to access data from external database systems within the [AS ABAP](ABENAS_ABAP_GLOSRY.html). The external systems can be other [SAP HANA](ABENHANA_DATABASE_GLOSRY.html) or non-SAP HANA database systems. The properties of the connection between an external entity and the external system are configured using a [logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html). The connection is managed using [SAP HANA Smart Data Access](ABENSAP_HANA_SDA_GLOSRY.html). The following types of external entities are available:

**CDS function**

Function in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) that can be used in operand positions of [CDS entities](ABENCDS_ENTITY_GLOSRY.html). A CDS function can be a [user-defined function](ABENCDS_USER_FUNC_GLOSRY.html), a [built-in function](ABENCDS_BUILTIN_FUNC_GLOSRY.html), or a [system function](ABENCDS_SYSTEM_FUNC_GLOSRY.html).

**CDS function definition**

A [CDS object](ABENCDS_OBJECT_GLOSRY.html) that defines a [CDS function](ABENCDS_FUNCTION_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html). Currently, [CDS scalar function definitions](ABENCDS_DSFD_GLOSRY.html) are the only type of CDS function definition available.

**CDS generic type**

[Built-in](ABENBUILTIN_DATA_TYPE_GLOSRY.html)\\ [generic](ABENGENERIC_DATA_TYPE_GLOSRY.html)\\ [CDS type](ABENCDS_TYPE_GLOSRY.html). The generic CDS types are: `any` and `numeric`. Generic CDS types can be used for the typing of parameters of [CDS scalar functions](ABENCDS_SCALAR_FUNCTION_GLOSRY.html).

**CDS hierarchy**

A [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html) defined using [`DEFINE HIERARCHY`](ABENCDS_F1_DEFINE_HIERARCHY.html) in a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html). A CDS hierarchy allows the retrieval of the nodes of hierarchical data. In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) read statements, a CDS hierarchy can be accessed as a [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html). Additional [hierarchy columns](ABENHIERARCHY_COLUMN_GLOSRY.html) containing the [hierarchy attributes](ABENHIERARCHY_ATTRIBUTE_GLOSRY.html) are available.

**CDS literal**

An elementary [CDS operand](ABENCDS_OPERAND_GLOSRY.html) defined by the textual specification of a value in a [CDS object](ABENCDS_OBJECT_GLOSRY.html). ABAP CDS provides [typed literals](ABENTYPED_LITERAL_GLOSRY.html) and [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).

**CDS literal condition**

Part of an [access condition](ABENACCESS_CONDITION_GLOSRY.html) in a [CDS role](ABENCDS_ROLE_GLOSRY.html) that associates an element of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) with a literal value.

**CDS localized field**

A [SQL path target field](ABENSQL_TARGET_FIELD_GLOSRY.html) in a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) whose original data source is a [CDS text provider view](ABENCDS_TEXT_PROVIDER_GLOSRY.html) and that is automatically displayed in the user's logon language. Defined using the keyword [`LOCALIZED`](ABENCDS_LOCALIZED.html). Currently available in [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html) only.

**CDS logical external schema**

A logical database schema that maps one or more [CDS external entities](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html) to a concrete physical external system or database, and a specific [database schema](ABENDATABASE_SCHEMA_GLOSRY.html) in such a remote system. A logical external schema is represented by a transportable [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) whose configuration specifies the connection details required by the [SAP HANA remote source](ABENSAP_HANA_REMOTE_SOURCE_GLOSRY.html) to connect to an external system.

**CDS metadata extension**

Short MDE. A [CDS object](ABENCDS_OBJECT_GLOSRY.html) of the [ABAP CDS](ABENABAP_CDS_GLOSRY.html) is defined in [`DDLX` source code](ABENDDLX_SOURCE_CODE_GLOSRY.html) with [language elements](ABENCDS_F1_DDLX_SYNTAX.html) of the [CDS DDL](ABENCDS_DDL_GLOSRY.html). In a CDS metadata extension, [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html) are specified for a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) outside its [data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html). A CDS metadata extension is always assigned to a layer such as industry, partner or customer.

**CDS object**

A [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) of [ABAP CDS](ABENABAP_CDS_GLOSRY.html). CDS objects are, for example, [CDS entities](ABENCDS_ENTITY_GLOSRY.html), [CDS annotation definitions](ABENCDS_ANNO_DEFINITION_GLOSRY.html), [CDS metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html), [CDS roles](ABENCDS_ROLE_GLOSRY.html), [CDS user-defined types](ABENCDS_USER_DEFINED_TYPE_GLOSRY.html), [CDS functions](ABENCDS_FUNCTION_GLOSRY.html), and [ABAP tuning objects](ABENABAP_TUNING_OBJECT_GLOSRY.html).

**CDS operand**

A syntax element of a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html) at an operand position. Defined directly or as a [formal parameter](ABENFORMAL_PARAMETER_GLOSRY.html), [built-in function](ABENBUILTIN_FUNCTION_GLOSRY.html), or [expression](ABENEXPRESSION_GLOSRY.html). Operands can be combined with [operators](ABENOPERATOR_GLOSRY.html) to form [expressions](ABENEXPRESSION_GLOSRY.html) that in turn can be listed at certain [operand positions](ABENOPERAND_POSITION_GLOSRY.html).

**More about:**

**CDS parameter**

An input parameter of a [CDS object](ABENCDS_OBJECT_GLOSRY.html). A CDS parameter can be defined, for example, in the parameter list of a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html) or of a [CDS scalar function definition](ABENCDS_DSFD_GLOSRY.html). When a CDS object with parameters is used in another CDS object or in an [ABAP SQL statement](ABENABAP_SQL_GLOSRY.html), actual parameters must be assigned to their CDS parameters.

**CDS parent entity**

A [CDS entity](ABENCDS_ENTITY_GLOSRY.html) of a [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) that uses a [to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) to define a [child entity](ABENCHILD_ENTITY_GLOSRY.html). A parent entity can have multiple child entities. Each child entity must define and expose a [to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) to its parent entity.

**CDS persistent entity**

A [CDS entity](ABENCDS_ENTITY_GLOSRY.html) for which an artifact is created on the database and which can be used as a data source in [ABAP SQL](ABENABAP_SQL_GLOSRY.html), such as a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html).

See also: [CDS transient entity](ABENCDS_NON_SQL_ENTITY_GLOSRY.html)

**CDS PFCG condition**

Part of an [access condition](ABENACCESS_CONDITION_GLOSRY.html) in a [CDS role](ABENCDS_ROLE_GLOSRY.html) that uses an [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html) to associate an element of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) with the [authorizations](ABENAUTHORIZATION_GLOSRY.html) of the current [ABAP user](ABENABAP_USER_GLOSRY.html).

**CDS PFCG mapping**

A PFCG mapping associates [CDS elements](ABENCDS_ELEMENT_GLOSRY.html) with [authorization fields](ABENAUTHORIZATION_FIELD_GLOSRY.html). It is defined using [`DEFINE PFCG_MAPPING`](ABENCDS_F1_DEFINE_PFCG_MAPPING.html) as part of a [CDS access policy](ABENCDS_ACCESS_POLICY_GLOSRY.html) and can be used in [PFCG conditions](ABENPFCG_CONDITION_GLOSRY.html).

**CDS projected entity**

Used in the context of [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html). The [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) that is used as the basis of a CDS projection view, and that is defined after the addition `AS PROJECTION ON` is called projected entity.

**CDS projection view**

A special [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) that is based on another [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) (called [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html)). CDS projection views adapt a CDS data model for service-specific use cases. A CDS projection view is defined with the [CDS DDL](ABENCDS_DDL_GLOSRY.html) statement `DEFINE [TRANSIENT] VIEW ENTITY AS PROJECTION`.

The following types of CDS projection views are available:

**CDS propagated buffer**

A [CDS entity buffer](ABENCDS_ENTITY_BUFFER_GLOSRY.html) that defines [SQL path target fields](ABENSQL_TARGET_FIELD_GLOSRY.html) for [buffer propagation](ABENCDS_BUFFER_PROPAGATION_GLOSRY.html). Defined using the syntax [`PROPAGATE VIEW ENTITY BUFFER`](ABENCDS_PROPAGATE_BUFFER.html).

**CDS provider contract**

In [ABAP CDS](ABENABAP_CDS_GLOSRY.html), a provider contract specifies the scenario in which a [CDS object](ABENCDS_OBJECT_GLOSRY.html) is used. Depending on the scenario, different rules apply to the definition of the object in question. Each provider contract imposes a different set of syntax checks.

Currently, the following CDS objects can have a provider contract:

**CDS quantity field**

A component of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) of data type `QUAN`, `DECFLOAT16`, `DECFLOAT34`, `DEC`, `FLTP`, `INT1`, `INT2`, or `INT4` in [ABAP CDS](ABENABAP_CDS_GLOSRY.html). It is used for entering a quantity in a particular unit. An ABAP CDS quantity field must be linked with a [unit key](ABENUNIT_GLOSRY.html) of the same CDS entity that specifies the unit of measurement and the number of decimal places.

Related terms:

**CDS role**

A [CDS object](ABENCDS_OBJECT_GLOSRY.html) defined using the statement [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html) in a [DCL source code](ABENDCL_SOURCE_CODE_GLOSRY.html) in the [CDS DCL](ABENCDS_DCL_GLOSRY.html) of [ABAP CDS](ABENABAP_CDS_GLOSRY.html). This object applies [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) based on [access conditions](ABENACCESS_CONDITION_GLOSRY.html) when [CDS persistent entities](ABENCDS_SQL_ENTITY_GLOSRY.html) are accessed using [ABAP SQL](ABENABAP_SQL_GLOSRY.html). The access conditions of a CDS role evaluate the classic [authorizations](ABENAUTHORIZATION_GLOSRY.html) of the current user.

**CDS root entity**

The top [CDS entity](ABENCDS_ENTITY_GLOSRY.html) of a [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html). The addition `ROOT` must be specified in the definition of a root entity with [CDS DDL](ABENCDS_DDL_GLOSRY.html). A root entity can be part of exactly one [RAP BO](ABENRAP_BO_GLOSRY.html). A CDS root entity is typically a [CDS parent entity](ABENPARENT_ENTITY_GLOSRY.html) and it is typically used as a [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html) in the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html).

**CDS scalar function**

[CDS function](ABENCDS_FUNCTION_GLOSRY.html) that operates on a single input data set and returns a scalar (that means [elementary](ABENELEMENTARY_DATA_TYPE_GLOSRY.html)) return value as result. A CDS scalar function is defined using [`DEFINE SCALAR FUNCTION`](ABENCDS_DEFINE_SCALAR_FUNCTION.html) in a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html). CDS scalar functions can be [user-defined functions](ABENCDS_USER_FUNC_GLOSRY.html) or [system functions](ABENCDS_SYSTEM_FUNC_GLOSRY.html).

There are [analytical scalar functions](ABENCDS_ANA_SCALAR_GLOSRY.html) and [SQL-based scalar functions](ABENCDS_SQL_SCALAR_GLOSRY.html).

A scalar function can have one or more [scalar function implementation references](ABENCDS_SCALAR_FUNC_IMPL_REF.html) that bind it to implementations in different environments, such as an SQL environment or the [ABAP Analytical Engine](ABENABAP_AE_GLOSRY.html).

**CDS scalar function definition**

[CDS object](ABENCDS_OBJECT_GLOSRY.html) that defines a [CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html). A CDS scalar function definition is defined using the statement [`DEFINE SCALAR FUNCTION`](ABENCDS_DEFINE_SCALAR_FUNCTION.html).

**CDS scalar function implementation reference**

[Repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that binds a [CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) to a runtime environment. In case of an [SQL-based scalar function](ABENCDS_SQL_SCALAR_GLOSRY.html), the scalar function implementation reference also specifies the [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) that implements the scalar function in question.

**CDS schema notation**

CSN for short. Notation for compact representations of data models, such as data models defined with [ABAP CDS](ABENABAP_CDS_GLOSRY.html). SAP standard format for metadata exchange between data models of different technology stacks, for example between [ABAP CDS](ABENABAP_CDS_GLOSRY.html) and SAP Analytics Cloud (SAC).

**CDS SDL**

The Service Definition Language of [ABAP CDS](ABENABAP_CDS_GLOSRY.html). CDS SDL contains language elements for [CDS service definitions](ABENCDS_SERVICE_DEFINITION_GLOSRY.html) in [`SDL` source code](ABENSDL_SOURCE_CODE_GLOSRY.html).

**CDS service definition**

A CDS service definition is a [CDS object](ABENCDS_OBJECT_GLOSRY.html) that exposes [CDS entities](ABENCDS_OBJECT_GLOSRY.html) for a [business service](ABENBS_GLOSRY.html). A CDS service definition is defined by the [CDS SDL](ABENCDS_SDL_GLOSRY.html) language elements of [ABAP CDS](ABENABAP_CDS_GLOSRY.html) in [`SDL` source code](ABENSDL_SOURCE_CODE_GLOSRY.html).

**CDS service definition extension**

A transportable extension of a [CDS service definition](ABENCDS_SERVICE_DEFINITION_GLOSRY.html) using the [CDS SDL](ABENCDS_SDL_GLOSRY.html) statement [`EXTEND SERVICE`](ABENSRVD_EXTEND_SERVICE.html). A CDS service definition extension can add further entities to an existing CDS service definition without modifying the original service definition.

**CDS simple type**

[CDS user-defined type](ABENCDS_USER_DEFINED_TYPE_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) that defines an [elementary data type](ABENELEMENTARY_DATA_TYPE_GLOSRY.html). A CDS simple type is defined using the statement [`DEFINE TYPE`](ABENCDS_DEFINE_SIMPLE_TYPE.html).

**CDS source code**

The [source code](ABENSOURCE_CODE_GLOSRY.html) for the definition of a [CDS object](ABENCDS_OBJECT_GLOSRY.html). There are different kinds of CDS source code, such as

The different types of source code have different editors in [ADT](ABENADT_GLOSRY.html), which are documented there. The CDS objects defined in CDS source code are transported using the source code.

**CDS source field**

A field of a data source of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) that can be used as a [CDS element](ABENCDS_ELEMENT_GLOSRY.html) and at different operand positions of that CDS entity.

**CDS source type**

Denotes the type of [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html). The following categories are available:

All available CDS source types are listed in the domain `DDDDLSRCTYPE`.

**CDS SQL query**

A [database query](ABENDB_QUERY_GLOSRY.html) that is implemented in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) as a part of the definition of a [view entity](ABENCDS_V2_VIEW_GLOSRY.html) using the SQL language element [`SELECT`](ABENCDS_SELECT_STATEMENT_V2.html). The clauses and additions of `SELECT` define the result set returned by the database. ‎

**CDS system entity**

A [CDS entity](ABENCDS_ENTITY_GLOSRY.html) delivered with an [ABAP system](ABENABAP_SYSTEM_GLOSRY.html) that implements basic functionality, such as generating a series of integers (`SERIES_GENERATE_INTEGER`). It can be used as data source of other CDS entities or in [queries](ABENASQL_QUERY_GLOSRY.html) of [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

**CDS system function**

A [CDS function](ABENCDS_FUNCTION_GLOSRY.html) delivered as part of the [ABAP technology](ABENABAP_TECHNO_GLOSRY.html) that implements basic functionality. Currently, SAP delivers [analytical scalar functions](ABENCDS_ANA_SCALAR_GLOSRY.html) and [SQL-based scalar functions](ABENCDS_SQL_SCALAR_GLOSRY.html) as system functions. System functions are classified with the [C1 contract](ABENC1_CONTRACT_GLOSRY.html) for use internally in the system.

**CDS system table function**

A [CDS system entity](ABENCDS_SYSTEM_ENTITY_GLOSRY.html) that is realized as [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html).

**CDS table entity**

A [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html) that defines a [database table](ABENDATABASE_TABLE_GLOSRY.html) in ABAP CDS. A table entity is defined as a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html) using the statement [`DEFINE TABLE ENTITY`](ABENCDS_TABLE_ENTITIES.html).

**CDS table entity buffer**

A [CDS entity buffer](ABENCDS_ENTITY_BUFFER_GLOSRY.html) that defines the kind of [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) for a [CDS table entity](ABENCDS_TABLE_ENTITY_GLOSRY.html). Defined using the statement [`DEFINE TABLE ENTITY BUFFER`](ABENCDS_DEFINE_VIEW_ENTITY_BUFFER.html).

**CDS table function**

A [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html) defined using [`DEFINE TABLE FUNCTION`](ABENCDS_F1_DEFINE_TABLE_FUNCTION.html) in a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html). Each CDS table function is linked with an [AMDP table function](ABENAMDP_TABLE_FUNCTION_GLOSRY.html) in which it is implemented using [SQLScript](ABENSQL_SCRIPT_GLOSRY.html). A CDS table function returns a tabular result set.

**CDS text association**

A regular [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) whose [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is a [CDS text provider view](ABENCDS_TEXT_PROVIDER_GLOSRY.html). The [target cardinality](ABENTARGET_CARDINALITY_GLOSRY.html) of a CDS text association is `TO MANY`. CDS text associations are used for defining [CDS localized fields](ABENCDS_LOCALIZED_FIELD_GLOSRY.html).

**CDS text provider view**

A [CDS entity](ABENCDS_ENTITY_GLOSRY.html) whose [primary key](ABENPRIMARY_KEY_GLOSRY.html) consists of multiple [key fields](ABENKEY_FIELD_GLOSRY.html), one of which is of data type [`LANG`](ABENDDIC_BUILTIN_TYPES.html) and length 1. A text provider view typically contains one or more text fields for which translations in different languages are maintained. A text provider view can serve as an [association target](ABENASSOCIATION_TARGET_GLOSRY.html) for a [CDS text association](ABENCDS_TEXT_ASSOCIATION_GLOSRY.html).

**CDS to-child association**

A specialized [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) in [ABAP CDS](ABENABAP_CORE_DATA_SERVICES_GLOSRY.html) that is defined in the [parent entity](ABENPARENT_ENTITY_GLOSRY.html) and points to the [child entity](ABENCHILD_ENTITY_GLOSRY.html) using the syntax statement [`COMPOSITION OF`](ABENCDS_COMPOSITION_V2.html). In combination with the [to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html), they define a [CDS composition](ABENCDS_COMPOSITION_GLOSRY.html) relationship. The CDS compositions are the basis for the [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) of a [RAP business object](ABENRAP_BO_GLOSRY.html).

**CDS to-parent association**

A specialized [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) in [ABAP CDS](ABENABAP_CORE_DATA_SERVICES_GLOSRY.html) that is defined in the [child entity](ABENCHILD_ENTITY_GLOSRY.html) and points to the [parent entity](ABENPARENT_ENTITY_GLOSRY.html) using the syntax statement [`ASSOCIATION TO PARENT`](ABENCDS_TO_PARENT_ASSOC_V2.html). In combination with the [to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html), they define a [CDS composition](ABENCDS_COMPOSITION_GLOSRY.html) relationship. The CDS compositions are the basis for the [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) of a [RAP business object](ABENRAP_BO_GLOSRY.html).

**CDS transactional interface**

A CDS transactional interface is a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html) that is intended to serve as stable public interface for consumption. A CDS transactional interface should be classified by a [release contract](ABENRELEASE_CONTRACT_GLOSRY.html) and thus serve as [released API](ABENRELEASED_API_GLOSRY.html). They are typically used in the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html) to provide the basis for a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html). A CDS transactional interface is defined using the [CDS DDL](ABENCDS_DDL_GLOSRY.html) statement [`DEFINE VIEW ENTITY AS PROJECTION ON`](ABENCDS_DEFINE_VIEW_AS_INTERFACE.html) and it must have its [provider contract](ABENCDS_PV_PROVIDER_CONTRACT.html) set to `TRANSACTIONAL_INTERFACE`. A CDS transactional interface is a [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html).

**CDS transactional query**

A [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html) that is intended for modeling transactional queries. A transactional query is typically used in the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html) to adapt a CDS data model for service-specific use cases. A transactional query is defined using the [CDS DDL](ABENCDS_DDL_GLOSRY.html) statement [`DEFINE VIEW ENTITY AS PROJECTION ON`](ABENCDS_DEFINE_VIEW_AS_PROJECTION.html) and it must have the [provider contract](ABENCDS_PV_PROVIDER_CONTRACT.html) set to `TRANSACTIONAL_QUERY`. A CDS transactional query is a [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html).

**CDS transient entity**

A [CDS entity](ABENCDS_ENTITY_GLOSRY.html) for which no [ABAP-managed database object](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html) is created and which cannot be used in read access in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and ABAP CDS.

Currently, the following transient entities are available:

See also: [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html)

**CDS type**

[Data type](ABENDATA_TYPE_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html). There are [CDS user-defined types](ABENCDS_USER_DEFINED_TYPE_GLOSRY.html), [CDS built-in types](ABENCDS_BUILT_IN_TYPE_GLOSRY.html), and [CDS generic types](ABENCDS_GENERIC_TYPE_GLOSRY.html).

**CDS type definition**

A definition of a [CDS user-defined type](ABENCDS_USER_DEFINED_TYPE_GLOSRY.html) using [language elements](ABENCDS_F1_DDL_SYNTAX.html) of the [CDS DDL](ABENCDS_DDL_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html).

**CDS user-defined function**

Custom function in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) that allows developers to define and implement their own custom logic and reuse it in operand positions of [CDS entities](ABENCDS_ENTITY_GLOSRY.html). [SQL-based scalar functions](ABENCDS_SQL_SCALAR_GLOSRY.html) are the only type of CDS user-defined functions available.

**CDS user-defined type**

A [CDS object](ABENCDS_OBJECT_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html). CDS user-defined types can be used for typing, casting, and as operands of expressions in [CDS entities](ABENCDS_ENTITY_GLOSRY.html) and in other [CDS objects](ABENCDS_OBJECT_GLOSRY.html) and in ABAP after the addition `TYPES`. A CDS user-defined type can be enriched with metadata using [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html). Currently, the following CDS user-defined types are available:

**CDS variant**

[CDS object](ABENCDS_OBJECT_GLOSRY.html) of [ABAP CDS](ABENABAP_CDS_GLOSRY.html) defined in the [ADT](ABENADT_GLOSRY.html). A CDS variant consists of a name, which can be used to link a [CDS metadata extension](ABENCDS_METADATA_EXTENSION_GLOSRY.html) to the CDS variant in the statement [`ANNOTATE`](ABENCDS_F1_DDLX_SYNTAX.html). When evaluating annotations, a CDS variant can be specified to select the corresponding CDS metadata extension during the [evaluation of the metadata extensions](ABENCDS_META_DATA_EXTENSION_EVAL.html).

**CDS variants are not currently released for general use. It is not possible to define standalone CDS variants and the use of CDS variants in metadata extensions produces a syntax check warning.**

**CDS view**

A [CDS entity](ABENCDS_ENTITY_GLOSRY.html) defined in a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html) that implements a [view](ABENVIEW_GLOSRY.html). There are three types of CDS views:

Read access on a CDS view is possible using [ABAP SQL](ABENABAP_SQL_GLOSRY.html) or from other CDS entities.

**CDS view entity**

A [view](ABENVIEW_GLOSRY.html) defined in [ABAP CDS](ABENCDS_GLOSRY.html) as a [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html) with the [CDS DDL](ABENCDS_DDL_GLOSRY.html) statement [`DEFINE VIEW ENTITY`](ABENCDS_DEFINE_VIEW_ENTITY.html).

**CDS view entity buffer**

A [CDS entity buffer](ABENCDS_ENTITY_BUFFER_GLOSRY.html) that defines the kind of [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) for a [CDS entity](ABENCDS_ENTITY_GLOSRY.html). Defined using the statement [`DEFINE VIEW ENTITY BUFFER`](ABENCDS_DEFINE_VIEW_ENTITY_BUFFER.html).

**CDS view entity extension**

[CDS entity extension](ABENCDS_ENTITY_EXTEND_GLOSRY.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html). A CDS view entity extension can be used to add elements and/or clauses to a view without making any modifications to the original view. It is defined using the statement [`EXTEND VIEW ENTITY`](ABENCDS_EXTEND_VIEW_ENTITY.html).

**CDS virtual element**

An element in the element list of a [projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html) which is not included in the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html). Virtual elements are not persistent on the database, but calculated during runtime, usually in [ABAP classes](ABENCLASS_GLOSRY.html). In order to fill and analyze the virtual elements of a projection view, special frameworks like the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html) have to be involved.

**CDS-Based Enterprise Search**

The ABAP-CDS-specific version of the [SAP Enterprise Search](ABENSAP_ENTERPRISESEARCH_GLOSRY.html) technology. It is based on [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) in the backend. These view entities are annotated with [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) from the [`EnterpriseSearch`](ABENCDS_ENTERPRISESEARCH_F.html) domain. The annotations define search capabilities and they also trigger the generation of a [CDS-based search connector](ABENCDS_SEARCH_CONNECTOR_GLOSRY.html). CDS-based enterprise search provides enhanced search capabilities in SAP Fiori launchpad.

**CDS-based search connector**

A [search connector](ABENSEARCH_CONNECTOR_GLOSRY.html) that enables communication between an [ABAP system](ABENABAP_SYSTEM_GLOSRY.html) and the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) in the context of [CDS-based enterprise search](ABENCDS_ENTERPRISESEARCH_GLOSRY.html).

**CDS-managed DDIC view**

An obsolete [DDIC database view](ABENDATABASE_VIEW_GLOSRY.html) of the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) that is created in addition to the [CDS entity](ABENCDS_ENTITY_GLOSRY.html) when a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) is activated. CDS-managed DDIC views are used as technical foundations for a CDS view of this type, but should not be used directly in ABAP or ABAP CDS.

**CDS/CTE association path**

A sequence of [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html) that associate [CDS entities](ABENCDS_ENTITY_GLOSRY.html) and [common table expressions](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) with [association targets](ABENASSOCIATION_TARGET_GLOSRY.html). In other words, a mixture of CDS and CTE association paths. CDS or CTE association paths can be specified in the form of [SQL path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

**character literal**

Also referred to as text literal. A [literal](ABENABAP_LITERAL_GLOSRY.html) with a [character-like data type](ABENCHARLIKE_DATA_TYPE_GLOSRY.html) whose value is a [character string](ABENCHARACTER_STRING_GLOSRY.html).

See also:

**client dependency**

Property of a [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html). A SQL data source can be [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html) or [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html). When accessing a client-dependent SQL data source in [ABAP SQL](ABENABAP_SQL_GLOSRY.html), an implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) takes place.

**client handling**

Processing of the application data of a [client](ABENCLIENT_GLOSRY.html). When accessing [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html)\\ [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) or [views](ABENVIEW_GLOSRY.html), [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements use [implicit client](ABENABAP_SQL_CLIENT_HANDLING.html) handling, which by default accesses the [current client](ABENCURRENT_CLIENT_GLOSRY.html). By using additions to the ABAP SQL statements, the implicit client handling can be switched to other clients. The client handling of [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) can be defined with special [AMDP options](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html).

**client isolation**

Client isolation on an [AS ABAP](ABENAS_ABAP_GLOSRY.html) means that an [ABAP user](ABENABAP_USER_GLOSRY.html) has access to data of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) only. In [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html), client isolation is enforced as follows:

**client literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) that contains a [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) and has the data type [`CLNT`](ABENDDIC_BUILTIN_TYPES.html).

See also:

**client-dependent**

A [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html) for which an implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) takes place when accessed with [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

See also: [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html).

**client-independent**

A [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html) that is not [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html). Client-independent SQL data sources contain data that is not specific to a [client](ABENCLIENT_GLOSRY.html) and should be accessed by [system programs](ABENSYSTEM_PROGRAM_GLOSRY.html). See also [system table](ABENSYSTEM_TABLE_GLOSRY.html).

**client-safe**

A [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that accesses [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html)\\ [SQL data sources](ABENSQL_DATA_SOURCE_GLOSRY.html) is client-safe, if it can access data of one [client](ABENCLIENT_GLOSRY.html) only. Such repository objects support the concept of [client isolation](ABENCLIENT_ISOLATION_GLOSRY.html) for [AMDP methods](ABENAMDP_METHOD_GLOSRY.html):

A repository object that accesses only [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html) SQL data sources is implicitly client-safe.

**coalesce function**

A [built-in function](ABENBUILTIN_FUNCTION_GLOSRY.html) that returns the first non-zero expression in a list of expressions. Available in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) and [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

**complex case distinction**

Also searched case. A [case distinction](ABENCASE_DISTINCTION_GLOSRY.html) that evaluates logical expressions to determine which statements to execute. Available in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) and [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

**composition source**

Data source that serves as the source of a [CDS composition](ABENCDS_COMPOSITION_GLOSRY.html).

**composition target**

Data source that serves as the target of a [CDS composition](ABENCDS_COMPOSITION_GLOSRY.html).

**constant**

In ABAP, a [named data object](ABENNAMED_DATA_OBJECT_GLOSRY.html) whose value cannot be changed during the runtime of an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) or a [procedure](ABENPROCEDURE_GLOSRY.html). In [ABAP CDS](ABENABAP_CDS_GLOSRY.html), constants appear as components of [CDS enumerated types](ABENCDS_ENUM_TYPE_GLOSRY.html).

**core annotation**

*\->*\\ [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)

**Core Data Services**

*\->*\\ [ABAP Core Data Services](ABENABAP_CORE_DATA_SERVICES_GLOSRY.html)

**cross join**

A [join type](ABENJOIN_TYPE_GLOSRY.html) for which the rows of the result set are determined by a cross product of the result sets of both [SQL data sources](ABENSQL_DATA_SOURCE_GLOSRY.html). The result set contains all possible combinations of rows.

**CSN**

*\->*\\ [CDS schema notation](ABENCDS_SCHEMA_NOTATION_GLOSRY.html)

**currency field**

A currency field is linked to a [currency key](ABENCURRENCY_KEY_GLOSRY.html) and it is used for entering an amount in a particular currency. Currency fields are available in [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) (DDIC) and in [ABAP CDS](ABENABAP_CDS_GLOSRY.html), but the possible data types and handling differs.

See also:

**currency field literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) of the data type [`CURR`](ABENDDIC_BUILTIN_TYPES.html).

See also:

**currency key literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) of the data type [`CUKY`](ABENDDIC_BUILTIN_TYPES.html) that contains a [currency code](ABENCURRENCY_ID_GLOSRY.html).

See also:

**current client**

The current client of a [user session](ABENUSER_SESSION_GLOSRY.html) is the [client](ABENCLIENT_GLOSRY.html) whose [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) was specified during [logon](ABENLOGON_GLOSRY.html).

**database query**

Query for short. A database query is used to retrieve data from [database tables](ABENDATABASE_TABLE_GLOSRY.html). In [SQL](ABENSQL_GLOSRY.html), queries are generally expressed in its subset [DQL](ABENDQL_GLOSRY.html) (Data Query Language). In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) a query is called [ABAP SQL Query](ABENASQL_QUERY_GLOSRY.html). In [ABAP CDS](ABENABAP_CDS_GLOSRY.html), queries appear in the SQL-part of the definitions of [CDS views](ABENCDS_VIEW_GLOSRY.html).

**DCL**

Short for Data Control Language. A subset of [SQL](ABENSQL_GLOSRY.html). The statements of the DCL perform authorization and consistency checks on [relational databases](ABENRELATIONAL_DATABASE_GLOSRY.html).

**DCL source code**

[CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html) for the definition of [CDS roles](ABENCDS_ROLE_GLOSRY.html) and of [CDS access policies](ABENCDS_ACCESS_POLICY_GLOSRY.html) for [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) in the [CDS DCL](ABENCDS_DCL_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html).

**DDL**

Short for Data Definition Language. A subset of [SQL](ABENSQL_GLOSRY.html). The statements in the DDL create and delete the objects of a [relational database](ABENRELATIONAL_DATABASE_GLOSRY.html). In an ABAP system, [ABAP-managed database objects](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html) are edited using tools and frameworks in [AS ABAP](ABENAS_ABAP_GLOSRY.html), such as [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html), [ABAP CDS](ABENABAP_CDS_GLOSRY.html), and [AMDP](ABENAMDP_GLOSRY.html), where [DDIC DDL](ABENDDIC_DCL_GLOSRY.html), [CDS DDL](ABENCDS_DDL_GLOSRY.html), or Native SQL are used. [ABAP SQL](ABENABAP_SQL_GLOSRY.html) does not support DDL.

**DDL source code**

The [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html) for [CDS data definitions](ABENCDS_DATA_DEFINITION_GLOSRY.html) or their extensions in [CDS DDL](ABENCDS_DDL_GLOSRY.html). See also [`DDLA` source code](ABENDDLA_SOURCE_CODE_GLOSRY.html) and [`DDLX` source code](ABENDDLX_SOURCE_CODE_GLOSRY.html).

**DDLA source code**

[CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html) for [CDS annotation definitions](ABENCDS_ANNO_DEFINITION_GLOSRY.html) in [CDS DDLA](ABENCDS_DDLA_GLOSRY.html).

**DDLX source code**

[CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html) for [CDS metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html) in [CDS DDLX](ABENCDS_DDLX_GLOSRY.html).

**decimal floating point literal**

A [numeric literal](ABENNUMERIC_LITERAL_GLOSRY.html) of a [decimal floating point type](ABENDECFLOAT_TYPE_GLOSRY.html).

See also:

**DML**

Short for Data Manipulation Language. Subset of [SQL](ABENSQL_GLOSRY.html). The statements in DML perform [CUD](ABENCUD_GLOSRY.html) operations on [relational](ABENRELATIONAL_DATABASE_GLOSRY.html)\\ [database tables](ABENDATABASE_TABLE_GLOSRY.html). In the ABAP language, DML is implemented predominantly by the statements for [write accesses](ABENABAP_SQL_WRITING.html) of [ABAP SQL](ABENABAP_SQL_GLOSRY.html). **Note:** Sometimes the term DML also includes the statements of [DQL](ABENDQL_GLOSRY.html).

**DQL**

Short for Data Query Language. Subset of [SQL](ABENSQL_GLOSRY.html). The statements in DQL perform read operations on [relational](ABENRELATIONAL_DATABASE_GLOSRY.html)\\ [database tables](ABENDATABASE_TABLE_GLOSRY.html). In the ABAP language, DQL is implemented predominantly by the statements for [read accesses](ABENABAP_SQL_READING.html) of [ABAP SQL](ABENABAP_SQL_GLOSRY.html). In [ABAP CDS](ABENABAP_CDS_GLOSRY.html), the DQL statement `SELECT` is embedded in [CDS DDL](ABENCDS_DDL_GLOSRY.html) for [CDS views](ABENCDS_VIEW_GLOSRY.html). **Note:** Sometimes the statements of DQL are included in the term [DML](ABENDML_GLOSRY.html).

**dynamic external entity**

A [CDS external entity](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html) that does not specify a [logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html) in its [data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html), but instead uses the addition [`PROVIDED AT RUNTIME`](ABENCDS_DEFINE_EXTERNAL_ENTITY.html). The logical external schema for a dynamic external entity must be provided as a part of the [ABAP SQL](ABENABAP_SQL_GLOSRY.html)\\ `SELECT` statement when accessing the external entity, using a `PROVIDED BY` clause. Dynamic external entities can only be accessed by ABAP SQL; they cannot be used as a data source for other [CDS entities](ABENCDS_ENTITY_GLOSRY.html).

**enumerated structure**

A constant [structure](ABENCONSTANT_GLOSRY.html) declared in the definition of an [enumerated type](ABENENUMERATED_TYPE_GLOSRY.html), whose components contain all [enumerated values](ABENENUMERATED_VALUE_GLOSRY.html) of the enumerated type. The components are special [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html). For an [ABAP enumerated type](ABENENUMERATED_TYPE_GLOSRY.html), the declaration of an enumerated structure is optional. A [CDS enumerated type](ABENCDS_ENUM_TYPE_GLOSRY.html) is always connected to an enumerated structure. See also [enumerated constant](ABENENUMERATED_CONSTANT_GLOSRY.html).

**enumerated type**

Enum for short. An enumerated type is a [data type](ABENDATA_TYPE_GLOSRY.html) that specifies a value set in addition to the actual type properties. Enumerated types can be defined in ABAP with [`TYPES BEGIN OF ENUM`](ABAPTYPES_ENUM.html) or in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) with [`DEFINE TYPE ENUM`](ABENCDS_DEFINE_ENUM_TYPE.html).

See also:

**enumerated value**

An enumerated value is an allowed value of an [enumerated variable](ABENENUMERATED_VARIABLE_GLOSRY.html) or a [CDS enumerated element](ABENCDS_ENUM_ELEMENT_GLOSRY.html). The possible enumerated values are defined in the definition of the respective [enumerated type](ABENENUM_TYPE_GLOSRY.html) as the values of [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html) or of components of an [enumerated structure](ABENENUMERATED_STRUCTURE_GLOSRY.html). The technical data type of an enumerated value is the [base type](ABENBASE_TYPE_GLOSRY.html) of the enumerated type.

**enumeration**

*\->*\\ [enumerated type](ABENENUM_TYPE_GLOSRY.html)

**filter condition**

Specifies a condition for a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) or [CTE association](ABENCTE_ASSOCIATION_GLOSRY.html) in an [SQL path expression](ABENSQL_PATH_EXPRESSION_GLOSRY.html).

**framework-specific annotation**

[SAP annotation](ABENSAP_ANNOTATION_GLOSRY.html) that is evaluated by a framework of an SAP software component.

**grouping set**

Grouping sets are used in the [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) clause of a [query](ABENASQL_QUERY_GLOSRY.html). A grouping set is specified either as an empty grouping set or as a comma-separated list. Columns and SQL expressions can also be used in the list. The `GROUP BY` addition `GROUPING SETS` makes it possible to define multiple grouping sets under a `GROUP BY` clause. The grouping sets are aggregated separately and merged into one result set.

**inheritance condition**

Part of an [access condition](ABENACCESS_CONDITION_GLOSRY.html) in a [CDS role](ABENCDS_ROLE_GLOSRY.html) that inherits conditions from another [CDS role](ABENCDS_ROLE_GLOSRY.html) or a different [CDS entity](ABENCDS_ENTITY_GLOSRY.html).

**integer literal**

A [numeric literal](ABENNUMERIC_LITERAL_GLOSRY.html) of an [integer type](ABENINTEGER_TYPE_GLOSRY.html).

See also:

**join**

A combination of two [SQL data sources](ABENSQL_DATA_SOURCE_GLOSRY.html) into one result set, consisting of columns of both data sources. The rows of the result set are determined by the [join type](ABENJOIN_TYPE_GLOSRY.html) and by [join conditions](ABENJOIN_CONDITION_GLOSRY.html) between columns of the data sources. The relation between the rows of the data sources can be expressed by a [cardinality](ABENCARDINALITY_GLOSRY.html). Joins can be implemented in ABAP as follows:

Furthermore, [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html) define join relationships that are instantiated when the associations are used in [SQL path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html).

**join condition**

A [SQL condition](ABENSQL_COND_GLOSRY.html) or a [CDS DDL condition](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) specified after the addition `ON` of a [join expression](ABENJOIN_EXPRESSION_GLOSRY.html). Also called `ON` condition.

**join expression**

The implementation of a [join](ABENJOIN_GLOSRY.html) in [SQL](ABENSQL_GLOSRY.html) using the addition `JOIN`. Join expressions can be defined in [queries](ABENASQL_QUERY_GLOSRY.html), defined by the [`SELECT`](ABAPSELECT.html) statement of [ABAP SQL](ABENABAP_SQL_GLOSRY.html), the [`SELECT` statement in CDS view entities](ABENCDS_SELECT_STATEMENT_V2.html), or the [`SELECT` statement in CDS DDIC-based views (obsolete)](ABENCDS_SELECT_STATEMENT_V2.html).

**join type**

The join type determines, together with the [join conditions](ABENJOIN_CONDITION_GLOSRY.html) of a [join expression](ABENJOIN_EXPRESSION_GLOSRY.html), how the rows of its result set are combined from its [SQL data sources](ABENSQL_DATA_SOURCE_GLOSRY.html). [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html) support [inner joins](ABENINNER_JOIN_GLOSRY.html), [outer joins](ABENOUTER_JOIN_GLOSRY.html) ([left](ABENLEFT_OUTER_JOIN_GLOSRY.html) and [right](ABENRIGHT_OUTER_JOIN_GLOSRY.html)), and [cross joins](ABENCROSS_JOIN_GLOSRY.html).

**language key literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) of the data type [`LANG`](ABENDDIC_BUILTIN_TYPES.html) that contains a language key.

See also:

**leaf entity**

A [CDS entity](ABENCDS_ENTITY_GLOSRY.html) of a [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) of a [RAP business object](ABENRAP_BO_GLOSRY.html) that does not have any [child entities](ABENCHILD_ENTITY_GLOSRY.html). The [root entity](ABENROOT_ENTITY_GLOSRY.html) can also be a leaf entity.

**left outer join**

A [join type](ABENJOIN_TYPE_GLOSRY.html) that determines the same rows as an [inner join](ABENINNER_JOIN_GLOSRY.html) and an additional row for each row of the left [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html) that is not included by the [join conditions](ABENJOIN_CONDITION_GLOSRY.html). In these rows, the columns coming from the right data source contain [null values](ABENNULL_VALUE_GLOSRY.html).

**literal**

The textual representation of a value in the [ABAP source code](ABENABAP_SOURCE_CODE_GLOSRY.html) of an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) or in a [CDS object](ABENCDS_OBJECT_GLOSRY.html). There are [typed literals](ABENTYPED_LITERAL_GLOSRY.html) and [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html) available.

See also:

**logical expression**

Formulation of a condition for [operands](ABENOPERAND_GLOSRY.html). A logical expression is a single [relational expression](ABENRELATIONAL_EXPRESSION_GLOSRY.html) or is made up of multiple relational expressions combined by [Boolean operators](ABENBOOLEAN_OPERATOR_GLOSRY.html). The result of a logical expression is a [truth value](ABENTRUTH_VALUE_GLOSRY.html), that is, either true or false.

**main annotation**

Also called root annotation. The [CDS annotation](ABENCDS_ANNOTATION_GLOSRY.html) defined after the statement `DEFINE ANNOTATION` in a [CDS annotation definition](ABENCDS_ANNOTATION_GLOSRY.html), or a name of an [annotation](ABENCDS_ANNOTATION_GLOSRY.html) specified on its own or in front of a period in the [annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html). A main annotation can be structured using [subannotations](ABENSUB_ANNOTATION_GLOSRY.html).

**null value**

A special value returned by a [database](ABENDATABASE_GLOSRY.html) to indicate an undefined value or result. There are no special null values in ABAP. In assignments made to ABAP [data objects](ABENDATA_OBJECT_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html), Native SQL, and [AMDP](ABENAMDP_GLOSRY.html), null values are transformed to type-dependent [initial values](ABENINITIAL_VALUE_GLOSRY.html). The [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) for accessing the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and [internal tables](ABENINTERNAL_TABLE_GLOSRY.html) as [data sources](ABAPSELECT_ITAB.html) of [ABAP SQL queries](ABENASQL_QUERY_GLOSRY.html), however, handles null values as null values.

[ABAP SQL - Null Values](ABENABAP_SQL_NULL_VALUES.html)

[ABAP CDS - Null Values](ABENCDS_NULL_VALUES.html)

**numeric literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) that has a [numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html) and whose characters represent a numeric value.

See also:

**numeric text literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) that contains [numeric text](ABENNUMERIC_TEXT_GLOSRY.html) and has the length of the specified characters. The data type is [`n`](ABENBUILTIN_TYPES_CHARACTER.html) or [`NUMC`](ABENDDIC_BUILTIN_TYPES.html).

See also:

**operand**

A component of an [ABAP statement](ABENABAP_STATEMENT_GLOSRY.html) or of a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html) at an [operand position](ABENOPERAND_POSITION_GLOSRY.html). An operand can be an [elementary operand](ABENELEMENTARY_OPERAND_GLOSRY.html) or an [expression](ABENEXP_GLOSRY.html).

There are different types of operands:

**operand position**

Position of an [ABAP statement](ABENABAP_STATEMENT_GLOSRY.html) or of a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html) at which an [operand](ABENOPERAND_GLOSRY.html) is listed. There are [read](ABENREAD_POSITION_GLOSRY.html) and [write positions](ABENWRITE_POSITION_GLOSRY.html). In an ABAP statement, such an operand position is typed with an [operand type](ABENOPERAND_TYPE_GLOSRY.html) and appropriate [data objects](ABENDATA_OBJECT_GLOSRY.html) or [expressions](ABENEXPRESSION_GLOSRY.html) can be specified. The operand positions for the latter are [expression positions](ABENEXPRESSION_POSITION_GLOSRY.html). Besides that there are other operand positions, where types, callable units or other external resources such as [CDS entities](ABENCDS_ENTITY_GLOSRY.html) or [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) can be specified as operands.

**operator**

Component of an [ABAP statement](ABENABAP_STATEMENT_GLOSRY.html) or of a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html) that, when combined with [operands](ABENOPERAND_GLOSRY.html), forms an [expression](ABENEXP_GLOSRY.html). When the statement is executed, an operation is executed for two operands connected by one operator, and the result is processed further in the statement. There are [arithmetic](ABENARITHMETIC_OPERATOR_GLOSRY.html), [bit](ABENBIT_OPERATOR_GLOSRY.html), [string](ABENSTRING_OPERATOR_GLOSRY.html), [Boolean](ABENBOOLEAN_OPERATOR_GLOSRY.html), [relational](ABENREL_OPERATOR_GLOSRY.html), and [assignment operators](ABENASSIGNMENT_OPERATOR_GLOSRY.html). There are also operators that do not combine operands, but perform other operations in [operand positions](ABENOPERAND_POSITION_GLOSRY.html). Operators of this type are the [dereferencing operator](ABENDEREFERENCING_OPERAT_GLOSRY.html), [declarations operators](ABENDECLARATION_OPERATOR_GLOSRY.html), and [constructor operators](ABENCONSTRUCTOR_OPERATOR_GLOSRY.html). Finally, the [literal operator](ABENASSIGNMENT_OPERATOR_GLOSRY.html) is used to combine two [literals](ABENABAP_LITERAL_GLOSRY.html).

**outer join**

A [type of join](ABENJOIN_TYPE_GLOSRY.html). There are two types of outer joins:

**packed number literal**

A [numeric literal](ABENNUMERIC_LITERAL_GLOSRY.html) of [packed number type](ABENPACKED_NUMBER_TYPE_GLOSRY.html).

See also:

**path expression**

A sequence of [associations](ABENASSOCIATION_GLOSRY.html) specified at an operand position. Either an [SQL path expression](ABENSQL_PATH_EXPRESSION_GLOSRY.html) or a [mesh path expression](ABENMESH_PATH_EXPRESSION_GLOSRY.html).

**path specification**

*\->*\\ [Path expression](ABENPATH_EXPRESSION_GLOSRY.html)

**quantity field literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) of the data type [`QUAN`](ABENDDIC_BUILTIN_TYPES.html).

See also:

**query**

*\->*\\ [database query](ABENDB_QUERY_GLOSRY.html)

**replacement object**

A replacement object is a [CDS view](ABENCDS_VIEW_GLOSRY.html) that can be specified for a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) or a [DDIC database view](ABENDATABASE_VIEW_GLOSRY.html). In case of a read access using [ABAP SQL](ABENABAP_SQL_GLOSRY.html), the replacement object is addressed instead of the original object.

**return value**

The result of [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html), [built-in functions](ABENBUILTIN_FUNCTION_GLOSRY.html), and [CDS scalar functions](ABENCDS_SCALAR_FUNCTION_GLOSRY.html).

**reuse expression**

A [CDS element](ABENCDS_ELEMENT_GLOSRY.html) that reuses an expression from the `SELECT` list of the same entity using the syntax [`$projection`](ABENCDS_REUSABLE_EXPRESSION_V2.html).

**right outer join**

A [type of join](ABENJOIN_TYPE_GLOSRY.html) that determines the same rows as an [inner join](ABENINNER_JOIN_GLOSRY.html) and an additional row for each row of the right [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html) that is not included by the [join conditions](ABENJOIN_CONDITION_GLOSRY.html). In these rows, the columns coming from the left data source contain [null values](ABENNULL_VALUE_GLOSRY.html).

**root annotation**

*\->*\\ [main annotation](ABENMAIN_ANNOTATION_GLOSRY.html)

**SAP annotation**

[CDS annotation](ABENCDS_ANNOTATION_GLOSRY.html) delivered by SAP as a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). There are the following categories of SAP annotations:

**SDL source code**

[CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html) for [CDS service definitions](ABENCDS_SERVICE_DEFINITION_GLOSRY.html) in [CDS SDL](ABENCDS_SDL_GLOSRY.html).

**self-association**

An [association](ABENASSOCIATION_GLOSRY.html) in which the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) and the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) are the same. Also referred to as reflexive association.

**service binding**

SB for short. A service binding is a [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that binds a [CDS service definition](ABENCDS_SERVICE_DEFINITION_GLOSRY.html) to a communication protocol and publishes it as a [business service](ABENBS_GLOSRY.html) of [AS ABAP](ABENAS_ABAP_GLOSRY.html).

**session variable**

A global variable of a [database system](ABENDATABASE_SYSTEM_GLOSRY.html) that contains information about the current context. The [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) has special ABAP-specific session variables whose content matches the value of certain [ABAP system fields](ABENSYSTEM_FIELD_GLOSRY.html) when accessed from ABAP. In [CDS views](ABENCDS_VIEW_GLOSRY.html), these ABAP-specific session variables can be accessed on all supported platforms.

**set operator**

A set operator merges the result sets of multiple queries into a single result set. In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) and [ABAP SQL](ABENABAP_SQL_GLOSRY.html), the following set operators are available:

[Set operators in CDS view entities](ABENCDS_SET_OPERATORS.html)

[Set operators in ABAP SQL](ABAPUNION.html)

**simple case distinction**

A [case distinction](ABENCASE_DISTINCTION_GLOSRY.html) that matches an operand to another operand specified in one or more `WHEN` clauses. Available in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) and [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

**source cardinality**

The [cardinality](ABENCARDINALITY_GLOSRY.html) of a [join](ABENJOIN_GLOSRY.html) or [association](ABENASSOCIATION_GLOSRY.html) consists of a source cardinality and a [target cardinality](ABENTARGET_CARDINALITY_GLOSRY.html). The source cardinality describes the number of matching entries for the entries of the joined data source. For example, a source cardinality of one means that each record of the joined data source has zero or one matching entry in the original data source.

**SQL expression**

An [expression](ABENEXP_GLOSRY.html) in an [ABAP SQL statement](ABENABAP_SQL_GLOSRY.html) or in [CDS DDL](ABENCDS_DDL_GLOSRY.html) that is evaluated by the database.

**SQL function**

Built-in database platform function that can be used in [SQL](ABENSQL_GLOSRY.html). In [ABAP SQL](ABENABAP_SQL_FUNCTIONS.html) and in the [CDS DDL](ABENCDS_BUILTIN_FUNCTIONS_V2.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html), a set of SQL functions can be accessed platform-independently.

**SQL path expression**

Specifies a [CDS association path](ABENCDS_ASSOCIATION_PATH_GLOSRY.html), a [CTE association path](ABENCTE_ASSOCIATION_PATH_GLOSRY.html), or a [CDS/CTE association path](ABENCDS_CTE_ASSOC_PATH_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) or [ABAP CDS](ABENABAP_CDS_GLOSRY.html). A SQL path expression can be used as a data source, or for specifying a [SQL path target field](ABENSQL_TARGET_FIELD_GLOSRY.html) in an operand position. For this, [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html) are implicitly transformed into [joins](ABENJOIN_GLOSRY.html). See

**SQL path target field**

A field that is specified behind a [SQL path expression](ABENSQL_PATH_EXPRESSION_GLOSRY.html).

**SQL-based scalar function**

[CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) that is evaluated by an SQL environment. SQL-based scalar functions can be used in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) in operand positions that expect scalar values.

SQL-based scalar functions can be [user-defined functions](ABENCDS_USER_FUNC_GLOSRY.html) or [system functions](ABENCDS_SYSTEM_FUNC_GLOSRY.html).

A CDS scalar function consists of three development objects:

**standalone data type**

A [data type](ABENDATA_TYPE_GLOSRY.html) that is defined using the statement [`TYPES`](ABAPTYPES.html) in an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html), as a data type of the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) or as a [CDS entity](ABENCDS_ENTITY_GLOSRY.html). See also [bound data type](ABENBOUND_DATA_TYPE_GLOSRY.html).

**static external entity**

A [CDS external entity](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html) that uses the addition `PROVIDED BY` to specify a [logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html) in its [data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html). Static external entities can be used as data sources in [ABAP SQL](ABENABAP_SQL_GLOSRY.html)\\ `SELECT` statements, in other [CDS entities](ABENCDS_ENTITY_GLOSRY.html), and in [ABAP Managed Database Procedures](ABENABAP_MANAGED_DB_PROC_GLOSRY.html) (AMDP).

**string literal**

Either [text string literal](ABENTEXT_STRING_LITERAL_GLOSRY.html) or [byte string literal](ABENBYTE_STRING_LITERAL_GLOSRY.html).

**structured type**

[Data type](ABENDATA_TYPE_GLOSRY.html) of a [structure](ABENSTRUCTURE_GLOSRY.html). It contains other data types as [structure components](ABENSTRUCTURE_COMPONENT_GLOSRY.html). A named structured type is either defined as a [DDIC structure](ABENDDIC_STRUCTURE_GLOSRY.html), a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) or inside an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) using the statement [`TYPES BEGIN OF`](ABAPTYPES_STRUC.html).

**sub-annotation**

[CDS annotation](ABENCDS_ANNOTATION_GLOSRY.html) that is specified in curly brackets `\{ \}` in an [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) after another annotation. When specifying a sub-annotation in [annotation syntax](ABENCDS_ANNOTATION_SYNTAX_GLOSRY.html), curly brackets [`\{ \}`](ABENCDS_ANNOTATIONS_SYNTAX.html) or [structured names](ABENCDS_ANNOTATIONS_SYNTAX_NAME.html) separated by periods are also used.

**table buffering**

[Buffering](ABENSAP_BUFFERING_OLD_GLOSRY.html) of data from [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html), [DDIC database views](ABENDATABASE_VIEW_GLOSRY.html), or from [CDS entities](ABENCDS_ENTITY_GLOSRY.html) in a [table buffer](ABENTABLE_BUFFER_GLOSRY.html) in the [shared memory](ABENSHARED_MEMORY_GLOSRY.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html). Whether and how a DDIC database table or a DDIC database view is buffered is determined by its [technical settings](ABENDDIC_DATABASE_TABLES_BUFFER.html). For a CDS entity, the buffering is determined by annotations and a [CDS entity buffer](ABENCDS_ENTITY_BUFFER_GLOSRY.html). Buffering is managed by the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html). Table buffering is applied implicitly when the database is accessed using [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and from classic dynpros. In ABAP SQL, the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) processes the tabular data in the table buffer.

**text field literal**

A [character literal](ABENCHARACTER_LITERAL_GLOSRY.html) of the [text field type](ABENTEXT_FIELD_TYPE_GLOSRY.html)\\ [`c`](ABENBUILTIN_TYPES_CHARACTER.html) or [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with the length of the specified characters. A text field literal can be linked to a [text symbol](ABENTEXT_SYMBOL_GLOSRY.html).

See also:

**text literal**

*\->*\\ [Character literal](ABENCHARACTER_LITERAL_GLOSRY.html)

**text string literal**

A [character literal](ABENCHARACTER_LITERAL_GLOSRY.html) of the [text string](ABENTEXT_STRING_TYPE_GLOSRY.html) type [`string`](ABENBUILTIN_TYPES_CHARACTER.html).

See also:

**time literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) of the data type [`TIMN`](ABENDDIC_BUILTIN_TYPES.html) or [`TIMS`](ABENDDIC_BUILTIN_TYPES.html).

See also:

**time stamp literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) of the data type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

See also:

**tuning object**

A [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that defines technical settings for certain repository objects. A tuning object can be defined and transported separately from the repository object for which it is defined. The following types of tuning objects are currently available:

**typed literal**

A [literal](ABENLITERAL_GLOSRY.html) whose [data type](ABENDATA_TYPE_GLOSRY.html) is specified explicitly.

See also [untyped literal](ABENUNTYPED_LITERAL_GLOSRY.html).

**unit key literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) of the data type [`UNIT`](ABENDDIC_BUILTIN_TYPES.html) that contains a [unit key](ABENUNIT_GLOSRY.html).

See also:

**user condition**

Part of an [access condition](ABENACCESS_CONDITION_GLOSRY.html) in a [CDS role](ABENCDS_ROLE_GLOSRY.html) that compares an element of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) with the current [user name](ABENUSER_NAME_GLOSRY.html).

**writable CDS external entity**

A [dynamic external entity](ABENCDS_DYNAMIC_EE_GLOSRY.html) that allows modifying data on an external database system using the [ABAP SQL](ABENABAP_SQL_GLOSRY.html)\\ [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), and [`DELETE`](ABAPDELETE_DBTAB.html) operations. It is defined using the statement [`WRITABLE`](ABENCDS_WRITABLE_EE.html) in the [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html). An [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) is required to establish a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) and enable the [logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html) for write access.

**writable CDS view entity**

A [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) that allows modifying data on the database using the [ABAP SQL](ABENABAP_SQL_GLOSRY.html)\\ [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), and [`DELETE`](ABAPDELETE_DBTAB.html) operations. Defined using the statement [`WRITABLE`](ABENCDS_DEFINE_WRTBL_VIEW_V2.html).

**writable database object**

A [Repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that allows modifying data on the database.

-   [CDS entity buffers](ABENCDS_ENTITY_BUFFER_GLOSRY.html)

-   [Aggregate expressions in ABAP SQL](ABAPSELECT_AGGREGATE.html)
-   [Aggregate expressions in CDS](ABENCDS_AGGREGATE_FUNCTIONS_V2.html)

-   [Aggregate functions in ABAP SQL](ABENSQL_AGG_FUNC.html)
-   [Aggregate functions in ABAP CDS](ABENCDS_AGGREGATE_FUNCTIONS_V2.html)

-   The statement [`ALIASES`](ABAPALIASES.html) can be used to declare an alias name for an [interface component](ABENINTERFACE_COMPONENT_GLOSRY.html) in a [class](ABENCLASS_GLOSRY.html) or in a [compound interface](ABENCOMPOUND_INTERFACE_GLOSRY.html).
-   The addition [`ALIAS`](ABAPTYPES_PRIMARY_KEY.html) can be used to specify an alias for the [primary table key](ABENPRIMARY_KEY_GLOSRY.html) and [secondary table key](ABENSECONDARY_KEY_GLOSRY.html) when declaring an [internal table](ABENINTERNAL_TABLE_GLOSRY.html).
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), the addition `AS` can be used to define aliases for columns of the result set in a [`SELECT`](ABAPSELECT_LIST.html) list or for data sources in the [`FROM`](ABAPFROM_CLAUSE.html) clause.
-   In [ABAP CDS](ABENABAP_CDS_GLOSRY.html), the addition `AS` can be used to define aliases for elements in the `SELECT` list or for [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html).

-   In general ABAP, an [arithmetic expression](ABAPCOMPUTE_ARITH.html) is a [calculation expression](ABENCALCULATION_EXPRESSION_GLOSRY.html). It is assigned a [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) that is used to execute the calculation. The result of an arithmetic expression is a numeric value that exists in the calculation type. Arithmetic expressions occur in the [read positions of specific statements](ABENOPERANDS_EXPRESSIONS.html).
-   In ABAP SQL, [arithmetic expressions](ABENSQL_ARITH.html) are [SQL expressions](ABENSQL_EXPRESSION_GLOSRY.html).
-   In ABAP CDS, [arithmetic expressions](ABENCDS_ARITHMETIC_EXPRESSION_V2.html) can be used in the `SELECT` list of CDS view entities.

-   In ABAP, arithmetic operators are [`+`](ABENARITH_OPERATORS.html), [`-`](ABENARITH_OPERATORS.html), [`*`](ABENARITH_OPERATORS.html), [`/`](ABENARITH_OPERATORS.html), [`DIV`](ABENARITH_OPERATORS.html), [`MOD`](ABENARITH_OPERATORS.html), and [`**`](ABENARITH_OPERATORS.html). See the topic [`arith_exp` - Arithmetic Operators](ABENARITH_OPERATORS.html) for further details.
-   In ABAP SQL, arithmetic operators are [`+`](ABENSQL_ARITH.html), [`-`](ABENSQL_ARITH.html), [`*`](ABENSQL_ARITH.html), [`/`](ABENSQL_ARITH.html).
-   In ABAP CDS, arithmetic operators are [`+`](ABENCDS_ARITHMETIC_EXPRESSION_V2.html), [`-`](ABENCDS_ARITHMETIC_EXPRESSION_V2.html), [`*`](ABENCDS_ARITHMETIC_EXPRESSION_V2.html), [`/`](ABENCDS_ARITHMETIC_EXPRESSION_V2.html).

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), binary floating point literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Literals in ABAP SQL](ABENABAP_SQL_LITERALS.html)
-   [Literals in CDS](ABENCDS_LITERAL_V2.html).

-   In ABAP, built-in functions can be used as [expressions](ABENEXPRESSION_GLOSRY.html) in [certain operand positions](ABENOPERANDS_EXPRESSIONS.html). [Numeric functions](ABENMATHEMATICAL_FUNKTION_GLOSRY.html), [string functions](ABENSTRING_FUNCTION_GLOSRY.html), [table functions](ABENTABLE_FUNCTION_GLOSRY.html), and [byte chain functions](ABENBYTE_CHAIN_FUNCTION_GLOSRY.html) that have a return value of the corresponding data type can be distinguished. [Description functions](ABENDESCRIPTION_FUNCTION_GLOSRY.html) that provide information on data objects, are also available. The names of the built-in functions are a subset of the [reserved names](ABENABAP_WORD_GLOSRY.html). For further details, see the topic [Built-In Functions](ABENBUILT_IN_FUNCTIONS.html).
-   For ABAP SQL, [built-in functions](ABENSQL_BUILTIN_FUNC.html) are part of the [SQL expressions](ABENSQL_EXPRESSION_GLOSRY.html).
-   For built-in functions in ABAP CDS, see the topic [CDS built-in function](ABENCDS_BUILTIN_FUNC_GLOSRY.html).

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), byte field literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html)

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), byte string literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), the operator [`CAST`](ABENSQL_CAST.html) is used.
-   In the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of [ABAP CDS](ABENABAP_CDS_GLOSRY.html), the operator `CAST` is used (see [cast in CDS view entities](ABENCDS_CAST_EXPRESSION_V2.html) or [cast in CDS DDIC-based views (obsolete)](ABENCDS_CAST_EXPRESSION_V1.html)).

-   [currency field](ABENCURRENCY_FIELD_GLOSRY.html)
-   [DDIC currency field](ABENDDIC_CURRENCY_FIELD_GLOSRY.html)

-   CDS DDL aspect
-   [CDS DCL aspect](ABENCDS_DCL_ASPECT_GLOSRY.html)

-   [CDS table entities](ABENCDS_TABLE_ENTITY_GLOSRY.html)
-   [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html)
-   [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html)
-   [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html)
-   [CDS external entities](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html)
-   [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html)
-   [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html)
-   [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html)
-   [CDS DDIC-based entities](ABENCDS_DDIC_BASED_ENTITY_GLOSRY.html).

-   [CDS view entity buffer](ABENCDS_VIEW_ENTITY_B_GLOSRY.html)
-   [CDS table entity buffer](ABENCDS_TABLE_ENTITY_B_GLOSRY.html)
-   [CDS propagated buffer](ABENCDS_PROP_BUFFER_GLOSRY.html)

-   [`EXTEND VIEW ENTITY`](ABENCDS_EXTEND_VIEW_ENTITY.html): [CDS view entity extension](ABENCDS_VIEW_ENTITY_EXTEND_GLOSRY.html) for a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html).
-   [`EXTEND CUSTOM ENTITY`](ABENCDS_EXTEND_CUSTOM_ENTITY.html)\\ [CDS custom entity extension](ABENCDS_CUS_ENTITY_EXTEND_GLOSRY.html) for a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html).
-   [`EXTEND ABSTRACT ENTITY`](ABENCDS_EXTEND_ABSTRACT_ENTITY.html)\\ [CDS abstract entity extension](ABENCDS_ABS_ENTITY_EXTEND_GLOSRY.html) for a [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html).
-   [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html) [CDS DDIC-based view extension](ABENCDS_VIEW_EXTEND_GLOSRY.html) for a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html).

-   [dynamic external entities](ABENCDS_DYNAMIC_EE_GLOSRY.html)
-   [static external entities](ABENCDS_STATIC_EE_GLOSRY.html)
-   [writable external entities](ABENWRITABLE_EE_GLOSRY.html)

-   [CDS Operands in CDS View Entities](ABENCDS_OPERANDS_AND_EXPR_V2.html)
-   [CDS Operands in CDS DDIC-based Views](ABENCDS_OPERANDS_AND_EXPR_V1.html)

-   [CDS transactional queries](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html)
-   [CDS transactional interfaces](ABENCDS_TRANS_INTERFACE_GLOSRY.html)
-   [CDS analytical projection views](ABENCDS_ANALYTICAL_PV_GLOSRY.html)

-   [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html), see the topic [`PROVIDER CONTRACT`](ABENCDS_PV_PROVIDER_CONTRACT.html) for more details.
-   [CDS service definition](ABENCDS_SERVICE_DEFINITION_GLOSRY.html), see the topic [`PROVIDER CONTRACTS`](ABENSRVD_PROVIDER_CONTRACT.html) for more details.

-   [quantity field](ABENQUANTITY_GLOSRY.html)
-   [DDIC quantity field](ABENDDIC_QUANTITY_GLOSRY.html)

-   [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) for [CDS data definitions](ABENCDS_DATA_DEFINITION_GLOSRY.html)
-   [DDLA source code](ABENDDLA_SOURCE_CODE_GLOSRY.html) for [CDS annotation definitions](ABENCDS_ANNO_DEFINITION_GLOSRY.html)
-   [DDLX source code](ABENDDLX_SOURCE_CODE_GLOSRY.html) for [CDS metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html)
-   [DCL source code](ABENDCL_SOURCE_CODE_GLOSRY.html) for [CDS roles](ABENCDS_ROLE_GLOSRY.html)
-   [SDL source code](ABENSDL_SOURCE_CODE_GLOSRY.html) for [CDS service definitions](ABENCDS_SERVICE_DEFINITION_GLOSRY.html)

-   [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html)
-   [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html)
-   [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html)
-   [CDS table entities](ABENCDS_TABLE_ENTITY_GLOSRY.html)
-   [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html)
-   [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html)
-   [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html)
-   [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html)
-   [CDS DDIC-based view extension](ABENCDS_VIEW_EXTEND_GLOSRY.html)
-   [CDS view entity extension](ABENCDS_VIEW_ENTITY_EXTEND_GLOSRY.html)

-   [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html)
-   [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html)
-   [CDS analytical queries](ABENCDS_ANALYTIC_QUERY_GLOSRY.html)

-   [CDS simple type](ABENCDS_SIMPLE_TYPE_GLOSRY.html)
-   [CDS enumerated type](ABENCDS_ENUM_TYPE_GLOSRY.html)

-   [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) defined by [`DEFINE VIEW ENTITY`](ABENCDS_DEFINE_VIEW_ENTITY.html).
-   [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html) defined by [`DEFINE VIEW ENTITY AS PROJECTION`](ABENCDS_DEFINE_VIEW_AS_PROJECTION.html).
-   [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) defined by [`DEFINE VIEW`](ABENCDS_DEFINE_VIEW_V1.html).

-   In general ABAP, character literals are [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), character literals can be [typed literals](ABENTYPED_LITERAL_GLOSRY.html) or [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).

-   [Character Literals in ABAP](ABENUNTYPED_CHARACTER_LITERALS.html)
-   [Literals in ABAP SQL](ABENABAP_SQL_LITERALS.html)
-   [Literals in CDS](ABENCDS_LITERAL_V2.html)

-   Implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html).
-   [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) can access [client-safe](ABENCLIENT_SAFE_GLOSRY.html)\\ [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) only.
-   [CDS entities](ABENCDS_ENTITY_GLOSRY.html) that are [released APIs](ABENRELEASED_API_GLOSRY.html) must be [client-safe](ABENCLIENT_SAFE_GLOSRY.html).

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), client literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   A [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) or DDIC view in [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) is client-dependent if the first column is a [client column](ABENCLIENT_COLUMN_GLOSRY.html). The system table `T000`, which contains the [AS ABAP](ABENAS_ABAP_GLOSRY.html)\\ [client IDs](ABENCLIENT_IDENTIFIER_GLOSRY.html), is an exception to this rule.
-   The client dependency of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is determined by its data sources. Client handling is by done implicitly by filtering the [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ `$session.client`.
-   The client dependency of [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) is declared in the [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html) by the [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ `@CLientHandling.type`.

-   AMDP methods that have the [ABAP language version](ABENABAP_VERSION_GLOSRY.html)\\ [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html) or are a [released API](ABENRELEASED_API_GLOSRY.html) with a [C1 contract](ABENC1_CONTRACT_GLOSRY.html) or a [C4 contract](ABENC4_CONTRACT_GLOSRY.html) must be [client-safe](ABENAMDP_CLIENT_SAFETY.html) and must access client-safe objects only.
-   For a [CDS entity](ABENCDS_ENTITY_GLOSRY.html), an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)` can be specified that enforces checks that guarantee its client safety. For CDS entities that do not have this annotations but are [released APIs](ABENRELEASED_API_GLOSRY.html), the checks are done implicitly.

-   [DDIC currency field](ABENDDIC_CURRENCY_FIELD_GLOSRY.html)
-   [ABAP CDS amount field](ABENCDS_AMOUNT_FIELD_GLOSRY.html)

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), currency field literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), currency key literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   [ABAP SQL](ABENABAP_SQL_GLOSRY.html) does not support DCL. On an Application Server ABAP, the functionality of the [DCL](ABENCDS_DCL_GLOSRY.html) is implemented using [authorization objects](ABENAUTHORIZATION_OBJECT_GLOSRY.html) and SAP locks.
-   [ABAP CDS](ABENABAP_CDS_GLOSRY.html) provides a [DCL](ABENCDS_DCL_GLOSRY.html) that implements an [access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html), where database objects can be linked to authorization objects of AS ABAP.

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), decimal floating point literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   [ABAP enumerated type](ABENENUMERATED_TYPE_GLOSRY.html)
-   [CDS enumerated type](ABENCDS_ENUM_TYPE_GLOSRY.html)

-   [Enumerated types in ABAP](ABENENUMERATED_TYPES_USAGE.html)
-   [Enumerated types in ABAP CDS](ABENCDS_ENUMERATION_TYPES.html)

-   In general ABAP, integer literals are [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), integer literals can be [typed literals](ABENTYPED_LITERAL_GLOSRY.html) or [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).

-   [Numeric Literals in ABAP](ABENUNTYPED_NUMBER_LITERALS.html)
-   [Literals in ABAP SQL](ABENABAP_SQL_LITERALS.html)
-   [Literals in CDS](ABENCDS_LITERAL_V2.html)

-   DDIC views in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html)
-   [Join expressions](ABENJOIN_EXPRESSION_GLOSRY.html) in [queries](ABENASQL_QUERY_GLOSRY.html) of [ABAP SQL](ABENABAP_SQL_GLOSRY.html)
-   [Join expressions](ABENJOIN_EXPRESSION_GLOSRY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of [ABAP CDS](ABENABAP_CDS_GLOSRY.html)

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), language key literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   [ABAP literal](ABENABAP_LITERAL_GLOSRY.html)
-   [ABAP SQL literal](ABENABAP_SQL_LITERAL_GLOSRY.html)
-   [CDS literal](ABENCDS_LITERAL_GLOSRY.html)

-   In general ABAP, logical expressions are used in [control statements](ABENCONTROL_STATEMENT_GLOSRY.html) or other statements that contain conditions, as well as in [conditional expressions](ABENCONDITIONAL_EXPRESSION_GLOSRY.html) and [Boolean functions](ABENBOOLE_FUNCTION_GLOSRY.html). For further details, see the topic [Logical Expressions (`log_exp`)](ABENLOGEXP.html).
-   In ABAP SQL, logical expressions are used in conditions, such as `WHERE` and `ON` conditions.
-   In ABAP CDS, logical expressions are used in conditions, such as `WHERE` and `ON` conditions.

-   In general ABAP, numeric literals are [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), numeric literals can be [typed literals](ABENTYPED_LITERAL_GLOSRY.html) or [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).

-   [Numeric Literals in ABAP](ABENUNTYPED_NUMBER_LITERALS.html)
-   [Literals in ABAP SQL](ABENABAP_SQL_LITERALS.html)
-   [Literals in CDS](ABENCDS_LITERAL_V2.html)

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), numeric text literals are available as [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).
-   In [ABAP CDS](ABENABAP_CDS_GLOSRY.html), numeric text literals can be [typed literals](ABENTYPED_LITERAL_GLOSRY.html) or [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).

-   [Literals in ABAP SQL](ABENABAP_SQL_LITERALS.html)
-   [Literals in CDS](ABENCDS_LITERAL_V2.html)

-   [ABAP operands](ABENABAP_OPERAND_GLOSRY.html)
-   [CDS operands](ABENCDS_OPERAND_GLOSRY.html)

-   [left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html)
-   [right outer join](ABENRIGHT_OUTER_JOIN_GLOSRY.html)

-   In general ABAP, packed number literals are [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), packed number literals can be [typed literals](ABENTYPED_LITERAL_GLOSRY.html) or [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).

-   [Numeric Literals in ABAP](ABENUNTYPED_NUMBER_LITERALS.html)
-   [Literals in ABAP SQL](ABENABAP_SQL_LITERALS.html)
-   [Literals in CDS](ABENCDS_LITERAL_V2.html)

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), quantity field literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   In the [ABAP language](ABENABALA_GLOSRY.html), the result of functional methods is the [formal parameter](ABENFORMAL_PARAMETER_GLOSRY.html) defined by the addition [`RETURNING`](ABAPMETHODS_FUNCTIONAL.html) of the statement [`[CLASS-]`](ABAPCLASS-METHODS.html)[`METHODS`](ABAPMETHODS.html).
-   in [ABAP CDS](ABENABAP_CDS_GLOSRY.html), the result of a CDS scalar function whose data type is defined after the addition [`RETURNS`](ABENCDS_DEFINE_SCALAR_FUNCTION.html).

-   [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html), which are evaluated by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) for every [CDS object](ABENCDS_OBJECT_GLOSRY.html).
-   [Framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html), which are evaluated by the frameworks of other software components.

-   `EXCEPT` returns all distinct rows of the first result set that are not part of the following result sets.
-   `INTERSECT` returns all distinct rows that are part of all result sets.
-   `UNION` merges the result sets of all queries.

-   [SQL expressions in ABAP SQL](ABAPSQL_EXPR.html)
-   [SQL expressions in CDS DDL](ABENCDS_EXPRESSIONS_V2.html)

-   [Path Expression in CDS](ABENCDS_PATH_EXPRESSION_V2.html)
-   [Path Expression in ABAP SQL](ABENABAP_SQL_PATH.html).

-   A [CDS entity](ABENCDS_ENTITY_GLOSRY.html) defined using [`DEFINE SCALAR FUNCTION`](ABENCDS_DEFINE_SCALAR_FUNCTION.html) in a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html).
-   A [scalar function implementation reference](ABENCDS_SCALAR_FUNC_IMPL_REF.html) that binds the scalar function to the SQL environment and to an [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html).
-   An [AMDP function](ABENAMDP_FUNCTION_GLOSRY.html) that implements the scalar function as [database function](ABENDATABASE_FUNCTION_GLOSRY.html).

-   In general ABAP, text field literals are [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html) delimited by single quotes.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), text field literals can be [typed literals](ABENTYPED_LITERAL_GLOSRY.html) or [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).

-   [Character Literals in ABAP](ABENUNTYPED_CHARACTER_LITERALS.html)
-   [Literals in ABAP SQL](ABENABAP_SQL_LITERALS.html)
-   [Literals in CDS](ABENCDS_LITERAL_V2.html)

-   In general ABAP, text string literals are [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html) delimited by backquotes.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), text string literals can be [typed literals](ABENTYPED_LITERAL_GLOSRY.html) or [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).

-   [Character Literals in ABAP](ABENUNTYPED_CHARACTER_LITERALS.html)
-   [Literals in ABAP SQL](ABENABAP_SQL_LITERALS.html)
-   [Literals in CDS](ABENCDS_LITERAL_V2.html)

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), time literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), time stamp literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   [HANA tuning objects](ABENHANA_TUNING_OBJECT_GLOSRY.html) defined in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) in [DDIC DDL](ABENDDIC_DCL_GLOSRY.html).
-   [ABAP tuning objects](ABENABAP_TUNING_OBJECT_GLOSRY.html) defined as [CDS objects](ABENCDS_OBJECT_GLOSRY.html) in [CDS DDL](ABENCDS_DDL_GLOSRY.html).

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), unit key literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   In [ABAP CDS](ABENABAP_CDS_GLOSRY.html), [CDS table entities](ABENCDS_TABLE_ENTITY_GLOSRY.html), [writable CDS view entities](ABENWRITABLE_V2_GLOSRY.html), and [writable CDS external entities](ABENWRITABLE_EE_GLOSRY.html) allow for the modification of data with the [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), and [`DELETE`](ABAPDELETE_DBTAB.html).
-   In [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html), [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) and DDIC table views allow data change operations.

abenabap.html abencds.html