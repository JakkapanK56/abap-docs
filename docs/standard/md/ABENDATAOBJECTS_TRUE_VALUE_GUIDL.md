---
title: "ABENDATAOBJECTS_TRUE_VALUE_GUIDL"
description: |
  ABENDATAOBJECTS_TRUE_VALUE_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDATAOBJECTS_TRUE_VALUE_GUIDL.htm"
abapFile: "ABENDATAOBJECTS_TRUE_VALUE_GUIDL.html"
keywords: ["do", "if", "case", "data", "types", "ABENDATAOBJECTS", "TRUE", "VALUE", "GUIDL"]
---

Truth values are results of logical expressions. A truth value is either true or false. ABAP does not yet support Boolean data types and thus does not support data objects for truth values. Therefore, the result of a logical expression cannot be assigned directly to a data object.

It has become common practice to express the truth value *true* as value *X* and the truth value *false* as a blank. There are also Boolean functions that have a logical expression as an argument and are returned as the value *X* or a blank, depending on the result.

To make it easier to handle truth values expressed in this way, there is a predefined data element `ABAP_BOOLEAN` of data type `CHAR` of length 1 and the type pool `abap` contains constants `abap_true` of value *X* and `abap_false` of value blank as substitutes for a real Boolean data type. There is also a constant `abap_undefined` of value *\-*.

**Use the data type `ABAP_BOOLEAN` for truth values**

When working explicitly with truth values, use the data element `ABAP_BOOLEAN` as a substitute for a real Boolean data type. A data object declared in this way should have no values other than the predefined constants `abap_true` and `abap_false` (also `abap_undefined`) from type pool ABAP.

Using the type `ABAP_BOOLEAN` and the constants `abap_true` and `abap_false` makes it clear that truth values are being used here.

In accordance with the rule for [avoiding](ABENLITERALS_GUIDL.html) literals in operand positions, not only the literals `'X'` and `' '` should be used. State queries about the [predicate operators](ABENPREDICATE_OPERATOR_GLOSRY.html)\\ `IS INITIAL` and `IS NOT INITIAL` or the use of the constant `space` are also not advisable, because they require knowledge of the technical values of `abap_true` and `abap_false`, which are not significant in the sense of real Boolean data objects.

The type pool `abap` contains a third constant for the type `ABAP_BOOLEAN`, namely `abap_undefined`. However, implementing a three-value logic is only useful and recommended in exceptional cases. In this case, note that `abap_undefined` does not contain the initial value for a variable of type `ABAP_BOOLEAN`. The initial value is always the value of `abap_false`. However, the value of `abap_undefined` can, if required, be specified using the addition `VALUE` when declaring a truth value as the start value.

The type pool `abap` also contains a data type `abap_bool` as a predecessor of data element `ABAP_BOOLEAN`. It is recommended that the data element `ABAP_BOOLEAN` is used in new programs because it is more versatile. As a data element it can be also used in ABAP Dictionary objects or in ABAP CDS. A data type from type pool ABAP can be used in ABAP programs only.

The following source code shows an unsuitable emulation of the Boolean data objects not present in ABAP.

The following source code shows the recommended emulation of the Boolean data objects not present in ABAP.

DATA is\_found TYPE c LENGTH 1. \\n... \\nis\_found = 'X'. \\n... \\nIF is\_found IS NOT INITIAL. \\n ... \\nENDIF. DATA is\_found TYPE abap\_boolean. \\n... \\nis\_found = abap\_true. \\n... \\nIF is\_found = abap\_true. \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abendata\_type\_obj\_gdl.html