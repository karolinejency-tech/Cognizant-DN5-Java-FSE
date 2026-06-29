package com.cognizant.tdd;

import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class VerifyInteractionTest {

    @Test
    public void testVerifyInteraction() {

        // Arrange
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Act
        MyService service = new MyService(mockApi);
        service.fetchData();

        // Assert
        verify(mockApi).getData();
    }
}