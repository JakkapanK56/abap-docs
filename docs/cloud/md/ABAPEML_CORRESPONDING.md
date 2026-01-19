---
title: "ABAPEML_CORRESPONDING"
description: |
  ABAPEML_CORRESPONDING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPEML_CORRESPONDING.htm"
abapFile: "ABAPEML_CORRESPONDING.html"
keywords: ["select", "update", "do", "if", "data", "types", "internal-table", "ABAPEML", "CORRESPONDING"]
---

`\{\ [ non_der_type = | ... ] CORRESPONDING \{dtype|#\}( [ ... ] in_der_type MAPPING FROM ENTITY ) \}\    |\ \{\ [ out_der_type = | ... ] CORRESPONDING \{dtype|#\}( [ ... ] non_der_type MAPPING TO ENTITY ) \}\    |\ \{\ [ non_der_type = | ... ] CORRESPONDING \{dtype|#\}( [ ... ] in_der_type [ ... ] USING CONTROL [ ... ] ) \}\    |\ \{\ [ non_der_type = | ... ] CORRESPONDING \{dtype|#\}( [ ... ] in_der_type MAPPING FROM ENTITY USING CONTROL ) \}\    |\ \{\ [ in_der_type = | ... ] CORRESPONDING \{dtype|#\}( [ ... ] non_der_type [ ... ] CHANGING CONTROL [ ... ] ) \} ...`

