---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTABLE_WORK_AREA_GUIDL.html"
abapFile: "ABENTABLE_WORK_AREA_GUIDL.html"
type: "abap-reference"
---

## Exception

If dynpro fields in [classic dynpros](ABENUSER_INTERFACES_GDL.md) are defined with reference to flat structures in ABAP Dictionary, the identically named global data objects of the ABAP program must be declared with the statement `TABLES`. Otherwise, the data objects of the ABAP program are not linked to the dynpro fields, and their content cannot be accessed. In addition, `TABLES` is also required for declaring specific work areas when handling function codes of selection screens.

## Note

The restriction on the statement `TABLES` to this last remaining technical requirement, that is, the communication with classic dynpros and selection screens, can also be derived from other rules of these guidelines. However, since the use of the statement `TABLES` instead of the statement `DATA` is still very popular among experienced ABAP developers, the rule above explicitly stresses that it is not allowed.
