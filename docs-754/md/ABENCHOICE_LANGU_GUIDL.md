---
title: "Choosing the Language - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenchoice_langu_guidl.htm"
abapFile: "abenchoice_langu_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Structure and Style](ABENSTRUCTURE_STYLE_GUIDL.md) →  [Naming](ABENNAMING_GUIDL.md) → 

Choosing the Language

Background

The natural language that has established itself worldwide for computer programming is English. This is because the language elements in all significant programming languages have been taken from English and their syntax based on English grammar. ABAP is no exception. In fact, efforts have been made to guarantee correct English by giving additions of related statements different names, even if they have the same meaning. Well-known examples include the (now obsolete) additions VARYING and VARY of the statements DO and WHILE. Here, ABAP can even be viewed as a subset of the English language.

Rule

Use English names

Give your repository objects and your local program objects names that use English words only

Details

Using names in a language other than English looks unnatural (and inelegant) in programming languages whose own language elements are all in English. As well as this, English names make the source code accessible to as wide an audience as possible. Finally, using a different language throughout your code would be difficult due to the large number of English technical terms used in today's IT environment.

In instances where British and American spelling differ, use the American spelling. This is often shorter and more commonly used in IT.

Note

This rule applies regardless of the [original language chosen](ABENORIGINAL_LANGU_GUIDL.md "Guideline").

Bad Example

One of the most notorious examples of non-English names in ABAP is the component UZEIT of the structure SYST, plus its data element SYUZEIT. All other components (with the exception of the equally notorious DATUM (for date) and MANDT (for client)) are English terms or abbreviations.
