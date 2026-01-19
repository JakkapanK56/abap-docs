---
title: "ABENOS_PERSISTENCE_INHERITANCE"
description: |
  ABENOS_PERSISTENCE_INHERITANCE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOS_PERSISTENCE_INHERITANCE.htm"
abapFile: "ABENOS_PERSISTENCE_INHERITANCE.html"
keywords: ["delete", "do", "if", "case", "try", "method", "class", "data", "ABENOS", "PERSISTENCE", "INHERITANCE"]
---

Persistent classes can have subclasses. These subclasses are also persistent classes, in that they inherit the persistence mapping of the superclass to the database table or tables. The persistence mapping of the superclass is defined in the subclass. If not, the general polymorphic principle of inheritance, in which the consumer handles subclasses in the same way as superclasses, is violated.

The mapping information and attributes of all superclasses are included in the class agents of a persistent subclass. There are two different methods for passing on mappings.

The class agents of persistent classes that are in an inheritance relationship are not in a corresponding inheritance relationship. The same principle applies that a class agent only manages the objects of the corresponding classes and the subclass objects. As a result, private attributes of non-final persistent classes are not completely protected from reads or writes. Information that is to be protected must not be stored in private attributes of non-final persistent classes.

The methods `DELETE_PERSISTENT`, `REFRESH_PERSISTENT`, and `RELEASE` of the interface `IF_OS_FACTORY` of the class agent behave polymorphically. This means that, for a specified managed object, these methods can also be called in the class agent of a (non-abstract) superclass of this object. At runtime, the passed reference can be used to define the type of the managed object and call the relevant class agent of the subclass.

If an additional type field (type identifier) exists in one of the tables, DDIC database views, or structures that is mapped to the root class of the inheritance hierarchy, the methods `GET_PERSISTENT`, `DELETE_PERSISTENT` plus `GET_PERSISTENT_BY_KEY` and `GET_PERSISTENT_BY_OID` of the interface `IF_OS_CA_PERSISTENCY` of the class agent behave polymorphically. This means that the agent of a (non-abstract) persistent class can also be used to use the key to read (business key or GUID) or delete (business key) a persistent object that belongs to a persistent subclass of the classes managed by this class agent. This is done by delegation to the class agent of the subclass, which can be determined at runtime using the information in the type identifier.

Specifying an additional type identifier ensures that the (business) key is unique in the entire inheritance hierarchy. It is therefore not possible to create a managed object with the same key as a managed object of another subclass, superclass, or the subclasses of this superclass.

-   Vertical mapping
-   In the subclass, the persistent attributes that were additionally defined in the subclass are mapped to separate tables, DDIC database views, or structures. The general rule for multiple table mapping applies: The keys for the additional tables, DDIC database views, or structures must be the same as the keys for the superclass tables, DDIC database views, or structures. The key fields are therefore mapped in the superclass and the subclass. Thus, additional attributes and their associated `GET` and `SET` methods are added to the subclass, without affecting the attributes and methods of the superclass. In the superclass, all persistent attributes must be mapped.
-   A special case of vertical mapping exists when the persistent attributes that were additionally defined in the subclass are mapped to the same tables, DDIC database views, or structures as the superclass attributes. To find out the class to which a table entry belongs, a special field of the type `OS_GUID` must exist in one of the tables, DDIC database views, or structures and be used as a type identifier.
-   Horizontal mapping
-   If a persistent superclass is abstract, persistent attributes can be defined there without using concrete mappings. In every direct subclass, a mapping must be defined for the persistent attributes of the superclass. The subclasses can be mapped to different tables, database views, or structures. The system does not check whether the subclasses are mapped to different tables or structures.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_object\_services.html abenabap\_object\_services\_persist.html