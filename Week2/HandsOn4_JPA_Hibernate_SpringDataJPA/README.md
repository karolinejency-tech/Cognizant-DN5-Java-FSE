# HandsOn 4 - Difference between JPA, Hibernate and Spring Data JPA

## JPA (Java Persistence API)
- JSR 338 Specification for persisting, reading and managing data from Java objects.
- Does not contain concrete implementation.
- Hibernate is one implementation of JPA.

## Hibernate
- ORM (Object Relational Mapping) tool.
- Implements JPA specification.
- Handles mapping Java objects to database tables.

## Spring Data JPA
- Built on top of JPA.
- Reduces boilerplate code.
- Provides repository interfaces such as JpaRepository.
- Manages transactions and simplifies database operations.

## Comparison

### Hibernate Example

```java
Session session = factory.openSession();
Transaction tx = session.beginTransaction();
session.save(employee);
tx.commit();
session.close();
```

### Spring Data JPA Example

```java
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}

@Autowired
private EmployeeRepository employeeRepository;

@Transactional
public void addEmployee(Employee employee) {
    employeeRepository.save(employee);
}
```

## Conclusion

- JPA is a specification.
- Hibernate is an implementation of JPA.
- Spring Data JPA is an abstraction over JPA that reduces coding effort.
