---
title: "ABENLDB"
description: |
  ABENLDB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLDB.htm"
abapFile: "ABENLDB.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENLDB"]
---

A logical database is a special development object created and maintained in the Logical Database Builder. Its main component is an ABAP program that provides other ABAP programs with data from the nodes of a hierarchical tree structure. The most common use of logical databases is to read data from database tables, however other applications are feasible. The framework for using logical database is integrated into the ABAP runtime framework.

Logical databases provide a hierarchical view of database tables or structures in the [ABAP Dictionary](ABENABAP_DICTIONARY.html) linked using foreign key dependencies. If parts of these dependencies form [tree hierarchies](ABENTREE_HIERARCHY_GLOSRY.html), logical databases can read data from database tables that are components of these structures. In classic ABAP, logical databases are usually used in these hierarchical structures for the IPO principle (input, processing, output). The actual database accesses are then wrapped in the logical database. The logical database reads the data, stores it locally in the program, if necessary, and passes it row by row to an application program via an [interface work area](ABENLDB_INTERFACES.html).

In addition to reusing predefined functions for reading data from database tables, logical databases can be implemented for further central tasks, such as defining uniform selection screens, central authorization checks, or making centralized enhancements to performance.

-   [Logical Databases - Components](ABENLDB_OVIEW.html)
-   [Logical Databases - Statements](ABENLDB_ABAP_STATEMENTS.html)
-   [Logical Databases - Use](ABENLDB_USAGE.html)
-   [Logical Databases - Examples](ABENLDB_EXAMPLES.html)

-   Logical databases should no longer be used because they are based on cross-program usage of global data, implicit subroutine calls and [reporting event control](ABENABAP_PROCESSING_BLOCKS.html), and therefore do not comply with modern concepts. No new logical databases should be created. Instead a corresponding service should be provided using a global class.
-   The function module `LDB_PROCESS` can be used to access existing logical databases. This function module can be also called from a method.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html