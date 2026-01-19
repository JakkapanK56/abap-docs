---
title: "ABENABAP_OBJECT_SERVICES_PERSIST"
description: |
  ABENABAP_OBJECT_SERVICES_PERSIST - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_OBJECT_SERVICES_PERSIST.htm"
abapFile: "ABENABAP_OBJECT_SERVICES_PERSIST.html"
keywords: ["if", "class", "data", "ABENABAP", "OBJECT", "SERVICES", "PERSIST"]
---

The persistence service manages objects from persistent classes. Persistent classes are created by object-relational mappings in the [Class Builder](ABENCLASS_BUILDER_GLOSRY.html). The mappings are based on existing database tables in the ABAP Dictionary.

The attributes of these persistent objects can be stored persistently in the associated database table. Administration takes place using the class (class agent) generated for every persistent class and various interfaces implemented by the persistent class and its class agent. The persistent class and the class agent contain predefined generated components and can both be enhanced. The class agent is the class-specific part of the persistence service. The interfaces of the persistence service, on the other hand, are the same for all persistent classes.

-   [Persistence Service Overview](ABENOS_PERSISTENCE_TERMS.html)
-   [Components of the Persistence Service](ABENOS_PERSISTENCE_COMPS.html)
-   [Management States in the Persistence Service](ABENOS_PERSISTENCE_STATE.html)
-   [Object-Relational Mapping](ABENOS_PERSISTENCE_MAPPING.html)
-   [Inheritance of Persistent Classes](ABENOS_PERSISTENCE_INHERITANCE.html)
-   [Persistent Object References](ABENOS_PERSISTENCE_REFS.html)
-   [Saving Persistent Objects](ABENOS_PERSISTENCE_COMMIT.html)

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_object\_services.html