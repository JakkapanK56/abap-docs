---
title: "ABAPSET_FLAGS"
description: |
  ABAPSET_FLAGS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSET_FLAGS.htm"
abapFile: "ABAPSET_FLAGS.html"
keywords: ["do", "if", "case", "data", "types", "ABAPSET", "FLAGS"]
---

`SET FLAGS src FROM NAMES fields \{ MAPPING \{ TYPE p_type \}\                                          |\ \{ LIKE var \}\                                  \}.`

[1. `... MAPPING TYPE p_type.`](#ABAP_VARIANT_1@1@)

[2. `... MAPPING LIKE var.`](#ABAP_VARIANT_2@1@)

Used for the conversion of fields that have the [technical type](ABENTECHNICAL_TYPE_PRPT_GLOSRY.html)\\ [`x`](ABENBUILTIN_TYPES_BYTE.html) and field name lists in the context of RAP. The statement deals with [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) that include the components [`%control`](ABAPDERIVED_TYPES_COMP.html) and [`%element`](ABAPDERIVED_TYPES_COMP.html). The components of `%control` and `%element` have the technical type `x`.

The ABAP statement is targeted at applications that include, on the one hand, [RAP BOs](ABENRAP_BO_GLOSRY.html) that use BDEF derived types and, on the other hand, implementations of the [RAP BO behavior](ABENRAP_BO_BEHAVIOR_GLOSRY.html) that use other data types. Mapping of field names is required if types are involved that have different field names than those in the underlying [CDS entities](ABENCDS_ENTITY_GLOSRY.html) of the RAP BO.

`src` represents a variable typed with a BDEF derived type that contains `%control` or `%element`. `fields` represents a [general expression](ABENGENERAL_EXPR_POSITION_GLOSRY.html). A variable in the position of `fields` must be a table containing one or more field names. It is of type `ABP_FIELD_NAME_TAB`, the line type is `ABP_FIELD_NAME`.

As a result of the ABAP statement, the field names contained in the table get identified as component names in the `%control` or `%element` structure and their value is set to `01`. If field names do not exist in `fields`, the value in the structures is set to `00`. The ABAP statement [`SET NAMES`](ABAPSET_NAMES.html) does the conversion the other way round.

The following short dumps result from an operation that cannot be executed at runtime using the `SET FLAGS` statements:

Used in case type mapping is required for a structured [DDIC type](ABENDDIC_TYPE_GLOSRY.html), for example, a legacy type. `fields` must contain the field names of the legacy type.

As a prerequisite, the BDEF contains a mapping specification for the mapped type. See more information in the RAP BDL topic [`mapping for`](ABENBDL_TYPE_MAPPING.html).

Used in case type mapping is required for a structured [DDIC type](ABENDDIC_TYPE_GLOSRY.html), for example, a legacy type. This variant is relevant if the type is not available and is a variable of the required type instead. `fields` must contain the field names of the legacy type.

As a prerequisite, the BDEF contains a mapping specification for the mapped type. See more information in the RAP BDL topic [`mapping for`](ABENBDL_TYPE_MAPPING.html).

The following source code section taken from `CL_DEMO_RAP_EML_SET_NAMES` shows the syntax of the `SET NAMES` variants.

The example [ABAP EML - Variants of `SET FLAGS`](ABENEML_SET_FLAGS_ABEXA.html) demonstrates the three different variants with a simple managed RAP BO.

-   `TCHK_TYPE_LOAD`: Inappropriate type for field names.
-   `BEHAVIOR_FLAGS_NAMES_ERROR`: Inappropriate type on the BDEF derived type side or a missing mapping, which is true for the variants of the statement.

DATA: fields TYPE abp\_field\_name\_tab, \\n fields2 TYPE abp\_field\_name\_tab, \\n src TYPE STRUCTURE FOR CREATE demo\_managed\_root\_map, \\n var TYPE demo\_struc. \\n\\ \\nfields = VALUE #( ( CONV #( 'KEY\_FIELD' ) ) \\n ( CONV #( 'FIELD1' ) ) \\n ( CONV #( 'FIELD2' ) ) \\n ( CONV #( 'FIELD3' ) ) \\n ( CONV #( 'FIELD4' ) ) \\n ). \\n\\ \\nfields2 = VALUE #( ( CONV #( 'B\_KEY\_FIELD' ) ) \\n ( CONV #( 'B\_FIELD1' ) ) \\n ( CONV #( 'B\_FIELD2' ) ) \\n ( CONV #( 'B\_FIELD3' ) ) \\n ( CONV #( 'B\_FIELD4' ) ) \\n ). \\n\\ \\n"First variant. \\nSET FLAGS src FROM NAMES fields. \\n\\ \\n"Second variant. \\nSET FLAGS src FROM NAMES fields2 MAPPING TYPE demo\_struc. \\n\\ \\n"Third variant. \\nSET FLAGS src FROM NAMES fields2 MAPPING LIKE var. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_rap\_other.html abapeml\_type\_mapping.html