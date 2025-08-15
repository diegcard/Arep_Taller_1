package com.escuelaing.arep;

import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.Map;

public class Main {
    private static String BASE_URL = "https://campusvirtual.escuelaing.edu.co/moodle/pluginfile.php/222974/mod_resource/content/0/NamesNetworkClientService.pdf";
    public static void main(String[] args) throws IOException {

        URL url = new URL(BASE_URL);

        Map<String, List<String>> headers = url.openConnection().getHeaderFields();

        System.out.println("Headers for URL: " + BASE_URL);

        System.out.println("--------------------------------------------------");


    }
}