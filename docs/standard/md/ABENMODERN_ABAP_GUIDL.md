---
title: "ABENMODERN_ABAP_GUIDL"
description: |
  ABENMODERN_ABAP_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMODERN_ABAP_GUIDL.htm"
abapFile: "ABENMODERN_ABAP_GUIDL.html"
keywords: ["loop", "do", "while", "if", "case", "method", "class", "data", "ABENMODERN", "ABAP", "GUIDL"]
---

ABAP is a living programming language that is continually being developed. Since its introduction some 30 years ago, new ABAP programs have been developed continually, with work to advance the ABAP language ongoing at the same time. Developments to the ABAP language are either extensions of the existing language properties for implementing new functions, or they replace existing functions with more advanced concepts. The replacement of existing language elements with new ones usually makes the existing language elements superfluous or obsolete. The most prominent example of a development of the ABAP language is still the implementation of ABAP Objects.

With regard to the ABAP language, SAP has committed itself to a policy of strict downward compatibility. On the one hand, this means that an ABAP program written for ABAP release 3.0, for example, can be executed on an AS ABAP in ABAP release 7.0 or higher (provided that a non-Unicode system is being used). On the other hand, this also has the following implications:

These problems can be solved using the following simple rule.

**Do not use obsolete language elements**

Do not use obsolete language elements for new developments. We also recommend an incremental changeover to new concepts as they become available.

Newer language elements are always the better language elements. Obsolete language elements are only provided for downward compatibility reasons. A statement or statement addition is declared as obsolete only when a more powerful alternative exists or when the language element is identified as being prone to errors (in the sense that it invites insecure and non-robust programming). It follows that you cannot ensure secure and robust programming if you use obsolete language elements, which is why obsolete language elements should not be used for new developments.

If ABAP Objects is used, the majority of the obsolete statements and additions are already prohibited in the syntax. For this reason among others, we strongly recommend [using ABAP Objects](ABENABAP_OBJ_PROGR_MODEL_GUIDL.html). Outside of ABAP Objects, that is in cases that are [still allowed](ABENABAP_OBJ_PROGR_MODEL_GUIDL.html), no obsolete language elements can be used. [Obsolete Language Elements](ABENABAP_OBSOLETE.html) provides an overview of the obsolete statements and statement additions.

The following source code shows the solution of a task using obsolete language elements. A procedure is supposed to replace all occurrences of `substring` in a `text` with a new character string `new` if the substring is not at the end of a word.

In the above source code, aside from the modularization with `FORM - ENDFORM`, the statement `SEARCH` and the used variant of `REPLACE` are obsolete. Furthermore, a string operator && is available as a replacement for `CONCATENATE`.

The following source code executes the same task as above; however, it uses the latest available language elements.

The subroutine is replaced with a method. Using `FIND` together with a regular expression composed using the string operator && makes helper variables superfluous. The `WHILE` loop is replaced with `REPLACE ALL OCCURRENCES`, which means it is unnecessary to use another helper variable, and the control flow is moved to the ABAP runtime framework. The latter increases the execution speed and helps to [limit the maximum nesting depth](ABENNESTING_DEPTH_GUIDL.html).

In connection with the above rule, the question on the coexistence of old and new concepts within a program unit arises. There is only one area in which this is clearly defined in the syntax, namely when using the [classic exception concept and the class-based exception concept](ABENCLASS_EXCEPTION_GUIDL.html) in processing blocks. Otherwise, obsolete language elements can be directly next to new language elements in a program part. In this context, we recommend keeping the use within a context as consistent as possible, that is, do not use different statements, such as `FIND` and `SEARCH`, in parallel for the same purpose.

This does not, however, mean that obsolete language elements should be used in enhancements to existing procedures to preserve consistency just because they already exist. Instead, this is the best moment to switch the entire procedure to the corresponding new language elements. By using unit tests to cover the procedures to be changed, it is possible to ensure that there are no unpleasant surprises during the changeover.

-   Until now, there was little impetus for experienced developers to break with old habits and engage in new concepts. The only exception is the changeover to Unicode systems, where ABAP programs have to be converted to the ABAP language version [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html), which has slightly different syntax rules.
-   ABAP beginners get confused by the multitude of options available for the same task. Where there is doubt, older programs are used as templates, and the obsolete concepts are frequently still used instead of the new ones.

FORM bad\_example USING substring TYPE csequence \\n new TYPE csequence \\n CHANGING text TYPE csequence. \\n DATA: pattern TYPE string, \\n subrc TYPE sy-subrc. \\n CONCATENATE '\*' substring INTO pattern. \\n SEARCH text FOR pattern. \\n IF sy-subrc <> 0. \\n CLEAR subrc. \\n WHILE subrc = 0. \\n REPLACE substring WITH new INTO text. \\n subrc = sy-subrc. \\n ENDWHILE. \\n ENDIF. \\nENDFORM. METHOD good\_example. \\n FIND PCRE substring && \`\\\\b\` IN text. \\n IF sy-subrc <> 0. \\n REPLACE ALL OCCURRENCES OF substring IN text WITH new. \\n ENDIF. \\nENDMETHOD. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenabap\_specific\_rules\_gdl.html