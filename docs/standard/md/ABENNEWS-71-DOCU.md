---
title: "ABENNEWS-71-DOCU"
description: |
  ABENNEWS-71-DOCU - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-71-DOCU.htm"
abapFile: "ABENNEWS-71-DOCU.html"
keywords: ["select", "insert", "do", "if", "class", "data", "ABENNEWS", "DOCU"]
---

For ABAP release 7.0, EhP2, the ABAP keyword documentation has been extended as follows:

[1\. ABAP - Examples](#ABAP_MODIFICATION_1@4@)

[2\. Searching in Documentation](#ABAP_MODIFICATION_2@4@)

[3\. Syntax Diagrams](#ABAP_MODIFICATION_3@4@)

[4\. Downloading the Documentation](#ABAP_MODIFICATION_4@4@)

[5\. Standalone HTML Versions of the Documentation](#ABAP_MODIFICATION_5@4@)

[6\. Hit List of F1 Help in the ABAP Editor](#ABAP_MODIFICATION_6@4@)

[7\. Printing Documentation](#ABAP_MODIFICATION_7@4@)

[8\. Display Languages](#ABAP_MODIFICATION_8@4@)

[9\. Internal Performance Improvement](#ABAP_MODIFICATION_9@4@)

The ABAP example library has been integrated into the ABAP keyword documentation. Executable example programs that until now have been called using transaction `ABAPDOCU` and are still valid, are now in the relevant topic of the tree structure of the ABAP keyword documentation and can be executed, debugged, or displayed in the corresponding editor from there. An alphabetical list of all the example programs can be found under [ABAP examples](ABENABAP_EXAMPLES.html). The example programs are taken into account for index searches of the ABAP keyword documentation. The `ABAPDOCU` transaction now displays the ABAP keyword documentation.

The ABAP keyword documentation search options now include an option to search within source code in example programs.

The access to the search options in ABAP keyword documentation has been improved:

This dialog box allows you to start a new search in the hit list, without needing to return to the previous window.

The syntax diagrams for the ABAP keywords are now displayed in a completely new way. Selecting a language element in a syntax diagram displays the corresponding documentation.

If a syntax diagram can be displayed for a keyword, a selectable icon is displayed in the title.

Support for interactive syntax diagrams is stopped in ABAP release 7.65.

The existing option for creating an offline version of the ABAP keyword documentation has been expanded as of SP02 to include the option of downloading nodes with subnodes.

With the previous offline version, all the documents of the ABAP keyword documentation are exported to individual HTML files that are managed by a separate tree display.

When you download nodes with subnodes, the currently selected node, including subnodes, is exported into a single HTML file. Additional files are created only for possible displays. All the links work internally. If you have more than one node, an index is inserted at the beginning. By selecting the uppermost node, it is possible to download the entire ABAP keyword documentation into a file.

With both options, you can select whether you wish to include the interactive examples in downloading.

When downloading to individual HTML files, you can select whether the new syntax diagrams should be taken into account or not. At selection, offline versions of the syntax diagrams are loaded into a subdirectory. These can then be selected using an icon as in the online version.

From ABAP release 7.0, EhP2, AS ABAP provides the following services to allow the ABAP keyword documentation to be used independently of SAP GUI:

When the F1 help for keywords is called, the hit list that uses the new ABAP Front-End Editor is more specific than the one that uses the old ABAP Editor. After selecting an operand, the search in the new ABAP Editor evaluates the adjacent ABAP words. As of ABAP release 7.0, EhP2, the selection of all operands produces a hit list. Previously, selecting `=`, `+`, and so on, displayed a dialog box with an input field. The latter also applies to the old ABAP Editor.

As of ABAP release 7.0, EhP2, all documents for printing are formatted in HTML. The individual executable example programs from [ABAP examples](ABENABAP_EXAMPLES.html) and the [ABAP glossary](ABENABAP_GLOSSARY.html) can now also be printed. In addition, tabular displays are now aligned correctly on printouts.

From ABAP release 7.0, EhP2, the language in which the documentation is displayed (English or German) can be configured by user, independently of the logon language. Any German developers developing in English, for example, can now display the most up-to-date documentation in its original language, German.

This user-specific setting is made when the documentation is displayed using the *Settings for Display Window* function, or in the initial window of the transaction `ABAPHELP`; the system remembers this setting for each user. Until now, the language setting in the initial screen of `ABAPHELP` only applied to what you were currently viewing.

As of ABAP release 7.0, EhP2, large and unchangeable datasets of the ABAP keyword documentation, such as the ABAP Index or the ABAP Glossary, are downloaded into the shared memory. Here they are available to all users of the documentation. This leads to improvements in performance with regard to memory use and also improvements in downloading the documentation.

-   An input window is permanently shown in the documentation display. This window replaces the toolbar functions used previously.

-   If *Quick Search* is chosen (or *Enter*), an index search is performed first, followed a full text search for the term entered.
-   If *Extended Search* is chosen, a dialog box appears where a search mode can be selected.

-   The source code of [ABAP examples](ABENABAP_EXAMPLES.html) can now also be searched, as well as to using the existing index and full-text searches to search documentation text.
-   The display window of the search hit list now contains a function for opening the dialog box.

-   The remote enabled function module `ABAP_DOCU_GET_HTML` returns documents of the ABAP keyword documentation as HTML files. You can either pass search terms to the parameter `QUERY` or the names of documents to the parameter `OBJECT`; passing *\** to `OBJECT` leads to the sending of the tree-like documentation structure.
-   **Example**:
    Refer to the program `ABAP_DOCU_REMOTE_CALL`. The loaded files are displayed here using the `CL_ABAP_BROWSER` class.
-   Under the node */sap/public/bc/abap/docu* in transaction `SICF`, a service is provided to call the ABAP keyword documentation from the Web. On the initial screen, the tree structure of the documentation can be displayed or searches performed. The services */sap/public/bc/abap/docu* and */sap/bc/abap/docu* must be activated in transaction `SICF`. This version can also be used as a provider for OpenSearch.
-   **Example**: \\nRefer to the program `ABAP_DOCU_HTTP_CALL`.

abenabap.html abennews.html abennews-70\_ehps.html abennews-71.html