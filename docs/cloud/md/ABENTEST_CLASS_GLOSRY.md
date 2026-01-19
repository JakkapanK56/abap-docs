---
title: "ABENTEST_CLASS_GLOSRY"
description: |
  ABENTEST_CLASS_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTEST_CLASS_GLOSRY.htm"
abapFile: "ABENTEST_CLASS_GLOSRY.html"
keywords: ["do", "method", "class", "ABENTEST", "CLASS", "GLOSRY"]
---

A test class in a narrower sense is a special local or global [class](ABENCLASS_GLOSRY.html) in which tests for [ABAP Unit](ABENABAP_UNIT_GLOSRY.html) are implemented in the form of test methods. [Test methods](ABENTEST_METHOD_GLOSRY.html) can be implemented in a test class. A test class groups together related tests that use the same [fixture](ABENFIXTURE_GLOSRY.html). Test classes are defined using the [`FOR TESTING`](ABAPCLASS_FOR_TESTING.html) addition of the [`CLASS`](ABAPCLASS_DEFINITION.html) statement. Test classes can only be used as part of [test runs](ABENTEST_RUN_GLOSRY.html) and, by default, are not generated in production systems. Test doubles and other auxiliary classes required for testing should also be defined with [`FOR TESTING`](ABAPCLASS_FOR_TESTING.html) but do not contain any test methods and are not test classes in a narrower sense.

ABENABALA\_GLOSSARY.html