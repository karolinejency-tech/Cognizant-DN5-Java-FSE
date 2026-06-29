package com.cognizant.tdd;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ExceptionThrowerTest {

    @Test
    void testThrowException() {

        // Arrange
        ExceptionThrower exceptionThrower = new ExceptionThrower();

        // Act & Assert
        RuntimeException exception = assertThrows(
                RuntimeException.class,
                () -> exceptionThrower.throwException()
        );

        assertEquals("Exception thrown!", exception.getMessage());
    }
}