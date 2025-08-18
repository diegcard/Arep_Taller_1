package com.escuelaing.arep;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.fail;
import org.junit.jupiter.api.Test;

/**
 * Unit tests for HttpServer class.
 */
class HttpServerTest {
    
    @Test
    void testServerCreation() {
        HttpServer server = new HttpServer();
        assertNotNull(server);
    }
    
    @Test
    void testMainMethodExists() {
        // Verificar que el método main existe
        try {
            HttpServer.class.getMethod("main", String[].class);
        } catch (NoSuchMethodException e) {
            fail("El método main debe existir");
        }
    }
}