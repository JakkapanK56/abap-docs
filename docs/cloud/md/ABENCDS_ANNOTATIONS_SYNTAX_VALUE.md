---
title: "ABENCDS_ANNOTATIONS_SYNTAX_VALUE"
description: |
  ABENCDS_ANNOTATIONS_SYNTAX_VALUE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ANNOTATIONS_SYNTAX_VALUE.htm"
abapFile: "ABENCDS_ANNOTATIONS_SYNTAX_VALUE.html"
keywords: ["select", "do", "if", "case", "data", "ABENCDS", "ANNOTATIONS", "SYNTAX", "VALUE"]
---

`... literal`\\ 
  `| #SYMBOL`\\ 
  `| true|false`\\ 
  `| #(unchecked expression)`\\ 
  `| null`

An [annotation value](ABENANNOTATION_VALUE_GLOSRY.html) can be specified directly after the colon `:` of an [annotation](ABENCDS_ANNOTATIONS_SYNTAX.html). The following can be specified for the annotation value:

Only those annotation values should be specified that are supported by the specified type of the associated [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). Unless a default value is specified, a value should be specified in all cases. Non-specified annotation values are not replaced by the default value when the annotation is saved internally and evaluated.

The following [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) is available.

The annotation can then, for example, be specified with the following annotation values:

-   Literals
-   Character literals enclosed in quotation marks or numeric literals. A numeric literal can have a period (`.`) as a decimal separator and can be specified with an exponent in scientific notation.
    A single quote can be used to escape another single quote or, alternatively, using a backslash \\\\.
    Example: `@EndUserText.quickInfo: 'Customer''s first name'` is resolved into *Customer's first name*.
    Alternative: `@EndUserText.quickInfo: 'Customer\\'s first name'` is resolved into *Customer's first name*.
-   Enumeration symbols `#SYMBOL`
-   Enumeration symbols are specified directly after the `#` character and without quotation marks.
-   Unchecked expressions
-   Unchecked expressions are specified in parentheses after the `#` character. Unchecked expressions can be [elementary operands](ABENCDS_OPERANDS_V2.html), [CDS DDL expressions](ABENCDS_EXPRESSION_GLOSRY.html), reused expressions from the `SELECT` list ([`$projection.reuse_exp`](ABENCDS_REUSABLE_EXPRESSION_V2.html)), or [SQL path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html). Possible elementary operands are [CDS source fields](ABENCDS_FIELD_GLOSRY.html), [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html), [input parameters](ABENINPUT_PARAMETER_GLOSRY.html), and [session variables](ABENSESSION_VARIABLE_GLOSRY.html). [Typed literals](ABENTYPED_LITERAL_GLOSRY.html) and [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html) are not supported. Unchecked expressions are not checked at design time or at activation. They are evaluated at runtime by the respective frameworks.
-   Example: `@DemoAnnoValues: #(substring('hallo',3,2) + 3 * 4)`
-   Truth values `true` and `false`
-   These values can be enclosed in quotation marks but do not have to be.
-   Null value `null`
-   This value can be specified without quotation marks for [element annotations](ABENCDS_F1_ELEMENT_ANNOTATION.html). This means that the annotations are ignored in the evaluation by default. The value `null` cannot be specified as an [element](ABENCDS_ANNOTATIONS_SYNTAX_ARRAY.html) of [annotation arrays](ABENANNOTATION_ARRAY_GLOSRY.html) and can only be specified in the [scope](ABENCDS_ANNOTATIONS_SCOPES.html) of the element annotations.

-   No syntax checks are performed on an annotation value in the [DDL for data definitions](ABENCDS_F1_DDL_SYNTAX.html), except for the formal rules above. The annotation is generally only handled correctly when evaluated or activated or by the framework if the annotation value follows the rule in the [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html).
-   The framework in question is responsible for applying the correct default value if annotation values are not specified.

@Scope:\[#VIEW, #EXTEND\_VIEW\] \\ndefine annotation \\n DemoAnnoValues \\{ \\n subAnno1: Boolean; \\n subAnno2: String(5) enum\\{FLAG1;FLAG2;FLAG3;\\}; \\n subAnno3: Integer; \\n subAnno4: Decimal(31,2); \\n subAnno5: DecimalFloat;\\n subAnno6: EntityRef; \\}; @DemoAnnoValues: \\{subAnno1: false, \\n subAnno2: #FLAG1, \\n subAnno3: 1234, \\n subAnno4: 123456.78, \\n subAnno5: 1234.5678E-4 \\n subAnno6: "DEMO\_CDS\_SPFLI"\\} abenabap.html abencds.html abencds\_annotations.html abencds\_anno\_usage.html abencds\_annotations\_syntax.html