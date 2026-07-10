---
title: "Anonymous Containers - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunknown_container_guidl.htm"
abapFile: "abenunknown_container_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [Assignments, Calculations, and Other Types of Data Access](ABENASSIGNMENT_ACCESS_GUIDL.md) → 

Anonymous Containers

Background

Anonymous containers are character-like or byte-like data objects of type c or string type (or x/xstring type). Data objects of other types (especially structures) are assigned using [casting](ABENCASTING_GUIDL.md "Guideline") to these objects, to store them persistently in these containers.

Rule

Do not use character or byte fields as containers

Do not store structured data in unstructured character-like or byte-like variables.

Details

The direct storage of structured data in unstructured character-like or byte-like data objects is problematic, particularly with data exchanges using remote function calls (RFC), input/output through the file system of the [host computer](ABENHOST_COMPUTER_GLOSRY.md "Glossary Entry") or output to a printer. Unexpected results can occur due to platform-specific byte orders (endianness), alignment requirements and different character sets (code pages).

If, for example, a container is saved and imported from an AS Instance whose [host computer](ABENHOST_COMPUTER_GLOSRY.md "Glossary Entry") has a different byte order, problems occur if the container is used for content for which the byte order is critical. In other words, the numeric fields of types i, decfloat16, decfloat34 and f. The order of the character-like data objects of bytes is also dependent on the platform in the character representation [UCS-2](ABENUCS2_GLOSRY.md "Glossary Entry") of the programming language ABAP.

Even without these technical problems, it can difficult to correctly import data that has been stored as described above. You usually have to perform another casting operation for the data type of the data stored in the container. However, as the relevant type information is not saved with the data, it might not be possible to perform type-friendly casting.

Note

If data needs to be saved in an unstructured container, the statement EXPORT ... TO DATA BUFFER can be used. This type of data storage is robust compared to different platform properties. However, you cannot use EXPORT and IMPORT to directly edit reference variables or instances referenced by them. As a workaround, you can serialize these variables and instances for storage by using the statement CALL TRANSFORMATION. A class must include the IF\_SERIALIZABLE\_OBJECT tag interface, so that its objects can be serialized using CALL TRANSFORMATION.