[1. `[ non_der_type = | ... ] CORRESPONDING \{dtype|#\}( [ ... ] in_der_type MAPPING FROM ENTITY ) ...`](#ABAP_VARIANT_1@1@)

[2. `[ out_der_type = | ... ] CORRESPONDING \{dtype|#\}( [ ... ] non_der_type MAPPING TO ENTITY ) ...`](#ABAP_VARIANT_2@1@)

[3. `[ non_der_type = | ... ] CORRESPONDING \{dtype|#\}( [ ... ] in_der_type [ ... ] USING CONTROL [ ... ] ) ...`](#ABAP_VARIANT_3@1@)

[4. `[ non_der_type = | ... ] CORRESPONDING \{dtype|#\}( [ ... ] in_der_type MAPPING FROM ENTITY USING CONTROL ) ...`](#ABAP_VARIANT_4@1@)

[5. `[ in_der_type = | ... ] CORRESPONDING \{dtype|#\}( [ ... ] non_der_type [ ... ] CHANGING CONTROL [ ... ] ) ...`](#ABAP_VARIANT_5@1@)

The variants of the [`CORRESPONDING`](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html) operator are used to create structures or internal tables with type mapping in ABAP within the context of RAP. The type mapping functionality is aimed at applications that have, on the one hand, [RAP BOs](ABENRAP_BO_GLOSRY.html) based on CDS entities and, on the other hand, have further types that are typically legacy types and implement the behavior of the RAP BOs or parts of it. This is particularly relevant for the implementation type [`unmanaged`](ABENBDL_IMPL_TYPE.html) that integrates existing functionality into RAP. However, it can also be relevant for [`managed`](ABENBDL_IMPL_TYPE.html), for example, when using code for determinations or validations that already exist but are based on legacy, non-RAP types, i.e., types that are not derived from the BDEF.

RAP requires [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) for the communication of [RAP BO providers](ABENRAP_BO_PROVIDER_GLOSRY.html) and [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html). When including non-BDEF-derived types, the variants of the `CORRESPONDING` operator are responsible for matching them to the [input](ABENRAP_INPUT_DER_TYPE_GLOSRY.html) (for example, `TYPE TABLE FOR UPDATE`) and [output](ABENRAP_OUTPUT_DER_TYPE_GLOSRY.html) (for example, `TYPE TABLE FOR READ RESULT`) of BDEF derived types. A type mapping is needed if the types include field names that differ from the RAP BO or if the control information ([`%control`](ABAPDERIVED_TYPES_COMP.html)) is available in non-BDEF-derived types. By using the variants of the `CORRESPONDING` operator, maintenance is simplified and errors are reduced because many individual specifications with `CORRESPONDING` can be avoided. Some of the variants require a mapping to be specified in the BDEF. For more information, see the RAP BDL documentation on [`Mapping`](ABENBDL_TYPE_MAPPING.html).

Notes on the syntax:

Used for the mapping of a [RAP input derived type](ABENRAP_INPUT_DER_TYPE_GLOSRY.html) (`in_der_type`) to a non-BDEF derived type (`non_der_type`). As a prerequisite, the [`mapping`](ABENBDL_TYPE_MAPPING.html) for the non-BDEF derived type must be specified in the BDEF.

Possible additions in dedicated positions (`[ ... ]`) within the pair of parentheses:

The following code demonstrates the assignment of an input derived type to a non-BDEF derived type using the addition `MAPPING FROM ENTITY`.

Used for the mapping of a non-BDEF derived type (`non_der_type`) to a [RAP output derived type](ABENRAP_OUTPUT_DER_TYPE_GLOSRY.html) (`out_der_type`). As a prerequisite, the [`mapping`](ABENBDL_TYPE_MAPPING.html) for the non-BDEF derived type must be specified in the BDEF.

Possible additions in dedicated positions (`[ ... ]`) within the pair of parentheses:

The following code demonstrates the assignment of a non-BDEF derived type to an output derived type using the addition `MAPPING TO ENTITY`.

Type mapping variant that respects the `%control` component of BDEF derived types. `in_der_type` must be a BDEF derived type that includes the `%control` component. Only those fields for which the corresponding `%control` field have been marked as enabled are respected by the mapping, i. e. if a specific `%control` field is marked as disabled (e. g. the field is initial) in `in_der_type`, the mapping is not applied to it on the non-BDEF-derived type `non_der_type`. There is no [`mapping`](ABENBDL_TYPE_MAPPING.html) required for the non-BDEF derived type in the BDEF.

Possible additions in dedicated positions (`[ ... ]`) within the pair of parentheses:

The following code demonstrates the assignment of an input derived type to a non-BDEF derived type using the addition `USING CONTROL`. The `%control` component of a particular field is not selected, hence, this field is not assigned.

Type mapping variant that takes the `%control` component of BDEF derived types into consideration. `in_der_type` must be a BDEF derived type that includes the `%control` component. Only those fields for which the corresponding `%control` field have been marked as enabled are considered for the mapping, i. e. if a specific `%control` field is marked as disabled (e. g. the field is initial) in `in_der_type`, the mapping is not applied to it on the non-BDEF-derived type `non_der_type`. The variant is used if the components of the non-BDEF derived type have different field names than the ones from the BDEF-derived type. Thus, a [`mapping`](ABENBDL_TYPE_MAPPING.html) is required for the non-BDEF derived type in the BDEF with the notation `control`.

Possible additions in dedicated positions (`[ ... ]`) within the pair of parentheses:

The following code demonstrates the assignment of an input derived type to a non-BDEF derived type using the addition `MAPPING FROM ENTITY USING CONTROL`.

Type mapping variant that fills the `%control` structure of a BDEF-derived type based on a non-BDEF-derived type that does not include control information, i. e. if a field of `non_der_type` is left initial, the statement leaves the corresponding `%control` component of the field initial (`00`). Vice versa, if a field of `non_der_type` is provided with a value, the statement sets the corresponding `%control` component of `in_der_type` as enabled (`01`).

There is no [`mapping`](ABENBDL_TYPE_MAPPING.html) required for non-BDEF derived types in the BDEF. If non-BDEF derived types have different field names and a mapping from non-BDEF-derived types to input BDEF-derived types is required, a [`mapping`](ABENBDL_TYPE_MAPPING.html) in the BDEF must be defined (with the notation `control`) and a second `CORRESPONDING` statement with the addition `MAPPING TO ENTITY` must precede the statement with `CHANGING CONTROL`. In doing so, the first `CORRESPONDING` statement with the addition `MAPPING TO ENTITY` is responsible for mapping the field names and the second statement with `CHANGING CONTROL` is responsible filling the `%control` structure. This mapping variant is only possible for input derived types since all of them include `%control` structures.

Possible additions in dedicated positions (`[ ... ]`) within the pair of parentheses:

The following code demonstrates the assignment of a non-BDEF derived type to an input derived type using the addition `CHANGING CONTROL`.

The example [ABAP EML - `CORRESPONDING`, Type Mapping](ABENEML_TYPE_MAPPING_ABEXA.html) demonstrates the different variants with a simple managed RAP BO.

-   `non_der_type`: Type that is not derived from the BDEF.
-   `dtype`/`#`: Find more information [here](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html).
-   `out_der_type`: [RAP output derived type](ABENRAP_OUTPUT_DER_TYPE_GLOSRY.html), for example, a data object typed with [`TYPE TABLE FOR READ RESULT`](ABAPTYPE_TABLE_FOR.html) or [`TYPE STRUCTURE FOR READ RESULT`](ABAPTYPE_STRUCTURE_FOR.html).
-   `in_der_type`: [RAP input derived type](ABENRAP_INPUT_DER_TYPE_GLOSRY.html), for example, a data object typed with `TYPE TABLE FOR UPDATE` or `TYPE STRUCTURE FOR UPDATE`.
-   The placeholders (`...`) within the pair of parentheses that follows `CORRESPONDING` and `dtype`/`#` represent possible additions that are described [here](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html).

-   Internal table types: None. Use only with `MAPPING FROM ENTITY`.
-   Structured types: `BASE`, `APPENDING`

-   Internal table types: None. Use only with `MAPPING FROM ENTITY`.
-   Structured types: `BASE`, `APPENDING`

-   Internal table types: `BASE`, `APPENDING`, `EXACT`, `MAPPING`, `DISCARDING DUPLICATES`, `EXCEPT`
-   Structured types: `BASE`, `APPENDING`, `EXACT`, `MAPPING`, `EXCEPT`

-   Internal table types: None. Use only with `MAPPING FROM ENTITY`.
-   Structured types: `BASE`, `APPENDING`

-   Internal table types: `BASE`, `APPENDING`, `EXACT`, `MAPPING`, `DISCARDING DUPLICATES`, `EXCEPT`
-   Structured types: `BASE`, `APPENDING`, `EXACT`, `MAPPING`, `EXCEPT`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: ent\_in\_tab TYPE TABLE FOR UPDATE demo\_managed\_root\_map, \\n ty2\_tab TYPE STANDARD TABLE OF demo\_struc2. \\n\\ \\nent\_in\_tab = VALUE #( ( key\_field = 1 field1 = 'aaa' field2 = 'bbb' \\n field3 = 1 field4 = 2 ) ). \\n\\ \\nty2\_tab = CORRESPONDING #( ent\_in\_tab MAPPING FROM ENTITY ). \\n\\ \\nout->write( ent\_in\_tab ). \\nout->write( ty2\_tab ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: ent\_out\_tab TYPE TABLE FOR READ RESULT demo\_managed\_root\_map, \\n ty3\_tab TYPE STANDARD TABLE OF demo\_struc3. \\n\\ \\nty3\_tab = VALUE #( ( z\_key\_field = 2 z\_field1 = 'ccc' \\n z\_field2 = 'ddd' z\_field3 = 3 z\_field4 = 4 ) ). \\n\\ \\nent\_out\_tab = CORRESPONDING #( ty3\_tab MAPPING TO ENTITY ). \\n\\ \\nout->write( ty3\_tab ). \\nout->write( ent\_out\_tab ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: ent\_in\_tab TYPE TABLE FOR UPDATE demo\_managed\_root\_map, \\n ty1\_tab TYPE STANDARD TABLE OF demo\_struc1. \\n\\ \\nent\_in\_tab = VALUE #( \\n ( key\_field = 4 field1 = 'ggg' field2 = 'hhh' field3 = 7 field4 = 8 \\n %control = VALUE #( key\_field = if\_abap\_behv=>mk-on \\n field1 = if\_abap\_behv=>mk-off \\n field2 = if\_abap\_behv=>mk-on \\n field3 = if\_abap\_behv=>mk-on \\n field4 = if\_abap\_behv=>mk-on ) ) ). \\n\\ \\nty1\_tab = CORRESPONDING #( ent\_in\_tab USING CONTROL ). \\n\\ \\nout->write( ent\_in\_tab ). \\nout->write( ty1\_tab ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: ent\_in\_tab TYPE TABLE FOR UPDATE demo\_managed\_root\_map, \\n ty2\_tab TYPE STANDARD TABLE OF demo\_struc2. \\n\\ \\nent\_in\_tab = VALUE #( \\n( key\_field = 5 field1 = 'iii' field2 = 'jjj' field3 = 9 field4 = 10 \\n %control = VALUE #( key\_field = if\_abap\_behv=>mk-on \\n field1 = if\_abap\_behv=>mk-on \\n field2 = if\_abap\_behv=>mk-off \\n field3 = if\_abap\_behv=>mk-on \\n field4 = if\_abap\_behv=>mk-on ) ) ). \\n\\ \\nty2\_tab = CORRESPONDING #( ent\_in\_tab MAPPING FROM \\n ENTITY USING CONTROL ). \\n\\ \\nout->write( ent\_in\_tab ). \\nout->write( ty2\_tab ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: ent\_in\_tab TYPE TABLE FOR UPDATE demo\_managed\_root\_map, \\n ty1\_tab TYPE STANDARD TABLE OF demo\_struc1. \\n\\ \\nty1\_tab = VALUE #( ( key\_field = 6 \\n "field1 not specified \\n field2 = 'kkk' \\n field3 = 11 \\n field4 = 12 ) ). \\n\\ \\nent\_in\_tab = CORRESPONDING #( ty1\_tab CHANGING CONTROL ). \\n\\ \\nout->write( ty1\_tab ). \\nout->write( ent\_in\_tab ). \\n\\ \\nout->display( ). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_rap\_other.html abapeml\_type\_mapping.html