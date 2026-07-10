---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOBS_INTERN_SYSTEM_FIELD_GUIDL.html"
abapFile: "ABENOBS_INTERN_SYSTEM_FIELD_GUIDL.html"
type: "abap-reference"
---

## Background

Not all system fields are designed to be used in application programs. All available system fields are components of the structure `SYST` in ABAP Dictionary (or components of the structure `sy` in the debugger). The meaning of the components is included in the accompanying description. Any system fields that are [obsolete](ABENSYSTEM_FIELDS_OBSOLETE.md) or only to be [used internally](ABENSYSTEM_FIELDS_INTERNAL.md) are clearly marked.

## Rule

**Do not use obsolete or internal system fields**

In application programs, do not use system fields flagged as obsolete or for internal use only in ABAP Dictionary or in the ABAP documentation.

## Details

The behavior of obsolete and internal system fields is undefined. This means that ABAP application programs must not make any assumptions about the content of these system fields.

## Bad Example

The following source code shows how the system field `sy-fodec`, flagged for internal use, is used illegally in the structure `SYST` after the statement `DESCRIBE FIELD` to count the number of decimal places in a data object.

```
DATA dobj TYPE p LENGTH 8 DECIMALS 2. 
DATA type TYPE c LENGTH 1. 
DATA decimal TYPE i. 
DESCRIBE FIELD dobj TYPE type. 
decimals = sy-fodec.
```

## Good Example

The following source code demonstrates how decimal places can be counted correctly using the appropriate addition of the statement `DESCRIBE FIELD`.

```
DATA dobj TYPE p LENGTH 8 DECIMALS 2. 
DATA type TYPE c LENGTH 1. 
DATA decimals TYPE i. 
DESCRIBE FIELD dobj TYPE type DECIMALS decimals.
```
