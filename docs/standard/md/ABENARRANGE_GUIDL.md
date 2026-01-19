---
title: "ABENARRANGE_GUIDL"
description: |
  ABENARRANGE_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENARRANGE_GUIDL.htm"
abapFile: "ABENARRANGE_GUIDL.html"
keywords: ["loop", "do", "while", "if", "case", "method", "class", "data", "ABENARRANGE", "GUIDL"]
---

The arrangement of comments plays an important role (in addition to comment language and comment content) in making programs easy to read.

**Arrange comments correctly**

Place comments in front of the statements that they describe. The horizontal arrangement of comments should follow the indentations of the source code. End of line comments should only be placed after declarative or concluding statements.

**Vertical positioning**\\ \\nIn general, when users read source code, they prefer to view the comment first and then the described statements. This arrangement means that the correlation between the comment and the associated source code passage is intuitively clear.

For control structures, this means that comment lines directly before a control statement (such as `IF` or `WHILE`) refer to the associated condition and comment lines after the control statement refer to the associated statement block. Comment lines directly before an `ELSE` or `WHEN OTHERS` statement have obviously been put in the wrong place.

**End of line comments**\\ \\nEnd of line comments are problematic in conjunction with executable statements. Individual executable program lines are usually not complex enough to justify a separate comment for each one. If you add end of line comments, they will often be [unwanted](ABENCONTENT_GUIDL.html) repetitions of what the statements clearly indicate already. In addition, these comments tend to be cryptic and unclear, because the ends of lines does not provide enough space for meaningful comments in most cases. A uniform alignment for end of line comments can only be achieved with a high degree of effort.

Therefore, you should make comments for entire statement blocks. Use self-contained comment lines to do this. This is because it is difficult to describe a reference to more than one statement line if you use end of line comments.

End of line comments are suitable for the following situations:

The pseudo comments for hiding warnings of the extended program check and [Code Inspector](ABENCODE_INSPECTOR_GUIDL.html) play a special role. They are not comments in the usual sense of the word. They are program directives that must be appear in the same lines as the commented statements to take full effect. These pseudo comments were replaced by pragmas for the extended program check.

**Indentations**\\ \\nFormatting source code using indentations is essential. Otherwise the human reader cannot understand the logical structure. This formatting is required by the rule for using the [pretty printer](ABENUSE_PRETTY_PRINTER_GUIDL.html). However, if comments are added in the source code that do not follow this formatting, they hide the logical structure and make the code difficult to read. Therefore, comment lines must have the same indentation as the statement lines that they relate to.

These indentations can only be achieved using comments that start with a quotation mark ("), because this character can be in any position. A comment line that starts with an asterisk (\*) must always be in the first position. It is therefore strongly recommended that you start all comments used in procedures ([methods](ABENUSE_OPERAND_POSITION_GUIDL.html)) with a quotation mark and the correct indentation. Comment lines that start with a quotation mark must not be confused with end of line comments, which are appear after different code.

Comment lines that start with an asterisk should only be used for head comments of classes and procedures. Here they help to [subdivide](ABENCONTENT_GUIDL.html) source code into logical sections. In addition, they are useful for temporarily disabling statements by commenting them out. The commented-out code can be clearly distinguished from actually indented comments.

The following source code shows the implementation part of a class. The positioning of the comments does not follow the above rule.

The following source code shows the same implementation part as above. However, the comments are positioned as recommended. Comment lines that start with an asterisk (\*) are used as header comments in the program structure. End of line comments only appear after declarations and block ends. All other comments appear in comment lines before the described statements and are indented accordingly.

-   To comment on declarative statements
-   To indicate block ends (separate from indentations) in larger control structures
-   To justify pseudo comments (at the relevant places) for hiding messages from the extended program check or [Code Inspector](ABENCODE_INSPECTOR_GUIDL.html).

CLASS application IMPLEMENTATION. "Application class \\n METHOD main. "Main Method\* Item data \\n DATA items TYPE STANDARD TABLE \\n OF REF TO item. \\nDATA item\_ref LIKE LINE OF items.\* Amount data \\n DATA amount TYPE i. \\n DATA total\_amount TYPE i. \\n ...\* Loop over all items to compute total amount \\n LOOP AT items INTO item\_ref. "Loop over all items \\n IF item\_ref IS BOUND AND \\n item\_ref->is\_valid( ) = abap\_true. "Check validity \\n amount = item\_ref->get\_amount( ). "Get amount \\n ADD amount TO total\_amount. "Add amount to totals \\n ... "... \\n ELSE. \\n ... \\n ENDIF. \\n ENDLOOP. \\n ... \\n ENDMETHOD. \\nENDCLASS. \*----------------------------------------------------------\* \\n\* Class implementations \\n\* \\n\*----------------------------------------------------------\*CLASS application IMPLEMENTATION.\*----------------------------------------------------------\* \\n METHOD main. \\n DATA: items TYPE STANDARD TABLE \\n OF REF TO item, "Item table \\n item\_ref LIKE LINE OF items. "Item reference \\n DATA: amount TYPE i, "Amount per item \\n total\_amount TYPE i. "Total amount of items \\n..."Loop over all items to compute total amount \\nLOOP AT items INTO item\_ref. \\n IF item\_ref IS BOUND AND \\n item\_ref->is\_valid( ) = abap\_true. \\n "Compute total amount for valid items \\n amount = item\_ref->get\_amount( ). \\n ADD amount TO total\_amount. \\n ... \\n ELSE. \\n ENDIF. "item\_ref IS BOUND AND... \\nENDLOOP. \\n... \\nENDMETHOD. "main \\n\*----------------------------------------------------------\* \\nENDCLASS. "application abenabap.html abenabap\_reference.html abenabap\_pgl.html abenstructure\_style\_gdl.html abencomments\_gdl.html