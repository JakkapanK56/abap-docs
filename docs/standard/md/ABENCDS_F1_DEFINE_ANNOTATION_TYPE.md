---
title: "ABENCDS_F1_DEFINE_ANNOTATION_TYPE"
description: |
  ABENCDS_F1_DEFINE_ANNOTATION_TYPE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_DEFINE_ANNOTATION_TYPE.htm"
abapFile: "ABENCDS_F1_DEFINE_ANNOTATION_TYPE.html"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "ABENCDS", "DEFINE", "ANNOTATION", "TYPE"]
---

`... dtype [enum \{ SYMBOL1; SYMBOL2; ... \}]\ [default val|#SYMBOL]`

Defines the [annotation values](ABENANNOTATION_VALUE_GLOSRY.html) to be specified when a [CDS annotation](ABENCDS_ANNOTATION_GLOSRY.html) defined using [`define annotation`](ABENCDS_F1_DEFINE_ANNOTATION.html) is [used](ABENCDS_ANNOTATIONS_SYNTAX.html) in a CDS entity.

`dtype` is used to define the type. The following tables show the possible options for `dtype` and their meaning for the annotation values. `dtype` and any predefined values are case-sensitive.

**Value Types**

**Reference Types**

When [used](ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html), the annotation value of a reference type must be specified as a character literal in quotation marks and without blanks. The object specified must exist.

`enum \{ SYMBOL1; SYMBOL; ... \}` can be used to specify a semicolon-separated (`;`) list of enumeration symbols `SYMBOL1`, `SYMBOL2`, ... in uppercase letters and in curly brackets. A semicolon must also be placed after the final entry in the list here. When an annotation is used, only one of the enumeration symbols prefixed with the `#` character can be used as an [annotation value](ABENANNOTATION_VALUE_GLOSRY.html). If enumeration symbols are specified for the type `String`, the symbols become the enumerated values explicitly. In this case, the length specified for `String` must be at least as long as the longest enumeration symbol.

`default` can be used to specify a type-compliant default value applied when an annotation is used and no explicit [annotation value](ABENANNOTATION_VALUE_GLOSRY.html) is specified. The following applies here:

The following annotation definition specifies truth values as possible annotation values of the annotation:

The annotation can be used as followed in CDS source code:

The following annotation definition specifies enumerated values as possible annotation values of the annotation. In the case of the type `String`, the enumeration symbols are also the enumerated values and a length of at least 10 must be specified for the type, since the longest enumeration symbol as 10 characters.

The annotation can be used as followed in CDS source code:

The following annotation definition specifies numeric literals as possible annotation values of the annotation (a default value is defined here).

The annotation can be used as follows in CDS source code, with and without a value being specified:

The following annotation definition has incorrect syntax. The specified length 1 is not sufficient for the specified default value of length 3.

-   Only `true` can be specified as a default value for the type `Boolean`.
-   If enumeration symbols are defined, the default value of one of these symbols must be prefixed with the `#` character.
-   No default value can be specified for reference types.
-   No default values can be specified for the elements of an [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html).

-   The truth values for the type `boolean` can also be specified as `'true'` and `'false'` in quotation marks.
-   The smallest feasible size is 1 for one character.
-   The default value defined using `default` describes the default value applied when the annotation is used in its framework. If an annotation is not used, there can be another default value (described in the documentation of the annotation). The default value of the annotation definition is ignored when the annotation is saved and [evaluated](ABENCDS_ANNOTATIONS_ANALYSIS.html) internally.

-   `@DemoAnnoBoolean: true`
-   `@DemoAnnoBoolean: false`
-   `@DemoAnnoBoolean: 'true'`
-   `@DemoAnnoBoolean: 'false'`

-   `@DemoAnnoEnum: #SHORT_TEXT`
-   `@DemoAnnoEnum: #TEXT`
-   `@DemoAnnoEnum: #LONG_TEXT`

-   `@DemoAnnoDefault`
-   `@DemoAnnoDefault: 100`

@Scope:\[#VIEW, #EXTEND\_VIEW\]\\ndefine annotation DemoAnnoBoolean : Boolean; @Scope:\[#VIEW, #EXTEND\_VIEW\]\\ndefine annotation DemoAnnoEnum : String(10) \\n enum\\{SHORT\_TEXT;TEXT;LONG\_TEXT;\\}; @Scope:\[#VIEW, #EXTEND\_VIEW\] \\ndefine annotation DemoAnnoDefault : Integer default 0; annotation DemoAnno : String(1) default 'XXX'; `**dtype**` **Annotation Value**\\ `Boolean` Truth values `true` and `false`. `Decimal(len,dec)` Numeric literal without quotation marks and with an optional decimal point and a maximum of `len` minus `dec` integer digits and a maximum of `dec` decimal places. A number between 1 and 31 can be specified for `len` and a number between 0 and 14 can be specified for `dec`, but `dec` cannot be greater than `len`. `DecimalFloat` Numeric literal without quotation marks. The same values can be specified as in the source field of an ABAP conversion from [`c` to `decfloat34`](ABENCONVERSION_TYPE_C.html)\\ `Integer` Numeric literal without quotation marks and decimal separator in the value range of the ABAP type [`i`](ABENBUILTIN_TYPES_NUMERIC.html). `String(len)` Character literal in quotation marks with a maximum length `len`. A number between 0 and 1298 can be specified for `len`. `**dtype**` **Annotation Value**\\ `AssociationRef` Name of a CDS association that is exposed in the `SELECT` list where the annotation is used. If the association is defined in the same CDS entity, the annotation value must be the association's name. If the association is defined in another entity, the annotation value must be a [path expression](ABENCDS_PATH_EXPRESSION_V2.html). `DevelopmentObjectRef` Name of a [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html). The types of repository objects that can be referenced are defined in the mandatory annotation [`@Metadata.reference.objectType`](ABENCDS_1247439601_ANNO.html). If the annotation `@Metadata.reference.objectType` has the value `#CLAS`,the annotation [`Metadata.reference.class.check.implementsInterfaces`](ABENCDS_218316848_ANNO.html) can optionally be specified to define a list of interfaces the class has to implement. `ElementRef` Name of an element of the CDS entity where the annotation is used. For elements of association targets, the annotation value is a [path expression](ABENCDS_PATH_EXPRESSION_V2.html). `EntityRef` Name of any CDS entity. `KeyElementRef` Name of a key field of the CDS entity where the annotation is used. `LocalDefinitionRef` Name of a [data source](ABENCDS_DATA_SOURCE_V2.html) of the current CDS entity. The data source can either be defined after `FROM` or as an [association](ABENCDS_SIMPLE_ASSOCIATION_V2.html). If an alias name is specified for the data source, this alias name must be specified as annotation value. `ParameterRef` Name of a parameter of the CDS entity where the annotation is used. abenabap.html abencds.html abencds\_annotations.html abencds\_anno\_definition.html abencds\_f1\_ddla\_syntax.html abencds\_f1\_define\_annotation.html