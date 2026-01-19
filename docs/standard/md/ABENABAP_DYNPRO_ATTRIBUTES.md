---
title: "ABENABAP_DYNPRO_ATTRIBUTES"
description: |
  ABENABAP_DYNPRO_ATTRIBUTES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_DYNPRO_ATTRIBUTES.htm"
abapFile: "ABENABAP_DYNPRO_ATTRIBUTES.html"
keywords: ["select", "do", "while", "if", "data", "ABENABAP", "DYNPRO", "ATTRIBUTES"]
---

Like all objects in the repository, dynpros have attributes that both describe them and determine how they behave at runtime. The following are important dynpro attributes in ABAP programming:

**Attribute** **Details**\\ Program The name of the ABAP program (executable program, module pool, or function group) to which the dynpro belongs. Dynpro number A four-digit number, unique within the ABAP program, that identifies the dynpro within the program. If a program contains selection screens, the dynpro numbers of selection screens and Screen Painter dynpros both use the same namespace. For example, if a program has a standard selection screen, no further dynpros with the number 1000 can be created. Lists, on the other hand, have their own namespace. Dynpro type A regular dynpro occupies a whole GUI window. \\
\\
Modal dialog boxes only cover a part of a GUI window. Their interface elements are also arranged differently. - Selection screen dynpros are generated automatically from the definition in the ABAP program. They cannot be generated using Screen Painter. \\
\\
A subscreen is a dynpro that can be displayed in a subscreen area on a different dynpro in the same ABAP program. Next dynpro Statically defined dynpro number, specifying the next dynpro in the sequence. Zero or leaving the field blank defines the current dynpro as the last in the chain. If the next dynpro number is the same as the current dynpro, the dynpro keeps on calling itself. The static next dynpro can be overridden dynamically in the ABAP program. Cursor position Static definition of the screen element on which the cursor is positioned when the screen is displayed. By default, the cursor appears on the first input field. The static cursor position can be overridden dynamically in the ABAP program. Screen group Four-character ID, placed in the system field `sy-dyngr` while the dynpro is being processed. This makes it possible to assign multiple dynpros to a common screen group. This is required, for example, to modify all of the screens in the group in a uniform way. Screen groups are stored in table `TFAWT`. Holding data If a user calls the dynpro more than once during a user session, he or she can retain changed data as default values by choosing *System -> User Profile -> Hold Data*. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html