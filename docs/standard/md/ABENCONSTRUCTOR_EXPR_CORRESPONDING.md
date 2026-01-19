---
title: "ABENCONSTRUCTOR_EXPR_CORRESPONDING"
description: |
  ABENCONSTRUCTOR_EXPR_CORRESPONDING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONSTRUCTOR_EXPR_CORRESPONDING.htm"
abapFile: "ABENCONSTRUCTOR_EXPR_CORRESPONDING.html"
keywords: ["if", "data", "types", "internal-table", "field-symbol", "ABENCONSTRUCTOR", "EXPR", "CORRESPONDING"]
---

1\. `... \{ CORRESPONDING \{dtype|#\}( [EXACT]\ [DEEP]\ struct|\{itab [[duplicates](ABENCORRESPONDING_CONSTR_DUPL.html)]\} ) \}\ |\ \{ CORRESPONDING \{dtype|#\}( [DEEP]\ [[APPENDING] BASE ( base )]\ struct|\{itab [[duplicates](ABENCORRESPONDING_CONSTR_DUPL.html)]\} ) \}\ |\ \{ CORRESPONDING \{dtype|#\}( [[APPENDING] BASE ( base )]\ struct|\{itab [[duplicates](ABENCORRESPONDING_CONSTR_DUPL.html)]\}\ [mapping](ABENCORRESPONDING_CONSTR_MAPPING.html) ) \} ...`

2\. `... CORRESPONDING dtype( itab FROM lookup_tab USING [KEY key_name] s1 = t1 s2 = t2 ... [[mapping](ABENCORRESPONDING_CONSTR_MAPPING.html)] ) ...`

3\. `... \{ CORRESPONDING \{dtype|#\}( in_d_type MAPPING FROM ENTITY ) \}\ |\ \{ CORRESPONDING \{dtype|#\}( ntype MAPPING TO ENTITY ) \}\ |\ \{ CORRESPONDING \{dtype|#\}( in_d_type USING CONTROL ) \}\ |\ \{ CORRESPONDING \{dtype|#\}( in_d_type MAPPING FROM ENTITY USING CONTROL ) \}\ |\ \{ CORRESPONDING \{dtype|#\}( ntype CHANGING CONTROL ) \} ...`

A [constructor expression](ABENCONSTRUCTOR_EXPRESSIONS.html) with the component operator `CORRESPONDING` creates a result of a data type specified using `dtype`.

The following can be specified for `dtype`:

The operator creates structures or internal tables with the specified data type. The components or columns of the result are filled using assignments of components of the parameters specified in the parentheses. The assignments are made using identical names or mapping relationships in a [mapping rule](ABENCORRESPONDING_CONSTR_MAPPING.html).

[Assigning Components: Examples](ABENCORRESPONDING_ABEXAS.html)

[Basic Form](ABENCORRESPONDING_CONSTR_ARG_TYPE.html)

[Lookup Table](ABENCORRESPONDING_CONSTR_USING.html)

[RAP-Specific Variants for Type Mapping](ABAPEML_CORRESPONDING.html)

-   In the [basic component](ABENCORRESPONDING_CONSTR_ARG_TYPE.html), the components of a structured or tabular results are constructed from the components of a structured or tabular parameter `struc` or `itab`.
-   In the [variant with lookup table](ABENCORRESPONDING_CONSTR_USING.html), the components of an internal table `itab` and a lookup table `lookup_tab` are combined to form a tabular result.
-   The [RAP-specific variants](ABAPEML_CORRESPONDING.html) are used for creating structures or internal tables with type mapping in ABAP in the context of [RAP](ABENRAP_GLOSRY.html). RAP requires [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) for the communication of [RAP BO providers](ABENRAP_BO_PROVIDER_GLOSRY.html) and [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html). When including non-BDEF-derived types (`ntype`), the variants are responsible for matching them to the input (`in_d_type`) and output BDEF derived types.

-   A [structured type](ABENSTRUCTURED_TYPE_GLOSRY.html) or a [table type](ABENTABLE_TYPE_GLOSRY.html).
-   The `#` character as a symbol for the [operand type](ABENOPERAND_TYPE_GLOSRY.html). This specification is only possible if the data type required in an operand position is unique and completely identifiable at compile time. The operand type must be a structure type or a table type. When a constructor expression is assigned to a field symbol or a formal parameter with a generic table type, the operand type can only be determined at runtime.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abencorresponding.html