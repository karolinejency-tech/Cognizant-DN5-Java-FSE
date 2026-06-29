/* =========================================
   EXERCISE 1 - CONTROL STRUCTURES
   ========================================= */

/* Scenario 1:
   Apply 1% discount on loan interest rate
   for customers above 60 years
*/

DECLARE
    v_age NUMBER;
BEGIN
    FOR cust IN (SELECT CustomerID, DOB FROM Customers)
    LOOP
        v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, cust.DOB)/12);

        IF v_age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = cust.CustomerID;
        END IF;
    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Interest rates updated successfully.');
END;
/
------------------------------------------------------------

/* Scenario 2:
   Mark customers as VIP if balance > 10000
*/

BEGIN
    FOR cust IN (SELECT CustomerID, Balance FROM Customers)
    LOOP
        IF cust.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust.CustomerID;
        END IF;
    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('VIP customers updated successfully.');
END;
/
------------------------------------------------------------

/* Scenario 3:
   Print reminder for loans due within 30 days
*/

BEGIN
    FOR loan_rec IN (
        SELECT LoanID, CustomerID, EndDate
        FROM Loans
        WHERE EndDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer '
            || loan_rec.CustomerID
            || ' Loan '
            || loan_rec.LoanID
            || ' is due on '
            || loan_rec.EndDate
        );
    END LOOP;
END;
/