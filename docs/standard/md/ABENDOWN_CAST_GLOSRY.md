---
title: "ABENDOWN_CAST_GLOSRY"
description: |
  ABENDOWN_CAST_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDOWN_CAST_GLOSRY.htm"
abapFile: "ABENDOWN_CAST_GLOSRY.html"
keywords: ["do", "if", "case", "ABENDOWN", "CAST", "GLOSRY"]
---

Also called narrowing cast. [Assignment](ABENASSIGNMENT_GLOSRY.html) between [reference variables](ABENREFERENCE_VARIABLE_GLOSRY.html) in which the [static type](ABENSTATIC_TYPE_GLOSRY.html) of the target variable is more specific than the static type of the source variable and the assignability is not checked until runtime. A downcast must always be performed explicitly. This is done using assignments with the [casting operator](ABENCASTING_OPERATOR_GLOSRY.html) ([`?=`](ABAPMOVE_CAST.html)) and [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) with the casting operator [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html). Downcasts are also still possible using the `INTO` addition of the statement [`WHEN TYPE`](ABAPWHEN_TYPE.html) of a case distinction using [`CASE TYPE OF`](ABAPCASE_TYPE.html). See also [upcast](ABENUP_CAST_GLOSRY.html).

[**\-> More about**](ABENCONVERSION_REFERENCES.html)

ABENABALA\_GLOSSARY.html