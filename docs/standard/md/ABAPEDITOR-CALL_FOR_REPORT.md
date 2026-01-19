---
title: "ABAPEDITOR-CALL_FOR_REPORT"
description: |
  ABAPEDITOR-CALL_FOR_REPORT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEDITOR-CALL_FOR_REPORT.htm"
abapFile: "ABAPEDITOR-CALL_FOR_REPORT.html"
keywords: ["if", "case", "method", "class", "data", "ABAPEDITOR", "CALL", "FOR", "REPORT"]
---

[Short Reference](ABAPEDITOR-CALL_SHORTREF.html)

`EDITOR-CALL FOR REPORT prog [DISPLAY-MODE].`

[`... DISPLAY-MODE`](#ABAP_ONE_ADD@1@)

This statement starts the ABAP Editor for the source code of the program specified in `prog`. `prog` must be a character-like data object, which contains the name of a program in uppercase letters that exists in the [repository](ABENREPOSITORY_GLOSRY.html). If not, a corresponding message is displayed in the status line.

Once ABAP Editor is started, it offers the full range of functions, as when called in the ABAP Workbench or the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html). Forward navigation to branch to other tools is also possible. After returning from the ABAP Editor, the current program continues after the statement `EDITOR-CALL`.

The ABAP Editor is started in change mode by default. The addition `DISPLAY-MODE` causes the ABAP Editor to be started in display mode.

The ABAP Editor is started in display mode but can be switched to change mode.

-   If an inactive version of the program exists, then this version is loaded.
-   This statement bypasses the authorization checks that are performed when the ABAP Editor is called using a transaction code, however the editor still checks the development authorization of the current user.
-   The statement `EDITOR-CALL FOR REPORT` calls the function module `EDITOR_PROGRAM` internally for the specified program `prog`, which starts the editor in the current environment (SAP GUI or Eclipse) and performs the required authorization checks.
-   This method of calling the ABAP Editor should no longer be used. Instead, official ABAP Workbench interfaces, such as the function module `RS_TOOL_ACCESS` should be used. If only the properties of the editor control are needed, the `GUI` class `CL_GUI_SOURCEEDIT` or its subclass `CL_GUI_ABAPEDIT` is used.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abengui\_obsolete.html abentexteditor.html