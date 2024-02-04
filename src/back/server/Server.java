package src.back.server;

import src.back.datasource.APIDatasource;
import src.back.datasource.EmailDatasource;
import src.back.handler.*;
import spark.Spark;

import java.util.ArrayList;
import java.util.List;

import static spark.Spark.after;

public class Server {
    private static ArrayList<List<String>> loadedCSV;
    private static List<String> header;
    private static Boolean hasHeader;
    private static Boolean isLoaded;

    public Server() {
        int port = 5555;

        Spark.port(port);
        after((request, response) -> {
            response.header("Access-Control-Allow-Origin", "*");
            response.header("Access-Control-Allow-Methods", "*");
        });

        ConnectionHandler connectionHandler = new ConnectionHandler(new APIDatasource());
        Spark.get("connections", connectionHandler);

        EmailHandler emailHandler = new EmailHandler(new EmailDatasource());
        Spark.get("email", emailHandler);


        Spark.init();
        Spark.awaitInitialization();

        System.out.println("Server started at http://localhost:" + port);
    }

}
