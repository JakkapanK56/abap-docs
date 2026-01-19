---
title: "ABENNEWS-752-EXPRESSIONS"
description: |
  ABENNEWS-752-EXPRESSIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-752-EXPRESSIONS.htm"
abapFile: "ABENNEWS-752-EXPRESSIONS.html"
keywords: ["select", "do", "if", "case", "class", "ABENNEWS", "752", "EXPRESSIONS"]
---

[1. Exception Object After `RAISE EXCEPTION`](#ABAP_MODIFICATION_1@4@)

[2\. Object Component Selector After Table Expressions](#ABAP_MODIFICATION_2@4@)

[3. Key Specification for the `FILTER` Operator](#ABAP_MODIFICATION_3@4@) 

[4. Pseudo Component `table_line` in Mapping Rules](#ABAP_MODIFICATION_4@4@)

The operand position for the reference variable `oref` of the statement [`RAISE EXCEPTION oref`](ABAPRAISE_EXCEPTION_CLASS.html) is now a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html).

If an [object component selector `->`](ABENTABLE_EXP_CHAINING.html) is specified directly after a [table expression](ABENTABLE_EXPRESSIONS.html), the restriction that this is not possible for table expressions whose [result](ABENTABLE_EXP_RESULT.html) is determined with the value operator `VALUE` no longer applies.

In the variant of the constructor expression where a [filter table](ABENCONSTRUCTOR_EXPR_FILTER_TABLE.html) is specified, the addition `USING KEY` can be used either for the filter table or for the source table. Previously, the filter table had to have a sorted key or a hash key. This restriction does not apply if such a key can be specified for the source table instead.

It is now possible to specify the [pseudo component](ABENPSEUDO_COMPONENT_GLOSRY.html)\\ `table_line` as a source component of a source table in [mapping rules](ABENCORRESPONDING_CONSTR_MAPPING.html) of the component operator [`CORRESPONDING`](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html), if the table has an elementary row type. In all other cases, the behavior is undefined when the pseudo component is specified.

abenabap.html abennews.html abennews-75.html abennews-752.html