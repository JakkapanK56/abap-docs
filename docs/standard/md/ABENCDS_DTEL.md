---
title: "ABENCDS_DTEL"
description: |
  ABENCDS_DTEL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_DTEL.htm"
abapFile: "ABENCDS_DTEL.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "ABENCDS", "DTEL"]
---

`... data_element ...`

A [CDS simple type](ABENCDS_SIMPLE_TYPE_GLOSRY.html) can be typed using a [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html)\\ `data_element`. `data_element` can have any ABAP Dictionary type listed in the topic [ABAP CDS - Built-In Data Types](ABENCDS_OVERVIEW_BUILTIN_TYPES.html). ABAP Dictionary types which are not listed there, such as `abap.fltp`, are not available for [CDS user-defined types](ABENCDS_USER_DEFINED_TYPE_GLOSRY.html).

The technical properties of a DDIC data element are inherited from the data element by the CDS simple type. This means that the data type, length, and decimal places are inherited.

The following semantic DDIC properties are also inherited from a data element to a CDS simple type:

The DDIC properties are translated into annotation values of a simple type. The following table shows a mapping from a DDIC property to a CDS simple type annotation:

Details about these properties can be found in the following documentation: [DDIC - Semantic Properties of Domains](ABENDDIC_DOMAINS_SEMA.html) and [DDIC - Semantic Properties of Data Elements](ABENDDIC_DATA_ELEMENTS_SEMA.html).

The properties that are inherited from a DDIC type can be overridden in the CDS simple type if necessary.

The following example shows how annotations are inherited from DDIC objects to CDS simple types.

The system class `CL_DD_DDL_ANNOTATION_SERVICE` evaluates the annotations of the field `Char1Field`.

Result: The CDS simple type inherits the technical settings from the DDIC data element, converts them to annotation values, and passes them on when it is used in a CDS view entity.

-   [Conversion exit](ABENCONVERSION_EXIT_GLOSRY.html)
-   [**Lowercase letters**](ABENDDIC_DOMAINS_SEMA.html)
-   [**Change document**](ABENDDIC_DATA_ELEMENTS_SEMA.html)

-   [Search helps](ABENSEARCH_HELP_GLOSRY.html) are not inherited. Search helps can be defined in CDS simple types using the annotation `Consumption.valueHelpDefinition`.
-   The short label and long label of DDIC data elements have no corresponding annotation in CDS simple types. This information is not inherited.
-   The output length of a DDIC domain is not inherited. The output length is derived from the context, if necessary.

-   The DDIC domain `DEMO_BT_INHERITANCE` has the following properties:

-   Data type `CHAR1`, length 1
-   Output length 2
-   Conversion exit `ALV1`
-   It is not case sensitive, so all letters are converted to uppercase.

-   The DDIC data element `DEMO_BT_INHERITANCE` inherits the technical properties from the domain. Additionally, it specifies field labels.
-   The CDS simple type `DEMO_SIMPLE_TYPE_INHERITANCE` is based on the data element `DEMO_BT_INHERITANCE` and inherits its properties and texts:

-   The CDS view entity `DEMO_CDS_BT` uses the CDS simple type `DEMO_SIMPLE_TYPE_INHERITANCE` for a cast expression. As a result, the field `Char1Field` inherits the properties and texts from the CDS simple type.

define type demo\_simple\_type\_inheritance: demo\_bt\_inheritance; @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, simple type'\\ndefine root view entity DEMO\_CDS\_BT\\n as select from demo\_ddic\_types\\n\\{\\n key id,\\n int4,\\n cast(char1 as demo\_simple\_type\_inheritance) as Char1Field\\n\\}\\n DATA(o) = cl\_demo\_output=>new( ). \\ncl\_dd\_ddl\_annotation\_service=>get\_annos\_4\_element( \\n EXPORTING \\n entityname = 'DEMO\_CDS\_BT' \\n elementname = 'Char1Field' \\n IMPORTING \\n annos = FINAL(annos) ). \\n o->write( annos ). \\n o->display( ). **DDIC property**\\ \\ **CDS simple type annotation**\\ [Conversion exit](ABENDDIC_DOMAINS_SEMA.html)\\ \\ [`AbapCatalog.typeSpec.conversionExit`](ABENCDS_SIMPLE_TYPE_ANNO.html)\\ [Lowercase letters](ABENDDIC_DOMAINS_SEMA.html) \\ [`ObjectModel.upperCase`](ABENCDS_SIMPLE_TYPE_ANNO.html)\\ [Flag for change document](ABENDDIC_DATA_ELEMENTS_SEMA.html) \\ [`AbapCatalog.typeSpec.changeDocumentRelevant`](ABENCDS_SIMPLE_TYPE_ANNO.html)\\ [Field label, Heading](ABENDDIC_DATA_ELEMENTS_SEMA.html) [`EndUserText.heading`](ABENCDS_SIMPLE_TYPE_ANNO.html)\\ [Field label, Medium](ABENDDIC_DATA_ELEMENTS_SEMA.html)\\ [`EndUserText.label`](ABENCDS_SIMPLE_TYPE_ANNO.html)\\ [Short text](ABENDDIC_DATA_ELEMENTS_SEMA.html)\\ [`EndUserText.quickInfo`](ABENCDS_SIMPLE_TYPE_ANNO.html) abenabap.html abencds.html abencds\_tdl.html abencds\_types.html abencds\_define\_type.html abencds\_simple\_types.html abencds\_define\_simple\_type.html